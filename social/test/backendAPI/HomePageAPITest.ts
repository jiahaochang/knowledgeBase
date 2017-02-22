
import * as commonFunc from '../../common/commonFunc'
import * as commonVar from '../../common/commonVar'
var Mock = require('mockjs');
import * as template from '../mock/ajaxMock/HomePageMockTemplate'
"use strict";

const baseUrl = commonVar.baseUrl;
export function run(){
    var url = commonVar.baseUrl;
    var data = commonFunc.assignDataForAjax({});
    var successFunc = function (response) {
        console.log("success");
        console.log(typeof response);
        //console.log( Mock.valid(template.templeteTest, response) );
    };
    var errorFunc = function (response) {
        console.log("error");
        console.log(response)
    };
    //ajaxUtil.ajaxSyncPost(baseUrl + '/aaa/bbb', data, successFunc, errorFunc);
}

