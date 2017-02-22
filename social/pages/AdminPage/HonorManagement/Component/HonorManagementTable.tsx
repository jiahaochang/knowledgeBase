import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
const Option = Select.Option;
"use strict";

interface HonorManagementTableProps extends React.Props<HonorManagementTable> {

}

interface HonorManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean

}
/**
 * 特长/荣誉/职务---荣誉管理table
 */
class HonorManagementTable extends React.Component<HonorManagementTableProps, HonorManagementTableState> {
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
                honorName:"微生物发酵实验",
                honorProject:"创新实践",
                honorIndex: "实验及技术操作能力"
            },
            {
                key:'2',
                serialNumber: '2',
                honorName:"微生物发酵实验",
                honorProject:"创新实践",
                honorIndex: "实验及技术操作能力"
            },
            {
                key:'3',
                serialNumber: '3',
                honorName:"微生物发酵实验",
                honorProject:"创新实践",
                honorIndex: "实验及技术操作能力"
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

     confirm() {
    message.info('点击了确定');
    }

    render() {
        var this_ = this;
        const deleteText = "确定要删除这个任务吗"
        const columns = [
            {
                title: '序号',
                key:'serialNumber',
                dataIndex: 'serialNumber',
            },
            {
                title: '荣誉称号',
                key:'honorName',
                dataIndex: 'honorName',
            },
            {
                title: '对应省系统项目',
                key:'honorProject',
                dataIndex: 'honorProject',
            },
            {
                title: '对应项目分类指标',
                key:'honorIndex',
                dataIndex: 'honorIndex',
             },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                            <span>
                                <Button className="btn-blue am-margin-right-xs" size="small">编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
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
                <Button className="btn-orange" icon="plus">新建</Button>
            </div>
        )
    }
}

export = HonorManagementTable