import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardTabs = require('../../../common/Component/CardTabs')
import SpecialtyManagementTable = require('./Component/SpecialtyManagementTable')
import HonorManagementTable = require('./Component/HonorManagementTable')
import PositionManagementTable = require('./Component/PositionManagementTable')
import CourseClubHonorTable = require('../CourseLibManagement/Component/CourseClubHonorTable')
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AdminPage/AdminPageActionTypes'
"use strict";

interface HonorManagementProps extends React.Props<HonorManagement> {

}

interface HonorManagementState {

}

class HonorManagement extends React.Component<HonorManagementProps, HonorManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        /*var subTab = [
            {tabName:"特长管理",tabContent:<SpecialtyManagementTable />},
            {tabName:"荣誉管理",tabContent:<HonorManagementTable />},
            {tabName:"职务管理",tabContent:<PositionManagementTable />}
        ];*/
        var subTab = [

        ];
        var allData=[];
        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_EVENTHOLDER, function (response) {
            allData=response.result.eventLib
        });
        for(var i=0;i< allData.length;i++) {
            subTab.push({
                tabName:allData[i].rootEventCategoryName,
                tabContent:<CourseClubHonorTable data={allData[i].eventHolders}
                                                 eventCategoryType={allData[i].eventCategoryType}/>,
            });
        }
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

export = HonorManagement