import * as React from 'react'

"use strict";
import CardContentWithClickLikeAndComment = require("./CardContentWithClickLikeAndComment");
import {Popover} from "antd";
import IFollowingEvent = Nicezy.IFollowingEvent;
import {studentDefaultHeadPic} from "../Config/CommonConfig";
import {formatDate} from "../commonFunc";
import {QualityCategoryIDInfoMap} from "../Config/HomePageConfig";
import PersonalComprehensiveQualityRecordSingle = require("../../pages/HomePage/Component/PersonalComprehensiveQualityRecordSingle");
import IQualityRecord = Nicezy.IQualityRecord;
import ElectiveCourseForm = require('../../pages/HomePage/Component/ActivityForms/ElectiveCourseForm')
import ActivityForm = require("../../pages/HomePage/Component/ActivityForms/ActivityForm")
import CommentList = require("./CommentList");

/*关注的人所发的动态 左侧头像 右侧动态 可评论 点赞 取消关注*/
interface FollowingEventSingleProps extends React.Props<FollowingEventSingle> {
    followingEvent: IFollowingEvent
}

interface FollowingEventSingleState {

}
const content = (
    <div>
        <div className="popover-div-btn">取消关注</div>
        <div className="popover-div-btn">举报</div>
    </div>
);


class FollowingEventSingle extends React.Component<FollowingEventSingleProps, FollowingEventSingleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var followingEvent = this.props.followingEvent;
        if (!followingEvent){
            return <div>loading</div>
        }
        var headImage = followingEvent.headImage?followingEvent.headImage: studentDefaultHeadPic;
        var name = followingEvent.name;
        var date = formatDate(followingEvent.fromDate);
        var eventCategoryName = QualityCategoryIDInfoMap[followingEvent.eventCategoryType].displayName;

        var addComponentSubComponent = followingEvent.eventCategoryType=="electiveCourse"?<ElectiveCourseForm record={followingEvent} componentState="readOnly" disableEdit={true}/>:<ActivityForm componentState="readOnly" record={followingEvent} disableEdit={true}/>;
        var CardContentWithClickLikeAndCommentProps = {
            likeCount:followingEvent.admire.count, //点赞数
            commentCount:followingEvent.comments.length, //评论数
            selfLike:followingEvent.admire.isAdmired ,  //自己是否已点赞
            comments:followingEvent.comments,//评论列表
            componentState: "readOnly" //子组件form当前状态
        };
        return (
            <div className="content">
                <a className="headPic">
                    <img src={headImage}/>
                </a>
                <div className="header">
                    <span className="am-padding-right-sm">{name}</span>
                    <span className="am-padding-right-lg">更新了{eventCategoryName}</span>
                    <span >{date}</span>
                    <Popover placement="bottomRight"  content={content}  overlayClassName="popver-width">
                        <i className="fa fa-angle-down rightIcon"></i>
                    </Popover>
                </div>
                <div className="content-desc">
                    <CardContentWithClickLikeAndComment {...CardContentWithClickLikeAndCommentProps} subComponent={addComponentSubComponent} style={{border:"0px"}}/>
                </div>
            </div>
        )
    }
}

export = FollowingEventSingle