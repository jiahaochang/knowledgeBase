import * as React from 'react'
import HollandAssessResult = require('./HollandAssessResult')
import {assessCenterDisplayMap} from 'common/Config/HomePageConfig';
"use strict";

interface HollandAssessProps extends React.Props<HollandAssess> {

}

interface HollandAssessState {

}

class HollandAssess extends React.Component<HollandAssessProps, HollandAssessState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
    };

    render() {
        var isHollandAssessFinished = true;
        var title =isHollandAssessFinished?"结果":"";
        return (
            <div className="am-margin-top">
                <div className="MIGuideTitle">
                    <img src={assessCenterDisplayMap.holland.imgUrl}/>
                    <span>{/*assessCenterDisplayMap.holland.name+"测试"+title*/"身体健康测试结果"}</span>
                </div>
                {
                    isHollandAssessFinished && <HollandAssessResult />
                }
                {
                    !isHollandAssessFinished &&
                    <div>{"Holland测试还未完成"}</div>
                }
            </div>
        )
    }
}

export = HollandAssess