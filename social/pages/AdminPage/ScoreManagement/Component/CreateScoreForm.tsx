import * as React from 'react'
import { Button, Form, Input,Row,Col,Select,Modal } from 'antd';
import context = require('../../AdminPageContext')
import {isEmptyObject} from '../../../../common/commonFunc'
import {ALL} from '../../AdminPageUtil'
import Immutable = require('immutable')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;

"use strict";

interface CreateScoreFormProps extends React.Props<CreateScoreForm> {
    form?:any,
    handleCancel?:Function,
    handleRefrsh?:Function,
    editData?:any,
    formType?:string
    grades?:Array<any>,
}

interface CreateScoreFormState {
    classOption?:Array<any>,
    gradeSelectID?:string,
    classSelectID?:string,

}
/**
 * 编辑成绩信息 or  添加成绩信息
 */
class CreateScoreForm extends React.Component<CreateScoreFormProps, CreateScoreFormState>{
    constructor(props) {
        super(props);
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleClassChange = this.handleClassChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.getTermOptions=this.getTermOptions.bind(this)
        this.state = {
            classOption:[],
            gradeSelectID:"",
            classSelectID:""
        }
    }

    static defaultProps = {};

    componentWillMount(){
        this.showAddOrEdit(this.props);
    }

    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.showAddOrEdit(newProps);
        }
    }
    getTermOptions(grade){
        var gradeTermOptions=[];
        for(var i=0; i< this.props.grades.length; i++){
            if(grade==this.props.grades[i].grade){
                gradeTermOptions=this.props.grades[i].terms;
            }
        }
        return gradeTermOptions
    }
    showAddOrEdit(studentProps){
        if(!isEmptyObject(studentProps.editData)){
            var editData = studentProps.editData;
            console.log(editData)
            var classOption = this.getTermOptions(editData.gradeID);
            this.setState({
                gradeSelectID:editData.grade,
                classSelectID:editData.termID,
                classOption:classOption
            })
            const {setFieldsValue} = this.props.form;
            setFieldsValue({
                stuClass: editData.termID,
                grade:editData.grade,
                name:editData.examName,
                systemID:editData.examID
            });
        }else{
            var gradeID = this.props.grades[0].grade
            var classOption = this.getTermOptions(gradeID);
            this.setState({
                gradeSelectID:gradeID,
                classSelectID:classOption[0].termID,
                classOption:classOption
            })
            const {setFieldsValue} = this.props.form;
            setFieldsValue({
                stuClass: classOption[0].termID,
                grade:gradeID,
            });
        }

    }

    //年级改变
    handleGradeChange(value){
        const {setFieldsValue} = this.props.form;
        setFieldsValue({
            grade: value
        });
        var classOption = this.getTermOptions(value);
        classOption.splice(0,1);
        this.setState({
            gradeSelectID:value,
            classOption:classOption,
            classSelectID:classOption[0].termID
        })

    }
    //班级改变
    handleClassChange(value){
        const {setFieldsValue} = this.props.form;
        setFieldsValue({
            stuClass: value
        });
        this.setState({
            classSelectID:value
        })
    }

    //取消
    handleCancel(e) {
        e.preventDefault();
        this.props.form.resetFields();
        this.props.handleCancel();
    }

    //提交按钮
    handleSubmit(e) {
        var this_ = this;
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            if(this.props.formType=='add'){
                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.CREATE_ADMIN_EXAMINFO,values,function(response){
                    if(response.status=='success'){
                        console.log('CreateSuccess');
                        this_.props.form.resetFields();
                        this_.props.handleRefrsh();
                    }
                    else{
                        console.log('failed');
                    }
                });
            }
            else{
                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_EXAMINFO,values,function(response){
                    if(response.status=='success'){
                        console.log('UpdateSuccess');
                        this_.props.form.resetFields();
                        this_.props.handleRefrsh();
                    }
                    else{
                        console.log('failed');
                    }
                });
            }
        });
    }

    //验证帐号是否已存在
    userExists(rule, value, callback) {
        if (!value) {
            callback();
        } else {
            setTimeout(() => {
                if (value === 'JasonWood') {
                    callback([new Error('抱歉，该帐名已被占用。')]);
                } else {
                    callback();
                }
            }, 800);
        }
    }



    render() {
        var this_　= this;
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const systemIDProps = getFieldProps('systemID', {
            rules: [
                { required: true, message: '帐号不能为空' },
                { validator: this.userExists },
            ],
        });
        const nameProps = getFieldProps('name', {
            rules: [
                { required: true, message: '名称不能为空' }
            ],
        });
        const gradeProps = getFieldProps('grade', {
            rules: [
                { required: true, message: '年级不能为空' }
            ],
        });
        const stuClassProps = getFieldProps('stuClass', {
            rules: [
                { required: true, message: '班级不能为空' }
            ],
        });
        const formItemLayout = {
            labelCol: { span: 6 ,offset:0},
            wrapperCol: { span: 18,offset:0 },
        };
        var gradeOption = this.props.grades;
        if(gradeOption[0].gradeName == ALL){
            gradeOption.splice(0,1);
        }
        return (
            <Form horizontal form={this.props.form}>

                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="名称：">
                            <Input  placeholder="请输入姓名"
                                {...nameProps} />
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="年级：">
                            <Select  {...gradeProps}  onChange={this.handleGradeChange} value={this.state.gradeSelectID}>
                                {gradeOption.map(function(option, index){
                                        return  <Option key={index} value={option.grade}>{option.gradeName}</Option>
                                    }
                                )}
                            </Select>
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="学期：">
                            <Select {...stuClassProps} onChange={this.handleClassChange} value={this.state.classSelectID}>
                                {this.state.classOption.map(function(option, index){
                                        return <Option key={index} value={option.termID}>{option.termName}</Option>
                                    }
                                )}

                            </Select>
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={18} style={{textAlign:"center"}}>
                        <Button className="btn-orange" style={{ marginRight: "35px" }}   onClick={this.handleSubmit}>提交</Button>
                        <Button  onClick={this.handleCancel}>取消</Button>
                    </Col>
                </Row>

            </Form>
        )
    }
}

export = createForm()(CreateScoreForm)