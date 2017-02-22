import * as React from 'react'
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import ScoresWithTerm = require('./Component/ScoresWithTerm')
"use strict";

interface AcademicPerformanceProps extends React.Props<AcademicPerformance> {
}

interface AcademicPerformanceState {

}

class AcademicPerformance extends React.Component<AcademicPerformanceProps, AcademicPerformanceState> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };

    render() {
        return (
            <div>
                <PersonInfoAndRank />
                <div className="block-box-shadows-0 blueBack am-margin-top">
                    <CardWithTitleBox  title="考试成绩" subComponent={<ScoresWithTerm/>}   />
                </div>
            </div>
        )
    }
}

export = AcademicPerformance