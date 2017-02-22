import * as React from 'react'
import { Row, Col,Icon, Popover } from 'antd';
import {withRouter} from 'react-router'
import CardContentWithClickLikeAndComment = require('../../../common/Component/CardContentWithClickLikeAndComment')

"use strict";
import FollowingEventSingle = require("../../../common/Component/FollowingEventSingle");
import IFollowingEvent = Nicezy.IFollowingEvent;
import {getDataByActionIDWithQueryAsync} from "../../../common/ajaxUtil";
import {GET_COMMON_ACTIVITIES} from "../../../actions/CommonAction/CommonActionTypes";

interface HomePageActivitiesProps extends React.Props<HomePageActivities> {
    router: any
}
const content = (
    <div>
        <div className="popover-div-btn">取消关注</div>
        <div className="popover-div-btn">举报</div>
    </div>
);

interface HomePageActivitiesStates {
    followingEvents?: Array<IFollowingEvent>
}

class HomePageActivities extends React.Component<HomePageActivitiesProps, HomePageActivitiesStates> {
    constructor(props) {
        super(props);
        this.goToPersonalPage = this.goToPersonalPage.bind(this);
        this.state = {
            followingEvents:[]
        }
    }

    goToPersonalPage(){
        var url = "/homePage/myPersonalPage";
        this.props.router.push(url);
    }

    componentWillMount(){
        var this_ = this;
        getDataByActionIDWithQueryAsync(GET_COMMON_ACTIVITIES, {eventNums:1, fromUserEventSubID:1}, function (response) {
            this_.setState({
                followingEvents: response.result.followingEvents
            })
        })
    }

    render() {
        return (
            <ul className="homepage-activitiesUL">
                <li>
                    <div className="content">
                        <a className="headPic">
                            <img src="vendor/images/default-headpic.jpg"/>
                        </a>
                        <div className="header">
                            <span className="am-padding-right-sm">张医生</span>
                            <span className="am-padding-right-lg">更新了消息</span>
                            <span >05-21 00:19</span>
                            <Popover placement="bottomRight" content={content} overlayClassName="popver-width">
                                <i className="fa fa-angle-down rightIcon"></i>
                            </Popover>
                        </div>
                        <div className="content-desc">
                            <CardContentWithClickLikeAndComment subComponent={<div>上午8时至10时和下午4时至7时，是晒太阳养生的最佳时间。</div>}
                                                                style={{border:"0px"}}/>
                        </div>
                    </div>
                </li>
                {/*
                    this.state.followingEvents.map((item)=>(
                        <li key={item.userEventSubID}>
                            <FollowingEventSingle followingEvent={item}/>
                        </li>
                    ))
                */}

            </ul>
        )
    }
}

export = withRouter(HomePageActivities)