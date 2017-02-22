"use strict";
// define action basic info here
import * as ActionTypes from "./AdminPageActionTypes";
import BiMap = require("../../common/Collect/BiMap");

let adminPageActionMapTemp = {};
let adminPageUrlMapTemp = new BiMap();

var READ_ADMIN_USERINFO = '/url/here/READ_ADMIN_USERINFO'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_USERINFO] = {
    url: READ_ADMIN_USERINFO,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
adminPageUrlMapTemp.put(READ_ADMIN_USERINFO, ActionTypes.READ_ADMIN_USERINFO);

var GET_ADMIN_TERMWITHGRADEYEARSTRUCT = '/url/here/GET_ADMIN_TERMWITHGRADEYEARSTRUCT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT] = {
    url: GET_ADMIN_TERMWITHGRADEYEARSTRUCT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_TERMWITHGRADEYEARSTRUCT, ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT);

var GET_ADMIN_SCHOOLACCOUNTSTATISTIC = '/url/here/GET_ADMIN_SCHOOLACCOUNTSTATISTIC'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_SCHOOLACCOUNTSTATISTIC] = {
    url: GET_ADMIN_SCHOOLACCOUNTSTATISTIC,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_SCHOOLACCOUNTSTATISTIC, ActionTypes.GET_ADMIN_SCHOOLACCOUNTSTATISTIC);

var READ_ADMIN_MANAGERCOUNT = '/url/here/READ_ADMIN_MANAGERCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_MANAGERCOUNT] = {
    url: READ_ADMIN_MANAGERCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_MANAGERCOUNT, ActionTypes.READ_ADMIN_MANAGERCOUNT);

var CREATE_ADMIN_MANAGERCOUNT = '/url/here/CREATE_ADMIN_MANAGERCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.CREATE_ADMIN_MANAGERCOUNT] = {
    url: CREATE_ADMIN_MANAGERCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(CREATE_ADMIN_MANAGERCOUNT, ActionTypes.CREATE_ADMIN_MANAGERCOUNT);

var UPDATE_ADMIN_MANAGERCOUNT = '/url/here/UPDATE_ADMIN_MANAGERCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.UPDATE_ADMIN_MANAGERCOUNT] = {
    url: UPDATE_ADMIN_MANAGERCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(UPDATE_ADMIN_MANAGERCOUNT, ActionTypes.UPDATE_ADMIN_MANAGERCOUNT);

var DELETE_ADMIN_MANAGERCOUNT = '/url/here/DELETE_ADMIN_MANAGERCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DELETE_ADMIN_MANAGERCOUNT] = {
    url: DELETE_ADMIN_MANAGERCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DELETE_ADMIN_MANAGERCOUNT, ActionTypes.DELETE_ADMIN_MANAGERCOUNT);

var READ_ADMIN_STUDENTACCOUNT = '/url/here/READ_ADMIN_STUDENTACCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_STUDENTACCOUNT] = {
    url: READ_ADMIN_STUDENTACCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_STUDENTACCOUNT, ActionTypes.READ_ADMIN_STUDENTACCOUNT);

var CREATE_ADMIN_STUDENTACCOUNT = '/url/here/CREATE_ADMIN_STUDENTACCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.CREATE_ADMIN_STUDENTACCOUNT] = {
    url: CREATE_ADMIN_STUDENTACCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(CREATE_ADMIN_STUDENTACCOUNT, ActionTypes.CREATE_ADMIN_STUDENTACCOUNT);

var UPDATE_ADMIN_STUDENTACCOUNT = '/url/here/UPDATE_ADMIN_STUDENTACCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.UPDATE_ADMIN_STUDENTACCOUNT] = {
    url: UPDATE_ADMIN_STUDENTACCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(UPDATE_ADMIN_STUDENTACCOUNT, ActionTypes.UPDATE_ADMIN_STUDENTACCOUNT);

var DELETE_ADMIN_STUDENTACCOUNT = '/url/here/DELETE_ADMIN_STUDENTACCOUNT'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DELETE_ADMIN_STUDENTACCOUNT] = {
    url: DELETE_ADMIN_STUDENTACCOUNT,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DELETE_ADMIN_STUDENTACCOUNT, ActionTypes.DELETE_ADMIN_STUDENTACCOUNT);

var READ_ADMIN_EXAMINFO = '/url/here/READ_ADMIN_EXAMINFO'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_EXAMINFO] = {
    url: READ_ADMIN_EXAMINFO,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_EXAMINFO, ActionTypes.READ_ADMIN_EXAMINFO);

