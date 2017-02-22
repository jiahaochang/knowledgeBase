import * as React from 'react'
import {Row,Col} from 'antd'
"use strict";

interface ElectiveCourseSingleProps extends React.Props<ElectiveCourseSingle> {
    cource:any

}

interface ElectiveCourseSingleState {

}
/**
 * 个人素质报告
 * 我的综合素质活动
 * 选修课single
 */
class ElectiveCourseSingle extends React.Component<ElectiveCourseSingleProps, ElectiveCourseSingleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div className="comprehensive-activities-single">
                <div className="col2Con">
                    <b>课程名称：{this.props.cource.courceName}</b>
                    <span className="rightText">
                        <b>所属分类：{this.props.cource.courceClassification}</b>
                    </span>
                </div>

                <div className="colOne">
                    <span>课程表现：</span>
                    <p className="detail">
                        {this.props.cource.courcePerformance}
                    </p>
                </div>

                <div className="col2Con">
                    <b>我的成绩：{this.props.cource.courceScore}</b>
                    <span className="rightText">
                        <b className="am-padding-right-xs">课程学分：{this.props.cource.courceCredit}</b>学分
                    </span>
                </div>

            </div>
        )
    }
}

export = ElectiveCourseSingle