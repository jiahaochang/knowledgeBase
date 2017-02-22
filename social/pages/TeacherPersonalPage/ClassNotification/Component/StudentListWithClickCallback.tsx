import * as React from 'react'
import {isEmptyObject} from 'common/commonFunc'
import {studentDefaultHeadPic,studentDefaultName} from 'common/Config/CommonConfig'
"use strict";

interface StudentListWithClickCallbackProps extends React.Props<StudentListWithClickCallback> {
    clickedIcon(studentID:string,studentName?:string):void,
    currentStudentID:string,
    students:Array<any>
}

interface StudentListWithClickCallbackState {
}

/**
 * 学生列表 点击个人头像 触发回调
 * 每行3个
 */
class StudentListWithClickCallback extends React.Component<StudentListWithClickCallbackProps, StudentListWithClickCallbackState> {
    constructor(props) {
        super(props);
    }


    clickedIcon(studentID,studentName){
        this.setState({currentStudentID:studentID});
        this.props.clickedIcon(studentID,studentName)
    }

    render() {
        var this_ = this;
        return (
            <div className="am-cf">
                {
                    !!this.props.currentStudentID &&
                    this.props.students.map(function (item, index) {
                        var className = item.userID==this_.props.currentStudentID?"ClassMateEvaluateListActiveSpecial":"ClassMateEvaluateListActiveNormal";
                        var headImage = isEmptyObject(item.headImage)?studentDefaultHeadPic:item.headImage;
                        var name = isEmptyObject(item.name)?studentDefaultName:item.name;
                        return (
                            <div key={index} className={className} onClick={this_.clickedIcon.bind(this_, item.userID,item.name)}>
                                <img src={headImage} width="60"/>
                                <div className="name">{name}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export = StudentListWithClickCallback