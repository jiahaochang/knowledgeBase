
"use strict";

//结果缓存  todo 缓存管理涉及到生命周期维护
var responseCache = {}; // 有隐患 此处虽然可以直接修改内容 但是无法保证其他人不会误改此内容
/*export function setResponseCache(responseObj){
    responseCache = responseObj;
}*/
export function getResponseCache(){
    return responseCache;
}

