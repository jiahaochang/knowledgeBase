import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select,Alert,Modal} from 'antd'
const Option = Select.Option;
import CreateScoreForm = require('./CreateScoreForm')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
import context = require('../../AdminPageContext')
"use strict";

interface ScoreManagementTableProps extends React.Props<ScoreManagementTable> {

}

interface ScoreManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    termOption?:Array<any>,
    gradeOption?:Array<any>,
    termOptions?:Array<any>,
    chosenClass?:string,
    chosenGrade?:string,
    visible?:boolean,
    editData?:any,
    formType?:string
}

class ScoreManagementTable extends React.Component<ScoreManagementTableProps, ScoreManagementTableState> {
    constructor(props) {
        super(props);
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleClassChange = this.handleClassChange.bind(this)
        this.handleRefrsh = this.handleRefrsh.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.editInfo = this.editInfo.bind(this)
        this.addInfo = this.addInfo.bind(this)
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            termOption:[],
            gradeOption:[],
            termOptions:[],
            chosenClass:"",
            chosenGrade:"",
            visible:false,
            editData:{},
            formType:""
        }
    }


    static defaultProps = {};
    //点击添加成绩，显示模态对话框
    addInfo(){
        this.setState({
            visible:true,
            formType:"add"
        })
    }
    //点击编辑，显示模态对话框
    editInfo(record){
        console.log(record);
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
    //改变年级时，set class ,set data
    handleGradeChange(value){
        var gradeClassOptions=[];
        for(var i=0; i< this.state.termOptions.length; i++){
            if(value==this.state.termOptions[i].grade){
                gradeClassOptions=this.state.termOptions[i].terms;
            }
        }
        this.setState({
            termOption:gradeClassOptions,
            chosenGrade:value,
            chosenClass:gradeClassOptions[0].termID,
        })
    }
    //改变班级时，set data
    handleClassChange(value){
        this.setState({
            chosenClass:value,
        })
    }

    componentWillMount(){
        var  data = []
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_EXAMINFO, function (response) {
            data=response.result.examInfos
        });
        var rawGrades=[]
        var gradesTerms={}
        var gradeTerms=[]
        var grades=[]
        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT, function (response) {
            rawGrades=response.result.schoolStruct.grades
            gradesTerms=response.result.schoolStruct.gradeTermMap
                for(var i=0;i< rawGrades.length;i++){
                    gradeTerms=gradesTerms[rawGrades[i].grade]
                    grades.push({
                        grade:rawGrades[i].grade,
                        gradeName:rawGrades[i].gradeName,
                        terms:gradeTerms,
                    });
                }
        });
        var classOption = gradesTerms[rawGrades[0].grade];
        this.setState(
            {
                data:data,
                loading: !this.state.loading,
                termOption:classOption,
                termOptions:grades,
                gradeOption:rawGrades,
                chosenClass:classOption[0].termID,
                chosenGrade:rawGrades[0].grade,
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
                title: '年级',
                key:'grade',
                dataIndex: 'grade',
            },
            {
                title: '学年-学期',
                key:'termName',
                dataIndex: 'termName',
            },
            {
                title: '考试名称',
                key:'examName',
                dataIndex: 'examName',
            },
            {
                title: '考试成绩',
                key: 'scoreOpt',
                render: function(text, record) {
                    if(record.recordUploaded){
                        return <Button className="btn-grey" >已上传</Button>;

                    }else{
                        return <Button className="btn-blue" >上传</Button>;
                    }
                }
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
        var studentInClass=[];
        for(var i=0;i < this.state.data.length;i++){
            if(this.state.chosenClass==this.state.data[i].termID&&this.state.chosenGrade==this.state.data[i].grade){
                studentInClass.push(this.state.data[i]);
            }
        }

        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <Row className="search-condition" style={{marginBottom:"30px"}}>
                    <Col span={8}>
                        <span className="am-padding-xs">年级</span>
                        <Select value={this.state.chosenGrade} size="large" style={{ width: "60%"}}    onChange={this.handleGradeChange} >
                            {
                                this.state.gradeOption.map((item, index)=>(
                                    <Option key={item.grade} value={item.grade}>{item.grade}</Option>
                                ))
                            }
                        </Select>
                    </Col>
                    <Col span={8}>
                        <span className="am-padding-xs">学期</span>
                        <Select value={this.state.chosenClass} size="large" style={{ width: "60%"}}   onChange={this.handleClassChange}  >
                            {
                                this.state.termOption.map((item, index)=>(
                                    <Option key={item.termID} value={item.termID}>{item.termName}</Option>
                                ))
                            }
                        </Select>
                    </Col>
                </Row>
                <Table columns={columns}
                       dataSource={studentInClass}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                       bordered/>
                <Button className="btn-yellow" icon="plus" onClick={this.addInfo}>新建</Button>
                <Modal title={this.state.formType=="edit"?"编辑成绩信息":"添加成绩"}
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                       footer={[]}
                >
                    <CreateScoreForm grades={this.state.termOptions} handleRefrsh={this.handleRefrsh} handleCancel={this.handleCancel} editData={this.state.editData} formType={this.state.formType}/>
                </Modal>
                <div  className="ant-alert ant-alert-info download-info am-margin-top-sm">
                    <i className="ant-alert-icon anticon anticon-info-circle"></i>
                    <span className="ant-alert-message">
                        提示：上传成绩之前请先下载成绩模板，按照模板填写成绩再进行成绩的上传。
                    </span>
                    <span className="ant-alert-description">
                        <Button className="btn-blue" icon="download">成绩模板下载</Button>
                    </span>
                </div>
            </div>
        )
    }
}

export = ScoreManagementTable