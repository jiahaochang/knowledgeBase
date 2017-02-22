
//班主任模块
export const moduleIDInfoMap = {
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
    rankInClass: {
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
};

//特殊学生情况 --- 分析记录form对应的key- value
export const specialStudentRecordMap = {
    recordDate:{
        contentTypeID:"recordDate",
        contentName: "分析时间",
    },
    reason:{
        contentTypeID:"reason",
        contentName: "情况缘由",
    },
    analysis:{
        contentTypeID:"analysis",
        contentName: "个体分析",
    },
    talkRecord:{
        contentTypeID:"talkRecord",
        contentName: "谈话记录",
    },
    parentCommunication:{
        contentTypeID:"parentCommunication",
        contentName: "家校沟通",
    },
    achievement:{
        contentTypeID:"achievement",
        contentName: "达成效果",
    },

};

//特殊学生情况 --- 分析记录form  分析时间对应ID
export const recordDate = "recordDate"