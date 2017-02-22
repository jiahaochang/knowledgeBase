import * as React from 'react'

"use strict";
import {withRouter} from "react-router";
import StudentListWithClickCallback = require('./StudentListWithClickCallback')

import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as context from '../../TeacherPersnalPageContext'

interface StudentListWithRouterProps extends React.Props<StudentListWithRouter> {
    router?: any
}

interface StudentListWithRouterState {
    students?: Array<any>,
    currentStudentID?: string
}

class StudentListWithRouter extends React.Component<StudentListWithRouterProps, StudentListWithRouterState> {
    constructor(props) {
        super(props);
        this.clickedIcon = this.clickedIcon.bind(this);
        this.state = {
            students: [],
            currentStudentID:""
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
        this.props.router.push(routeObj);
    }

    componentWillMount(){
        var this_ = this;
        ajaxUtil.getDataByActionIDAsync(ActionTypes.GET_TEACHER_CLASSMATELIST, function (response) {
            context.setClassAllMember(response.result.students);
            this_.setState({
                students: response.result.students,
                currentStudentID:response.result.students[0].userID
            });

        })
    }

    render() {
        return (
            <div className="block-box-shadows am-margin-top">
                {
                    this.state.currentStudentID &&
                    <StudentListWithClickCallback clickedIcon={this.clickedIcon} students={this.state.students} currentStudentID={this.state.currentStudentID}/>
                }

            </div>
        )
    }
}

export = withRouter(StudentListWithRouter)