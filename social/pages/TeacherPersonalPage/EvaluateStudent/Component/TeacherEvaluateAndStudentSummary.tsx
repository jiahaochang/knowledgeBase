import * as React from 'react'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane;
"use strict";
import TeacherEvaluate = require('./TeacherEvaluate')
import StudentMonthSummary = require('./StudentMonthSummary')
import TextareaWithTitle = require('common/Component/TextareaWithTitle')
interface TeacherEvaluateAndStudentSummaryProps extends React.Props<TeacherEvaluateAndStudentSummary> {
    termID: string,
    studentID: string
}

interface TeacherEvaluateAndStudentSummaryState {

}

class TeacherEvaluateAndStudentSummary extends React.Component<TeacherEvaluateAndStudentSummaryProps, TeacherEvaluateAndStudentSummaryState> {
    constructor(props) {
        super(props);
    }

    render() {
        var {termID, studentID}= this.props;
        return (
            <Tabs defaultActiveKey="1" >
                <TabPane tab="综合评价" key="1">
                    <TeacherEvaluate termID={termID} evaluateStudentUserID={studentID}/>
                </TabPane>
                <TabPane tab="学生月度总结" key="2">
                    <StudentMonthSummary termID={termID} studentID={studentID}/>
                </TabPane>
            </Tabs>
        )
    }
}

export = TeacherEvaluateAndStudentSummary