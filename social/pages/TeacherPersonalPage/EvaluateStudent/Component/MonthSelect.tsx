import * as React from 'react'

"use strict";
import {Row, Col} from 'antd'


interface MonthSelectProps extends React.Props<MonthSelect> {
    onMonthChange(month: number):void,//回调
    monthList:Array<string>,//月份list
    currentMonth: string //当前选中的月份
}

interface MonthSelectState {
}


/**
 * 班主任评价学生 月份选择
 */
class MonthSelect extends React.Component<MonthSelectProps, MonthSelectState> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        var month = e.target.dataset.month;
        this.props.onMonthChange(month);
    }

    render() {
        var this_ = this;
        return (
            <Row onClick={this.handleClick} className="month-block-parent">
                {
                    this.props.monthList.map(function (item, index) {
                        var className = item == this_.props.currentMonth?"month-block active":"month-block";
                        return <Col span={4} className={className} key={index} data-month={item}>{item}月</Col>
                    })
                }
            </Row>
        )
    }
}

export = MonthSelect