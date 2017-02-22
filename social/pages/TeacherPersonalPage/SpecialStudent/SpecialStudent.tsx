import * as React from 'react'

"use strict";
import {Row, Col, Button} from 'antd'
import StudentListWithClickCallback = require('../ClassNotification/Component/StudentListWithClickCallback')
import StudentListSelectable = require('./Component/StudentListSelectable')
import PersonalBasicInfo = require('common/Component/PersonalBasicInfo')
import CurrentSpecialStudentRecord = require('./Component/CurrentSpecialStudentRecord')
import context = require('../TeacherPersnalPageContext')
import {getUserIDFromStorage} from 'common/storageUtil'
import Immutable = require('immutable')
const ButtonGroup = Button.Group;
import * as util from '../TeacherPersnalPageUtil'
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import StudentSimpleInfo = Nicezy.StudentSimpleInfo;
import * as commonFunc from 'common/commonFunc'
import {getTeacherUserIDAndDisableEditFlag} from "../TeacherPersnalPageUtil";
import IUserImmutableInfo = Nicezy.IUserImmutableInfo;
import ITeacherRankState = Nicezy.ITeacherRankState;
import {getTeacherBasicInfoAsync} from "../TeacherPersnalPageUtil";
import {getTeacherRankStateAsync} from "../TeacherPersnalPageUtil";
import TeacherBasicInfo = require("../../../common/Component/TeacherBasicInfo");

interface SpecialStudentProps extends React.Props<SpecialStudent> {

}

interface SpecialStudentState {
    currentStudentID?: string,
    currentStudentListState?: "read" | "delete" |"add",
    showEdit?: boolean,
    specialStudents?:Array<StudentSimpleInfo>,
    normalStudents?:Array<StudentSimpleInfo>,
    teacherUserID?: string
    disableEdit?: boolean,
    teacherBasicInfo?: IUserImmutableInfo,
    teacherRankState?: ITeacherRankState
}

/**
 * 特殊学生情况记录
 * 
 * 右侧栏有添加和删除状态
 */
class SpecialStudent extends React.Component<SpecialStudentProps, SpecialStudentState> {
    constructor(props) {
        super(props);
        this.state = {
            currentStudentID:"",
            currentStudentListState: "read",
            showEdit: false,
            specialStudents:[],
            normalStudents:[]
        };
        this.showDeleteSpecialStudent = this.showDeleteSpecialStudent.bind(this);
        this.showAddSpecialStudent = this.showAddSpecialStudent.bind(this);
        this.deleteSpecialStudent = this.deleteSpecialStudent.bind(this);
        this.addSpecialStudent = this.addSpecialStudent.bind(this);
        this.cancelStudentList = this.cancelStudentList.bind(this);
        this.clickedIcon = this.clickedIcon.bind(this);
        this.addSpecialStudentRecord = this.addSpecialStudentRecord.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    static defaultProps = {};

    showDeleteSpecialStudent(){
        this.setState({
            currentStudentListState:"delete"
        })
    }

    showAddSpecialStudent(){
        this.setState({
            currentStudentListState:"add"
        })
    }

    //移除特殊学生
    deleteSpecialStudent(studentList: Array<StudentSimpleInfo>){
        var this_ = this;
        //调用api 将特殊学生移出特殊组
        var postData = {
            specialStudents:studentList
        };
        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.DELETE_TEACHER_SPECIALSTUDENT,postData, function (response) {
            commonFunc.reallocArray( this_.state.normalStudents, this_.state.specialStudents,studentList);
            var currentStudentID = "";
            if (this_.state.specialStudents.length !== 0){
                currentStudentID = this_.state.specialStudents[0].userID
            }
            this_.setState({
                specialStudents: this_.state.specialStudents,
                normalStudents: this_.state.normalStudents,
                currentStudentListState: "read",
                currentStudentID
            })
        });
    }

