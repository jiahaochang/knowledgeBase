
// define action basic info here
import * as ActionTypes from "./CollegeLibActionTypes";
import BiMap = require("../../common/Collect/BiMap");

var collegeLibUrlFlag = "/collegeLibrary";

let collegeLibUrlMapTemp = new BiMap();
let collegeLibActionMapTemp = {};

//院校类别list（province,type,level,collegeprop）
var collegeConditionsUrl = collegeLibUrlFlag + "/Get/collegeHomeDicts";
collegeLibActionMapTemp[ActionTypes.GET_COLLEGELIB_CONDITIONS] = {
    url: collegeConditionsUrl,
    moduleID: "collegeLib",
    operate: "read",
    useMockData: true
};
collegeLibUrlMapTemp.put(collegeConditionsUrl, ActionTypes.GET_COLLEGELIB_CONDITIONS);  //url - actionID 映射

//院校列表
var collegeLibUrl = collegeLibUrlFlag + "/Get/collegeInfos";
collegeLibActionMapTemp[ActionTypes.GET_COLLEGELIB_COLLEGELIST] = {
    url: collegeLibUrl,
    moduleID: "collegeLib",
    operate: "read",
    useMockData: true
};
collegeLibUrlMapTemp.put(collegeLibUrl, ActionTypes.GET_COLLEGELIB_COLLEGELIST);  //url - actionID 映射

//学校详情
var collegeLibDetailUrl = collegeLibUrlFlag + "/Get/collegeInfo";
collegeLibActionMapTemp[ActionTypes.GET_COLLEGELIB_COLLEGEDETAIL] = {
    url: collegeLibDetailUrl,
    moduleID: "collegeLib",
    operate: "read",
    useMockData: true,
};
collegeLibUrlMapTemp.put(collegeLibDetailUrl, ActionTypes.GET_COLLEGELIB_COLLEGEDETAIL);  //url - actionID 映射


export const collegeLibActionMap = collegeLibActionMapTemp;
export const collegeLibUrlMap = collegeLibUrlMapTemp;