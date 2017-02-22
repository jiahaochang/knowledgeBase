
// define action basic info here
import * as ActionTypes from "./MIAssessActionTypes";
import BiMap = require("../../../common/Collect/BiMap");

let MIAssessActionMapTemp = {};
var GET_MIASSESS_QUIZZES = "/url/here/GET_MIASSESS_QUIZZES"; //对应action请求url，baseurl之后的路径，必须‘/’开头，

MIAssessActionMapTemp[ActionTypes.GET_MIASSESS_QUIZZES] = {
    url: GET_MIASSESS_QUIZZES,
    moduleID: "MIAssess",
    operate: "read"
};
export const MIAssessActionMap = MIAssessActionMapTemp;

//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
let MIAssessUrlMapTemp = new BiMap();
MIAssessUrlMapTemp.put(GET_MIASSESS_QUIZZES, ActionTypes.GET_MIASSESS_QUIZZES);

//提交MI测试的答案
var SUBMIT_MIASSESS_ANSWERS = "/url/here/SUBMIT_MIASSESS_ANSWERS";
MIAssessActionMapTemp[ActionTypes.SUBMIT_MIASSESS_ANSWERS] = {
    url: SUBMIT_MIASSESS_ANSWERS,
    moduleID: "MIAssess",
    operate: "read"
};
MIAssessUrlMapTemp.put(SUBMIT_MIASSESS_ANSWERS, ActionTypes.SUBMIT_MIASSESS_ANSWERS);

//获取MI测试是否完成的状态
var GET_MIASSESS_MIASSWSSFINISHSTATE = "/url/here/GET_MIASSESS_MIASSWSSFINISHSTATE";
MIAssessActionMapTemp[ActionTypes.GET_MIASSESS_MIASSWSSFINISHSTATE] = {
    url: GET_MIASSESS_MIASSWSSFINISHSTATE,
    moduleID: "MIAssess",
    operate: "read"
};
MIAssessUrlMapTemp.put(GET_MIASSESS_MIASSWSSFINISHSTATE, ActionTypes.GET_MIASSESS_MIASSWSSFINISHSTATE);

//获取MI测试引导页面介绍语
var GET_MIASSESS_INTRODUCTION = "/url/here/GET_MIASSESS_INTRODUCTION";
MIAssessActionMapTemp[ActionTypes.GET_MIASSESS_INTRODUCTION] = {
    url: GET_MIASSESS_INTRODUCTION,
    moduleID: "MIAssess",
    operate: "read"
};
MIAssessUrlMapTemp.put(GET_MIASSESS_INTRODUCTION, ActionTypes.GET_MIASSESS_INTRODUCTION);

//获取MI测试的结果
var GET_MIASSESS_MI_REPORT = "/url/here/GET_MIASSESS_MI_REPORT";
MIAssessActionMapTemp[ActionTypes.GET_MIASSESS_MI_REPORT] = {
    url: GET_MIASSESS_MI_REPORT,
    moduleID: "MIAssess",
    operate: "read"
};
MIAssessUrlMapTemp.put(GET_MIASSESS_MI_REPORT, ActionTypes.GET_MIASSESS_MI_REPORT);

export const MIAssessUrlMap = MIAssessUrlMapTemp;