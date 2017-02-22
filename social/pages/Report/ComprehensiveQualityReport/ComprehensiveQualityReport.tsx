import * as React from 'react'
import ReportSingle = require('./Component/ReportSingle')
import BasicInfoAndChooseSubject = require('./Component/BasicInfoAndChooseSubject')
import PersonGrade = require('./Component/PersonGrade')
import SelfAnalysisAndGoals = require('./Component/SelfAnalysisAndGoals')
import ComprehensiveQualityActivities = require('./Component/ComprehensiveQualityActivities')
import StudentsEvaluation = require('./Component/StudentsEvaluation')
import TeacherComments = require('./Component/TeacherComments')

"use strict";

interface ComprehensiveQualityReportProps extends React.Props<ComprehensiveQualityReport> {

}

interface ComprehensiveQualityReportState {

}

class ComprehensiveQualityReport extends React.Component<ComprehensiveQualityReportProps, ComprehensiveQualityReportState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div className="main-wrapper">
                <div className="main-container" style={{padding:"0px"}}>
                    <div className="report-gray-header">
                        <img src="vendor/images/qualityReportLogo.png"/>
                    </div>
                    <div className="report-gray-header-back">
                        <h2 className="title">萧山六中</h2>
                        <h3 className="desc">个人素质档案</h3>
                    </div>
                </div>

                <div className="main-content">
                    <ReportSingle number={1} title="基本信息" subComponent={<BasicInfoAndChooseSubject />} />
                    <ReportSingle number={2} title="学业成绩" subComponent={<PersonGrade />} />
                    <ReportSingle number={3} title="自我剖析与目标" subComponent={<SelfAnalysisAndGoals />} />
                    <ReportSingle number={4} title="我的综合素质活动" subComponent={<ComprehensiveQualityActivities />} />
                    <ReportSingle number={5} title="同学评价" subComponent={<StudentsEvaluation />}/>
                    <ReportSingle number={6} title="老师评语" subComponent={<TeacherComments />}/>
                </div>
            </div>
        )
    }
}

export = ComprehensiveQualityReport