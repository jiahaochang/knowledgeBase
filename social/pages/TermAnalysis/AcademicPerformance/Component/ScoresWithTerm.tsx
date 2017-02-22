import * as React from 'react'
import {Row, Col, Select} from 'antd'
const Option = Select.Option;
import ScoreSingleTable = require('./ScoreSingleTable')
import ScoreSingleChart = require('./ScoreSingleChart')
import {isEmptyObject} from 'common/commonFunc'
//调用API
import {getDataByActionID} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'
"use strict";

interface ScoresWithTermProps extends React.Props<ScoresWithTerm> {
    from?:string

}

interface ScoresWithTermState {
    currentExamID?: number,
    scores?:any,
    data?:Array<any>
}

/**
 * 我的考试成绩 可以使用学期筛选 显示不同学期的成绩
 */
class ScoresWithTerm extends React.Component<ScoresWithTermProps, ScoresWithTermState> {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
        this.handleExamIDChange = this.handleExamIDChange.bind(this);
        this.getDataByExamID = this.getDataByExamID.bind(this);
    }

    static defaultProps = {
        from:""
    };

    componentWillMount(){
        var this_ = this;
        //ajax get score data, set current examID and select options
        getDataByActionID(actionTypes.GET_STUDENT_SCORE,function (response) {
            var scores = response.result;
            var currentExamID ;
            if(this_.props.from==""){
                if(!isEmptyObject(scores)){
                    currentExamID = scores.exam[0].examID;
                }
            }else{
                //来源于综合素质档案，只显示加权成绩
                for(let item of scores.usualExamScore){
                    if(item.examType == "加权后"){
                        currentExamID = item.examID;
                        break;
                    }
                }
            }
            var data = this_.getDataByExamID(currentExamID,scores);
            this_.setState({
                currentExamID: currentExamID,
                scores: scores,
                data:data
            })

        })
    }

    handleExamIDChange(value){
        var data = this.getDataByExamID(value,this.state.scores);
        this.setState({
            currentExamID: value,
            data:data
        })
    }

    getDataByExamID(examID,scores){
        for(let item of scores.usualExamScore){
            if(item.examID == examID){
                return item.examScore;
            }
        }
    }

    render() {
        //calculate data by examID
        return (
            <div>
                {
                    this.props.from=="" && this.state.currentExamID &&
                    <div className="am-margin-top-sm am-cf">
                        <span className="pull-right am-margin-right">
                            <span>考试筛选：</span>
                            <span>
                                <Select value={this.state.currentExamID + ""} style={{ width: 120 }} onChange={this.handleExamIDChange}>
                                    {
                                        this.state.scores.exam.map((item, index)=>(
                                            <Option key={item.examID + ""} value={item.examID + ""}>{item.examType}</Option>
                                        ))
                                    }
                                </Select>
                            </span>
                        </span>
                    </div>
                }
                {
                    this.state.data &&
                        <div className="am-margin">
                            <ScoreSingleTable data={this.state.data}/>
                        </div>
                }
                {
                    this.state.data &&
                        <div className="am-margin">
                            <ScoreSingleChart data={this.state.data}/>
                        </div>
                }

            </div>
        )
    }
}

export = ScoresWithTerm