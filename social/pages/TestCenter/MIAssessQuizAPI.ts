import * as context from './MIAssessContext'
"use strict";
import {hasKeyInMap} from "../../common/commonFunc";
import {MIQuiz} from "./Data/MIQuiz";
import {getAllQuizAnswers} from "./MIAssessContext";

//pageNum start with 1
export function getQuizByPageNum(pageNum: number): MIQuiz{
    var quizzes = context.getAllQuizzes();
    return quizzes[pageNum-1];
}

export function getAnswerByPageNum(pageNum: number): any{
    var allQuizAnswers = getAllQuizAnswers();
    if (hasKeyInMap(pageNum, allQuizAnswers)){
        return allQuizAnswers[pageNum]
    }
}

//save answer in page n
export function saveAnswer(pageNum: number, answerNum: number): void {
    var answers = context.getAllQuizAnswers();
    if (typeof answers === "undefined") {
        answers = {}
    }
    answers[pageNum] = answerNum;
    context.setAllQuizAnswers(answers);
}

//get submit answer data
export function getMIResultData(): Array<any>{
    var allAnswers = context.getAllQuizAnswers(); //{ pageNo:answerNo}
    var allQuizzes = context.getAllQuizzes();

    var resultData = [];//[ {questionNo:answerNo} ]
    for (var key in allAnswers){
        var questionNo = allQuizzes[parseInt(key)-1].questionNo ;
        var answerNo = allAnswers[key];
        var resultObj = {};
        resultObj[questionNo] = answerNo;
        resultData.push(resultObj);
    }
    return resultData;
}

//get pageNum list did not have answer
export function getUndonePageList(): Array<number>{
    var totalCount = context.getQuizTotalCount();
    var allQuizAnswers = context.getAllQuizAnswers();
    var undonePageList = [];
    for(let i=1; i<totalCount+1; i++){
       if (!hasKeyInMap(i, allQuizAnswers)){
           undonePageList.push(i);
       }
    }
    return undonePageList;
}
