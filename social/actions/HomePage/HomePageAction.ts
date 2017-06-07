import * as actionTypes from './HomePageActionTypes'
"use strict";

export function aa() {

}

export function mergeShowIntroduction(state){
    return {
        type: actionTypes.MERGE_SHOWINTRO,
        mergedState: state
    }
}

export function mergeShowIntroductionID(state){
    return {
        type: actionTypes.MERGE_SHOWINTROID,
        mergedState: state
    }
}

export const initHomePage = "InitHomePage";
