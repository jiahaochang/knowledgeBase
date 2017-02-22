import Immutable = require('immutable')
import * as actionTypes from './CollegeLibActionTypes'
import {defaultCurrentPage} from 'common/Config/CommonConfig'
//reducer负责状态判断流转，和将中间结果写入context中。
const initialState = Immutable.Map({
    collegeLib_collegeOptions_province:[],
    collegeLib_collegeOptions_level:[],
    collegeLib_collegeOptions_type:[],
    collegeLib_collegeOptions_collegeProp:[],
    collegeLib_searchBox_input:"",
    collegeLib_currentPage:defaultCurrentPage,
    collegeLib_collegeResult:{}
    
});


export default function collegeLibState(state = initialState, action) {
    switch (action.type) {

        case actionTypes.MERGE_COLLEGEOPTIONS_PROVINCE:
            return state.merge(action.mergeState);

        case actionTypes.MERGE_COLLEGEOPTIONS_LEVEL:
            return state.merge(action.mergeState);

        case actionTypes.MERGE_COLLEGEOPTIONS_TYPE:
            return state.merge(action.mergeState);
        
        case actionTypes.MERGE_COLLEGEOPTIONS_COLLEGEPROP:
            return state.merge(action.mergeState);

        case actionTypes.MERGE_COLLEGEOPTIONS_INPUT:
            return state.merge(action.mergeState);

        case actionTypes.MERGE_CURRENTPAGE:
            return state.merge(action.mergeState);

        case actionTypes.MERGE_COLLEGERESULT:
            return state.merge(action.mergeState);

        default:
            return state
    }
}

