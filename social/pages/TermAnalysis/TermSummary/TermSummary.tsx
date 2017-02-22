import * as React from 'react'
import TextareaWithTitle = require('../../../common/Component/TextareaWithTitle')
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'

"use strict";
import {RoleEnum} from "common/Module/Role";
import {getTermIDFromStorage} from 'common/storageUtil'
interface TermSummaryProps extends React.Props<TermSummary> {
}

interface TermSummaryState {
    summaryData?: any,
    currentTerm?:string
}

class TermSummary extends React.Component<TermSummaryProps, TermSummaryState> {
    constructor(props) {
        super(props);
        this.state = {
            currentTerm:getTermIDFromStorage()
        }
        this.onTermChange = this.onTermChange.bind(this)
    }

    componentWillMount(){
        var this_ = this;
        this.setStateByTermID(this.state.currentTerm);
    }

    setStateByTermID(currentTerm){
        var this_ = this;
        var queryObj = {termID:currentTerm};
        getDataByActionIDWithQuery(actionTypes.GET_STUDENT_SEMESTERSUMMARY,queryObj,function (response) {
            var result = response.result;
            this_.setState({
                summaryData:result,
            });
        })
    }
    
    onTermChange(termAfterChange){
        this.setStateByTermID(termAfterChange);
        this.setState({
            currentTerm:termAfterChange
        })
    }

    handleSubmit(id,type, value){
        var postData = {
            termID:this.state.currentTerm,
            content:value
        };
        postData[type] = id;
        var actionType = type == "schoolSummaryTitleID"?actionTypes.SET_STUDENT_SEMESTERSUMMARY:actionTypes.SET_STUDENT_SEMESTERQUALITYSUMMARY;
        getDataByActionIDWithQuery(actionType,postData,function (response) {
            console.log("success");
        })


    }

    
    render(){
        var this_ = this;
        var termAnalysisInfos = this.state.summaryData.termAnalysisInfos;
        var termQualitySummaryInfos = this.state.summaryData.termQualitySummaryInfos;

        return(
            <div>
                <PersonInfoAndRank roleEnum={RoleEnum.student} onTermChange={this.onTermChange} currentTerm={this.state.currentTerm}/>
                {
                    termAnalysisInfos.map(function(item, index){
                        var schoolSummaryTitle= item.schoolSummaryTitle;
                        var summaryContent = item.stuSummaryContentInfo.summaryContent;
                        return <TextareaWithTitle className={"block-box-shadows am-margin-top"} key={index} submit={this_.handleSubmit.bind(this_, schoolSummaryTitle.schoolSummaryTitleID,"schoolSummaryTitleID")} minLength={schoolSummaryTitle.summaryLimit} title={schoolSummaryTitle.summaryTitle}
                                                  score={schoolSummaryTitle.integralScore} placeholder={schoolSummaryTitle.summaryHint}  content={summaryContent} />
                    })
                }

                {
                    termQualitySummaryInfos.map(function(item, index){
                        var schoolSummaryTitle= item.schoolSummaryTitle;
                        var summaryContent = item.stuSummaryContentInfo.summaryContent;
                        return <TextareaWithTitle className={"block-box-shadows am-margin-top"} key={index} submit={this_.handleSubmit.bind(this_, schoolSummaryTitle.qualityCategoryID,"qualityCategoryID")} minLength={schoolSummaryTitle.summaryLimit} title={schoolSummaryTitle.qualityCategoryName}
                                                  score={schoolSummaryTitle.integralScore} placeholder={schoolSummaryTitle.summaryHint}  content={summaryContent} />
                    })
                }

            </div>
        )
    }
}

export = TermSummary