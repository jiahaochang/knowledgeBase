import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Modal} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
import context = require('../../AdminPageContext')
import {isEmptyObject} from '../../../../common/commonFunc'
import {changeClassMapGradeIDBeKey,ALL,GRADEALL,CLASSALL} from '../../AdminPageUtil'
import CreateStudentForm = require('./CreateStudentForm')
import GradeAndClassSelector = require('./GradeAndClassSelector')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
"use strict";
interface StudentsystemIDTableProps extends React.Props<StudentsystemIDTable> {

}

interface StudentsystemIDTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    classOption?:Array<any>,
    gradeSelectID?:string,
    classSelectID?:string,
    visible?:boolean,
    editData?:any,
    formType?:string,
    searchContent?:string,
    searchOrNot?:boolean,

}
/**
 * 学生帐户table
 */
class StudentsystemIDTable extends React.Component<StudentsystemIDTableProps, StudentsystemIDTableState> {
    constructor(props) {
        super(props);
        this.editInfo = this.editInfo.bind(this)
        this.handleRefrsh = this.handleRefrsh.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.addInfo = this.addInfo.bind(this)
        this.gradeActive = this.gradeActive.bind(this)
        this.classActive = this.classActive.bind(this)
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            classOption:[],
            gradeSelectID:GRADEALL,
            classSelectID:CLASSALL,
            visible:false,
            editData:{},
            formType:"",
            searchContent:"",
            searchOrNot:false,
        }
    }

    static defaultProps = {};


    componentWillMount(){
        var  data = []
        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_STUDENTACCOUNT, function (response) {
            data=response.result.studentAccount
        });
        if(isEmptyObject(context.getGradeClassResponseData())){
            var rawGrades=[]
            var gradesClasses={}
            var gradeClasses=[]
            var grades=[]
            ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT, function (response) {
                rawGrades=response.result.schoolStruct.grades
                gradesClasses=response.result.schoolStruct.gradeClassMap
                for(var i=0;i< rawGrades.length;i++){
                    gradeClasses=gradesClasses[rawGrades[i].grade]
                    grades.push({
                        grade:rawGrades[i].grade,
                        gradeName:rawGrades[i].gradeName,
                        classes:gradeClasses,
                    });
                }
            });
            //返回数组加上全部选项
            var gradesall = [{grade:GRADEALL,gradeName:ALL,classes:[{classID:CLASSALL,className:ALL}]}];
            gradesall = gradesall.concat(grades);
            context.setGradeClassResponseData(gradesall);
            context.setClassMapGradeIDBeKey(changeClassMapGradeIDBeKey(gradesall))
        }

        var classOption = context.getClassMapGradeIDBeKey()[GRADEALL];
        this.setState(
            {
                data:data,
                loading: !this.state.loading,
                classOption:classOption,
            })
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });

    }

    //搜索框搜索
    handleSearch(value){
        this.setState({
            searchContent:value,
            searchOrNot:true,
        })
    }
    //删除点击事件
    confirm() {
    message.success('删除成功');
    }
    //点击年级，加上active class
    gradeActive(id){
        var classOption = context.getClassMapGradeIDBeKey()[id];
        this.setState(
            {
                gradeSelectID:id,
                classOption:classOption,
                classSelectID:CLASSALL,
                searchOrNot:false,
            }
        );
    }
    //点击班级，加上active class
    classActive(id){
        this.setState(
            {
                classSelectID:id,
                searchOrNot:false,
            });
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

    //点击添加学生，显示模态对话框
    addInfo(){
        this.setState({
            visible:true,
            formType:"add"
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

    render() {
        var this_ = this;
        const deleteText = "确定要删除该学生帐号吗"
        const columns = [
            {
                title: '序号',
                key:'systemID',
                dataIndex: 'systemID',
            },
            {
                title: '帐号',
                key:'userID',
                dataIndex: 'userID',
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
        if(this.state.gradeSelectID==GRADEALL){
            studentInClass=this.state.data;
        }
        else if(this.state.classSelectID==CLASSALL){
            for(var i=0;i < this.state.data.length;i++){
                if(this.state.gradeSelectID==this.state.data[i].grade){
                    studentInClass.push(this.state.data[i]);
                }
            }
        }
        else{
            for(var i=0;i < this.state.data.length;i++){
                if(this.state.classSelectID==this.state.data[i].classID){
                    studentInClass.push(this.state.data[i]);
                }
            }
        }
        var shownItems=[];
        if(this.state.searchContent!=""&&this.state.searchOrNot){
            var searchContent=this.state.searchContent;
            for(var i=0;i<studentInClass.length;i++){
                if(studentInClass[i].userID.indexOf(searchContent)!=-1||studentInClass[i].name.indexOf(searchContent)!=-1){
                    shownItems.push(studentInClass[i]);
                }
            }
        }
        else{
            shownItems=studentInClass;
        }
        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <GradeAndClassSelector gradeSelectID={this.state.gradeSelectID}
                                       classSelectID={this.state.classSelectID}
                                       classOption={this.state.classOption}
                                       gradeActive={this.gradeActive}
                                       classActive={this.classActive}
                                       handleSearch={this.handleSearch}/>

                <Table columns={columns}
                       dataSource={shownItems}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                       bordered/>
                <Button className="btn-orange" icon="plus" onClick={this.addInfo}>新建</Button>

                <Modal title={this.state.formType=="edit"?"编辑学生信息":"添加学生"}
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                       footer={[]}
                >
                    <CreateStudentForm handleRefrsh={this.handleRefrsh} handleCancel={this.handleCancel} editData={this.state.editData} formType={this.state.formType}/>
                </Modal>



            </div>
        )
    }
}

export = StudentsystemIDTable