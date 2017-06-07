
import * as commonVar from './commonVar'
import * as commonFunc from './commonFunc'
import { Modal } from 'antd'

declare var hzyCommon:any;
"use strict";
import {getActionInfo} from "./operateActionUtil";
//import {GlobalDatasource} from "./commonVar";
import { mockDataByUrl } from 'test/mock/MockUtil'
import {getActionBasicInfo} from "./Module/ActionInfoUtil";
import {getUserIDFromStorage, getRegionIDFromStorage, getSchoolIDFromStorage} from "./storageUtil";
import {GET_COMMON_OTHERUSERREGIONSCHOOLINFO} from "../actions/CommonAction/CommonActionTypes";
const objectAssign = require('object-assign');
declare var XMLHttpRequest:any;
var GlobalDatasource = "GlobalForceUseMockData";

export function isUserMockData(actionID:string):boolean{
    //return true;
    console.log(GlobalDatasource);
    if (GlobalDatasource === "GlobalForceToUseRealData"){
        return false;
    }else if (GlobalDatasource === "GlobalForceUseMockData"){
        var actionBasicInfo = getActionBasicInfo(actionID);
        var componentUserMockDataFlagExistAndIsFalse = actionBasicInfo && !(typeof (actionBasicInfo.useMockData) === "undefined") && !actionBasicInfo.useMockData;
        return componentUserMockDataFlagExistAndIsFalse?false:true;
    }else if (GlobalDatasource === "GlobalUseComponentData"){
        return getActionBasicInfo(actionID) && getActionBasicInfo(actionID).userMockData;
    }
}

function ajaxSyncPost(url, jsondata, successfunc, errorfunc): void{
    hzyCommon.ajaxSyncPost(url,jsondata,successfunc,errorfunc);
}

function ajaxAsyncPost(url, jsondata, successfunc, errorfunc): void{
    hzyCommon.ajaxAsyncPost(url,jsondata,successfunc,errorfunc);
}

/**
 *  异步请求 必须传递successFunc
 * @param actionID
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 */
export function getDataByActionIDAsync(actionID:string, successFunc:Function, failFunc?:Function, errorFunc?:Function): void{
    getDataByActionIDWithQueryAsync(actionID, {}, successFunc, failFunc,errorFunc);
}

/**
 * 异步请求 带参数 必须传递successFunc
 * @param actionID
 * @param queryObj
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 */
export function getDataByActionIDWithQueryAsync( actionID:string, queryObj:any, successFunc:Function, failFunc?:Function, errorFunc?:Function): void{
    getDataByActionIDWithQueryAndRequestMethod(actionID, queryObj, successFunc, ajaxAsyncPost, true, failFunc, errorFunc);
}


