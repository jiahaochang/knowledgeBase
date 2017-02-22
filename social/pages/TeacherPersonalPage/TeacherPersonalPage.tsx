import * as React from 'react'

"use strict";
import {withRouter, Link} from "react-router";
import * as ActionTypes from '../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as TestActionTypes from '../../actions/AdminPage/AdminPageActionTypes'
import * as ajaxUtil from '../../common/ajaxUtil'
import {moduleIDInfoMap} from '../../common/Config/TeacherPersonalPageConfig'
import {getResponseCache} from '../../common/ResponseCacheContext'
import {getMenuInfoList} from "../../common/menuUtil";
import {TeacherDefaultStruct} from "../../common/Config/MenuConfig";

interface TeacherPersonalPageProps extends React.Props<TeacherPersonalPage> {

}

interface TeacherPersonalPageState {
    links?: Array<any>
}

class TeacherPersonalPage extends React.Component<TeacherPersonalPageProps, TeacherPersonalPageState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    componentWillMount(){
        //test generate code
        var actionIDs = [];
        for(var key in TestActionTypes){
            actionIDs.push(key)
        }
        console.log(actionIDs);
        //var response = ajaxUtil.getDataFromContextByActionID(getResponseCache(), ActionTypes.GET_TEACHER_MODULECONFIG);
        var links = getMenuInfoList(TeacherDefaultStruct);
        this.setState({
            links
        })
    }
    
    render() {

        /*var links = [
            {
                url: "homePage/teacherPersonalPage/classActivity",
                displayName: "班团活动"
            },
            {
                url: "homePage/teacherPersonalPage/studentPerformance",
                displayName: "学生表现记录"
            },
            {
                url: "homePage/teacherPersonalPage/classNotification",
                displayName: "班级通知"
            },
            {
                url: "homePage/teacherPersonalPage/specialStudent",
                displayName: "特殊学生情况"
            },
            {
                url: "homePage/teacherPersonalPage/rankInClass",
                displayName: "班级积分排名"
            },
            {
                url: "homePage/teacherPersonalPage/evaluateStudent",
                displayName: "评价学生"
            },
            {
                url: "homePage/teacherPersonalPage/reviewWordsManagement",
                displayName: "评语管理"
            },

        ];*/

        return (
            <div className="main-container">
                <div className="col2-withLeftTab-leftSide">
                    <div className="fixed-nav-btnList" >
                        <ul>
                            {this.state.links.map(function(item, index){
                                return (
                                    <li key={index}><Link to={{pathname:item.url}}  activeClassName="active">{item.displayName}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="col2-withLeftTab-rightSide am-margin-top am-margin-bottom">{this.props.children}</div>
            </div>
        )
    }
}

export = withRouter(TeacherPersonalPage)