import Immutable = require('immutable')
import * as actionTypes from './JobLibActionTypes'
//reducer负责状态判断流转，和将中间结果写入context中。
const initialState = Immutable.Map({
    currentJobOption:{},
    jobLibSearchboxInput:"",
    currentSubJobCategoryID:""
});

export function hasState(state){
    return initialState.has(state);
}

export default function jobLibMainState(state = initialState, action) {
    switch (action.type) {

        case actionTypes.GET_JOBLIB_JOBLIB:
            return state.merge(action.mergedState);

        case actionTypes.GET_JOBLIB_SEARCHRESULT:
            return state.merge(action.mergedState);

        case actionTypes.GET_JOBLIB_JOBINTRODUCTION:
            return state.merge(action.mergedState);

        /*case actionTypes.MERGE_JOBOPTIONS_INPUT:
            return state.merge(action.mergedState);*/
            
        default:
            return state
    }
}

