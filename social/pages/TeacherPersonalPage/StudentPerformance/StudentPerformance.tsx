import * as React from 'react'

"use strict";
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import TeacherRecordStudentPerformance = require('./Component/TeacherRecordStudentPerformance')
import StudentPerformanceRecord = require('./Component/StudentPerformanceRecord')
import {Col, Row} from 'antd'
import TitleOnTextarea = require('../../../common/Component/TitleOnTextarea')
import StudentListWithClickCallback = require('../ClassNotification/Component/StudentListWithClickCallback')
import {setStudentPerformanceOptions} from '../TeacherPersnalPageContext'
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {getUserIDFromStorage} from 'common/storageUtil'
import StudentPerformanceItem = Nicezy.StudentPerformanceItem;
import {
    getTeacherUserIDAndDisableEditFlag, getTeacherBasicInfoAsync,
    getTeacherRankStateAsync
} from "../TeacherPersnalPageUtil";
import IUserImmutableInfo = Nicezy.IUserImmutableInfo;
import ITeacherRankState = Nicezy.ITeacherRankState;
import OtherTeacherBasicInfoAndRank = require("../../../common/Component/OtherTeacherBasicInfoAndRank");

interface StudentPerformanceProps extends React.Props<StudentPerformance> {
    location?: any

}

interface StudentPerformanceState {
    currentStudentID?: string,
    currentStudentName?:string,
    studentPerformances?:Array<StudentPerformanceItem>,
    students?: Array<any>,
    teacherUserID?: string,
    disableEdit?: boolean,
    teacherBasicInfo?: IUserImmutableInfo,
    teacherRankState?: ITeacherRankState
}

class StudentPerformance extends React.Component<StudentPerformanceProps, StudentPerformanceState> {
    constructor(props) {
        super(props);
        this.onStudentChange = this.onStudentChange.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            currentStudentID:"",
            studentPerformances:[],
            currentStudentName:""
        }
    }

    onStudentChange(studentID,studentName){
        this.setState({
            currentStudentID: studentID,
            currentStudentName:studentName
        })
    }

    refresh(){
        var this_ = this;

        var {teacherUserID, disableEdit} = getTeacherUserIDAndDisableEditFlag(this);

        this.setState({
            teacherUserID,
            disableEdit
        });

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


        // 类别  表现情况
        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_STUDENTPERFORMANCEOPTIONS,{teacherUserID},function (response) {
            var responseData = response.result;
            setStudentPerformanceOptions(responseData);
        });
        
        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.GET_TEACHER_CLASSMATELIST,{teacherUserID}, function (response) {
            var currentStudentID = response.result.students[0].userID;
            var currentStudentName = response.result.students[0].name;
            var students = response.result.students;
            var queryObj = {};
            queryObj["teacherUserID"] = teacherUserID;
            queryObj["studentUserID"] = currentStudentID;
            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_STUDENTPERFORMANCE_RECORD,queryObj, function (response) {
              
                this_.setState({
                    students: students,
                    currentStudentID: currentStudentID,
                    currentStudentName:currentStudentName,
                    studentPerformances: response.result.studentPerformances
                })
            });
        })
    }

    componentWillMount(){
        this.refresh();
    }

    render() {
        var this_ = this;
        return (
            <div>
                {
                    !this.state.disableEdit &&
                    <PersonInfoAndRank />
                }

                {
                    this.state.disableEdit &&
                    <OtherTeacherBasicInfoAndRank teacherBasicInfo={this.state.teacherBasicInfo} teacherRankState={this.state.teacherRankState} disableEdit={true}/>
                }

                <Row className="am-margin-top">
                    <Col span={17} className="am-padding-right-sm">
                        {
                            !this.state.disableEdit &&
                            <div className="block-box-shadows am-margin-bottom ">
                                <TitleOnTextarea title="记录学生表现"/>
                                {
                                    this.state.currentStudentID &&
                                    <TeacherRecordStudentPerformance  studentID={this.state.currentStudentID}  studentName={this_.state.currentStudentName}   refresh={this.refresh}/>
                                }
                            </div>

                        }

                        <div className="block-box-shadows am-margin-bottom ">
                            <TitleOnTextarea title="过往记录"/>
                            {
                                this.state.currentStudentID &&
                                this.state.studentPerformances.map(function (item, index) {
                                    return <StudentPerformanceRecord studentID={this_.state.currentStudentID} studentName={this_.state.currentStudentName} record={item} key={index} disableEdit={this_.state.disableEdit}/>
                                })
                            }
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className="block-box-shadows  am-cf am-margin-bottom">
                            <StudentListWithClickCallback students={this.state.students} currentStudentID={this.state.currentStudentID} clickedIcon={this.onStudentChange}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export = StudentPerformance