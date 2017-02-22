import * as React from 'react'
import { withRouter } from 'react-router'

import StudentRankState = require('common/Component/StudentRankState');
import SubjectCard = require('./Component/SubjectCard');
import PersonalBasicInfo = require('../../common/Component/PersonalBasicInfo');
import  CardTitleWithLine = require('../../common/Component/CardTitleWithLine');
import CardTabs = require('../../common/Component/CardTabs');
import SubjectChoice = require('./Component/SubjectChoice');
import  MajorIntended = require('./Component/MajorIntended');
import  AssessCenterStatus = require('./Component/AssessCenterStatus');
import CollapsableCard = require('../../common/Component/CollapsableCard');
import CardWithTitleBox = require('../../common/Component/CardWithTitleBox');
import  CardHeaderWithAdd = require('../../common/Component/CardHeaderWithAdd');
import CardContentWithClickLikeAndComment = require('../../common/Component/CardContentWithClickLikeAndComment');
import PersonalComprehensiveQualityRecord = require('./Component/PersonalComprehensiveQualityRecord')
import PersonalTargetMatch = require('./Component/PersonalTargetMatch')
import PersonalLatestVisitor = require('./Component/PersonalLatestVisitor')
import SubjectInterest = require('./Component/SubjectInterest')
import SubjectAbility = require('./Component/SubjectAbility')
import PersonalTargetSet = require('./Component/PersonalTargetSet')
import PersonalAnalyzeMyself = require('./Component/PersonalAnalyzeMyself')

import { Affix  } from 'antd'
var Scrollspy = require('react-scrollspy').Scrollspy;
"use strict";
import BiMap = require("../../common/Collect/BiMap");
import ImpressionPersonal = require('./Component/ImpressionPersonal')
import ClassMateEvaluateList = require('../TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateList')
import {getTermIDFromStorage} from "common/storageUtil";

//调用API
import {getDataByActionIDWithQuery, getDataByActionIDWithQueryAsync} from "../../common/ajaxUtil"
import * as actionTypes from '../../actions/HomePage/HomePageActionTypes'
import {QualityCategoryIDInfoMap} from "../../common/Config/HomePageConfig";
import {navigate} from "../../common/pageUtil";

interface MyPersonalPageProps extends React.Props<MyPersonalPageProps> {
    router: any;
}

interface MyPersonalPageState {
    currentTerm?: string,
    ranks?:any,
    subjectsData?:any,
    assessData?: any,
    qualityCategories?: any
    targetSet?:any, //目标设定
    analyzeData?:any //自我剖析

}

/**
 * 个人首页
 * 状态：学期，当前选中的模块
 *  当前选中的模块可能从首页点击过来，从路由传递过来的
 */
class MyPersonalPage extends React.Component<MyPersonalPageProps, MyPersonalPageState> {
    constructor(props) {
        super(props);
        this.state = {
            currentTerm:getTermIDFromStorage()
        }
        this.goMIAssess = this.goMIAssess.bind(this);
        this.onTermChange = this.onTermChange.bind(this);
    }

    componentWillMount(){
        var currentTerm = this.state.currentTerm;
        this.setStateByTermID(currentTerm);
        var this_ = this;
    }

