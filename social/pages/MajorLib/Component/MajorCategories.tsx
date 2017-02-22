import * as React from 'react'
import * as ItemsActions from '../../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {isEmptyObject} from 'common/commonFunc'
import {majorShowList} from 'common/Config/CommonConfig'

import * as responseCacheContext from 'common/ResponseCacheContext'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'

"use strict";
/**
 * 专业库---左边选择---专业类别(哲学类  经济学类)
 */
interface MajorCategoriesProps extends React.Props<MajorCategories> {
    title:string,
    majorLibState?: any,
    actions?: any
}
interface MajorCategoriesState {
    scaleName: string
}

class MajorCategories extends React.Component<MajorCategoriesProps, MajorCategoriesState> {
    constructor(props) {
        super(props);
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
    };
    //li点击事件 parentID【直接点击专业类别，让其所属的学科门类选中对应的门类】
    showActive(e){
        var parentID = e.currentTarget.getAttribute("data-parentid");
        var chosenSubjCategoriesID =this.props.majorLibState.toJS().majorlib_subj_categories.majorCategoryID;
        if(parentID!=chosenSubjCategoriesID){
            var majorCategoryMap = {};
            majorCategoryMap["majorCategoryID"] = parentID;
            majorCategoryMap["majorCategoryName"] = "";
            this.props.actions.mergeSubjCategories({majorlib_subj_categories: majorCategoryMap});
        }

        var map = {};
        map["majorMLID"] = e.currentTarget.id;
        map["majorMLName"] = e.currentTarget.text;
        this.props.actions.mergeSubjCategories({majorlib_major_categories: map});
        this.props.actions.mergeMajorSearchVal({majorlib_search_value: ""});
        this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowList});//默认显示majorList
        $("#searchInput").val("");
    }

    //获取专业类别list
    getMajorCategoriesList(){
        var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_MAJORLIB_MAJORLIB).result;
        var chosenSubjClassificationID = this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID; //本科--专科
        var chosenSubjCategoriesID = this.props.majorLibState.toJS().majorlib_subj_categories.majorCategoryID;
        var list = [];
        if(isEmptyObject(chosenSubjCategoriesID)){
            var majorCategoryList = responseData.majorType2CategoryMap[chosenSubjClassificationID];
            for(let items of majorCategoryList){
                var majorCategoryID = items.majorCategoryID;
                var majorCategory2MLList = responseData.majorCategory2MLMap[majorCategoryID];
                for(let item of majorCategory2MLList ){
                    item["parentID"] = majorCategoryID;
                    list.push(item);
                }
            }
        }else{
            list = responseData.majorCategory2MLMap[chosenSubjCategoriesID];
        }
        return list;
    }

    render() {
        var this_ = this;
        var chosen =this.props.majorLibState.toJSON().majorlib_major_categories;
        var parentID = this.props.majorLibState.toJSON().majorlib_subj_categories.majorCategoryID;
        var majorCategoriesList = this.getMajorCategoriesList();
        return (
            <div className="profession-screen-single block-box-shadows am-cf">
                <h3 className="profession-screen-title">{this.props.title}</h3>
                <ul className="profession-screen-content">
                    {majorCategoriesList.map(function(major, index){
                        var parentIDItem = isEmptyObject(major.parentID)?parentID:major.parentID;
                        var activeClassName = chosen.majorMLID == major.majorMLID?"active":"";
                            return <li  key={index} className={activeClassName} onClick={this_.showActive}  data-parentID={parentIDItem}  id={major.majorMLID} >{major.majorMLName}</li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}
export = connect(state => ({
    majorLibState: state.majorLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
    mergeMajorCategories: bindActionCreators(ItemsActions.mergeMajorCategories, dispatch),
}))(MajorCategories)

