import * as React from 'react'
import MIAssessGuide = require('./MIAssessGuide')
import MIAssessResult = require('./MIAssessResult')
import {assessCenterDisplayMap} from 'common/Config/HomePageConfig';
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AssessCenter/MIAssess/MIAssessActionTypes'
import * as Actions from '../../../actions/AssessCenter/MIAssess/MIAssessAction'
import * as context from './MIAssessContext'
"use strict";

interface MIAssessMainProps extends React.Props<MIAssess> {
}

interface MIAssessMainState {
}

/**
 * MI 测试主页 包含逻辑
 *  if（之前完成过测试）{
 *      显示测试结果
 *  }else{
 *      显示测试引导页
 *  }
 */
class MIAssess extends React.Component<MIAssessMainProps, MIAssessMainState> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        //ajax
        Actions.initMIAssessFinishState();
    }

    render() {
        var isMIAssessFinished = context.getMIAssessFinishState();
        var title =isMIAssessFinished === true ? "结果":"";
        return (
            <div className="am-margin-top">
                <div className="MIGuideTitle">
                    <img src={assessCenterDisplayMap.multipleIntelligence.imgUrl}/>
                    <span>{assessCenterDisplayMap.multipleIntelligence.name+"测试"+title}</span>
                </div>
            {
                isMIAssessFinished === true &&
                <MIAssessResult />

            }
            {
                isMIAssessFinished === false &&
                <MIAssessGuide />
            }
            </div>
        )
    }
}

export = MIAssess