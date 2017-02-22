import * as React from 'react'
import ReportSingle = require('../ComprehensiveQualityReport/Component/ReportSingle')
"use strict";

interface AssessTestReportProps extends React.Props<AssessTestReport> {

}

interface AssessTestReportState {

}

class AssessTestReport extends React.Component<AssessTestReportProps, AssessTestReportState> {
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
                    <ReportSingle className="assess-report-single"  title="基本信息" subComponent={<div>534535</div>} />
                  
                </div>
            </div>
        )
    }
}

export = AssessTestReport