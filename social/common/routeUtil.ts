
"use strict";
import {isEmptyObject} from "./commonFunc";

//RedirectUtil.getRedirectPath("homePage")

export function goToOtherPersonalPage(otherUserID, this_){
    var url = "otherPersonalPage";
    var routeObj = {
        pathname: url,
        query: {
            UserID: otherUserID
        },
    };
    this_.props.router.push(routeObj);
}

export function goToOtherTeacherPage(otherTeacherUserID, this_){
    var url = "otherTeacherPage";
    var routeObj = {
        pathname: url,
        query: {
            otherTeacherUserID: otherTeacherUserID
        }
    };
    this_.props.router.push(routeObj);
};

export function jumpToRoute(this_, targetRouteUrl){
    var routeObj = {
        pathname: targetRouteUrl,
    };
    this_.props.router.push(routeObj);
}