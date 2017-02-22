
import * as actionTypes from './MajorLibActionTypes'
//学科类别  ----专科、本科
export function mergeSubjClassification(state){
    return {
        type: actionTypes.MERGE_SUBJ_CLASSIFICATION,
        mergedState: state
    }
}
//学科门类  ----哲学、经济学
export function mergeSubjCategories(state){
    return {
        type: actionTypes.MERGE_SUBJ_CATEGORIES,
        mergedState: state
    }
}
//专业类别  --- 哲学类、经济学类
export function mergeMajorCategories(state){
    return {
        type: actionTypes.MERGE_MAJOR_CATEGORIES,
        mergedState: state
    }
}

//搜索框input值
export function mergeMajorSearchVal(state){
    return {
        type: actionTypes.MERGE_MAJOR_SEARCHVAL,
        mergedState: state
    }
}


//当前点击事件标识
export function mergeMajorClickFlag(state){
    return {
        type: actionTypes.MERGE_MAJOR_CLICKFLAG,
        mergedState: state
    }
}
//当前 显示专业详情 还是 显示专业列表
export function mergeMajorPageShowWho(state){
    return {
        type: actionTypes.MERGE_MAJOR_SHOW_WHO,
        mergedState: state
    }
    
}

