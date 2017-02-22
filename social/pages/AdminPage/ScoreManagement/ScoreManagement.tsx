import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import ScoreManagementTable = require('./Component/ScoreManagementTable')
"use strict";

interface ScoreManagementProps extends React.Props<ScoreManagement> {

}

interface ScoreManagementState {

}

class ScoreManagement extends React.Component<ScoreManagementProps, ScoreManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>
                <AdminBasicInfo />
                <div className="am-margin-top block-box-shadows-0 blueBack">
                   <CardWithTitleBox title="成绩管理" subComponent={<ScoreManagementTable />} />
                </div>
            </div>
        )
    }
}

export = ScoreManagement