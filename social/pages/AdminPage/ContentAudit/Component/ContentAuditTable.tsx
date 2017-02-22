import * as React from 'react'
import {Row,Col,Table,Button} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
"use strict";

interface ContentAuditTableProps extends React.Props<ContentAuditTable> {

}

interface ContentAuditTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean

}
/**
 * 内容审核---内容审核table
 */
class ContentAuditTable extends React.Component<ContentAuditTableProps, ContentAuditTableState> {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            pagination: {},
            loading: true,
        }
    }

    static defaultProps = {};

    componentWillMount(){
        var  data = [
            {
                key:'1',
                serialNumber: '1',
                reportedContent:"小苹果儿",
                reportedDesc:"含有人身攻击",
                reportedType: "虚假信息",
                reportedMan:"郭德钢",
                reportedDate:"2015/5/16-20:08",
                reportedWho:"岳云鹏",
                status:true
            },
            {
                key:'2',
                serialNumber: '2',
                reportedContent:"小苹果儿",
                reportedDesc:"含有人身攻击",
                reportedType: "虚假信息",
                reportedMan:"郭德钢",
                reportedDate:"2015/5/16-20:08",
                reportedWho:"岳云鹏",
                status:false

            },
            {
                key:'3',
                serialNumber: '3',
                reportedContent:"小苹果儿",
                reportedDesc:"含有人身攻击",
                reportedType: "虚假信息",
                reportedMan:"郭德钢",
                reportedDate:"2015/5/16-20:08",
                reportedWho:"岳云鹏",
                status:true
            }
        ]

        this.setState(
            {
                data:data,
                loading: !this.state.loading,
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
                key:'serialNumber',
                dataIndex: 'serialNumber',
            },
            {
                title: '举报内容',
                key:'reportedContent',
                render: (text, record) => (
                    <a>{record.reportedContent}</a>
                ),
            },
            {
                title: '举报说明',
                key:'reportedDesc',
                dataIndex: 'reportedDesc',
            },
            {
                title: '举报类型',
                key:'reportedType',
                dataIndex: 'reportedType',
             },
            {
                title: '举报人',
                key:'reportedMan',
                dataIndex: 'reportedMan',
            },
            {
                title: '举报时间',
                key:'reportedDate',
                dataIndex: 'reportedDate',
            },
            {
                title: '被举报人',
                key:'reportedWho',
                dataIndex: 'reportedWho',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                            <span className="am-text-lg">
                                <i className="fa fa-check-circle-o am-padding-right-sm"></i>
                                <i className="fa fa-trash-o am-padding-right-sm"></i>
                                <i className="fa fa-flag-o"></i>
                            </span>
                ),
            },
            {
                title: '审核状态',
                key: 'auditStatus',
                render: function(text, record) {
                    if(record.status){
                        return <Button className="btn-blue" >已审核</Button>;

                    }else{
                        return <Button className="btn-grey" >未审核</Button>;
                    }
                }
            },
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
//<Button className="btn-yellow" icon="plus">新建</Button>
export = ContentAuditTable