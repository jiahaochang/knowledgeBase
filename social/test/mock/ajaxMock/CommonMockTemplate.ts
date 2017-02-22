"use strict";
import * as commonActionTypes from '../../../actions/CommonAction/CommonActionTypes'
/**
 * 共用的请求
 */

let commonMockTemplateTemp = {};

var postData = {};

postData = {
	targetUserID:"user01"
};
commonMockTemplateTemp[commonActionTypes.ADD_COMMON_VISITRECORD] =  {
	status: 'success',
    result:{
	}	
};

postData = {
    queryUserID:""
};
commonMockTemplateTemp[commonActionTypes.GET_COMMON_OTHERUSERREGIONSCHOOLINFO] =  {
    status: "success",
    result:{
        regionID:"1",
        schoolID:"2",
    }
};

// 通知
// 2个请求 获取动态 获取userEventSubID后的动态
postData = {
    eventNums:"",
    fromUserEventSubID:"",//当前获取到的最后一条的userEventSubID，不传表示拿新的，传表示拿这条以后的eventNums条
};

commonMockTemplateTemp[commonActionTypes.GET_COMMON_ACTIVITIES] =  {
    status: 'success',
    result:{
        followingEvents:[
            {
                userEventSubID:"", //订阅列表中的ID

                eventCategoryType:"electiveCourse", //课程记录 活动记录 社团记录 根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                rootEventCategoryName:"校内活动",//更新了 后的text
                rootEventCategoryID:2, //rootEventCategoryID 与eventCategoryType 是多对一的关系

                eventID: "1",//单条动态的具体内容

                userID:"",
                name:"",
                headImage:"",

                modifiedTime:"",

                eventHolderID:"1",
                eventHolderName:"校运动会",//课程名称
                eventHolderType:"", //是否是活动库中 库外

                qualityCategoryName:"运动技能与体育特长",//所属类别
                qualityCategoryID:2,

                eventContent: "",

                fromDate:"2015-10-01",
                toDate:"2015-10-02",
                pictures:[
                    {
                        pictureUrl:"/img/1.jpg"
                    }
                ],

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
                        headImage:"vendor/images/tests/1.png",
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
                                    count:20,
                                    isAdmired:false
                                },
                            }
                        ]
                    }
                ],
            }
        ]
    }
};

postData = {
    targetUserID:""//此同学的社交属性，有可能是自己
};
commonMockTemplateTemp[commonActionTypes.GET_COMMON_SOCIALINFO] = {
    status: 'success',
    result:{
        followingUserCount: 50, //我关注的
        followedUserCount: 100, //关注我的
        relationState:"0", //0 未关注 1 已关注 2 互相关注 -1自己
    }
};
// 取消关注 关注
// 举报动态
postData = {
    cancelFollowingUserID:"123",
};
commonMockTemplateTemp[commonActionTypes.SET_COMMON_CANCELFOLLOWED] = {
    status: 'success'
};

postData = {
    followingUserID:"123",
};

commonMockTemplateTemp[commonActionTypes.SET_COMMON_BECOMEFOLLOWER] = {
    status: 'success',
    result:{
        relationState:"1"//返回状态信息 有可能是已关注 或者互相关注
    }
};

postData = {
    eventID: "event1"
};
const likeActivity = {
    status: 'success'
};

postData = {
    commentedEventID:"", //对应eventID
    commentedUserID:"", //对应的动态的userID
    replyToComment:"", //被评论的commentID
    commentContent:"",//评论内容
};
commonMockTemplateTemp[commonActionTypes.SET_COMMON_COMMENT] =  {
    status:"success",
    result:{
    }
};

//举报二期
postData = {
    eventID: "a01",

    reasonName: "不和谐",
    reasonID: "reason01",
};
const reportActivity = {
    status: 'success'
};

//通知 假设消息类型固定三种 通知 评论 赞
commonMockTemplateTemp[commonActionTypes.GET_COMMON_NOTIFICATIONS] =  {
    status:"success",
    result:{
        notifications:[
            {
                notificationTypeID:"",//notificationTypeName前台配置

                fromUserInfo:{
                    name:"",
                    userID:"",
                    headImage:""
                },
                notificationTime:"",
                notificationContent:""
            }
        ]
    }
};

var newMsgOnEvent = {
    status:"success",
    result:{
        eventsHasNewMsg:[
            {

            }
        ]
    }
};

postData = {
    commentedEventID:"", //对应eventID
    commentedUserID:"", //对应的动态的userID
    replyToComment:"", //被评论的commentID
    commentContent:"admire",//点赞 取消点赞 admire cancelAdmire
};
commonMockTemplateTemp[commonActionTypes.SET_COMMON_LIKE] =  {
    status:"success",
    result:{

    }
};

//文件上传
postData = {
    uploadFiles:[
        {
            moduleID:"",
            fileType:"",
            fileName:""
        }
    ]
};
var uploadResponse = {
    status:"success",
    result:{
        files:[
            {
                fileName:"",//之后做
                fileUrl:""
            }
        ]
    }
};

