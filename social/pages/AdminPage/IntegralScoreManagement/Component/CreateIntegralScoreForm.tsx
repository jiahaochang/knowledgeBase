import * as React from 'react'
import {  Form, Input,Row,Col,Select,Modal,message, InputNumber  } from 'antd';
import {isEmptyObject} from '../../../../common/commonFunc'
import * as ajaxUtil from 'common/ajaxUtil'
import Immutable = require('immutable')
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;

"use strict";

interface CreateIntegralScoreFormProps extends React.Props<CreateIntegralScoreForm> {
    form?:any,
    editData?:any,
    handleRefresh?:Function,
    hideModal?:Function,
    visible?:boolean,
    score?:number
}
interface CreateIntegralScoreFormState {
    schoolIntegralScoreItemID?:string,
    score?:number
}

class CreateIntegralScoreForm extends React.Component<CreateIntegralScoreFormProps, CreateIntegralScoreFormState>{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    static defaultProps = {};

    show(reviewProps){
        var editData = reviewProps.editData;
        const {setFieldsValue} = this.props.form;
        var schoolIntegralScoreItemID = editData.schoolIntegralScoreItemID;
        var score = editData.score;

        this.setState({
            schoolIntegralScoreItemID: schoolIntegralScoreItemID,
            score:score,
        });
        setFieldsValue({
            integralScore:!isEmptyObject(editData)?editData.score:"",
        });

    }

    componentWillMount(){
        this.show(this.props);
    }
    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.show(newProps);
        }
    }

    handleSubmit(e) {
        var this_ = this;

        this.props.form.validateFields((errors, record) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            record["schoolIntegralScoreItemID"] = this_.state.schoolIntegralScoreItemID;
            record["score"] = this_.state.score;
            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SET_ADMIN_INTEGRALSCOREITEM,record,function (response) {
                this_.props.form.resetFields();
                message.success("保存成功");
                this_.props.handleRefresh();
            })
        });
        console.log(this.state.score+'a 1111111111111')
    }

    onChange(value) {
        var this_ = this;
        console.log('changed', value);
        this_.setState({
            score: value
        })
        console.log(this_.state.score);
    }
    handleCancel(e) {
        e.preventDefault();
        this.props.form.resetFields();
        this.props.hideModal();
    }

    render(){
        const { getFieldProps } = this.props.form;
        const integralScoreProps = getFieldProps('integralScore', {
            rules: [
                { required: true, message: '请修改积分', type: "number"}
            ],
        });
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 8},
        };
        const formItemLayoutInputNumber = {
            labelCol: { span: 10 },
            wrapperCol: { span: 8},
        };
        return(
            <Modal title={"编辑活动积分"}
                   visible={this.props.visible}
                   onOk={this.handleSubmit}
                   onCancel={this.handleCancel}>
                <Form horizontal form={this.props.form}>
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <FormItem {...formItemLayout} label="积分活动大类：">
                                <Input type="textarea" rows={1} autosize readOnly style={{resize:'none'}} placeholder={this.props.editData.rootIntegralScoreCategoryName}/>
                            </FormItem>
                            <FormItem {...formItemLayout} label="积分活动小类：">
                                <Input type="textarea" rows={1} autosize readOnly style={{resize:'none'}} placeholder={this.props.editData.integralScoreCategoryName}/>
                            </FormItem>
                            <FormItem {...formItemLayoutInputNumber}
                                label="积分：">
                                <InputNumber min={1} max={100} onChange={this.onChange} {...integralScoreProps}/>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>

            </Modal>
        )
    }
}

export = createForm()(CreateIntegralScoreForm)