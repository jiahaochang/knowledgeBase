import * as React from 'react'
import { Row, Col } from 'antd';
import {withRouter} from 'react-router'

"use strict";

interface HomePageBasicInfoProps extends React.Props<HomePageBasicInfo> {
    name?:string,
    router: any
}

class HomePageBasicInfo extends React.Component<HomePageBasicInfoProps, {}> {
    constructor(props) {
        super(props);
        this.goToPersonalPage = this.goToPersonalPage.bind(this);
    }

    goToPersonalPage(){
        var url = "/homePage/myPersonalPage";
        this.props.router.push(url);
    }

    render() {
        return (
            <div className="homepage-userinfo">
                <div className="left-info" onClick={this.goToPersonalPage}>
                    <a className="photo">
                        <img src="vendor/images/default-headpic.jpg" width="140"/>
                    </a>
                    <div className="info">
                        <div className="name">刘德华</div>
                        <div className="class-num">年龄：23</div>
                        <div className="class-num">性别：男</div>
                    </div>
                </div>
                <div className="right-rank">
                    <div className="rank">
                        <span className="am-padding-right">成长积分<b className="am-padding-left-xs">532</b></span>
                        <span>健康指数<b className="am-padding-left-xs green">15</b></span>
                    </div>
                    <div className="rank">
                        <span className="am-padding-right">我的关注<b className="am-padding-left-xs blue">102</b></span>
                        <span>我的收藏<b className="am-padding-left-xs blueDuck">51</b></span>
                    </div>
                </div>
            </div>
        )
    }
}

export = withRouter(HomePageBasicInfo)