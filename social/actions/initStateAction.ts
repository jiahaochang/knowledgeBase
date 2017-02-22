
import * as actionUtil from '../common/actionUtil'

"use strict";
import {Role,RoleEnum} from "../common/Module/Role";
import * as storageUtil from "../common/storageUtil";
import * as commonFunc from 'common/commonFunc'
import * as storageKeys from 'common/storageKey'
import * as ajaxUtil from 'common/ajaxUtil'
import * as responseCacheContext from 'common/ResponseCacheContext'
import {setTermOptions} from 'common/GlobalContext'

export function initStateAjax(dispatch: any): any{
    var this_ = this;

    var url = "test";
    var data = {

    };

    var finalSubjInitState = {
        subj_isDone: true
    };

    //role 是在登陆之后就确定了的 存储在sessionStorage中
    //todo 删除 set roleEnum  after login success
    storageUtil.setRoleEnumToStorage(RoleEnum.teacher);
    var roleEnum = storageUtil.getRoleEnumFromStorage();
    var role = new Role(Role.transToRoleEnum(roleEnum));
    var actionID = role.getRoleRelateInfo().getUserInfoActionID;
    var userID = storageUtil.getUserIDFromStorage();
    var queryObj = {userID:userID};
    var responseData = ajaxUtil.getDataFromContextByActionID(responseCacheContext.getResponseCache(), actionID,queryObj).result;
    var termOptions = responseData.passedTerms;
    setTermOptions(termOptions);

    //当前学期[latest term]
    storageUtil.setTermIDToStorage(termOptions[termOptions.length-1].termID);

    //存储初始化信息
    commonFunc.setValueToSessionStorage(storageKeys.session_UserID, "1");
    commonFunc.setValueToSessionStorage(storageKeys.session_grade, "2");
    commonFunc.setValueToSessionStorage(storageKeys.session_regionID, "98");
    commonFunc.setValueToSessionStorage(storageKeys.session_schoolID, "1000");
    commonFunc.setValueToSessionStorage(storageKeys.session_stuClass, "5");

    actionUtil.dispatchInitActions(finalSubjInitState, dispatch);
}