import * as React from 'react'

"use strict";

interface TeacherRankStateProps extends React.Props<TeacherRankState> {
    classAvgIntegralScore?:number,
    gradeIntegralRank?:number

}

interface TeacherRankStateState {

}

class TeacherRankState extends React.Component<TeacherRankStateProps, TeacherRankStateState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        classAvgIntegralScore:0,
        gradeIntegralRank:0
    };

    render() {
        return (
            <div className="left-statistics teacher-rank-state">
                <div className="statistics-single">
                    班级平均积分
                    <span className="rightCount green">{this.props.classAvgIntegralScore}</span>
                </div>
                <div className="statistics-single">
                    积分年级排名
                    <span className="rightCount blue">{this.props.gradeIntegralRank}</span>
                </div>
            </div>
        )
    }
}

export = TeacherRankState