import * as React from 'react'

"use strict";
import IUserImmutableInfo = Nicezy.IUserImmutableInfo;
import ITeacherRankState = Nicezy.ITeacherRankState;
import TeacherBasicInfo = require("./TeacherBasicInfo");
import TeacherRankState = require("./TeacherRankState");
import {Row} from "antd";
import {Col} from "antd";

interface OtherTeacherBasicInfoAndRankProps extends React.Props<OtherTeacherBasicInfoAndRank> {
    teacherBasicInfo?: IUserImmutableInfo,
    teacherRankState?: ITeacherRankState,
    disableEdit?: boolean
}

interface OtherTeacherBasicInfoAndRankState {

}

class OtherTeacherBasicInfoAndRank extends React.Component<OtherTeacherBasicInfoAndRankProps, OtherTeacherBasicInfoAndRankState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <Row className="display-box" >
                <Col span={17} className="am-padding-right-sm">
                    <TeacherBasicInfo className="block-box-shadows" teacherBasicInfo={this.props.teacherBasicInfo} disableEdit={this.props.disableEdit}/>
                </Col>
                <Col span={7} className="block-box-shadows ">
                    {
                        this.props.teacherRankState &&
                        <TeacherRankState  classAvgIntegralScore={this.props.teacherRankState.classAvgIntegralScore} gradeIntegralRank={this.props.teacherRankState.gradeIntegralRank}/>
                    }
                </Col>

            </Row>
        )
    }
}

export = OtherTeacherBasicInfoAndRank