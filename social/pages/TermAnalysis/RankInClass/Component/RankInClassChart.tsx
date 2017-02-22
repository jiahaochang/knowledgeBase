import * as React from 'react'
//调用API
import {getDataByActionIDAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'
"use strict";
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

interface RankInClassChartProps extends React.Props<RankInClassChart> {

}

interface RankInClassChartState {

}

class RankInClassChart extends React.Component<RankInClassChartProps, RankInClassChartState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        $("#rankInClassChart").height(550);
        var myChart = echarts.init(document.getElementById('rankInClassChart'));

         getDataByActionIDAsync(actionTypes.GET_STUDENT_RANKINCLASS,function (response) {
             var ranks = response.result.rankInClass;

             // todo  currentUserID 需要从sessionStorage中取  var currentUserID = window.sessionStorage.getItem("userID");
             var currentUserID = "02";
             var valueNameArr =[];
             var seriesData = [];
             for (var i = 0; i < ranks.length; i++) {
                 valueNameArr.push(ranks[i].name);
                 var color = ranks[i].userID == currentUserID?"#F7A01E":"#97B9E0";  //判断我是谁，决定高亮
                 var item ={
                     value: ranks[i].integralScore,
                     itemStyle: {
                         normal: {color: color }
                     }
                 } ;
                 seriesData.push(item);
             }

             // 指定图表的配置项和数据
             var option = {
                 tooltip : {
                     trigger: 'axis',
                     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                     }
                 },
                 //控制图例
                 legend: {
                     data:['积分'],
                     top:20,
                     right:50
                 },
                 grid: {
                     containLabel: true
                 },
                 xAxis: {
                     type : 'value',
                     splitLine:{show:false}
                 },
                 yAxis: {
                     type : 'category',
                     axisTick : {show: false},
                     data: valueNameArr,
                     splitLine:{show:false}
                 },
                 series:[
                     {
                         name: '积分',
                         type: 'bar',
                         data:seriesData,
                         //小数字
                         label: {
                             normal: {
                                 show: true,
                                 position: 'right',
                                 textStyle: {color: '#000'}
                             }
                         },
                         barWidth:20,
                         itemStyle: {
                             normal: {color:'#5089BC'}
                         }
                     }
                 ]
             };

             myChart.setOption(option);
         });

    };


    render() {
        return (
            <div id="rankInClassChart"></div>
        )
    }
}

export = RankInClassChart