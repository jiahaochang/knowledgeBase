import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col,Icon,Button,Tabs } from 'antd';
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
import { withRouter } from 'react-router'
import {changeArrayForNewGroup} from "../../../common/commonFunc";
import {majorRankDefaultCount,majorShowList} from 'common/Config/CommonConfig'
import * as ItemsActions from '../../../actions/HomePage/HomePageAction'
import {isEmptyObject} from 'common/commonFunc'
//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as ajaxUtil from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
import * as responseCacheContext from 'common/ResponseCacheContext'

"use strict";
interface SearchResultIntroProps extends React.Props<SearchResultIntro> {
    actions?: any,
    //introID?:any,
    homePageState?:any,
}
interface SearchResultIntroState {
    introduction?:any,
}

const TabPane = Tabs.TabPane;
class SearchResultIntro extends React.Component<SearchResultIntroProps, SearchResultIntroState> {
    constructor(props) {
        super(props);
        this.state= {
            introduction:{},
        };
        this.goBack = this.goBack.bind(this);
    }

    componentWillMount(){
        //var postData = this.props.introID.searchResultID;
        var searchResultID = this.props.homePageState.toJS().showIntroductionID;
        var postData = {searchResultID:searchResultID};
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_RESULTINTRO, postData).result;
        //var responseData = ajaxUtil.getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_RESULTINTRO).result;
        this.setState({
            introduction:responseData,
        })
    }

    goBack(){
        this.props.actions.mergeShowIntroduction({showIntroduction:false});
    }

    render() {
        //var detail = this.props.introID;
        var introduction = this.state.introduction;
        return (
            <Col span={18} style={{paddingRight:"20px"}}>
                <div className="blueBack am-margin-top-lg block-box-shadows">
                    <CardTitleWithLine  title={introduction.searchTypeName}  rightText={<Button type="primary" onClick={this.goBack} style={{borderRadius:"0px"}}><Icon type="left" />返回</Button>}/>
                    <div className="block-box-shadows1" style={{marginTop:"10px"}}>
                            <div className="profession-single2 am-cf">
                                <div className="profession-title">{"名称"}</div>
                                <ul className="profession-content">
                                    {introduction.searchResultContent}
                                </ul>
                            </div>
                            <div className="profession-single2 am-cf">
                                <div className="profession-title">{"简介"}</div>
                                <ul className="profession-content">
                                    {introduction.summary}
                                </ul>
                            </div>
                            <div className="profession-single2 am-cf">
                                <div className="profession-title">{"详情"}</div>
                                <ul className="profession-content">
                                    {introduction.searchResultIntroduction}
                                </ul>
                            </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export = withRouter(connect(state => ({
    homePageState: state.homePageState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(SearchResultIntro))
