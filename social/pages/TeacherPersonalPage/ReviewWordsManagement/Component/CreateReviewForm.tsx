import * as React from 'react'
import {  Form, Input,Row,Col,Select,Modal,message } from 'antd';
import {isEmptyObject} from '../../../../common/commonFunc'
import {getUserIDFromStorage} from 'common/storageUtil'
import {getReviewWordsSelectData} from '../../TeacherPersnalPageContext'
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import Immutable = require('immutable')
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;

"use strict";

interface CreateReviewFormProps extends React.Props<CreateReviewForm> {
    form?:any,
    editData?:any,
    handleRefresh?:Function,
    formType?:string,
    visible?:boolean,
    hideModal?:Function
}
interface CreateReviewFormState {
    qualityCategoryIdOption?:string,  //评论小类选中的ID
    qualityCategoryName?:string,//评论小类中的name
    qualityCategoryIdOptions?:Array<any>,
    rootQualityCategoryOption?:string,//评论大类选中的ID
    rootQualityCategoryName?:string,//评论大类选中的name
    rootQualityCategoryOptions?:Array<any>,

}

class CreateReviewForm extends React.Component<CreateReviewFormProps, CreateReviewFormState>{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.rootQualityCategoryOptionChanged = this.rootQualityCategoryOptionChanged.bind(this);
        this.qualityCategoryIdOptionChanged = this.qualityCategoryIdOptionChanged.bind(this);
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

    showAddOrEdit(reviewProps){
        var editData = reviewProps.editData;
        const {setFieldsValue} = this.props.form;
        var rootQualityCategoryOptions = getReviewWordsSelectData()["rootQualityCategories"];
        var rootQualityCategoryOption = !isEmptyObject(editData)?editData.rootQualityCategoryID:rootQualityCategoryOptions[0].rootQualityCategoryID;
        var rootQualityCategoryName = !isEmptyObject(editData)?editData.rootQualityCategoryName:rootQualityCategoryOptions[0].rootQualityCategoryName;
        var qualityCategoryIdOptions = getReviewWordsSelectData()["qualityCategories"][rootQualityCategoryOption];
        var qualityCategoryIdOption = !isEmptyObject(editData)?editData.qualityCategoryID: qualityCategoryIdOptions[0].qualityCategoryID;
        var qualityCategoryName = !isEmptyObject(editData)?editData.qualityCategoryName: qualityCategoryIdOptions[0].qualityCategoryName;

        this.setState({
            rootQualityCategoryOption: rootQualityCategoryOption,
            rootQualityCategoryName:rootQualityCategoryName,
            rootQualityCategoryOptions:rootQualityCategoryOptions,
            qualityCategoryIdOption:qualityCategoryIdOption,
            qualityCategoryName:qualityCategoryName,
            qualityCategoryIdOptions:qualityCategoryIdOptions,
        });

        setFieldsValue({
            evaluationItemContent:!isEmptyObject(editData)?editData.evaluationItemContent:"",
        });

    }
    //提交
    handleSubmit(e) {
        var this_ = this;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            values["rootQualityCategoryID"] = this_.state.rootQualityCategoryOption;
            values["rootQualityCategoryName"] = this_.state.rootQualityCategoryName;
            values["qualityCategoryID"] = this_.state.qualityCategoryIdOption;
            values["qualityCategoryName"] = this_.state.qualityCategoryName;
            values["teacherUserID"] = window.sessionStorage.getItem("UserID");
            values["evaluationItemID"] = !isEmptyObject(this_.props.editData)?this_.props.editData.evaluationItemID:"";
            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SAVE_TEACHER_REVIEWWORD,values,function (response) {
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

    //评论大类
    rootQualityCategoryOptionChanged(value){

        var qualityCategoryIdOptions = getReviewWordsSelectData()["qualityCategories"][value.key];
        var qualityCategoryIdOption = qualityCategoryIdOptions[0].qualityCategoryID;
        var qualityCategoryName = qualityCategoryIdOptions[0].qualityCategoryName;

        this.setState({
            rootQualityCategoryOption: value.key,
            rootQualityCategoryName:value.label,
            qualityCategoryIdOptions:qualityCategoryIdOptions,
            qualityCategoryIdOption:qualityCategoryIdOption,
            qualityCategoryName:qualityCategoryName
        });

    }
    //评论小类别
    qualityCategoryIdOptionChanged(value){
        this.setState({
            qualityCategoryIdOption:value.key,
            qualityCategoryName:value.label
        });
    }



    render() {
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

        return (
        <Modal title={this.props.formType=="edit"?"编辑评论信息":"添加评论"}
               visible={this.props.visible}
               onOk={this.handleSubmit}
               onCancel={this.handleCancel}>

            <Form horizontal form={this.props.form}>

                <Row>
                    <Col span={18}>
                        <FormItem {...formItemLayout}
                            label="对应省系统项目："
                        >
                            <Select value={{ key: this.state.rootQualityCategoryOption }} labelInValue  style={{width:"100%"}} onChange={this.rootQualityCategoryOptionChanged}>
                                {
                                    this.state.rootQualityCategoryOptions.map(function(option, index){
                                        return  <Option key={index} value={option.rootQualityCategoryID}>{option.rootQualityCategoryName}</Option>
                                    })
                                }
                            </Select>

                        </FormItem>

                        <FormItem {...formItemLayout}
                            label="对应项目分类指标："
                        >
                            <Select  value={{ key: this.state.qualityCategoryIdOption }} labelInValue  style={{width:"100%"}} onChange={this.qualityCategoryIdOptionChanged}>
                                {
                                    this.state.qualityCategoryIdOptions.map(function(option,index){
                                            return  <Option key={index} value={option.qualityCategoryID}>{option.qualityCategoryName}</Option>
                                        }
                                    )}
                            </Select>
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="评语内容"
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

export = createForm()(CreateReviewForm)