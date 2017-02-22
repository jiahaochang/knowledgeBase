import * as React from 'react'
import {Button, RadioGroup, Radio} from 'antd'
import * as MIAssessAPI from '../MIAssessQuizAPI'
"use strict";

interface MIQuestionAndAnserOptionProps extends React.Props<MIQuestionAndAnserOption> {
    currentPageNum: number;
    onFinishedAnswer(): void
}

interface MIQuestionAndAnserOptionState {
}

class MIQuestionAndAnserOption extends React.Component<MIQuestionAndAnserOptionProps, MIQuestionAndAnserOptionState> {
    constructor(props) {
        super(props);
    }

    clickedRadio(answerNo){
        MIAssessAPI.saveAnswer(this.props.currentPageNum, answerNo);
        this.props.onFinishedAnswer();
    }

    render() {
        var currentPageNum = this.props.currentPageNum;
        var quiz = MIAssessAPI.getQuizByPageNum(currentPageNum);
        var questionText = quiz.questionText;
        var answerOptions = quiz.answerOptions;
        var this_ = this;
        var answer = MIAssessAPI.getAnswerByPageNum(currentPageNum);
        var hasChosenAnswer = typeof answer === "undefined"? false: true;

        return (
            <div className="MIAssess-questionAndAnswer">
                <div className="MIAssess-currentPageNum">{currentPageNum}</div>
                <div className="MIAssess-questionText">{questionText}</div>
                <br/>
                <div className="MIAssess-questionAndAnswerList">
                {
                    answerOptions.map(
                        function(item, index){
                            var divClass = "MIAssess-questionAndAnswerList-div";
                            var checked = false;
                            if(hasChosenAnswer && item.answerNo === answer){
                                checked = true;
                                divClass = "MIAssess-questionAndAnswerList-div-active"
                            }
                            var key = currentPageNum + "_" + item.answerNo;
                            return  (
                                <div className={divClass} key={key} >
                                    <input className="MIAssess-questionAndAnswerList-input" type="radio" name="answerOption" value={item.answerText} id={item.answerNo}
                                           onClick={this_.clickedRadio.bind(this_,item.answerNo)} checked={checked} readOnly={true}/>
                                    <label htmlFor={item.answerNo}>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>{item.answerText}</span>
                                    </label>
                                </div>
                            )
                        }
                    )
                }
                </div>
            </div>
        )
    }
}

export = MIQuestionAndAnserOption