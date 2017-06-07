import * as React from 'react'
import * as ItemsActions from '../../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Icon,Card,Pagination} from 'antd'
import { withRouter } from 'react-router'
import {isEmptyObject} from 'common/commonFunc'

import * as responseCacheContext from 'common/ResponseCacheContext'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as ajaxUtil from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'
//import {defaultPageSize} from 'common/Config/CommonConfig'
import {getSearchConditionFromStateTree} from '../MajorLibUtil'

"use strict";
let defaultCurrentPage = 1;
let defaultPageSize = 5;
/**
 * 专业库---显示专业列表
 */
interface MajorResultProps extends React.Props<MajorResult> {
    title:string,
    majorLibState?: any,
    actions?: any,
    showDetail?:Function,
    //actions?: any,
}
interface MajorResultState {
    //scaleName: string,
    majorLib_majorResult:any,
    majorLib_currentPage:any,
}

class MajorResult extends React.Component<MajorResultProps, MajorResultState> {
    constructor(props) {
        super(props);
        this.state = {
            majorLib_majorResult:{},
            majorLib_currentPage:defaultCurrentPage
        }
        this.showMajorDetail = this.showMajorDetail.bind(this);
        this.onChangePagination = this.onChangePagination.bind(this);
    }

    static defaultProps = {
    };

