import * as React from 'react'
import { Row, Col } from 'antd';
import * as ItemsActions from '../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SubjClassification = require('./Component/SubjClassification');
import SubjCategories = require('./Component/SubjCategories')
import MajorCategories = require('./Component/MajorCategories')

import SearchBox = require('../../common/Component/SearchBox');
import MajorIntro = require('./Component/MajorIntro');
import MajorResult = require('./Component/MajorResult')
import * as responseCacheContext from 'common/ResponseCacheContext'
import {majorShowIntro,majorShowList} from 'common/Config/CommonConfig'
import {isEmptyObject} from 'common/commonFunc'
//调用API
import {getDataFromContextByActionID} from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'

"use strict";

let undergraduateCount = 0; //本科专业个数
let undergraduateID = ""; //本科ID
let specialtyCount = 0;  //专科专业个数
let specialtyID = "";  //专科ID

interface MajorLibRouteProps extends React.Props<MajorLib> {
    actions?:any,
    majorLibState?: any   //渲染subComponent时的点击状态

}
interface majorLibRouteState {
    subMajorML?:any
}
/**
 * 专业库
 */
class MajorLib extends React.Component<MajorLibRouteProps, majorLibRouteState> {
    constructor(props) {
        super(props);
        this.state = {
            subMajorML:{}
        }
        this.searchWithInput = this.searchWithInput.bind(this);
        this.rightSearch = this.rightSearch.bind(this);
        this.showMajorDetail = this.showMajorDetail.bind(this);
    }
   //搜索框搜索专业列表
    searchWithInput(val){
        if(!isEmptyObject(val)){
            this.props.actions.mergeMajorSearchVal({majorlib_search_value: $.trim(val)});
            //置空右边搜索的三个叶子
            this.props.actions.mergeSubjCategories({majorlib_subj_categories: {}});
            this.props.actions.mergeMajorCategories({majorlib_major_categories: {}});
            this.props.actions.mergeMajorClickFlag({majorlib_major_clickflag: "search"});
            this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowList});//默认显示majorList
        }

    }

    //本科专业、专科专业蓝框点击显示专业列表
    rightSearch(text){
        var map = {};
        var majorTypeID = text.indexOf("本科")>-1  ?  undergraduateID  :  specialtyID;
        map["majorTypeID"] = majorTypeID;
        map["majorTypeName"] = text;
        this.props.actions.mergeSubjClassification({majorlib_subj_classification: map});
        //其他状态树 value 清空
        this.props.actions.mergeSubjCategories({majorlib_subj_categories: {}});
        this.props.actions.mergeMajorCategories({majorlib_major_categories: {}});
        this.props.actions.mergeMajorSearchVal({majorlib_search_value: ""});
        this.props.actions.mergeMajorClickFlag({majorlib_major_clickflag: ""});

    }

    //获取本科专业、专科专业信息
    getUnderGraduateAndSpecialtyInfo(data){
        //1.本科、专科 ID
        for(let item of data.majorType){
            var majorTypeName = item.majorTypeName;
            var majorTypeID = item.majorTypeID;
            if(majorTypeName.indexOf("本科")>-1){   //majorTypeName中搜索字符串“本科”出现的位置
                undergraduateID = majorTypeID;
            }else if(majorTypeName.indexOf("高职")>-1){
                specialtyID = majorTypeID;
            }
        }
        //2.获取本科、专科个数
        undergraduateCount = this.getUnderGraduateAndSpecialtyCount(data,undergraduateID);
        specialtyCount = this.getUnderGraduateAndSpecialtyCount(data,specialtyID);

    }

    //获取本科专业、专科专业个数
    getUnderGraduateAndSpecialtyCount(data,majorTypeID){

        var count = 0;
        var majorCategoryList = data.majorType2CategoryMap[majorTypeID];
        for(let items of majorCategoryList){
            var majorCategoryID = items.majorCategoryID;
            var majorCategory2MList = data.majorCategory2MLMap[majorCategoryID];
            for(let item of majorCategory2MList){
                var majorMLID = item.majorMLID;
                var length = data.majorML2SubMajorMLMap[majorMLID].length;
                count += length;
            }
        }
        return count;

    }

    componentWillMount(){
        var this_ = this;
        var responseData = getDataFromContextByActionID(responseCacheContext.getResponseCache(),  actionTypes.GET_MAJORLIB_MAJORLIB).result;
        /*从缓存中获取结果，如果缓存中没有，发起ajax，然后将结果放入缓存
         * 缓存的key 是actionID 如果queryObj不为空，将其序列化后，以下划线链接*/
        this.getUnderGraduateAndSpecialtyInfo(responseData);
        var defaultSubjClassification = responseData.majorType[0];
        this.props.actions.mergeSubjClassification({majorlib_subj_classification: defaultSubjClassification});

        this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowList});
        //majorlib_major_page_show: 当前显示专业详情/专业列表  intro/majorResult

    }

    //点击专业跳转到专业详情
    showMajorDetail(subMajorML){
        this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowIntro});//显示majorIntro
        this.setState({
            subMajorML:subMajorML,
        })
    }

    static defaultProps = {
    };

    render() {

        //var undergraduate = "本科专业"+undergraduateCount+"个";
        //var specialty = "专科专业"+specialtyCount+"个";
        var subComponent = this.props.majorLibState.toJS().majorlib_major_page_show == majorShowIntro?<MajorIntro  subMajorML={this.state.subMajorML}  />: <MajorResult  showDetail={this.showMajorDetail} />
        //var subComponent = <MajorIntro  subMajorML={this.state.subMajorML}  />



        return (
            <div className="main-container">
                <Row>
                    <Col span={20} style={{paddingRight:"20px"}}>

                        <div className="block-box-shadows">
                            {/*
                            <SearchBox  title="输入专业关键词" rightContent={[undergraduate,specialty]} searchCallBack={this.searchWithInput}  rightTextCallBack={this.rightSearch} />
                            */}
                            <SearchBox  title="输入医案关键词" searchCallBack={this.searchWithInput}   />
                        </div>
                        <div className="block-box-shadows" style={{marginTop:"40px"}}>
                            {subComponent}
                        </div>
                    </Col>
                    {/*
                    <Col span={6}>
                        <SubjClassification title="学科类别"/>
                        <SubjCategories title="学科门类" />
                        <MajorCategories title="专业类别" />
                    </Col>
                     */}
                </Row>

            </div>
        )
    }
}

export = connect(state => ({
    majorLibState: state.majorLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(MajorLib)