var CREATE_ADMIN_EXAMINFO = '/url/here/CREATE_ADMIN_EXAMINFO'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.CREATE_ADMIN_EXAMINFO] = {
    url: CREATE_ADMIN_EXAMINFO,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(CREATE_ADMIN_EXAMINFO, ActionTypes.CREATE_ADMIN_EXAMINFO);

var UPDATE_ADMIN_EXAMINFO = '/url/here/UPDATE_ADMIN_EXAMINFO'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.UPDATE_ADMIN_EXAMINFO] = {
    url: UPDATE_ADMIN_EXAMINFO,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(UPDATE_ADMIN_EXAMINFO, ActionTypes.UPDATE_ADMIN_EXAMINFO);

var DELETE_ADMIN_EXAMINFO = '/url/here/DELETE_ADMIN_EXAMINFO'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DELETE_ADMIN_EXAMINFO] = {
    url: DELETE_ADMIN_EXAMINFO,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DELETE_ADMIN_EXAMINFO, ActionTypes.DELETE_ADMIN_EXAMINFO);

var UPLOAD_ADMIN_EXAMSCORE = '/url/here/UPLOAD_ADMIN_EXAMSCORE'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.UPLOAD_ADMIN_EXAMSCORE] = {
    url: UPLOAD_ADMIN_EXAMSCORE,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(UPLOAD_ADMIN_EXAMSCORE, ActionTypes.UPLOAD_ADMIN_EXAMSCORE);

var GET_ADMIN_MONTHTHEME = '/url/here/GET_ADMIN_MONTHTHEME'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_MONTHTHEME] = {
    url: GET_ADMIN_MONTHTHEME,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_MONTHTHEME, ActionTypes.GET_ADMIN_MONTHTHEME);

var SET_ADMIN_MONTHTHEME = '/url/here/SET_ADMIN_MONTHTHEME'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.SET_ADMIN_MONTHTHEME] = {
    url: SET_ADMIN_MONTHTHEME,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(SET_ADMIN_MONTHTHEME, ActionTypes.SET_ADMIN_MONTHTHEME);

var READ_ADMIN_EVENTHOLDER = '/url/here/READ_ADMIN_EVENTHOLDER'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_EVENTHOLDER] = {
    url: READ_ADMIN_EVENTHOLDER,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_EVENTHOLDER, ActionTypes.READ_ADMIN_EVENTHOLDER);

var CREATE_ADMIN_EVENTHOLDER = '/url/here/CREATE_ADMIN_EVENTHOLDER'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.CREATE_ADMIN_EVENTHOLDER] = {
    url: CREATE_ADMIN_EVENTHOLDER,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(CREATE_ADMIN_EVENTHOLDER, ActionTypes.CREATE_ADMIN_EVENTHOLDER);

var UPDATE_ADMIN_EVENTHOLDER = '/url/here/UPDATE_ADMIN_EVENTHOLDER'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.UPDATE_ADMIN_EVENTHOLDER] = {
    url: UPDATE_ADMIN_EVENTHOLDER,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(UPDATE_ADMIN_EVENTHOLDER, ActionTypes.UPDATE_ADMIN_EVENTHOLDER);

var DELETE_ADMIN_EVENTHOLDER = '/url/here/DELETE_ADMIN_EVENTHOLDER'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DELETE_ADMIN_EVENTHOLDER] = {
    url: DELETE_ADMIN_EVENTHOLDER,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DELETE_ADMIN_EVENTHOLDER, ActionTypes.DELETE_ADMIN_EVENTHOLDER);

var READ_ADMIN_IMPRESSIONWORD = '/url/here/READ_ADMIN_IMPRESSIONWORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_IMPRESSIONWORD] = {
    url: READ_ADMIN_IMPRESSIONWORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_IMPRESSIONWORD, ActionTypes.READ_ADMIN_IMPRESSIONWORD);

var CREATE_ADMIN_IMPRESSIONWORD = '/url/here/CREATE_ADMIN_IMPRESSIONWORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.CREATE_ADMIN_IMPRESSIONWORD] = {
    url: CREATE_ADMIN_IMPRESSIONWORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(CREATE_ADMIN_IMPRESSIONWORD, ActionTypes.CREATE_ADMIN_IMPRESSIONWORD);

var UPDATE_ADMIN_IMPRESSIONWORD = '/url/here/UPDATE_ADMIN_IMPRESSIONWORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.UPDATE_ADMIN_IMPRESSIONWORD] = {
    url: UPDATE_ADMIN_IMPRESSIONWORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(UPDATE_ADMIN_IMPRESSIONWORD, ActionTypes.UPDATE_ADMIN_IMPRESSIONWORD);

var DELETE_ADMIN_IMPRESSIONWORD = '/url/here/DELETE_ADMIN_IMPRESSIONWORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DELETE_ADMIN_IMPRESSIONWORD] = {
    url: DELETE_ADMIN_IMPRESSIONWORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DELETE_ADMIN_IMPRESSIONWORD, ActionTypes.DELETE_ADMIN_IMPRESSIONWORD);

var GET_ADMIN_INTEGRALSCOREITEM = '/url/here/GET_ADMIN_INTEGRALSCOREITEM'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_INTEGRALSCOREITEM] = {
    url: GET_ADMIN_INTEGRALSCOREITEM,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_INTEGRALSCOREITEM, ActionTypes.GET_ADMIN_INTEGRALSCOREITEM);

