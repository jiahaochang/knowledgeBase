import * as React from 'react'
import { Row, Col,Button } from 'antd';
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
import  ResultDimIntroduction = require('../Component/ResultDimIntroduction');
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AssessCenter/ValueAssess/ValueAssessActionTypes'
import {valuesDimTitleMap} from 'common/Config/AssessCenterConfig2'
"use strict";

interface ValueAssessResultProps extends React.Props<ValueAssessResult> {
}

interface ValueAssessResultState {
    preferValues?:Array<any>,
}

class ValueAssessResult extends React.Component<ValueAssessResultProps, ValueAssessResultState> {
    constructor(props) {
        super(props);
        this.state = {
            preferValues: []
        };
    }

    static defaultProps = {};

    componentWillMount(){
        //ajax获取测试报告的结果
        var this_=this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_VALUEASSESS_VALUE_REPORT, function (response) {
            const records = response.result.report;
            this_.setState({
                preferValues: records.advantage,
            })
        });
    }

    render() {
        var preferValues = this.state.preferValues;
        return (

            <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"40px 20px 30px"}}>
                <div className="report-single-title holland-score-title">
                    <div className="titleDIV">
                            <span className="titleSpan">
                                <span className="titleName">根据测试结果，你做职业选择时最看重的三个价值观是</span>
                            </span>
                    </div>
                </div>
                <Row  type="flex" justify="center" className="am-margin-top">
                    {
                        preferValues.map(function(intro, index){
                            return (
                                <Col span={8} key={index} className="am-text-center">
                                    <Button className="btn-yellow" size="large">{intro.resultDimName}</Button>
                                </Col>
                            )
                        })
                    }
                </Row>
                {
                    preferValues.map(function(intro, index){
                        var picUrl = valuesDimTitleMap[intro.resultDimType].picUrl;
                        return (
                            <Row className="am-margin-top-lg display-box values-top-border" key={index}>
                                <Col span={8} className="vertical-horizon-center">
                                    <img src={picUrl}/>
                                </Col>
                                <Col span={16}>
                                    <CardTitleWithLine title={intro.resultDimName} titleIconType={"fa-lightbulb-o fa-2x am-padding-right-xs"}/>
                                    <ResultDimIntroduction dimTypeIntroductions={intro.introductions}/>
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
        )
    }
}

export = ValueAssessResult