    setStateByTermID(currentTerm){
        var this_ = this;
        //todo 获取学校有的9个模块配置
        getDataByActionIDWithQuery(actionTypes.GET_STUDENT_RANKSTATE,{termID:currentTerm},function (response) {
            this_.setState({
                qualityCategories: ['electiveCourse','campusActivities','offCampusPractice','studentOrgan','researchLearning','serveAsPosition','mySpecialty','honoraryTitle']
            })
        });

        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_RANKSTATE,{termID:currentTerm},function (response) {
            this_.setState({
                ranks: response.result
            })
        });

        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_SUBJECTCHOICESTATE,{termID:currentTerm},function (response) {
            this_.setState({
                subjectsData: response.result
            })
        });
        //测试中心
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_CAREERSTATE,{termID:currentTerm},function(response){
            this_.setState({
                assessData: response.result
            })
        })
        //自我剖析  analyzeData
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_ANALYZEMYSELF,{termID:currentTerm},function(response){
            this_.setState({
                analyzeData: response.result
            })
        })

        //目标设定
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_TARGETSTATE,{termID:currentTerm},function(response){
            this_.setState({
                targetSet: response.result.target
            })
        })
    }

    goMIAssess(){
        var url = "/careerExploreAndTargetSet/TestMain";
        this.props.router.push(url);
    }

    onTermChange(termAfterChange){
        this.setStateByTermID(termAfterChange);
        this.setState({
            currentTerm: termAfterChange
        })
    }
    
    //左测导航click事件
    navigate(e){
        navigate(e);
    }

    render() {
        var currentTerm = this.state.currentTerm;
        var ranks = this.state.ranks;
        //7选3tab传值  7选3结果
        var subjectsData = this.state.subjectsData;
        var subjectsChoose = subjectsData && subjectsData.subjectChoiceResult.chosenSubjects;
        var subTab = subjectsData && subjectsChoose && [
            {tabName:"我的7选3结果",tabContent:<SubjectChoice subjects={subjectsChoose}/>},
            {tabName:"学科兴趣",tabContent:<SubjectInterest subjectInterest={subjectsData.subjectInterest} />},
            {tabName:"学科能力",tabContent:<SubjectAbility subjectAbility={subjectsData.subjectAbility} />},
            {tabName:"我的意向专业",tabContent:<MajorIntended subjectNames={subjectsData.chosenMajors}/>},
        ];
        //生涯探索与目标设定传值
        //1.测评中心
        var assessData = this.state.assessData;
        var tests = assessData && assessData.assessCenter.assessInfo;
        var analyzeMyself = this.state.analyzeData;
        var careerExploreTab = [
            {
                tabName:"测评中心",
                tabContent:<AssessCenterStatus tests={tests}/>
            },
            {
                tabName:"自我剖析",
                tabContent:<PersonalAnalyzeMyself currentTerm={currentTerm}  analyze={analyzeMyself} />
            },
        ];

        var targetSetTab = this.state.targetSet?[
            {
                tabName:"目标设定",
                tabContent:<PersonalTargetSet currentTerm={currentTerm} targets={this.state.targetSet}/>
            },
            {
                tabName:"升学目标匹配",
                tabContent:<PersonalTargetMatch />
            },
        ]:[];

        //综合素质：学业水平
        var learnContent = {title:"选修课",starCount:3,commentFlag:true,commentCount:15,addFlag:true,addText:"增加社团"}

        //获取学校配置内容的9项

        var qualityCategories = this.state.qualityCategories;


        var scrollItem = ['subjectChoice', 'careerExplore', 'goalSetting'];
        //'electiveCourse','campusActivities','offCampusPractice','studentOrgan','researchLearning','serveAsPosition','mySpecialty','honoraryTitle'

        Array.prototype.push.apply(scrollItem, qualityCategories);

        {/*<li><a href="electiveCourse" >选修课</a></li>
         <li><a href="campusActivities" >校内活动</a></li>
         <li><a href="offCampusPractice" >校外实践</a></li>
         <li><a href="studentOrgan" >学生社团</a></li>
         <li><a href="researchLearning" >研究性学习</a></li>
         <li><a href="serveAsPosition" >担任职务</a></li>
         <li><a href="mySpecialty" >我的特长</a></li>
         <li><a href="honoraryTitle" >荣誉称号</a></li>*/}

        var scrollSpy = !qualityCategories?(
            <Scrollspy items={ scrollItem } currentClassName="active" >
                <li><a href="subjectChoice" >我的7选3</a></li>
                <li><a href="careerExplore" >生涯探索</a></li>
                <li><a href="goalSetting" >目标设定</a></li>
            </Scrollspy>
        ):(
            <Scrollspy items={ scrollItem } currentClassName="active" >
                <li><a href="subjectChoice" >我的7选3</a></li>
                <li><a href="careerExplore" >生涯探索</a></li>
                <li><a href="goalSetting" >目标设定</a></li>
                {
                    qualityCategories.map(function (item, index) {
                        return <li key={index}><a href={item} >{QualityCategoryIDInfoMap[item].displayName}</a></li>
                    })
                }
            </Scrollspy>
        );
        return (
            <div className="main-container am-margin-top">
                <div className="col3-withLeftTab-leftTab ">
                    <Affix offsetTop={120}>
                        <div className="fixed-nav-btnList index-fixed" onClick={this.navigate} >
                            {scrollSpy}
                        </div>
                    </Affix>
                </div>
                <div className="col3-withLeftTab-middleContext">
                    <PersonalBasicInfo />
                    <div className="padding-0 am-margin-top" id="subjectChoice">
                        <CardTabs tabs={subTab} />
                    </div>

                    <div className="padding-0 am-margin-top" id="careerExplore">
                        <CardTabs tabs={careerExploreTab} />
                    </div>

                    <div className="padding-0 am-margin-top" id="goalSetting">
                        <CardTabs tabs={targetSetTab} />
                    </div>

                    <CollapsableCard className="blueBack am-margin-bottom"  titleWithClick={<CardTitleWithLine title ="学期综合素质记录" rightText="积分：222" />}
                                     collapsableElement={ <PersonalComprehensiveQualityRecord  />}
                    />
                </div>
                <div className="col3-withLeftTab-rightPanel">
                    {
                        !!ranks &&
                        <StudentRankState className="am-margin-bottom" currentTerm={this.state.currentTerm} onTermChange={this.onTermChange} grownScore={ranks.integralScore}  classRank={ranks.rankInClass}  schoolRank={ranks.rankInSchool}  />
                    }
                    <ImpressionPersonal />
                    <PersonalLatestVisitor style={{marginTop:"25px"}} />
                </div>

            </div>
        )
    }
}

export = withRouter(MyPersonalPage)


