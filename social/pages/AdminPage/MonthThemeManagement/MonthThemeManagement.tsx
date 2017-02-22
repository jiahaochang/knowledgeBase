import * as React from 'react'
import { Tabs, Select,  } from 'antd';
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import TextareaWithTitle = require('../../../common/Component/TextareaWithTitle')
const TabPane = Tabs.TabPane;
const Option = Select.Option;
"use strict";

interface MonthThemeManagementProps extends React.Props<MonthThemeManagement> {

}

interface MonthThemeManagementState {

}

class MonthThemeManagement extends React.Component<MonthThemeManagementProps, MonthThemeManagementState> {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {}
    }

    static defaultProps = {};

    handleSubmit(monthID:string,type:string, words:string):void{
        console.log(words + monthID+type);
    }
    handleChange(){

    }
    render() {
        var this_ = this;
        const twelveMonthSummaryData = [
            {
                monthID:"01",
                monthName: "一月"
            },
            {
                monthID:"02",
                monthName: "二月"
            },
            {
                monthID:"03",
                monthName: "三月"
            },
            {
                monthID:"04",
                monthName: "四月"
            },
        ];
        return (
            <div>
                <AdminBasicInfo />
                <div className="block-box-shadows am-margin-top">
                    <Tabs defaultActiveKey="0">
                        {
                            twelveMonthSummaryData.map((item, index)=>(
                                <TabPane tab={item.monthName} key={index}>
                                   <div key={index} style={{padding:"20px"}}>
                                       <Select defaultValue="2016" style={{width:200}} onChange={this_.handleChange}>
                                           <Option value="2016">2016年</Option>
                                           <Option value="2017">2017年</Option>
                                       </Select>
                                       <TextareaWithTitle submit={this.handleSubmit.bind(this, item.monthID,"theme")} title={"月度主题"}
                                                          className={"am-margin-bottom"} content={"默认评论"}/>
                                       <TextareaWithTitle submit={this.handleSubmit.bind(this, item.monthID,"connotation")} title={"主题内涵"}
                                                          className={"am-margin-bottom"} />
                                   </div>
                                </TabPane>
                            ))
                        }
                    </Tabs>
                </div>

            </div>
        )
    }
}

export = MonthThemeManagement