"use strict";
import {MIQuiz} from "./Data/MIQuiz";

var allQuizzes:Array<MIQuiz>;
var quizTotalCount: number;
export function setAllQuizzes(quizzes: Array<MIQuiz>): void{
    allQuizzes = quizzes;
    quizTotalCount = quizzes.length;
}
export function getAllQuizzes():Array<MIQuiz>{
    return allQuizzes;
}

export function getQuizTotalCount(){
    return quizTotalCount;
}


var allQuizAnswers; //{1:2}

export function setAllQuizAnswers(answers): void{
    allQuizAnswers = answers;
}
export function getAllQuizAnswers():any{
    return allQuizAnswers;
}

var isMIAssessFinished:boolean;

export function setMIAssessFinishState(state): void{
    isMIAssessFinished = state;
}
export function getMIAssessFinishState():any{
    return isMIAssessFinished;
}