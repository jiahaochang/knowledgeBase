import * as React from 'react'
import {Row, Col} from 'antd'
"use strict";
import PersonalBasicInfo = require('common/Component/PersonalBasicInfo')
import SelectTerm = require('common/Component/SelectTerm')
import ClassMateEvaluateList = require('../../TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateList')
import TeacherEvaluateAndStudentSummary = require('./Component/TeacherEvaluateAndStudentSummary')
import {getTermIDFromStorage,getUserIDFromStorage} from "common/storageUtil";
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import EvaluateStudentByScore = Nicezy.EvaluateStudentByScore;

interface EvaluateStudentProps extends React.Props<EvaluateStudent> {
    routeParams?:any,
    location?: any
}

interface EvaluateStudentState {
    currentStudentID?: string,
    currentTerm?: string,
    allClassmates?: Array<EvaluateStudentByScore>
}

/**
 * 班主任老师 评价班级内学生
 */
class EvaluateStudent extends React.Component<EvaluateStudentProps, EvaluateStudentState> {
    constructor(props) {
        super(props);
        this.state = {
            currentStudentID: this.props.location.query.studentID,
            currentTerm: getTermIDFromStorage()
        };
        this.onStudentChange = this.onStudentChange.bind(this);
        this.onTermChange = this.onTermChange.bind(this);
    }

    onTermChange(termAfterChange){
        this.setStateByTermID(termAfterChange);
    }

    onStudentChange(studentID){
        this.setState({
            currentStudentID: studentID
        })
    }

    componentWillMount(){
        this.setStateByTermID(this.state.currentTerm)
    }

    setStateByTermID(currentTerm) {
        //ajax get all classmates
        var this_ = this;
        var queryObj = {
            schoolTerm:currentTerm,
            fromUserID:getUserIDFromStorage()
        }
        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_EVALUATESTUDENT_STAR,queryObj,function (response) {
            var allClassmates = response.result.evaluateStudentByScores;
            this_.setState({
                currentStudentID: this_.state.currentStudentID?this_.state.currentStudentID:allClassmates[0].studentUserID,
                allClassmates: allClassmates,
                currentTerm: currentTerm
            })
        });
    }

    render() {
        return (
            <div>
                <Row className="am-margin-top">
                    <Col span={17} className="am-padding-right-sm">
                        <PersonalBasicInfo className="block-box-shadows am-margin-bottom"/>
                        <div className="block-box-shadows">
                            {
                                this.state.currentStudentID && this.state.currentTerm &&
                                <TeacherEvaluateAndStudentSummary termID={this.state.currentTerm} studentID={this.state.currentStudentID}/>
                            }
                        </div>
                    </Col>
                    <Col span={7} className="block-box-shadows">
                        <SelectTerm onTermChange={this.onTermChange}  currentTerm={this.state.currentTerm}/>
                        <div className=" am-cf am-margin-bottom">
                            {
                                this.state.currentStudentID && this.state.currentTerm &&
                                <ClassMateEvaluateList currentTerm={this.state.currentTerm} currentClassmateID={this.state.currentStudentID} allClassmates={this.state.allClassmates} onClassmateChange={this.onStudentChange}/>
                            }

                        </div>
                    </Col>
                </Row>
            </div>

        )
    }


}

export = EvaluateStudent