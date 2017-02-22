import * as React from 'react'
import TextareaWithTitle = require('common/Component/TextareaWithTitle')
import MouthHeader = require('./MouthHeader')
import CollapsableCard = require('common/Component/CollapsableCard')
import CardTitleWithLine = require('common/Component/CardTitleWithLine')
import {defaultMonthContent,defaultMonthTheme} from 'common/Config/CommonConfig'
import {message} from 'antd'

//调用API
import {getDataByActionIDWithQueryAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'

"use strict";

interface MonthSelfAnalysisProps extends React.Props<MonthSelfAnalysis> {
    record: any
}

interface MonthSelfAnalysisState {

}

/**
 * 月度分析 textarea
 */
class MonthSelfAnalysis extends React.Component<MonthSelfAnalysisProps, MonthSelfAnalysisState> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};

    handleSubmit(schoolSummaryTitleID:string, words:string):void{
        console.log(words + schoolSummaryTitleID);
        var postData = {
            month:this.props.record.month,
            year:this.props.record.year,
            schoolSummaryTitleID:schoolSummaryTitleID,
            summaryContent:words
        };
        getDataByActionIDWithQueryAsync(actionTypes.SET_STUDENT_MONTHSUMMARY,postData,function (response) {
           message.success("保存成功");
        })
    }

    render() {
        var this_ = this;
        var schoolMonthThemeInfo = this.props.record.schoolMonthThemeInfo;
        var evaluationContent = this.props.record.teacherMonthSummaryEvaluation.evaluationContent;
        return (
            <div >

                <CollapsableCard  className="blueBack am-margin-bottom"  titleWithClick={<MouthHeader title ="月度主题" addtitle={!schoolMonthThemeInfo.monthTheme?defaultMonthTheme:schoolMonthThemeInfo.monthTheme}  scaleFlag={true}   />}
                                 collapsableElement={<div className="content-with-likeAndcomment"><div className="content">{!schoolMonthThemeInfo.content?defaultMonthContent:schoolMonthThemeInfo.content}</div></div> }
                />

                {
                    this.props.record.stuSummaryInfos.map(function(item, index){
                        var schoolSummaryTitle= item.schoolSummaryTitle;
                        var summaryContent = !item.stuSummaryContentInfo.summaryContent?"":item.stuSummaryContentInfo.summaryContent;
                        return <TextareaWithTitle key={index} submit={this_.handleSubmit.bind(this_, schoolSummaryTitle.schoolSummaryTitleID)} minLength={schoolSummaryTitle.summaryLimit} title={schoolSummaryTitle.summaryTitle}
                                                  score={schoolSummaryTitle.integralScore} placeholder={schoolSummaryTitle.summaryHint} className={"am-margin-bottom"} content={summaryContent} />
                    })
                }

                <div className="blueBack">
                    <CardTitleWithLine title="班主任月度评语" />
                    <div className="teacher-comments-box">
                        <div className="sub-div">{!evaluationContent?"尚未填写":evaluationContent}</div>
                    </div>
                </div>



            </div>
        )
    }
}

export = MonthSelfAnalysis