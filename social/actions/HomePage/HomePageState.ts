import Immutable = require('immutable')
import * as actionTypes from './HomePageActionTypes'
//reducer负责状态判断流转，和将中间结果写入context中。

const initialState = Immutable.Map({
    showIntroduction:false,
    showIntroductionID:"",
});


export default function homePageMainState(state = initialState, action) {
    switch (action.type) {

        case actionTypes.MERGE_SHOWINTRO:
            return state.merge(action.mergedState);

        case actionTypes.MERGE_SHOWINTROID:
            return state.merge(action.mergedState);

        default:
            return state
    }
}

export function hasState(state){
    return initialState.has(state);
}

