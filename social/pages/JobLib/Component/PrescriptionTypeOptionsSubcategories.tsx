import * as React from 'react'
import * as ItemsActions from '../../../actions/JobLib/JobLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col,Icon } from 'antd';
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
import  PrescriptionIntroSinglePart = require('./PrescriptionIntroSinglePart');
import {removeRepeatObjectElementInArray} from 'common/commonFunc'
"use strict";

import {getDataByActionIDWithQuery} from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/JobLib/JobLibActionTypes'

import * as context from '../JobLibContext'
/**
 * 方剂库---方剂小类
 */
interface JobOptionsMLProps extends React.Props<JobOptionsML> {
    options:Array<any>,
    jobLibState?: any,
    actions?: any,
    searchKeyWord?:string,
    currentSubJobCategoryID?: string,
    refreshCurrentSubJobCategoryID?: Function
}
interface JobOptionsMLState {
}

class JobOptionsML extends React.Component<JobOptionsMLProps, JobOptionsMLState> {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
        searchKeyWord:"",
        currentSubJobCategoryID:""
    };

    //条件点击事件
    showActive(e){
        var obj = $(e.currentTarget);
        if(!obj.hasClass("active")){
            obj.addClass("active").siblings().removeClass("active");
            this.props.refreshCurrentSubJobCategoryID(e);
        }
    }

    componentWillMount(){

    }

    render() {
        var this_ = this;
        // 获取搜索输入的字符串
        // @param jobSearchInput 搜索关键字
        var jobSearchInput = this.props.searchKeyWord;
        // 如果没有输入字符进行搜索，则显示出当前方剂大类里面的药剂类型
        if (jobSearchInput == "") {
            var title = "方剂类" + "相关药剂";
            var currentJobCategory = this.props.jobLibState.toJS().currentJobOption;
            var subJobCategories = [];
            if (currentJobCategory.jobCategoryID) {
                title = currentJobCategory.jobCategoryName + "相关药剂";
                subJobCategories = context.getjobLibResponseData().subJobCategoryMap[currentJobCategory.jobCategoryID];
            }
            // 获取方剂介绍所对应的方剂类型的id
            // @param subJobCategoryID 选中状态的方剂类型的ID
            var subJobCategoryID = "";
            //如果点击选中了某个方剂，则获取该方剂的ID
            if (this.props.currentSubJobCategoryID) {
                subJobCategoryID = this.props.currentSubJobCategoryID;
            } else if (subJobCategories.length !== 0) {//如果没有点击选中某个方剂，则获取第一个方剂的ID
                subJobCategoryID = subJobCategories[0].subJobCategoryID;
            }
        }else{
            // 如果输入字符进行搜索，则显示出与输入字符串相匹配的方剂类型
            var title = "搜索结果";
            var subJobCategories = [],subJobCategoriesTemp = [];
            var subJobCategoryMap = context.getjobLibResponseData().subJobCategoryMap;
            // 根据输入的关键词匹配所有方剂类型名称，并加入subJobCategories数组
            for (var key in subJobCategoryMap) {
                for(var i=0;i<subJobCategoryMap[key].length;i++){
                    if(subJobCategoryMap[key][i]['subJobCategoryName'].indexOf(jobSearchInput) != -1){
                        subJobCategoriesTemp.push(subJobCategoryMap[key][i]);
                    }
                }
            }
            //数组去重
            subJobCategories = removeRepeatObjectElementInArray(subJobCategoriesTemp,"subJobCategoryID");
            // 如果搜索后没有匹配结果，则显示“暂无匹配方剂”
            if (subJobCategories.length == 0){
                subJobCategories.push({
                    subJobCategoryID:"-1",
                    subJobCategoryName:"暂无匹配方剂"
                });
            }
            // 获取方剂介绍所对应的方剂类型的id
            // @param subJobCategoryID 选中状态的方剂类型的ID
            var subJobCategoryID = "";
            //如果点击选中了某个方剂，则获取该方剂的ID
            if (this.props.currentSubJobCategoryID) {
                subJobCategoryID = this.props.currentSubJobCategoryID;
            } else {//如果没有点击选中某个方剂，则获取第一个方剂的ID
                subJobCategoryID = subJobCategories[0].subJobCategoryID;
            }
        }

        return (
            <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"20px 20px 30px"}}>
                <CardTitleWithLine title={title}/>
                <div className="careerML-options">
                    {
                        subJobCategories.map(function(option, index){
                            if(option.subJobCategoryID == subJobCategoryID){
                                //如果该方剂ID与点击选中的方剂ID相同，则显示为active状态
                                var activeClassName = "active";
                            }else{
                                var activeClassName = "";
                            }
                            return (
                                <a key={index} className={activeClassName} onClick={this_.showActive} id={option.subJobCategoryID} >{option.subJobCategoryName}</a>
                            )
                        })
                    }
                </div>

                <div className="am-margin-top-lg">
                    <CardTitleWithLine title="方剂介绍"/>
                    {
                        subJobCategoryID &&
                        <PrescriptionIntroSinglePart subJobCategoryID={subJobCategoryID}/>
                    }
                </div>
            </div>
        )
    }
}

export = connect(state => ({
    jobLibState: state.jobLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(JobOptionsML)

