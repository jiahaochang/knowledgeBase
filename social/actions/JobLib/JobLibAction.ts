import * as context from '../../pages/JobLib/JobLibContext'
import * as actionTypes from './JobLibActionTypes'
import {getDataByActionID} from "../../common/ajaxUtil";

export function mergeJobOptionsJob(state){
    return {
        type: actionTypes.GET_JOBLIB_JOBLIB,
        mergedState: state
    }
}

export function searchJobType(state){
    return {
        type: actionTypes.GET_JOBLIB_SEARCHRESULT,
        mergedState: state
    }
}

export function getJobIntroduction(state){
    return {
        type: actionTypes.GET_JOBLIB_JOBINTRODUCTION,
        mergedState: state
    }
}


