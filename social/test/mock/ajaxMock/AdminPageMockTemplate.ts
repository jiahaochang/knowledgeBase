"use strict"
import * as adminPageActionTypes from '../../../actions/AdminPage/AdminPageActionTypes'

let adminPageMockTemplateTemp = {};

adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_USERINFO] = {
    "status": "success",
    "result":{
        name:"",
        systemID:"",
        userID:"",
        gender:-1,
        stateMsg:"竹杖芒鞋轻胜马，天地苍茫任吾行"
    }
};

//获取学校结构及学期信息 管理员
adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT] = {
    status: 'success',
    result: {
        schoolStruct:{
            grades:[
                {
                    grade:"2015",
                    gradeName:"高一"
                },
                {
                    grade:"2014",
                    gradeName:"高二"
                },
                {
                    grade:"2013",
                    gradeName:"高三"
                }
            ],
            gradeClassMap:{
                2015:[
                    {classID:"0101",className:"高一一班"},
                    {classID:"0102",className:"高一二班"},
                    {classID:"0103",className:"高一三班"},
                    {classID:"0104",className:"高一四班"},
                    {classID:"0105",className:"高一五班"},
                    {classID:"0106",className:"高一六班"},
                    {classID:"0107",className:"高一七班"},
                    {classID:"0108",className:"高一八班"},
                    {classID:"0109",className:"高一九班"},
                ],
                2014:[
                    {classID:"0201",className:"高二一班"},
                    {classID:"0202",className:"高二二班"},
                    {classID:"0203",className:"高二三班"},
                    {classID:"0204",className:"高二四班"},
                    {classID:"0205",className:"高二五班"},
                    {classID:"0206",className:"高二六班"},
                    {classID:"0207",className:"高二七班"},
                    {classID:"0208",className:"高二八班"},
                    {classID:"0209",className:"高二九班"},
                ],
                2013:[
                    {classID:"0301",className:"高三一班"},
                    {classID:"0302",className:"高三二班"},
                    {classID:"0303",className:"高三三班"},
                    {classID:"0304",className:"高三四班"},
                    {classID:"0305",className:"高三五班"},
                    {classID:"0306",className:"高三六班"},
                    {classID:"0307",className:"高三七班"},
                    {classID:"0308",className:"高三八班"},
                    {classID:"0309",className:"高三九班"},
                ]
            },

            //学期与年级有关，与班级无关，历史学期
            gradeTermMap:{
                2014:[
                    {
                        termID:"1",
                        termName:"2014-15上学期"
                    },
                    {
                        termID:"2",
                        termName:"2014-15下学期"
                    },
                    {
                        termID:"3",
                        termName:"2015-16上学期"
                    },
                    {
                        termID:"4",
                        termName:"2015-16下学期"
                    }
                ],
                2013:[
                    {
                        termID:"1",
                        termName:"2013-14上学期"
                    },
                    {
                        termID:"2",
                        termName:"2013-14下学期"
                    },
                    {
                        termID:"3",
                        termName:"2014-15上学期"
                    },
                    {
                        termID:"4",
                        termName:"2014-15下学期"
                    }
                ],
                2015:[
                    {
                        termID:"1",
                        termName:"2015-16上学期"
                    },
                    {
                        termID:"2",
                        termName:"2015-16下学期"
                    },
                    {
                        termID:"3",
                        termName:"2016-17上学期"
                    },
                    {
                        termID:"4",
                        termName:"2016-17下学期"
                    }
                ]
            }

        }
    }
};


adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_SCHOOLACCOUNTSTATISTIC] = {
    status: 'success',
    result: {
        schoolAccountStatistic:{
            studentAccountCount: 93,
            teacherAccountCount: 22
        }
    },
};

adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_MANAGERCOUNT] = {
    status: 'success',
    result: {
        teacherAccounts:[
            {
                roleID: "SchoolAdmin",
                roleType: "校级管理员",
                department: {
                    school: "10000"
                },
                name: "田老师",
                systemID: "201518",
                teacherUserID: "150001",
                gender: "0",
                tel: "13812345678"
            },
            {
                roleID: "GradeAdmin",
                roleType: "年级管理员",
                department: {
                    school: "10000",
                    "grades":
                        [
                            {
                                "grade":"2015",
                                "gradeName": "高一",
                                "classes":[
                                    {
                                        classID: "0101",
                                        className: "高一一班"
                                    }
                                ]
                            }
                        ]
                },
                name: "田田老师",
                systemID: "201519",
                teacherUserID: "150002",
                gender: "0",
                tel: "13912345678"
            }
        ],
    },
};

var postData = {};

postData = {
    accountList:[
        {
            roleInfo: [
                {
                    roleID: "gradeAdmin",

                    department: [
                        {
                            school:"10000",
                            grade:"2015"
                        },
                        {
                            school:"10000",
                            grade:"2016"
                        }
                    ]
                },{
                    roleID: "schoolAdmin",
                    department:[
                        {
                            school:"10000"
                        }
                    ]
                }
            ],
            pwd: "111111",
            gender: "0",
            name: "田田田老师",
            systemID: "201520",
            tel: "14012345678"
        }
    ]
};

adminPageMockTemplateTemp[adminPageActionTypes.CREATE_ADMIN_MANAGERCOUNT] = {
    status: 'success',
    result: {
        accountList:[
            {
                systemID:"",
                userID:""
            }
        ]
    },
};

const CREATE_ADMIN_MANAGERCOUNT_ResponseFail = {
    status: "fail",
    errorInfo: {
        errorMsg: "",
        errorData:[
            {
                operate: "Create",
                accountList:[
                    {
                        name: "田田田老师",
                        systemID: "201520"
                    }
                ]
            },{
                operate: "Remove",
                accountList:[
                    {
                        name: "田田田老师",
                        systemID: "201520",
                        teacherUserID: "150001"
                    }
                ]
            }
        ]
    }
};

