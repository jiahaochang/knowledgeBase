import * as React from 'react'
import {Button} from 'antd'
import Immutable = require('immutable')
"use strict";
import StudentSimpleInfo = Nicezy.StudentSimpleInfo;
const ButtonGroup = Button.Group;


interface StudentListSelectableProps extends React.Props<StudentListSelectable> {
    studentList: Array<StudentSimpleInfo>,
    save: Function,
    cancel: Function,
    from:string
}

interface StudentListSelectableState {
    studentList?: Array<any>
}

/**
 * 可选的学生列表，点击单个头像，切换选中状态，
 * 有保存回调 和 取消回调
 */
class StudentListSelectable extends React.Component<StudentListSelectableProps, StudentListSelectableState> {
    constructor(props) {
        super(props);

        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
    }

    componentWillMount() {
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props) {
        this.setState({
            studentList: Immutable.fromJS(props.studentList).toJS()
        })
    }

    clickedIcon(studentID){
        var studentList = this.state.studentList;
        for(var i=0; i<studentList.length; i++){
            if (studentList[i].userID === studentID){
                studentList[i].chosen = !studentList[i].chosen;
                break;
            }
        }
        this.setState({
            studentList: studentList
        });
    }

    save(){
        var chosenList = [];
        var studentList = this.state.studentList;
        for(var i=0; i<studentList.length; i++){
            if (studentList[i].chosen){
                delete studentList[i].chosen;
                chosenList.push(studentList[i])
            }
        }
        this.props.save(chosenList);
    }

    cancel(){
        this.props.cancel();
        this.setState({
            studentList: this.props.studentList
        })
    }

    render() {
        var students = this.state.studentList;
        var this_ = this;
        var text = this.props.from=="special"?"请选择要移除的同学":"请选择要添加的同学";
        return (
            <div className="am-cf am-margin-top">
                <b className="am-block">{text}</b>
                <div className="am-cf">
                    {
                        students.map(function (item, index) {
                            var className = "ClassMateEvaluateListActiveNormal";
                            if (item.chosen){
                                className = "ClassMateEvaluateListActiveSpecial"
                            }

                            return (
                                <div key={index} className={className} onClick={this_.clickedIcon.bind(this_, item.userID)}>
                                    <img src={item.headImage} width="60"/>
                                    <div className="name">{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="am-margin-top am-text-center" style={{clear:"both"}}>
                    <ButtonGroup>
                        <Button className="btn-orange" onClick={this.save} icon="plus">保存</Button>
                        <Button  onClick={this.cancel} icon="minus">取消</Button>
                    </ButtonGroup>
                </div>

            </div>
        )
    }
}

export = StudentListSelectable