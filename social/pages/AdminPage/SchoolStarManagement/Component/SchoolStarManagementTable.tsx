import * as React from 'react'
import {Row,Col,Table,Button,Checkbox } from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'

const CheckboxGroup = Checkbox.Group;
"use strict";

interface SchoolStarManagementTableProps extends React.Props<SchoolStarManagementTable> {

}

interface SchoolStarManagementTableState {
    date?:any,
    data?:Array<any>,
}
/**
 * 积分管理---积分管理table
 */
class SchoolStarManagementTable extends React.Component<SchoolStarManagementTableProps, SchoolStarManagementTableState> {
    constructor(props) {
        super(props);
        
        this.state = {
            date:{},
            data:[]
        }
    }

    static defaultProps = {};

    setData(){
        //console.log('2222222');
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_STAROPTIONS,function (response) {
            var data = response.result.schoolStarOptions;

            this_.setState({
                data:data,
            })
        });

    };

    componentWillMount(){
        var myDate = new Date();
        this.setState({
            date: myDate
        })
        this.setData();
    }

    
    //模态对话框关闭，刷新页面
    handleRefresh(){
        
    }
    onChange(){
        console.log('onchange');
    }

    handleTableChange(pagination, filters, sorter) {
        

    }

    render() {
        let date = this.state.date;
        const options = [
            { label: '品德表现之星', value: 'Apple' },
            { label: '校内活动之星', value: 'Pear' },
            { label: '选修课之星', value: 'Orange' },
            { label: '艺术素养之星', value: '222' },
            { label: '运动健康之星', value: '33' },
            { label: '校外实践之星', value: '44' },
            { label: '社团之星', value: '55' },
            { label: '创新实践之星', value: '66' },
        ];

        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <div>
                    请选择评比条目：
                    <CheckboxGroup options={this.state.data} onChange={this.onChange} />
                    <br />
                </div>
                <div>
                    截止日期：{date.getFullYear()}年{date.getMonth()+1}月{date.getDate()+1}日
                </div>
            </div>
        )
    }
}
//<Button className="btn-yellow" icon="plus">新建</Button>
//onClick={this_.edit.bind(this_,record)}
//<CreateIntegralScoreForm handleRefresh={this.handleRefresh} visible={this.state.visible}
//hideModal={this.hideModal}/>CreateIntegralScoreForm
export = SchoolStarManagementTable