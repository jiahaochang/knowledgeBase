import * as React from 'react'
import * as ItemsActions from '../../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as responseCacheContext from 'common/ResponseCacheContext'
import {majorShowList} from 'common/Config/CommonConfig'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'
"use strict";
/**
 * 专业库---左边选择---学科门类(哲学  经济学)
 */
interface SubjCategoriesProps extends React.Props<SubjCategories> {
    title:string,
    majorLibState?: any,
    actions?: any
}
interface SubjCategoriesState {
    scaleName: string
}

class SubjCategories extends React.Component<SubjCategoriesProps, SubjCategoriesState> {
    constructor(props) {
        super(props);
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
    };
    //li点击事件
    showActive(e){
        var map = {};
        map["majorCategoryID"] = e.currentTarget.id;
        map["majorCategoryName"] = e.currentTarget.text;
        this.props.actions.mergeSubjCategories({majorlib_subj_categories: map});
        this.props.actions.mergeMajorCategories({majorlib_major_categories: {}});
        this.props.actions.mergeMajorSearchVal({majorlib_search_value: ""});
        this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowList});//默认显示majorList
        $("#searchInput").val("");
    }

    //获取学科类别list
    getSubjCategoryList(){
        var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_MAJORLIB_MAJORLIB);
        var chosenSubjClassificationID = this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID;
        return responseData.result.majorType2CategoryMap[chosenSubjClassificationID];
    }

    render() {
        var this_ = this;
        var chosen =this.props.majorLibState.toJS().majorlib_subj_categories;
        var subjCategoryList = this.getSubjCategoryList();
        return (
            <div className="profession-screen-single block-box-shadows am-cf">
                <h3 className="profession-screen-title">{this.props.title}</h3>
                <ul className="profession-screen-content">
                    {subjCategoryList.map(function(major, index){
                        var activeClassName = chosen.majorCategoryID == major.majorCategoryID?"active":"";
                            return <li  key={index} className={activeClassName} onClick={this_.showActive} id={major.majorCategoryID} >{major.majorCategoryName}</li>
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
    mergeSubjCategories: bindActionCreators(ItemsActions.mergeSubjCategories, dispatch),
}))(SubjCategories)

