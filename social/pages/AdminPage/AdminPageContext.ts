
//后台返回的班级  年级 数据
var gradeClassResponseData;

export function setGradeClassResponseData(responseData){
    gradeClassResponseData = responseData;
}

export function getGradeClassResponseData(){
    return gradeClassResponseData;
}
//年级数据 以班级ID为键
var classMapGradeIDBeKey;

export function setClassMapGradeIDBeKey(grades){
    classMapGradeIDBeKey = grades;
}

export function getClassMapGradeIDBeKey(){
    return classMapGradeIDBeKey;
}
//德智体美劳的学生关键词
var evaluateWordsData;

export function setEvaluateWordsData(selectData){
    evaluateWordsData = selectData;
}

export function getEvaluateWordsData(){
    return evaluateWordsData;
}