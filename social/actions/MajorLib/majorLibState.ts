import Immutable = require('immutable')
import * as actionTypes from './MajorLibActionTypes'
import {defaultCurrentPage} from 'common/Config/CommonConfig'
//reducer负责状态判断流转，和将中间结果写入context中。

const initialState = Immutable.Map({
    majorlib_subj_classification:{},//学科类别
    majorlib_subj_categories:{},//学科门类
    majorlib_major_categories:{},//专业类别
    majorlib_search_value:"",//搜索框value
    majorlib_major_clickflag:"", //当前点击的是搜索框search or chooseCondition
    majorlib_major_page_show:"" ,// 当前 显示专业详情 还是 显示专业列表  intro/majorResult
    majorLib_currentPage:defaultCurrentPage,
    majorLib_majorResult:{},
});


export default function majorLibMainState(state = initialState, action) {
    switch (action.type) {

        case actionTypes.MERGE_SUBJ_CLASSIFICATION:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_SUBJ_CATEGORIES:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_MAJOR_CATEGORIES:
            return state.merge(action.mergedState);
        
        case actionTypes.MERGE_MAJOR_CLICKFLAG:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_MAJOR_SEARCHVAL:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_MAJOR_SHOW_WHO:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_MAJORRESULT:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_CURRENTPAGE:
            return state.merge(action.mergedState);

        default:
            return state
    }
}

export function hasState(state){
    return initialState.has(state);
}

