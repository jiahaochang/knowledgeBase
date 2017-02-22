import * as React from 'react'
import MBTIAssessResult = require('./MBTIAssessResult')
import {assessCenterDisplayMap} from 'common/Config/HomePageConfig';
"use strict";

interface MBTIAssessProps extends React.Props<MBTIAssess> {
    whomToGreet:string;
    greeting?:string | (() => string);
}

interface MBTIAssessState {

}

class MBTIAssess extends React.Component<MBTIAssessProps, MBTIAssessState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var isMBTIAssessFinished = true;
        var title =isMBTIAssessFinished?"结果":"";
        return (
            <div className="am-margin-top">
                <div className="MIGuideTitle">
                    <img src={assessCenterDisplayMap.MBTI.imgUrl}/>
                    <span>{/*assessCenterDisplayMap.MBTI.name+"测试"+title*/"性格测试结果"}</span>
                </div>
            {
                isMBTIAssessFinished &&  <MBTIAssessResult />

            }
            {
                !isMBTIAssessFinished &&
                <div>{"MBTI测试还未完成"}</div>
            }
            </div>
        )
    }
}

export = MBTIAssess