import Immutable = require('immutable')
import * as actionTypes from './SearchActionTypes'
//reducer负责状态判断流转，和将中间结果写入context中。
const initialState = Immutable.Map({
    searchResult: [],
});

export function hasState(state){
    return initialState.has(state);
}

export default function searchMainState(state = initialState, action) {
    switch (action.type) {

        case actionTypes.GET_SEARCH_PERSONALINFOLIST:
            return state.merge(action.mergeState);

        default:
            return state

    }
}




