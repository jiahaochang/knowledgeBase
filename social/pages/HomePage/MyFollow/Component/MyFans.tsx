import * as React from 'react'
import {Row,Col,Popover} from 'antd'

"use strict";

interface MyFansProps extends React.Props<MyFans> {

}

interface MyFansState {
    fansList?:Array<any>
}
/**
 * 我的粉丝
 */

class MyFans extends React.Component<MyFansProps, MyFansState> {
    constructor(props) {
        super(props);
        this.cancelConcern = this.cancelConcern.bind(this)
        this.addConcern = this.addConcern.bind(this)
    }

    static defaultProps = {

    };

    componentWillMount(){
        var fansList = [
            {
                studentID:"01",
                nickName:"张三",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg",
                status:2,
            },
            {
                studentID:"02",
                nickName:"李四",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg",
                status:1,
            },
            {
                studentID:"03",
                nickName:"王二麻子",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg",
                status:2,
            },
            {
                studentID:"04",
                nickName:"判官",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg",
                status:1,
            },
        ]
        this.setState({fansList:fansList})
    }

    //取消关注
    cancelConcern(studentID){
        console.log(studentID)
        //state再赋值刷新页面
    }
    //关注
    addConcern(studnetID){
        console.log(studnetID);
    }

    render() {
        var this_ = this;
        return (
            <Row className="am-margin-top">
                {this.state.fansList.map(function(info, index){
                    var content = null,title="";
                    if(info.status == 1){
                        title="互相关注";
                        content = (
                            <div style={{cursor:"pointer"}} onClick={this_.cancelConcern.bind(this_,info.studentID)}>
                                取消关注
                            </div>
                        );

                    }else if(info.status ==2){
                        title="未关注";
                        content = (
                            <div style={{cursor:"pointer"}} onClick={this_.addConcern.bind(this_,info.studentID)}>
                                关注
                            </div>
                        );
                    }
                        return (
                            <Col span={8} key={index}>
                                <div className="myFollow-box">
                                    <img src={info.imgURL}/>
                                    <div className="name-div">
                                        <b>{info.nickName}</b>
                                        <Popover content={content} overlayClassName="popver-width"  placement="bottom">
                                            <span className="rightinfo">
                                                {title}<i className="fa fa-angle-down"></i>
                                            </span>
                                        </Popover>
                                    </div>
                                    <div className="am-margin-top">{info.className}</div>
                                </div>
                            </Col>
                        )
                    }
                )}
            </Row>
        )
    }
}

export = MyFans