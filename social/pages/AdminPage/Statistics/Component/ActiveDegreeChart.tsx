import * as React from 'react'
var echarts = require('echarts/lib/echarts');
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
// 引入柱状图
require('echarts/lib/chart/bar')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

"use strict";

interface ActiveDegreeChartProps extends React.Props<ActiveDegreeChart> {

}

interface ActiveDegreeChartState {

}

class ActiveDegreeChart extends React.Component<ActiveDegreeChartProps, ActiveDegreeChartState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    setData(){
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_STUDENTACTIVITYSTATISTICS,function (response) {
            var data = response.result.eventHolderStatistics;
            this_.getEcharts(data);
        });
        
    }

    componentDidMount(){
        this.setData()
    }

    getEcharts(chartData){
        var containerHeight = 400;
        $("#echartDom").css("height", containerHeight);
        var myChart = echarts.init(document.getElementById('echartDom'));
        var yaxisList = [],xaxisList=[];
        for(var i=0;i<chartData.length;i++){
            yaxisList.push(chartData[i].eventCategoryName);
            xaxisList.push(chartData[i].count);
        }

        // 指定图表的配置项和数据
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value',
                    splitLine:{show:false},
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : yaxisList,
                    splitLine:{show:false},

                }
            ],
            series : [
                {
                    name:'参与人数',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:xaxisList
                },

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.resize();
    }

    render() {
        return (
            <div  style={{margin:"30px"}}>
                <div style={{color:"#C23531",fontWeight:"bold",fontSize:"18px"}}>热闹活动与参与人数</div>
                <div id="echartDom"  ></div>
            </div>
        )
    }
}

export = ActiveDegreeChart