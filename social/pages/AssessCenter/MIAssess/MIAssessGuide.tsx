import * as React from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router'
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AssessCenter/MIAssess/MIAssessActionTypes'

"use strict";

interface MIAssessGuideProps extends React.Props<MIAssessGuide> {
    router: any
}

interface MIAssessGuideState {
    MIIntroduction?:any,
}

/**
 * MI测试引导页 文字说明 及开始测试按钮
 */
class MIAssessGuide extends React.Component<MIAssessGuideProps, MIAssessGuideState> {
    constructor(props) {
        super(props);
        this.state = {};
        this.goToMIAssess = this.goToMIAssess.bind(this);
    }

    goToMIAssess(){
        var url = "assessCenter/MIAssess/MIQuizPage";
        this.props.router.push(url);
    }

    componentWillMount(){
        //ajax获取介绍内容
        var this_=this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_MIASSESS_INTRODUCTION, function (response) {
            const introduction = response.result.MIIntroduction;
            this_.setState({
                MIIntroduction: introduction.MIIntroduction,
            })
        });
    }

    render() {
        return (
            <div className="am-margin-top">
                <div className="am-text-center">
                    <img  src="vendor/images/tests/MIAssessGuide.png"/>
                </div>
                <div className="career-intro-list" >
                    {this.state.MIIntroduction}
                    <div>
                        预计时长：10分钟
                    </div>
                </div>

                <div className="am-text-center">
                    <Button className="btn-blue"  onClick={this.goToMIAssess} size="large">开始测试</Button>
                </div>

            </div>

        )
    }
}

export = withRouter(MIAssessGuide)