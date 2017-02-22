import * as React from 'react'
import {Rate, Button,message} from 'antd'
import Immutable = require('immutable')
"use strict";
import EvaluateStudentByScore = Nicezy.EvaluateStudentByScore;
import QualityEvaluationWithScore = Nicezy.QualityEvaluationWithScore;
import {getDataByActionIDWithQueryAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {defaultStarValues} from 'common/Config/CommonConfig'
import {getUserIDFromStorage} from 'common/storageUtil'

interface ClassMateEvaluateListEvaluateStarsProps extends React.Props<ClassMateEvaluateListEvaluateStars> {
    studentWithScore: EvaluateStudentByScore,
    currentTerm?:string
}

interface ClassMateEvaluateListEvaluateStarsState {
    qualityEvaluationFinished?: boolean,
    qualityEvaluations?: Array<QualityEvaluationWithScore>,
    canSubmit?: boolean
}

/**
 * 同学互评打分的星星
 * 如果已经评价过，直接显示星星
 * 如果没有评价过，显示默认值，及提交，提交后
 */
class ClassMateEvaluateListEvaluateStars extends React.Component<ClassMateEvaluateListEvaluateStarsProps, ClassMateEvaluateListEvaluateStarsState> {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentWillMount(){
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)){
            this.setStateByProps(nextProps)
        }
    }

    setStateByProps(props){
        var finished = props.studentWithScore.qualityEvaluationFinished;
        var qualityEvaluations = props.studentWithScore.qualityEvaluations;
        //若没有完成评价，以防后台出错，前台默认将分数=默认值
        if(!finished){
            for (var i=0; i<qualityEvaluations.length; i++){
                qualityEvaluations[i].evaluationScore = defaultStarValues;
            }
        }
        this.setState({
            qualityEvaluationFinished: finished,
            qualityEvaluations:qualityEvaluations
        })
    }

    onScoreChange( item:QualityEvaluationWithScore, value){
        var qualityEvaluations = this.state.qualityEvaluations;
        var canSubmit = true;
        for (var i=0; i<qualityEvaluations.length; i++){
            if (qualityEvaluations[i].qualityCategoryName === item.qualityCategoryName){
                qualityEvaluations[i].evaluationScore = value;
            }
            if (canSubmit && typeof qualityEvaluations[i].evaluationScore === "undefined"){
                canSubmit = false;
            }
        }
        this.setState({
            canSubmit,
            qualityEvaluations
        })

    }

    submit(){
        var qualityEvaluations = this.state.qualityEvaluations;
        var evaluateResult = [];
        for (var i=0; i<qualityEvaluations.length; i++){
            var evaluationScore = qualityEvaluations[i].evaluationScore;
            if(evaluationScore == defaultStarValues){
                message.error("请选择完再提交");
                return;
            }
            let evaluateResultOneAspect = {
                qualityCategoryName: qualityEvaluations[i].qualityCategoryName,
                qualityCategoryID: qualityEvaluations[i].qualityCategoryID,
                evaluationScore: qualityEvaluations[i].evaluationScore
            };
            evaluateResult.push(evaluateResultOneAspect)
        }

        var queryObj = {
            termID:this.props.currentTerm,
            teacherUserID:getUserIDFromStorage(),
            evaluateStudentUserID: this.props.studentWithScore.studentUserID,
            qualityEvaluations
        };
        var this_ = this;
        getDataByActionIDWithQueryAsync(actionTypes.SET_TEACHER_EVALUATESTUDENT_STAR, queryObj, function (response) {
            message.success("提交成功");
            this_.setState({
                qualityEvaluations,
                qualityEvaluationFinished: true
            })
        });
    }

    render() {
        var disabled = this.state.qualityEvaluationFinished;
        var this_ = this;
        return (
            <div className="ClassMateEvaluateListStar am-margin-top-sm">
                {
                    this.state.qualityEvaluations.map(function (item, index) {
                        var currentValue = Number(item.evaluationScore);
                        var key = item.qualityCategoryID + "_" + index;
                        return (
                            <div className="ClassMateEvaluateListStarDiv" key={key}>
                                <div className="ClassMateEvaluateListStarWords">{item.qualityCategoryName}</div>
                                <Rate value={currentValue} disabled={disabled} onChange={this_.onScoreChange.bind(this_, item)} allowHalf/>
                            </div>
                        )
                    })
                }

                {!this.state.qualityEvaluationFinished &&
                    <Button className="ClassMateEvaluateListStarButton" disabled={!this.state.canSubmit} onClick={this.submit}>提交</Button>
                }
            </div>
        )
    }
}

export = ClassMateEvaluateListEvaluateStars