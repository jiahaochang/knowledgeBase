
// define action basic info here
import * as ActionTypes from "./TeacherPersonalPageActionTypes";
import BiMap = require("../../common/Collect/BiMap");

let teacherActionMapTemp = {};
let teacherUrlMapTemp = new BiMap();

var READ_TEACHER_USERINFO = '/url/here/READ_TEACHER_USERINFO'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_USERINFO] = {
    url: READ_TEACHER_USERINFO,
    moduleID: 'teacher',
    operate: 'read'
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
teacherUrlMapTemp.put(READ_TEACHER_USERINFO, ActionTypes.READ_TEACHER_USERINFO);

var GET_TEACHER_MODULECONFIG = '/url/here/GET_TEACHER_MODULECONFIG'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_MODULECONFIG] = {
    url: GET_TEACHER_MODULECONFIG,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(GET_TEACHER_MODULECONFIG, ActionTypes.GET_TEACHER_MODULECONFIG);

//获取学生列表 ---  不打分的
var GET_TEACHER_CLASSMATELIST = '/studentPerformanceRecord/Get/performanceStudentInfos'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_CLASSMATELIST] = {
    url: GET_TEACHER_CLASSMATELIST,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(GET_TEACHER_CLASSMATELIST, ActionTypes.GET_TEACHER_CLASSMATELIST);

var GET_TEACHER_RANKSTATE = '/url/here/GET_TEACHER_RANKSTATE'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_RANKSTATE] = {
    url: GET_TEACHER_RANKSTATE,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(GET_TEACHER_RANKSTATE, ActionTypes.GET_TEACHER_RANKSTATE);

//班级通知--获取
var GET_TEACHER_CLASSNOTIFICATION = '/teacherNotification/Get/notifications'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_CLASSNOTIFICATION] = {
    url: GET_TEACHER_CLASSNOTIFICATION,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(GET_TEACHER_CLASSNOTIFICATION, ActionTypes.GET_TEACHER_CLASSNOTIFICATION);

//班级通知--保存
var SET_TEACHER_CLASSNOTIFICATION = '/teacherNotification/Set/saveNotification'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SET_TEACHER_CLASSNOTIFICATION] = {
    url: SET_TEACHER_CLASSNOTIFICATION,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(SET_TEACHER_CLASSNOTIFICATION, ActionTypes.SET_TEACHER_CLASSNOTIFICATION);

//班级通知 -- 删除
var DELETE_TEACHER_CLASSNOTIFICATION = '/teacherNotification/Set/deleteNotification'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.DELETE_TEACHER_CLASSNOTIFICATION] = {
    url: DELETE_TEACHER_CLASSNOTIFICATION,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(DELETE_TEACHER_CLASSNOTIFICATION, ActionTypes.SET_TEACHER_CLASSNOTIFICATION);

var GET_TEACHER_RANKINCLASS = '/url/here/GET_TEACHER_RANKINCLASS'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_RANKINCLASS] = {
    url: GET_TEACHER_RANKINCLASS,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(GET_TEACHER_RANKINCLASS, ActionTypes.GET_TEACHER_RANKINCLASS);
//班团活动-信息
var READ_TEACHER_ACTIVITY = '/classActivity/Get/stuClassActivityInfos'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_ACTIVITY] = {
    url: READ_TEACHER_ACTIVITY,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(READ_TEACHER_ACTIVITY, ActionTypes.READ_TEACHER_ACTIVITY);
//班团活动-保存
var SAVE_TEACHER_ACTIVITY = '/classActivity/Set/saveStuClassActivityInfo'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SAVE_TEACHER_ACTIVITY] = {
    url: SAVE_TEACHER_ACTIVITY,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(SAVE_TEACHER_ACTIVITY, ActionTypes.SAVE_TEACHER_ACTIVITY);
//班团活动-删除
var DELETE_TEACHER_ACTIVITY = '/classActivity/Set/deleteStuClassActivityInfo'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.DELETE_TEACHER_ACTIVITY] = {
    url: DELETE_TEACHER_ACTIVITY,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(DELETE_TEACHER_ACTIVITY, ActionTypes.DELETE_TEACHER_ACTIVITY);

var READ_TEACHER_STUDENTPERFORMANCEOPTIONS = '/studentPerformanceRecord/Get/studentPerformanceOptions'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_STUDENTPERFORMANCEOPTIONS] = {
    url: READ_TEACHER_STUDENTPERFORMANCEOPTIONS,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(READ_TEACHER_STUDENTPERFORMANCEOPTIONS, ActionTypes.READ_TEACHER_STUDENTPERFORMANCEOPTIONS);

var READ_TEACHER_STUDENTPERFORMANCE_RECORD = '/studentPerformanceRecord/Get/studentPerformanceRecords'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_STUDENTPERFORMANCE_RECORD] = {
    url: READ_TEACHER_STUDENTPERFORMANCE_RECORD,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(READ_TEACHER_STUDENTPERFORMANCE_RECORD, ActionTypes.READ_TEACHER_STUDENTPERFORMANCE_RECORD);

var SAVE_TEACHER_STUDENTPERFORMANCE_RECORD = '/studentPerformanceRecord/Set/saveStudentPerformanceRecord'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SAVE_TEACHER_STUDENTPERFORMANCE_RECORD] = {
    url: SAVE_TEACHER_STUDENTPERFORMANCE_RECORD,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(SAVE_TEACHER_STUDENTPERFORMANCE_RECORD, ActionTypes.SAVE_TEACHER_STUDENTPERFORMANCE_RECORD);


var DELETE_TEACHER_STUDENTPERFORMANCE_RECORD = '/studentPerformanceRecord/Set/deleteStudentPerformanceRecord'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.DELETE_TEACHER_STUDENTPERFORMANCE_RECORD] = {
    url: DELETE_TEACHER_STUDENTPERFORMANCE_RECORD,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(DELETE_TEACHER_STUDENTPERFORMANCE_RECORD, ActionTypes.DELETE_TEACHER_STUDENTPERFORMANCE_RECORD);

//特殊学生情况 -- get特殊学生
var READ_TEACHER_SPECIALSTUDENT = '/specialStudent/Get/specialStudents'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_SPECIALSTUDENT] = {
    url: READ_TEACHER_SPECIALSTUDENT,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(READ_TEACHER_SPECIALSTUDENT, ActionTypes.READ_TEACHER_SPECIALSTUDENT);
//特殊学生情况 -- 添加特殊学生
var CREATE_TEACHER_SPECIALSTUDENT = '/specialStudent/Set/insertSpecialStudent'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.CREATE_TEACHER_SPECIALSTUDENT] = {
    url: CREATE_TEACHER_SPECIALSTUDENT,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(CREATE_TEACHER_SPECIALSTUDENT, ActionTypes.CREATE_TEACHER_SPECIALSTUDENT);

//特殊学生情况 -- 移除特殊学生---待定功能《未调试》
var DELETE_TEACHER_SPECIALSTUDENT = '/url/here/DELETE_TEACHER_SPECIALSTUDENT'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.DELETE_TEACHER_SPECIALSTUDENT] = {
    url: DELETE_TEACHER_SPECIALSTUDENT,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(DELETE_TEACHER_SPECIALSTUDENT, ActionTypes.DELETE_TEACHER_SPECIALSTUDENT);

//特殊学生情况 --- 学生过往记录list
var READ_TEACHER_SPECIALSTUDENT_RECORD = '/specialStudentRecord/Get/specialStudentRecords'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_SPECIALSTUDENT_RECORD] = {
    url: READ_TEACHER_SPECIALSTUDENT_RECORD,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(READ_TEACHER_SPECIALSTUDENT_RECORD, ActionTypes.READ_TEACHER_SPECIALSTUDENT_RECORD);

var SAVE_TEACHER_SPECIALSTUDENT_RECORD = '/specialStudentRecord/Set/saveSpecialStudentRecord'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SAVE_TEACHER_SPECIALSTUDENT_RECORD] = {
    url: SAVE_TEACHER_SPECIALSTUDENT_RECORD,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(SAVE_TEACHER_SPECIALSTUDENT_RECORD, ActionTypes.SAVE_TEACHER_SPECIALSTUDENT_RECORD);

var DELETE_TEACHER_SPECIALSTUDENT_RECORD = '/specialStudentRecord/Set/deleteSpecialStudentRecord'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.DELETE_TEACHER_SPECIALSTUDENT_RECORD] = {
    url: DELETE_TEACHER_SPECIALSTUDENT_RECORD,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(DELETE_TEACHER_SPECIALSTUDENT_RECORD, ActionTypes.DELETE_TEACHER_SPECIALSTUDENT_RECORD);
//班主任评价学生---给学生打分--获取
var GET_TEACHER_EVALUATESTUDENT_STAR = '/studentEvaluationScore/Get/studentEvaluationScores'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_EVALUATESTUDENT_STAR] = {
    url: GET_TEACHER_EVALUATESTUDENT_STAR,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(GET_TEACHER_EVALUATESTUDENT_STAR, ActionTypes.GET_TEACHER_EVALUATESTUDENT_STAR);

//班主任评价学生 --- 给学生打分--保存
var SET_TEACHER_EVALUATESTUDENT_STAR = '/studentEvaluationScore/Set/setStudentEvaluationScore'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SET_TEACHER_EVALUATESTUDENT_STAR] = {
    url: SET_TEACHER_EVALUATESTUDENT_STAR,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(SET_TEACHER_EVALUATESTUDENT_STAR, ActionTypes.SET_TEACHER_EVALUATESTUDENT_STAR);

//班主任评价学生 ---  综合评价获取
var GET_TEACHER_TERMEVALUATE = '/stuTermEvaluate/Get/stuTermEvaluates'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_TERMEVALUATE] = {
    url: GET_TEACHER_TERMEVALUATE,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(GET_TEACHER_TERMEVALUATE, ActionTypes.GET_TEACHER_TERMEVALUATE);
//班主任评价学生 ---  综合评价保存
var SET_TEACHER_TERMEVALUATE = '/stuTermEvaluate/Set/saveStuTermEvaluates'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SET_TEACHER_TERMEVALUATE] = {
    url: SET_TEACHER_TERMEVALUATE,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(SET_TEACHER_TERMEVALUATE, ActionTypes.SET_TEACHER_TERMEVALUATE);

//班主任评价学生---学生月度总结 --- 班主任月度评语--保存
var SET_TEACHER_MONTHEVALUATE = '/stuMonthSummary/Set/saveStuMonthSummaryEvaluate'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SET_TEACHER_MONTHEVALUATE] = {
    url: SET_TEACHER_MONTHEVALUATE,
    moduleID: 'teacher',
    operate: "read",
    useMockData: false
};
teacherUrlMapTemp.put(SET_TEACHER_MONTHEVALUATE, ActionTypes.SET_TEACHER_MONTHEVALUATE);

