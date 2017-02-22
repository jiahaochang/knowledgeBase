"use strict"
import * as termAnalysisActionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'

let termAnalysisMockTemplateTemp = {};
var postData = {};

var getStudentModuleConfig = {
    status:"",
    result:{
        moduleList:[
            {
                moduleID:"",
                moduleName:""
            }
        ]
    }
};

postData = {
    dataUserID:""
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_RANKINCLASS] = {
    status: 'success',
    result: {
        rankInClass:[
            {
                name:"小明",
                integralScore:"33",
                userID:"01"
            },
            {
                name:"小谭",
                integralScore:"343",
                userID:"02"
            },
            {
                name:"小猪",
                integralScore:"390",
                userID:"03"
            },
            {
                name:"小魏",
                integralScore:"500",
                userID:"04"
            },
            {
                name:"小王",
                integralScore:"390",
                userID:"05"
            },
        ]
    },
};

termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_INTEGRALSCORERECORD] = {
    status: 'success',
    result: {
        integralScores:[
            {
                month: "9",
                year:"2013",
                basicIntegralScore: 30,
                totalIntegralScore: 30
            },
            {
                month: "10",
                year:"2013",
                basicIntegralScore: 90,
                totalIntegralScore: 50
            },
            {
                month: "11",
                year:"2013",
                basicIntegralScore: 80,
                totalIntegralScore: 20
            },
            {
                month: "12",
                year:"2013",
                basicIntegralScore: 22,
                totalIntegralScore: 80
            },
            {
                month: "9",
                year:"2013",
                basicIntegralScore: 30,
                totalIntegralScore: 30
            },
            {
                month: "10",
                year:"2013",
                basicIntegralScore: 90,
                totalIntegralScore: 50
            },
            {
                month: "11",
                year:"2013",
                basicIntegralScore: 80,
                totalIntegralScore: 20
            },
            {
                month: "12",
                year:"2013",
                basicIntegralScore: 22,
                totalIntegralScore: 80
            },
            {
                month: "12",
                year:"2014",
                basicIntegralScore: 60,
                totalIntegralScore: 90
            },
            {
                month: "9",
                year:"2014",
                basicIntegralScore: 20,
                totalIntegralScore: 38
            },
            {
                month: "10",
                year:"2014",
                basicIntegralScore: 20,
                totalIntegralScore: 30
            },
            {
                month: "11",
                year:"2014",
                basicIntegralScore: 60,
                totalIntegralScore: 39
            },
            {
                month: "9",
                year:"2015",
                basicIntegralScore: 50,
                totalIntegralScore: 70
            },
        ]
    },

};

postData = {
    yearMonths:[
        {
            month:"",
            year:""
        }
    ],
    studentUserID:""
};

termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_MONTHSUMMARY] = {
    "status":"success",
    "result": {
        "monthSummaryInfos": [
            {
                "year": "2016",
                "month": "1",
                "summaryTitle": "自我剖析",
                "schoolMonthThemeInfo": {
                    "monthTheme": "慧心之希望月",
                    "content": "1. 很容易看到生活光明、轻松一面，认为生活充满乐趣和有趣的事；2.乐观面对一切事物，以积极心态看待现实生活，有价值感，生活学习不无聊；"
                },
                "stuSummaryInfos": [
                    {
                        "schoolSummaryTitle": {
                            "schoolSummaryTitleID": "1",
                            "summaryTitle": "举例说明自己的现状并打分",
                            "summaryLimit": "50",//统一上限 500
                            "summaryHint": "如实填写",//编辑框 placeHolder
                            "integralScore": "100",
                        },
                        "stuSummaryContentInfo": {"summaryContent": ""}
                    },
                    {
                        "schoolSummaryTitle": {
                            "schoolSummaryTitleID": 2,
                            "summaryTitle": "改进措施",
                            "summaryLimit": 25,
                            "summaryHint": "如实填写1",
                            "integralScore": 50,
                        },
                        "stuSummaryContentInfo": {"summaryContent": "改进措施内容"}
                    }
                ],
                teacherMonthSummaryEvaluation:{
                    evaluationContent:""  //没有评语 传递空字符串
                }
            }
        ]
    },
    "page": null,
    "code": 0,
    "errorMessage": null
};

postData = {
    month:1,
    year:2,
    schoolSummaryTitleID:1,
    summaryContent:""
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.SET_STUDENT_MONTHSUMMARY] = {
    status: 'success',
};

