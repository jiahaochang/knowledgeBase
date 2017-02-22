import * as React from 'react'
import FlipWithSlider = require('../MIAssess/Component/FlipWithSlider')
import ValueAssessQuestionAndAnswerOption = require('./Component/ValueAssessQuestionAndAnswerOption')
import * as context from './ValueAssessContext'
import * as Actions from '../../../actions/AssessCenter/ValueAssess/ValueAssessAction'

"use strict";
import {Slider} from 'antd'


interface ValueQuizProps extends React.Props<ValueQuizPage> {
}

interface ValueQuizState {
    currentPageNum: number
}

class ValueQuizPage extends React.Component<ValueQuizProps, ValueQuizState> {
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
        /*var undonePageList: Array<any> = MIAssessQuizAPI.getUndonePageList();
        if (!undonePageList || undonePageList.length === 0){
            console.log(MIAssessQuizAPI.getMIResultData());
        }else{
            console.log(undonePageList);
            this.setState({
                currentPageNum: undonePageList[0]
            })
        }*/

    }

    onFinishedAnswer(){
        var totalPageCount = 5;
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
        Actions.initValueAssessQuizzes();
    }

    render() {
        var currentPageNum = this.state.currentPageNum;
        var totalPageCount = 5;
        return (
            <div>
                <ValueAssessQuestionAndAnswerOption currentPageNum={currentPageNum} onFinishedAnswer={this.onFinishedAnswer}/>
                <Slider min={1} max={totalPageCount} value={currentPageNum} disabled={true}/>
            </div>
        )
    }
}

export = ValueQuizPage