    componentWillMount(){
        var postData = getSearchConditionFromStateTree(this.props.majorLibState.toJS());
        //this.props.actions.getMajorResult(postData);
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_MAJORLIB_MAJORLIB, postData).result;
        this.setState({
            majorLib_majorResult:responseData,
            majorLib_currentPage:defaultCurrentPage
        });
    }

    //li点击事件--显示专业详情
    showMajorDetail(e){
        var map = {};
        map["subMajorMLID"] = e.currentTarget.id;
        map["subMajorMLName"] = e.currentTarget.textContent;
        this.props.showDetail(map);
       
    }
    //根据majorCategoryID 获取majorCategoryName
    getMajorCategoryName(majorCategoryID,data){
        for(var key in data){
            for(var item of data[key]){
                if(item.majorCategoryID == majorCategoryID){
                    return item.majorCategoryName;
                }
            }
        }

    }

    //数组按组subMajorMLID 前两位分组
    changeArrayToMapGroupWithSubMajorMLID(data){
        var groupMap = {};
        for(let item of data){
            var id = item.subMajorMLID.substr(0,2);
            if(isEmptyObject(groupMap[id])){
                var list = [];
                list.push(item);
                groupMap[id] = list;
            }else{
                groupMap[id].push(item);
            }
        }
        return groupMap;
    }

    getMajorResultList(responseData){
        var list = [];
        var lists = [];
        //var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_MAJORLIB_MAJORLIB).result;
        //获取jason数据
        if(!isEmptyObject(responseData)) {
            var chosenSubjClassificationID = this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID; //专科 本科
            var chosenSubjCategoriesID = this.props.majorLibState.toJS().majorlib_subj_categories.majorCategoryID; //哲学 经济学
            var chosenMajorCategoriesID = this.props.majorLibState.toJS().majorlib_major_categories.majorMLID; //哲学类 经济学类
            var searchValue = this.props.majorLibState.toJS().majorlib_search_value;

            //var clickFlag =this.props.majorLibState.toJS().majorlib_major_clickflag;
            if (isEmptyObject(searchValue)) {
                //不是搜索框点击的
                if (isEmptyObject(chosenSubjCategoriesID)) {
                    var subjCategoryList = responseData.majorType2CategoryMap[chosenSubjClassificationID];
                    for (let subjCategory of subjCategoryList) {
                        var majorCategoryID = subjCategory.majorCategoryID;
                        for (let majorML of responseData.majorCategory2MLMap[majorCategoryID]) {
                            var majorMLID = majorML.majorMLID;
                            var majorList = responseData.majorML2SubMajorMLMap[majorMLID];
                            for (var item of majorList) {
                                list.push(item);
                            }
                        }
                    }
                } else {
                    if (isEmptyObject(chosenMajorCategoriesID)) {
                        for (let items of responseData.majorCategory2MLMap[chosenSubjCategoriesID]) {
                            var majorMLID = items.majorMLID;
                            var majorList = responseData.majorML2SubMajorMLMap[majorMLID];
                            for (var item of majorList) {
                                list.push(item);
                            }
                        }
                    } else {
                        list = responseData.majorML2SubMajorMLMap[chosenMajorCategoriesID];
                    }
                }

            } else {
                //是搜索框点击的
                var majorML2SubMajorMLMap = responseData.majorML2SubMajorMLMap;
                for (var key in majorML2SubMajorMLMap) {
                    for (let item of majorML2SubMajorMLMap[key]) {
                        if (item.subMajorMLName.indexOf(searchValue) > -1) {
                        //if (item.subMajorName.indexOf(searchValue) > -1) {
                            list.push(item);
                        }
                    }
                }
                ;
            }
            //lists格式 [{name:"哲学",majorCategory:[{subMajorMLID:"01",subMajorMLName:"逻辑学"}]}]
            var lists = [];
            var groupMap = this.changeArrayToMapGroupWithSubMajorMLID(list);
            var groupMapKey = []; //groupMap key排序
            $.each(groupMap, function (key, val) {
                groupMapKey[groupMapKey.length] = key;
            });
            groupMapKey.sort();
            for (let item of groupMapKey) {
                var majorCategoryName = this.getMajorCategoryName(item, responseData.majorType2CategoryMap);
                var map = {};
                map["name"] = majorCategoryName;
                map["majorCategory"] = groupMap[item];
                lists.push(map);
                //Removes the last element from an array and returns it.
            }
        }
        return lists;

    }

    //分页显示
    onChangePagination(page){
        //this.props.actions.mergeCurrentPage({majorLib_currentPage:page});
        var postData = getSearchConditionFromStateTree(this.props.majorLibState.toJS(),"page",page);
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_MAJORLIB_MAJORLIB, postData).result;
        this.setState({
            majorLib_majorResult:responseData,
            majorLib_currentPage:page
        });
        //this.props.actions.getMajorResult(postData);
    }

    render() {
        var this_ = this;
        var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_MAJORLIB_MAJORLIB).result;
        var responseData = this.state.majorLib_majorResult;
        //var
        var majorList = this.getMajorResultList(responseData);
        var ifShow = isEmptyObject( this.props.majorLibState.toJS().majorlib_search_value) || isEmptyObject(majorList)?"none":"block";
        //判断是否为搜索结果

        var hasResult = isEmptyObject(majorList)? false : true;
        //var current = this.props.majorLibState.toJS().majorLib_currentPage;
        var current = this.state.majorLib_currentPage;
        var total = 128;

        return (

            <div className="profession-content-list">
                <div className="show-search-text" style={{display:ifShow,marginBottom:"20px"}}>以下是您的医案查询结果：</div>
                {
                    isEmptyObject(majorList) &&
                    <div className="show-search-text am-text-center" style={{marginBottom:"20px"}} >暂无匹配医案，请尝试其他关键词搜索吧<Icon type="frown" /></div>
                }

                {majorList.map(function(major, index){
                    return (
                    <div key={index}>
                            {major.majorCategory.map(function(item, index){
                                if( ((current-1) *defaultPageSize-1) < index && index < (current*defaultPageSize) )
                                    {
                                        return (
                                            //显示学科名称
                                        <div className="block-box-shadows" style={{marginTop:"5px"}}>
                                            <div className="profession-single2 am-cf" key={index}>
                                                <div className="profession-title">
                                                <li onClick={this_.showMajorDetail} id={item.subMajorMLID} key={index}>{item.subMajorMLName}</li>
                                                </div>
                                                <Card title={item.subMajorTitle}>
                                                    {item.subMajorDetail}
                                                </Card>
                                                <br/>
                                            </div>
                                        </div>
                                        )
                                    }
                                })}

                    </div>
                        )
                    }
                    )}




                {
                    hasResult &&
                    <div className="am-margin-top-sm">
                        <Pagination  current={current} onChange={this.onChangePagination} total={total} pageSize={defaultPageSize}  showTotal={total => `共 ${total} 条`} />
                    </div>
                }

            </div>
        )
    }
}
/*export = connect(state => ({
    majorLibState: state.majorLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(MajorResult)*/

export = withRouter(connect(state => ({
    majorLibState: state.majorLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(MajorResult))
