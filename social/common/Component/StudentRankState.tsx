import * as React from 'react'
import {withRouter} from 'react-router'
import SelectTerm = require('common/Component/SelectTerm')
"use strict";

interface StudentRankStateProps extends React.Props<StudentRankState> {
    showClickIcon?:boolean,  //是否显示 成长积分、班级排名 的按钮  默认显示
    selectShow?:boolean,//是否显示select  默认显示
    router: any,
    onTermChange?(termAfterChange):void, //select回调
    currentTerm?:string,  //select 选中学期
    grownScore?: number, //成长积分
    classRank?: number, //班级排名
    schoolRank?: number, //学校排名
    className?:string,
    style?:any
}

interface StudentRankStateState {

}

class StudentRankState extends React.Component<StudentRankStateProps, StudentRankStateState> {
    constructor(props) {
        super(props);
        this.onTermChange = this.onTermChange.bind(this);
        this.goTermAnalysis = this.goTermAnalysis.bind(this);
    }

    static defaultProps = {
        showClickIcon:true,
        selectShow:true,
        grownScore: 0,
        classRank: 0,
        schoolRank: 0,
        className:""
    };

    goTermAnalysis(type){
        var url = "";
        if (type === "rankInClass"){
            url = "termAnalysis/rankInClass"
        }else if (type === "scoreGrowthRecord"){
            url = "termAnalysis/scoreGrowthRecord"
        }
        this.props.router.push(url);
    }

    onTermChange(termAfterChange){
        this.props.onTermChange(termAfterChange);
    }

    render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                {
                    this.props.selectShow &&
                        <SelectTerm  onTermChange={this.onTermChange}  currentTerm={this.props.currentTerm} />
                }
                <div className="RankStateSingle green"  onClick={!this.props.showClickIcon?null:this.goTermAnalysis.bind(this, "scoreGrowthRecord")}>
                    成长积分
                    <span className="count" >
                        {this.props.grownScore}
                        {
                            this.props.showClickIcon &&
                            <i className="fa fa-chevron-right"></i>
                        }
                    </span>
                </div>
                <div className="RankStateSingle blueDuck"  onClick={!this.props.showClickIcon?null:this.goTermAnalysis.bind(this, "rankInClass")}>
                    班级排名
                    <span className="count">
                        {this.props.classRank}
                        {
                            this.props.showClickIcon &&
                            <i className="fa fa-chevron-right"></i>
                        }
                    </span>
                </div>

                <div className="RankStateSingle yellow" >
                    全校排名
                    <span className="count">{this.props.schoolRank}</span>
                </div>
            </div>
        )
    }
}

export = withRouter(StudentRankState)