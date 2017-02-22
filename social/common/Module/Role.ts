"use strict";
import * as StudentActionTypes from '../../actions/HomePage/HomePageActionTypes'
import * as TeacherActionTypes from '../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as AdminActionTypes from '../../actions/AdminPage/AdminPageActionTypes'
export const enum RoleEnum {
    student,
    teacher,
    admin
}

interface RoleRelateInfo{
    displayChinese: string,
    personalPageUrl: string,
    getUserInfoActionID: string,
    getRankStateActionID: string
}

export class Role {
    private _roleEnum;

    public getRoleEnum() {
        return this._roleEnum;
    }

    public setRoleEnum(value) {
        this._roleEnum = value;
    }

    constructor(role: RoleEnum){
        this._roleEnum = role
    }

    static transToRoleEnum(roleString: string): RoleEnum{
        var roleEnum = RoleEnum.student;
        switch (roleString){
            case "0":{
                roleEnum = RoleEnum.student;
                break;
            }
            case "1":{
                roleEnum = RoleEnum.teacher;
                break;
            }
            case "2":{
                roleEnum = RoleEnum.admin;
                break;
            }
            default:{
                roleEnum = RoleEnum.student;
            }
        }
        return roleEnum
    }

    public getRoleRelateInfo(): RoleRelateInfo {
        var displayChinese = "";
        var personalPageUrl = "";
        var getUserInfoActionID = "";
        var getRankStateActionID = "";
        switch (this._roleEnum) {
            case RoleEnum.student: {
                displayChinese = "学生";
                personalPageUrl = "/homePage/myPersonalPage";
                getUserInfoActionID = StudentActionTypes.READ_STUDENT_USERINFO;
                getRankStateActionID = StudentActionTypes.GET_STUDENT_RANKSTATE;
                break;
            }
            case RoleEnum.teacher:{
                displayChinese = "班主任";
                personalPageUrl = "/homePage/teacherPersonalPage";
                getUserInfoActionID = TeacherActionTypes.READ_TEACHER_USERINFO;
                getRankStateActionID = TeacherActionTypes.GET_TEACHER_RANKSTATE;
                break;
            }
            case RoleEnum.admin:{
                displayChinese = "管理员";
                personalPageUrl = "/adminPage";
                getUserInfoActionID = AdminActionTypes.READ_ADMIN_USERINFO;
                break;
            }
            default:{
                displayChinese = "学生";
                personalPageUrl = "/homePage/myPersonalPage";
            }
        }
        return {
            displayChinese,
            personalPageUrl,
            getUserInfoActionID,
            getRankStateActionID
        }
    }

}