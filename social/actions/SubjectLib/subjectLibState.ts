import Immutable = require('immutable')
import * as actionTypes from './SubjectLibActionTypes'
//reducer负责状态判断流转，和将中间结果写入context中。
const initialState = Immutable.Map({
    currentSubject: ""
});

export function hasState(state){
    return initialState.has(state);
}

export default function subjectLibMainState(state = initialState, action) {
    switch (action.type) {

        case actionTypes.INIT_SUBJLIB_CURRENTSUBJ:
            return state.merge(action.initState);

        case actionTypes.MERGE_SUBJLIB_CURRENTSUBJ:
            return state.merge(action.mergeState);
        default:
            return state
    }
}




