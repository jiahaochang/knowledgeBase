"use strict";

export class MIQuizAnswerOption {
    answerNo: number;
    answerText: string
}

export class MIQuiz {
    questionNo: number;
    questionText: string;
    answerOptions: Array<MIQuizAnswerOption>
}

/*
class MIQuizResult {
    1:2 //第一页选择了第二个答案
}
*/
  