    //添加特殊学生
    addSpecialStudent(studentList:Array<StudentSimpleInfo>){
        var this_ = this;
        //调用api
        var postData = {
            specialStudents:studentList
        };
        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.CREATE_TEACHER_SPECIALSTUDENT,postData, function (response) {
            commonFunc.reallocArray( this_.state.specialStudents,this_.state.normalStudents, studentList);
            this_.setState({
                specialStudents: this_.state.specialStudents,
                normalStudents: this_.state.normalStudents,
                currentStudentListState: "read",
                currentStudentID:this_.state.specialStudents[0].userID
            })
        });

    }

    cancelStudentList(){
        this.setState({
            currentStudentListState: "read"
        })
    }

    clickedIcon(studentID){
        this.setState({
            currentStudentID: studentID
        })
    }

    addSpecialStudentRecord(){
        this.setState({
            showEdit: true
        })
    }

    save(record){
        console.log(record);
        this.setState({
            showEdit: false
        })
    }

    cancel(){
        this.setState({
            showEdit: false
        })
    }

    edit(){
        this.setState({
            showEdit: false
        })
    }

    componentWillMount(){
        var {teacherUserID, disableEdit} = getTeacherUserIDAndDisableEditFlag(this);

        var allStudents = util.getAllStudentsFromCacheContext(teacherUserID);
        var this_ = this;

        this.setState({
            teacherUserID,
            disableEdit
        });

        var queryObj = {};
        queryObj["teacherUserID"] = teacherUserID;

        getTeacherBasicInfoAsync(teacherUserID, this, function (teacherUserInfo:IUserImmutableInfo) {
            this_.setState({
                teacherBasicInfo:teacherUserInfo
            })
        });

        getTeacherRankStateAsync(teacherUserID, this, function (teacherRankState:ITeacherRankState) {
            this_.setState({
                teacherRankState: teacherRankState
            })
        });

        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.READ_TEACHER_SPECIALSTUDENT,queryObj,function (response) {
            var specialStudents = response.result.specialStudents;
            var normalStudents = this_.getNormalStudents(allStudents, specialStudents);
            var currentStudentID = specialStudents[0]?specialStudents[0].userID:"";
            this_.setState({
                specialStudents,
                normalStudents,
                currentStudentID
            })
        });

    }

    getNormalStudents(allStudents: Array<StudentSimpleInfo>, specialStudents:Array<StudentSimpleInfo>):Array<StudentSimpleInfo>{
        var normalStudents = [];
        var copyList = allStudents;
        for(var i=0;i<copyList.length;i++){
            var item = copyList[i];
            var indexInArray = commonFunc.getIndexInArray(item, specialStudents, ["userID"]);
            if (indexInArray === -1){
                normalStudents.push(item);
            }
        }
        return normalStudents;
    }

    render() {
        return (
            <Row>
                <Col span={17} className="am-padding-right-sm">
                    <div className="block-box-shadows">
                        {
                            !this.state.disableEdit &&
                            <PersonalBasicInfo/>
                        }

                        {
                            this.state.disableEdit &&
                            <TeacherBasicInfo teacherBasicInfo={this.state.teacherBasicInfo} disableEdit={true}/>
                        }
                    </div>

                    {
                        this.state.currentStudentID && <CurrentSpecialStudentRecord  studentID={this.state.currentStudentID} teacherUserID={this.state.teacherUserID} disableEdit={this.state.disableEdit}/>
                    }
                    {
                        !this.state.currentStudentID &&
                        <div>暂无特殊学生</div>
                    }

                </Col>
                <Col span={7}>
                    <div className="block-box-shadows am-cf">
                        <StudentListWithClickCallback   students={this.state.specialStudents} clickedIcon={this.clickedIcon} currentStudentID={this.state.currentStudentID} />
                        {
                            !this.state.currentStudentID &&
                            <div>暂无特殊学生</div>
                        }

                        {
                            !this.state.disableEdit &&
                            <div className="am-margin-top am-text-center">
                                <ButtonGroup>
                                    <Button className="btn-red" onClick={this.showDeleteSpecialStudent} icon="minus">移除</Button>
                                    <Button className="btn-green" onClick={this.showAddSpecialStudent} icon="plus">添加</Button>
                                </ButtonGroup>
                            </div>
                        }

                        {
                            this.state.currentStudentListState === "delete" &&
                            <StudentListSelectable studentList={this.state.specialStudents} from="special" save={this.deleteSpecialStudent} cancel={this.cancelStudentList}/>
                        }

                        {
                            this.state.currentStudentListState === "add" &&
                            <StudentListSelectable studentList={this.state.normalStudents}  from="normal" save={this.addSpecialStudent} cancel={this.cancelStudentList}/>
                        }

                    </div>

                </Col>
            </Row>
        )
    }
}

export = SpecialStudent