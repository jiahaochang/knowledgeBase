import * as React from 'react'
import ScoresWithTerm = require('../../../TermAnalysis/AcademicPerformance/Component/ScoresWithTerm')
"use strict";

interface PersonGradeProps extends React.Props<PersonGrade> {

}

interface PersonGradeState {

}
/**
 * 个人素质报告
 * 学业成绩
 */
class PersonGrade extends React.Component<PersonGradeProps, PersonGradeState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>
                <div className="tip">该结果为加权成绩</div>
                <ScoresWithTerm  from="cqreport"/>
                
            </div>
        )
    }
}

export = PersonGrade