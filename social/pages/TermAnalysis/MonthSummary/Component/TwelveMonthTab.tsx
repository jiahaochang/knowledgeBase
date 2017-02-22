import * as React from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
//调用API
import {getDataByActionIDWithQueryAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TermAnalysis/TermAnalysisActionTypes'
import {getYearMonthsByTermID} from 'common/commonFunc'
import {getUserIDFromStorage} from 'common/storageUtil'


import MonthSelfAnalysis = require('./MonthSelfAnalysis')

"use strict";

interface TwelveMonthTabProps extends React.Props<TwelveMonthTab> {
    currentTerm: string
}

interface TwelveMonthTabState {
    monthSummary?:Array<any>

}

/**
 * 12个月的tab
 */
class TwelveMonthTab extends React.Component<TwelveMonthTabProps, TwelveMonthTabState> {
    constructor(props) {
        super(props);
        this.state = {monthSummary:[]}
    }

    static defaultProps = {};

    componentWillMount(){
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props){
        var this_ = this;
        var yearMonths = getYearMonthsByTermID(props.currentTerm);
        var queryObj = {
            yearMonths:yearMonths,
            studentUserID:getUserIDFromStorage()
        }
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_MONTHSUMMARY,queryObj,function (response) {
            var monthSummary = response.result.monthSummaryInfos;
            this_.setState({monthSummary:monthSummary});
        })
    }



    render() {

        return (
            <div className="block-box-shadows am-margin-top">
                <Tabs defaultActiveKey="0">
                    {
                        this.state.monthSummary.map((item, index)=>(
                            <TabPane tab={item.month+"月"} key={index}><MonthSelfAnalysis record={item}/></TabPane>
                        ))
                    }
                </Tabs>
            </div>
        )
    }
}

export = TwelveMonthTab