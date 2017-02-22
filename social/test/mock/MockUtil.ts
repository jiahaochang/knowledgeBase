import * as UrlUtil from '../../common/urlUtil'

var Mock = require('mockjs');

import {hasKeyInMap} from "../../common/commonFunc";
import {subjectLibMockTemplate} from './ajaxMock/SubjectLibMockTemplate'
import {subjectLibUrlMap} from '../../actions/SubjectLib/SubjectLibActionMap'
import {MIAssessMockTemplate} from "./ajaxMock/MIAssessMockTemplate";
import {MIAssessUrlMap} from "../../actions/AssessCenter/MIAssess/MIAssessActionMap";
//学院库
import {collegeLibMockTemplate} from "./ajaxMock/CollegeLibMockTemplate";
import {collegeLibUrlMap} from "../../actions/CollegeLib/CollegeLibActionMap";
//职业库
import {jobLibMockTemplate} from "./ajaxMock/JobLibMockTemplate";
import {jobLibUrlMap} from "../../actions/JobLib/JobLibActionMap";
//学生个人主页
import {studentMockTemplate} from "./ajaxMock/HomePageMockTemplate";
import {homePageUrlMap} from "../../actions/HomePage/HomePageActionMap";

import {teacherMockTemplate} from './ajaxMock/TeacherMockTemplate';
import {teacherUrlMap} from '../../actions/TeacherPersonalPage/TeacherPersonalPageActionMap'

import {commonMockTemplate} from './ajaxMock/CommonMockTemplate'
import {commonUrlMap} from '../../actions/CommonAction/CommonActionMap'

//学生学期分析
import {termAnalysisMockTemplate} from "./ajaxMock/TermAnalysisMockTemplate";
import {termAnalysisUrlMap} from "../../actions/TermAnalysis/TermAnalysisActionMap";

//专业库
import {majorLibMockTemplate} from "./ajaxMock/MajorLibMockTemplate";
import {majorLibUrlMap} from "../../actions/MajorLib/MajorLibActionMap";

//搜索用户
import {searchMockTemplate} from "./ajaxMock/SearchMockTemplate";
import {searchUrlMap} from "../../actions/Search/SearchActionMap";

//管理员页面
import {adminPageMockTemplate} from "./ajaxMock/AdminPageMockTemplate";
import {adminPageUrlMap} from "../../actions/AdminPage/AdminPageActionMap";

//测试中心
import {assessCenterMockTemplate} from "./ajaxMock/AssessCenterMockTemplate";
import {assessCenterUrlMap} from "../../actions/AssessCenter/AssessCenterActionMap";
//价值观测试
import {ValueAssessMockTemplate} from "./ajaxMock/ValueAssessMockTemplate";
import {ValueAssessUrlMap} from "../../actions/AssessCenter/ValueAssess/ValueAssessActionMap";

const AjaxType_Post = "post";

const allTemplateMap = {
    subjectLibMockTemplate: subjectLibMockTemplate,
    MIAssessMockTemplate: MIAssessMockTemplate,
    collegeLibMockTemplate:collegeLibMockTemplate,
    studentMockTemplate:studentMockTemplate,
    jobLibMockTemplate: jobLibMockTemplate,
    teacherMockTemplate:teacherMockTemplate,
    commonMockTemplate:commonMockTemplate,
    termAnalysisMockTemplate:termAnalysisMockTemplate,
    majorLibMockTemplate:majorLibMockTemplate,
    searchMockTemplate:searchMockTemplate,
    adminPageMockTemplate:adminPageMockTemplate,
    assessCenterMockTemplate:assessCenterMockTemplate,
    ValueAssessMockTemplate:ValueAssessMockTemplate,
};

const allUrlMap = {
    subjectLibUrlMap: subjectLibUrlMap,
    MIAssessUrlMap: MIAssessUrlMap,
    collegeLibUrlMap:collegeLibUrlMap,
    homePageUrlMap:homePageUrlMap,
    jobLibUrlMap: jobLibUrlMap,
    teacherUrlMap:teacherUrlMap,
    commonUrlMap:commonUrlMap,
    termAnalysisUrlMap:termAnalysisUrlMap,
    majorLibUrlMap:majorLibUrlMap,
    searchUrlMap:searchUrlMap,
    adminPageUrlMap:adminPageUrlMap,
    assessCenterUrlMap:assessCenterUrlMap,
    ValueAssessUrlMap:ValueAssessUrlMap,
};

export function mockDataByUrl(url:string): void {
    url = UrlUtil.parseURL(url).relativePath;
    //get actionID by url
    var actionID = getActionIDByUrl(url);
    mockDataByActionIDAndUrl(actionID, url);
}

function getMockTemplateByActionID(actionID: string): any{
    //get all mock template in one object, actionID as key, template as value
    for(var key in allTemplateMap){
        if (hasKeyInMap(actionID, allTemplateMap[key])){
            return allTemplateMap[key][actionID];
        }
    }
    return;
}

export function mockDataByActionIDAndUrl(actionID: string, url:string, ajaxType?: string): void{
    if (!ajaxType) {
        ajaxType = AjaxType_Post;
    }
    var regexString = UrlUtil.getRegFromUrl(url);
    var template = getMockTemplateByActionID(actionID);

    Mock.mock( eval(regexString), ajaxType, template);
}

function getActionIDByUrl(url: string): string{
    for (var key in allUrlMap){
        if (allUrlMap[key] && allUrlMap[key].get(url)){
            return allUrlMap[key].get(url);
        }
    }
    return ;
}