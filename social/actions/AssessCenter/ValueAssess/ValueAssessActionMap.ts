
// define action basic info here
import * as ActionTypes from "./ValueAssessActionTypes";
import BiMap = require("../../../common/Collect/BiMap");

let ValueAssessActionMapTemp = {};

//获取价值观测试完成状态
var GET_VALUEASSESS_VALUEASSESSFINISHSTATE = "/url/here/GET_VALUEASSESS_VALUEASSESSFINISHSTATE"; //对应action请求url，baseurl之后的路径，必须‘/’开头，
ValueAssessActionMapTemp[ActionTypes.GET_VALUEASSESS_VALUEASSESSFINISHSTATE] = {
    url: GET_VALUEASSESS_VALUEASSESSFINISHSTATE,
    moduleID: "ValueAssess",
    operate: "read"
};
export const ValueAssessActionMap = ValueAssessActionMapTemp;

//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
let ValueAssessUrlMapTemp = new BiMap();
ValueAssessUrlMapTemp.put(GET_VALUEASSESS_VALUEASSESSFINISHSTATE, ActionTypes.GET_VALUEASSESS_VALUEASSESSFINISHSTATE);

//获取价值观测试的题目
var GET_VALUEASSESS_QUIZZES = "/url/here/GET_VALUEASSESS_QUIZZES"; //对应action请求url，baseurl之后的路径，必须‘/’开头，
ValueAssessActionMapTemp[ActionTypes.GET_VALUEASSESS_QUIZZES] = {
    url: GET_VALUEASSESS_QUIZZES,
    moduleID: "ValueAssess",
    operate: "read"
};
ValueAssessUrlMapTemp.put(GET_VALUEASSESS_QUIZZES, ActionTypes.GET_VALUEASSESS_QUIZZES);

//获取价值观测试引导页导语
var GET_VALUEASSESS_VALUE_INTRODUCTION = "/url/here/GET_VALUEASSESS_VALUE_INTRODUCTION"; //对应action请求url，baseurl之后的路径，必须‘/’开头，
ValueAssessActionMapTemp[ActionTypes.GET_VALUEASSESS_VALUE_INTRODUCTION] = {
    url: GET_VALUEASSESS_VALUE_INTRODUCTION,
    moduleID: "ValueAssess",
    operate: "read"
};
ValueAssessUrlMapTemp.put(GET_VALUEASSESS_VALUE_INTRODUCTION, ActionTypes.GET_VALUEASSESS_VALUE_INTRODUCTION);

//获取价值观测试结果
var GET_VALUEASSESS_VALUE_REPORT = "/url/here/GET_VALUEASSESS_VALUE_REPORT"; //对应action请求url，baseurl之后的路径，必须‘/’开头，
ValueAssessActionMapTemp[ActionTypes.GET_VALUEASSESS_VALUE_REPORT] = {
    url: GET_VALUEASSESS_VALUE_REPORT,
    moduleID: "ValueAssess",
    operate: "read"
};
ValueAssessUrlMapTemp.put(GET_VALUEASSESS_VALUE_REPORT, ActionTypes.GET_VALUEASSESS_VALUE_REPORT);

export const ValueAssessUrlMap = ValueAssessUrlMapTemp;