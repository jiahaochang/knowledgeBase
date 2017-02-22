import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardTabs = require('../../../common/Component/CardTabs')
import ActivitiesLibChart = require('./Component/ActivitiesLibChart')
import ActiveDegreeChart = require('./Component/ActiveDegreeChart')
"use strict";

interface StatisticsProps extends React.Props<Statistics> {

}

interface StatisticsState {

}

class Statistics extends React.Component<StatisticsProps, StatisticsState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var subTab = [
            {tabName:"综合素质活动库统计",tabContent:<ActivitiesLibChart /> },
            {tabName:"学生活跃度",tabContent:<ActiveDegreeChart />},
        ];

        return (
            <div>
                <AdminBasicInfo />
                <div className="am-margin-top block-box-shadows-0">
                    <CardTabs tabs={subTab} />
                </div>

            </div>
        )
    }
}

export = Statistics