//籍贯列表
commonMockTemplateTemp[commonActionTypes.GET_COMMON_NATIVEPLACEINFO] =  {
    nativePlaceProvinces:[
        {
            nativePlaceProvinceID:"1",
            nativePlaceProvinceName:"北京"
        }
    ],
    nativePlaceProvinceCityMap:{
        1:[
            {
                nativePlaceCityID:"",
                nativePlaceCityName:""
            }
        ]
    }
};

postData = {
    targetUserID:""
};
//用户基本信息
commonMockTemplateTemp[commonActionTypes.GET_COMMON_SELFUSERINFO] =  {
    status:"success",
    result:{
        "userID": "20150101",

        "name": "小刘",
        "systemID": "systemID01",
        "classID": 1,
        "className": "高一一班",
        "gradeID": 1,
        "gradeName": "高一",

        "gender": 1,
        stateMsg:"蹉跎错，消磨过，最是光阴化浮沫",
        headImage:"",

        birthDay:"",
        email:"",
        nativePlaceProvinceID:"",
        nativePlaceProvinceName:"",
        NativePlaceCityID:"",
        NativePlaceCityName:"",

        backgroundImage:""
    }
};

//设置基本信息
postData = {
    targetUserID: "20150101",

    "gender": 1,
    stateMsg:"蹉跎错，消磨过，最是光阴化浮沫",
    headImage:"",
    birthDay:"",
    email:"",
    nativePlaceProvinceID:"",
    NativePlaceCityID:"",
    backgroundImage:""
};
commonMockTemplateTemp[commonActionTypes.SET_COMMON_SELFUSERINFO] =  {
    status:"success",
    result:{

    }
};

//设置密码
postData = {
    newPwd:""
};
commonMockTemplateTemp[commonActionTypes.SET_COMMON_PASSWORD] =  {
    status:"success",
    result:{

    }
};
var changePasswordFailResponse = {
    status:"fail",
    result:{
        msg:""
    }
};

//提交建议
postData = {
    adviceContent:""
};
commonMockTemplateTemp[commonActionTypes.SET_COMMON_ADVICE] =  {
    status:"success",
    result:{

    }
};

//我的粉丝
var myFans = {
    status:"success",
    result:{
        //关注我的
        followedUsers: [
            {
                headImage:"",
                name: "明1",
                userID: "123",
                className:"高一一班",

                regionID: "2",
                schoolID: "123",

                relationState:0,
            }
        ]
    }
};

//我关注的人
var myFollowings = {
    status:"success",
    result:{
        //我关注的
        followingUsers: [
            {
                headImage:"",
                name: "明2",
                userID: "1231",
                className:"高一一班",

                regionID: "2",
                schoolID: "123",

                relationState:1,
            }
        ],
    }
};

//获取未读通知和消息数
var newMsgCountResponse = {
    status:"success",
    result:{
        reminds:[
            {
                userInfo:{
                    name:"习大大",
                    className:"高三三班",
                    userID:"u001",
                },
                operate:"follow",
                date:""
            }
        ],

        notifications:[
            {
                notificationID:"n01",
                notificationContext:"123"
            }
        ],
        events:[
            {
                admiredUsers:[
                    {

                    }
                ],
                commentedUsers:[
                    {

                    }
                ],
                event:{
                    userEventSubID:"", //订阅列表中的ID

                    eventCategoryType:"electiveCourse", //课程记录 活动记录 社团记录 根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

                    rootEventCategoryName:"校内活动",//更新了 后的text
                    rootEventCategoryID:2, //rootEventCategoryID 与eventCategoryType 是多对一的关系

                    eventID: "1",//单条动态的具体内容

                    userID:"",
                    name:"",
                    headImage:"",

                    modifiedTime:"",

                    eventHolderID:"1",
                    eventHolderName:"校运动会",//课程名称
                    eventHolderType:"", //是否是活动库中 库外

                    qualityCategoryName:"运动技能与体育特长",//所属类别
                    qualityCategoryID:2,

                    eventContent: "",

                    fromDate:"2015-10-01",
                    toDate:"2015-10-02",
                    pictures:[
                        {
                            pictureUrl:"/img/1.jpg"
                        }
                    ],

                    //点赞只显示点赞数量
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
                    //双层 结构
                    comments:[
                        {
                            commentID:"01",
                            headImage:"vendor/images/tests/1.png",
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
                                        count:20,
                                        isAdmired:false
                                    },
                                }
                            ]
                        }
                    ],
                }
            }
        ]
    }
};

//将消息标记为已读, 将新传未读的ID列表传回或者传回列表中最后一条ID 或时间
postData = {
    notifications:[
        {
            notificationID:"n01"
        }
    ],
    events:[
        {
            eventID:"e01"
        }
    ]
};
var setMsgReadState = {
    status:"success",
    result:{
    }
};
export var commonMockTemplate = commonMockTemplateTemp;