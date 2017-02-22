
"use strict";
import * as context from './TeacherPersnalPageContext'
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'

import StudentSimpleInfo = Nicezy.StudentSimpleInfo;
import {getUserIDFromStorage} from "../../common/storageUtil";
import UserImmutableInfo = Nicezy.IUserImmutableInfo;
import {getDataByActionIDWithQueryAsync} from "../../common/ajaxUtil";
import {GET_TEACHER_CLASSNOTIFICATION} from "../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes";
import ITeacherRankState = Nicezy.ITeacherRankState;
import {GET_TEACHER_RANKSTATE} from "../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes";
import {READ_TEACHER_USERINFO} from "../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes";

export function getAllStudentsFromCacheContext(teacherUserID:string): Array<StudentSimpleInfo>{
    var allStudents = context.getClassAllMember();
    if (!allStudents || allStudents.length != 0 ){
        allStudents = ajaxUtil.getDataByActionIDWithQuery(ActionTypes.GET_TEACHER_CLASSMATELIST, {teacherUserID}).result.students;
        context.setClassAllMember(allStudents);
    }
    return allStudents;
}

export function getTeacherUserIDAndDisableEditFlag(this_){
    var teacherUserID = getUserIDFromStorage();
    var disableEdit = false;
    if(this_.props.location && this_.props.location.query && this_.props.location.query.otherTeacherUserID){
        teacherUserID = this_.props.location.query.otherTeacherUserID;
        disableEdit = this_.props.location.query.disableEdit;
    }
    return {
        teacherUserID,
        disableEdit
    }
}

export function getTeacherBasicInfoAsync(teacherUserID: string, this_:any, cb:(teacherUserInfo: UserImmutableInfo)=>void):void{
    getDataByActionIDWithQueryAsync(READ_TEACHER_USERINFO,{teacherUserID}, function (response) {
        cb(response.result);
    });
}

export function getTeacherRankStateAsync(teacherUserID: string, this_:any,  cb:(teacherRankState: ITeacherRankState)=>void):void{
    getDataByActionIDWithQueryAsync(GET_TEACHER_RANKSTATE,{teacherUserID}, function (response) {
        cb(response.result.rankState);
    });
}