
//所有程序中用到的有关此模块的actionID 都引用于此 ****必须全局唯一*****

//学生主页
//获取当前学期 放在初始化中

//主页所有请求都有学期
// 获取排名情况
export const GET_STUDENT_RANKSTATE = "GET_STUDENT_RANKSTATE";
// 7选3卡片
export const GET_STUDENT_SUBJECTCHOICESTATE = "GET_STUDENT_SUBJECTCHOICESTATE";
// 生涯探索卡片
export const GET_STUDENT_CAREERSTATE = "GET_STUDENT_CAREERSTATE";
//自我剖析  ---获取
export const GET_STUDENT_ANALYZEMYSELF = "GET_STUDENT_ANALYZEMYSELF";
//自我剖析  ---保存
export const SET_STUDENT_ANALYZEMYSELF = "SET_STUDENT_ANALYZEMYSELF";
// 目标设定卡片
export const GET_STUDENT_TARGETSTATE = "GET_STUDENT_TARGETSTATE";
// 目标设定卡片 --- 保存
export const SET_STUDENT_TARGETSTATE = "SET_STUDENT_TARGETSTATE";
// 综合素质记录 
export const GET_STUDENT_COMPROHENSIVEQUALITYCARDS = "GET_STUDENT_COMPROHENSIVEQUALITYCARDS";
//选修课，选择名称--所属类别--课程学分
export const GET_ELECTIVECOURSE_CATEGORY = "GET_ELECTIVECOURSE_CATEGORY";
// 最近来访
export const GET_STUDENT_LATESTVISITOR = "GET_STUDENT_LATESTVISITOR";
// 同学眼中的我
export const GET_STUDENT_IMPRESSION = "GET_STUDENT_IMPRESSION";
//同学眼中的我  ---  school印象列表
export const SCHOOL_PROVIDED_IMPRESSIONS = "SCHOOL_PROVIDED_IMPRESSIONS";
//同学眼中的我  ---  保存印象
export const SET_STUDENT_IMPRESSIONS = "SET_STUDENT_IMPRESSIONS";

export const READ_STUDENT_USERINFO = "READ_STUDENT_USERINFO";