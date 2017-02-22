import * as React from 'react'
import { Row, Col,Button } from 'antd';
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AssessCenter/AssessCenterActionTypes'
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
import  ResultDimIntroduction = require('../Component/ResultDimIntroduction');
import {hollandTypeDispalyMap} from '../../../common/Config/AssessCenterConfig2'
import {isEmptyObject} from 'common/commonFunc'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入雷达图
require('echarts/lib/chart/radar')
require('echarts/lib/component/tooltip')
"use strict";

const defaultMaxScored = 100;
interface HollandAssessResultProps extends React.Props<HollandAssessResult> {

}

interface HollandAssessResultState {
    advantage?:Array<any>,
}

class HollandAssessResult extends React.Component<HollandAssessResultProps, HollandAssessResultState> {
    constructor(props) {
        super(props);
        this.state = {
            advantage: [],
        };
    }

    componentDidMount(){
        //ajax获取测试报告的结果
        var this_=this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_ASSESSCENTER_HOLLAND_REPORT, function (response) {
            const records = response.result;
            var chartData = [];
            var data = [];
            var dataValue = [];
            records.dimScores.forEach(function(item,index){
                data[index]={};
                data[index].name = item.dimName+item.dimType;
                data[index].max = defaultMaxScored;
                dataValue[index] = item.score;
            });
            this_.getEcharts(data,dataValue);
            this_.setState({
                advantage: records.report.advantage,
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
                        name : '职业兴趣测试'
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
        var name = !isEmptyObject(advantage)?hollandTypeDispalyMap[advantage[0].resultDimType].chineseWithChar:"你猜";
        var picUrl = !isEmptyObject(advantage)?hollandTypeDispalyMap[advantage[0].resultDimType].detailPicUrl:"";
        return (
            <div className="am-margin-top">

                <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"20px 20px 30px"}}>
                    <Row className="vertical-horizon-center">
                        <Col span={8} className="am-text-center">
                            <img src={picUrl} />
                            <div className="am-text-center">
                                <Button className="btn-orange" size="large">{name}</Button>
                            </div>
                        </Col>
                        <Col span={16}>
                            <div id="echartsDom" ></div>
                        </Col>
                    </Row>

                    <div className="MIAssess-score-tips am-margin-top-sm">
                        <i className="fa fa-bell-o"></i>
                        得分说明：得分越高说明对某个领域的健康程度越高。
                    </div>

                </div>
                <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"40px 20px 30px"}}>
                    <div className="report-single-title holland-score-title">
                        <div className="titleDIV">
                            <span className="titleSpan">
                                <span className="titleName">你得分较高的领域是</span>
                            </span>
                        </div>
                    </div>

                    <ul className={"am-margin-top am-avg-sm-"+advantage.length}>
                        {
                            advantage.map(function(intro, index){
                                var name = hollandTypeDispalyMap[intro.resultDimType].chineseWithChar;
                                return (
                                <li  key={index} className="am-text-center">
                                    <Button className="btn-yellow">{name}</Button>
                                </li>
                                )
                            })
                        }
                    </ul>
                    {
                        advantage.map(function(intro, index){
                            var name = hollandTypeDispalyMap[intro.resultDimType].chineseWithChar;
                            return (
                            <div className="am-margin-top-lg" key={index}>
                                <CardTitleWithLine title={name} titleIconType={"fa-user fa-2x am-padding-left am-padding-right-xs"}/>
                                <ResultDimIntroduction dimTypeIntroductions={intro.introductions}/>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export = HollandAssessResult