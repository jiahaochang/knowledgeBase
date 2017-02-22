import * as React from 'react'
import { Row, Col } from 'antd';
import * as ItemsActions from '../../actions/CollegeLib/CollegeLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getDataFromContextByActionID} from "../../common/ajaxUtil"
import * as responseCacheContext from '../../common/ResponseCacheContext'
import * as actionTypes from '../../actions/CollegeLib/CollegeLibActionTypes'

import SearchBox = require('../../common/Component/SearchBox');
import CardTitleWithLine = require('../../common/Component/CardTitleWithLine');
import  CollegeResult = require('./Component/CollegeResult');
import  SchoolConditionOptions = require('./Component/CollegeConditionOptions');
import {defaultCurrentPage} from 'common/Config/CommonConfig'
import {getSearchConditionFromStateTree} from './CollegeLibUtil'
"use strict";

interface CollegeLibRouteProps extends React.Props<CollegeLib> {
    collegeLibState: any,
    actions: any
}
interface CollegeLibState {
    conditions:any
}
/**
 * 院校库
 */
class CollegeLib extends React.Component<CollegeLibRouteProps, CollegeLibState> {
    constructor(props) {
        super(props);
        this.searchWithInput = this.searchWithInput.bind(this);
    }

    //搜索框搜索院校列表
    searchWithInput(val){
        this.props.actions.mergeCollegeOptionsInput({collegeLib_searchBox_input:val});
        this.props.actions.mergeCurrentPage({collegeLib_currentPage:defaultCurrentPage});
        var postData = getSearchConditionFromStateTree(this.props.collegeLibState.toJS(),"keyword",val);
        this.props.actions.getCollegeResult(postData);
       
    }

    static defaultProps = {
    };

    componentWillMount(){
        //左边--选择条件
        var conditions = getDataFromContextByActionID(responseCacheContext.getResponseCache(),actionTypes.GET_COLLEGELIB_CONDITIONS).result;
        this.setState({
            conditions
        })
    }


    render() {



        return (
            <div className="main-container">
                <Row>
                    <Col span={17}>
                        <div className="mlr20">
                            <div className="block-box-shadows" style={{marginBottom:"40px"}} >
                                <SearchBox  title="输入药材关键词"  searchCallBack={this.searchWithInput} />
                            </div>
                            <div className="block-box-shadows" style={{paddingBottom:"20px"}}>
                                <div className="blueBack mtb20">
                                    <CardTitleWithLine title="药材列表"/>
                                    <CollegeResult />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className="school-lib-right">
                            <div className="profession-screen-single">
                                <h3 className="profession-screen-title">药材类别</h3>
                                <div className="condition-list">
                                    <SchoolConditionOptions optionsFlag="province" options={this.state.conditions.province} />
                                    
                                    <SchoolConditionOptions optionsFlag="collegeProp" options={this.state.conditions.collegeProp} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export = connect(state => ({
    collegeLibState: state.collegeLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(CollegeLib)
