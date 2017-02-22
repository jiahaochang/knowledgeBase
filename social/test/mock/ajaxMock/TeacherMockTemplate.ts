"use strict";
import * as teacherActionTypes from '../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
let teacherMockTemplateTemp = {};

var postData = {};

//todo 不同身份用户采用不同ajax
teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_USERINFO] = {
    "status": "success",
    "result":{
        "userID": "20150101",

        "name": "小刘",
        "systemID": "systemID01",
        "classID": 1,
        "className": "高一一班",
        "gradeID": 1,
        "gradeName": "高一",

        "gender": 1,
        stateMsg:"蹉跎错，消磨过，最是光阴化浮沫",

        //最后一个为当前学期
        passedTerms:[
            {
                termID:"1",
                termName:"高一上学期",
                termYear:"2015"
            },
            {
                termID:"2",
                termName:"高一下学期",
                termYear:"2015"
            },
            {
                termID:"3",
                termName:"高二上学期",
                termYear:"2016"
            },
            {
                termID:"4",
                termName:"高二下学期",
                termYear:"2016"
            }
        ],
    }
};

const studentUserInfo = {
    "name": "小刘",
    "systemID": "systemID01",
    "classID": 1,
    "className": "高一一班",
    "gradeID": 1,
    "gradeName": "高一",
    "userID": "20150101",
    "gender": 0,
    stateMsg:"竹杖芒鞋轻胜马，天地苍茫任吾行"
};

const adminUserInfo = {
    name:"",
    systemID:"",
    userID:"",
    gender:-1,
    stateMsg:"谢天地赠我逆境"
};

teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_CLASSMATELIST] = {
    status: 'success',
    result:{
        students:[
            {
                name: "xili3",
                headImage: "vendor/images/default-headpic.jpg",
                userID: "123",
            },
            {
                name: "xili4",
                headImage: "vendor/images/default-headpic.jpg",
                userID: "124",
            },
            {
                name: "xili5",
                headImage: "vendor/images/default-headpic.jpg",
                userID: "125",
            },
            {
                name: "xili6",
                headImage: "vendor/images/default-headpic.jpg",
                userID: "126",
            }
        ]
    }
};

teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_RANKSTATE] = {
    status: 'success',
    result:{
        rankState:{
            classAvgIntegralScore: 500,
            gradeIntegralRank: 100
        }
    }

};


teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_CLASSNOTIFICATION] = {
    status: 'success',
    result:{
        notifications:[
            {
                notificationID: "01",
                notificationContent: "lala",
                modifiedTime: "2016-10-10 02:10:10"
            }
        ]
    }

};

postData = {
    notificationContent: "haha",
    fromUserID:"",
};
teacherMockTemplateTemp[teacherActionTypes.SET_TEACHER_CLASSNOTIFICATION] = {
    status: 'success',
};

postData = {
    notificationID:"",
};
teacherMockTemplateTemp[teacherActionTypes.DELETE_TEACHER_CLASSNOTIFICATION] = {
    status: 'success',
};

postData = {
    dataUserID:""
};
teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_RANKINCLASS] = {
    status: 'success',
    result:{
        rankInClass:[
            {
                userID: "u01",
                name: "xili",
                integralScore: 200
            }
        ]
    }

};

//READ_TEACHER_ACTIVITY => READ_TEACHER_CLASSACTIVITY
teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_ACTIVITY] = {
    status: 'success',
    result:{
        classActivityInfoList:[
            {
                stuClassActivityID:"",

                stuClassActivityTheme: "hehe",
                fromDate: "2016-10-10",
                toDate: "2016-10-12",
                stuClassActivityTarget: "kk",
                stuClassActivityPlan: "kdkd",
                relatedFiles:[
                    {
                        uploadFileName:"",
                        uploadFileID:"",
                        uploadFileUrl:""
                    }
                ],
            }
        ]
    }

};

//上传请求 限制大小5m，数量，大小

//
postData = {
    classActivity:{
        teacherUserID:"1",
        stuClassActivityTheme: "hehe",
        fromDate: "2016-10-10",
        toDate:"2016-10-12",
        stuClassActivityTarget: "kk",
        stuClassActivityPlan: "kdkd",
        relatedFiles:[
            {
                uploadFileName:"",
                uploadFileID:"",
                uploadFileUrl:""
            }
        ],
    }
};
teacherMockTemplateTemp[teacherActionTypes.SAVE_TEACHER_ACTIVITY] = {
    status: 'success',
};

postData = {
    classActivityID: "01"
};
teacherMockTemplateTemp[teacherActionTypes.DELETE_TEACHER_ACTIVITY] = {
    status: 'success',
};

teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_STUDENTPERFORMANCE_RECORD] = {
    status: 'success',
    result:{
        studentPerformances:[
            {
                studentPerformanceID: "01",
                studentUserID: "u",
                name: "xiaoli",

                performanceLevelID:"",  //表现情况
                performanceLevelName:"",

                performanceDate: "2016-10-10",

                performanceTypeID:"",  //类别
                performanceTypeName:"",

                content: "kaka",
                teacherUserID: "01", //哪位老师记录的

                pictures:[
                    {
                        pictureUrl:""
                    }
                ]
            }
        ]
    }

};

//添加学生表现前 获取表现所需的列表
postData = {

};
teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_STUDENTPERFORMANCEOPTIONS]  = {
    status:"success",
    result:{
        performanceLevels:[
            {
                performanceLevelID:"1",
                performanceLevelName:"ff",
            }
        ],
        performanceTypes:[
            {
                performanceTypeID:"2",
                performanceTypeName:"gg",
            }
        ]
    }
};


postData = {
    studentPerformance:{

        studentUserID: "u",
        name: "xiaoli",

        performanceLevelID:"",
        performanceLevelName:"",

        performanceDate: "2016-10-10",

        performanceTypeID:"",
        performanceTypeName:"",

        content: "kaka",
        teacherUserID: "01", //哪位老师记录的

        pictures:[
            {
                pictureUrl:""
            }
        ]
    }
};
teacherMockTemplateTemp[teacherActionTypes.SAVE_TEACHER_STUDENTPERFORMANCE_RECORD] = {
    status: 'success',
    result:{
        studentPerformanceID: "01",
    }
};


postData = {
    studentPerformanceID: "01",
};
teacherMockTemplateTemp[teacherActionTypes.DELETE_TEACHER_STUDENTPERFORMANCE_RECORD] = {
    status: 'success',
};

teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_SPECIALSTUDENT] = {
    status: 'success',
    result:{
        specialStudents:[
            {
                name: "xili3",
                headImage: "vendor/images/default-headpic.jpg",
                userID: "123",
            }
        ]
    }

};

postData = {
    specialStudents:[
        {
            userID: "1",
        }
    ]
};
teacherMockTemplateTemp[teacherActionTypes.CREATE_TEACHER_SPECIALSTUDENT] = {
    status: 'success',
};

postData = {
    specialStudents:[
        {
            userID: "1",
        }
    ]
};
teacherMockTemplateTemp[teacherActionTypes.DELETE_TEACHER_SPECIALSTUDENT] = {
    status: 'success',
};

postData = {
    specialStudentUserID: "1"
};
teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_SPECIALSTUDENT_RECORD] = {
    status: 'success',
    result:{
        specialStudentRecords:[
            {
                specialStudentRecordID: "01",
                recordDate:"2016-10-10",//分析时间
                reason: "情况缘由123123",//情况缘由
                analysis: "个体分析123123", //个体分析
                talkRecord: "谈话记录123123",//谈话记录
                parentCommunication:"家校沟通123123",//家校沟通
                achievement:"达成效果,我能说不好吗", //达成效果
                teacherUserID: "02"
            },
            {
                specialStudentRecordID: "02",
                recordDate:"2016-10-10",//分析时间
                reason: "情况缘由2",//情况缘由
                analysis: "个体分析2", //个体分析
                talkRecord: "谈话记录2",//谈话记录
                parentCommunication:"家校沟通2",//家校沟通
                achievement:"达成效果,我能说不好吗", //达成效果
                teacherUserID: "03"
            }
        ]
    }

};


postData = {
    specialStudentRecord:{
        specialStudentRecordID: "01",
        datetime:"2016-10-10 02:10:10",
        reason: "haha",
        analysis: "",
        talkRecord: "",
        parentCommunication:"",
        achievement:"",
        teacherUserID: ""
    }
};
teacherMockTemplateTemp[teacherActionTypes.SAVE_TEACHER_SPECIALSTUDENT_RECORD] = {
    status: 'success',
};

postData = {
    specialStudentRecordID: "01",
};
teacherMockTemplateTemp[teacherActionTypes.DELETE_TEACHER_SPECIALSTUDENT_RECORD] = {
    status: 'success',
};

