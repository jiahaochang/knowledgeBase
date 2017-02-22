import * as React from 'react'
import { withRouter } from 'react-router'
import { Row, Col } from 'antd';
import HomePageBasicInfo = require('./Component/HomePageBasicInfo')
import HomePageNavList = require('./Component/HomePageNavList')
import HomePageActivities = require('./Component/HomePageActivities')

//for test


"use strict";
interface HomePageProps extends React.Props<HomePage> {
    router: any;
}

interface HomePageState {
}
const replyText = <span>回复</span>;
const likeText = <span>点赞</span>;
class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="main-container">
                <Row>
                    <Col span={17} style={{paddingRight:"20px"}}>
                        <HomePageBasicInfo />
                        <div className="am-margin-top-lg">
                            <HomePageActivities />
                        </div>
                    </Col>
                    <Col span={7}>
                        <HomePageNavList />
                    </Col>
                </Row>
            </div>
        )
    }
}

export = withRouter(HomePage)


