import * as React from 'react'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
// 引入饼图
require('echarts/lib/chart/pie')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
"use strict";

interface ActivitiesLibChartProps extends React.Props<ActivitiesLibChart> {

}

interface ActivitiesLibChartState {

}

class ActivitiesLibChart extends React.Component<ActivitiesLibChartProps, ActivitiesLibChartState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    componentDidMount(){
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_ACTIVITYLIBSTATISTICS,function (response) {
            var data = [];
            response.result.eventCategoryStatistics.forEach(function(item,index){
                data[index]={};
                data[index].name = item.eventCategoryName;
                data[index].value = item.count
            });
            this_.getEcharts(data);
        });


    }

    getEcharts(chartData){
        var containerHeight = 400;
        $("#echartDom").css("height", containerHeight);
        var myChart = echarts.init(document.getElementById('echartDom'));
        var titleName = [];
        for(var i=0;i<chartData.length;i++){
            titleName.push(chartData[i].name)
        }

        // 指定图表的配置项和数据
        var option = {
            title : {
                text: '综合素质活动统计',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: titleName
            },
            series : [
                {
                    name: '活动',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:chartData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
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
            <div  style={{margin:"30px"}}>
                <div id="echartDom"  ></div>
            </div>
        )
    }
}

export = ActivitiesLibChart