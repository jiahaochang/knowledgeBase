import * as React from 'react'
import { Row, Col,Tag,Table, Icon } from 'antd';
import * as ajaxUtil from '../../common/ajaxUtil'
import * as ActionTypes from '../../actions/AssessCenter/MIAssess/MIAssessActionTypes'
import  ResultIntroduction = require('./Component/ResultIntroduction');
import CardTitleWithLine = require('../../common/Component/CardTitleWithLine');
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入雷达图
require('echarts/lib/chart/radar')
require('echarts/lib/component/tooltip')
"use strict";

const defaultMaxScored = 100;
interface MIResultProps extends React.Props<MIAssessResult> {

}

interface MIResultState {
    advantage?:Array<any>,
    disadvantage?:Array<any>,
}

class MIAssessResult extends React.Component<MIResultProps, MIResultState> {
    constructor(props) {
        super(props);
        this.state = {
            advantage: [],
            disadvantage:[],
        };
    }

    componentDidMount(){
        //ajax获取测试报告的结果
        var this_=this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_MIASSESS_MI_REPORT, function (response) {
            const records = response.result;
            var chartData = [];
            var data = [];
            var dataValue = [];
           records.dimScores.forEach(function(item,index){
                data[index]={};
                data[index].name = item.dimName;
                data[index].max = defaultMaxScored;
                dataValue[index] = item.score;
            });
            this_.getEcharts(data,dataValue);
            this_.setState({
                advantage: records.report.advantage,
                disadvantage:records.report.disadvantage,
            });
        });
    }

    getEcharts(data,dataValue){
        $("#echartsDom").css("height", "300");
        var myChart = echarts.init(document.getElementById('echartsDom'));
        var option = {
            tooltip: {},
            radar: {
                indicator: data,
                startAngle: 120
            },
            series: [{

                type: 'radar',
                itemStyle: {
                    normal: {
                        color: 'rgba(39,116,184, 0.5)',
                        areaStyle: {
                            type: 'default'
                        },
                        label: {
                            show: true,
                            formatter: function(params) {
                                return params.value;
                            },
                            textStyle: {
                                color: '#2774B8',
                                fontSize: 12,
                                fontWeight: 'bolder',
                            }
                        }
                    }
                },

                data : [

                    {
                        value :dataValue,
                        name : '多元智能测试'
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.resize();

    }

    static defaultProps = {};

    render() {
        var advantage = this.state.advantage;
        var disadvantage = this.state.disadvantage;
        return (
            <div>
                
                <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"40px 20px 30px"}}>
                    <div className="report-single-title holland-score-title">
                        <div className="titleDIV">
                            <span className="titleSpan">
                                <span className="titleName">你的八项多元智能分布图</span>
                            </span>
                        </div>
                    </div>
                    <div id="echartsDom"  >

                    </div>
                    <div className="MIAssess-score-tips">
                        <i className="fa fa-bell-o"></i>
                        得分说明：得分越高，说明您更擅长该方面或在该方面优势更为突出。
                    </div>

                </div>
                <div className=" block-box-shadows" style={{margin:"30px 15px",padding:"20px 20px 30px"}}>
                    <div className="MIAssess-result-advantage-title">
                        <i className="fa fa-user fa-2x am-padding-right-xs"></i>
                        优势智能与解读
                    </div>
                    <div className="am-margin-top">
                        你得分相对较高的三项智能是：
                        {advantage &&
                            advantage.map(function(intro, index){
                                var symbol = index!=(advantage.length-1)?"，":"。";
                                return (
                                    <span key={index}>{intro.resultDimName+symbol}</span>
                                )
                            })
                        }
                    </div>
                    {advantage &&
                        advantage.map(function(intro, index){
                            return (
                                <ResultIntroduction key={index} colorName="orange" dimType={intro.resultDimName} dimTypeIntroductions={intro.introductions}/>
                            )
                        })
                    }
                </div>
                <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"20px 20px 30px"}}>
                    <div className="MIAssess-result-advantage-title">
                        <i className="fa fa-user fa-2x am-padding-right-xs"></i>
                        劣势智能与提高方法
                    </div>
                    <div className="am-margin-top">
                        你得分相对较低的两项智能是：
                        {disadvantage &&
                            disadvantage.map(function(intro, index){
                                var symbol = index!=(disadvantage.length-1)?"，":"。";
                                return (
                                    <span key={index}>{intro.resultDimName+symbol}</span>
                                )
                            })
                        }
                    </div>
                    {disadvantage &&
                        disadvantage.map(function(intro, index){
                            return (
                                <ResultIntroduction key={index} colorName="blue" dimType={intro.resultDimName} dimTypeIntroductions={intro.introductions}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export = MIAssessResult