postData = {
    schoolTerm:"",
    fromUserID:"1"
};
teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_EVALUATESTUDENT_STAR] = {
    status: 'success',
    result:{
        evaluateStudentByScores:[
            {
                studentUserID: "1",
                name:"1",
                headImage: "vendor/images/default-headpic.jpg",
                qualityEvaluationFinished:true,
                qualityEvaluations:[
                    {
                        qualityCategoryName:"品德表现",
                        qualityCategoryID:"1",
                        evaluationScore:1
                    },
                    {
                        qualityCategoryName:"创新实践",
                        qualityCategoryID:"2",
                        evaluationScore:2
                    },
                    {
                        qualityCategoryName:"运动健康",
                        qualityCategoryID:"3",
                        evaluationScore:3
                    },
                    {
                        qualityCategoryName:"艺术素养",
                        qualityCategoryID:"4",
                        evaluationScore:4
                    }
                ]
            },
            {
                studentUserID: "2",
                name:"2",
                headImage: "vendor/images/default-headpic.jpg",
                qualityEvaluationFinished:false,
                qualityEvaluations:[
                    {
                        qualityCategoryName:"品德表现",
                        qualityCategoryID:"1",
                        evaluationScore:1
                    },
                    {
                        qualityCategoryName:"创新实践",
                        qualityCategoryID:"2",
                        evaluationScore:2
                    },
                    {
                        qualityCategoryName:"运动健康",
                        qualityCategoryID:"3",
                        evaluationScore:3
                    },
                    {
                        qualityCategoryName:"艺术素养",
                        qualityCategoryID:"4",
                        evaluationScore:4
                    }
                ]
            }
        ]
    }

};

postData = {
    termID:"",
    teacherUserID:"02",
    evaluateStudentUserID: "01",
    qualityEvaluations:[
        {
            qualityCategoryName:"",
            qualityCategoryID:"",
            evaluationScore:""
        }
    ]
};
teacherMockTemplateTemp[teacherActionTypes.SET_TEACHER_EVALUATESTUDENT_STAR] = {
    status: 'success',
};

postData = {
    termID: 1,
    evaluateStudentUserID: "",
};
teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_TERMEVALUATE] = {
    status: 'success',
    //todo 有改动
    result:{
        
        termOverallEvaluation: {
            //termOverallEvaluationID:"",//没有用到 去掉
            termOverallEvaluationContent:""
        },

        stuTermQualityEvaluations:[
            {
                rootQualityCategoryID: "1",
                rootQualityCategoryName: "品德表现",

                stuTermQualityEvaluation: [
                    {
                        /*evaluationItemID:"1",
                        evaluationItemContent:"爱祖国",*/

                        qualityCategoryID: "1",
                        qualityCategoryName: "品德操守",
                    },
                    {
                       /* evaluationItemID:"2",
                        evaluationItemContent:"有责任",*/

                        qualityCategoryID: "2",
                        qualityCategoryName: "责任义务",
                    }
                ]
            },
            {
                rootQualityCategoryID: "2",
                rootQualityCategoryName: "创新实践",

                stuTermQualityEvaluation: [
                    {
                       /* evaluationItemID:"1",
                        evaluationItemContent:"爱研究",*/

                        qualityCategoryID: "1",
                        qualityCategoryName: "研究性学习成果",
                    },
                    {
                      /*  evaluationItemID:"2",
                        evaluationItemContent:"能操作",*/

                        qualityCategoryID: "2",
                        qualityCategoryName: "实验及技术操作能力",
                    }
                ]

            }
        ],
    }
};

//使用老师管理学生评语处请求，获取评价学生选项列表，前台需要处理为树形结构
postData = {
    teacherUserID:""
};
teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_STUTERMQUALITYEVALUATIONITEMS] = {
    status:"",
    result:{
        evaluateStudentDict:[
            {
                rootQualityCategoryID: "1",
                rootQualityCategoryName: "品德表现",

                evaluationItems: [
                    {
                        evaluationItemID:"1",
                        evaluationItemContent:"爱祖国",

                        qualityCategoryID: "1",
                        qualityCategoryName: "品德操守",
                    },
                    {
                        evaluationItemID:"2",
                        evaluationItemContent:"有责任",

                        qualityCategoryID: "2",
                        qualityCategoryName: "责任义务",
                    }
                ]

            },
            {
                rootQualityCategoryID: "2",
                rootQualityCategoryName: "创新实践",

                evaluationItems: [
                    {
                        evaluationItemID:"1",
                        evaluationItemContent:"爱研究",

                        qualityCategoryID: "1",
                        qualityCategoryName: "研究性学习成果",
                    },
                    {
                        evaluationItemID:"2",
                        evaluationItemContent:"能操作",

                        qualityCategoryID: "2",
                        qualityCategoryName: "实验及技术操作能力",
                    }
                ]

            }
        ]
    }
};

