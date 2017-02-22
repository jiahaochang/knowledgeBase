import {isDebug} from './commonVar'
import {getTermOptions} from './GlobalContext'
import Immutable = require('immutable')
declare var hzyCommon:any;

export function ajaxAsyncGet(url, successfunc, errorfunc){
    hzyCommon.ajaxAsyncGet(url,successfunc,errorfunc);
}

export function ajaxSyncGet(url, successfunc, errorfunc){
    hzyCommon.ajaxSyncGet(url,successfunc,errorfunc);
}

export function getValueFromSessionStorage(key:string, defaultValue?:string| number){
    return hzyCommon.getValueFromSessionStorage(key,defaultValue);
}

export function setValueToSessionStorage(key, value){
    hzyCommon.setValueToSessionStorage(key,value);
}

export function removeSessionStorage(key){
    hzyCommon.removeSessionStorage(key);
}

export function getValueFromLocalStorage(key, defaultValue){
    return hzyCommon.getValueFromLocalStorage(key,defaultValue);
}

export function setValueToLocalStorage(key, value){
    hzyCommon.setValueToLocalStorage(key,value);
}

export function removeLocalStorage(key){
    hzyCommon.removeLocalStorage(key);
}

export function isEmptyObject( obj ) {
   return hzyCommon.isEmptyObject(obj);
}

export function isArray(obj){
    return hzyCommon.isArray(obj);
}

export function assignDataForAjax( obj ) {

    if(!obj.UserID && getValueFromSessionStorage("UserID")){
        obj.UserID = getValueFromSessionStorage("UserID");
    }
    if(!obj.token && getValueFromSessionStorage("token")){
        obj.token = getValueFromSessionStorage("token");
    }
    if(!obj.SchoolID && getValueFromSessionStorage("schoolID")){
        obj.SchoolID = getValueFromSessionStorage("schoolID");
    }
    if(!obj.SystemID && getValueFromSessionStorage("systemID")){
        obj.SystemID = getValueFromSessionStorage("systemID");
    }
    if(!obj.Grade && getValueFromSessionStorage("grade")){
        obj.Grade = getValueFromSessionStorage("grade");
    }
    if(!obj.RegionID && getValueFromSessionStorage("RegionID")){
        obj.RegionID = getValueFromSessionStorage("RegionID");
    }
	if(!obj.StuClass && getValueFromSessionStorage("stuClass")){
		obj.StuClass = getValueFromSessionStorage("stuClass");
	}

    return JSON.stringify(obj);
}

export function assignAuthCodeForShare(){
	var authCode = getValueFromSessionStorage('authCode');
	var authCodeQueryString = "";
	if( authCode ){
		authCodeQueryString = "AuthCode=" + authCode + "&timestamp=" + new Date().getTime();
	}else{
		if( isDebug() ){
			alert("error: AuthCode empty ");
		}
	}
	return authCodeQueryString;
}

export function getUrlFromPropsAndQuery(this_){
	// 变量命名为 url
	var url = "";
	if(!this_.props){
		return url;
	}
	var propsUrl = this_.props.url;
	var queryUrl = this_.props.location?this_.props.location.query.url:"";
	if( !!propsUrl ){
		url = propsUrl;
	}else if ( !!queryUrl ) {
		url = queryUrl;
	}
	return url;
}

export function hasKeyInMap(key, map){
    //return Immutable.Map(map).has(key);
    if (!map){
        return false;
    }
    return (typeof map[key]) !== "undefined"
}

//将数组改成n个一组[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
export function changeArrayForNewGroup<T>(list:Array<T>,n:number):Array<Array<T>>{
    var array = [];
    var length = list.length;

    var copyList = Immutable.fromJS(list).toJS();

    var loopCount = parseInt((length/n).toString());
    var j=0,k=n;
    for(var i=0;i<loopCount;i++){
        var after = copyList.splice(j,k);
        array.push(after);
    }
    if(length%n != 0){
        array.push(copyList);
    }
    return array;
}

//数组去掉重复项
export function removeRepeatElementInArray(list){
    var new_arr=[];
    for(var i=0;i<list.length;i++) {
        var items=list[i];
        //判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
        if($.inArray(items,new_arr)==-1) {
            new_arr.push(items);
        }
    }
    return new_arr;
}
//数组去掉重复项，single is map [{a:1,b:2}] key:需要比较的object的键
export function removeRepeatObjectElementInArray(list,key){
    var re=[list[0]];
    for(var i = 1; i < list.length; i++)
    {
        var item = list[i];
        if(!containsItems(re,item,key)){
            re.push(item);
        }
    }
    return re;
}

export function containsItems(array,item,key){
    for(var i=0;i<array.length;i++){
        if(array[i][key] == item[key]){
            return true
        }
    }
    return false;

}


export function scrollTo(jqueryElement:any):void{
    $('html, body').animate({
        scrollTop: jqueryElement.offset().top - 79
    }, 500);
}

/**
 * 从数组中获取随机个元素 传入的数组会被改变
 * @param array 被选取的元素
 * @param count 选取个数
 * @returns {Array}
 */
export function getRandomElementFromArray<T>(array:Array<T>, count:number):Array<T> {
    var result = [];
    //var copyArray = Immutable.fromJS(array).toJS();
    var copyArray = array;
    while(result.length < count){
        var temp = (Math.random() * copyArray.length) >> 0;
        result.push(copyArray.splice(temp, 1)[0])
    }
    return result;
}

