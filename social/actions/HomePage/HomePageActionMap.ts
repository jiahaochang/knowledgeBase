
// define action basic info here
import * as ActionTypes from "./HomePageActionTypes";
import BiMap = require("../../common/Collect/BiMap");
let homePageUrlMapTemp = new BiMap();
let homePageActionMapTemp = {};
//获取学生个人信息 basicInfo
var studentUserInfoUrl = "/homePage/get/studentUserInfo";
homePageActionMapTemp[ActionTypes.READ_STUDENT_USERINFO] = {
    url: studentUserInfoUrl,
    moduleID: "homePage",
    operate: "read"
};
homePageUrlMapTemp.put(studentUserInfoUrl, ActionTypes.READ_STUDENT_USERINFO);  //url - actionID 映射

//右侧  学生自己的排名情况
var rankUrl = "/homePage/get/rankState";
homePageActionMapTemp[ActionTypes.GET_STUDENT_RANKSTATE] = {
    url: rankUrl,
    moduleID: "homePage",
    operate: "read"
};
homePageUrlMapTemp.put(rankUrl, ActionTypes.GET_STUDENT_RANKSTATE);  //url - actionID 映射

//7选3卡片：7选3选科结果 学科兴趣  学科能力  意向专业
var chooseSubjectUrl = "/homePage/get/chooseSubject";
homePageActionMapTemp[ActionTypes.GET_STUDENT_SUBJECTCHOICESTATE] = {
    url: chooseSubjectUrl,
    moduleID: "homePage",
    operate: "read"
};
homePageUrlMapTemp.put(chooseSubjectUrl, ActionTypes.GET_STUDENT_SUBJECTCHOICESTATE);  //url - actionID 映射

//测评中心 完成情况
var assessCenterUrl = "/homePage/get/careerState";
homePageActionMapTemp[ActionTypes.GET_STUDENT_CAREERSTATE] = {
    url: assessCenterUrl,
    moduleID: "homePage",
    operate: "read"
};
homePageUrlMapTemp.put(assessCenterUrl, ActionTypes.GET_STUDENT_CAREERSTATE);  //url - actionID 映射
//自我剖析 -- 获取
var GET_STUDENT_ANALYZEMYSELF = "/selfAnalyse/Get/selfAnalyseInfos";
homePageActionMapTemp[ActionTypes.GET_STUDENT_ANALYZEMYSELF] = {
    url: GET_STUDENT_ANALYZEMYSELF,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(GET_STUDENT_ANALYZEMYSELF, ActionTypes.GET_STUDENT_ANALYZEMYSELF);  //url - actionID 映射
//自我剖析  -- 保存
var analyzeMyselfUpdateUrl = "/selfAnalyse/Set/saveSelfAnalyseInfo";
homePageActionMapTemp[ActionTypes.SET_STUDENT_ANALYZEMYSELF] = {

    url: analyzeMyselfUpdateUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(analyzeMyselfUpdateUrl, ActionTypes.SET_STUDENT_ANALYZEMYSELF);  //url - actionID 映射

//目标设定  -- 获取
var GET_STUDENT_TARGETSTATE = "/stuTargetSetting/Get/stuTargetSetting";
homePageActionMapTemp[ActionTypes.GET_STUDENT_TARGETSTATE] = {
    url: GET_STUDENT_TARGETSTATE,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(GET_STUDENT_TARGETSTATE, ActionTypes.GET_STUDENT_TARGETSTATE);  //url - actionID 映射
//目标设定  -- 保存
var SET_STUDENT_TARGETSTATE = "/stuTargetSetting/Set/saveStuTargetSetting";
homePageActionMapTemp[ActionTypes.SET_STUDENT_TARGETSTATE] = {
    url: SET_STUDENT_TARGETSTATE,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(SET_STUDENT_TARGETSTATE, ActionTypes.SET_STUDENT_TARGETSTATE);  //url - actionID 映射



//综合素质纪录  八项
var comprehensiveQualityRecordsUrl = "/homePage/get/comprehensiveQualityRecords";
homePageActionMapTemp[ActionTypes.GET_STUDENT_COMPROHENSIVEQUALITYCARDS] = {
    url: comprehensiveQualityRecordsUrl,
    moduleID: "homePage",
    operate: "read"
};
homePageUrlMapTemp.put(comprehensiveQualityRecordsUrl, ActionTypes.GET_STUDENT_COMPROHENSIVEQUALITYCARDS);  //url - actionID 映射

//选修课，选择名称--所属类别--课程学分
var electiveCourseCategoryUrl = "/homePage/get/electiveCourseCategory";
homePageActionMapTemp[ActionTypes.GET_ELECTIVECOURSE_CATEGORY] = {
    url: electiveCourseCategoryUrl,
    moduleID: "homePage",
    operate: "read"
};
homePageUrlMapTemp.put(electiveCourseCategoryUrl, ActionTypes.GET_ELECTIVECOURSE_CATEGORY);  //url - actionID 映射

//同学眼中的我--- 同学对我的印象
var studentImpressionUrl = "/stuImpression/Get/studentEvaluates";
homePageActionMapTemp[ActionTypes.GET_STUDENT_IMPRESSION] = {
    url: studentImpressionUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(studentImpressionUrl, ActionTypes.GET_STUDENT_IMPRESSION);  //url - actionID 映射

//同学眼中的我--- 获取印象列表
var schoolProvidedImpressionsUrl = "/schoolImpressionDict/Get/impressionDicts";
homePageActionMapTemp[ActionTypes.SCHOOL_PROVIDED_IMPRESSIONS] = {
    url: schoolProvidedImpressionsUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(schoolProvidedImpressionsUrl, ActionTypes.SCHOOL_PROVIDED_IMPRESSIONS);  //url - actionID 映射

//同学眼中的我--- 保存印象
var studentImpressionsUrl = "/stuImpression/Set/saveStudentEvaluates";
homePageActionMapTemp[ActionTypes.SET_STUDENT_IMPRESSIONS] = {
    url: studentImpressionsUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(studentImpressionsUrl, ActionTypes.SET_STUDENT_IMPRESSIONS);  //url - actionID 映射


//最近来访
var latestVisitorUrl = "/stuLatestVisitor/Get/stuLatestVisitors";
homePageActionMapTemp[ActionTypes.GET_STUDENT_LATESTVISITOR] = {
    url: latestVisitorUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: false
};
homePageUrlMapTemp.put(latestVisitorUrl, ActionTypes.GET_STUDENT_LATESTVISITOR);  //url - actionID 映射

//获取主页搜索结果
var searchUrl = "/HomePageSearch/Get/HomePageSearchResult";
homePageActionMapTemp[ActionTypes.GET_HOMEPAGE_SEARCHRESULT] = {
    url: searchUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: true
};
homePageUrlMapTemp.put(searchUrl, ActionTypes.GET_HOMEPAGE_SEARCHRESULT);  //url - actionID 映射

var IntroUrl = "/HomePageSearch/Get/HomePageSearchResultIntro";
homePageActionMapTemp[ActionTypes.GET_RESULTINTRO] = {
    url: IntroUrl,
    moduleID: "homePage",
    operate: "read",
    useMockData: true
};
homePageUrlMapTemp.put(IntroUrl, ActionTypes.GET_RESULTINTRO);  //url - actionID 映射

export const homePageActionMap = homePageActionMapTemp;
export const homePageUrlMap = homePageUrlMapTemp;