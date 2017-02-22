/*对于关联状态，改变一处需要检查多处，在此封装方法，简化操作*/

/*
 * 关联状态不在其他分支时
 * state.merge()
 * input： singleState = {flag1:true} 单一状态改变
 * output：finalState = {flag1:true, flag11:false, flag12: true} 关联状态，改变
 * 调用方式：finalState = getFinalState(singleState)
 * 表示关联，使用 单值 数据结构，方便取出其他元素，方便遍历其他元素 jsontree + array
 *
 * 有关联状态在其他分支时
 * 需要返回分支标志address
 * 返回结果形式：finalState = {
 *       subjState:{flag1:true, flage2:true},
 *       majState:{flag3:true, flag4:true}
 * }
 *
 * 建立关联状态表
 * subjectChosen
 *   前提：哪个状态影响他的开  提交选择结果后由false 变为 true
 *   影响：他的开关可能影响 哪个状态 个人报告开启 选科卡状态完成
 *{"subjectChosen":{
 *          truePrecondition:[flag1,flag2], 与 里面内容全true则 true
 *          falsePrecondition:[flag1,flag2], 或 里面内容有false 则 false
 *          effectTrue:[falg3, flag4],  //可能会影响
 *          effectFalse:[flag3, flag4], //一定会影响
 *          address:"subjState",  //位于状态树中哪个树枝
 *          }
 * }
 * */

import * as GlobalContext from '../common/GlobalContext'
import Immutable = require('immutable')
import {isEmptyObject} from './commonFunc'

const relateTree = {
    "subj_inte_sort_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["subj_inte_isDone", "subj_subj_isOpen"],
        effectFalse: ["subj_inte_isDone", "subj_subj_isOpen"],
        address: "inteAblState",
    },
    "subj_inte_test_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: [],
        effectFalse: [],
        address: "inteAblState",
    },
    "subj_inte_isDone": {
        truePrecondition: ["subj_inte_sort_isFinished"],
        falsePrecondition: ["subj_inte_sort_isFinished"],
        effectTrue: [],
        effectFalse: [],
        address: "subjMainState",
    },

    "subj_abl_score_isReady": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: [],
        effectFalse: [],
        address: "inteAblState",
    },
    "subj_abl_sort_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["subj_abl_isDone", "subj_subj_isOpen"],
        effectFalse: ["subj_abl_isDone", "subj_subj_isOpen"],
        address: "inteAblState",
    },
    "subj_abl_isDone": {
        truePrecondition: ["subj_abl_sort_isFinished"],
        falsePrecondition: ["subj_abl_sort_isFinished"],
        effectTrue: [],
        effectFalse: [],
        address: "subjMainState",
    },
    "subj_maj_MBTIAssess_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["subj_major_isDone"],
        effectFalse: ["subj_major_isDone"],
        address: "majState",
    },
    "subj_maj_HollandAssess_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["subj_major_isDone"],
        effectFalse: ["subj_major_isDone"],
        address: "majState",
    },
    "subj_maj_majChoice_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["subj_major_isDone"],
        effectFalse: ["subj_major_isDone"],
        address: "majState",
    },
    "subj_major_isDone": {
        truePrecondition: ["subj_maj_MBTIAssess_isFinished", "subj_maj_HollandAssess_isFinished", "subj_maj_majChoice_isFinished"],
        falsePrecondition: ["subj_maj_MBTIAssess_isFinished", "subj_maj_HollandAssess_isFinished", "subj_maj_majChoice_isFinished"],
        effectTrue: ["subj_subj_isOpen"],
        effectFalse: ["subj_subj_isOpen"],
        address: "subjMainState",
    },
    "subj_subj_isOpen": {
        truePrecondition: ["subj_inte_sort_isFinished", "subj_abl_sort_isFinished", "subj_major_isDone"],
        falsePrecondition: ["subj_inte_sort_isFinished", "subj_abl_sort_isFinished", "subj_major_isDone"],
        effectTrue: [],
        effectFalse: [],
        address: "subjMainState",
    },
    "subj_subj_subjChoice_isFinished": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["subj_report_isOpen", "subj_isDone"],
        effectFalse: ["subj_report_isOpen", "subj_isDone"],
        address: "subjState",
    },
    "subj_report_isOpen": {
        truePrecondition: ["subj_subj_subjChoice_isFinished"],
        falsePrecondition: ["subj_subj_subjChoice_isFinished"],
        effectTrue: [],
        effectFalse: [],
        address: "subjMainState",
    },
    "subj_isDone": {
        truePrecondition: ["subj_subj_subjChoice_isFinished"],
        falsePrecondition: ["subj_subj_subjChoice_isFinished"],
        effectTrue: [],
        effectFalse: [],
        address: "subjMainState",
    },
    "exam_isOpen": {
        truePrecondition: ["subj_isDone"],
        falsePrecondition: ["subj_isDone"],
        effectTrue: [],
        effectFalse: [],
        address: "examMainState",
    },
    "exam_target_isDone": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["exam_compete_isOpen","exam_report_isOpen"],
        effectFalse: ["exam_compete_isOpen","exam_report_isOpen"],
        address: "examMainState",
    },
    "exam_time_isDone": {
        truePrecondition: [],
        falsePrecondition: [],
        effectTrue: ["exam_compete_isOpen","exam_report_isOpen"],
        effectFalse: ["exam_compete_isOpen","exam_report_isOpen"],
        address: "examMainState",
    },
    "exam_compete_isOpen": {
        truePrecondition: ["exam_target_isDone","exam_time_isDone"],
        falsePrecondition: ["exam_target_isDone","exam_time_isDone"],
        effectTrue: [],
        effectFalse: [],
        address: "examMainState",
    },
    "exam_report_isOpen": {
        truePrecondition: ["exam_target_isDone","exam_time_isDone"],
        falsePrecondition: ["exam_target_isDone","exam_time_isDone"],
        effectTrue: [],
        effectFalse: [],
        address: "examMainState",
    }


};

