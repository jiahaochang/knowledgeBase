import * as React from 'react'
import { Row, Col,Icon,Button } from 'antd';
import * as ItemsActions from '../../actions/JobLib/JobLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SearchBox = require('../../common/Component/SearchBox');
import  PrescriptionTypeOptions = require('./Component/PrescriptionTypeOptions');
import  PrescriptionTypeOptionsSubcategories = require('./Component/PrescriptionTypeOptionsSubcategories');
"use strict";

import {getDataByActionID} from '../../common/ajaxUtil'
import * as ActionTypes from '../../actions/JobLib/JobLibActionTypes'
import * as context from './JobLibContext'

interface JobLibProps extends React.Props<JobLib> {
    jobLibState?: any,
    actions?: any
}

interface JobLibRouteState {
    searchKeyWord?: string,
    currentSubJobCategoryID?: string
}
/**
 * 院校库
 */
class JobLib extends React.Component<JobLibProps, JobLibRouteState> {
    constructor(props) {
        super(props);
        this.searchWithInput = this.searchWithInput.bind(this);
    }

    //搜索框搜索院校列表
    searchWithInput(val){
        //this.props.actions.searchJobType({jobLibSearchboxInput:val});
        this.setState({searchKeyWord:val});
        this.refreshCurrentSubJobCategoryID("");
    }

    //点击相关职业的关键词触发事件
    refreshCurrentSubJobCategoryID(e){
        if(e===""){
            this.setState({currentSubJobCategoryID:""});
        }else{
            this.setState({currentSubJobCategoryID:e.currentTarget.id});
        }
    }

    //点击搜索框右边“共有职位506种”触发事件,返回未搜索状态
    rightSearch(){
        this.setState({searchKeyWord: ""});
        this.refreshCurrentSubJobCategoryID("");
    }
    
    componentWillMount(){
        var jobLibResponse = getDataByActionID(ActionTypes.GET_JOBLIB_JOBLIB);
        context.setjobLibResponseData(jobLibResponse.result);
        this.setState({searchKeyWord:""});
    }

    static defaultProps = {
    };

    render() {
        var jobCategory = context.getjobLibResponseData().jobCategory;
        var jobCount = "共有方剂"+context.getjobLibResponseData().jobCount+"种";
        return (
            <div className="main-container">
                <Row>
                    <Col span={17}>
                        <div className="mlr20">
                            <div className="block-box-shadows">
                                <SearchBox  title="输入方剂关键词"  searchCallBack={this.searchWithInput} rightContent={[jobCount]} rightTextCallBack={this.rightSearch.bind(this)} />
                            </div>
                            <PrescriptionTypeOptionsSubcategories  searchKeyWord={this.state.searchKeyWord} currentSubJobCategoryID={this.state.currentSubJobCategoryID} refreshCurrentSubJobCategoryID={this.refreshCurrentSubJobCategoryID.bind(this)}/>
                        </div>
                    </Col>
                    <Col span={7}>
                        <PrescriptionTypeOptions jobCategoryOptions={jobCategory} searchKeyWord={this.state.searchKeyWord} handleSearchWithInput={this.searchWithInput.bind(this)} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export = connect(state => ({
    jobLibState: state.jobLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(JobLib)
