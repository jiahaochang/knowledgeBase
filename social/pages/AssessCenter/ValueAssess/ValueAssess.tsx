import * as React from 'react'
import {assessCenterDisplayMap} from 'common/Config/HomePageConfig';
import ValueAssessGuide = require('./ValueAssessGuide')
import ValueAssessResult = require('./ValueAssessResult')
import * as context from './ValueAssessContext'
import * as Actions from '../../../actions/AssessCenter/ValueAssess/ValueAssessAction'
"use strict";

interface ValueAssessProps extends React.Props<ValueAssess> {

}

interface ValueAssessState {

}

class ValueAssess extends React.Component<ValueAssessProps, ValueAssessState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    componentWillMount(){
        Actions.initValueAssessFinishState();
    }

    render() {
        var isValueAssessFinished = context.getValueAssessFinishState();
        var title =isValueAssessFinished?"结果":"";
        return (
            <div className="am-margin-top">
                <div className="MIGuideTitle">
                    <img src={assessCenterDisplayMap.values.imgUrl}/>
                    <span>{assessCenterDisplayMap.values.name+"测试"+title}</span>
                </div>
                {
                    isValueAssessFinished && <ValueAssessResult />
                }

                {
                    !isValueAssessFinished &&  <ValueAssessGuide />
                }
            </div>
        )
    }
}

export = ValueAssess