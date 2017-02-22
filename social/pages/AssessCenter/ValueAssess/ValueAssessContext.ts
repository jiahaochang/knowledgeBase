"use strict";

var valueAspect;
  
export function setValueAspect(aspect){
    valueAspect = aspect;
}
export function getValueAspect(){
    return valueAspect;
}

var isValueAssessFinished:boolean;

export function setValueAssessFinishState(state): void{
    isValueAssessFinished = state;
}
export function getValueAssessFinishState():any{
    return isValueAssessFinished;
}