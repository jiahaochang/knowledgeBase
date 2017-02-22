import * as React from 'react'
import {Row,Col} from 'antd'

"use strict";

interface BasicInfoAndChooseSubjectProps extends React.Props<BasicInfoAndChooseSubject> {

}

interface BasicInfoAndChooseSubjectState {

}
/**
 * 1.基本信息
 * 个人信息+选科结果
 */
class BasicInfoAndChooseSubject extends React.Component<BasicInfoAndChooseSubjectProps, BasicInfoAndChooseSubjectState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        //1.7选3结果
        var subjects = [{
            "subjName": "物理",
            "picUrl": "vendor/images/subjects/physics.png"
        },{
            "subjName": "化学",
            "picUrl": "vendor/images/subjects/chemistry.png"
        },{
            "subjName": "生物",
            "picUrl": "vendor/images/subjects/biology.png"
        }];
        return (
            <Row className="basicInfo">
                <Col span={12} className="personInfo">
                    <img src="vendor/images/default-headpic.jpg"/>
                    <div className="nameSex">
                        <b>李逍遥</b>
                        <span className="am-padding-left">男</span>
                    </div>
                    <div className="class-number-learn">班级：高一一班</div>
                    <div className="class-number-learn">学号：500123</div>
                    <div className="class-number-learn">学籍号：18866134399</div>
                </Col>
                <Col span={12} className="chooseSubject-result">
                    <div className="choose-title">7选3结果</div>
                    <Row type="flex" justify="center" className="am-margin-top">
                        {subjects.map(function(subject, index){
                                return <Col span={8} key={index}><img src={subject.picUrl} width="60" className="am-center"/><div className="am-padding-top-xs am-text-center">{subject.subjName}</div></Col>
                            }
                        )}
                    </Row>

                </Col>
            </Row>
        )
    }
}

export = BasicInfoAndChooseSubject