import * as React from 'react'

"use strict";
import SelectWithName = require('./SelectWithName')
import CardTitleWithLine = require('common/Component/CardTitleWithLine')
import TextareaWithButton = require('common/Component/TextareaWithButton')
import {Button,Input,Row,Col,message} from 'antd'
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as ResponseCacheContext from 'common/ResponseCacheContext'
import {isEmptyObject} from 'common/commonFunc'
import {defaultMinLength,defaultMaxLength} from 'common/Config/TermAnalysisConfig'

import {setTeacherEvaluatePostData,getTeacherEvaluatePostData} from '../../TeacherPersnalPageContext'
import * as context from '../../TeacherPersnalPageContext'
import TermOverallEvaluation = Nicezy.TermOverallEvaluation;
import StuTermQualityEvaluations = Nicezy.StuTermQualityEvaluations;
import {getUserIDFromStorage} from 'common/storageUtil'
var emptyText = "请班主任填写总体评价";
interface TeacherEvaluateProps extends React.Props<TeacherEvaluate> {
    termID: string,
    evaluateStudentUserID: string
}

interface TeacherEvaluateState {
    stuTermQualityEvaluations?:Array<StuTermQualityEvaluations>,
    textareaValue?:string,
    buttonSubmitShow?:boolean
}

class TeacherEvaluate extends React.Component<TeacherEvaluateProps, TeacherEvaluateState> {
    constructor(props) {
        super(props);
        this.state = {
            stuTermQualityEvaluations:[],
            textareaValue:"",
            buttonSubmitShow:false
        }
        this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        var {termID, evaluateStudentUserID} = props;
        var this_ = this;
        //清空context
        setTeacherEvaluatePostData({});
        if (!context.getEvaluateStudentDict()){
            var queryObj ={teacherUserID:getUserIDFromStorage()};
            var response = ajaxUtil.getDataFromContextByActionID(ResponseCacheContext.getResponseCache(),ActionTypes.READ_TEACHER_EVALUATESTUDENTDICT,queryObj);
            var dict = response.result.evaluateStudentDict;
            context.setEvaluateStudentDict(dict);
        }
        
        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_TERMEVALUATE, {termID, evaluateStudentUserID}, function (response) {
            var termOverallEvaluation = response.result.termOverallEvaluation;
            var textareaValue = !termOverallEvaluation.termOverallEvaluationContent?"":termOverallEvaluation.termOverallEvaluationContent;
            this_.setState({
                stuTermQualityEvaluations:response.result.stuTermQualityEvaluations,
                textareaValue:textareaValue,
                buttonSubmitShow:isEmptyObject(termOverallEvaluation.termOverallEvaluationContent)
            })
        });

    }

    getEvaluationItems(rootQualityCategoryID, qualityCategoryID){
        var evaluateStudentDict = context.getEvaluateStudentDict();
        
        var dict = evaluateStudentDict.filter(function (item, index, items) {
            return item.rootQualityCategoryID === rootQualityCategoryID;
        })[0];

        return dict.evaluationItems.filter(function (item, index, items) {
            return item.qualityCategoryID === qualityCategoryID
        })
    }

    handleChangeTextarea(e){
        var strings = e.target.value;
        var parentsForm = $(e.currentTarget).parents(".ant-form-item-control");
        var childrenExplain = parentsForm.children(".ant-form-explain");
        if(strings.length<defaultMinLength){
            parentsForm.addClass("has-error");
            childrenExplain.find(".tips").text("请输入不少于"+defaultMinLength+"个字符");
        }else if(strings.length>defaultMaxLength){
            parentsForm.addClass("has-error");
            childrenExplain.find(".tips").text("请输入少于"+defaultMaxLength+"个字符");
        }else{
            parentsForm.removeClass("has-error");
            childrenExplain.find(".tips").text("");
        }
        childrenExplain.find(".currentInputLength").text("当前已输入"+strings.length+"个字");
        this.setState({
            textareaValue: strings,
        });
    }

    handleSubmit(){
        var this_ = this;
        if($(".ant-form-item-control").hasClass("has-error") || isEmptyObject(this.state.textareaValue)){
            message.error(emptyText);
        }else{
            var postData = {};
            postData["teacherUserID"] = getUserIDFromStorage();
            postData["studentUserID"] = this.props.evaluateStudentUserID;
            postData["termID"] = this.props.termID;
            postData["termOverallEvaluation"] = {
                termOverallEvaluationContent:this.state.textareaValue
            };
            var stuTermQualityEvaluations = [];
            var stuTermQualityEvaluationsMap = getTeacherEvaluatePostData();
            for(var key in stuTermQualityEvaluationsMap){
                stuTermQualityEvaluations.push(stuTermQualityEvaluationsMap[key]);
            }
            postData["stuTermQualityEvaluations"] = stuTermQualityEvaluations;

            //保存 学生综合评价
            ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.SET_TEACHER_TERMEVALUATE,postData, function (response) {
                message.success("保存成功");
                this_.setState({
                    buttonSubmitShow:false
                })

            });

        }

    }
    
    render() {
        
        var this_ = this;
        var rows = Math.ceil(defaultMaxLength/100/3*2);
        rows = rows>4?rows:4;
        //select带不同颜色
        var selectColors = ["blueBack","greenBack","purpleBack","yellowBack"];
        return (
            <div className="blueBack" style={{padding:"0px 20px 20px"}} key={this.props.evaluateStudentUserID}>
                <div className="text-colorLine am-margin-bottom-sm">
                    学期整体评价
                    <a className="rightText blackLink">
                        学生综合素质档案<i className="fa fa-chevron-right am-padding-left-xs"></i>
                    </a>
                </div>

                <Row key={this.props.evaluateStudentUserID} >
                    <Col span={24}>
                        <div className="ant-form-item-control">
                        <span className="ant-input-wrapper">
                            <Input type="textarea" rows={rows} value={this.state.textareaValue} placeholder={isEmptyObject(this.state.textareaValue)?emptyText:""} onChange={this.handleChangeTextarea} />
                        </span>
                            <div className="ant-form-explain">
                                <span className="tips"></span>
                                <span className="pull-right currentInputLength"></span>
                            </div>
                        </div>
                    </Col>
                </Row>



                {
                    this.state.stuTermQualityEvaluations &&
                    this.state.stuTermQualityEvaluations.map(function (item, index) {
                        var colorClassName = "am-margin-top "+selectColors[index];
                        var selectContextMap = {};
                        selectContextMap["rootQualityCategoryID"] = item.rootQualityCategoryID;
                        selectContextMap["rootQualityCategoryName"] = item.rootQualityCategoryName;
                        return (
                            <div className={colorClassName} key={index}>
                                <CardTitleWithLine title={item.rootQualityCategoryName} className="am-margin-bottom-sm "/>
                                {
                                    item.stuTermQualityEvaluation.map(function(single, singleIndex){
                                        var isFinished = !single.evaluationItemID ?false:true;
                                        if (isFinished){
                                            return (
                                                <SelectWithName   className="am-margin-bottom-xs"  key={"evaluated"+singleIndex} name={single.qualityCategoryName} isFinished={isFinished} content={single.evaluationItemContent}/>
                                            )
                                        }else{
                                            var rootQualityCategoryID = item.rootQualityCategoryID;
                                            var qualityCategoryID = single.qualityCategoryID;
                                            var evaluationItems = this_.getEvaluationItems(rootQualityCategoryID, qualityCategoryID);
                                            var options = evaluationItems.map(function (evaluationItem, evaluationItemIndex) {
                                                return {
                                                    ID:evaluationItem.evaluationItemID,
                                                    value:evaluationItem.evaluationItemContent,
                                                }
                                            });

                                            return (
                                                <SelectWithName className="am-margin-bottom-xs"  selectContextMap={selectContextMap}   id={single.qualityCategoryID}    key={"singleIndex" + singleIndex} name={single.qualityCategoryName} isFinished={isFinished} options={options}/>
                                            )
                                        }

                                    })
                                }

                            </div>
                        )
                    })
                }

                {
                    this.state.buttonSubmitShow &&
                        <div className="am-text-center">
                            <Button className="btn-orange" size="large" onClick={this.handleSubmit}>提交</Button>
                        </div>
                }

            </div>
        )
    }
}

export = TeacherEvaluate