import * as React from 'react'
import { withRouter } from 'react-router'
import { Row, Col } from 'antd';
import HomePageBasicInfo = require('./Component/HomePageBasicInfo')
import HomePageNavList = require('./Component/HomePageNavList')
import HomePageActivities = require('./Component/HomePageActivities')
import HeadSearchBox = require('../../common/Component/HeadSearchBox');
//for test


"use strict";
interface HomePageProps extends React.Props<HomePage> {
    router: any;
}

interface HomePageState {
    SearchInput?: string,
}
const replyText = <span>回复</span>;
const likeText = <span>点赞</span>;
class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props) {
        super(props);
        this.searchWithInput = this.searchWithInput.bind(this);
    }

    searchWithInput(val) {
        var postData = {
            keyword: val,
        };
    }

    render() {
        return (
            <div className="main-container">
                <Row>
                    <Col span={20} offset={'3'}>
                        <div align="center"><img src="../../vendor/images/logo.png" height="370" width="370"/></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} >
                        <HeadSearchBox  title="输入搜索关键词" searchCallBack={this.searchWithInput} />
                    </Col>
                    {/*
                    <Col span={20} style={{paddingRight:"20px"}}>
                        <HomePageBasicInfo />
                        <div className="am-margin-top-lg">
                            <HomePageActivities />
                        </div>
                    </Col>
                    <Col span={7}>
                        <HomePageNavList />
                    </Col>
                     */}
                </Row>
            </div>
        )
    }
}

export = withRouter(HomePage)


