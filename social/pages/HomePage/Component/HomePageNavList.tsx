import * as React from 'react'
import {withRouter} from 'react-router'
import { Row, Col } from 'antd';
"use strict";

interface HomePageNavListProps extends React.Props<HomePageNavList> {
    router: any
}

interface HomePageNavListState {

}

const navList = [
    {
        icon: "123",
        displayName: "我的个人信息",
        url: "homePage/myPersonalPage",
        query:{
            anchor: "subjectChoose"
        }
    },
    {
        icon: "123",
        displayName: "我收藏的方剂",
        url: "homePage/myPersonalPage",
        query:{
            anchor: "careerExplore"
        }
    },
    {
        icon: "123",
        displayName: "我关注的名医",
        url: "homePage/myPersonalPage",
        query:{
            anchor: "goalSetting"
        }
    },
    {
        icon: "123",
        displayName: "我收藏的医案",
        url: "homePage/myPersonalPage",
        query:{
            anchor: "subjectChoose"
        }
    }
    ,
    {
        icon: "123",
        displayName: "健康测试中心",
        url: "assessCenter/valueAssess",
        query:{
            anchor: "subjectChoose"
        }
    }
];

class HomePageNavList extends React.Component<HomePageNavListProps, HomePageNavListState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    jumpTo(url){
        this.props.router.push(url);
    }
    render() {
        var this_ = this;
        return (
            <div className="homepage-navList-menu">
                <div className="header">
                    我的健康记录
                </div>
                <div style={{padding:"0px 20px"}}>
                    {
                        navList.map(function(item, index){
                            var imgURL = "vendor/images/homePageRightMenuIcon/"+(index+1)+".png"
                            return (
                                <div className="menu am-cf" onClick={this_.jumpTo.bind(this_, item.url)} key={index}>
                                    <img src={imgURL} />
                                    <div className="pull-left">
                                        {item.displayName}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export = withRouter(HomePageNavList)