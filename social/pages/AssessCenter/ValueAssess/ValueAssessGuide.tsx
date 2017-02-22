import * as React from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router'
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AssessCenter/ValueAssess/ValueAssessActionTypes'

"use strict";

interface ValueAssessGuideProps extends React.Props<ValueAssessGuide> {
    router: any
}

interface ValueAssessGuideState {
    valueAssessIntroduction?:any,
}

/**
 * MI测试引导页 文字说明 及开始测试按钮
 */
class ValueAssessGuide extends React.Component<ValueAssessGuideProps, ValueAssessGuideState> {
    constructor(props) {
        super(props);
        this.state = {};
        this.goToTest = this.goToTest.bind(this);
    }

    goToTest(){
        var url = "assessCenter/valueAssess/valueQuizPage";
        this.props.router.push(url);
    }

    componentWillMount(){
        //ajax获取搜索用户的结果
        var this_=this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_VALUEASSESS_VALUE_INTRODUCTION, function (response) {
            const records = response.result.valueAssessIntroduction;
            this_.setState({
                valueAssessIntroduction: records.valueAssessIntroduction,
            })
        });
    }

    render() {
        return (
            <div className="am-margin-top">
                <div className="am-text-center">
                    <img  src="vendor/images/tests/valueTestGuide.png"/>
                </div>
                <div className="career-intro-list" >
                    {this.state.valueAssessIntroduction}
                    <div>
                        预计时长：8-10分钟
                    </div>
                </div>

                <div className="am-text-center">
                    <Button className="btn-blue"  onClick={this.goToTest} size="large">开始测试</Button>
                </div>

            </div>
        )
    }
}

export = withRouter(ValueAssessGuide)