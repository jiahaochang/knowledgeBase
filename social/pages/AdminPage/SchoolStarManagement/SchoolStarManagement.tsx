import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import SchoolStarManagementTable = require('./Component/SchoolStarManagementTable')
"use strict";

interface SchoolStarManagementProps extends React.Props<SchoolStarManagement> {

}

interface SchoolStarManagementState {

}

class SchoolStarManagement extends React.Component<SchoolStarManagementProps, SchoolStarManagementState> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {};

    render() {
        return (
            <div>
                <AdminBasicInfo />
                <div className="am-margin-top block-box-shadows-0 blueBack">
                    <CardWithTitleBox title="校园寻星" subComponent={<SchoolStarManagementTable />} />
                </div>
            </div>
        )
    }
}

export = SchoolStarManagement