//stateNeedDerive:待推导的变量，需保证先后顺序，先推导放前，后推导放后。(后推导的变量可能依赖于先推导的变量的计算结果)
export const SUBJ_MODULE_ID="subject";
export const EXAM_MODULE_ID="exam";
export const MY_MODULE_ID="my";
const subjStateNeedDerive = ["subj_inte_isDone", "subj_abl_isDone", "subj_major_isDone", "subj_subj_isOpen", "subj_report_isOpen", "subj_isDone","exam_isOpen"];
const leafSubjStates = ["subj_inte_sort_isFinished", "subj_inte_test_isFinished", "subj_abl_score_isReady", "subj_abl_sort_isFinished", "subj_maj_MBTIAssess_isFinished", "subj_maj_HollandAssess_isFinished"
    , "subj_maj_majChoice_isFinished", "subj_subj_subjChoice_isFinished"];
const examStateNeedDerive = ["exam_compete_isOpen","exam_report_isOpen"];
const leafExamStates = ["exam_target_isDone","exam_time_isDone"];
const statesNeedDerive = {subject:subjStateNeedDerive,exam:examStateNeedDerive};
const leafStates = {subject:leafSubjStates,exam:leafExamStates};

//不包含自己的相关对象数组  {"subj_subj_subjChoice_isFinished":true}
//返回 [{},{}]
function getRelatedState(singleState, changedStates) {
    //get singleState key, get value
    var stateKey = "";

    for (var key in singleState) {
        stateKey = key;
    }
    var stateValue = singleState[stateKey];

    var relatedState = [];
    if (stateValue) {
        var effectTrueState = relateTree[stateKey].effectTrue;
        for (var i = 0; i < effectTrueState.length; i++) {
            var tempState = effectTrueState[i];
            /*if(tempState is true now ){
             continue;
             }*/
            //简单复制，适用于一维数组，多维此方法不适用
            var tempTruePrecondition = relateTree[tempState].truePrecondition.slice(0);
            //将正在操作的状态存放在 变化状态 数组中，因为此时树上此状态还是false
            changedStates = Immutable.Map(changedStates).merge(singleState).toJS();
            if (tempTruePrecondition.length > 0 && needChangeToTrue(tempState, changedStates)) {
                var tempObj = {};
                tempObj[tempState] = true;
                relatedState.push(tempObj);
                var tempRelatedState = getRelatedState(tempObj, changedStates);
                for (var j = 0; j < tempRelatedState.length; j++) {
                    relatedState.push(tempRelatedState[i]);
                }
            }
        }
        return relatedState;
    } else {
        var effectFalseState = relateTree[stateKey].effectFalse;
        for (var i = 0; i < effectFalseState.length; i++) {
            var tempState = effectFalseState[i];
            var tempObj = {};
            tempObj[tempState] = false;
            relatedState.push(tempObj);
            relatedState.push(getRelatedState(tempObj, false));
        }
        return relatedState;
    }
}

