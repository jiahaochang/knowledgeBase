

import * as ActionTypes from "./JobLibActionTypes";
import BiMap = require("../../common/Collect/BiMap");

let jobLibActionMapTemp = {};
var mergeJobOptionsCareerUrl = "/jobCategory/Get/jobCategoriesWithSubJob"; //对应action请求url，baseurl之后的路径，
jobLibActionMapTemp[ActionTypes.GET_JOBLIB_JOBLIB] = {
    url: mergeJobOptionsCareerUrl,
    moduleID: "jobLib",
    operate: "read",
    useMockData: false,
};

export const jobLibActionMap = jobLibActionMapTemp;

var getJobIntroductionUrl = "/careerIntroduce/Get/careerMlByCareerCategoryId"; //对应action请求url，baseurl之后的路径，
jobLibActionMapTemp[ActionTypes.GET_JOBLIB_JOBINTRODUCTION] = {
    url: getJobIntroductionUrl,
    moduleID: "jobLib",
    operate: "read",
    useMockData: false,
};

//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
let jobLibUrlMapTemp = new BiMap();
jobLibUrlMapTemp.put(mergeJobOptionsCareerUrl, ActionTypes.GET_JOBLIB_JOBLIB);
jobLibUrlMapTemp.put(getJobIntroductionUrl, ActionTypes.GET_JOBLIB_JOBINTRODUCTION);


export const jobLibUrlMap = jobLibUrlMapTemp;