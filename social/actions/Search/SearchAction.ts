import * as actionTypes from './SearchActionTypes'
import {getDataByActionID} from "../../common/ajaxUtil";

//action 实际ajax请求及 对应状态树的变化
export function mergeSearchResult(State){
    var initState = {searchResult:State.result.searchResult};
    return {
        type: actionTypes.GET_SEARCH_PERSONALINFOLIST,
        mergeState: initState,
    }
}


