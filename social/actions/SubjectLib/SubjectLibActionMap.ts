
// define action basic info here
import * as ActionTypes from "./SubjectLibActionTypes";
import BiMap = require("../../common/Collect/BiMap");

let subjectLibActionMapTemp = {};
var initSubjLibUrl = "/subjectReference/Get/subjectReferences"; //对应action请求url，baseurl之后的路径，
subjectLibActionMapTemp[ActionTypes.INIT_SUBJLIB_CURRENTSUBJ] = {
    url: initSubjLibUrl,
    moduleID: "subjectLib",
    operate: "read",
    useMockData: false
};

export const subjectLibActionMap = subjectLibActionMapTemp;

//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
let subjectLibUrlMapTemp = new BiMap();
subjectLibUrlMapTemp.put(initSubjLibUrl, ActionTypes.INIT_SUBJLIB_CURRENTSUBJ);


export const subjectLibUrlMap = subjectLibUrlMapTemp;