import * as React from 'react'

"use strict";

interface AdminRankStateProps extends React.Props<AdminRankState> {
    studentAccountCount?:number, //学生帐户
    teacherAccountCount?:number //老师、管理员帐户

}

interface AdminRankStateState {

}

class AdminRankState extends React.Component<AdminRankStateProps, AdminRankStateState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        studentAccountCount:0,
        teacherAccountCount:0
    };

    render() {
        return (
            <div className="left-statistics">
                <div className="title">学校帐户统计</div>
                <div className="statistics-single">
                    学生帐户
                    <span className="rightCount green">{this.props.studentAccountCount}</span>
                </div>
                <div className="statistics-single">
                    管理员/老师帐户
                    <span className="rightCount blue">{this.props.teacherAccountCount}</span>
                </div>
            </div>
        )
    }
}

export = AdminRankState