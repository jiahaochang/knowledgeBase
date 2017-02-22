//引入需要更新的reduce

import * as subjectLibState from '../actions/SubjectLib/SubjectLibState'

import * as subjectLibActionTypes from '../actions/SubjectLib/SubjectLibActionTypes'
import { getAddressByState } from '../common/stateUtil'

import {isEmptyObject} from './commonFunc'

const stateMap = {}
stateMap[subjectLibActionTypes.INIT_SUBJLIB_CURRENTSUBJ] = subjectLibState;

const batchMergeActionMap = {
    "subjectLibState": subjectLibActionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
}

export function dispatchActions(finalState) {
    return dispatch=> {
        //增加 初始化map actionType：reduce
        var mergeActionStates={};
        var tmpAddr = '';
        var mergedState = {};
        //1. 初始化【reducer => 批量merge的Action】的map
        for (var stateKey in batchMergeActionMap) {
            mergeActionStates[stateKey] = {};
        }
        //2. 生成【reducer => 批量merge的Action】的map
        for (var key in finalState) {
            tmpAddr = getAddressByState(key);
            if (tmpAddr) {
                mergeActionStates[tmpAddr][key] = finalState[key];
            }
        }
        //3. 执行批量merge的action
        for (var stateKey in mergeActionStates) {
            if (!isEmptyObject(mergeActionStates[stateKey])) {
                mergedState = mergeActionStates[stateKey];
                dispatch({
                    type: batchMergeActionMap[stateKey],
                    mergedState
                })
            }
        }
    }
}
/**
 *
 * @param dispatch 外部传进来的redux action dispatch函数
 * @param finalState
 */
export function innerDispatchActions(finalState, dispatch) {
    //增加 初始化map actionType：reduce
    var mergeActionStates={};
    var tmpAddr = '';
    var mergedState = {};
    //1. 初始化【reducer => 批量merge的Action】的map
    for (var stateKey in batchMergeActionMap) {
        mergeActionStates[stateKey] = {};
    }
    //2. 生成【reducer => 批量merge的Action】的map
    for (var key in finalState) {
        tmpAddr = getAddressByState(key);
        if (tmpAddr) {
            mergeActionStates[tmpAddr][key] = finalState[key];
        }
    }
    //3. 执行批量merge的action
    for (var stateKey in mergeActionStates) {
        if (!isEmptyObject(mergeActionStates[stateKey])) {
            mergedState = mergeActionStates[stateKey];
            dispatch({
                type: batchMergeActionMap[stateKey],
                mergedState
            })
        }
    }
}

export function dispatchInitActions(finalState, dispatch) {

    for (var actType in stateMap) {
        var updateState = {};
        var isEmpty = true;
        for (var key in finalState) {
            if (stateMap[actType].hasState(key)) {
                updateState[key] = finalState[key];
                isEmpty = false;
            }
        }
        if (isEmpty) {
            continue;
        }
        var initState = updateState;
        //在之后的reduce中更新状态参数固定为updateState
        dispatch({
            type: actType,
            initState
        })
    }
}