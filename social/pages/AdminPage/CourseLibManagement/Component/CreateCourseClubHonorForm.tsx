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

interface CreateCourseClubHonorFormProps extends React.Props<CreateCourseClubHonorForm> {
    form?:any,
    handleCancel?:Function,
    handleRefrsh?:Function,
    editData?:any,
    formType?:string

}

interface CreateCourseClubHonorFormState {

}
/**
 * 编辑管理员/教师信息 or  添加管理员/教师信息
 */
class CreateCourseClubHonorForm extends React.Component<CreateCourseClubHonorFormProps, CreateCourseClubHonorFormState>{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.state = {

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

    showAddOrEdit(studentProps){
        if(!isEmptyObject(studentProps.editData)){
            var editData = studentProps.editData;
            const {setFieldsValue} = this.props.form;
            setFieldsValue({
                name:editData.eventHolderName,
                rootQualityCategoryName:editData.rootQualityCategoryName,
                qualityCategoryName:editData.qualityCategoryName
            });
        }else{
            const {setFieldsValue} = this.props.form;
            setFieldsValue({

            });
        }

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
                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.CREATE_ADMIN_EVENTHOLDER,values,function(response){
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
                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_EVENTHOLDER,values,function(response){
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
        const systemIDProps = getFieldProps('rootQualityCategoryName', {
            rules: [
                { required: true, message: '根目录不能为空' },
                { validator: this.userExists },
            ],
        });
        const nameProps = getFieldProps('name', {
            rules: [
                { required: true, message: '名称不能为空' }
            ],
        });
        const gradeProps = getFieldProps('qualityCategoryName', {
            rules: [
                { required: true, message: '目录不能为空' }
            ],
        });
        const formItemLayout = {
            labelCol: { span: 6 ,offset:0},
            wrapperCol: { span: 18,offset:0 },
        };
        return (
            <Form horizontal form={this.props.form}>
                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="根目录：">
                            <Input placeholder="请输入根目录"
                                {...systemIDProps} />
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="名称：">
                            <Input  placeholder="请输入名称"
                                {...nameProps} />
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="目录：">
                            <Input  placeholder="请输入目录"
                                {...gradeProps} />
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

export = createForm()(CreateCourseClubHonorForm)