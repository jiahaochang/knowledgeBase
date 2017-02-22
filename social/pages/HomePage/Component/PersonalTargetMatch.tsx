import * as React from 'react'
import { Row,Col,Input,Button } from 'antd';

"use strict";

interface PersonalTargetMatchProps extends React.Props<PersonalTargetMatch> {
    style?:any,
    className?:string,

}
interface PersonalTargetMatchState {
    inputValue?: any,
}

class PersonalTargetMatch extends React.Component<PersonalTargetMatchProps, PersonalTargetMatchState> {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
        className:""
    };

    render() {
        return (
            <div className={" "+ this.props.className} style={this.props.style}>

               <div className="target-match-single am-cf">
                   <span className="header-left">
                       <i className="fa fa-anchor"></i>请输入你的总分年级排名：
                   </span>
                   <span className="header-right">
                       <Input style={{}} />
                   <Button type="primary" >确定</Button>
                   </span>
               </div>

                <div className="target-match-single am-cf">
                   <span className="header-left">
                       <i className="fa fa-university"></i>与我成绩匹配的大学有：
                   </span>
                </div>
                <Row className="am-margin-bottom" style={{padding:"0px 20px"}}>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>清华大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>清华大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>复旦大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>南京大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>哈尔滨工业大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>清华大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>复旦大学</Col>
                    <Col span={8}><div className="orange-small-block am-margin-right-xs"></div>南京大学</Col>
                </Row>

            </div>
        )
    }
}

export = PersonalTargetMatch