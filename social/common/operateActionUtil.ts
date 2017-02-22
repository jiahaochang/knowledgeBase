"use strict";
import {ActionInfo} from "./Module/ActionInfo";
//actionID can derive post url, privilegeInfo
export function getActionInfo(actionID: string): ActionInfo{
    //if exist in context, get
    return new ActionInfo(actionID);
}