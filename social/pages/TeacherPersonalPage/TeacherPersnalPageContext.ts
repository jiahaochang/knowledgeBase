
//一个班级所有成员【特殊学生+非特殊学生】
import StudentSimpleInfo = Nicezy.StudentSimpleInfo;
import StuTermQualityEvaluations = Nicezy.StuTermQualityEvaluations;
import EvaluateStudentDict = Nicezy.evaluateStudentDict;
var classAllMember;

export function setClassAllMember(member){
    classAllMember = member;
}

export function getClassAllMember(): Array<StudentSimpleInfo>{
    return classAllMember;
}


var evaluateStudentDict: Array<EvaluateStudentDict>;

export function setEvaluateStudentDict(dict){
    evaluateStudentDict = dict;
}
export function getEvaluateStudentDict():Array<EvaluateStudentDict>{
    return evaluateStudentDict;
}

//班主任评价学生 --  综合评价  --提交数据  保存在context 中
var teacherEvaluatePostData;
export function setTeacherEvaluatePostData(data){
    teacherEvaluatePostData = data;
}
export function getTeacherEvaluatePostData(){
    return teacherEvaluatePostData;
}

//评论库--- 两个select options  【对应省系统项目-对应项目分类指标】
var reviewWordsSelectData;
export function setReviewWordsSelectData(selectData){
    reviewWordsSelectData = selectData;
}
export function getReviewWordsSelectData(){
    return reviewWordsSelectData ;
}

//学生表现记录 --  类别、表现情况
var studentPerformanceOptions;
export function setStudentPerformanceOptions(optionData){
    studentPerformanceOptions = optionData;
}
export function getStudentPerformanceOptions(){
    return studentPerformanceOptions;
}