postData = {
    accountList:[
        {
            roleInfo: [
                {
                    oldRole: {
                        roleID: "gradeAdmin",
                        department: [
                            {
                                school:"10000",
                                grade:"2015"
                            }
                        ]
                    },
                    newRole: {
                        roleID: "gradeAdmin",
                        department: [
                            {
                                school:"10000",
                                grade:"2016"
                            }
                        ]
                    }
                },

                {
                    oldRole: {
                        roleID: "gradeAdmin",
                        department: [
                            {
                                school:"10000",
                                grade:"2015"
                            }
                        ]
                    },
                    newRole: {
                        roleID: "gradeAdmin",
                        department: [
                            {
                                school:"10000",
                                grade:"2016"
                            }
                        ]
                    }
                }
            ],
            password: "111111",
            gender: "0",
            name: "田田田老师",
            systemID: "201520",
            tel: "14012345678",
            teacherUserID: "150001"
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.UPDATE_ADMIN_MANAGERCOUNT] = {
    status: 'success',
    result: {},
};

postData = {
    accountList:[
        {
            teacherUserID: "150001",
            roleInfo: [
                {
                    roleID: "gradeAdmin",

                    department: [
                        {
                            school:"10000",
                            grade:"2015"
                        },
                        {
                            school:"10000",
                            grade:"2016"
                        }
                    ]
                }
            ]

        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.DELETE_ADMIN_MANAGERCOUNT] = {
    status: 'success',
    result: {},
};

adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_STUDENTACCOUNT] = {
    status: 'success',
    result: {
        studentAccount:[
            {
                systemID: "13457786357",
                name:"胡彦斌",
                classID:"0103",
                className:"高一三班",
                grade:"2015",
                gradeName:"高一",
                userID:"03"
            },
            {
                systemID: "13337786357",
                name:"张三",
                classID:"0103",
                className:"高一三班",
                grade:"2015",
                gradeName:"高一",
                userID:"04"
            }
        ]
    },
};

postData = {
    students:[
        {
            systemID: "201518",
            grade: "1",
            stuClass: "1",
            name: "小绿",
            gender: "1",
            password: "111111"
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.CREATE_ADMIN_STUDENTACCOUNT] = {
    status: 'success',
    result: {
        createdStudentUserIDList:[
            {
                studentUserID:"15001"
            }
        ]
    },
};

postData = {
    // 可以更改密码，和名字，
    students:[
        {
            studentUserID:"15001",
            systemID: "201518",
            grade: "1",
            stuClass: "1",
            name: "小绿",
            gender: "1",
            password: "111111"
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.UPDATE_ADMIN_STUDENTACCOUNT] = {
    status: 'success',
    result: {},
};

postData = {
    studentUserID:"15001",
};
adminPageMockTemplateTemp[adminPageActionTypes.DELETE_ADMIN_STUDENTACCOUNT] = {
    status: 'success',
    result: {},
};

//筛选条件 从其他已有接口获取
adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_EXAMINFO] = {
    status: 'success',
    result: {
        examInfos:[
            {
                examID:"1",
                examName:"12月月考",
                termID:"1",
                termName:"2015-2016第一学期",
                grade:"2015",
                gradeName:"高一",
                recordUploaded: true,
            }
        ]
    },
};
//todo 上传成绩 优先级很低 暂时不做

//成绩删除不做，新建只建名字
postData = {
    examInfo:[
        {
            examName:"",
            termID:"",
            termName:"",
            grade:"",
            gradeName:"",
            recordUploaded: true,
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.CREATE_ADMIN_EXAMINFO] = {
    status: 'success',
    result: {
        exams:[
            {
                examID:""
            }
        ]
    },
};

postData = {
    examInfo:[
        {
            examID:"",
            examName:"",
            termID:"",
            termName:"",
            grade:"",
            gradeName:"",
            recordUploaded: true,
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.UPDATE_ADMIN_EXAMINFO] = {
    status: 'success',
    result: {},
};

postData = {
    exams:[
        {
            examID:""
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.DELETE_ADMIN_EXAMINFO] = {
    status: 'success',
    result: {},
};

postData = {
    uploadFile:{
        fileName:""
    }
};
adminPageMockTemplateTemp[adminPageActionTypes.UPLOAD_ADMIN_EXAMSCORE] = {
    status: 'success',
    result: {
        fileUrl:""
    },
};

//年份列表，从2016 至今年

postData = {
    yearMonths:[
        {
            year:"",
            month:""
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_MONTHTHEME] = {
    status: 'success',
    result: {
        monthThemes:[
            {
                month:"",
                year:"",
                yearName:"",
                schoolMonthThemeInfo: {
                    "monthTheme": "慧心之希望月",
                    "content": "1. 很容易看到生活光明、轻松一面，认为生活充满乐趣和有趣的事；2.乐观面对一切事物，以积极心态看待现实生活，有价值感，生活学习不无聊；"
                },
            }

        ],
    },
};

postData = {
    month:"",
    year:"",
    schoolMonthThemeInfo: {
        monthTheme: "慧心之希望月",
        content: "1. 很容易看到生活光明、轻松一面，认为生活充满乐趣和有趣的事；2.乐观面对一切事物，以积极心态看待现实生活，有价值感，生活学习不无聊；"
    },
};
adminPageMockTemplateTemp[adminPageActionTypes.SET_ADMIN_MONTHTHEME] = {
    status: 'success',
    result: {},
};

//todo
var qualityCategoryDictResponse = {
    status: 'success',
    result: {
        qualityCategoryDict:[
            {
                rootQualityCategoryID: "1",
                rootQualityCategoryName: "品德表现",

                evaluationItems: [
                    {
                        qualityCategoryID: "1",
                        qualityCategoryName: "品德操守",
                    },
                    {
                        qualityCategoryID: "2",
                        qualityCategoryName: "责任义务",
                    }
                ]
            }
        ],
    }
};

postData = {
    eventCategoryType:["Course","Investigation"]
};

//三种合并为一个请求，eventCategoryType 只是请求参数不同 课程库["Course","Investigation"] ，活动和社团["Activity","Club"],特长荣誉 职务["Honor Skill Position"]
adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_EVENTHOLDER] = {
    status: 'success',
    result: {
        eventLib:[
            {
                rootEventCategoryName:"选修课",
                rootEventCategoryID:"01",

                eventCategoryType:"Course", //7种 Activity Course Club Position Honor Skill Investigation
                //每一种名称是否可以统一为 项目名称
                eventHolders:[
                    {
                        eventHolderID:"1",
                        eventHolderName:"化学选修课",

                        positionTypeName:"",//只有职务有此项
                        positionTypeID:"",//只有职务有此项

                        rootQualityCategoryID: "1",
                        rootQualityCategoryName: "品德表现",

                        qualityCategoryID: "2",
                        qualityCategoryName: "责任义务",
                    }
                ],
            },
            {
                rootEventCategoryName:"实验课",
                rootEventCategoryID:"02",

                eventCategoryType:"Course", //7种 Activity Course Club Position Honor Skill Investigation
                //每一种名称是否可以统一为 项目名称
                eventHolders:[
                    {
                        eventHolderID:"1",
                        eventHolderName:"化学实验课",

                        positionTypeName:"",//只有职务有此项
                        positionTypeID:"",//只有职务有此项

                        rootQualityCategoryID: "1",
                        rootQualityCategoryName: "品德表现",

                        qualityCategoryID: "2",
                        qualityCategoryName: "责任义务",
                    }
                ],
            },
            {
                rootEventCategoryName:"研究性学习",
                rootEventCategoryID:"03",

                eventCategoryType:"Investigation", //7种 Activity Course Club Position Honor Skill Investigation
                //每一种名称是否可以统一为 项目名称
                eventHolders:[
                    {
                        eventHolderID:"1",
                        eventHolderName:"化学研究",

                        positionTypeName:"",//只有职务有此项
                        positionTypeID:"",//只有职务有此项

                        rootQualityCategoryID: "1",
                        rootQualityCategoryName: "品德表现",

                        qualityCategoryID: "2",
                        qualityCategoryName: "责任义务",
                    }
                ],
            }
        ],

    },
};

postData ={
    eventHolders:[
        {
            eventHolderName:"化学选修课",

            eventCategoryType:"",

            positionTypeID:"",//只有职务有此项

            rootEventCategoryID:"",

            rootQualityCategoryID: "1",

            qualityCategoryID: "2",
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.CREATE_ADMIN_EVENTHOLDER] = {
    status: 'success',
    result: {
        eventHolders:[
            {
                eventHolderID:""
            }
        ]
    },
};

postData = {
    eventHolders:[
        {
            eventHolderID:"1",
            eventHolderName:"化学选修课",

            positionTypeID:"",//只有职务有此项

            rootEventCategoryID:"",

            eventCategoryType:"",

            rootQualityCategoryID: "1",

            qualityCategoryID: "2",
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.UPDATE_ADMIN_EVENTHOLDER] = {
    status: 'success',
    result: {},
};

postData = {
    courses:[
        {
            eventHolderID:"1",

            eventCategoryType:"",

            rootEventCategoryID:"",
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.DELETE_ADMIN_EVENTHOLDER] = {
    status: 'success',
    result: {},
};

//todo 印象词类别列表在学生处是否有显示 选择时页面

//todo
var kkd = {
    result:{
        schoolProvidedImpressionTypes:[
            {
                impressionTypeID:"",//固定德智体美劳和其他
                impressionTypeName:""
            }
        ],
    }
};

adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_IMPRESSIONTYPES] = {
    status: 'success',
    result: {
        schoolProvidedImpressionTypes: [
            {
                impressionTypeID:"1",//固定德智体美劳和其他
                impressionTypeName:"德"
            },{
                impressionTypeID:"2",//固定德智体美劳和其他
                impressionTypeName:"智"
            },{
                impressionTypeID:"3",//固定德智体美劳和其他
                impressionTypeName:"体"
            },{
                impressionTypeID:"4",//固定德智体美劳和其他
                impressionTypeName:"美"
            },{
                impressionTypeID:"5",//固定德智体美劳和其他
                impressionTypeName:"劳"
            },{
                impressionTypeID:"6",//固定德智体美劳和其他
                impressionTypeName:"其他"
            }
        ]
    },
};
adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_IMPRESSIONWORD] = {
    status: 'success',
    result: {
        schoolProvidedImpressions: [
            {
                impressionContent: "聪明能干",
                impressionTypeID:"1",
                impressionTypeName:"德",
                impressionID: "01"
            }, {
                impressionContent: "乐于助人",
                impressionTypeID:"2",
                impressionTypeName:"智",
                impressionID: "02"
            }, {
                impressionContent: "乐于助人",
                impressionTypeID:"2",
                impressionTypeName:"智",
                impressionID: "03"
            }, {
                impressionContent: "进风劲草",
                impressionTypeID:"3", 
                impressionTypeName:"体",
                impressionID: "04"
            }, {
                impressionContent: "技艺非凡",
                impressionTypeID:"3",
                impressionTypeName:"体",
                impressionID: "05"
            }, {
                impressionContent: "兰心蕙质",
                impressionTypeID:"4",
                impressionTypeName:"美",
                impressionID: "06"
            },{
                impressionContent: "聪明能干",
                impressionTypeID:"1",
                impressionTypeName:"德",
                impressionID: "01"
            }, {
                impressionContent: "乐于助人",
                impressionTypeID:"2",
                impressionTypeName:"智",
                impressionID: "02"
            }, {
                impressionContent: "乐于助人",
                impressionTypeID:"2",
                impressionTypeName:"智",
                impressionID: "03"
            }, {
                impressionContent: "进风劲草",
                impressionTypeID:"3",
                impressionTypeName:"体",
                impressionID: "04"
            }, {
                impressionContent: "技艺非凡",
                impressionTypeID:"3",
                impressionTypeName:"体",
                impressionID: "05"
            }, {
                impressionContent: "兰心蕙质",
                impressionTypeID:"4",
                impressionTypeName:"美",
                impressionID: "06"
            },{
                impressionContent: "聪明能干",
                impressionTypeID:"1",
                impressionTypeName:"德",
                impressionID: "01"
            }, {
                impressionContent: "乐于助人",
                impressionTypeID:"2",
                impressionTypeName:"智",
                impressionID: "02"
            }, {
                impressionContent: "乐于助人",
                impressionTypeID:"2",
                impressionTypeName:"智",
                impressionID: "03"
            }, {
                impressionContent: "进风劲草",
                impressionTypeID:"3",
                impressionTypeName:"体",
                impressionID: "04"
            }, {
                impressionContent: "技艺非凡",
                impressionTypeID:"3",
                impressionTypeName:"体",
                impressionID: "05"
            }, {
                impressionContent: "兰心蕙质",
                impressionTypeID:"4",
                impressionTypeName:"美",
                impressionID: "06"
            }
        ]
    },
};

postData = {
    impressions:[
        {
            impressionTypeID:"",
            impressionContent: "长得漂亮",
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.CREATE_ADMIN_IMPRESSIONWORD] = {
    status: 'success',
    result: {
        schoolProvidedImpressions: [
            {
                impressionContent: "聪明能干create",

                impressionTypeID:"",
                impressionTypeName:"",

                impressionID: "03"
            },
            {
                impressionContent: "乐于助人create",
                impressionTypeID:"",
                impressionTypeName:"",
                impressionID: "04"
            }
        ]
    },
};

postData = {
    impressions:[
        {
            impressionTypeID:"",
            impressionContent: "长得漂亮",
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.UPDATE_ADMIN_IMPRESSIONWORD] = {
    status: 'success',
    result: {
        schoolProvidedImpressions: [
            {
                impressionContent: "聪明能干",

                impressionTypeID:"",
                impressionTypeName:"",

                impressionID: "01"
            },
            {
                impressionContent: "乐于助人",
                impressionTypeID:"",
                impressionTypeName:"",
                impressionID: "02"
            },
            {
                impressionContent: "聪明能干create",

                impressionTypeID:"",
                impressionTypeName:"",

                impressionID: "03"
            },
            {
                impressionContent: "乐于助人create",
                impressionTypeID:"",
                impressionTypeName:"",
                impressionID: "04"
            }
        ]
    },
};

postData = {
    impressions:[
        {
            impressionID: "04"
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.DELETE_ADMIN_IMPRESSIONWORD] = {
    status: 'success',
    result: {
        schoolProvidedImpressions: [
            {
                impressionContent: "聪明能干",

                impressionTypeID:"",
                impressionTypeName:"",

                impressionID: "01"
            },
            {
                impressionContent: "乐于助人",
                impressionTypeID:"",
                impressionTypeName:"",
                impressionID: "02"
            },
            {
                impressionContent: "聪明能干create",

                impressionTypeID:"",
                impressionTypeName:"",

                impressionID: "03"
            }
        ]
    },
};
//积分管理
adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_INTEGRALSCOREITEM] = {
    status: 'success',
    result: {
        schoolIntegralScoreItems:[
            {
                schoolIntegralScoreItemID:"1",

                rootIntegralScoreCategoryID:"1",
                rootIntegralScoreCategoryName:"我的7选3",

                integralScoreCategoryID:"2",
                integralScoreCategoryName:"7选3手机完成",

                condition:"无",
                score:"100"
            },
            {
                schoolIntegralScoreItemID:"2",

                rootIntegralScoreCategoryID:"1",
                rootIntegralScoreCategoryName:"测试中心",

                integralScoreCategoryID:"2",
                integralScoreCategoryName:"多元智能测试完成",

                condition:"无",
                score:"40"
            },
            {
                schoolIntegralScoreItemID:"3",

                rootIntegralScoreCategoryID:"1",
                rootIntegralScoreCategoryName:"测试中心",

                integralScoreCategoryID:"2",
                integralScoreCategoryName:"价值观测试完成",

                condition:"无",
                score:"40"
            },
            {
                schoolIntegralScoreItemID:"4",

                rootIntegralScoreCategoryID:"1",
                rootIntegralScoreCategoryName:"自我剖析与目标设定",

                integralScoreCategoryID:"2",
                integralScoreCategoryName:"自我剖析完成",

                condition:"不少于50字",
                score:"30"
            }
        ]
    },
};

postData = {
    schoolIntegralScoreItems:[
        {
            schoolIntegralScoreItemID:"",
            score:"",//除了分数，其他条件是不允许老师编辑的
        }
    ]
};
adminPageMockTemplateTemp[adminPageActionTypes.SET_ADMIN_INTEGRALSCOREITEM] = {
    status: 'success',
    result: {
        schoolIntegralScoreItems:[
            {
                schoolIntegralScoreItemID:"",

                rootIntegralScoreCategoryID:"",
                rootIntegralScoreCategoryName:"",

                integralScoreCategoryID:"",
                integralScoreCategoryName:"",

                condition:"",
                score:""
            }
        ]
    },
};
//统计功能 -- 综合素质活动库统计
adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_ACTIVITYLIBSTATISTICS] = {
    status: 'success',
    result: {
        eventCategoryStatistics:[
            {
                eventCategoryName:"选修课", count:"10"
            }, {
                eventCategoryName:"校内活动", count:"23"
            }, {
                eventCategoryName:"校外实践",count:"53"
            }, {
                eventCategoryName:"学生社团",count:"23"
            }, {
                eventCategoryName:"实验课",count:"13"
            }, {
                eventCategoryName:"研究性学习",count:"63"
            }, {
                eventCategoryName:"特长",count:"73"
            }, {
                eventCategoryName:"职务",count:"83"
            }, {
                eventCategoryName:"荣誉",count:"93"
            }
        ]
    },
};
//统计功能 -- 学生活跃度
adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_STUDENTACTIVITYSTATISTICS] = {
    status: 'success',
    result: {
        eventHolderStatistics:[{
            eventCategoryName:"运动会",
            count:"23"
        }, {
            eventCategoryName:"植树节",
            count:"23"
        }, {
            eventCategoryName:"篮球特长",
            count:"53"
        }, {
            eventCategoryName:"参与博物馆",
            count:"23"
        }, {
            eventCategoryName:"围棋协会",
            count:"13"
        }, {
            eventCategoryName:"物理实验课",
            count:"63"
        }, {
            eventCategoryName:"校三好学生",
            count:"73"
        }, {
            eventCategoryName:"拔河比赛",
            count:"83"
        }, {
            eventCategoryName:"乐器选修课",
            count:"93"}
        ]
    },
};

//数据量大 这里用多次请求
postData = {
    grade:"",
    classID:"",
    termID:""
};
//请求结果不要缓存
adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_STUDENTRECORD] = {
    status: 'success',
    result: {
        studentArchives:[
            {
                name:"谭小小",
                userID:"1",
                systemID:"3305896587541",

                gradeName:"高一",
                grade:"1",
                className:"高一一班",
                classID:"1",
                termName:"2015-16第一学期",
                termID:"1",
            },{
                name:"谭小小",
                userID:"1",
                systemID:"3305896587541",

                gradeName:"高一",
                grade:"1",
                className:"高一一班",
                classID:"1",
                termName:"2015-16第一学期",
                termID:"1",
            }
        ]
    },
};

postData = {
    grade:"",
    classID:"",
    termID:"",
    studentUserID:""
};
//下载学生档案
adminPageMockTemplateTemp[adminPageActionTypes.DOWNLOAD_ADMIN_STUDENTRECORD] = {
    status: 'success',
    result: {
        studentArchives:[
            {
                name:"谭小小",
                userID:"1",
                systemID:"3305896587541",

                gradeName:"高一",
                grade:"1",
                className:"高一一班",
                classID:"1",
                termName:"2015-16第一学期",
                termID:"1",
            }
        ]
    },
};

//一期不做
adminPageMockTemplateTemp[adminPageActionTypes.READ_ADMIN_REPORTITEM] = {
    status: 'success',
    result: {
        reportItem:[
            {
                itemID:"",
                content:"",
                reason:"",
                type:"",
                reporterUserID:"",
                reporterName:"",
                datetime:"",
                userBeReportedID:"",
                userBeReportedName:""
            }
        ]
    },
};

adminPageMockTemplateTemp[adminPageActionTypes.MARK_ADMIN_REPORTITEM] = {
    status: 'success',
    result: {},
};

adminPageMockTemplateTemp[adminPageActionTypes.ACCEPT_ADMIN_REPORTITEM] = {
    status: 'success',
    result: {},
};

adminPageMockTemplateTemp[adminPageActionTypes.DELETE_ADMIN_REPORTITEM] = {
    status: 'success',
    result: {},
};


//校园寻星-获取评选条目
adminPageMockTemplateTemp[adminPageActionTypes.GET_ADMIN_STAROPTIONS] = {
    status: 'success',
    result: {
        schoolStarOptions:[
            {
                label: '品德表现之星',
                value: 'Apple'
            }, {
                label: '校内活动之星',
                value: 'Pear'
            }, {
                label: '选修课之星',
                value: 'Orange'
            }, {
                label: '艺术素养之星',
                value: '222'
            }, {
                label: '运动健康之星',
                value: '33'
            }, {
                label: '校外实践之星',
                value: '44'
            }, {
                label: '社团之星',
                value: '55'
            }, {
                label: '创新实践之星',
                value: '66'
            }
        ]
    },
};
var getSchoolStarInfoResponse = {
    schoolStars:[
        {
            schoolStarID:"",
            schoolStarName:""
        }
    ],
    isOpen: true,
    toDate:"2016-10-10"
};

postData = {
    rankItems:[
        {
            rankItemID:"",
        }
    ],
    isOpen: true,
    toDate:"2016-10-10"
};
var setSchoolStarInfoResponse = {
    status: 'success',
    result: {},
};

export var adminPageMockTemplate = adminPageMockTemplateTemp;