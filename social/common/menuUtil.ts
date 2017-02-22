"use strict";
import {MenuIDModuleConditionMap} from "./Config/MenuModuleConfig";
import {MenuIDStructMap} from "./Config/MenuConfig";

/**
 * 菜单生成相关的函数
 */

/**
 * ajax 获取此模块在学校配置中否存在 如果数据不多可以一次使用map返回全部
 * @param modules
 */
function isModuleExist(modules: Array<string>): Array<boolean>{
    return [false];
}

//todo 获取自带逻辑模块 是否存在 菜单层面
function isModuleExistWithLogic(modules: Array<string>): Array<boolean>{
    return [true];
}

function getMenuStructInfo(menuID:string):MenuStructInfo {
    return MenuIDModuleConditionMap[menuID];
}

/**
 * menuID 是否存在
 * @param menuID
 * @returns {boolean}
 */
function isMenuExist(menuID: string): boolean{
    var menuInfo = getMenuStructInfo(menuID);

    //todo if not condition,return true
    if(!menuInfo){
        return true;
    }

    //assert menuInfo not empty
    var moduleCondition = menuInfo.modules;

    var useLogicModuleIDs = [];
    var normalModuleIDs = [];
    for(var i=0; i<moduleCondition.length; i++){
        var module = moduleCondition[i];
        if (module.useModuleLogic){
            useLogicModuleIDs.push(module.moduleID);
        }else{
            normalModuleIDs.push(module.moduleID)
        }
    }

    var useLogicBool = true;
    if (useLogicModuleIDs.length != 0){
        useLogicBool = andBoolArray(isModuleExistWithLogic(useLogicModuleIDs));
    }
    var useNormalBool = true;
    if (normalModuleIDs.length != 0) {
        useNormalBool = andBoolArray(isModuleExist(normalModuleIDs));
    }
    return useLogicBool && useNormalBool;
}

/**
 * 与操作
 * @param boolArray
 * @returns {boolean}
 */
function andBoolArray(boolArray: Array<boolean>): boolean{
    var result = true;
    for (var i=0; i<boolArray.length; i++){
        if (!boolArray[i]) {
            result = false;
            break;
        }
    }
    return result;
}

interface MenuStructInfo {
    modules:Array<any>,
    useModuleLogic?: Array<any>
}

export function getMenuInfoList(menuIDList: Array<string>): Array<any>{
    var menuInfoList = [];
    for (var i=0; i<menuIDList.length; i++){
        var menuID= menuIDList[i];
        if (isMenuExist(menuID)) {
            menuInfoList.push(MenuIDStructMap[menuID]);
        }
    }
    return menuInfoList;
}