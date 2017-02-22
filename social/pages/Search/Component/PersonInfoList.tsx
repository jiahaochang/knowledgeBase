import * as React from 'react'
import { Row,Col,Icon, Popover,Menu, Dropdown,Button,message } from 'antd';
import {withRouter} from 'react-router'
import CardContentWithClickLikeAndComment = require('../../../common/Component/CardContentWithClickLikeAndComment')
import {getDataByActionIDWithQuery} from "../../../common/ajaxUtil"
import * as ActionTypes from'../../../actions/CommonAction/CommonActionTypes'

"use strict";

const DropdownButton = Dropdown.Button;

interface PersonInfoListProps extends React.Props<PersonInfoList> {
    searchResult?:any
}

class PersonInfoList extends React.Component<PersonInfoListProps, {}> {
    constructor(props) {
        super(props);
    }

    handleButtonClick(userID,e) {
        console.log('click left button', e);
        console.log('userID=', userID);
        var postData = {followingUserID: userID,};
        getDataByActionIDWithQuery(ActionTypes.SET_COMMON_BECOMEFOLLOWER,postData,function () {
            message.success('加关注成功');
        });
    }


    handleMenuClick(userID,e) {
        console.log('click', e);
        console.log('userID=', userID);
        var postData = {cancelFollowingUserID: userID,};
        getDataByActionIDWithQuery(ActionTypes.SET_COMMON_CANCELFOLLOWED,postData,function () {
            message.success('取消关注成功');
        });
    }

    render() {
        var searchResult = this.props.searchResult;

        //已经互相关注
        const cancelFollowed = (
                <Menu onClick={this.handleMenuClick.bind(this,searchResult.userID)}>
                    <Menu.Item key="1">
                        取消关注
                    </Menu.Item>
                </Menu>
            );

        if(searchResult.relationState == "1"){
            var buttonContent = "已关注";
        }else if(searchResult.relationState == "0"){
            var buttonContent = "加关注+";
        }else if(searchResult.relationState == "2"){
            var buttonContent = "互相关注";
        }

        return (
            <ul className="homepage-activitiesUL">
                <li>
                    <div className="content">
                        <a className="headPic">
                            <img src={searchResult.headImage}/>
                        </a>
                        <div className="header">
                            <Row>
                                <span className="am-padding-right-sm">{searchResult.name}</span>
                            </Row>
                            <Row>
                                <Col span={2}>
                                    <span className="am-padding-right-lg">{searchResult.gender}</span>
                                </Col>
                                <Col offset="18">
                                    {
                                        searchResult.relationState !== "0"&&
                                        <DropdownButton type="ghost" overlay={cancelFollowed}>
                                            {buttonContent}
                                        </DropdownButton>
                                    }
                                    {
                                        searchResult.relationState == "0"&&
                                        <Button type="ghost" onClick={this.handleButtonClick.bind(this,searchResult.userID)}>{buttonContent}</Button>
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <span >{searchResult.gradeName}</span>
                                <span >{searchResult.className}</span>
                            </Row>
                        </div>
                        <div className="content-desc">
                            {searchResult.stateMsg}
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}

export = withRouter(PersonInfoList)