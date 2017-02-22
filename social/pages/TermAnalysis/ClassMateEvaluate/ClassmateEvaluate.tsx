import * as React from 'react'
import {Row,Col,Rate} from 'antd'
import PersonalBasicInfo = require('common/Component/PersonalBasicInfo')
import Impression = require('pages/HomePage/Component/Impression')
import {SchoolTermEnum} from "common/Module/SchoolTerm";
import RankState = require('common/Component/RankState')
import ClassMateEvaluateList = require('pages/TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateList')
import {getTermIDFromStorage} from "common/storageUtil";
import EvaluateStudentByScore = Nicezy.EvaluateStudentByScore;
import {defaultStarValues} from 'common/Config/CommonConfig'
"use strict";

//调用API
import {getDataByActionIDWithQueryAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'
import {RoleEnum} from "common/Module/Role";

interface ClassmateEvaluateProps extends React.Props<ClassmateEvaluate> {
}

interface ClassmateEvaluateState {
    currentStudentID?: string,
    currentStudentName?:string,
    currentTerm?: SchoolTermEnum,
    allClassmates?: Array<EvaluateStudentByScore>,
    studentWithScoreMySelf?:any

}
/**
 * 同学互评
 */
class ClassmateEvaluate extends React.Component<ClassmateEvaluateProps, ClassmateEvaluateState> {
    constructor(props) {
        super(props);
        this.state = {
            currentStudentID: "",
            currentStudentName:"",
            currentTerm: getTermIDFromStorage()
        };
        this.onStudentChange = this.onStudentChange.bind(this);
        this.onTermChange = this.onTermChange.bind(this);
    }

    onTermChange(termAfterChange: SchoolTermEnum){
        this.setStateByTermID(termAfterChange);
    }

    onStudentChange(studentID,studentName){
        this.setState({
            currentStudentID: studentID,
            currentStudentName:studentName
        })
    }

    componentWillMount(){
        this.setStateByTermID(this.state.currentTerm);
    }

    setStateByTermID(currentTerm:SchoolTermEnum) {
        var this_ = this;
       getDataByActionIDWithQueryAsync(actionTypes.GET_EVALUATE_STUDENT_STAR,{termID:currentTerm},function (response) {
            var allClassmates = response.result.evaluationToClassmates;
           getDataByActionIDWithQueryAsync(actionTypes.GET_EVALUATE_STUDENT_MYSELF_STAR,{termID:currentTerm},function (response) {
               var studentWithScoreMySelf = response.evaluationFromClassmates;
               if(!studentWithScoreMySelf.qualityEvaluationToClassmatesFinished){
                   for (var i=0; i<studentWithScoreMySelf.qualityEvaluations.length; i++){
                       studentWithScoreMySelf.qualityEvaluations[i].evaluationScore = defaultStarValues;
                   }
               }
               this_.setState({
                   currentStudentID: allClassmates[0].studentUserID,
                   currentStudentName:allClassmates[0].name,
                   allClassmates: allClassmates,
                   currentTerm: currentTerm,
                   studentWithScoreMySelf:studentWithScoreMySelf
               })
           });

        });
    }

    static defaultProps = {
    };

    render() {
        return (
            <div>
                {
                    this.state.currentStudentID && this.state.currentTerm &&
                    <Row>
                        <Col span={17} className="am-padding-right-sm">
                            <PersonalBasicInfo  roleEnum={RoleEnum.student} userID={this.state.currentStudentID} className="block-box-shadows am-margin-bottom"></PersonalBasicInfo>
                            <div className="block-box-shadows">
                                <Impression currentStudentID={this.state.currentStudentID} currentStudentName={this.state.currentStudentName} />
                            </div>
                        </Col>
                        <Col span={7} className="block-box-shadows am-margin-bottom-xs">
                            <RankState onTermChange={this.onTermChange} termSelectable={true} onlyTermSelect={true} currentTerm={this.state.currentTerm}/>
                            <div className="student-evaluation-desc">
                                <div className="blue-title">同学互评</div>
                                <div>请点击下方头像对同学进行各个维度的素质评价</div>
                            </div>
                            <div className=" am-cf am-margin-bottom">
                                <ClassMateEvaluateList currentClassmateID={this.state.currentStudentID} allClassmates={this.state.allClassmates} onClassmateChange={this.onStudentChange}/>
                            </div>
                            <div className="student-evaluation-desc">
                                <div className="blue-title">我的得分</div>
                                <div>提示：在同学都打完分之后才会显示你的得分</div>
                            </div>
                            {
                                this.state.studentWithScoreMySelf.qualityEvaluations.map(function (item, index) {
                                    var currentValue = Number(item.evaluationScore);
                                    var key = item.qualityCategoryID + "_" + index;
                                    return (
                                        <div className="ClassMateEvaluateListStarDiv" key={key}>
                                            <div className="ClassMateEvaluateListStarWords">{item.qualityCategoryName}</div>
                                            <Rate value={currentValue} disabled={true}  allowHalf/>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                }

            </div>
        )
    }
}

export = ClassmateEvaluate