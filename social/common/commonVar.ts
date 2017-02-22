
import {getSchoolIDFromStorage, getRegionIDFromStorage} from "./storageUtil";
declare var hzyCommon: any;
declare var window: any;
declare var wx: any;
declare var $:any;
//export const serverIP = 'test.nicezhuanye.com';
//export const serverIP = '192.168.31.216:8080';
//export const serverIP = 'test.nicezhuanye.com:8091';
//export const serverIP = 'school.nicezhuanye.com';
//export const serverIP = '192.168.1.110:8080';
//export const serverIP = '192.168.199.195:8080';
//export const serverIP = 'nicezy.wicp.net';
//export const serverIP = 'localhost:8080';
//export const serverIP = '192.168.199.246:8080';
//export const serverIP = '192.168.1.108:8080';
export const serverIP = hzyCommon.serverIP;

export const isTestBackendAPI = false;
export const GlobalDatasource = "GlobalForceUseMockData";//GlobalForceToUseRealData|GlobalUseComponentData|GlobalForceUseMockData;

const isUseRegionIDAndSchoolIDInRestPath = true;//是否在rest的路径中使用regionID 和 schoolID

window.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

export const debug = hzyCommon.debug;
export const wechatDebug = false;
export const console = window.console || {
        log: function () {
            return;
        }
    };
export const stepID2NameMap = {
    "1": "学科兴趣排序",
    "2": "学科能力排序",
    "3": "职业性格测评",
    "4": "职业兴趣测评",
    "7": "学科初选",
    "13": "选择意向专业"
}

export const subjectNameDisplayMap = {
	"物理": "物理",
	"化学": "化学",
	"生物": "生物",
	"历史": "历史",
	"地理": "地理",
	"政治": "政治",
	"技术": "技术"
}

export function isDebug() {
    return hzyCommon.isDebug();
}
//todo
var schoolID = 4;
var regionID = 98;
//var schoolID = getSchoolIDFromStorage();
//var regionID = getRegionIDFromStorage();

//todo 根据userid不同baseUrl的regionID和schoolID不同
var regionIDAndSchoolIDPath = isUseRegionIDAndSchoolIDInRestPath? '/'+regionID + "/" + schoolID: "";
///rest
export const baseUrl = 'http://' + serverIP + '/Nicezhuanye';//
//export const loginUrl = 'http://' + serverIP + '/Nicezhuanye/app/loginv2.html';//
export const loginUrl = 'http://' + serverIP + '/Nicezhuanye/webapp/login.html';
export const comprehensiveURL = 'http://' + serverIP + '/Nicezhuanye/social';

export const currentVersion = "2.0";
export const clientType = "MobileBrowser";

//response status flag
export const statusSuccess = "success";
export const statusFail = "fail";

//hot line number
export const hotLine = "4000913985";