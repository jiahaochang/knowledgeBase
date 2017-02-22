import * as React from 'react'

"use strict";
import MonthSelfAnalysis = require('../../../TermAnalysis/MonthSummary/Component/MonthSelfAnalysis')
import CardTitleWithLine = require('../../../../common/Component/CardTitleWithLine')
import TextareaWithButton = require('../../../../common/Component/TextareaWithButton')
import MonthSelect = require('./MonthSelect')
import TextareaWithTitle = require('common/Component/TextareaWithTitle')
import {message} from 'antd'
import {getYearMonthsByTermID} from 'common/commonFunc'
//调用API
import {getDataByActionIDWithQueryAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'
import * as teacherActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {isEmptyObject} from "../../../../common/commonFunc";
import {getUserIDFromStorage} from 'common/storageUtil'
var monthList = [];
const defaultPlaceHolder = "该学生尚未填写当前学期的月度总结";
interface StudentMonthSummaryProps extends React.Props<StudentMonthSummary> {
    termID: string,
    studentID: string
}

interface StudentMonthSummaryState {
    currentMonth?: string,
    monthSummaryMap?:any,
    currentStudentID?:string
}


/**
 * 班主任评价同学页面 查看同学月度总结
 */
class StudentMonthSummary extends React.Component<StudentMonthSummaryProps, StudentMonthSummaryState> {
    constructor(props) {
        super(props);
        this.state = {
            monthSummaryMap:{}
        }
        this.onMonthChange = this.onMonthChange.bind(this);
        this.monthEvaluate = this.monthEvaluate.bind(this);
    }

    componentWillMount(){
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props){
        var this_ = this;
        var {termID, studentID} = this.props;
        var yearMonths = getYearMonthsByTermID(termID);
        var queryObj = {
            yearMonths:yearMonths,
            studentUserID:studentID
        }
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_MONTHSUMMARY,queryObj,function (response) {
            var monthSummary = response.result.monthSummaryInfos;
            //将monthSummary转成map, 以便通过月份，遍历变化的信息
            var monthSummaryMap = {};
            for(let item of monthSummary){
                monthSummaryMap[item.month] = item;
                monthList.push(item.month);
            }
            this_.setState({
                monthSummaryMap:monthSummaryMap,
                currentMonth:monthSummary[0].month,
                currentStudentID:props.studentID
            });
        })

    }

    onMonthChange(month){
        this.setState({
            currentMonth: month
        })
    }

    //班主任评语submit
    monthEvaluate(word){
       if(!isEmptyObject(word)){
           var map = {evaluationContent:word};
           var postData = {
               studentUserID:this.state.currentStudentID,
               year:this.state.monthSummaryMap[this.state.currentMonth].year,
               month:this.state.currentMonth,
               teacherUserID:getUserIDFromStorage(),
               teacherMonthSummaryEvaluation:map
           }
           getDataByActionIDWithQueryAsync(teacherActionTypes.SET_TEACHER_MONTHEVALUATE,postData,function (response) {
               message.success("保存成功");
           })
       }
    }


    render() {
        var this_ = this;
        var teacherReview = !isEmptyObject(this.state.monthSummaryMap)?this.state.monthSummaryMap[this.state.currentMonth].teacherMonthSummaryEvaluation.evaluationContent:"";
        return (
            <div className="blueBack am-padding-sm">
                <MonthSelect onMonthChange={this.onMonthChange} monthList={monthList} currentMonth={this.state.currentMonth}/>

                <CardTitleWithLine title="班主任月度评语" className="am-margin-bottom-sm am-margin-top"/>
                <TextareaWithButton content={teacherReview}  submit={this.monthEvaluate}/>

                <CardTitleWithLine title="学生月度总结" className="am-margin-top am-margin-bottom"/>
                {
                    !isEmptyObject(this.state.monthSummaryMap) &&
                    this.state.monthSummaryMap[this.state.currentMonth].stuSummaryInfos.map(function(item, index){
                            var schoolSummaryTitle= item.schoolSummaryTitle;
                            var summaryContent = item.stuSummaryContentInfo.summaryContent;
                            return <TextareaWithTitle key={index}  minLength={schoolSummaryTitle.summaryLimit} title={schoolSummaryTitle.summaryTitle} buttonShow={false}
                                                      score={schoolSummaryTitle.integralScore} placeholder={defaultPlaceHolder} className={"am-margin-bottom"} content={summaryContent} />
                        })

                }



            </div>
        )
    }
}

export = StudentMonthSummary