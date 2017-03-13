import * as React from 'react'
import * as ItemsActions from '../../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Icon,Card} from 'antd'

import {isEmptyObject} from 'common/commonFunc'

import * as responseCacheContext from 'common/ResponseCacheContext'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'

"use strict";

/**
 * 专业库---显示专业列表
 */
interface MajorResultProps extends React.Props<MajorResult> {
    title:string,
    majorLibState?: any,
    actions?: any,
    showDetail?:Function
}
interface MajorResultState {
    scaleName: string
}

class MajorResult extends React.Component<MajorResultProps, MajorResultState> {
    constructor(props) {
        super(props);
        this.showMajorDetail = this.showMajorDetail.bind(this);
    }

    static defaultProps = {
    };
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

    getMajorResultList(){
        var list = [];
        var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_MAJORLIB_MAJORLIB).result;
        //获取jason数据
        var chosenSubjClassificationID =this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID; //专科 本科
        var chosenSubjCategoriesID =this.props.majorLibState.toJS().majorlib_subj_categories.majorCategoryID; //哲学 经济学
        var chosenMajorCategoriesID =this.props.majorLibState.toJS().majorlib_major_categories.majorMLID; //哲学类 经济学类
        var searchValue =this.props.majorLibState.toJS().majorlib_search_value;
        //var clickFlag =this.props.majorLibState.toJS().majorlib_major_clickflag;
        if(isEmptyObject(searchValue)){
            //不是搜索框点击的
            if(isEmptyObject(chosenSubjCategoriesID)){
                var subjCategoryList  = responseData.majorType2CategoryMap[chosenSubjClassificationID];
                for(let subjCategory of subjCategoryList){
                    var majorCategoryID = subjCategory.majorCategoryID;
                    for(let majorML of responseData.majorCategory2MLMap[majorCategoryID]){
                        var majorMLID = majorML.majorMLID;
                        var majorList = responseData.majorML2SubMajorMLMap[majorMLID];
                        for(var item of majorList){
                            list.push(item);
                        }
                    }
                }
            }else{
                if(isEmptyObject(chosenMajorCategoriesID)){
                    for(let items of responseData.majorCategory2MLMap[chosenSubjCategoriesID]){
                        var majorMLID = items.majorMLID;
                        var majorList = responseData.majorML2SubMajorMLMap[majorMLID];
                        for(var item of majorList){
                            list.push(item);
                        }
                    }
                }else{
                    list = responseData.majorML2SubMajorMLMap[chosenMajorCategoriesID];
                }
            }

        }else{
            //是搜索框点击的
            var majorML2SubMajorMLMap = responseData.majorML2SubMajorMLMap;
            for(var key in majorML2SubMajorMLMap){
                for(let item of majorML2SubMajorMLMap[key]){
                    if(item.subMajorMLName.indexOf(searchValue)>-1){
                        list.push(item);
                    }
                }
            };
        }
        //lists格式 [{name:"哲学",majorCategory:[{subMajorMLID:"01",subMajorMLName:"逻辑学"}]}]
        var lists = [];
        var groupMap = this.changeArrayToMapGroupWithSubMajorMLID(list);
        var groupMapKey = []; //groupMap key排序
        $.each(groupMap, function(key, val) { groupMapKey[groupMapKey.length] = key;  });
        groupMapKey.sort();
        for(let item of groupMapKey){
            var majorCategoryName = this.getMajorCategoryName(item,responseData.majorType2CategoryMap);
            var map = {};
            map["name"] = majorCategoryName;
            map["majorCategory"] = groupMap[item];
            lists.push(map);
            //Removes the last element from an array and returns it.
        }
        return lists;

    }


    render() {
        var this_ = this;
        var majorList = this.getMajorResultList();
        var ifShow = isEmptyObject( this.props.majorLibState.toJS().majorlib_search_value) || isEmptyObject(majorList)?"none":"block";
        //判断是否为搜索结果
        return (

            <div className="profession-content-list">
                <div className="show-search-text" style={{display:ifShow,marginBottom:"20px"}}>以下是您的医案查询结果：</div>
                {
                    isEmptyObject(majorList) &&
                    <div className="show-search-text am-text-center" style={{marginBottom:"20px"}} >暂无匹配医案，请尝试其他关键词搜索吧<Icon type="frown" /></div>
                }
                {majorList.map(function(major, index){
                        return (
                            <div className="profession-single am-cf" key={index}>
                                <div className="profession-title">{major.name}</div>
                                <ul className="profession-content">
                                    {major.majorCategory.map(function(item, index){
                                            return (
                                                //显示学科名称
                                                <div>
                                                    <br/>
                                                    <li onClick={this_.showMajorDetail} id={item.subMajorMLID} key={index}>{item.subMajorMLName}</li>
                                                    <br/>
                                                    <Card title={item.subMajortitle} style ={{ width: '50%' }}>
                                                        {item.subMajorSum}
                                                    </Card>
                                                    <br/>
                                                </div>
                                                )
                                        })}
                                </ul>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}
export = connect(state => ({
    majorLibState: state.majorLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(MajorResult)

