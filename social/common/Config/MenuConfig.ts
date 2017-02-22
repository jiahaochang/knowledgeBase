"use strict";

/**
 * 默认最全的菜单列表
 *
 */

/**
 * 菜单ID 及配置对应关系 此处控制显示名称及路由跳转
 */
export const MenuIDStructMap = {

    /*学生简单首页*/
    collegeLib: {
        icon: "123",
        displayName: "药材库",
        url: "/collegeLib",
    },
    jobLib:{
        icon: "123",
        displayName: "方剂库",
        url: "/jobLib",
    },
    majorLib: {
        icon: "123",
        displayName: "名医库",
        url: "/majorLib",
    },
    subjectLib: {
        icon: "123",
        displayName: "医案库",
        url: "/subjectLib",
    },
    schoolStar: {
        icon: "123",
        displayName: "健康测评",
        url: "/schoolStar",
    },


    /*学生复杂首页*/
    /*subjectChosen: {
        icon: "123",
        displayName: "我的7选3",
        url: "homePage/myPersonalPage",
        query: {
            anchor: "subjectChoose"
        }
    },
    career: {
        icon: "123",
        displayName: "生涯探索与目标设定",
        url: "homePage/myPersonalPage",
        query: {
            anchor: "subjectChoose"
        }
    },
    targetSetting: {
        icon: "123",
        displayName: "学业水平",
        url: "homePage/myPersonalPage",
        query: {
            anchor: "subjectChoose"
        }
    }*/


    /*学期整体分析*/
    rankInClass:{
        url: "termAnalysis/rankInClass",
        displayName: "班级积分排名"
    },
    scoreGrowthRecord: {
        url: "termAnalysis/scoreGrowthRecord",
        displayName: "积分成长记录"
    },
    monthSummary: {
        url: "termAnalysis/monthSummary",
        displayName: "月度总结"
    },
    termSummary: {
        url: "termAnalysis/termSummary",
        displayName: "学期总结"
    },
    teacherReview: {
        url: "termAnalysis/teacherReview",
        displayName: "老师评语"
    },
    classmateEvaluate: {
        url: "termAnalysis/classmateEvaluate",
        displayName: "同学互评"
    },
    academicPerformance: {
        url: "termAnalysis/academicPerformance",
        displayName: "学业水平记录"
    },
    qualityArchives: {
        url: "termAnalysis/comprehensiveQualityRecord",
        displayName: "综合素质档案"
    },

    /*班主任老师页面*/
    classActivity:{
        url: "homePage/teacherPersonalPage/classActivity",
        displayName: "班团活动"
    },
    studentPerformance: {
        url: "homePage/teacherPersonalPage/studentPerformance",
        displayName: "学生表现记录"
    },
    classNotification: {
        url: "homePage/teacherPersonalPage/classNotification",
        displayName: "班级通知"
    },
    specialStudent: {
        url: "homePage/teacherPersonalPage/specialStudent",
        displayName: "特殊学生情况"
    },
    teacherRankInClass: {
        url: "homePage/teacherPersonalPage/rankInClass",
        displayName: "班级积分排名"
    },
    evaluateStudent: {
        url: "homePage/teacherPersonalPage/evaluateStudent",
        displayName: "评价学生"
    },
    reviewWordsManagement: {
        url: "homePage/teacherPersonalPage/reviewWordsManagement",
        displayName: "评语管理"
    },

    /*老师页面 管理员查看*/
    classActivityVisitorView:{
        url: "otherTeacherPage/classActivity",
        displayName: "班团活动"
    },
    studentPerformanceVisitorView: {
        url: "otherTeacherPage/studentPerformance",
        displayName: "学生表现记录"
    },
    classNotificationVisitorView: {
        url: "otherTeacherPage/classNotification",
        displayName: "班级通知"
    },
    specialStudentVisitorView: {
        url: "otherTeacherPage/specialStudent",
        displayName: "特殊学生情况"
    },
    teacherRankInClassVisitorView: {
        url: "otherTeacherPage/rankInClass",
        displayName: "班级积分排名"
    },
    evaluateStudentVisitorView: {
        url: "otherTeacherPage/evaluateStudent",
        displayName: "评价学生"
    },


    /*管理员*/
    accountManagement: {
        url: "adminPage/accountManagement",
        displayName: "账户管理"
    },
    scoreManagement: {
        url: "adminPage/scoreManagement",
        displayName: "成绩管理"
    },
    courseLibManagement: {
        url: "adminPage/courseLibManagement",
        displayName: "课程库"
    },
    clubManagement: {
        url: "adminPage/clubManagement",
        displayName: "活动与社团库"
    },
    skillHonorPositionManagement: {
        url: "adminPage/honorManagement",
        displayName: "特长/荣誉/职务"
    },
    studentEvaluateWordsManagement: {
        url: "adminPage/studentEvaluateWordsManagement",
        displayName: "同学描述用语"
    },
    monthThemeManagement: {
        url: "adminPage/monthThemeManagement",
        displayName: "月度主题"
    },
    statistics: {
        url: "adminPage/statistics",
        displayName: "统计功能"
    },
    recordManagement: {
        url: "adminPage/recordManagement",
        displayName: "档案管理"
    },
    integralScoreManagement: {
        url: "adminPage/integralScoreManagement",
        displayName: "积分管理"
    },
    contentAudit: {
        url: "adminPage/contentAudit",
        displayName: "内容审核"
    },
    schoolStarManagement: {
        url: "adminPage/schoolStarManagement",
        displayName: "校园寻星"
    },
    MBTIAssess:{
        url: "assessCenter/MBTIAssess",
        displayName: "性格特征测试"
    },
    HollandAssess:{
        url: "assessCenter/HollandAssess",
        displayName: "身体健康测试"
    },
    MIAssess:{
        url: "assessCenter/MIAssess",
        displayName: "多元智能"
    },
    valueAssess:{
        url: "assessCenter/valueAssess",
        displayName: "价值观"
    }
};

/**
 * 首页导航栏 菜单列表 首页必有，不在列表内
 */
export const HomePageNavDefaultStruct = ["collegeLib", "jobLib", "majorLib", "subjectLib", "schoolStar"];

//与eventCategoryList 配合 一起作为菜单列表 固定的不需要condition
const StudentHomePageNavDefaultStruct = [
    "subjectChosen", "career", "targetSetting"
];

export const StudentTermAnalysisDefaultStruct = [
    "rankInClass", "scoreGrowthRecord", "monthSummary", "termSummary", "teacherReview",
    "classmateEvaluate", "academicPerformance", "qualityArchives"
];

//后台获取
const StudentOtherViewDefaultStruct = [

];

export const TeacherDefaultStruct = [
    "classActivity","studentPerformance", "classNotification",
    "specialStudent", "teacherRankInClass", "evaluateStudent",
    "reviewWordsManagement"
];

export const OtherTeacherPageDefaultStruct = [
    "classActivityVisitorView","studentPerformanceVisitorView", "classNotificationVisitorView",
    "specialStudentVisitorView", "teacherRankInClassVisitorView", "evaluateStudentVisitorView"
];

export const AdminDefaultStruct = [
    "accountManagement", "scoreManagement", "courseLibManagement", "clubManagement",
    "skillHonorPositionManagement", "studentEvaluateWordsManagement", "monthThemeManagement", "statistics",
    "recordManagement","integralScoreManagement","schoolStarManagement"
];

//测评中心
export const AssessCenterStruct = [
    "MBTIAssess","HollandAssess","MIAssess","valueAssess"
];
