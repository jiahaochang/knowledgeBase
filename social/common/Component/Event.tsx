import * as React from 'react'

"use strict";
import IEvent = Nicezy.IEvent;
import CardContentWithClickLikeAndComment = require("./CardContentWithClickLikeAndComment");
import ElectiveCourseForm = require("../../pages/HomePage/Component/ActivityForms/ElectiveCourseForm")
import ActivityForm = require("../../pages/HomePage/Component/ActivityForms/ActivityForm")

interface EventProps extends React.Props<Event> {
    event: IEvent,
    eventCategoryType?:string
}

interface EventState {

}

/**
 * 一条动态 可以评论 可以点赞 不可编辑
 */
class Event extends React.Component<EventProps, EventState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var event = this.props.event;
        var eventCategoryType = this.props.eventCategoryType;
        if(!event){
            return <div>loading</div>
        }

        var addComponentSubComponent = eventCategoryType=="electiveCourse"?<ElectiveCourseForm record={event} componentState="readOnly" disableEdit={true}/>:<ActivityForm componentState="readOnly" record={event} disableEdit={true}/>;
        var CardContentWithClickLikeAndCommentProps = {
            likeCount:event.admire.count, //点赞数
            commentCount:event.comments.length, //评论数
            selfLike:event.admire.isAdmired ,  //自己是否已点赞
            comments:event.comments,//评论列表
            componentState: "readOnly" //子组件form当前状态
        };
        return (
            <CardContentWithClickLikeAndComment {...CardContentWithClickLikeAndCommentProps} subComponent={addComponentSubComponent} style={{border:"0px"}}/>
        )
    }
}

export = Event