import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select} from 'antd'
const Option = Select.Option;
//import CreateRecordForm = require('./CreateRecordForm')
import SearchInput = require('../../../../common/Component/SearchInput')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
"use strict";

interface StudentRecordManagementTableProps extends React.Props<StudentRecordManagementTable> {

}

interface StudentRecordManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    //add
    editData?:any,
    formType?:string,
    visible?:boolean,

}
/**
 * 档案管理---学生档案table
 */
class StudentRecordManagementTable extends React.Component<StudentRecordManagementTableProps, StudentRecordManagementTableState> {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            visible:false,
            editData:{},
            formType:"",
        }
    }

    static defaultProps = {};

    componentWillMount(){
        this.setData()
    }

    setData(){
        var this_ = this;

        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_STUDENTRECORD,function (response) {
            var data = response.result.studentArchives;

            this_.setState({
                data:data,
                loading: !this_.state.loading
            })
            console.log(this_.state.data);
        });
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

    editInfo(record){
        this.setState({
            editData:record,
            formType:"edit",
            visible:true
        })
    }
    
    handleRefresh(){
        this.setState({
            visible:false
        })
        this.setData();
    }

    confirm() {
        message.info('点击了确定');
    }

    render() {
        var this_ = this;
        const deleteText = "确定要下载该学生的档案吗"
        const arr = [1,2,3,4,5,6,7]
        const columns = [
            {
                title: '序号',
                key:'serialNumber',
                dataIndex: 'serialNumber',
            },
            {
                title: '账号',
                key:'systemID',
                dataIndex: 'systemID',
            },
            {
                title: '姓名',
                key:'name',
                dataIndex: 'name',
            },
            {
                title: '年级',
                key:'gradeName',
                dataIndex: 'gradeName',
            },
            {
                title: '班级',
                key:'className',
                dataIndex: 'className',
             },
            {
                title: '学期',
                key:'termName',
                dataIndex: 'termName',
            },
            {
                title: '学生档案',
                key: 'recoreOPT',
                render: (text, record) => (
                            <span>
                                <img src="vendor/images/pdf.png" width="40"/>
                            </span>
                ),
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                    <span>
                        <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                            <Button className="btn-blue am-margin-right-xs">下载<i className="fa fa-cloud-download"></i></Button>
                         </Popconfirm>
                        <Button className="btn-blue am-margin-left-xs" >查看<i className="fa fa-eye"></i></Button>
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
            </div>
        )
    }
}
// return 新建按钮备用
// <Button className="btn-yellow" icon="plus">新建</Button>
// <CreateRecordForm handleRefresh={this.handleRefresh} visible={this.state.visible} hideModal={this.hideModal}
//                   editData={this.state.editData}
//                   formType={this.state.formType}/>

export = StudentRecordManagementTable