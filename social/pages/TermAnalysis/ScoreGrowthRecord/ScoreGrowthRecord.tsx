import * as React from 'react'
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/tooltip');
import RankState = require('common/Component/RankState')
import CardWithTitleBox = require('common/Component/CardWithTitleBox')
import PersonInfoAndRank = require('common/Component/PersonInfoAndRank')
import {Row, Col} from 'antd'
"use strict";

//调用API
import {getDataByActionIDAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'

interface ScoreGrowthRecordProps extends React.Props<ScoreGrowthRecord> {
}

interface ScoreGrowthRecordState {

}

/**
 * 成长积分路线图
 */
class ScoreGrowthRecord extends React.Component<ScoreGrowthRecordProps, ScoreGrowthRecordState> {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount(){
       // $("#scoreGrowthRecord").height(500);
        var myChart = echarts.init(document.getElementById('scoreGrowthRecord'));
        getDataByActionIDAsync(actionTypes.GET_STUDENT_INTEGRALSCORERECORD,function (response) {
            var record = response.result.integralScores;
            var xAxisData = [];
            var seriesBasicScoreData = [];
            var seriesGrowthScoreData = [];
            for(let item of record){
                xAxisData.push(item.year+"年"+item.month+"月");
                seriesBasicScoreData.push(item.basicIntegralScore);
                seriesGrowthScoreData.push(item.totalIntegralScore);
            }

            var option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['基础分','成长积分']
                },
                dataZoom : {
                    show : true,
                    realtime : true,
                    start : 0,
                    end : 80,
                    height: 20,
                    y:450,
                    handleColor:"#2774b8"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : xAxisData,
                        splitLine:{show:false}
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [


                    {
                        name:'基础分',
                        type:'bar',
                        stack: '积分',
                        data:seriesBasicScoreData,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {color: '#ffffff',fontWeight:"bold"}
                            }
                        },
                        barWidth:25,
                        itemStyle: {
                            normal: {color:'#5089BC'}
                        }
                    },
                    {
                        name:'成长积分',
                        type:'bar',
                        stack: '积分',
                        data:seriesGrowthScoreData,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {color: '#97B9E0',fontWeight:"bold"}
                            }
                        },
                        barWidth:25,
                        itemStyle: {
                            normal: {color:'#97B9E0'}
                        }
                    },


                ]
            };
            myChart.setOption(option);
        });
    };

    render() {
        return (
            <div>
                <PersonInfoAndRank />
                <div className="block-box-shadows-0 blueBack am-margin-top">
                    <CardWithTitleBox  className="am-margin-top" title="成长积分路线图" subComponent={<div id="scoreGrowthRecord" className="score-grown-record-chart" ></div>}   />
                </div>

            </div>
        )
    }
}

export = ScoreGrowthRecord