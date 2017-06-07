
import {isEmptyObject} from 'common/commonFunc'
import {defaultPageSize,defaultCurrentPage} from  'common/Config/CommonConfig'

export function getSearchConditionFromStateTree(majorLibState,type?:string,value?:any){
    var postData = {};

    var currentPage = majorLibState.majorLib_currentPage;
    postData["currentPage"] = currentPage;

    if(!isEmptyObject(type)){
        postData["currentPage"] = value;
    }

    postData["pageSize"] = defaultPageSize;
    console.log(postData);
    return postData;

}