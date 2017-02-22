import * as React from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
"use strict";
import {Score} from "../Data/Score";

interface ScoreSingleChartProps extends React.Props<ScoreSingleChart> {
    data: Array<Score>
}

interface ScoreSingleChartState {

}

class ScoreSingleChart extends React.Component<ScoreSingleChartProps, ScoreSingleChartState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount(){
        if(this.props.data.length>0){
            this.getEcharts(this.props.data);
        }
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            if(newProps.data.length>0){
                this.getEcharts(newProps.data);
            }
        }
    }

    getEcharts(chartData){
        var containerHeight = 400;//$("#container").height();
        $("#echartDom").css("height", containerHeight);
        var myChart = echarts.init(document.getElementById('echartDom'));
        var xAxisDataArray = [];
        var seriesSchoolRank = [];

        for(var i=0; i<chartData.length; i++){
            var item = chartData[i];
            xAxisDataArray.push(item.subject);
            var pecentage = 100 - item.schoolRank;
            seriesSchoolRank.push(pecentage.toFixed(2));
        }

        // 指定图表的配置项和数据
        var option = {
            title : {
                text: '排名情况',
                subtext: '（你的成绩超越了%多少的同学）'
            },
            legend: {
                data:['学校排名'],
            },

            grid:{borderWidth:0},

            xAxis : [
                {
                    type : 'category',
                    data : xAxisDataArray,
                    splitLine:{show:false},
                    axisLine:{lineStyle:{color: '#868686',width:1}},
                    axisTick:{lineStyle:{color: '#868686',width:1}}
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    max: "100",
                    splitLine:{show:false},
                    axisLine:{lineStyle:{color: '#868686',width:1}},
                    axisTick:{lineStyle:{color: '#868686',width:1}}
                }
            ],
            series : [
                {
                    name:'学校排名',
                    type:'bar',
                    barCategoryGap: '50%',  //每个数据显示的宽度
                    data: seriesSchoolRank,
                    itemStyle:{
                        normal:{
                            label:{
                                show: true,
                                position: "top",
                                formatter(params, ticket, callback){
                                    return params.value +'%';
                                }
                            },
                            color: "#91C7AE"

                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.resize();
    }

    render() {
        return (
            <div  className="student-score-detail">
                <div id="echartDom" style={{margin:"0px"}} ></div>
            </div>
        )
    }

}

export = ScoreSingleChart