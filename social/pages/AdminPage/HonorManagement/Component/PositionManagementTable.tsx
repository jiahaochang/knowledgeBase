import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
const Option = Select.Option;
"use strict";

interface PositionManagementTableProps extends React.Props<PositionManagementTable> {

}

interface PositionManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,

}
/**
 * 特长/荣誉/职务---职务管理table
 */
class PositionManagementTable extends React.Component<PositionManagementTableProps, PositionManagementTableState> {
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
                positionClassification: '知识扩展类',
                positionBelong:"校团委",
                positionName:"微生物发酵实验",
                positionProject:"创新实践",
                positionIndex: "实验及技术操作能力"
            },
            {
                key:'2',
                serialNumber: '2',
                positionClassification: '知识扩展类',
                positionBelong:"校团委",
                positionName:"微生物发酵实验",
                positionProject:"创新实践",
                positionIndex: "实验及技术操作能力"
            },
            {
                key:'3',
                serialNumber: '3',
                positionClassification: '知识扩展类',
                positionBelong:"校团委",
                positionName:"微生物发酵实验",
                positionProject:"创新实践",
                positionIndex: "实验及技术操作能力"
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
                title: '职务分类',
                key:'positionClassification',
                dataIndex: 'positionClassification',
            },
            {
                title: '所在组织',
                key:'positionBelong',
                dataIndex: 'positionBelong',
            },
            {
                title: '职务名称',
                key:'positionName',
                dataIndex: 'positionName',
            },
            {
                title: '对应省系统项目',
                key:'positionProject',
                dataIndex: 'positionProject',
            },
            {
                title: '对应项目分类指标',
                key:'positionIndex',
                dataIndex: 'positionIndex',
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
                <Button className="btn-green" icon="plus">新建</Button>
            </div>
        )
    }
}

export = PositionManagementTable