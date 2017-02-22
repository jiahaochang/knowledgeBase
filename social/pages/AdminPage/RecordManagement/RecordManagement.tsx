import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import StudentRecordManagementTable = require('./Component/StudentRecordManagementTable')

"use strict";

interface RecordManagementProps extends React.Props<RecordManagement> {

}

interface RecordManagementState {

}

class RecordManagement extends React.Component<RecordManagementProps, RecordManagementState> {
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
                    <CardWithTitleBox title="学生档案" subComponent={<StudentRecordManagementTable />} />
                </div>
            </div>
        )
    }
}

export = RecordManagement