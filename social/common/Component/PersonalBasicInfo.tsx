import * as React from 'react'
import { Row, Col } from 'antd';
import {withRouter} from 'react-router'

"use strict";
import {RoleEnum, Role} from "../Module/Role";
import Immutable = require('immutable')
import * as ajaxUtil from '../../common/ajaxUtil'
import * as responseCacheContext from '../../common/ResponseCacheContext'

import * as CommonActionTypes from '../../actions/CommonAction/CommonActionTypes'
import UserImmutableInfo = Nicezy.IUserImmutableInfo;
import SocialInfo = Nicezy.SocialInfo;
import {studentDefaultHeadPic} from 'common/Config/CommonConfig'
import {isEmptyObject} from 'common/commonFunc'
import {getUserIDFromStorage,getRoleEnumFromStorage} from 'common/storageUtil'
interface PersonalBasicInfoProps extends React.Props<PersonalBasicInfo> {
    name?:string,
    router: any,
    className?: string,
    roleEnum?:RoleEnum,
    userID?:string
}

interface PersonalBasicInfoState {
    role?: Role,
    userImmutableInfo?: UserImmutableInfo,
    socialInfo?: SocialInfo,
}

/**
 * 个人基本信息 学生、老师、管理员各不相同
 */
class PersonalBasicInfo extends React.Component<PersonalBasicInfoProps, PersonalBasicInfoState> {
    constructor(props) {
        super(props);
        this.state = {
            role: new Role(RoleEnum.student),
            userImmutableInfo:null
        };
        this.goToPersonalPage = this.goToPersonalPage.bind(this);
        this.goToMyFollow = this.goToMyFollow.bind(this);
    }

    static defaultProps = {
        className:""
    };

    goToPersonalPage(){
        var url = this.state.role.getRoleRelateInfo().personalPageUrl;
        this.props.router.push(url);
    }

    //跳转到我的关注页面
    goToMyFollow(){
        var url = "/myFollow";
        this.props.router.push(url);
    }

    componentWillMount(){
        this.getBasicInfoData(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)){
            this.getBasicInfoData(nextProps)
        }
    }

    getBasicInfoData(props){
        var this_ = this;
        //role 是在登陆之后就确定了的 存储在sessionStorage中
        //todo 需要再传一个 userID  roleEnum
        var roleEnum = !!props.roleEnum?getRoleEnumFromStorage():props.roleEnum;
        var role = new Role(Role.transToRoleEnum(roleEnum));
        var actionID = role.getRoleRelateInfo().getUserInfoActionID;
        var userID = isEmptyObject(props.userID)?getUserIDFromStorage():props.userID;
        var queryObj = {userID:userID};
        ajaxUtil.getDataFromContextByActionIDAsync(responseCacheContext.getResponseCache(), actionID, function (response) {
            var responseData = response.result;
            //根据role 发起不同请求获取用户的基本信息
            this_.setState({
                role: role,
                userImmutableInfo: responseData
            });
        },queryObj);

        if (roleEnum !== RoleEnum.admin){
            ajaxUtil.getDataByActionIDWithQueryAsync(CommonActionTypes.GET_COMMON_SOCIALINFO,{targetUserID:userID}, function (response) {
                this_.setState({
                    socialInfo:response.result
                })
            });
        }

    }

    render() {

        var roleName = this.state.role.getRoleRelateInfo().displayChinese;
        var isStudent = this.state.role.getRoleEnum() === RoleEnum.student;
        var isAdmin = this.state.role.getRoleEnum() === RoleEnum.admin;
        var systemIDName = isStudent?"学号":"教工号";

        var userImmutableInfo = this.state.userImmutableInfo;
        var socialInfo = this.state.socialInfo;

        var dataReady = !!userImmutableInfo && !!socialInfo;
        return (
                <div className={this.props.className}>
                    {
                        dataReady &&
                        <div className="right-info">
                            <img src={isEmptyObject(userImmutableInfo.headImage)?studentDefaultHeadPic:userImmutableInfo.headImage}/>
                            <div className="name">
                                {userImmutableInfo.name}
                                <span className="right-credit">{roleName}</span>
                            </div>
                            <div className="number-sign">
                                <span className="am-block">{systemIDName}：{userImmutableInfo.systemID}</span>
                                {
                                    !isAdmin &&
                                    <div>
                                        <a>班级：{userImmutableInfo.className}</a>
                                        <span className="pull-right">
                                            我的关注&nbsp;&nbsp;
                                            <span className="good-friend-count">{socialInfo.followingUserCount}</span>
                                        </span>
                                    </div>
                                }
                                <span className="am-block am-margin-top-xs">个性签名：{userImmutableInfo.stateMsg}</span>
                            </div>
                        </div>
                    }
                </div>

        )
    }
}

export = withRouter(PersonalBasicInfo)