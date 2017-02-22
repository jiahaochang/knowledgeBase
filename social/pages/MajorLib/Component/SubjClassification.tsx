import * as React from 'react'
import * as ItemsActions from '../../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {majorShowIntro,majorShowList} from 'common/Config/CommonConfig'
import * as responseCacheContext from 'common/ResponseCacheContext'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'

"use strict";
/**
 * 专业库---左边选择---学科类别(专科  本科)
 */
interface SubjClassificationProps extends React.Props<SubjClassification> {
    title:string,
    majorLibState?: any,
    actions?: any
}
interface SubjClassificationState {
    scaleName: string
}

class SubjClassification extends React.Component<SubjClassificationProps, SubjClassificationState> {
    constructor(props) {
        super(props);
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
    };
    //li点击事件  将学科门类、学科类别状态树上的value清空
    showActive(e){
        var map = {};
        map["majorTypeID"] = e.currentTarget.id;
        map["majorTypeName"] = e.currentTarget.text;
        this.props.actions.mergeSubjClassification({majorlib_subj_classification: map});
        this.props.actions.mergeSubjCategories({majorlib_subj_categories: {}});
        this.props.actions.mergeMajorCategories({majorlib_major_categories: {}});
        this.props.actions.mergeMajorSearchVal({majorlib_search_value: ""});
        this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowList});//默认显示majorList
        $("#searchInput").val("");
    }

    //获取学科类别list
    getSubjClassificationList(){
        var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_MAJORLIB_MAJORLIB);
        return responseData.result.majorType
    }

    render() {
        var this_ = this;
        var majorTypeList = this.getSubjClassificationList();
        var chosen = this.props.majorLibState.toJS().majorlib_subj_classification;
        return (
            <div className="profession-screen-single block-box-shadows am-cf">
                <h3 className="profession-screen-title">{this.props.title}</h3>
                <ul className="profession-screen-content">
                    {majorTypeList.map(function(major, index){
                        var activeClassName = chosen.majorTypeID == major.majorTypeID?"active":"";
                            return <li  key={index} className={activeClassName} onClick={this_.showActive} id={major.majorTypeID} >{major.majorTypeName}</li>
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
    mergeSubjClassification: bindActionCreators(ItemsActions.mergeSubjClassification, dispatch),
}))(SubjClassification)

