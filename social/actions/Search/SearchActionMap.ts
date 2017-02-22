import * as ActionTypes from "./SearchActionTypes";
import BiMap = require("../../common/Collect/BiMap");

let searchActionMapTemp = {};

var GET_SEARCH_PERSONALINFOLIST = '/stuSearch/Get/stuInfos'; //对应action请求url，baseurl之后的路径，
searchActionMapTemp[ActionTypes.GET_SEARCH_PERSONALINFOLIST] = {
    url: GET_SEARCH_PERSONALINFOLIST,
    moduleID: "search",
    operate: "read",
    useMockData: false,
};
export const searchActionMap = searchActionMapTemp;

//为了方便模拟数据产生，需要添加 url - actionID 映射，与上面的actionID basicInfo 成对出现
let searchUrlMapTemp = new BiMap();
searchUrlMapTemp.put(GET_SEARCH_PERSONALINFOLIST, ActionTypes.GET_SEARCH_PERSONALINFOLIST);

//获取搜索结果的筛选项的值
var GET_SEARCH_OPTIONS = '/url/here/GET_SEARCH_OPTIONS'; //对应action请求url，baseurl之后的路径，
searchActionMapTemp[ActionTypes.GET_SEARCH_OPTIONS] = {
    url: GET_SEARCH_OPTIONS,
    moduleID: 'search',
    operate: 'read',
};
searchUrlMapTemp.put(GET_SEARCH_OPTIONS, ActionTypes.GET_SEARCH_OPTIONS);

export const searchUrlMap = searchUrlMapTemp;