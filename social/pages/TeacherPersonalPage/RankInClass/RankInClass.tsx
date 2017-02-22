import * as React from 'react'

"use strict";

import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import RankInClassChart = require('../../TermAnalysis/RankInClass/Component/RankInClassChart')
import PersonalBasicInfo = require('../../../common/Component/PersonalBasicInfo')
import RankState = require('../../../common/Component/RankState')
import {Row, Col} from 'antd'
import IUserImmutableInfo = Nicezy.IUserImmutableInfo;
import ITeacherRankState = Nicezy.ITeacherRankState;
import {
    getTeacherUserIDAndDisableEditFlag, getTeacherBasicInfoAsync,
    getTeacherRankStateAsync
} from "../TeacherPersnalPageUtil";
import TeacherBasicInfo = require("../../../common/Component/TeacherBasicInfo");
import TeacherRankState = require("../../../common/Component/TeacherRankState");

interface RankInClassProps extends React.Props<RankInClass> {


}

interface RankInClassState {
    disableEdit?: boolean,
    teacherUserID?: string,
    teacherBasicInfo?: IUserImmutableInfo,
    teacherRankState?: ITeacherRankState
}

class RankInClass extends React.Component<RankInClassProps, RankInClassState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    componentWillMount(){
        var this_ = this;
        var {teacherUserID, disableEdit} = getTeacherUserIDAndDisableEditFlag(this);
        this.setState({
            teacherUserID,
            disableEdit
        });

        getTeacherBasicInfoAsync(teacherUserID, this, function (teacherUserInfo:IUserImmutableInfo) {
            this_.setState({
                teacherBasicInfo:teacherUserInfo
            })
        });

        getTeacherRankStateAsync(teacherUserID, this, function (teacherRankState:ITeacherRankState) {
            this_.setState({
                teacherRankState: teacherRankState
            })
        });
    }

    render() {
        return (
            <div>

                <Row>
                    <Col span={17} className="am-padding-right-sm">
                        <div className="block-box-shadows">
                            {
                                !this.state.disableEdit &&
                                <PersonalBasicInfo />
                            }

                            {
                                this.state.disableEdit &&
                                <TeacherBasicInfo teacherBasicInfo={this.state.teacherBasicInfo} disableEdit={true}/>
                            }
                        </div>
                    </Col>
                    <Col span={7}>
                        {
                            this.state.teacherRankState &&
                            <div className="block-box-shadows">
                                <TeacherRankState classAvgIntegralScore={this.state.teacherRankState.classAvgIntegralScore} gradeIntegralRank={this.state.teacherRankState.gradeIntegralRank}/>
                            </div>
                        }

                    </Col>
                </Row>
                <div className="block-box-shadows-0 blueBack am-margin-top">
                    <CardWithTitleBox  title="班级积分排名图" subComponent={<RankInClassChart />} />
                </div>
            </div>

        )
    }
}

export = RankInClass