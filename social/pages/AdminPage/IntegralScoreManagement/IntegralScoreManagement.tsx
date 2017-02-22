import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import IntegralScoreManagementTable = require('./Component/IntegralScoreManagementTable')
"use strict";

interface IntegralScoreManagementProps extends React.Props<IntegralScoreManagement> {

}

interface IntegralScoreManagementState {

}

class IntegralScoreManagement extends React.Component<IntegralScoreManagementProps, IntegralScoreManagementState> {
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
                    <CardWithTitleBox title="积分管理" subComponent={<IntegralScoreManagementTable />} />
                </div>
            </div>
        )
    }
}

export = IntegralScoreManagement