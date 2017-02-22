"use strict";

//import all actionMap
import {subjectLibActionMap} from '../../actions/SubjectLib/SubjectLibActionMap'
import {teacherActionMap} from '../../actions/TeacherPersonalPage/TeacherPersonalPageActionMap'
import {hasKeyInMap} from "../commonFunc";
import {MIAssessActionMap} from "../../actions/AssessCenter/MIAssess/MIAssessActionMap";
import {collegeLibActionMap} from '../../actions/CollegeLib/CollegeLibActionMap'
import {homePageActionMap} from '../../actions/HomePage/HomePageActionMap'
import {jobLibActionMap} from '../../actions/JobLib/JobLibActionMap'
import {commonActionMap} from '../../actions/CommonAction/CommonActionMap'
import {termAnalysisActionMap} from '../../actions/TermAnalysis/TermAnalysisActionMap'
import {majorLibActionMap} from '../../actions/MajorLib/MajorLibActionMap'
import {searchActionMap} from '../../actions/Search/SearchActionMap'
import {adminPageActionMap} from '../../actions/AdminPage/AdminPageActionMap'
import {assessCenterActionMap} from '../../actions/AssessCenter/AssessCenterActionMap'
import {ValueAssessActionMap} from "../../actions/AssessCenter/ValueAssess/ValueAssessActionMap";

const allActionMap = {
    subjectLibActionMap: subjectLibActionMap,
    MIAssessActionMap: MIAssessActionMap,
    teacherActionMap: teacherActionMap,
    collegeLibActionMap:collegeLibActionMap,
    homePageActionMap:homePageActionMap,
    jobLibActionMap: jobLibActionMap,
    commonActionMap:commonActionMap,
    termAnalysisActionMap:termAnalysisActionMap,
    majorLibActionMap:majorLibActionMap,
    searchActionMap:searchActionMap,
    adminPageActionMap: adminPageActionMap,
    assessCenterActionMap:assessCenterActionMap,
    ValueAssessActionMap:ValueAssessActionMap,
};

export function getUrlByActionID(actionID: string): string{
    return;
}

export function getPrivilegeByActionID(actionID: string): Privilege{
    return;
}

function getModuleAndOperationByActionID(actionID: string): any{
    
}

//actionID 必须全局唯一
export function getActionBasicInfo(actionID: string){
    //actionID -> actionMap
    for (var key in allActionMap){
        if (hasKeyInMap(actionID, allActionMap[key])){
            return allActionMap[key][actionID];
        }
    }
    return;
}