import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select,Modal} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
import CreateTeacherAdminForm = require('./CreateTeacherAdminForm')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
import context = require('../../AdminPageContext')
import {isEmptyObject} from '../../../../common/commonFunc'
import {changeClassMapGradeIDBeKey,ALL,GRADEALL,CLASSALL} from '../../AdminPageUtil'
import GradeAndClassSelector = require('./GradeAndClassSelector')
const Option = Select.Option;
"use strict";

interface TeacherAdminAccountTableProps extends React.Props<TeacherAdminAccountTable> {

}

interface TeacherAdminAccountTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    classOption?:Array<any>,
    gradeSelectID?:string,
    classSelectID?:string,
    searchContent?:string,
    searchOrNot?:boolean,
    visible?:boolean,
    editData?:any,
    formType?:string
}
/**
 * 教师管理员帐户table
 */
class TeacherAdminAccountTable extends React.Component<TeacherAdminAccountTableProps, TeacherAdminAccountTableState> {
    constructor(props) {
        super(props);
        this.gradeActive = this.gradeActive.bind(this)
        this.classActive = this.classActive.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
        this.handleRefrsh = this.handleRefrsh.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.editInfo = this.editInfo.bind(this)
        this.addInfo = this.addInfo.bind(this)
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            classOption:[],
            gradeSelectID:GRADEALL,
            classSelectID:CLASSALL,
            searchContent:"",
            searchOrNot:false,
            visible:false,
            editData:{},
            formType:""
        }
    }

    static defaultProps = {};
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

    componentWillMount(){
        var  data = []
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_MANAGERCOUNT, function (response) {
            data=response.result.teacherAccounts
            for(var i=0;i< data.length;i++){
                var gradeObj = data[i].department;
                if( typeof gradeObj.grades != "undefined"){
                    data[i]["gradeName"] = gradeObj.grades[0].gradeName.toString();
                    data[i]["gradeID"] = gradeObj.grades[0].grade.toString();
                    if( typeof gradeObj.grades[0].classes != "undefined"){
                        data[i]["className"] = gradeObj.grades[0].classes[0].className.toString();
                        data[i]["classID"] = gradeObj.grades[0].classes[0].classID.toString();
                    }
                    else{
                        data[i]["className"]=ALL
                        data[i]["classID"] =CLASSALL
                    }
                }
                else{
                    data[i]["gradeName"] =ALL
                    data[i]["className"]=ALL
                    data[i]["classID"] =CLASSALL
                    data[i]["gradeID"]=GRADEALL
                }
            }
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

    handleSearch(value){
        /*alert(value);*/
        this.setState({
            searchContent:value,
            searchOrNot:true,
        })
    }

    confirm() {
        message.info('点击了确定');
    }
    //点击添加教师/管理员，显示模态对话框
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
    render() {
        var this_ = this;
        const deleteText = "确定要删除这个任务吗"
        const columns = [
            {
                title: '序号',
                key:'systemID',
                dataIndex: 'systemID',
            },
            {
                title: '类型',
                key:'roleType',
                dataIndex: 'roleType',
            },
            {
                title: '所在年级',
                key:'gradeName',
                dataIndex: 'gradeName',
            },
            {
                title: '所在班级',
                key:'className',
                dataIndex: 'className',
            },
            {
                title: '姓名',
                key:'name',
                dataIndex: 'name',
             },
            {
                title: '帐号',
                key:'teacherUserID',
                dataIndex: 'teacherUserID',
            },
            {
                title: '手机号',
                key:'tel',
                dataIndex: 'tel',
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
                if(this.state.gradeSelectID==this.state.data[i].gradeID){
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
                if(studentInClass[i].teacherUserID.indexOf(searchContent)!=-1||studentInClass[i].name.indexOf(searchContent)!=-1){
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
                <Button className="btn-yellow" icon="plus" onClick={this.addInfo}>新建</Button>
                <Modal title={this.state.formType=="edit"?"编辑管理员信息":"添加管理员"}
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                       footer={[]}
                >
                    <CreateTeacherAdminForm handleRefrsh={this.handleRefrsh} handleCancel={this.handleCancel} editData={this.state.editData} formType={this.state.formType}/>
                </Modal>
            </div>
        )
    }
}

export = TeacherAdminAccountTable