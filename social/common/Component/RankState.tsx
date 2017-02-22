import * as React from 'react'
import {Select} from 'antd'
import {withRouter} from 'react-router'

const Option = Select.Option;
"use strict";
import {SchoolTermEnum, SchoolTerm} from "../Module/SchoolTerm";
import {RoleEnum, Role} from "../Module/Role";

import * as ajaxUtil from '../../common/ajaxUtil'
import {getTermIDFromStorage} from "../storageUtil";

interface RankStateProps extends React.Props<RankState> {
    currentTerm: SchoolTermEnum, //当前选择的学期
    onTermChange?(termAfterChange: SchoolTermEnum): void,
    router: any,
    termSelectable?: boolean, //是否可以选择学期
    from?:string //是否来源于首页，非首页=nonIndex
    hasSchoolRank?: boolean, //是否有学校排名，在老师页面 没有学校排名,
    grownScore?: number, //成长积分
    classRank?: number, //班级排名
    schoolRank?: number, //学校排名,
    isTeacher?: boolean,
    onlyTermSelect?: boolean,//只显示学期选择 不显示积分
}

interface RankStateState {
    latestTerm?: SchoolTermEnum, //最后一个学期
    roleEnum?: RoleEnum
}
/**
 * 带有学期选择的 排名积分卡片
 * 有学生和 班主任两种数据
 */
class RankState extends React.Component<RankStateProps, RankStateState> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {
        hasSchoolRank: true,
        from:"nonIndex"
    };

    handleChange(value){
        this.props.onTermChange(value);
    }

    goTermAnalysis(type){
        var url = "";
        if (type === "rankInClass"){
            url = "termAnalysis/rankInClass"
        }else if (type === "scoreGrowthRecord"){
            url = "termAnalysis/scoreGrowthRecord"
        }
        this.props.router.push(url);
    }

    componentWillMount(){

        //ajax get rank state

        //get latestTerm from sessionStorage
        var latestTerm = getTermIDFromStorage();
        this.setState({
            latestTerm: latestTerm
        });


    }

    render() {

        var {currentTerm} = this.props;
        var options = [];
        for (let i=SchoolTermEnum.Grade1Term1; i<=SchoolTermEnum.Grade3Term2; i++){
            var term = new SchoolTerm(i);
            var displayChinese = term.getDisplayChinese();
            var optionValue = i + "";
            if (i<=this.state.latestTerm){
                options.push(
                    <Option value={optionValue} key={optionValue}>{displayChinese}</Option>
                )
            }else {
                options.push(
                    <Option value={optionValue} disabled key={optionValue}>{displayChinese}</Option>
                )
            }
        }

        var selectValue = currentTerm + "";
        var marginTopSingleStyle = {};
        if(this.props.from=="nonIndex"){
            if(this.props.termSelectable){
                marginTopSingleStyle = {marginTop:"19px"}
            }else{
                marginTopSingleStyle = {marginTop:"28px"}
            }
        }

        var grownScoreText = this.props.isTeacher?"班级平均积分":"成长积分";
        var classRankText = this.props.isTeacher?"积分年级排名":"班级排名";

        return (
            <div className="RankStateDiv">
                {
                    this.props.termSelectable &&
                    <Select value={selectValue} style={{ width: "100%" }} onChange={this.handleChange}>
                        {options}
                    </Select>
                }

                {
                    !this.props.onlyTermSelect &&
                    <div>
                        <div>
                            <div className="RankStateSingle green" style={marginTopSingleStyle} onClick={this.props.isTeacher?null:this.goTermAnalysis.bind(this, "scoreGrowthRecord")}>
                                {grownScoreText}
                        <span className="count" >
                            {this.props.grownScore}
                            {
                                !this.props.isTeacher &&
                                <i className="fa fa-chevron-right"></i>
                            }
                        </span>
                            </div>
                            <div className="RankStateSingle blueDuck" style={marginTopSingleStyle}  onClick={this.props.isTeacher?null:this.goTermAnalysis.bind(this, "rankInClass")}>
                                {classRankText}
                        <span className="count">
                            {this.props.classRank}
                            {
                                !this.props.isTeacher &&
                                <i className="fa fa-chevron-right"></i>
                            }
                        </span>
                            </div>
                        </div>

                        {
                            this.props.hasSchoolRank && !this.props.isTeacher &&
                            <div className="RankStateSingle yellow" style={marginTopSingleStyle}>
                                全校排名
                                <span className="count">{this.props.schoolRank}</span>
                            </div>
                        }
                    </div>
                }

            </div>
        )
    }
}

export = withRouter(RankState)