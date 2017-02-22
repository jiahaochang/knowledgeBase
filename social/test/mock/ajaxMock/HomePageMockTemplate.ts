import * as studentActionTypes from '../../../actions/HomePage/HomePageActionTypes'

// 使用 Mock
let studentMockTemplateTemp = {};

var postData = {
};

var getStudentHomePageModuleConfig = {
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
    userID: "20150101"
};
studentMockTemplateTemp[studentActionTypes.READ_STUDENT_USERINFO] = {
    "status": "success",
    "result":{
        "userID": "20150101",
        headImage:"vendor/images/tests/multipleIntelligence.png",

        "name": "小明童鞋",
        "systemID": "201007073",
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

postData = {
    termID: "1"
};
studentMockTemplateTemp[studentActionTypes.GET_STUDENT_RANKSTATE] = {
    status: 'success',
    result: {
        integralScore: 350,
        rankInClass: 12,
        rankInSchool: 122
    },
};

studentMockTemplateTemp[studentActionTypes.GET_STUDENT_SUBJECTCHOICESTATE] = {
    status: 'success',
    result: {
        integralScore: 200,
        subjectChoiceResult: {
            chosenSubjects:[
                {
                    subjectName: "政治"
                },
                {
                    subjectName: "历史"
                },
                {
                    subjectName: "技术"
                }
            ],
        },
        subjectInterest:[
            {
                subjectName: "物理",
                rank: 1
            },
            {
                subjectName: "生物",
                rank: 3
            },
            {
                subjectName: "化学",
                rank: 2
            },
            {
                subjectName: "地理",
                rank: 5
            },
            {
                subjectName: "历史",
                rank: 4
            },
            {
                subjectName: "政治",
                rank: 6
            },
            {
                subjectName: "技术",
                rank: 7
            }
        ],
        subjectAbility:[
            {
                rank: 1,
                subjectName: "历史",
                percent:0.0014814814814814814
            },
            {
                rank: 5,
                subjectName: "化学",
                percent:0.31555555555555553
            },
            {
                rank: 2,
                subjectName: "生物",
                percent:0.38666666666666666
            },
            {
                rank: 4,
                subjectName: "物理",
                percent:0.44296296296296295
            },
            {
                rank: 3,
                subjectName: "地理",
                percent:0.7585185185185185
            },
            {
                rank: 7,
                subjectName: "政治",
                percent:0.802962962962963
            },
            {
                rank: 6,
                subjectName: "技术",
                percent:0.8622222222222222
            },
        ],
        chosenMajors:[
            {
                majorMLName:"生物工程",
                majorMLID:"01"
            },
            {
                majorMLName:"临床医学",
                majorMLID:"02"
            },
            {
                majorMLName:"机械设计与制造",
                majorMLID:"03"
            },
        ]
    },
};

postData = {
    termID: "1"
};
//测评中心
studentMockTemplateTemp[studentActionTypes.GET_STUDENT_CAREERSTATE] = {
    status: 'success',
    result: {
        integralScore: 200,
        assessCenter:{
            assessInfo:[
                {
                    testTypeID: "holland",
                    testTypeName: "职业兴趣测试",
                    finished: true
                },
                {
                    testTypeID: "MBTI",
                    testTypeName: "职业性格测试",
                    finished: false
                },
                {
                    testTypeID: "multipleIntelligence",
                    testTypeName: "多元智能",
                    finished: false
                },
                {
                    testTypeID: "values",
                    testTypeName: "价值观",
                    finished: true
                }
            ],
        }
    },
};

postData = {
    termID: "1"
};

// 自我剖析获取
studentMockTemplateTemp[studentActionTypes.GET_STUDENT_ANALYZEMYSELF] = {
    status: 'success',
    result: {
        selfCharacterContent:"吃饭",//我的性格与兴趣
        selfAdvantageContent:"" // 我的优势与不足
    },
};
//自我剖析保存
postData = {
    termID:"1",
    selfCharacterContent:"吃饭",//我的性格与兴趣
    selfAdvantageContent:"没有来报到" // 我的优势与不足
}
studentMockTemplateTemp[studentActionTypes.SET_STUDENT_ANALYZEMYSELF] = {
    status: 'success',
};


postData = {
    termID: "1"
};

// textarea 编辑一次后不能修改 保存时提示   目标设定获取
studentMockTemplateTemp[studentActionTypes.GET_STUDENT_TARGETSTATE] = {
    status: 'success',
    result: {
        target:{
            schoolTargetContent:"",
            qualityTargetContent:"",
        }
    },
};
//目标设定保存
postData = {
    termID:"1",
    schoolTargetContent:"24353",
    qualityTargetContent:"435362"
}
studentMockTemplateTemp[studentActionTypes.SET_STUDENT_TARGETSTATE] = {
    status: 'success',
};


studentMockTemplateTemp[studentActionTypes.GET_STUDENT_COMPROHENSIVEQUALITYCARDS] = {
    status: 'success',
    result: {
        qualityRecords:[
            {
                eventCategoryType:"electiveCourse", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"选修课",
                rootEventCategoryID:"01", //rootEventCategoryID 与eventCategoryType 是多对一的关系

                records:[
                    {
                        eventID: "01",//单条动态的具体内容

                        eventHolderID:"01",
                        eventHolderName:"汉语选修课",
                        eventHolderType:"", //是否是课程库中内容 或者其他

                        qualityCategoryName:"限定性选修课",
                        qualityCategoryID:"01",

                        courseCredit:3,
                        examScore: 95,
                        eventContent: "付出的受伤的通通都是你,自私的残忍的似乎只有我,可惜我并不难过,我仅存的失落，是再不怕寂寞",
                        admire:{
                            count:20,
                            isAdmired:false,
                            // 数据接口 预留
                            /*admiringUsers:[
                             {
                             schoolID:"",
                             regionID:"",
                             userID:"",
                             name:"",
                             headImage:"www.imageServer.com/headImage/1.jpg"
                             }
                             ],*/
                        },
                        comments:[
                            {
                                commentID:"01",
                                headImage:"vendor/images/tests/multipleIntelligence.png",
                                userID:"0101",
                                name:"冬天里的一把火",
                                date:"09-25 09:30",
                                commentContent:"你就像那一把火",
                                admire:{
                                    count:20,
                                    isAdmired:false,
                                },
                                subComments:[
                                    {
                                        commentID:"02",
                                        headImage:"vendor/images/tests/holland.png",
                                        fromUserID:"0102",
                                        fromUserName:"艳阳天",
                                        toUserID:"0101",
                                        toUserName:"冬天里的一把火",
                                        date:"09-25 09:30",
                                        commentContent:"你是我的小苹果",
                                        admire:{
                                            count:22,
                                            isAdmired:true,
                                        },
                                    }
                                ]
                            }
                        ],
                    }
                ],
            },
            {
                eventCategoryType:"campusActivities", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"校内活动",
                rootEventCategoryID:"02", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[
                    {
                        eventID: "01",//单条动态的具体内容

                        eventHolderID:"01",
                        eventHolderName:"校运动会",
                        eventHolderType:"", //是否是活动库中 库外

                        qualityCategoryName:"运动技能与体育特长",
                        qualityCategoryID:"02",

                        eventContent: "想见的不见的都失去联络，剩下的多余的都不要再说，得到的已经太多，你安然去生活 ，我安静来存活",

                        fromDate: "2015-10-01",
                        toDate: "2015-10-02",
                        pictures: [
                            {
                                pictureUrl: "vendor/images/tests/multipleIntelligence.png"
                            },
                            {
                                pictureUrl: "vendor/images/tests/holland.png"
                            },
                            {
                                pictureUrl: "vendor/images/tests/mbti.png"
                            },
                            {
                                pictureUrl: "vendor/images/tests/values.png"
                            }
                        ],
                        //todo 点赞只显示点赞数量
                        admire: {
                            count: 20,
                            isAdmired: true,
                            // 数据接口 预留
                            /*admiringUsers:[
                             {
                             schoolID:"",
                             regionID:"",
                             userID:"",
                             name:"",
                             headImage:"www.imageServer.com/headImage/1.jpg"
                             }
                             ],*/
                        },
                        //todo 双层 嵌套结构
                        comments: [
                            {
                                commentID: "01",
                                headImage: "vendor/images/tests/multipleIntelligence.png",
                                userID: "0101",
                                name: "冬天里的一把火",
                                date: "09-25 09:30",
                                commentContent: "你就像那一把火",

                                admire: {
                                    count: 20,
                                    isAdmired: false,
                                },

                                subComments: [
                                    {
                                        commentID: "02",
                                        headImage: "vendor/images/tests/holland.png",
                                        fromUserID: "0102",
                                        fromUserName: "艳阳天",
                                        toUserID: "0101",
                                        toUserName: "冬天里的一把火",
                                        date: "09-25 09:30",
                                        commentContent: "你是我的小苹果",

                                        admire: {
                                            count: 22,
                                            isAdmired: true
                                        },
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        eventID: "02",//单条动态的具体内容

                        eventHolderID:"02",
                        eventHolderName:"校运动会",
                        eventHolderType:"", //是否是活动库中 库外

                        qualityCategoryName:"运动技能与体育特长",
                        qualityCategoryID:"02",

                        eventContent: "2333想见的不见的都失去联络，剩下的多余的都不要再说，得到的已经太多，你安然去生活 ，我安静来存活",

                        fromDate:"2015-10-01",
                        toDate:"2015-10-02",
                        pictures:[
                            {
                                pictureUrl:"vendor/images/tests/multipleIntelligence.png"
                            },
                            {
                                pictureUrl:"vendor/images/tests/holland.png"
                            },
                            {
                                pictureUrl:"vendor/images/tests/mbti.png"
                            },
                            {
                                pictureUrl:"vendor/images/tests/values.png"
                            }
                        ],
                        //todo 点赞只显示点赞数量
                        admire:{
                            count:20,
                            isAdmired:true,
                            // 数据接口 预留
                            /*admiringUsers:[
                             {
                             schoolID:"",
                             regionID:"",
                             userID:"",
                             name:"",
                             headImage:"www.imageServer.com/headImage/1.jpg"
                             }
                             ],*/
                        },
                        //todo 双层 嵌套结构
                        comments:[
                            {
                                commentID:"01",
                                headImage:"vendor/images/tests/multipleIntelligence.png",
                                userID:"0101",
                                name:"冬天里的一把火",
                                date:"09-25 09:30",
                                commentContent:"你就像那一把火",

                                admire:{
                                    count:20,
                                    isAdmired:false,
                                },

                                subComments:[
                                    {
                                        commentID:"02",
                                        headImage:"vendor/images/tests/holland.png",
                                        fromUserID:"0102",
                                        fromUserName:"艳阳天",
                                        toUserID:"0101",
                                        toUserName:"冬天里的一把火",
                                        date:"09-25 09:30",
                                        commentContent:"你是我的小苹果",

                                        admire:{
                                            count:22,
                                            isAdmired:true
                                        },
                                    }
                                ]
                            }
                        ],
                    }
                ],
            },
            {
                eventCategoryType:"offCampusPractice", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"校外实践",
                rootEventCategoryID:"03", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[]
            },
            {
                eventCategoryType:"studentOrgan", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"学生社团",
                rootEventCategoryID:"04", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[]
            },
            {
                eventCategoryType:"researchLearning", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"研究性学习",
                rootEventCategoryID:"05", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[]
            },
            {
                eventCategoryType:"serveAsPosition", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"担任职务",
                rootEventCategoryID:"06", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[]
            },
            {
                eventCategoryType:"mySpecialty", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"我的特长",
                rootEventCategoryID:"07", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[]
            },
            {
                eventCategoryType:"honoraryTitle", //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"荣誉称号",
                rootEventCategoryID:"08", //rootEventCategoryID 与eventCategoryType 是多对一的关系
                records:[]
            }
        ]
    },
};

//新增选修课
postData = {
    eventCategoryType:"1",//根据此ID 前台配置 名称 等title  
    rootEventCategoryName:"选修课",
    rootEventCategoryID:2,

    courseRecords:[
        {
            eventHolderType:"",
            eventHolderID:"1", //当eventHolderType表示其他时，无此项
            eventHolderName:"化学选修课",

            eventCategoryName:"限定性选修课",
            eventCategoryID:2,

            examScore: 95,
            eventContent: "",
            //todo 上传结构
            pictures:[
                {
                    pictureUrl:"/dd/1.jpg"
                }
            ]
        }
    ]

};

//获取新建获活动所需信息
postData = {
    eventCategoryType:"1",//根据此ID 前台配置 名称 等title
    rootEventCategoryID:2,
};

studentMockTemplateTemp[studentActionTypes.GET_ELECTIVECOURSE_CATEGORY] = {
    status:"success",
    result:{
        activityCategories:[
            {
                activityCategoryID:"01",
                activityCategoryName:"文学"
            },
            {
                activityCategoryID:"02",
                activityCategoryName:"理学"
            },
            {
                activityCategoryID:"03",
                activityCategoryName:"工学"
            },
        ],
        activityCategoryMap:{
           "01":[
                {
                    eventHolderID:"01",
                    eventHolderName:"汉语选修课",
                    eventHolderType:"",

                    integralScore:20,

                    qualityCategoryID:"01",
                    qualityCategoryName:"限定性选修课"

                },
                {
                    eventHolderID:"02",
                    eventHolderName:"文言文选修课",
                    eventHolderType:"",

                    integralScore:20,

                    qualityCategoryID:"02",
                    qualityCategoryName:"非限定性选修课"

                }
            ]
        }
    }
};

//新增活动记录
postData = {
    eventCategoryType:"1",//根据此ID 前台配置 名称 等title
    rootEventCategoryName:"选修课",
    rootEventCategoryID:2,

    activityRecord:{
        eventHolderType:"",
        eventHolderID:"1", //当eventHolderType表示其他时，无此项
        eventHolderName:"运动会",

        qualityCategoryName:"体育特长",
        qualityCategoryID:2,
        fromDate:"",
        toDate:"",

        eventContent: "",
        //todo 上传结构
        pictures:[
            {
                pictureUrl:"/dd/1.jpg"
            }
        ]
    }
};

//添加
//修改 只传修改字段

//上传图片 ajax 路径

studentMockTemplateTemp[studentActionTypes.GET_STUDENT_LATESTVISITOR] = {
    status: 'success',
    result: {
        latestVisitors:[
            {
                headImage:"/1.jpg",
                name: "x",

                userID: "1",
                regionID:"",
                schoolID:"",

                className:"高一一班"
            }
        ]
    },
};
postData = {
    studentUserID:""
};
studentMockTemplateTemp[studentActionTypes.GET_STUDENT_IMPRESSION] = {
    status: 'success',
    result: {
        isVisible: false, //是否可以看到结果
        hasImpression: true, //是否有印象
        impressions:["乐于助人","好好学习","天天向上"]
    },
    //privilege:"" //权限信息与result同级
};

//获取印象列表
postData = {
    schoolID:""
};
studentMockTemplateTemp[studentActionTypes.SCHOOL_PROVIDED_IMPRESSIONS] = {
    status: 'success',
    result: {
        schoolProvidedImpressions: [
            {
                impressionContent: "聪明能干",
                impressionID: "01"
            },
            {
                impressionContent: "乐于助人",
                impressionID: "02"
            },
            {
                impressionContent: "好好学习",
                impressionID: "03"
            },
            {
                impressionContent: "天天向上",
                impressionID: "04"
            },
            {
                impressionContent: "富有爱心",
                impressionID: "05"
            },
            {
                impressionContent: "一丝不苟",
                impressionID: "06"
            },
            {
                impressionContent: "长得漂亮",
                impressionID: "07"
            }
        ]
    }
}


//保存对同学的印象
postData = {
    impressedUserID:"",
    impressions:[
        {
            impressionID:""
        }
    ]
};

studentMockTemplateTemp[studentActionTypes.SET_STUDENT_IMPRESSIONS] = {
    status: 'success',
}



export var studentMockTemplate = studentMockTemplateTemp;
