import * as React from 'react'
import { Row, Col,Tabs } from 'antd';
import  CollegeIntroRequireTable = require('./Component/CollegeIntroRequireTable');
import  CollegeBatchResult = require('./Component/CollegeBatchResult');
import {getDataByActionIDWithQuery} from "../../common/ajaxUtil"
import * as actionTypes from '../../actions/CollegeLib/CollegeLibActionTypes'
"use strict";

interface CollegeIntroRouteProps extends React.Props<CollegeIntro> {
    location?:any

}
/**
 * 院校库---院校介绍
 */
const TabPane = Tabs.TabPane;
class CollegeIntro extends React.Component<CollegeIntroRouteProps, {}> {
    constructor(props) {
        super(props);

    }

    static defaultProps = {
    };


    getCollegeDetail(){
        var postData = this.props.location.query;
        var responseData = getDataByActionIDWithQuery(actionTypes.GET_COLLEGELIB_COLLEGEDETAIL, postData).result.introList;
        var map = {};
        for (let item of responseData){

            var id = item.collegeInfo.collegeID;
            map[id] = {};
            map[id]["collegeInfo"] = item.collegeInfo;
        }
        return map[postData.collegeID];
    }


    render() {

        var college = this.getCollegeDetail();
        var collegeInfo = college.collegeInfo;
        var introduction = collegeInfo.introduction;

        return (
            <div className="main-container" style={{padding:"0px"}}>
                <div className="block-box-shadows" style={{marginTop:"2.4rem"}}>
                    <div className="school-intro-gray">
                        <img src={collegeInfo.image} width="90" height="100" className="pull-left"/>
                        <div className="rightText">
                            <div className="line-one">
                                <h3>{collegeInfo.medicinalMaterialName}</h3>
                                {/*collegeInfo.collegeLevel.map(function(level, index){
                                        return <div className="school-level" key={index}>{level.collegeLevelName}</div>
                                    }
                                )*/}
                            </div>
                            <div className="line-two">
                                <span>{collegeInfo.EnglishName}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <Row  className="block-box-shadows am-margin-top-lg">
                    <Col span={16}>
                        <div className="card-container">
                            <Tabs type="card">
                                {introduction.map(function(item, index){
                                    var component = null;
                                    if(item.introductionID == "clinicalApplication"){
                                        component = <div className="school-intro-simple">{item.introductionValue}</div>;
                                    }else if(item.introductionID == "examplesOfPrescriptions"){
                                        component = <div className="school-intro-simple">{item.introductionValue}</div>;
                                    }else if(item.introductionID == "effect"){
                                        component = <div className="school-intro-simple">{item.introductionValue}</div>;
                                    }else if(item.introductionID == "medicinalPart"){
                                        component = <div className="school-intro-simple">{item.introductionValue}</div>;
                                    }else if(item.introductionID == "dosage"){
                                        component = <div className="school-intro-simple">{item.introductionValue}</div>;
                                    }

                                    return <TabPane tab={item.introductionKey} key={index+1}>{component}</TabPane>
                                    }
                                )}
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={8} style={{paddingLeft:"40px"}}>
                        <div className="school-intro-rightBox">
                            <img src={collegeInfo.image}/>
                            <h3 className="college-name">{collegeInfo.medicinalMaterialName}</h3>
                            <div className="intro">
                                <Row>
                                    <Col span={12}>类别</Col>
                                    <Col span={12}>中药</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>隶属于</Col>
                                    <Col span={12}>{collegeInfo.belongTo}</Col>
                                </Row>
                                <Row>
                                    <Col span={12}>处方用命</Col>
                                    <Col span={12}>{collegeInfo.chufangName}</Col>
                                </Row>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}
export = CollegeIntro