postData = {
    termID: 1
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_SEMESTERSUMMARY] = {
    status: 'success',
    result: {
        termAnalysisInfos:{
                "schoolSummaryTitle": {
                    "schoolSummaryTitleID": "1",
                    "summaryTitle": "举例说明自己的现状并打分",
                    "summaryLimit": "50",//统一上限 500
                    "summaryHint": "如实填写",//编辑框 placeHolder
                    "integralScore": "100",
                },
                "stuSummaryContentInfo": {"summaryContent": ""}
        },
        termQualitySummaryInfos:[
            {
                "schoolSummaryTitle": {
                    "qualityCategoryID": "1",
                    "qualityCategoryName": "品德操守",
                    "summaryLimit": "50",//统一上限 500
                    "summaryHint": "如实填写",//编辑框 placeHolder
                    "integralScore": "100",
                },
                "stuSummaryContentInfo": {"summaryContent": ""}
            },
        ]
    },
};

postData = {
    termID:1,
    qualityCategoryID:1,
    content:""
};
postData = {
    termID:1,
    schoolSummaryTitleID:1,
    content:""
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.SET_STUDENT_SEMESTERSUMMARY] = {
    status: 'success',
    result: {},
};


postData = {
    termID:"",
    studentUserID:""
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_TEACHEREVALUATE] = {
    status: 'success',
    result: {
        teacherTermEvaluation:{
            evaluationContent:"",
            qualityEvaluationFinished:true,
            qualityEvaluations:[
                {
                    qualityCategoryName:"品德表现",
                    qualityCategoryID:"01",
                    evaluationScore:"3"
                },
                {
                    qualityCategoryName:"运动健康",
                    qualityCategoryID:"02",
                    evaluationScore:"2"
                },
                {
                    qualityCategoryName:"创新实践",
                    qualityCategoryID:"03",
                    evaluationScore:"2.5"
                },
                {
                    qualityCategoryName:"艺术素养",
                    qualityCategoryID:"04",
                    evaluationScore:"5"
                }
            ]
        }
    },
};

termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_SCORE] = {
    status: 'success',
    result: {
        exam: [
            {
                examID: 0,
                examType: "加权后",
                readonly: true
            },{
                examID: 1,
                examType: "期中考试",
                examDate: "2015-10-11"
            },{
                examID: 2,
                examType: "加权后",
                examDate: "2015-10-11"
            }
        ],
        usualExamScore:[
            {
                examID: 0,
                examType: "期中考试",
                examDate: "2015-10-11",
                examScore:[
                    {
                        subject: "物理",
                        score: 80,
                        schoolRank: 30, //全校百分比 前百分之30
                    },
                    {
                        subject: "化学",
                        score: 10,
                        schoolRank: 20,
                    },
                    {
                        subject: "生物",
                        score: 80,
                        schoolRank: 10,
                    },
                    {
                        subject: "地理",
                        score: 80,
                        schoolRank: 1,
                    },
                    {
                        subject: "历史",
                        score: 80,
                        schoolRank: 8,
                    },
                    {
                        subject: "政治",
                        score: 80,
                        schoolRank: 7,
                    },
                    {
                        subject: "技术",
                        score: 80,
                        schoolRank: 30,
                    },{
                        subject: "语文",
                        score: 20,
                        schoolRank: 9 ,
                    },{
                        subject: "数学",
                        score: 40,
                        schoolRank: 20,
                    },
                    {
                        subject: "英语",
                        score: 80,
                        schoolRank: 90,
                    }
                ]
            },
            {
                examID: 2,
                examType: "加权后",
                examDate: "2015-10-11",
                examScore:[
                    {
                        subject: "物理",
                        score: 80,
                        schoolRank: 30, //全校百分比 前百分之30
                    },
                    {
                        subject: "化学",
                        score: 10,
                        schoolRank: 20,
                    },
                    {
                        subject: "生物",
                        score: 80,
                        schoolRank: 10,
                    },
                    {
                        subject: "地理",
                        score: 80,
                        schoolRank: 1,
                    },
                    {
                        subject: "历史",
                        score: 80,
                        schoolRank: 8,
                    },
                    {
                        subject: "政治",
                        score: 80,
                        schoolRank: 7,
                    },
                    {
                        subject: "技术",
                        score: 80,
                        schoolRank: 30,
                    },{
                        subject: "语文",
                        score: 20,
                        schoolRank: 9 ,
                    },{
                        subject: "数学",
                        score: 40,
                        schoolRank: 20,
                    },
                    {
                        subject: "英语",
                        score: 80,
                        schoolRank: 90,
                    }
                ]
            }

        ]
    },
};

termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_STUDENT_COMPREHENSIVEQUALITYRECORD] = {
    status: 'success',
    result: {},
};


postData = {
    termID:""
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_EVALUATE_STUDENT_STAR] = {
    status: 'success',
    result: {
        evaluationToClassmates:[
            {
                name:"小明",
                studentUserID:"01",//todo wenchao userID change studentUserID
                headImage:"vendor/images/default-headpic.jpg",

                qualityEvaluationFinished:false,
                qualityEvaluations:[
                    {
                        qualityCategoryName:"品德表现",
                        qualityCategoryID:"01",
                        evaluationScore:"3"
                    },
                    {
                        qualityCategoryName:"运动健康",
                        qualityCategoryID:"02",
                        evaluationScore:"2"
                    },
                    {
                        qualityCategoryName:"创新实践",
                        qualityCategoryID:"03",
                        evaluationScore:"2.5"
                    },
                    {
                        qualityCategoryName:"艺术素养",
                        qualityCategoryID:"04",
                        evaluationScore:"5"
                    }
                ]
            },
            {
                name:"小花",
                studentUserID:"02",
                headImage:"vendor/images/default-headpic.jpg",

                qualityEvaluationFinished:false,
                qualityEvaluations:[
                    {
                        qualityCategoryName:"品德表现",
                        qualityCategoryID:"01",
                        evaluationScore:"3"
                    },
                    {
                        qualityCategoryName:"运动健康",
                        qualityCategoryID:"02",
                        evaluationScore:"2"
                    },
                    {
                        qualityCategoryName:"创新实践",
                        qualityCategoryID:"03",
                        evaluationScore:"2.5"
                    },
                    {
                        qualityCategoryName:"艺术素养",
                        qualityCategoryID:"04",
                        evaluationScore:"5"
                    }
                ]
            },
            {
                name:"小谭",
                studentUserID:"03",
                headImage:"vendor/images/default-headpic.jpg",

                qualityEvaluationFinished:true,
                qualityEvaluations:[
                    {
                        qualityCategoryName:"品德表现",
                        qualityCategoryID:"01",
                        evaluationScore:"3"
                    },
                    {
                        qualityCategoryName:"运动健康",
                        qualityCategoryID:"02",
                        evaluationScore:"2"
                    },
                    {
                        qualityCategoryName:"创新实践",
                        qualityCategoryID:"03",
                        evaluationScore:"2.5"
                    },
                    {
                        qualityCategoryName:"艺术素养",
                        qualityCategoryID:"04",
                        evaluationScore:"5"
                    }
                ]
            },
            {
                name:"小猪",
                studentUserID:"04",
                headImage:"vendor/images/default-headpic.jpg",

                qualityEvaluationFinished:false,
                qualityEvaluations:[
                    {
                        qualityCategoryName:"品德表现",
                        qualityCategoryID:"01",
                        evaluationScore:"3"
                    },
                    {
                        qualityCategoryName:"运动健康",
                        qualityCategoryID:"02",
                        evaluationScore:"2"
                    },
                    {
                        qualityCategoryName:"创新实践",
                        qualityCategoryID:"03",
                        evaluationScore:"2.5"
                    },
                    {
                        qualityCategoryName:"艺术素养",
                        qualityCategoryID:"04",
                        evaluationScore:"5"
                    }
                ]
            }
        ]
    },
};
//我的得分
postData = {
    termID:""
};
termAnalysisMockTemplateTemp[termAnalysisActionTypes.GET_EVALUATE_STUDENT_MYSELF_STAR] = {
    status:"success",
    evaluationFromClassmates:{
        qualityEvaluationToClassmatesFinished:true,
        qualityEvaluations:[
            {
                qualityCategoryName:"品德表现",
                qualityCategoryID:"01",
                evaluationScore:"3.5"
            },
            {
                qualityCategoryName:"运动健康",
                qualityCategoryID:"02",
                evaluationScore:"2"
            },
            {
                qualityCategoryName:"创新实践",
                qualityCategoryID:"03",
                evaluationScore:"4.5"
            },
            {
                qualityCategoryName:"艺术素养",
                qualityCategoryID:"04",
                evaluationScore:"5"
            }
        ]
    }
}


export var termAnalysisMockTemplate = termAnalysisMockTemplateTemp;
