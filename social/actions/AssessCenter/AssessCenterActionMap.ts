
import * as ActionTypes from "./AssessCenterActionTypes";
import BiMap = require("../../common/Collect/BiMap");

let assessCenterActionMapTemp = {};

export const assessCenterActionMap = assessCenterActionMapTemp;

//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
let assessCenterUrlMapTemp = new BiMap();


//获取Holland测试的结果
var GET_ASSESSCENTER_HOLLAND_REPORT = '/url/here/GET_ASSESSCENTER_HOLLAND_REPORT'; //对应action请求url，baseurl之后的路径，
assessCenterActionMapTemp[ActionTypes.GET_ASSESSCENTER_HOLLAND_REPORT] = {
    url: GET_ASSESSCENTER_HOLLAND_REPORT,
    moduleID: 'assessCenter',
    operate: 'read'
};
assessCenterUrlMapTemp.put(GET_ASSESSCENTER_HOLLAND_REPORT, ActionTypes.GET_ASSESSCENTER_HOLLAND_REPORT);

//获取MBTI测试的结果
var GET_ASSESSCENTER_MBTI_REPORT = '/url/here/GET_ASSESSCENTER_MBTI_REPORT'; //对应action请求url，baseurl之后的路径，
assessCenterActionMapTemp[ActionTypes.GET_ASSESSCENTER_MBTI_REPORT] = {
    url: GET_ASSESSCENTER_MBTI_REPORT,
    moduleID: 'assessCenter',
    operate: 'read'
};
assessCenterUrlMapTemp.put(GET_ASSESSCENTER_MBTI_REPORT, ActionTypes.GET_ASSESSCENTER_MBTI_REPORT);

export const assessCenterUrlMap = assessCenterUrlMapTemp;