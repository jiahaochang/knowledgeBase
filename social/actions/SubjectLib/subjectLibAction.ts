
import * as actionTypes from './SubjectLibActionTypes'
import {getDataByActionID} from "../../common/ajaxUtil";
import * as context from '../../pages/SubjectLib/SubjectLibContext'

//action 实际ajax请求及 对应状态树的变化
export function mergeSubjectLibCurrentSubject(state){
    return {
        type: actionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
        mergeState: state
    }
}

export function initSubjectLibCurrentSubject():any{
    var response = getDataByActionID(actionTypes.INIT_SUBJLIB_CURRENTSUBJ, null).result;
    context.setSubjectLibResponseData(response);
    var currentSubject = response.subjects[0].subjectName;
    var initState = {currentSubject: currentSubject};
    return {
        type: actionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
        mergeState: initState
    }

}

export function changeSubjName(state){
    return {
        type: actionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
        mergeState: state
    }
}

