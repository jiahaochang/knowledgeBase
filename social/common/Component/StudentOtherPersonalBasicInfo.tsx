import * as React from 'react'
import Immutable = require('immutable')
"use strict";
import {
    getDataByActionIDWithQueryAsync, getDataFromContextByActionID,
    getDataFromContextByActionIDAsync
} from "../ajaxUtil";
import {READ_STUDENT_USERINFO} from "../../actions/HomePage/HomePageActionTypes";
import {getResponseCache} from "../ResponseCacheContext";
import {GET_COMMON_SOCIALINFO} from "../../actions/CommonAction/CommonActionTypes";
import UserImmutableInfo = Nicezy.IUserImmutableInfo;
import SocialInfo = Nicezy.SocialInfo;
import {isEmptyObject} from "../commonFunc";
import {studentDefaultHeadPic} from "../Config/CommonConfig";
import RelationState = require("./RelationState");
import relationState = Nicezy.relationState;

interface StudentOtherPersonalBasicInfoProps extends React.Props<StudentOtherPersonalBasicInfo> {
    targetUserID?: string,
    className?: string,
}

interface StudentOtherPersonalBasicInfoState {
    userImmutableInfo?:UserImmutableInfo,
    socialInfo?: SocialInfo,
}

class StudentOtherPersonalBasicInfo extends React.Component<StudentOtherPersonalBasicInfoProps, StudentOtherPersonalBasicInfoState> {
    constructor(props) {
        super(props);
        this.state = {
            userImmutableInfo:null,
            socialInfo:null,
        };
        this.onChangeRelation = this.onChangeRelation.bind(this);
    }

    static defaultProps = {};

    componentWillMount(){
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps){
        if (Immutable.is(this.props, newProps)){
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props){
        var queryObj = {};
        if(!!props.targetUserID){
            queryObj = {
                targetUserID:props.targetUserID
            }
        }
        var this_ = this;
        getDataFromContextByActionIDAsync(getResponseCache(),READ_STUDENT_USERINFO, function (response) {
            this_.setState({
                userImmutableInfo: response.result
            })
        },queryObj);

        getDataFromContextByActionIDAsync(getResponseCache(),GET_COMMON_SOCIALINFO, function (response) {
            this_.setState({
                socialInfo: response.result
            })
        },queryObj);

    }

    onChangeRelation(nextState){
        var socialInfo = this.state.socialInfo;
        socialInfo.relationState = nextState;
        this.setState({
            socialInfo: socialInfo
        })
    }

    render() {
        var userImmutableInfo = this.state.userImmutableInfo;
        var socialInfo = this.state.socialInfo;

        if(!userImmutableInfo){
            return <div>loading</div>
        }
        return (
            <div className={this.props.className}>
                <div className="right-info">
                    <img src={isEmptyObject(userImmutableInfo.headImage)?studentDefaultHeadPic:userImmutableInfo.headImage}/>
                    <div className="name">
                        {userImmutableInfo.name}
                        <span className="right-credit">学生</span>
                    </div>

                    {
                        socialInfo&& socialInfo.relationState &&
                        <RelationState relationState={socialInfo.relationState} onChangeRelation={this.onChangeRelation}/>
                    }

                    <div className="number-sign">
                        <span className="am-block">学号：{userImmutableInfo.systemID}</span>
                        {
                            !!socialInfo &&
                            <div>
                                <a>班级：{userImmutableInfo.className}</a>
                                <span className="pull-right">
                                    他的关注&nbsp;&nbsp;
                                    <span className="good-friend-count">{socialInfo.followingUserCount}</span>
                                </span>
                            </div>
                        }

                        <span className="am-block am-margin-top-xs">个性签名：{userImmutableInfo.stateMsg}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export = StudentOtherPersonalBasicInfo