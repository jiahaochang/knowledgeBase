
import IQualityRecord = Nicezy.IQualityRecord;
import IFollowingEvent = Nicezy.IFollowingEvent;

//数据格式转换工具函数

/**
 * 把用户的动态的内容转化到活动记录records中的一条
 * @param followingEvent 用户的一条动态
 * @return qualityRecord 一类活动的记录，可能有多条记录
 */
export function transformFollowingEventToQualityRecord(followingEvent:IFollowingEvent):IQualityRecord {
    var qualityRecord:IQualityRecord;
    var {eventCategoryType, rootEventCategoryName, rootEventCategoryID,
        eventID, eventHolderID, eventHolderName, eventHolderType,
        qualityCategoryName, qualityCategoryID, eventContent, admire, comments, fromDate,
        courseCredit, examScore, toDate, pictures} = followingEvent;
    qualityRecord = {
        eventCategoryType,
        rootEventCategoryName,
        rootEventCategoryID,
        records:[
            {
                eventID,
                eventHolderID,
                eventHolderName,
                eventHolderType,
                qualityCategoryName,
                qualityCategoryID,
                eventContent,
                admire,
                comments,
                fromDate,
                courseCredit,
                examScore,
                toDate,
                pictures
            }
        ]
    };

    return qualityRecord;
}