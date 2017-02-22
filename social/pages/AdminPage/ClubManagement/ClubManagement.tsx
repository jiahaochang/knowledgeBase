import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardTabs = require('../../../common/Component/CardTabs')
import SchoolActivitiesLibTable = require('./Component/SchoolActivitiesLibTable')
import OffCampusPracticeLibTable = require('./Component/OffCampusPracticeLibTable')
import CommunityLibTable = require('./Component/CommunityLibTable')
import CourseClubHonorTable = require('../CourseLibManagement/Component/CourseClubHonorTable')
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AdminPage/AdminPageActionTypes'
"use strict";

interface ClubManagementProps extends React.Props<ClubManagement> {

}

interface ClubManagementState {

}

class ClubManagement extends React.Component<ClubManagementProps, ClubManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        /*var subTab = [
            {tabName:"校内活动库",tabContent:<SchoolActivitiesLibTable />},
            {tabName:"校外实践库",tabContent:<OffCampusPracticeLibTable />},
            {tabName:"社团库",tabContent:<CommunityLibTable />}
        ];*/
        var subTab = [];
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

export = ClubManagement