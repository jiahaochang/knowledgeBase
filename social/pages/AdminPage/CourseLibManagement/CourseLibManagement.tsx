import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardTabs = require('../../../common/Component/CardTabs')
import ElectiveCourseTable = require('./Component/ElectiveCourseTable')
import ExperimentalClassTable = require('./Component/ExperimentalClassTable')
import ResearchLearningTable = require('./Component/ResearchLearningTable')
import CourseClubHonorTable = require('./Component/CourseClubHonorTable')
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AdminPage/AdminPageActionTypes'
"use strict";

interface CourseLibManagementProps extends React.Props<CourseLibManagement> {

}

interface CourseLibManagementState {

}
/**
 * 管理员--课程库
 */
class CourseLibManagement extends React.Component<CourseLibManagementProps, CourseLibManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
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

export = CourseLibManagement