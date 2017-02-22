import * as React from 'react'
import { Button, Form, Input,Row,Col,Select,Modal } from 'antd';
import context = require('../../AdminPageContext')
import {isEmptyObject} from '../../../../common/commonFunc'
import {ALL} from '../../AdminPageUtil'
import Immutable = require('immutable')
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;

"use strict";

interface CreateElectiveCourceFormProps extends React.Props<CreateElectiveCourceForm> {
    form?:any,
    handleCancel?:Function,
    handleRefrsh?:Function,
    editData?:any,
    formType?:string

}

interface CreateElectiveCourceFormState {
    classOption?:Array<any>,
    gradeSelectID?:string,
    classSelectID?:string,

}
/**
 * 编辑选修课 or  添加选修课
 */
class CreateElectiveCourceForm extends React.Component<CreateElectiveCourceFormProps, CreateElectiveCourceFormState>{
    constructor(props) {
        super(props);
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleClassChange = this.handleClassChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
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

    showAddOrEdit(studentProps){
        if(!isEmptyObject(studentProps.editData)){
            var editData = studentProps.editData;
            var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[editData.grade]).toJS();
            if(classOption[0].className == ALL){
                classOption.splice(0,1);
            }
            this.setState({
                gradeSelectID:editData.grade,
                classSelectID:editData.stuClass,
                classOption:classOption
            })
            const {setFieldsValue} = this.props.form;
            setFieldsValue({
                stuClass: editData.stuClass,
                grade:editData.grade,
                name:editData.name,
                systemID:editData.systemID
            });
        }else{
            var gradeID = context.getGradeClassResponseData()[1].grade;
            var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[gradeID]).toJS();
            if(classOption[0].className == ALL){
                classOption.splice(0,1);
            }
            this.setState({
                gradeSelectID:gradeID,
                classSelectID:classOption[0].classID,
                classOption:classOption
            })
            const {setFieldsValue} = this.props.form;
            setFieldsValue({
                stuClass: classOption[0].classID,
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
        var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[value]).toJS();
        classOption.splice(0,1);
        this.setState({
            gradeSelectID:value,
            classOption:classOption,
            classSelectID:classOption[0].classID
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
            console.log(values);
            this.props.form.resetFields();
            this.props.handleRefrsh();
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
                { required: true, message: '姓名不能为空' }
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
        var gradeOption = Immutable.fromJS(context.getGradeClassResponseData()).toJS();
        if(gradeOption[0].gradeName == ALL){
            gradeOption.splice(0,1);
        }
        return (
            <Form horizontal form={this.props.form}>
                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="帐号：">
                            <Input placeholder="请输入帐号"
                                {...systemIDProps} />
                        </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={18}>
                        <FormItem
                            {...formItemLayout}
                            label="姓名：">
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
                            label="班级：">
                            <Select {...stuClassProps} onChange={this.handleClassChange} value={this.state.classSelectID}>
                                {this.state.classOption.map(function(option, index){
                                    return <Option key={index} value={option.classID}>{option.className}</Option>
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

export = createForm()(CreateElectiveCourceForm)