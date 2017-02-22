
declare namespace Nicezy {

    interface IUserImmutableInfo {
        userID: string,
        name: string,
        systemID: string,
        gender: string,
        stateMsg: string,
        headImage:string,

        classID?: number,
        className?: string,
        gradeName?: string
    }

    interface ITeacherRankState {
        classAvgIntegralScore: number,
        gradeIntegralRank: number
    }

    interface IEvent{
        eventID: string,//单条动态的具体内容
        eventHolderID:string,
        eventHolderName:string,//课程名称
        eventHolderType:string, //是否是活动库中 库外

        qualityCategoryName:string,//所属类别
        qualityCategoryID: string,

        eventContent: string,

        courseCredit?:number,
        examScore?: number,

        //点赞只显示点赞数量
        admire?:IAdmire,
        //双层 结构
        comments?:Array<IComment>,

        fromDate?:string,
        toDate?:string,
        pictures?:Array<IPicture>,
    }

    interface IFollowingEvent extends IEvent{
        userEventSubID:string, //订阅列表中的ID

        eventCategoryType:string, //课程记录 活动记录 社团记录 根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

        rootEventCategoryName:string,//更新了 后的text
        rootEventCategoryID:string, //rootEventCategoryID 与eventCategoryType 是多对一的关系

        userID:string,
        name:string,
        headImage:string,

        modifiedTime:string,
    }

    interface IComment{
        commentID:string,
        headImage:string,
        userID:string,
        name:string,
        date:string,
        commentContent:string,

        admire:IAdmire,

        subComments:Array<ISubComment>
    }

    interface ISubComment{
        commentID:string,
        headImage:string,
        fromUserID:string,
        fromUserName:string,
        toUserID:string,
        toUserName:string,
        date:string,
        commentContent:string,

        admire:IAdmire,
    }

    interface IAdmire {
        count:number,
        isAdmired?:boolean,
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
    }

    interface IQualityRecord{
        eventCategoryType: string, //根据此ID 前台配置 名称 等title  //title类型  便于调用不同的form

        rootEventCategoryName: string,
        rootEventCategoryID:string, //rootEventCategoryID 与eventCategoryType 是多对一的关系
        records:Array<IEvent>
    }

    interface IFan{
        headImage: string,
        name: string,
        userID: string,
        className:string,

        regionID: string,
        schoolID: string,

        relationState:relationState,

        stateMsg?: string
    }

    interface visitor {
        headImage:string,
        name: string,

        userID: string,
        regionID: string,
        schoolID: string,

        className:string
    }

    type relationState = "0"|"1"|"2"|"-1";//0 未关注 1 已关注 2 互相关注 -1自己

    type size = "large"|"normal"|"small";//大中小

    interface SocialInfo {
        followingUserCount: number, //我关注的
        followedUserCount: number, //关注我的
        relationState?: relationState, //0 未关注 1 已关注 2 互相关注 -1自己
    }

    //学生表现记录
    interface StudentPerformanceItem{
        studentPerformanceID: string,
        studentUserID: string,
        name: string,

        performanceLevelID:string,
        performanceLevelName:string,

        performanceDate: string,

        performanceTypeID:string,
        performanceTypeName:string,

        content: string,
        teacherUserID: string, //哪位老师记录的

        pictures:Array<IPicture>
    }

    interface IPicture{
        pictureUrl: string,
        pictureName?: string
    }

    //评价学生星星
    interface EvaluateStudentByScore {
        studentUserID: string,
        name:string,
        headImage: string,

        qualityEvaluationFinished:boolean,
        qualityEvaluations:Array<QualityEvaluationWithScore>
    }

    interface QualityEvaluationWithScoreAndFlag{
        qualityEvaluationFinished:boolean,
        qualityEvaluations:Array<QualityEvaluationWithScore>
    }

    interface QualityEvaluationWithScore{
        qualityCategoryName: string,
        qualityCategoryID:string,
        evaluationScore:number
    }

    interface ClassNotificationItem{
        notificationID: string,
        notificationContent: string,
        modifiedTime: string
    }

    interface StudentSimpleInfo{
        userID: string,
        name: string,
        headImage: string
    }

    interface TermOverallEvaluation{
        termOverallEvaluationID:string,
        termOverallEvaluationContent:string
    }

    interface StuTermQualityEvaluations{
        rootQualityCategoryID: string,
        rootQualityCategoryName: string,

        stuTermQualityEvaluation:Array<StuTermQualityEvaluation>
    }

    interface evaluateStudentDict{
        rootQualityCategoryID: string,
        rootQualityCategoryName: string,

        evaluationItems:Array<StuTermQualityEvaluation>
    }

    interface StuTermQualityEvaluation{
        qualityCategoryID: string,
        qualityCategoryName: string,

        /*evaluated: true,
         evaluationItemID:"",
         evaluationItemContent:"爱祖国",*/

        evaluationItemID?: string,
        evaluationItemContent?: string,

        evaluated?: boolean,//读取到false 再发请求获取选择列表
    }
}

declare module "nicezy" {
    export = Nicezy;
}
