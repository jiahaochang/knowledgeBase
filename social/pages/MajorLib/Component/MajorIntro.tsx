import * as React from 'react'
import * as ItemsActions from '../../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col,Icon,Button,Tabs } from 'antd';
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
import MajorIntroRank = require('./MajorIntroRank')
"use strict";
import {changeArrayForNewGroup} from "../../../common/commonFunc";
import {majorRankDefaultCount,majorShowList} from 'common/Config/CommonConfig'

import {isEmptyObject} from 'common/commonFunc'
//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as actionTypes from 'actions/MajorLib/MajorLibActionTypes'

/**
 * 专业库---显示专业列表
 */
interface MajorIntroProps extends React.Props<MajorIntro> {
    subMajorML:any,
    majorLibState?: any,
    actions?: any
}
interface MajorIntroState {
}

const TabPane = Tabs.TabPane;
class MajorIntro extends React.Component<MajorIntroProps, MajorIntroState> {
    constructor(props) {
        super(props);
        this.state= {

        };
        this.goBackToMajorLib = this.goBackToMajorLib.bind(this);
    }

    goBackToMajorLib(){
        this.props.actions.mergeMajorPageShowWho({majorlib_major_page_show: majorShowList});//显示majorShowList；majorShowList = "majorResult"
                                                //majorlib_major_page_show:""   当前 显示专业详情 还是 显示专业列表  intro/majorResult

    }

    //数组按 introductionType 分组（用来处理专业排名）
    changeArrayToMapGroupWithIntroductionType(data){
        var groupMap = {};
        for(let item of data){
            var id = item.introductionType;
            if(isEmptyObject(groupMap[id])){
                var list = [];
                list.push(item);
                groupMap[id] = list;
            }else{
                groupMap[id].push(item);
            }
        }
        return groupMap;
    }

   getMajorIntro(){
       var this_ = this;
       var queryObj = {
           majorMLID:this.props.subMajorML.subMajorMLID,
           majorType:this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID
       };
       var introductions = getDataByActionIDWithQuery(actionTypes.GET_MAJORLIB_MAJORDETAIL,queryObj).result.introductions;
       //getDataByActionIDWithQuery 同步带参请求
       var map = {};
       map["introductionKey"] = "医案编号";
       map["introductionValue"] = this.props.subMajorML.subMajorMLID;
       map["introductionGender"] = this.props.subMajorML.introductionAge;
       //map["introductionGender"] = this.props.subMajorML.gender;
       map["introductionType"] = "0";
       introductions.unshift(map);
       var groupMap = this.changeArrayToMapGroupWithIntroductionType(introductions);
       var rowLists = [],tabLists = [];
       for(var key in groupMap){
          if(key!="3" && key!="4"){
              if($.isArray(groupMap[key])){
                  for(let item of groupMap[key]){
                      rowLists.push(item);
                  }
              }else{
                  rowLists.push(groupMap[key]);
              }

          }else{
              if($.isArray(groupMap[key])){
                  for(let item of groupMap[key]){
                      tabLists.push(item);
                  }
              }else{
                  tabLists.push(groupMap[key]);
              }

          }
       }
       var map = {};
       map["row"] = rowLists;
       map["tab"] = tabLists;
       return map;

   }

    render() {
        var this_ = this;
        var dataMap = this.getMajorIntro();
        return (
            <div className="blueBack am-margin-top-lg">
                <CardTitleWithLine  title={this.props.subMajorML.subMajorMLName}  rightText={<Button type="primary" onClick={this.goBackToMajorLib} style={{borderRadius:"0px"}}><Icon type="left" />返回</Button>}/>
                {/*学科名和返回键*/}
                <Row className="am-margin-top">
                    {dataMap["row"].map(function(item, index){
                            return (
                                //<Col span={8} key={index} >{item.introductionKey}：{item.introductionValue}</Col>
                            <Col span={8} key={index} >{item.introductionKey}：{item.introductionValue}</Col>
                            )
                        }
                    )}
                </Row>
                <div className="card-container card-container-grayLine am-margin-top">
                    <Tabs type="card">
                        {dataMap["tab"].map(function(item, index){
                                var content =  <div >{item.introductionValue}</div>;
                            {/*
                                if(item.introductionType == "4"){
                                    var list = changeArrayForNewGroup(item.introductionValue,majorRankDefaultCount);
                                    content = <MajorIntroRank rankList={list}  />
                                }
                                */}
                                return (
                                    <TabPane tab={item.introductionKey} key={index}>
                                        {content}
                                    </TabPane>
                                )

                            }
                        )}
                    </Tabs>

                </div>
                
            </div>

        )
    }
}
export = connect(state => ({
    majorLibState: state.majorLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(MajorIntro)

