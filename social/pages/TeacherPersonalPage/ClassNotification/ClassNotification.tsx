import * as React from 'react'
import TextareaWithTitle = require('../../../common/Component/TextareaWithTitle')
import TitleOnTextarea = require('../../../common/Component/TitleOnTextarea')
import StudentListWithClickCallback = require('./Component/StudentListWithClickCallback')
import {Row, Col, Input, Modal,message} from 'antd'
"use strict";
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import {withRouter} from "react-router";
const confirm = Modal.confirm;
import NotificationRecord = require('./Component/NotificationRecord')
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from'../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {isEmptyObject} from '../../../common/commonFunc'
import ClassNotificationItem = Nicezy.ClassNotificationItem;
import {
    getTeacherUserIDAndDisableEditFlag, getTeacherBasicInfoAsync,
    getTeacherRankStateAsync
} from "../TeacherPersnalPageUtil";
import {getUserIDFromStorage} from "../../../common/storageUtil";
import OtherTeacherBasicInfoAndRank = require("../../../common/Component/OtherTeacherBasicInfoAndRank");
import IUserImmutableInfo = Nicezy.IUserImmutableInfo;
import ITeacherRankState = Nicezy.ITeacherRankState;

interface ClassNotificationProps extends React.Props<ClassNotification> {
    router?: any
}

interface ClassNotificationState {
    notifications?: Array<ClassNotificationItem>,
    students?: Array<any>,
    currentStudentID?: string,
    userID?:string,
    className?:string,
    teacherUserID?: string,
    disableEdit?: boolean,
    teacherBasicInfo?: any,
    teacherRankState?: any
}

class ClassNotification extends React.Component<ClassNotificationProps, ClassNotificationState> {
    constructor(props) {
        super(props);
        this.sendClassNotification = this.sendClassNotification.bind(this);
        this.clickedIcon = this.clickedIcon.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            notifications:[],
            students:[],
            currentStudentID:""
        }
    }

    static defaultProps = {};

    sendClassNotification(words){
        var this_ = this;
        confirm({
            title: '您是否确认要发布这项内容',
            content: '发布成功后，你的学生将看到你的发送的通知',
            onOk() {
                console.log("words");
                this_.handleSendClassNotification(words);
                this_.refresh();
            },
            onCancel() {},
        });
    }

    //发送班级通知调用ajax
    handleSendClassNotification(words){
        var userID = getUserIDFromStorage();
        if(!isEmptyObject(words)){
            var postData = {
                notificationContent: words,
                fromUserID: userID,
            };
            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SET_TEACHER_CLASSNOTIFICATION,postData,function () {
                message.success('发送成功');
            });
        }
    }

    clickedIcon(studentID){
        var url = "homePage/teacherPersonalPage/evaluateStudent";
        var routeObj = {
            pathname: url,
            query: {
                studentID: studentID
            },
        };
        this.props.router.push(routeObj)
    }

    componentWillMount(){
        this.refresh();
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

        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_CLASSNOTIFICATION,{teacherUserID}, function (response) {
            this_.setState({
                notifications: response.result.notifications
            })
        });

        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_CLASSMATELIST,{teacherUserID}, function (response) {
            this_.setState({
                students: response.result.students,
                currentStudentID: response.result.students[0].userID
            })
        })
    }

    render() {
        var this_ = this;
        return (
            <div>
                {
                    !this.state.disableEdit &&
                    <PersonInfoAndRank/>
                }

                {
                    this.state.disableEdit &&
                    <OtherTeacherBasicInfoAndRank teacherBasicInfo={this.state.teacherBasicInfo} teacherRankState={this.state.teacherRankState} disableEdit={true}/>
                }
                <Row className="am-margin-top">

                    <Col span={17} className="am-padding-right-sm">

                        {
                            !this.state.disableEdit &&
                            <div className="block-box-shadows ">
                                <TextareaWithTitle
                                    title="发送班级通知"
                                    placeholder="请老师在这里写下班级通知，点击发送后发送给班级每个同学"
                                    submit={this.sendClassNotification}
                                    saveBtnText={"发送"}
                                    resetAfterSave={true}
                                />
                            </div>
                        }
                        <div className="block-box-shadows am-margin-top am-margin-bottom am-cf">
                            <TitleOnTextarea title="过往通知"/>
                            {
                                this.state.notifications.map(function (item, index) {
                                    return <NotificationRecord record={item} key={index} refresh={this_.refresh} disableEdit={this_.state.disableEdit}/>
                                })
                            }
                        </div>
                    </Col>

                    <Col span={7}>
                        <div className="block-box-shadows">
                            <StudentListWithClickCallback
                                clickedIcon={this.clickedIcon}
                                students={this.state.students}
                                currentStudentID={this.state.currentStudentID}
                            />
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}

export = withRouter(ClassNotification)