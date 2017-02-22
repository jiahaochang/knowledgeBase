import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
const Option = Select.Option;
"use strict";

interface SpecialtyManagementTableProps extends React.Props<SpecialtyManagementTable> {

}

interface SpecialtyManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
}
/**
 * 特长/荣誉/职务---特长管理table
 */
class SpecialtyManagementTable extends React.Component<SpecialtyManagementTableProps, SpecialtyManagementTableState> {
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
                specialtyClassification: '知识扩展类',
                specialtyName:"微生物发酵实验",
                specialtyProject:"创新实践",
                specialtyIndex: "实验及技术操作能力"
            },
            {
                key:'2',
                serialNumber: '2',
                specialtyClassification: '知识扩展类',
                specialtyName:"微生物发酵实验",
                specialtyProject:"创新实践",
                specialtyIndex: "实验及技术操作能力"
            },
            {
                key:'3',
                serialNumber: '3',
                specialtyClassification: '知识扩展类',
                specialtyName:"微生物发酵实验",
                specialtyProject:"创新实践",
                specialtyIndex: "实验及技术操作能力"
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
                title: '特长分类',
                key:'specialtyClassification',
                dataIndex: 'specialtyClassification',
            },
            {
                title: '特长名称',
                key:'specialtyName',
                dataIndex: 'specialtyName',
            },
            {
                title: '对应省系统项目',
                key:'specialtyProject',
                dataIndex: 'specialtyProject',
            },
            {
                title: '对应项目分类指标',
                key:'specialtyIndex',
                dataIndex: 'specialtyIndex',
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
                <Button className="btn-yellow" icon="plus">新建</Button>
            </div>
        )
    }
}

export = SpecialtyManagementTable