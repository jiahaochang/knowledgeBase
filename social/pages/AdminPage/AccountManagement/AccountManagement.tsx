import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardTabs = require('../../../common/Component/CardTabs')
import TeacherAdminAccountTable = require('./Component/TeacherAdminAccountTable')
import StudentAccountTable = require('./Component/StudentAccountTable')
"use strict";

interface AccountManagementProps extends React.Props<AccountManagement> {

}

interface AccountManagementState {

}
/**
 * 管理员---帐户管理
 */
class AccountManagement extends React.Component<AccountManagementProps, AccountManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var subTab = [
            {tabName:"教师/管理员帐户",tabContent:<TeacherAdminAccountTable /> },
            {tabName:"学生帐户",tabContent:<StudentAccountTable />},
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

export = AccountManagement