function needChangeToTrue(state, changedStates) {
    //如果此状态已经为true，则不需要改变，也不需要向上再查找
    if (Immutable.Map(changedStates).get(state) || getStateByAddressAndKey(relateTree[state].address, state)) {
        return false;
    }
    //查看truePrecondition 是否满足
    var truePrecondition = relateTree[state].truePrecondition.slice(0);
    for (var i = 0; i < truePrecondition.length; i++) {
        if (Immutable.Map(changedStates).get(truePrecondition[i])) {
            continue;
        }
        var address = relateTree[truePrecondition[i]].address;
        var stateKey = truePrecondition[i];
        if (!getStateByAddressAndKey(address, stateKey)) {
            return false;
        }
    }
    return true;
}

export function getStateByAddressAndKey(address, stateKey) {
    var store = GlobalContext.getStoreGlobal();
    var stateBranch = store.getState()[address];
    if (!stateBranch) {
        return false;
    } else {
        return stateBranch.toJS()[stateKey];
    }
}
//返回 {flag1:true, flag2:true}
export function getFinalState(singleState) {
    var relateState = getRelatedState(singleState, {});
    var finalState = Immutable.Map(singleState);
    for (var i = 0; i < relateState.length; i++) {
        finalState = finalState.merge(relateState[i]);
    }
    return finalState.toJS();
}

/**
 * 计算出推导后需产生变化的状态集合
 * @param mulStates 多个状态；如果含有非叶子状态，要求把叶子状态放在最前面，并且先推导的状态放前，后推导的状态放后
 * @returns {*}
 */
export function getFinalStateByMulStates(mulStates) {
    var relateState = getRelatedStateByMulStates(mulStates, {});
    var finalState = Immutable.Map(mulStates);
    for (var i = 0; i < relateState.length; i++) {
        finalState = finalState.merge(relateState[i]);
    }
    return finalState.toJS();
}

/*
 *
 * {subjState:{flag1:true, flage2:true},
 *   majState:{flag3:true, flag4:true}
 * }
 */
export function getFinalStateWithAddress(singlestate) {
    var tempState = getFinalState(singlestate);
    var finalState = {};
    for (var key in tempState) {
        var address = relateTree[key].address;
        var tempObj = {};
        tempObj[key] = tempState[key];
        if (!finalState[address]) {
            finalState[address] = tempObj;
        } else {
            finalState[address] = Immutable.fromJS(finalState[address]).merge(tempObj).toJS();
        }
    }
    return finalState;
}

//只移除第一个与值相等的元素
function arrayRemove(arrayOld, itemNeedRemove) {
    var itemIndex = -1;
    for (var i = 0; i < arrayOld.length; i++) {
        if (arrayOld[i] == itemNeedRemove) {
            itemIndex = i;
            break;
        }
    }
    return arrayOld.splice(itemIndex, 1);
}
/*
 * input :{flag1:true, flage2:true}
 * output :{flag1:true, flag2: true, flag3:true}
 *
 * *
 */
export function deriveState(initState, module) {
    var deriveState = Immutable.Map(initState).merge({}).toJS();
    statesNeedDerive[module].forEach(function (state, index) {
        if (isTrueByInitState(deriveState, state)) {
            deriveState[state] = true;
        } else {
            deriveState[state] = false;
        }
    });
    return deriveState;
}