//此处为评价学生---综合评价---学期整体评价提交  -actionTypes = SET_TEACHER_TERMEVALUATE
postData = {
    studentUserID: "",
    teacherUserID:"",
    termID: 1,

    termOverallEvaluation: {
        //termOverallEvaluationID:"",//没有用到 去掉
        termOverallEvaluationContent:""
    },

    stuTermQualityEvaluations:[
        {
            rootQualityCategoryID: "1",
            rootQualityCategoryName: "品德表现",
            stuTermQualityEvaluation: [
                {
                    evaluationItemID:"1",
                    qualityCategoryID: "1",
                    qualityCategoryName: "品德操守",
                }
            ]
        },
        {
            rootQualityCategoryID: "2",
            rootQualityCategoryName: "创新实践",
            stuTermQualityEvaluation: [
                {
                     evaluationItemID:"1",
                    qualityCategoryID: "1",
                    qualityCategoryName: "研究性学习成果",
                }
            ]
        }
    ],
};//全传
teacherMockTemplateTemp[teacherActionTypes.SET_TEACHER_TERMEVALUATE] = {
    status: 'success',
};

//月度总结 --  保存评语
postData = {
    studentUserID:"1",
    year: 2015,
    month: 4,
    teacherUserID:"",
    teacherMonthSummaryEvaluation:{
        evaluationContent:""  //没有评语 传递空字符串
    }
};
teacherMockTemplateTemp[teacherActionTypes.SET_TEACHER_MONTHEVALUATE] = {
    status: 'success',
};

teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_STUDENTMONTHSUMMARY] = {
    status: 'success',
};

teacherMockTemplateTemp[teacherActionTypes.READ_TEACHER_EVALUATESTUDENTDICT] = {
    status: 'success',
    result:{
        evaluateStudentDict:[
            {
                rootQualityCategoryID: "1",
                rootQualityCategoryName: "品德表现",

                evaluationItems: [
                    {

                        evaluationItemID:"1",//如果没有就不传此项
                        evaluationItemContent:"1爱祖国",//如果没有就不传此项

                        qualityCategoryID: "1",
                        qualityCategoryName: "品德操守",
                    },
                    {
                        evaluationItemID:"2",
                        evaluationItemContent:"品德表现爱人民",

                        qualityCategoryID: "1",
                        qualityCategoryName: "品德操守",
                    },
                    {
                        evaluationItemID:"3",
                        evaluationItemContent:"1乐于助人",

                        qualityCategoryID: "2",
                        qualityCategoryName: "为人",
                    }
                ]

            },
            {
                rootQualityCategoryID: "2",
                rootQualityCategoryName: "创新实践",

                evaluationItems: [
                    {
                        evaluationItemID:"1",
                        evaluationItemContent:"研究成果爱钻研",

                        qualityCategoryID: "1",
                        qualityCategoryName: "2思想",
                    },
                    {
                        evaluationItemID:"2",
                        evaluationItemContent:"研究成果爱研究",

                        qualityCategoryID: "2",
                        qualityCategoryName: "2实践活动",
                    }
                ]

            },
            {
                rootQualityCategoryID: "3",
                rootQualityCategoryName: "责任义务",

                evaluationItems: [
                    {}
                ]

            }
        ]
    }

};

//添加、修改调用同一个，evaluationItemID不同
postData = {
    evaluationItemContent:"爱祖国",

    rootQualityCategoryID: "1",

    qualityCategoryID: "1",
    qualityCategoryName: "品德操守",

    teacherUserID:"",
    evaluationItemID:""
};
teacherMockTemplateTemp[teacherActionTypes.SAVE_TEACHER_REVIEWWORD] = {
    status: 'success',
    result:{
        evaluationItemID:""
    }
};


postData = {
    evaluationItemID:"",
};
teacherMockTemplateTemp[teacherActionTypes.DELETE_TEACHER_REVIEWWORD] = {
    status: 'success',
};


teacherMockTemplateTemp[teacherActionTypes.GET_TEACHER_MODULECONFIG]  = {
    status:"success",
    result:{
        moduleList:[
            {
                moduleID:"classActivity",
                moduleName:""
            },
            {
                moduleID:"studentPerformance",
                moduleName:""
            },
            {
                moduleID:"classNotification",
                moduleName:""
            },
            {
                moduleID:"specialStudent",
                moduleName:""
            },
            {
                moduleID:"rankInClass",
                moduleName:""
            },
            {
                moduleID:"evaluateStudent",
                moduleName:""
            },
            {
                moduleID:"reviewWordsManagement",
                moduleName:""
            }
        ]
    }
};


export var teacherMockTemplate = teacherMockTemplateTemp;