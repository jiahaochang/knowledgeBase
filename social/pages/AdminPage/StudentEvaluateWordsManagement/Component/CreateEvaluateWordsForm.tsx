import * as React from 'react'
import {  Form, Input,Row,Col,Select,Modal,message } from 'antd';
import {isEmptyObject} from '../../../../common/commonFunc'
import {getEvaluateWordsData} from '../../AdminPageContext'

import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'

import Immutable = require('immutable')
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;

"use strict";

interface CreateEvaluateWordsFormProps extends React.Props<CreateEvaluateWordsForm> {
    form?:any,
    editData?:any,
    handleRefresh?:Function,
    formType?:string,
    visible?:boolean,
    hideModal?:Function,
    keyWordOptions?:Array<any>  //父组件获取
}

interface CreateEvaluateWordsFormState {
    impressionTypeIDOption?:string,  //评论小类选中的ID
    impressionTypeName?:string,//评论小类中的name
    impressionTypeIDOptions?:Array<any>,

}

class CreateEvaluateWordsForm extends React.Component<CreateEvaluateWordsFormProps, CreateEvaluateWordsFormState>{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.impressionTypeIDOptionChanged = this.impressionTypeIDOptionChanged.bind(this);
    }

    componentWillMount(){
        this.showAddOrEdit(this.props);
    }

    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.showAddOrEdit(newProps);
        }
    }

    showAddOrEdit(reviewProps){
        var editData = reviewProps.editData;
        const {setFieldsValue} = this.props.form;
        var impressionTypeIDOptions = getEvaluateWordsData();

        var impressionTypeIDOption = !isEmptyObject(editData)?editData.impressionTypeName:impressionTypeIDOptions[0].impressionTypeName;
        var impressionTypeName = !isEmptyObject(editData)?editData.impressionContent:impressionTypeIDOptions[0].impressionContent;

        this.setState({
            impressionTypeIDOption: impressionTypeIDOption,
            impressionTypeName:impressionTypeName,
        });

        setFieldsValue({
            evaluationItemContent:!isEmptyObject(editData)?editData.impressionContent:"",
        });
    }

    handleSubmit(e) {
        var this_ = this;
        this.props.form.validateFields((errors, record) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            //放置选择的
            record["impressionTypeID"] = this_.state.impressionTypeIDOption;
            record["impressionTypeName"] = this_.state.impressionTypeName;
            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_IMPRESSIONWORD,record,function (response) {
                this_.props.form.resetFields();
                message.success("保存成功");
                this_.props.handleRefresh();
            })
        });
    }

    //取消
    handleCancel(e) {
        e.preventDefault();
        this.props.form.resetFields();
        this.props.hideModal();
    }

    impressionTypeIDOptionChanged(value){
        this.setState({
            impressionTypeIDOption:value.label
        })
        console.log(value)
    }

    render(){
        var this_　= this;

        const { getFieldProps } = this.props.form;
        const evaluationItemContentProps = getFieldProps('evaluationItemContent', {
            rules: [
                { required: true, message: '内容不能为空' }
            ],
        });
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16},
        };
        
        return(
            <Modal title={this.props.formType=="edit"?"编辑评论信息":"添加评论"}
                   visible={this.props.visible}
                   onOk={this.handleSubmit}
                   onCancel={this.handleCancel}>
                <Form horizontal form={this.props.form}>
                    <Row>
                        <Col span={18}>
                            <FormItem {...formItemLayout}
                                label="关键词类别："
                            >
                                <Select  value={{ key: this.state.impressionTypeIDOption }} labelInValue  style={{width:"100%"}} onChange={this.impressionTypeIDOptionChanged}>
                                        {
                                        this.props.keyWordOptions.map(function(option,index){
                                            return  <Option key={index} value={option.impressionTypeID}>{option.impressionTypeName}</Option>
                                            })
                                        }
                                </Select>
                            </FormItem>
                            <FormItem {...formItemLayout}
                                label="关键词："
                            >
                                <Input type="textarea" rows={4} placeholder="请输入评语内容" {...evaluationItemContentProps} />
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }
    

}

export = createForm()(CreateEvaluateWordsForm)