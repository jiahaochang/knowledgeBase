import * as React from 'react'

"use strict";

import RankState = require('../../common/Component/RankState')
import {navigate} from "../../common/pageUtil";
import {QualityCategoryIDInfoMap} from "../../common/Config/HomePageConfig";
import {GET_STUDENT_RANKSTATE, GET_STUDENT_SUBJECTCHOICESTATE} from "../../actions/HomePage/HomePageActionTypes";
import {getDataByActionIDWithQuery, getDataByActionIDWithQueryAsync} from "../../common/ajaxUtil";
import {getTermIDFromStorage} from "../../common/storageUtil";
import SubjectChoice = require("./Component/SubjectChoice");
import {Affix} from "antd";
import CollapsableCard = require("../../common/Component/CollapsableCard");
import PersonalComprehensiveQualityRecord = require("./Component/PersonalComprehensiveQualityRecord");
import CardTitleWithLine = require("../../common/Component/CardTitleWithLine");
import StudentRankState = require("../../common/Component/StudentRankState")
import Impression = require("./Component/Impression");
import PersonalLatestVisitor = require('./Component/PersonalLatestVisitor')
import StudentOtherPersonalBasicInfo = require("../../common/Component/StudentOtherPersonalBasicInfo");
import CardTabs = require("../../common/Component/CardTabs");
var Scrollspy = require('react-scrollspy').Scrollspy;

interface OtherPersonalPageProps extends React.Props<OtherPersonalPage> {
    location?:any
}

interface OtherPersonalPageState {
    otherUserID?: string,
    qualityCategories?: Array<any>,
    ranks?: any
    subjects?: Array<any>
}

/**
 * 别人的个人页面
 */
class OtherPersonalPage extends React.Component<OtherPersonalPageProps, OtherPersonalPageState> {
    constructor(props) {
        super(props);
        this.state = {
            qualityCategories:[],
            ranks:[],
            subjects:[],
            otherUserID:""
        }
    }

    componentWillMount(){
        var otherUserID = this.props.location.query.UserID;
        var this_ = this;

        var currentTermID = getTermIDFromStorage();
        //todo 获取学校有的9个模块配置
        getDataByActionIDWithQuery(GET_STUDENT_RANKSTATE,{termID:1},function (response) {
            this_.setState({
                qualityCategories: ['electiveCourse','campusActivities','offCampusPractice','studentOrgan','researchLearning','serveAsPosition','mySpecialty','honoraryTitle']
            })
        });

        this.setState({
            otherUserID
        });

        getDataByActionIDWithQueryAsync(GET_STUDENT_RANKSTATE,
            {
                termID: currentTermID,
                targetUserID: otherUserID
            },
            function (response) {
                this_.setState({
                    ranks: response.result
                })
            }
        );

        getDataByActionIDWithQueryAsync(GET_STUDENT_SUBJECTCHOICESTATE,
            {
                termID: currentTermID,
                targetUserID: otherUserID
            },
            function (response) {
                this_.setState({
                    subjects: response.result.subjectChoiceResult.chosenSubjects
                })
            }
        );
    }

    render() {
        var qualityCategories = this.state.qualityCategories;
        var scrollItem = this.state.qualityCategories;
        var subjects = this.state.subjects;
        var ranks = this.state.ranks;
        var currentTerm = getTermIDFromStorage();
        var subTab = subjects && [
            {tabName:"我的7选3结果",tabContent:<SubjectChoice subjects={subjects}/>},
        ];
        return (
            <div className="main-container am-margin-top">
                <div className="col3-withLeftTab-leftTab ">
                    <Affix offsetTop={120}>
                        <div className="fixed-nav-btnList index-fixed" onClick={navigate} >
                            <Scrollspy items={ scrollItem } currentClassName="active" >
                                {
                                    qualityCategories.map(function (item, index) {
                                        return <li key={index}><a href={item} >{QualityCategoryIDInfoMap[item].displayName}</a></li>
                                    })
                                }
                            </Scrollspy>
                        </div>
                    </Affix>
                </div>
                <div className="col3-withLeftTab-middleContext">
                    <StudentOtherPersonalBasicInfo targetUserID={this.state.otherUserID}/>
                    <div className="padding-0 am-margin-top" id="subjectChoice">
                        <CardTabs tabs={subTab} />
                    </div>

                    <CollapsableCard className="blueBack am-margin-bottom"  titleWithClick={<CardTitleWithLine title ="学期综合素质记录" rightText="积分：222" />}
                                     collapsableElement={ <PersonalComprehensiveQualityRecord  disableEdit={true}/>}
                    />
                </div>
                <div className="col3-withLeftTab-rightPanel">
                    {
                        !!ranks &&
                        <StudentRankState className="am-margin-bottom" grownScore={ranks.integralScore}  classRank={ranks.rankInClass}  schoolRank={ranks.rankInSchool}  showClickIcon={false} selectShow={false}/>
                    }
                    <Impression currentStudentID={this.state.otherUserID}/>
                    <PersonalLatestVisitor style={{marginTop:"25px"}} targetUserID={this.state.otherUserID}/>
                </div>

            </div>
        )
    }
}

export = OtherPersonalPage