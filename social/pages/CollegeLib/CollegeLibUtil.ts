
import {isEmptyObject} from 'common/commonFunc'
import {defaultPageSize,defaultCurrentPage} from  'common/Config/CommonConfig'

//院校库 取树上节点的查询条件值  this.props.collegeLibState.toJS()
export function getSearchConditionFromStateTree(collegeLibState,type?:string,value?:any){
    var postData = {};
    var provinceID = collegeLibState.collegeLib_collegeOptions_province;
    if(provinceID.length>0 && !isEmptyObject(provinceID[0])){
        postData["provinceID"] = provinceID;
    }

    var collegeLevelID = collegeLibState.collegeLib_collegeOptions_level;
    if(collegeLevelID.length>0 && !isEmptyObject(collegeLevelID[0])){
        postData["collegeLevelID"] = collegeLevelID;
    }
    var majorTypeID = collegeLibState.collegeLib_collegeOptions_type;
    if(majorTypeID.length>0 && !isEmptyObject(majorTypeID[0])){
        postData["majorTypeID"] = majorTypeID;
    }
    var collegePropID = collegeLibState.collegeLib_collegeOptions_collegeProp;
    if(collegePropID.length>0 && !isEmptyObject(collegePropID[0])){
        postData["collegePropID"] = collegePropID;
    }
    var keyword = collegeLibState.collegeLib_searchBox_input;
    if(keyword.length>0 && !isEmptyObject(keyword)){
        postData["keyword"] = keyword;
    }

    var currentPage = collegeLibState.collegeLib_currentPage;
    postData["currentPage"] = currentPage;

    if(!isEmptyObject(type)){
        if(type != "page"){
            if(type == "province"){
                postData["provinceID"] = value;
            }else if(type == "collegeProp"){
                postData["collegePropID"] = value;
            }else if(type == "majorType"){
                postData["majorTypeID"] = value;
            }else if(type == "collegeLevel"){
                postData["collegeLevelID"] = value;
            }else if(type == "keyword"){
                postData["keyword"] = value;
            }
            postData["currentPage"] = defaultCurrentPage;
        }else{
            postData["currentPage"] = value;
        }

    }

    postData["pageSize"] = defaultPageSize;
    console.log(postData);
    return postData;

}