
import * as actionTypes from './ValueAssessActionTypes'
import {getDataByActionID} from "../../../common/ajaxUtil";
import * as context from '../../../pages/AssessCenter/ValueAssess/ValueAssessContext'

export function initValueAssessFinishState():any{
    var successFunc = function (response) {
        context.setValueAssessFinishState(response.result.isMIAssessFinished);
    };
    getDataByActionID(actionTypes.GET_VALUEASSESS_VALUEASSESSFINISHSTATE, successFunc);
}

export function initValueAssessQuizzes():any{
    var successFunc = function (response) {
        context.setValueAspect(response.result.valueAspects);
    };
    getDataByActionID(actionTypes.GET_VALUEASSESS_QUIZZES, successFunc);
}