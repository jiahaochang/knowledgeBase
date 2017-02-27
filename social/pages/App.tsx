import * as React from 'react'
import {Link,withRouter} from 'react-router'
import { Badge, Icon,Popover,Affix,Button,message  } from 'antd'
import HeadSearchBox = require('../common/Component/HeadSearchBox');
import {getDataByActionIDWithQueryAsync} from "../common/ajaxUtil"
import * as ActionTypes from '../actions/Search/SearchActionTypes'
import {getMenuInfoList} from "../common/menuUtil";
import {HomePageNavDefaultStruct} from "../common/Config/MenuConfig";
import {jumpToRoute} from "../common/routeUtil";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ItemsActions from '../actions/Search/SearchAction'
"use strict";

interface AppProps extends React.Props<App> {
    router: any,
    actions: any,
    searchState?:any,
}

interface AppState {
    SearchInput?: string,
    links?: Array<any>,
    notificationCount?: number,
    alertCount?: number,
    alertContent?: any
}

class App extends React.Component<AppProps,AppState>{
    constructor(props) {
        super(props);
        this.state = {
            links:[]
        };
        this.jumpToPersonPage = this.jumpToPersonPage.bind(this);
        this.searchWithInput = this.searchWithInput.bind(this);
        this.clickedNotification = this.clickedNotification.bind(this);
        this.clickedAlert = this.clickedAlert.bind(this);
        this.onAlertVisibleChange = this.onAlertVisibleChange.bind(this);
    }

    jumpToPersonPage(){
        var url = "/homePage/myPersonalPage";
        this.props.router.push(url);
    }

    componentDidMount(){
        //history.replaceState(null, null, '/');
    }

    componentWillMount(){
        var links = getMenuInfoList(HomePageNavDefaultStruct);
        this.setState({
            links: links
        });

        this.setState({
            notificationCount:2,
            alertCount:3,

        })
    }

    searchWithInput(val){
        var postData = {
            keyword: val,
        };

        var this_=this;
        getDataByActionIDWithQueryAsync(ActionTypes.GET_SEARCH_PERSONALINFOLIST,postData,function (response) {
            var records = response;
            this_.props.actions.mergeSearchResult(records);
            console.log(records);
            var url = "/Search";
            this_.props.router.push(url);
        });
    }

    clickedNotification(){
        var this_ = this;
        this.setState({
            notificationCount: 0
        }, function () {
            jumpToRoute( this_, "/notification");
        });

    }

    clickedAlert(){
        const content = (
            <ul className="header-hover-message">
                <li>习大大关注了你</li>
                <li>个人信息</li>
            </ul>
        );
        this.setState({
            alertCount: 0,
            alertContent:content
        });
    }

    onAlertVisibleChange(value){
        if (!value){
            const alertContent = (
                <ul className="header-hover-message">
                    <li>暂无信息</li>
                </ul>
            );

            this.setState({
                alertContent
            })
        }
    }

    render() {
        const content = (
            <ul className="header-hover-message">
                <li>帐号设置</li>
                <li>个人信息</li>
                <li>帮助中心</li>
                <li>退出登录</li>
            </ul>
        );

        var defaultHomePageUrl = "/homePage";//首页特殊，不同角色不同首页
        var assessCenterUrl = "/assessCenter/HollandAssess";
        var links = this.state.links;
        return (
            <div className="header-affix">
                <Affix>
                    <div className="main-header">
                        <div className="title">
                            <span className="pull-left">中医知识库系统</span>
                            {/*
                            <HeadSearchBox  title="输入专业关键词" searchCallBack={this.searchWithInput} />
                            <div className="pull-right">
                                <Badge count={this.state.alertCount}>
                                    <Popover content={this.state.alertContent} trigger={"click"} overlayClassName="popver-width" onVisibleChange={this.onAlertVisibleChange}>
                                        <i className="fa fa-bell-o" onClick={this.clickedAlert} ></i>
                                    </Popover>
                                </Badge>
                                <Badge  count={this.state.notificationCount}>
                                    <i className="fa fa-commenting-o" onClick={this.clickedNotification}></i>
                                </Badge>
                                <Badge count={0}>
                                    <Popover content={content}   overlayClassName="popver-width">
                                        <img src="vendor/images/default-headpic.jpg"  width="28" onClick={this.jumpToPersonPage}/>
                                    </Popover>
                                </Badge>
                            </div>
                             */}
                        </div>
                    </div>

                    <div className="header-gray">
                        <ul className="nav-bar am-cf am-avg-sm-6">
                            <li>
                                <Link to={defaultHomePageUrl} activeClassName="navBarActive"><i className=" fa fa-user"></i>首页</Link>
                            </li>
                            {
                                links.map(function (item, index) {
                                    return (
                                        <li key={index}>
                                            <Link to={item.url} activeClassName="navBarActive"><i className=" fa fa-archive"></i>{item.displayName}</Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <Link to={assessCenterUrl} activeClassName="navBarActive"><i className=" fa fa-archive"></i>测试</Link>
                            </li>
                        </ul>
                    </div>
                </Affix>

                <div className="main-wrapper">
                    {this.props.children}
                </div>

            </div>

        )
    }
}

export =  connect(state => ({
    searchState: state.searchState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(withRouter(App))