import * as React from 'react'

"use strict";
import * as context from '../ValueAssessContext'
import Immutable = require('immutable')
import {getRandomElementFromArray} from "../../../../common/commonFunc";
import {Button, Row, Col, Icon, Pagination} from 'antd'

interface ValueAssessQuestionAndAnswerOptionProps extends React.Props<ValueAssessQuestionAndAnswerOption> {
    currentPageNum: number,
    onFinishedAnswer:Function
}

interface ValueAssessQuestionAndAnswerOptionState {
    remainAspect?: Array<any>,
    chosenCount?: number,
    aspectsInThisTurn?: Array<any>
}

class ValueAssessQuestionAndAnswerOption extends React.Component<ValueAssessQuestionAndAnswerOptionProps, ValueAssessQuestionAndAnswerOptionState> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setStateByProps(this.props);
    }

    /*componentWillReceiveProps(newProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            this.setStateByProps(newProps);
        }
    }*/

    setStateByProps(props) {
        var valueAspect = context.getValueAspect();
        var remainAspect = Immutable.fromJS(valueAspect).toJS();
        this.setState({
            remainAspect: remainAspect,
            aspectsInThisTurn: getRandomElementFromArray(remainAspect, 5),
            chosenCount: 0
        })
    }

    clickedCard(item){
        var aspectsInThisTurn = this.state.aspectsInThisTurn;
        var chosenCount = this.state.chosenCount;

        for (var i=0; i<aspectsInThisTurn.length; i++){
            if (item.aspectName === aspectsInThisTurn[i].aspectName){
                if(aspectsInThisTurn[i].chosen){
                    chosenCount = chosenCount - 1;
                }else{
                    if(chosenCount === 3){
                        alert("至多选3个");
                        return;
                    }
                    chosenCount = chosenCount + 1;
                }
                aspectsInThisTurn[i].chosen = !aspectsInThisTurn[i].chosen;
                break;
            }
        }
        this.setState({
            aspectsInThisTurn,
            chosenCount
        })
    }

    handleClick(){

        var remainAspect = this.state.remainAspect;
        console.log(remainAspect.length);

        var chosenAspects = [];

        var aspectsInThisTurn = this.state.aspectsInThisTurn;
        for (var i=0; i<aspectsInThisTurn.length; i++){
            if (aspectsInThisTurn[i].chosen ){
                if (this.props.currentPageNum !== 5){
                    aspectsInThisTurn[i].chosen = false;
                }
                chosenAspects.push(aspectsInThisTurn[i]);

                remainAspect.push(aspectsInThisTurn[i])
            }
        }
        console.log(remainAspect.length);
        if(this.props.currentPageNum === 5){
            console.log(chosenAspects)
        }else{
            this.setState({
                remainAspect: remainAspect,
                aspectsInThisTurn: getRandomElementFromArray(remainAspect, 5),
                chosenCount: 0
            });
            this.props.onFinishedAnswer();
        }


    }

    render() {
        var aspectsInThisTurn = this.state.aspectsInThisTurn;
        var this_ = this;
        return (

            <div >
                <div className="am-center ">
                    <Icon type="exclamation-circle"/>
                    以下5个价值观，请按照你的看重程度选择3个
                </div>
                <Row className="am-padding-top-xl am-padding-bottom-lg">
                    {
                        aspectsInThisTurn.map(function (item, index) {
                            return (
                                <Col span={4} className="width20percent " key={index} onClick={this_.clickedCard.bind(this_, item)}>
                                    <div className="value-test-card">
                                        <div>
                                            <img src="vendor/images/default-headpic.jpg" width="100%" height="60%"/>
                                        </div>
                                        <div className="am-text-sm">
                                            {item.desc}
                                        </div>
                                        <div>
                                            <span className="am-margin-sm am-text-center">{item.aspectName}</span>
                                        </div>

                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Button disabled={this.state.chosenCount !== 3} onClick={this.handleClick}>确定</Button>
            </div>
        )
    }
}

export = ValueAssessQuestionAndAnswerOption