import * as React from 'react'
import {Row,Col,Table,Button,message} from 'antd'
//import CreateIntegralScoreForm = require('./CreateIntegralScoreForm')
import SearchInput = require('../../../../common/Component/SearchInput')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
import CreateIntegralScoreForm = require('./CreateIntegralScoreForm')


"use strict";

interface IntegralScoreManagementTableProps extends React.Props<IntegralScoreManagementTable> {

}

interface IntegralScoreManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    visible?:boolean,
    editData?:any,
    formType?:string,
    handleRefresh?:Function,
    hideModal?:Function

}
/**
 * 积分管理---积分管理table
 */
class IntegralScoreManagementTable extends React.Component<IntegralScoreManagementTableProps, IntegralScoreManagementTableState> {
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            visible: false,
            editData:{},
            formType:""
        }
    }

    static defaultProps = {};

    setData(){
        //console.log('2222222');
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_INTEGRALSCOREITEM,function (response) {
            var data = response.result.schoolIntegralScoreItems;

            this_.setState({
                data:data,
                loading: !this_.state.loading
            })
        });

    };
    
    componentWillMount(){
        this.setData();
    }

    edit(record){
        message.info('点击了编辑'+record.schoolIntegralScoreItemID);
        this.setState({
            editData:record,
            formType:"edit",
            visible:true
        });
    }
    //模态对话框关闭，刷新页面
    handleRefresh(){
        this.setState({
            visible:false
        })
    }
    hideModal(){
        this.setState({
            visible:false
        })
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });

    }

    render() {
        var this_ = this;
        const columns = [
            {
                title: '序号',
                key:'schoolIntegralScoreItemID',
                dataIndex: 'schoolIntegralScoreItemID',
            },
            {
                title: '积分活动大类',
                key:'rootIntegralScoreCategoryName',
                dataIndex: 'rootIntegralScoreCategoryName',
            },
            {
                title: '积分活动小类',
                key:'integralScoreCategoryName',
                dataIndex: 'integralScoreCategoryName',
            },
            {
                title: '其他条件',
                key:'condition',
                dataIndex: 'condition',
             },
            {
                title: '积分数',
                key:'score',
                dataIndex: 'score',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                            <span>
                                <Button className="btn-blue" size="small" onClick={this_.edit.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                            </span>
                ),
            }
        ];


        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <Table columns={columns}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                       bordered/>
                <CreateIntegralScoreForm handleRefresh={this.handleRefresh} visible={this.state.visible}
                hideModal={this.hideModal} editData={this.state.editData}/>
            </div>
        )
    }
}
//<Button className="btn-yellow" icon="plus">新建</Button>
//onClick={this_.edit.bind(this_,record)}
//<CreateIntegralScoreForm handleRefresh={this.handleRefresh} visible={this.state.visible}
//hideModal={this.hideModal}/>CreateIntegralScoreForm
export = IntegralScoreManagementTable