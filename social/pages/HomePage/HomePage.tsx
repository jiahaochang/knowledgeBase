import * as React from 'react'
import { withRouter } from 'react-router'
import { Row, Col,Icon } from 'antd';
import HomePageBasicInfo = require('./Component/HomePageBasicInfo')
import HomePageNavList = require('./Component/HomePageNavList')
import HomePageActivities = require('./Component/HomePageActivities')
import HeadSearchBox = require('../../common/Component/HeadSearchBox');
import SearchBox = require('../../common/Component/SearchBox');
import HomePageSearchResult = require('./Component/HomePageSearchResult')
import {isEmptyObject} from 'common/commonFunc'
import * as responseCacheContext from 'common/ResponseCacheContext'
import * as ajaxUtil from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
"use strict";
interface HomePageProps extends React.Props<HomePage> {
    router: any;
}

interface HomePageState {
    searchInput?: string,
    showSearchResult?:any,
}
const replyText = <span>回复</span>;
const likeText = <span>点赞</span>;
class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props) {
        super(props);
        this.state = {
            showSearchResult:false,
            searchInput:""
        }
        this.searchWithInput = this.searchWithInput.bind(this);
    }

    searchWithInput(val) {
        var postData = {keyword: val,};
        this.setState({
            showSearchResult:true,
            searchInput:val
        })
    }

    componentWillMount(){
        var this_ = this;
        this_.setState({
            showSearchResult:false,
            searchInput:""
        })
        var responseData = ajaxUtil.getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_RESULTINTRO).result;
    }

    render() {

        var showSearchResult = this.state.showSearchResult;
        var searchKey = this.state.searchInput;

        return (

            <div className="main-container">
                { (!showSearchResult) &&
                    <div>
                        <Row>
                            <Col span={20} offset={'3'}>
                                <div align="center"><img src="./vendor/images/logo.png" height="370" width="370"/></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={20} >
                                <HeadSearchBox  title="输入搜索关键词" searchCallBack={this.searchWithInput} />
                            </Col>
                        </Row>
                    </div>
                }
                { (showSearchResult) &&
                    <div>
                        <HomePageSearchResult searchKey={searchKey}/>
                    </div>
                }
            </div>

        )
    }
}

export = withRouter(HomePage)