/**
 * 找到单个元素在数组中位置
 * @param singleItem 单个元素
 * @param itemArray 元素数组
 * @param matchKeyArray 如果单个元素是object 可以通过指定key进行匹配
 * @returns {number} -1 表示不存在 其余返回位置
 */
export function getIndexInArray<T>(singleItem:T, itemArray:Array<T>, matchKeyArray?:Array<string>):number{
    var index = -1;
    if (!matchKeyArray){
        for (var i=0; i<itemArray.length; i++){
            if (JSON.stringify(singleItem) === JSON.stringify(itemArray[i])){
                index = i;
                break;
            }
        }
        return index;
    }else{
        for (var i=0; i<itemArray.length; i++){
            var isAllKeysMatch = true;
            for (var m=0; m<matchKeyArray.length; m++){
                var key = matchKeyArray[m];
                if (singleItem[key] !== itemArray[i][key]){
                    isAllKeysMatch = false;
                    break;
                }
            }
            if (isAllKeysMatch){
                index = i;
                break;
            }
        }
        return index;
    }
}

export function isInArray<T>(singleItem:T, itemArray:Array<T>, matchKeyArray?:Array<string>):boolean{
    return getIndexInArray(singleItem,itemArray, matchKeyArray) !== -1
}

/**
 * 重新分配array， 将operateArray 从deleteFromArray中删除，添加到addToArray中
 * @param addToArray
 * @param deleteFromArray
 * @param operateArray 被移动的小array
 */
export function reallocArray<T>(addToArray:Array<T>, deleteFromArray:Array<T>, operateArray:Array<T>):void{
    Array.prototype.push.apply(addToArray, operateArray);
    deleteArray(deleteFromArray, operateArray);
}

export function deleteArray<T>(deleteFromArray:Array<T>, operateArray:Array<T>): Array<T>{
    for (var i=0; i<operateArray.length; i++){
        var index = getIndexInArray(operateArray[i], deleteFromArray);
        deleteFromArray.splice(index, 1);
    }
    return deleteFromArray;
}

//format data
export  function formatDate(time, targetFormat?:string) {
    var t = new Date(time);
    var tf = function (i) { return (i < 10 ? '0' : '') + i };
    var format = "yyyy-MM-dd";
    if (targetFormat){
        format = targetFormat;
    }

    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    });
}

//根据termID,获取 学年 ,yearMonths
export function getYearMonthsByTermID(termID){
    var passedTerms = getTermOptions();
    var yearMonths = [];
    for(let item of passedTerms){
        if(item.termID == termID){
            var currentYear = item.termYear;
            var nextYear = parseInt(currentYear)+1;
            for(var i=9;i<=12;i++){
                var map = {};
                map["month"] = i;
                map["year"] = currentYear;
                yearMonths.push(map);
            }
            for(var j=1;j<=6;j++){
                var map = {};
                map["month"] = j;
                map["year"] = nextYear;
                yearMonths.push(map);
            }
        }
    }
    return yearMonths;

}

/**
 *
 * @param dimScores
 * @param paramBackFlag  参数是否正序读取  影响rightText取list的第一个，还是最后一个
 * paramBackFlag = true  leftChar = [0].dimName
 */
export function progressDualAxis(dimScores,paramBackFlag){

    var newArray = [];
    for(var item of dimScores){
        var leftText="",leftChar="",rightText="",rightChar="",direction="",dimScore=0;
        var score = item.score;
        var totalScore = item.totalScore;
        var middleScore = totalScore/2;
        var displayDim = item.displayDim;
        if(paramBackFlag){
            leftChar =displayDim[0].dimType;
            leftText = displayDim[0].dimName;
            rightChar =displayDim[1].dimType;
            rightText = displayDim[1].dimName;
            direction = score>middleScore? "right":"left";
            dimScore =Math.abs(score-middleScore)*100/middleScore;
        }else{
            leftChar =displayDim[1].dimType;
            leftText = displayDim[1].dimName;
            rightChar =displayDim[0].dimType;
            rightText = displayDim[0].dimName;
            direction = score>middleScore? "left":"right";
            dimScore = Math.abs(score-middleScore)*100/middleScore;
        }
        var dimMap = {
            leftChar,
            leftText,
            rightChar,
            rightText,
            direction,
            dimScore
        }
        newArray.push(dimMap);
    }
    return newArray;
}
 /* *
 *判断是否是字符串
 * @param str
 * @return {boolean}
 */
export function isString(str: any):boolean{
    return Object.prototype.toString.call(str) === "[object String]";
}

function isObject(str: any):boolean{
    return Object.prototype.toString.call(str) === "[object Object]";
}

/**
 * 将map object转化为字符串，保证相同object转化为相同string，可以作为key来存储
 * @param obj
 */
export function transformObjectToString(obj: any): string{
    var keys = Object.keys(obj);
    keys.sort();
    var keyValueStringArray = [];
    for (var i=0; i<keys.length; i++){
        var key = keys[i];
        var value = obj[key];
        var valueString = "";
        if (isObject(value)){
            valueString = transformObjectToString(value);
        }else{
            valueString = JSON.stringify(value);
        }
        keyValueStringArray.push(key+"_"+valueString+"-")
    }
    return keyValueStringArray.toString();
}
