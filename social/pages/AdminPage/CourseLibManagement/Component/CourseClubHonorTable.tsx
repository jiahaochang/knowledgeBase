import * as React from 'react'
import {Table,Popconfirm, message,Button,Select,Modal} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
import CreateCourseClubHonorForm = require('./CreateCourseClubHonorForm')
import context = require('../../AdminPageContext')
const Option = Select.Option;

"use strict";

interface CourseClubHonorTableProps extends React.Props<CourseClubHonorTable> {
    data?:Array<any>,
    eventCategoryType?:string,
}

interface CourseClubHonorTableState {
    pagination?:any,
    loading?:boolean,
    classOption?:Array<any>,
    gradeOption?:Array<any>,
    visible?:boolean,
    editData?:any,
    formType?:string
}
/**
 * 课程库---选修课table
 */
class CourseClubHonorTable extends React.Component<CourseClubHonorTableProps, CourseClubHonorTableState> {
    constructor(props) {
        super(props);
        this.handleRefrsh = this.handleRefrsh.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.editInfo = this.editInfo.bind(this)
        this.addInfo = this.addInfo.bind(this)
        this.state = {
            pagination: {},
            loading: true,
            visible:false,
            editData:{},
            formType:""
        }
    }

    static defaultProps = {};

    componentWillMount(){
        this.setState(
            {
                loading: !this.state.loading,
            })
    }
    //点击添加课程/社团/荣誉，显示模态对话框
    addInfo(){
        this.setState({
            visible:true,
            formType:"add"
        })
    }
    //点击编辑，显示模态对话框
    editInfo(record){
        console.log(record)
        this.setState({
            visible:true,
            editData:record,
            formType:"edit"
        })
    }
    //模态对话框关闭，刷新页面
    handleRefrsh(){
        this.setState({
            visible:false
        })

    }
    //模态对话框关闭，不刷新页面
    handleCancel(){
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

    handleSearch(value){
        alert(value);
    }

    confirm() {
        message.info('点击了确定');
    }

    render() {
        var this_ = this;
        const deleteText = "确定要删除这个任务吗"
        var columns = []
        if(this.props.eventCategoryType=="Course"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '选修课名称',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }
        else if(this.props.eventCategoryType=="Investigation"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '课程名称',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }
        else if(this.props.eventCategoryType=="Activity"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '活动名称',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }
        else if(this.props.eventCategoryType=="Club"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '社团名称',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }
        else if(this.props.eventCategoryType=="Honor"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '荣誉称号',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }
        else if(this.props.eventCategoryType=="Skill"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '特长名称',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }
        else if(this.props.eventCategoryType=="Position"){
            columns = [
                {
                    title: '序号',
                    key:'eventHolderID',
                    dataIndex: 'eventHolderID',
                },
                {
                    title: '所在组织',
                    key:'eventHolderName',
                    dataIndex: 'eventHolderName',
                },
                {
                    title: '职务名称',
                    key:'positionTypeName',
                    dataIndex: 'positionTypeName',
                },
                {
                    title: '对应省系统项目',
                    key:'rootQualityCategoryName',
                    dataIndex: 'rootQualityCategoryName',
                },
                {
                    title: '对应项目分类指标',
                    key:'qualityCategoryName',
                    dataIndex: 'qualityCategoryName',
                },
                {
                    title: '操作',
                    key: 'operation',
                    render: (text, record) => (
                        <span>
                                <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                                <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm}>
                                    <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                </Popconfirm>
                            </span>
                    ),
                }
            ];
        }





        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <Table columns={columns}
                       dataSource={this.props.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                       bordered/>
                <Button className="btn-yellow" icon="plus" onClick={this.addInfo}>新建</Button>
                <Modal title={this.state.formType=="edit"?"编辑信息":"添加"}
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                       footer={[]}
                >
                    <CreateCourseClubHonorForm handleRefrsh={this.handleRefrsh} handleCancel={this.handleCancel} editData={this.state.editData} formType={this.state.formType}/>
                </Modal>
            </div>
        )
    }
}

export = CourseClubHonorTable