export function isTrueByInitState(initState, state) {
    var truePrecondition = relateTree[state].truePrecondition.slice(0);
    for (var i = 0; i < truePrecondition.length; i++) {
        var stateKey = truePrecondition[i];
        if (!initState[stateKey]) {
            return false;
        }
    }
    return true;
}

export function fetchLeafStates(module, initState) {
    var result = {};
    var moduleLeafStates=leafStates[module];
    for (var i = 0; i < moduleLeafStates.length; i++) {
        result[moduleLeafStates[i]] = initState[moduleLeafStates[i]] ? initState[moduleLeafStates[i]] : false;
    }
    return result;
}

export function getAddressByState(stateID) {
    if (isEmptyObject(relateTree[stateID])) {
        return "";
    }
    return relateTree[stateID]["address"];
}

function getRelatedStateByMulStates(mulStates, changedStates) {
    //get singleState key, get value
    var stateKey = "";
    var relatedState = Immutable.Map(changedStates).merge(mulStates).toJS();
    for (var key in mulStates) {
        stateKey = key;
        var stateValue = mulStates[stateKey];
        if (stateValue) {
            var effectTrueState = relateTree[stateKey].effectTrue;
            for (var i = 0; i < effectTrueState.length; i++) {
                var tempState = effectTrueState[i];
                //简单复制，适用于一维数组，多维此方法不适用
                var tempTruePrecondition = relateTree[tempState].truePrecondition.slice(0);
                //将正在操作的状态存放在 变化状态 数组中，因为此时树上此状态还是false
                if (tempTruePrecondition.length > 0 && needChangeToTrue(tempState, relatedState)) {
                    var tempObj = {};
                    tempObj[tempState] = true;
                    relatedState[tempState] = true;
                    var tempRelatedState = getRelatedStateJson(tempObj, relatedState);
                    for (var key in tempRelatedState) {
                        relatedState[key] = tempRelatedState[key];
                    }
                }
            }
        } else {
            var effectFalseState = relateTree[stateKey].effectFalse;
            for (var i = 0; i < effectFalseState.length; i++) {
                var tempState = effectFalseState[i];
                var tempObj = {};
                tempObj[tempState] = false;
                relatedState[tempState] = false;
                var tempRelatedState = getRelatedStateJson(tempObj, false);
                for (var key in tempRelatedState) {
                    relatedState[key] = tempRelatedState[key];
                }
            }
        }
    }
    return relatedState;
}

//不包含自己的相关对象数组  {"subj_subj_subjChoice_isFinished":true}
//返回相关的JSON状态集合 {}
function getRelatedStateJson(singleState, changedStates) {
    //get singleState key, get value
    var stateKey = "";

    for (var key in singleState) {
        stateKey = key;
    }
    var stateValue = singleState[stateKey];
    var relatedState = Immutable.Map(changedStates).merge(singleState).toJS();
    if (stateValue) {
        var effectTrueState = relateTree[stateKey].effectTrue;
        for (var i = 0; i < effectTrueState.length; i++) {
            var tempState = effectTrueState[i];
            //简单复制，适用于一维数组，多维此方法不适用
            var tempTruePrecondition = relateTree[tempState].truePrecondition.slice(0);
            //将正在操作的状态存放在 变化状态 数组中，因为此时树上此状态还是false
            if (tempTruePrecondition.length > 0 && needChangeToTrue(tempState, relatedState)) {
                var tempObj = {};
                tempObj[tempState] = true;
                relatedState[tempState] = true;
                var tempRelatedState = getRelatedStateJson(tempObj, relatedState);
                for (var key in tempRelatedState) {
                    relatedState[key] = tempRelatedState[key];
                }
            }
        }
        return relatedState;
    } else {
        var effectFalseState = relateTree[stateKey].effectFalse;
        for (var i = 0; i < effectFalseState.length; i++) {
            var tempState = effectFalseState[i];
            var tempObj = {};
            tempObj[tempState] = false;
            relatedState[tempState] = false;
            var tempRelatedState = getRelatedStateJson(tempObj, false);
            for (var key in tempRelatedState) {
                relatedState[key] = tempRelatedState[key];
            }
        }
        return relatedState;
    }
}