import * as React from 'react'
import TextareaWithTitle = require('../../../common/Component/TextareaWithTitle')
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import {isEmptyObject} from 'common/commonFunc'

//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'

"use strict";
import {Row, Col, Rate,Alert} from 'antd'
import {RoleEnum} from "common/Module/Role";
import {getTermIDFromStorage,getUserIDFromStorage} from 'common/storageUtil'

interface TeacherReviewProps extends React.Props<TeacherReview> {
}

interface TeacherReviewState {
    reviewData?: any,
    currentTerm?:string
}

class TeacherReview extends React.Component<TeacherReviewProps, TeacherReviewState> {
    constructor(props) {
        super(props);
        this.state = {
            currentTerm:getTermIDFromStorage()
        }
    }

    static defaultProps = {
    };

    onTermChange(termAfterChange){
        this.setStateByTermID(termAfterChange);
        this.setState({
            currentTerm:termAfterChange
        })
    }

    setStateByTermID(currentTerm){
        var this_ = this;
        var queryObj = {
            termID:currentTerm,
            studentUserID:getUserIDFromStorage()
        };
        getDataByActionIDWithQuery(actionTypes.GET_STUDENT_TEACHEREVALUATE,queryObj,function (response) {
            var result = response.result;
            this_.setState({
                reviewData:result,
            });
        })
    }

    componentWillMount(){
        var this_ = this;
        this.setStateByTermID(this.state.currentTerm);
    }

    render() {

        var {teacherTermEvaluation} = this.state.reviewData;

        var evaluationContent = isEmptyObject(teacherTermEvaluation.evaluationContent)?"班主任尚未填写…":teacherTermEvaluation.evaluationContent;

        return (
            <div>
                <PersonInfoAndRank roleEnum={RoleEnum.student} onTermChange={this.onTermChange} currentTerm={this.state.currentTerm}/>

                <div className="block-box-shadows am-margin-top">
                    <div className="textarea-with-title">
                        <div className="title am-padding-left-sm">班主任老师评语</div>
                        <div className="teacher-comments-box">
                            <div className="sub-div">{evaluationContent}</div>
                        </div>
                    </div>
                    {
                        !teacherTermEvaluation.qualityEvaluationFinished &&
                        <Alert message="班主任还没来得及打分哦……" type="warning" showIcon />
                    }
                    <Row>
                        <Col span={7} className="am-text-center ">
                            <b style={{color:"#10579e"}}>班主任打分：</b>
                        </Col>
                        <Col span={17}>
                            <Row>
                            {
                                teacherTermEvaluation.qualityEvaluations.map((item, index)=>(
                                    <Col key={index} span={12}>
                                        <b className="am-padding-right-xs">{item.qualityCategoryName}</b>
                                        <Rate value={Number(item.evaluationScore)} allowHalf disabled/>
                                    </Col>
                                ))
                            }
                            </Row>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export = TeacherReview