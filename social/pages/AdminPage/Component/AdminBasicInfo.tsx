import * as React from 'react'
import { Row, Col } from 'antd';
"use strict";

interface AdminBasicInfoProps extends React.Props<AdminBasicInfo> {

}

interface AdminBasicInfoState {

}
/**
 * 管理员个人信息+统计结果
 */
class AdminBasicInfo extends React.Component<AdminBasicInfoProps, AdminBasicInfoState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <Row className="display-box">
                <Col span={17} className="am-padding-right-sm">
                    <div className="right-info">
                        <img src="vendor/images/default-headpic.jpg"/>
                        <div className="name">
                            李自强
                            <span className="right-credit">管理员</span>
                        </div>
                        <div className="number-sign">
                            <span className="am-block">教工号：10203</span>
                            <span className="am-block am-margin-top-xs">个性签名：桃李不言，下自成蹊</span>
                        </div>
                    </div>
                </Col>
                <Col span={7} className="block-box-shadows ">
                    <div className="left-statistics">
                        <div className="title">学校帐户统计</div>
                        <div className="statistics-single">
                            学生帐户
                            <span className="rightCount green">230</span>
                        </div>
                        <div className="statistics-single">
                            管理员/老师帐户
                            <span className="rightCount blue">20</span>
                        </div>
                    </div>

                    
                </Col>
            </Row>
        )
    }
}

export = AdminBasicInfo