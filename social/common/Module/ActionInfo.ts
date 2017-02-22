"use strict";
import {getPrivilegeByActionID, getUrlByActionID, getActionBasicInfo} from "./ActionInfoUtil";
import {getPrivilegeByModules} from "../privilegeUtil";

export class ActionInfo {
    privilege: Privilege;
    url: string;
    constructor(actionID: string){
        var actionBasicInfo = getActionBasicInfo(actionID);
        this.url = actionBasicInfo.url;
        this.privilege = getPrivilegeByModules(actionBasicInfo.modules);
    }
}


