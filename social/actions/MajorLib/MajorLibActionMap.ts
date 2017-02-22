
// define action basic info here
import * as ActionTypes from "./MajorLibActionTypes";
import BiMap = require("../../common/Collect/BiMap");
let majorLibUrlMapTemp = new BiMap();
let majorLibActionMapTemp = {};


//专业列表
var majorLibUrl = "/majorLibrary/Get/majorHomeDickInfos";
majorLibActionMapTemp[ActionTypes.GET_MAJORLIB_MAJORLIB] = {
    url: majorLibUrl,
    moduleID: "majorLib",
    operate: "read",
    useMockData: true
};
majorLibUrlMapTemp.put(majorLibUrl, ActionTypes.GET_MAJORLIB_MAJORLIB);  //url - actionID 映射

//专业详情
var majorLibDetailUrl = "/majorLibrary/Get/majorDetail";
majorLibActionMapTemp[ActionTypes.GET_MAJORLIB_MAJORDETAIL] = {
    url: majorLibDetailUrl,
    moduleID: "majorLib",
    operate: "read",
    useMockData: true
};
majorLibUrlMapTemp.put(majorLibDetailUrl, ActionTypes.GET_MAJORLIB_MAJORDETAIL);  //url - actionID 映射


export const majorLibActionMap = majorLibActionMapTemp;
export const majorLibUrlMap = majorLibUrlMapTemp;