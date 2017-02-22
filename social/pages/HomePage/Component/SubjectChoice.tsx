import * as React from 'react'
import { Row, Col,Icon } from 'antd';
import {subjectDisplayMap}  from '../../../common/Config/HomePageConfig'
import {isEmptyObject} from '../../../common/commonFunc'
"use strict";

interface SubjectChoiceProps extends React.Props<SubjectChoice> {
    subjects:any
}

class SubjectChoice extends React.Component<SubjectChoiceProps, {}> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };
    render() {
        var chooses = null;
        var subjects = this.props.subjects;
        //判断是否已完成选科
        if(!isEmptyObject(subjects) && subjects.length>0){
           subjects = (
               <Row type="flex" justify="center" className="am-margin-top">
                   {this.props.subjects.map(function(subject, index){
                           return <Col span={8} key={index}><img src={subjectDisplayMap[subject.subjectName]["imgUrl"]} width="60" className="am-center"/><div className="am-padding-top-xs am-text-center">{subject.subjectName}</div></Col>
                       }
                   )}
               </Row>
           )
        }else{
            subjects = (
                <div className="non-choose-subject">
                    <img src="vendor/images/QRCode.png"></img>
                    <div className="text">你还未完成7选3，请扫描二维码在手机上完成，才能看到结果并获得积分哦！</div>
                </div>
            )

        }
        return (
            <div>
                {subjects}
                <div className="eye"><Icon type="eye-o" />仅自己可见</div>
            </div>
        )
    }
}

export = SubjectChoice