
// define action basic info here
import * as ActionTypes from "./TermAnalysisActionTypes";
import BiMap = require("../../common/Collect/BiMap");
let termAnalysisUrlMapTemp = new BiMap();
let termAnalysisActionMapTemp = {};

//班级积分排名
var rankInClassUrl = "/termAnalysis/get/rankInClass";
termAnalysisActionMapTemp[ActionTypes.GET_STUDENT_RANKINCLASS] = {
    url: rankInClassUrl,
    moduleID: "termAnalysis",
    operate: "read"
};
termAnalysisUrlMapTemp.put(rankInClassUrl, ActionTypes.GET_STUDENT_RANKINCLASS);  //url - actionID 映射

//获取成长积分记录
var integralScoreRecordUrl = "/termAnalysis/get/integralScoreRecord";
termAnalysisActionMapTemp[ActionTypes.GET_STUDENT_INTEGRALSCORERECORD] = {
    url: integralScoreRecordUrl,
    moduleID: "termAnalysis",
    operate: "read"
};
termAnalysisUrlMapTemp.put(integralScoreRecordUrl, ActionTypes.GET_STUDENT_INTEGRALSCORERECORD);  //url - actionID 映射

//月度总结
var monthSummaryUrl = "/stuMonthSummary/Get/stuMonthSummarys";
termAnalysisActionMapTemp[ActionTypes.GET_STUDENT_MONTHSUMMARY] = {
    url: monthSummaryUrl,
    moduleID: "termAnalysis",
    operate: "read",
    useMockData: false
};
termAnalysisUrlMapTemp.put(monthSummaryUrl, ActionTypes.GET_STUDENT_MONTHSUMMARY);  //url - actionID 映射

//月度总结---按月份保存textarea
var setMonthSummaryUrl = "/stuMonthSummary/Set/saveStuMonthSummarys";
termAnalysisActionMapTemp[ActionTypes.SET_STUDENT_MONTHSUMMARY] = {
    url: setMonthSummaryUrl,
    moduleID: "termAnalysis",
    operate: "read",
    useMockData: false
};
termAnalysisUrlMapTemp.put(setMonthSummaryUrl, ActionTypes.SET_STUDENT_MONTHSUMMARY);  //url - actionID 映射

//学期总结
var semesterSummaryUrl = "/stuTermSummary/Get/stuTermSummarys";
termAnalysisActionMapTemp[ActionTypes.GET_STUDENT_SEMESTERSUMMARY] = {
    url: semesterSummaryUrl,
    moduleID: "termAnalysis",
    operate: "read",
    useMockData: false
};
termAnalysisUrlMapTemp.put(semesterSummaryUrl, ActionTypes.GET_STUDENT_SEMESTERSUMMARY);  //url - actionID 映射

//学期总结--保存评语textarea  --- 学期总评
var setSemesterSummaryUrl = "/stuTermSummary/Set/saveStuTermSummarys";
termAnalysisActionMapTemp[ActionTypes.SET_STUDENT_SEMESTERSUMMARY] = {
    url: setSemesterSummaryUrl,
    moduleID: "termAnalysis",
    operate: "read",
    useMockData: false
};
termAnalysisUrlMapTemp.put(setSemesterSummaryUrl, ActionTypes.SET_STUDENT_SEMESTERSUMMARY);  //url - actionID 映射

//学期总结--保存评语textarea  --- 品德操守等等
var setSemesterSummaryQualityUrl = "/stuTermSummary/Set/saveStuTermQualitySummarys";
termAnalysisActionMapTemp[ActionTypes.SET_STUDENT_SEMESTERQUALITYSUMMARY] = {
    url: setSemesterSummaryQualityUrl,
    moduleID: "termAnalysis",
    operate: "read",
    useMockData: false
};
termAnalysisUrlMapTemp.put(setSemesterSummaryQualityUrl, ActionTypes.SET_STUDENT_SEMESTERQUALITYSUMMARY);  //url - actionID 映射

//老师评语
var teacherEvaluateUrl = "/studentEvaluationScore/Get/studentEvaluationOverallWithScore";
termAnalysisActionMapTemp[ActionTypes.GET_STUDENT_TEACHEREVALUATE] = {
    url: teacherEvaluateUrl,
    moduleID: "termAnalysis",
    operate: "read",
    useMockData: false
};
termAnalysisUrlMapTemp.put(teacherEvaluateUrl, ActionTypes.GET_STUDENT_TEACHEREVALUATE);  //url - actionID 映射


//学业水平记录
var scoreWithTermUrl = "/termAnalysis/get/scoreWithTerm";
termAnalysisActionMapTemp[ActionTypes.GET_STUDENT_SCORE] = {
    url: scoreWithTermUrl,
    moduleID: "termAnalysis",
    operate: "read"
};
termAnalysisUrlMapTemp.put(scoreWithTermUrl, ActionTypes.GET_STUDENT_SCORE);  //url - actionID 映射

//同学互评--星星评价
var evaluateStudentStarUrl = "/termAnalysis/get/evaluateStudentStar";
termAnalysisActionMapTemp[ActionTypes.GET_EVALUATE_STUDENT_STAR] = {
    url: evaluateStudentStarUrl,
    moduleID: "termAnalysis",
    operate: "read"
};
termAnalysisUrlMapTemp.put(evaluateStudentStarUrl, ActionTypes.GET_EVALUATE_STUDENT_STAR);  //url - actionID 映射

//同学互评--我的星星得分
var evaluateStudentMySelfStarUrl = "/termAnalysis/get/evaluateStudentMySelfStar";
termAnalysisActionMapTemp[ActionTypes.GET_EVALUATE_STUDENT_MYSELF_STAR] = {
    url: evaluateStudentMySelfStarUrl,
    moduleID: "termAnalysis",
    operate: "read"
};
termAnalysisUrlMapTemp.put(evaluateStudentMySelfStarUrl, ActionTypes.GET_EVALUATE_STUDENT_MYSELF_STAR);  //url - actionID 映射


export const termAnalysisActionMap = termAnalysisActionMapTemp;
export const termAnalysisUrlMap = termAnalysisUrlMapTemp;