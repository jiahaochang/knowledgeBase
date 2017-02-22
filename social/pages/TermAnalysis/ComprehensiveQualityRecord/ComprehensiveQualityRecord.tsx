import * as React from 'react'
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import commonVar = require('../../../common/commonVar')
import {Row,Col} from 'antd'
"use strict";
import {getTermIDFromStorage,getUserIDFromStorage} from 'common/storageUtil'
import {comprehensiveURL} from "../../../common/commonVar";
import {RoleEnum} from "../../../common/Module/Role";
interface ComprehensiveQualityRecordProps extends React.Props<ComprehensiveQualityRecord> {
}

interface ComprehensiveQualityRecordState {
    currentTerm?:string
}

class ComprehensiveQualityRecord extends React.Component<ComprehensiveQualityRecordProps, ComprehensiveQualityRecordState> {
    constructor(props) {
        super(props);
        this.state = {
            currentTerm:getTermIDFromStorage()
        }
        this.onTermChange = this.onTermChange.bind(this)
        this.goToComprehensiveQualityReport = this.goToComprehensiveQualityReport.bind(this)
        this.goToAssessTestReport = this.goToAssessTestReport.bind(this)
    }

    onTermChange(termAfterChange){
        this.setState({
            currentTerm:termAfterChange
        })
    }

    goToComprehensiveQualityReport(){
        window.open(comprehensiveURL +"/comprehensiveQualityReport.html?queryUserID="+getUserIDFromStorage()+"&currentTermID="+this.state.currentTerm);
    }

    goToAssessTestReport(){
        window.open(comprehensiveURL+"/assessTestReport.html?queryUserID="+getUserIDFromStorage()+"&currentTermID="+this.state.currentTerm);
    }



    render() {
        return (
            <div>
                <PersonInfoAndRank  roleEnum= {RoleEnum.student}  currentTerm={this.state.currentTerm} onTermChange={this.onTermChange} />

                <div className="am-margin-top block-box-shadows blueBack">
                    <div className="text-colorLine am-text-center" >我的综合素质档案</div>
                    <Row style={{margin:"30px 20px"}}>
                        <Col span={8} className="comprehensive-box-single" onClick={this.goToComprehensiveQualityReport} >
                            <img src="vendor/images/termComp.png"/>
                            <div className="text-btn blueLight">学期综合素质档案</div>
                        </Col>
                        <Col  span={8}  className="comprehensive-box-single " >
                            <img src="vendor/images/termComp.png"/>
                            <div className="text-btn blueNormal">学生综合素养情况记录表</div>
                        </Col>
                        <Col   span={8}  className="comprehensive-box-single " onClick={this.goToAssessTestReport}>
                            <img src="vendor/images/assessComp.png"/>
                            <div className="text-btn blueGrey">生涯测试结果报告</div>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export = ComprehensiveQualityRecord