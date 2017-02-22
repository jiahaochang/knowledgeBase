import * as React from 'react'

"use strict";
import {Row, Col, Input, DatePicker, Button, Form, Popconfirm, message} from 'antd'
import {isEmptyObject,formatDate} from '../../../../common/commonFunc'
import {recordDate} from 'common/Config/TeacherPersonalPageConfig'
import {getUserIDFromStorage} from 'common/storageUtil'
//调用API
import {getDataByActionIDWithQueryAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
const createForm = Form.create;
const FormItem = Form.Item;
let dateString = "";
interface SpecialStudentRecordSingleProps extends React.Props<SpecialStudentRecordSingle> {
    studentID:string
    record?: any,
    form?: any,
    componentState?:"editOldRecord"|"readOnly"|"addNew",
    cancel?:Function,
    from?:string,
    refresh?:Function,
    disableEdit?: boolean
}

interface SpecialStudentRecordSingleState {
    componentState?: "editOldRecord"|"readOnly"|"addNew",
    hide?: boolean,
    record?:any //前台传过来的record
}

/**
 * 分析记录
 * 有3种状态：editOldRecord readOnly addNew
 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
 *      只读，底部有按钮 编辑
 *      添加新记录 内容为空 底部有按钮 保存 取消
 */
class SpecialStudentRecordSingle extends React.Component<SpecialStudentRecordSingleProps, SpecialStudentRecordSingleState> {
    constructor(props) {
        super(props);
        this.state = {
            componentState: this.props.componentState,
            hide:false,
        };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }

    static defaultProps = {};

    componentWillMount(){
        if(!isEmptyObject(this.props.record)){
            this.initForm(this.props.record);
        }
    }


    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.setState({
                componentState: newProps.componentState
            });
            if(newProps.componentState == "readOnly"){
                this.initForm(newProps.record);
            }
        }
    }

    //表单赋初始值For edit
    setFormValue(record){
        const { setFieldsValue} = this.props.form;
        var valueInitMap = {};
        var recordItem = record.record;
        for(var i=0;i<recordItem.length;i++){
            var item = recordItem[i];
            valueInitMap[item.contentTypeID] = item.contentTypeID ==recordDate?new Date(item.content):item.content;
        }
        setFieldsValue(valueInitMap);
    }

    //编辑
    edit(){
        this.setState({
            componentState: "editOldRecord"
        });
        this.setFormValue(this.props.record);
    }

    //保存
    save(e){
        var this_ = this;
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            values["specialStudentRecordID"] = this_.state.componentState == "editOldRecord"?this.props.record.specialStudentRecordID:"";
            values["teacherUserID"] = getUserIDFromStorage();  //this.props.record.teacherUserID
            values["studentUserID"] = this.props.studentID;
            values["content"] = ""; //去掉动态生成form的初始化值
            var postData =  {
                specialStudentRecord:values
            };
            //编辑过往记录  or 添加过往记录

            getDataByActionIDWithQueryAsync(actionTypes.SAVE_TEACHER_SPECIALSTUDENT_RECORD,postData,function (response) {
                if(this_.props.from == "headAdd"){
                    this_.props.cancel?this_.props.cancel():"";
                }
                message.success("保存成功");
                this_.props.refresh(this_.props.studentID);
            })

        });

    }

    //取消
    cancel(){
        if(this.props.from == "headAdd"){
            this.props.cancel?this.props.cancel():"";
        }else{
            this.setState({
                componentState: "readOnly"
            })
        }
    }

    //删除
    deleteRecord(){
        var this_ = this;
        var postData = {
            specialStudentRecordID:this.props.record.specialStudentRecordID,
            studentUserID:this.props.studentID
        };
        getDataByActionIDWithQueryAsync(actionTypes.DELETE_TEACHER_SPECIALSTUDENT_RECORD,postData,function (response) {
            message.success('删除成功');
            this_.setState({
                hide: true
            })
        })

    }

    //表单初始化
    initForm(record){
        const { getFieldProps, getFieldValue,setFieldsValue} = this.props.form;

        getFieldProps('content', {
            initialValue: [],
        });
        setFieldsValue({
            content:[]
        });
        var valueInitMap = {};
        var recordItem = record.record;
        for(var i=0;i<recordItem.length;i++){
            var item = recordItem[i];
            if(isEmptyObject(dateString) && item.contentTypeID ==recordDate ){
                dateString = formatDate(item.content,"yyyy-MM-dd");
            }
            var itemContent = item.contentTypeID ==recordDate?new Date(item.content):item.content;
            valueInitMap[item.contentTypeID] = itemContent;
            let content = getFieldValue('content');
            var map = {};
            map["id"] = item.contentTypeID;
            map["name"] = item.contentName;
            map["value"] = itemContent;
            content = content.concat(map);
            setFieldsValue({
                content,
            });
        }
        setFieldsValue(valueInitMap);
    }


    render() {
        var this_ = this;
        const text = '确定要删除该分析记录吗？';
        var saveBtn = <Button onClick={this.save} className="btn-blue am-margin-left-sm">保存</Button>;
        var cancelBtn = <Button onClick={this.cancel} className="am-margin-left-sm">取消</Button>;
        var editBtn = <Button onClick={this.edit} className="btn-blue am-margin-left-sm">编辑</Button>;
        var deleteBtn =  <Popconfirm  title={text} onConfirm={this.deleteRecord}>
            <a  className="redLink am-margin-left-sm">删除本条记录</a>
        </Popconfirm> ;

        const {getFieldProps,getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        const formItems = getFieldValue('content').map((item) => {
            const filedProp = getFieldProps(`${item.id}`, {
                rules:`${item.id}`==recordDate?[
                    {
                        required: true,
                        message:`${item.name}`+"不能为空",
                        type: "date"
                    }
                ]:[
                    {
                        required: true,
                        message:`${item.name}`+"不能为空",
                    }
                ]

            });
            var formComponent = item.id==recordDate?<DatePicker {...filedProp}/>: <Input {...filedProp} type="textarea"  />;
            var formItem = this_.state.componentState == "readOnly"?(
                <Row key={item.id}>
                    <Col span={24}>
                        <FormItem {...formItemLayout} label={`${item.name}：`} >
                            {item.id==recordDate?dateString:item.value}
                        </FormItem>
                    </Col>
                </Row>
            ):(
                <Row key={item.id}>
                    <FormItem wrapperCol={{ span: 20, offset: 1 }} labelCol={{ span:4}} label={`${item.name}：`} >
                        {formComponent}
                    </FormItem>
                </Row>
            );
            return formItem;
        });

        var className = this.state.hide?"class-activity-form am-hide":"class-activity-form"
        return (
            <div className={className}>
                <Form horizontal form={this.props.form}>

                    {formItems}

                    <div className="am-margin-top-sm am-cf" style={{marginRight:"70px"}}>
                        {
                            this.state.componentState === "addNew" &&
                            <div className="pull-right">
                                {saveBtn}
                                {cancelBtn}
                            </div>
                        }
                        {
                            this.state.componentState === "editOldRecord" &&
                            <div>
                                <div className="pull-left">
                                    {saveBtn}
                                    {cancelBtn}
                                </div>
                                <div className="pull-right">
                                    {deleteBtn}
                                </div>
                            </div>
                        }
                        {
                            this.state.componentState === "readOnly" && !this.props.disableEdit &&
                            <div className="pull-right">
                                {editBtn}
                            </div>
                        }

                    </div>
                </Form>
            </div>
        )
    }
}

export = createForm()(SpecialStudentRecordSingle)