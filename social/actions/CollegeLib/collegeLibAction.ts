
import * as actionTypes from './CollegeLibActionTypes'
import * as ajaxUtil  from "common/ajaxUtil";
//学院类别  ----地区
export function mergeCollegeOptionsProvince(state){
    return {
        type: actionTypes.MERGE_COLLEGEOPTIONS_PROVINCE,
        mergeState: state
    }
}
//学院类别  ----级别（985，211，其他）
export function mergeCollegeOptionsLevel(state){
    return {
        type: actionTypes.MERGE_COLLEGEOPTIONS_LEVEL,
        mergeState: state
    }
}
//学院类别  --- 类别（本科、专科）
export function mergeCollegeOptionsType(state){
    return {
        type: actionTypes.MERGE_COLLEGEOPTIONS_TYPE,
        mergeState: state
    }
}

//学院类别 --- major门类
export function mergeCollegeOptionsMajorML(state){
    return {
        type: actionTypes.MERGE_COLLEGEOPTIONS_COLLEGEPROP,
        mergeState: state
    }
}


//搜索框input值
export function mergeCollegeOptionsInput(state){
    return {
        type: actionTypes.MERGE_COLLEGEOPTIONS_INPUT,
        mergeState: state
    }
}

//当前页码
export function mergeCurrentPage(state){
    return {
        type: actionTypes.MERGE_CURRENTPAGE,
        mergeState: state
    }
}

//院校库列表
export function getCollegeResult(postData){
    var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_COLLEGELIB_COLLEGELIST, postData).result;
    var initState = {collegeLib_collegeResult: responseData};
    return {
        type: actionTypes.MERGE_COLLEGERESULT,
        mergeState: initState
    }

}