var GET_TEACHER_STUDENTMONTHSUMMARY = '/url/here/GET_TEACHER_STUDENTMONTHSUMMARY'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_STUDENTMONTHSUMMARY] = {
    url: GET_TEACHER_STUDENTMONTHSUMMARY,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(GET_TEACHER_STUDENTMONTHSUMMARY, ActionTypes.GET_TEACHER_STUDENTMONTHSUMMARY);

var GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS = '/url/here/GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS] = {
    url: GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS, ActionTypes.GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS);

//评语管理--获取table list
var READ_TEACHER_EVALUATESTUDENTDICT = '/moralComment/Get/moralComments'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.READ_TEACHER_EVALUATESTUDENTDICT] = {
    url: READ_TEACHER_EVALUATESTUDENTDICT,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(READ_TEACHER_EVALUATESTUDENTDICT, ActionTypes.READ_TEACHER_EVALUATESTUDENTDICT);
//评语管理--保存
var SAVE_TEACHER_QUALITYCATEGORYINFOS = '/moralComment/Set/saveMoralComment'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SAVE_TEACHER_REVIEWWORD] = {
    url: SAVE_TEACHER_QUALITYCATEGORYINFOS,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(SAVE_TEACHER_QUALITYCATEGORYINFOS, ActionTypes.SAVE_TEACHER_REVIEWWORD);
//评语管理--删除
var DELETE_TEACHER_REVIEWWORD = '/moralComment/Set/deleteMoralComment'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.DELETE_TEACHER_REVIEWWORD] = {
    url: DELETE_TEACHER_REVIEWWORD,
    moduleID: 'teacher',
    operate: 'read',
    useMockData: false
};
teacherUrlMapTemp.put(DELETE_TEACHER_REVIEWWORD, ActionTypes.DELETE_TEACHER_REVIEWWORD);


var SUBMIT_TEACHER_STUTERMQUALITYEVALUATION = '/url/here/SUBMIT_TEACHER_STUTERMQUALITYEVALUATION'; //对应action请求url，baseurl之后的路径，
teacherActionMapTemp[ActionTypes.SUBMIT_TEACHER_STUTERMQUALITYEVALUATION] = {
    url: SUBMIT_TEACHER_STUTERMQUALITYEVALUATION,
    moduleID: 'teacher',
    operate: 'read'
};
teacherUrlMapTemp.put(SUBMIT_TEACHER_STUTERMQUALITYEVALUATION, ActionTypes.SUBMIT_TEACHER_STUTERMQUALITYEVALUATION);


export const teacherActionMap = teacherActionMapTemp;
export const teacherUrlMap = teacherUrlMapTemp;


