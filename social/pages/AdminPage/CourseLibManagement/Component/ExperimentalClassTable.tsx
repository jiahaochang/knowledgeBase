import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
const Option = Select.Option;
"use strict";

interface ExperimentalClassTableProps extends React.Props<ExperimentalClassTable> {

}

interface ExperimentalClassTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    classOption?:Array<any>,
    gradeOption?:Array<any>,

}
/**
 * 课程库---实验课table
 */
class ExperimentalClassTable extends React.Component<ExperimentalClassTableProps, ExperimentalClassTableState> {
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
                courseClassification: '知识扩展类',
                courseName:"微生物发酵实验",
                connectCourse:"化学",
                courseProject:"创新实践",
                courseIndex: "实验及技术操作能力"
            },
            {
                key:'2',
                serialNumber: '2',
                courseClassification: '知识扩展类',
                courseName:"微生物发酵实验",
                connectCourse:"化学",
                courseProject:"创新实践",
                courseIndex: "实验及技术操作能力"
            },
            {
                key:'3',
                serialNumber: '3',
                courseClassification: '知识扩展类',
                courseName:"微生物发酵实验",
                connectCourse:"化学",
                courseProject:"创新实践",
                courseIndex: "实验及技术操作能力"
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
                title: '项目类别',
                key:'courseClassification',
                dataIndex: 'courseClassification',
            },
            {
                title: '课程名称',
                key:'courseName',
                dataIndex: 'courseName',
            },
            {
                title: '相关学科',
                key:'connectCourse',
                dataIndex: 'connectCourse',
            },
            {
                title: '对应省系统项目',
                key:'courseProject',
                dataIndex: 'courseProject',
            },
            {
                title: '对应项目分类指标',
                key:'courseIndex',
                dataIndex: 'courseIndex',
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

export = ExperimentalClassTable