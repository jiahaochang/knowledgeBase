import * as React from 'react'
import {message} from 'antd'
import * as ajaxUtil from '../../common/ajaxUtil'
import * as ActionTypes from'../../actions/AssessCenter/MIAssess/MIAssessActionTypes'
import FlipWithSlider = require('./Component/FlipWithSlider')
import MIQuestionAndAnswerOption = require('./Component/MIQuestionAndAnswerOption')
import * as context from './MIAssessContext'
import * as MIAssessQuizAPI from './MIAssessQuizAPI'
import * as Actions from '../../actions/AssessCenter/MIAssess/MIAssessAction'
import SubjectLib = require('../SubjectLib/SubjectLib')
import {withRouter} from 'react-router'
"use strict";

interface MIQuizProps extends React.Props<MIQuizPage> {
    router: any
}

interface MIQuizState {
    currentPageNum: number
}

class MIQuizPage extends React.Component<MIQuizProps, MIQuizState> {
    constructor(props) {
        super(props);

        this.state = {
            currentPageNum: 1
        };

        this.onChangePageNum = this.onChangePageNum.bind(this);
        this.onSubmitResult = this.onSubmitResult.bind(this);
        this.onFinishedAnswer = this.onFinishedAnswer.bind(this);
    }

    onChangePageNum(pageNumAfterChanged){
        this.setState({
            currentPageNum: pageNumAfterChanged
        })
    }

    onSubmitResult(){
        var undonePageList: Array<any> = MIAssessQuizAPI.getUndonePageList();
        if (!undonePageList || undonePageList.length === 0){
            console.log(MIAssessQuizAPI.getMIResultData());
            var postData = MIAssessQuizAPI.getMIResultData();
            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SUBMIT_MIASSESS_ANSWERS,postData,function () {
                message.success('提交成功');
            });
            var url = "assessCenter/MIAssess";
            this.props.router.push(url);
        }else{
            console.log(undonePageList);
            this.setState({
                currentPageNum: undonePageList[0]
            })
        }
    }

    onFinishedAnswer(){
        var totalPageCount = context.getQuizTotalCount();
        if (this.state.currentPageNum === totalPageCount){
            this.setState({
                currentPageNum: totalPageCount
            })
        }else{
            this.setState({
                currentPageNum: this.state.currentPageNum + 1
            })
        }
    }

    componentWillMount(){
        //ajax
        Actions.initMIAssessQuestions();
    }

    componentDidMount(){}

    render() {
        var currentPageNum = this.state.currentPageNum;
        var totalPageCount = context.getQuizTotalCount();
        return (
            <div>
                <MIQuestionAndAnswerOption
                    currentPageNum={currentPageNum}
                    onFinishedAnswer={this.onFinishedAnswer}
                />
                <FlipWithSlider
                    totalPageCount={totalPageCount}
                    currentPageNum={currentPageNum}
                    onChangePageNum={this.onChangePageNum}
                    onSubmitResult={this.onSubmitResult}
                    isSliderDraggable={true}
                />
            </div>
        )
    }
}

export = withRouter(MIQuizPage)