

import * as ActionTypes from "./CommonActionTypes";
import BiMap = require("../../common/Collect/BiMap");
let commonActionMapTemp = {};
let commonUrlMapTemp = new BiMap();

var GET_COMMON_ACTIVITIES = '/url/here/GET_COMMON_ACTIVITIES'; //对应action请求url，baseurl之后的路径，
commonActionMapTemp[ActionTypes.GET_COMMON_ACTIVITIES] = {
    url: GET_COMMON_ACTIVITIES,
    moduleID: 'teacher',
    operate: 'read'
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
commonUrlMapTemp.put(GET_COMMON_ACTIVITIES, ActionTypes.GET_COMMON_ACTIVITIES);

var GET_COMMON_SOCIALINFO = '/url/here/GET_COMMON_SOCIALINFO'; //对应action请求url，baseurl之后的路径，
commonActionMapTemp[ActionTypes.GET_COMMON_SOCIALINFO] = {
    url: GET_COMMON_SOCIALINFO,
    moduleID: 'teacher',
    operate: 'read'
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
commonUrlMapTemp.put(GET_COMMON_SOCIALINFO, ActionTypes.GET_COMMON_SOCIALINFO);

//取消关注
var SET_COMMON_CANCELFOLLOWED = '/url/here/SET_COMMON_CANCELFOLLOWED'; //对应action请求url，baseurl之后的路径，
commonActionMapTemp[ActionTypes.SET_COMMON_CANCELFOLLOWED] = {
    url: SET_COMMON_CANCELFOLLOWED,
    moduleID: 'search',
    operate: 'read'
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
commonUrlMapTemp.put(SET_COMMON_CANCELFOLLOWED, ActionTypes.SET_COMMON_CANCELFOLLOWED);

//加关注
var SET_COMMON_BECOMEFOLLOWER = '/url/here/SET_COMMON_BECOMEFOLLOWER'; //对应action请求url，baseurl之后的路径，
commonActionMapTemp[ActionTypes.SET_COMMON_BECOMEFOLLOWER] = {
    url: SET_COMMON_BECOMEFOLLOWER,
    moduleID: 'search',
    operate: 'read'
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
commonUrlMapTemp.put(SET_COMMON_BECOMEFOLLOWER, ActionTypes.SET_COMMON_BECOMEFOLLOWER);

//
var GET_COMMON_OTHERUSERREGIONSCHOOLINFO = '/url/here/GET_COMMON_OTHERUSERREGIONSCHOOLINFO'; //对应action请求url，baseurl之后的路径，
commonActionMapTemp[ActionTypes.GET_COMMON_OTHERUSERREGIONSCHOOLINFO] = {
    url: GET_COMMON_OTHERUSERREGIONSCHOOLINFO,
    moduleID: 'search',
    operate: 'read',
    useMockData: false};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
commonUrlMapTemp.put(GET_COMMON_OTHERUSERREGIONSCHOOLINFO, ActionTypes.GET_COMMON_OTHERUSERREGIONSCHOOLINFO);


var ADD_COMMON_VISITRECORD = '/stuLatestVisitor/Set/saveStuLatestVisitor'; //对应action请求url，baseurl之后的路径，
commonActionMapTemp[ActionTypes.ADD_COMMON_VISITRECORD] = {
    url: ADD_COMMON_VISITRECORD,
    moduleID: 'search',
    operate: 'read',
    useMockData: false
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
commonUrlMapTemp.put(ADD_COMMON_VISITRECORD, ActionTypes.ADD_COMMON_VISITRECORD);

export const commonUrlMap = commonUrlMapTemp;
export const commonActionMap = commonActionMapTemp;