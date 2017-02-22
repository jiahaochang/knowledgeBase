import * as actionTypes from './MIAssessActionTypes'
import {getDataByActionID} from "../../../common/ajaxUtil";
import * as context from '../../../pages/AssessCenter/MIAssess/MIAssessContext'

//action 实际ajax请求及 对应状态树的变化
export function initMIAssessQuestions():any{
    var successFunc = function (response) {
        context.setAllQuizzes(response.quizzes);
    };
    getDataByActionID(actionTypes.GET_MIASSESS_QUIZZES, successFunc);
}

export function initMIAssessFinishState():any{
    var successFunc = function (response) {
        context.setMIAssessFinishState(response.result.isMIAssessFinished);
    };
    getDataByActionID(actionTypes.GET_MIASSESS_MIASSWSSFINISHSTATE, successFunc);
}