function getDataByActionIDWithQueryAndRequestMethod( actionID:string, queryObj:any, successFunc:Function, requestMethod:any,checkTargetUserID:boolean, failFunc?:Function, errorFunc?:Function): any{
    if(commonVar.isDebug()){
        console.log("actionID:" + actionID);
    }
    var actionInfo = getActionInfo(actionID);

    var baseUrl = commonVar.baseUrl;

    //todo targetUserID命名统一（优先级高）有可能跨省跨学校的地方-> ajax -> regionID schoolID -> baseUrl （优先级低）
    //queryObject 中targetUserID, 并且 targetUserID !== 我的userID 那么发送请求获取对应regionID schoolID
    if(checkTargetUserID && !!queryObj && !!queryObj["targetUserID"] && queryObj["targetUserID"] != getUserIDFromStorage()){
        getDataByActionIDWithQueryAndRequestMethod(GET_COMMON_OTHERUSERREGIONSCHOOLINFO, {queryUserID: queryObj["targetUserID"]}, function (response) {
            var {schoolID, regionID} = response.result;
            baseUrl = commonVar.baseUrl + "/" +regionID + "/" + schoolID;//
        }, ajaxSyncPost, false);
    }else{
        baseUrl = commonVar.baseUrl + "/" + getRegionIDFromStorage() + "/" + getSchoolIDFromStorage();
    }

    var postUrl = baseUrl + actionInfo.url;
    var data = {
        privilege: actionInfo.privilege
    };

    data = objectAssign({},  queryObj);
    if(commonVar.isDebug()){
        console.log("%casync postUrl: " + postUrl, "color:green");
        console.log(actionID + " data");
        console.log(data);
    }

    /*if (isForceUseMockData || commonVar.isUseMockData){
     mockDataByActionIDAndUrl(actionID, postUrl)
     }*/

    var postData = commonFunc.assignDataForAjax(data);
    var responseData = {};

    var useMockData = isUserMockData(actionID);

    if (useMockData) {
        mockDataByUrl(actionInfo.url);
    }

    requestMethod( postUrl, postData,
        function(response){
            //todo 使用mockjs 返回的是json字符串 需要转化为json
            if (commonVar.isDebug() && useMockData && commonFunc.isString(response)){
                response = JSON.parse(response);
            }

            if(response.status == "success"){
                responseData = response;

                if(commonVar.isDebug()){
                    console.log(actionID + " response:");
                    console.log(response);
                }

                if(typeof (successFunc) == "function"){
                    if (commonVar.isDebug() && requestMethod.name == "ajaxAsyncPost"){
                        //todo 开发时 模拟异步延迟 1秒，正式环境要去掉
                        setTimeout(function(){successFunc(response)}, 1000)
                    }else{
                        successFunc(response);
                    }
                }
            }else{
                if(commonVar.isDebug()){
                    console.log("%cajax fail: " + postUrl,"color:red");
                    if(commonVar.isDebug()){
                        console.log(actionID + " response:");
                        console.log(response);
                    }
                }
                if(typeof(failFunc) == "function"){
                    failFunc(response)
                }
            }
        },
        function(response){
            if(commonVar.isDebug()){
                console.log("%cajax error : " + postUrl,"color:red");
            }
            if(XMLHttpRequest.status==911)
            {
                Modal.error({
                    title: "会话超时, 请重新登陆",
                    onOk(){
                        window.location.href = commonVar.loginUrl;
                    }
                });
            }
            if(typeof(errorFunc) == "function"){
                errorFunc(XMLHttpRequest, response)
            }
        }
    );
    return responseData;
}

/**
 * 同步请求
 * @param actionID
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 * @returns {any}
 */
export function getDataByActionID(actionID:string, successFunc?:Function,  failFunc?:Function, errorFunc?:Function): any{
    var result = getDataByActionIDWithQuery(actionID, {}, successFunc);
    return result;
}

/**
 * 同步带参请求
 * @param actionID
 * @param queryObj
 * @param successFunc
 * @param isForceUseMockData
 * @param failFunc
 * @param errorFunc
 * @returns {{}}
 */
export function getDataByActionIDWithQuery( actionID:string, queryObj:any, successFunc?:Function,  failFunc?:Function, errorFunc?:Function): any{
    return getDataByActionIDWithQueryAndRequestMethod(actionID, queryObj, successFunc, ajaxSyncPost,true, failFunc, errorFunc);
}

/**
 * 从缓存中获取结果，如果缓存中没有，发起ajax，然后将结果放入缓存
 * 缓存的key 是actionID 如果queryObj不为空，将其序列化后，以下划线链接
 */
export function getDataFromContextByActionID(contextArray: any, actionID: string, queryObj?: any):any {
    var key = actionID;
    if (!commonFunc.isEmptyObject(queryObj)){
        key = key + "_" + commonFunc.transformObjectToString(queryObj);
    }

    if (contextArray[key]){
        return contextArray[key];
    }else{
        var response = getDataByActionIDWithQuery(actionID, queryObj);
        contextArray[key] = response;
        return response;
    }
}

export function getDataFromContextByActionIDAsync(contextArray: any, actionID: string, successFunc:Function, queryObj?: any):any {
    var key = actionID;
    if (!commonFunc.isEmptyObject(queryObj)){
        key = key + "_" + commonFunc.transformObjectToString(queryObj);
    }

    if (contextArray[key]){
        successFunc(contextArray[key]);
    }else{
        getDataByActionIDWithQueryAsync(actionID, queryObj, function (response) {
            contextArray[key] = response;
            successFunc(response);
        });
    }
}
