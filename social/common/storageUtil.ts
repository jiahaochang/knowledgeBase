
import * as storageKeys from './storageKey'

import {getValueFromSessionStorage, setValueToSessionStorage} from "./commonFunc";
import {SchoolTermEnum} from "./Module/SchoolTerm";
import {RoleEnum} from "./Module/Role";

/**
 * 封装storage操作 解耦 具体操作实现过程
 * @param termID
 */
export function setTermIDToStorage(termID: SchoolTermEnum){
    setValueToSessionStorage(storageKeys.session_termID, termID);
}
export function getTermIDFromStorage(){
    return getValueFromSessionStorage(storageKeys.session_termID);
}

export function setRoleEnumToStorage(roleEnum: RoleEnum){
    setValueToSessionStorage(storageKeys.session_roleEnum, roleEnum);
}
export function getRoleEnumFromStorage(){
    return getValueFromSessionStorage(storageKeys.session_roleEnum);
}

export function getSchoolIDFromStorage(){
    return getValueFromSessionStorage(storageKeys.session_schoolID);
}

export function getRegionIDFromStorage(){
    return getValueFromSessionStorage(storageKeys.session_regionID);
}

export function getUserIDFromStorage(){
    return getValueFromSessionStorage(storageKeys.session_UserID);
}