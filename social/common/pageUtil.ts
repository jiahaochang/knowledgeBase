
"use strict";
import {scrollTo} from './commonFunc'

/*封装一些页面内的操作*/

//左测导航click事件
export function navigate(e){
    e.preventDefault();
    if ($(e.target).attr("href")){
        var element = $("#" +$(e.target).attr("href"));
        scrollTo(element);
    }
}