var SET_ADMIN_INTEGRALSCOREITEM = '/url/here/SET_ADMIN_INTEGRALSCOREITEM'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.SET_ADMIN_INTEGRALSCOREITEM] = {
    url: SET_ADMIN_INTEGRALSCOREITEM,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(SET_ADMIN_INTEGRALSCOREITEM, ActionTypes.SET_ADMIN_INTEGRALSCOREITEM);

var GET_ADMIN_ACTIVITYLIBSTATISTICS = '/url/here/GET_ADMIN_ACTIVITYLIBSTATISTICS'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_ACTIVITYLIBSTATISTICS] = {
    url: GET_ADMIN_ACTIVITYLIBSTATISTICS,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_ACTIVITYLIBSTATISTICS, ActionTypes.GET_ADMIN_ACTIVITYLIBSTATISTICS);

var GET_ADMIN_STUDENTACTIVITYSTATISTICS = '/url/here/GET_ADMIN_STUDENTACTIVITYSTATISTICS'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_STUDENTACTIVITYSTATISTICS] = {
    url: GET_ADMIN_STUDENTACTIVITYSTATISTICS,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_STUDENTACTIVITYSTATISTICS, ActionTypes.GET_ADMIN_STUDENTACTIVITYSTATISTICS);

var READ_ADMIN_STUDENTRECORD = '/url/here/READ_ADMIN_STUDENTRECORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_STUDENTRECORD] = {
    url: READ_ADMIN_STUDENTRECORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_STUDENTRECORD, ActionTypes.READ_ADMIN_STUDENTRECORD);

var CREATE_ADMIN_STUDENTRECORD = '/url/here/CREATE_ADMIN_STUDENTRECORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.CREATE_ADMIN_STUDENTRECORD] = {
    url: CREATE_ADMIN_STUDENTRECORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(CREATE_ADMIN_STUDENTRECORD, ActionTypes.CREATE_ADMIN_STUDENTRECORD);

var DOWNLOAD_ADMIN_STUDENTRECORD = '/url/here/DOWNLOAD_ADMIN_STUDENTRECORD'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DOWNLOAD_ADMIN_STUDENTRECORD] = {
    url: DOWNLOAD_ADMIN_STUDENTRECORD,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DOWNLOAD_ADMIN_STUDENTRECORD, ActionTypes.DOWNLOAD_ADMIN_STUDENTRECORD);

var READ_ADMIN_REPORTITEM = '/url/here/READ_ADMIN_REPORTITEM'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.READ_ADMIN_REPORTITEM] = {
    url: READ_ADMIN_REPORTITEM,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(READ_ADMIN_REPORTITEM, ActionTypes.READ_ADMIN_REPORTITEM);

var MARK_ADMIN_REPORTITEM = '/url/here/MARK_ADMIN_REPORTITEM'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.MARK_ADMIN_REPORTITEM] = {
    url: MARK_ADMIN_REPORTITEM,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(MARK_ADMIN_REPORTITEM, ActionTypes.MARK_ADMIN_REPORTITEM);

var ACCEPT_ADMIN_REPORTITEM = '/url/here/ACCEPT_ADMIN_REPORTITEM'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.ACCEPT_ADMIN_REPORTITEM] = {
    url: ACCEPT_ADMIN_REPORTITEM,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(ACCEPT_ADMIN_REPORTITEM, ActionTypes.ACCEPT_ADMIN_REPORTITEM);

var DELETE_ADMIN_REPORTITEM = '/url/here/DELETE_ADMIN_REPORTITEM'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.DELETE_ADMIN_REPORTITEM] = {
    url: DELETE_ADMIN_REPORTITEM,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(DELETE_ADMIN_REPORTITEM, ActionTypes.DELETE_ADMIN_REPORTITEM);

var GET_ADMIN_IMPRESSIONTYPES = '/url/here/GET_ADMIN_IMPRESSIONTYPES'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_IMPRESSIONTYPES] = {
    url: GET_ADMIN_IMPRESSIONTYPES,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_IMPRESSIONTYPES, ActionTypes.GET_ADMIN_IMPRESSIONTYPES);

//校园寻星--获取评选条目
var GET_ADMIN_STAROPTIONS = '/url/here/GET_ADMIN_STAROPTIONS'; //对应action请求url，baseurl之后的路径，
adminPageActionMapTemp[ActionTypes.GET_ADMIN_STAROPTIONS] = {
    url: GET_ADMIN_STAROPTIONS,
    modules: [
        {
            moduleID: 'adminPage',
            operate: ['read']
        }
    ]
};
adminPageUrlMapTemp.put(GET_ADMIN_STAROPTIONS, ActionTypes.GET_ADMIN_STAROPTIONS);

export const adminPageActionMap = adminPageActionMapTemp;
export const adminPageUrlMap = adminPageUrlMapTemp;