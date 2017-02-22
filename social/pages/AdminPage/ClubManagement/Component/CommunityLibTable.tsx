import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
const Option = Select.Option;
"use strict";

interface CommunityLibTableProps extends React.Props<CommunityLibTable> {

}

interface CommunityLibTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    classOption?:Array<any>,
    gradeOption?:Array<any>,

}
/**
 * 活动与社团库---社团库table
 */
class CommunityLibTable extends React.Component<CommunityLibTableProps, CommunityLibTableState> {
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
                activityClassification: '知识扩展类',
                activityName:"微生物发酵实验",
                activityProject:"创新实践",
                activityIndex: "实验及技术操作能力"
            },
            {
                key:'2',
                serialNumber: '2',
                activityClassification: '知识扩展类',
                activityName:"微生物发酵实验",
                activityProject:"创新实践",
                activityIndex: "实验及技术操作能力"
            },
            {
                key:'3',
                serialNumber: '3',
                activityClassification: '知识扩展类',
                activityName:"微生物发酵实验",
                activityProject:"创新实践",
                activityIndex: "实验及技术操作能力"
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

    handleSearch(value){
        alert(value);
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
                title: '社团类别',
                key:'activityClassification',
                dataIndex: 'activityClassification',
            },
            {
                title: '社团名称',
                key:'activityName',
                dataIndex: 'activityName',
            },
            {
                title: '对应省系统项目',
                key:'activityProject',
                dataIndex: 'activityProject',
            },
            {
                title: '对应项目分类指标',
                key:'activityIndex',
                dataIndex: 'activityIndex',
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

export = CommunityLibTable