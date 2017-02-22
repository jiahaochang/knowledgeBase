import * as React from 'react'
import {Row,Col,Popover} from 'antd'

"use strict";

interface MyConcernProps extends React.Props<MyConcern> {

}

interface MyConcernState {
    concernList?:Array<any>
}
/**
 * 我的关注
 */

class MyConcern extends React.Component<MyConcernProps, MyConcernState> {
    constructor(props) {
        super(props);
        this.cancelConcern = this.cancelConcern.bind(this)
    }

    static defaultProps = {

    };

    componentWillMount(){
        var concernList = [
            {
                studentID:"01",
                nickName:"张三",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg"
            },
            {
                studentID:"02",
                nickName:"李四",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg"
            },
            {
                studentID:"03",
                nickName:"王二麻子",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg"
            },
            {
                studentID:"04",
                nickName:"判官",
                className:"高一一班",
                imgURL:"vendor/images/default-headpic.jpg"
            },
        ]
        this.setState({concernList:concernList})
    }

    //取消关注
    cancelConcern(studentID){
        console.log(studentID)
        //state再赋值刷新页面
    }

    render() {
        var this_ = this;
        return (
            <Row className="am-margin-top">
                {this.state.concernList.map(function(info, index){
                    const content = (
                        <div style={{cursor:"pointer"}} onClick={this_.cancelConcern.bind(this_,info.studentID)}>
                            取消关注
                        </div>
                    );
                        return (
                            <Col span={8} key={index}>
                                <div className="myFollow-box">
                                    <img src={info.imgURL}/>
                                    <div className="name-div">
                                        <b>{info.nickName}</b>
                                        <Popover content={content} overlayClassName="popver-width"  placement="bottom">
                                            <span className="rightinfo">
                                                已关注<i className="fa fa-angle-down"></i>
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

export = MyConcern