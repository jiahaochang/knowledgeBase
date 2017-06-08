import * as React from 'react'
import * as ItemsActions from '../../../actions/HomePage/HomePageAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Icon,Card,Pagination, Row, Col} from 'antd'
import { withRouter } from 'react-router'
import {isEmptyObject} from 'common/commonFunc'

import * as responseCacheContext from 'common/ResponseCacheContext'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as ajaxUtil from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
//import {defaultPageSize} from 'common/Config/CommonConfig'
import SearchBox = require('../../../common/Component/SearchBox');
import SearchResultIntro = require('./SearchResultIntro')

"use strict";
let defaultCurrentPage = 1;
let defaultPageSize = 2;
/**
 *
 */
interface HomePageSearchResultProps extends React.Props<HomePageSearchResult> {
    //homePageState?: any,
    actions?: any,
    searchKey:string,
    homePageState?:any,
}
interface HomePageSearchResultState {
    searchResult:any,
    currentPage:any,
    //showIntroduction:any,
    //introductionMap:any,
}

class HomePageSearchResult extends React.Component<HomePageSearchResultProps, HomePageSearchResultState> {
    constructor(props) {
        super(props);
        this.state = {
            searchResult:{},
            currentPage:defaultCurrentPage,
            //introductionMap:{},
        }
        this.onChangePagination = this.onChangePagination.bind(this);
        this.searchWithInput = this.searchWithInput.bind(this);
        this.showDetail = this.showDetail.bind(this);
    }

    static defaultProps = {
    };

    componentWillMount(){
        var this_=this;
        var val = this.props.searchKey;
        var postData={searchKey:val};
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_HOMEPAGE_SEARCHRESULT, postData).result;
        this_.setState({
            currentPage:defaultCurrentPage,
            searchResult:responseData,
            //introductionMap:{},
        });
        this.props.actions.mergeShowIntroduction({showIntroduction:false});
    }

    //分页显示
    onChangePagination(page){
        var postData = this.props.searchKey;
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_HOMEPAGE_SEARCHRESULT, postData).result;
        this.setState({
            currentPage:page,
            searchResult:responseData,
            //introductionMap:{},
        })
    }

    searchWithInput(val) {
        var this_=this;
        var postData = val;
        postData={searchKey:val};
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_HOMEPAGE_SEARCHRESULT, postData).result;
        this_.setState({
            currentPage:defaultCurrentPage,
            searchResult:responseData,
            //introductionMap:{},
        });
    }

    showDetail(e){
        var this_=this;
        /*var postData = this.props.searchKey;
        var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_HOMEPAGE_SEARCHRESULT, postData).result;
        var map = {};
        map["searchResultID"] =
        this_.setState({
            currentPage:defaultCurrentPage,
            searchResult:responseData,
            //showIntroduction:true,
            introductionMap:map,
        });*/
        var ID = e.currentTarget.id;
        this.props.actions.mergeShowIntroductionID({showIntroductionID:ID});
        this.props.actions.mergeShowIntroduction({showIntroduction:true});
    }

    render() {
        var this_ = this;
        //var resultList = this.state.searchResult.searchResult;
        var resultList = this.state.searchResult;
        var ifShow = isEmptyObject( this.props.searchKey) || isEmptyObject(resultList)?"none":"block";
        var hasResult = true;
        var current = this.state.currentPage;
        var total = resultList.length;
        var showIntroduction = this.props.homePageState.toJS().showIntroduction;


        return (

            <div>
                {!showIntroduction &&
                <Row>
                    <Col span={18} style={{paddingRight:"20px"}}>

                        <div className="block-box-shadows">
                            <SearchBox title="输入关键词" searchCallBack={this.searchWithInput}/>
                        </div>
                        <div className="show-search-text" style={{display:ifShow,marginBottom:"20px"}}>以下是您的查询结果：</div>
                        {
                            isEmptyObject(resultList) &&
                            <div className="show-search-text am-text-center" style={{marginBottom:"20px"}}>
                                暂无匹配结果，请尝试其他关键词搜索吧
                                <Icon type="frown"/>
                            </div>
                        }
                        {
                            !isEmptyObject(resultList) &&
                            <div>
                                {resultList.map(function(result, index){
                                    if( ((current-1) *defaultPageSize-1) < index && index < (current*defaultPageSize) )
                                        {
                                            return (
                                            <div className="block-box-shadows" style={{marginTop:"10px"}}>
                                                <div className="profession-single2 am-cf" key={index}>
                                                    <div className="profession-title">{result.searchTypeName}</div>
                                                    {result.searchResultContent}
                                                    <ul className="profession-content">
                                                        <li onClick={this_.showDetail} id={result.searchResultID}
                                                            key={index}>{result.summary}</li>
                                                        {/*result.summary*/}
                                                    </ul>
                                                </div>
                                            </div>
                                            )
                                        }
                                    })}
                            </div>
                        }
                    </Col>
                </Row>
                }
                {
                    hasResult && !showIntroduction &&
                    <div className="am-margin-top-sm">
                        <Pagination current={current} onChange={this.onChangePagination} total={total}
                                    pageSize={defaultPageSize} showTotal={total => `共 ${total} 条`}/>
                    </div>
                }
                {
                    showIntroduction　&&
                    <SearchResultIntro />
                }
            </div>

        )
    }
}

export = withRouter(connect(state => ({
    homePageState: state.homePageState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(HomePageSearchResult))
