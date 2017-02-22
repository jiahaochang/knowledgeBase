import * as React from 'react'
import { Row, Col } from 'antd';
import StudentRankState = require('./StudentRankState')
import AdminRankState = require('./AdminRankState')
import TeacherRankState = require('./TeacherRankState')
import PersonalBasicInfo= require('./PersonalBasicInfo')
"use strict";
import * as ajaxUtil from 'common/ajaxUtil'
import * as teacherActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as studentActionTypes from 'actions/HomePage/HomePageActionTypes'
import * as adminActionTypes from 'actions/AdminPage/AdminPageActionTypes'
import {RoleEnum, Role} from "common/Module/Role";
import {getRoleEnumFromStorage} from 'common/storageUtil'

interface PersonInfoAndRankProps extends React.Props<PersonInfoAndRank> {
    roleEnum?:RoleEnum, //角色  默认当前登录用户
    userID?:string,  //用户ID
    currentTerm?: string,
    onTermChange?(termAfterChange):void, //select回调
    showClickIcon?:boolean,  //是否显示 成长积分、班级排名 的按钮  默认显示
    selectShow?:boolean//是否显示select  默认显示
}

interface PersonInfoAndRankState {
    rankResult?:any
}
/**
 *学期整体评价系列----右边的个人信息和排名的row
 */
class PersonInfoAndRank extends React.Component<PersonInfoAndRankProps, PersonInfoAndRankState> {
    constructor(props) {
        super(props);
        this.state = {
            rankResult:{}
        }
        this.onTermChange = this.onTermChange.bind(this)
    }

    static defaultProps = {
        roleEnum:Role.transToRoleEnum(getRoleEnumFromStorage())
    };

    componentWillMount(){
        var this_ = this;
        var roleEnum =this.props.roleEnum;
        var actionTypes = "";
        if(roleEnum == RoleEnum.student){
            actionTypes = studentActionTypes.GET_STUDENT_RANKSTATE;
        }else if(roleEnum == RoleEnum.teacher){
            actionTypes = teacherActionTypes.GET_TEACHER_RANKSTATE;
        }else if(roleEnum == RoleEnum.admin){
            actionTypes = adminActionTypes.GET_ADMIN_SCHOOLACCOUNTSTATISTIC;
        }
        ajaxUtil.getDataByActionIDAsync(actionTypes,function (response) {
            this_.setState({
                rankResult: response.result
            })
        });

    }

    onTermChange(termAfterChange){
        this.props.onTermChange(termAfterChange);
    }

    render() {

        var roleRankResult = null;
        var roleEnum =this.props.roleEnum;
        var ranks = this.state.rankResult;
        if(!!ranks){
            if(roleEnum == RoleEnum.student){
                roleRankResult = <StudentRankState selectShow={this.props.selectShow} showClickIcon={this.props.showClickIcon} currentTerm={this.props.currentTerm} onTermChange={this.onTermChange} grownScore={ranks.integralScore}  classRank={ranks.rankInClass}  schoolRank={ranks.rankInSchool}  />
            }else if(roleEnum == RoleEnum.teacher){
                roleRankResult = <TeacherRankState  />

            }else if(roleEnum == RoleEnum.admin){
                roleRankResult = <AdminRankState  studentAccountCount={ranks.studentAccountCount} teacherAccountCount={ranks.teacherAccountCount} />
            }

        }
        

        return (
            <Row className="display-box" >
                <Col span={17} className="am-padding-right-sm">
                    <PersonalBasicInfo className="block-box-shadows" roleEnum={this.props.roleEnum} />
                </Col>
                <Col span={7} className="block-box-shadows ">
                    {roleRankResult}
                </Col>

            </Row>
        )
    }
}

export = PersonInfoAndRank