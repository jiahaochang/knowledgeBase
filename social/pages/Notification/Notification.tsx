import * as React from 'react'
import { Row, Col } from 'antd';
import NotificationNameList = require('./Component/NotificationNameList');
import NotificationContent = require('./Component/NotificationContent');

"use strict";

interface NotificationProps extends React.Props<Notification> {

}

interface NotificationState {
    currentNotificationName?:string
}

class Notification extends React.Component<NotificationProps,NotificationState> {
    constructor(props) {
        super(props);
        this.state = {
            currentNotificationName: "通知"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {};

    componentWillMount(){

    }

    handleClick(NotificationName){
        this.setState({
            currentNotificationName: NotificationName
        })
    }

    render(){
        var currentNotificationName = this.state.currentNotificationName;
        return(
            <div className="main-container">
                <Row>
                    <Col span={6}>
                        <NotificationNameList currentNotificationName={currentNotificationName} handleClick={this.handleClick}/>
                    </Col>
                    <Col span={18}>
                        <NotificationContent currentNotificationName={currentNotificationName}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export = Notification