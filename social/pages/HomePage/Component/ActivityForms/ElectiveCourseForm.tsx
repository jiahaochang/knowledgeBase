import * as React from 'react'
import {Row, Col, Input, DatePicker, Button, Form, Popconfirm, message,Modal} from 'antd'
import ChooseElectiveCourseModal = require('./ChooseElectiveCourseModal')
//调用API
import {getDataByActionIDWithQuery} from "../../../../common/ajaxUtil"
import * as actionTypes from '../../../../actions/HomePage/HomePageActionTypes'


const createForm = Form.create;
const FormItem = Form.Item;
var GET_COURSE = null;
"use strict";
import IEvent = Nicezy.IEvent;

interface ElectiveCourseFormProps extends React.Props<ElectiveCourseForm> {
    record?: IEvent,
    form?: any,
    componentState?:"editOldRecord"|"readOnly"|"addNew",
    cancel?:Function,
    delete?:Function,
    commentBoxShowHide?:Function,
    from?:string,
    refresh?:Function,
    paramMap?:any,
    disableEdit?: boolean//看其他人页面 不可编辑
}

interface ElectiveCourseFormState {
    hide?: boolean,
    visible?:boolean
}

/**
 * 选修课
 * 有3种状态：editOldRecord readOnly addNew
 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
 *      只读，底部有按钮 编辑
 *      添加新记录 内容为空 底部有按钮 保存 取消
 */
class ElectiveCourseForm extends React.Component<ElectiveCourseFormProps, ElectiveCourseFormState> {
    constructor(props) {
        super(props);
        this.state = {
            hide:false,
        };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.chooseCourseName = this.chooseCourseName.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    //编辑
    edit(){
        this.props.commentBoxShowHide(false,"editOldRecord");
        this.initForm(this.props.record)
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
            console.log(values);
            if(this_.props.from == "headAdd"){
                this_.props.cancel?this_.props.cancel():"";
            }
            this_.props.refresh();
        });

    }

    //取消
    cancel(){
        if(this.props.from == "headAdd"){
            this.props.cancel?this.props.cancel():"";
        }else{
            this.props.commentBoxShowHide(true,"readOnly");
        }
    }

    //删除
    deleteRecord(){
        message.success('删除成功');
        this.props.delete();
    }

    //表单初始化
    initForm(record){
        const {setFieldsValue} = this.props.form;
        setFieldsValue({
            eventHolderName: record.eventHolderName,
            eventCategoryName:record.eventCategoryName,
            eventContent:record.eventContent,
            courseCredit:record.courseCredit.toString(),
            examScore:record.examScore.toString()
        });
    }

    chooseCourseName(){
        GET_COURSE = getDataByActionIDWithQuery(actionTypes.GET_ELECTIVECOURSE_CATEGORY,this.props.paramMap,null).result;
        var map = {activityCategoryID:"other", activityCategoryName:"其他"}
        GET_COURSE.activityCategories.push(map);

        this.setState({
            visible: true,
        });

    }

    handleOk() {
        this.setState({
            visible: false,
        });
    }
    handleCancel() {
        console.log('点击了取消');
        this.setState({
            visible: false,
        });
    }

    static defaultProps = {};

    render() {
        const text = '确定要删除该班团活动吗？';
        var saveBtn = <Button onClick={this.save} className="btn-blue am-margin-left-sm">保存</Button>;
        var cancelBtn = <Button onClick={this.cancel} className="am-margin-left-sm">取消</Button>;
        var editBtn = <Button onClick={this.edit} className="btn-blue am-margin-left-sm">编辑</Button>;
        var deleteBtn =  <Popconfirm  title={text} onConfirm={this.deleteRecord}>
            <a  className="redLink am-margin-left-sm">删除本条记录</a>
        </Popconfirm> ;

        const {getFieldProps} = this.props.form;
        const eventHolderNameProps = getFieldProps("eventHolderName",{
            rules:[
                {
                    required: true,
                    message: "名称不能为空"
                }
            ]
        });

        const eventCategoryNameProps = getFieldProps("eventCategoryName",{
            rules:[
                {
                    required: true,
                    message:"类别不能为空"
                }
            ]
        });

        const eventContentProps = getFieldProps("eventContent", {
            rules:[
                {
                    required: true,
                    message: "表现不能为空"
                }
            ]
        });

        const examScoreProps = getFieldProps("examScore", {
            rules:[
                {
                    required: true,
                    message: "成绩不能为空"
                }
            ]
        });

        const courseCreditProps = getFieldProps("courseCredit", {
            rules:[
                {
                    required: true,
                    message: "学分不能为空"
                }
            ]
        });

        const formItemLayout = {
            labelCol: { span: 10 },
            wrapperCol: { span: 12 },
        };

        const formItemLayout2 = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };

        var defaultClassName = "class-activity-form comprehensive-form ";
        var className = this.state.hide?(defaultClassName+"am-hide "):defaultClassName;
        return (
            <div className={className}>
                <Form horizontal form={this.props.form}>
                    <Row className="am-margin-top-sm">
                        <Col span={12}>
                            <FormItem {...formItemLayout} label="课程名称：">
                                {
                                    this.props.componentState === "readOnly" &&
                                    this.props.record.eventHolderName
                                }
                                {
                                    this.props.componentState !== "readOnly" &&
                                    <Input {...eventHolderNameProps} onClick={this.chooseCourseName}/>
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label="所属类别：">
                                {
                                    this.props.componentState === "readOnly" &&
                                    this.props.record.qualityCategoryName
                                }
                                {
                                    this.props.componentState !== "readOnly" &&
                                    <Input {...eventCategoryNameProps}  />
                                }
                            </FormItem>
                        </Col>
                    </Row>

                    {
                        this.props.componentState === "readOnly" &&
                        <Row>
                            <Col span={24}>
                                <FormItem {...formItemLayout2} label="课程表现：">
                                    {this.props.record.eventContent}
                                </FormItem>
                            </Col>
                        </Row>
                    }

                    {
                        this.props.componentState !== "readOnly" &&
                        <Row>
                            <FormItem wrapperCol={{ span: 20, offset: 1 }} labelCol={{ span:5}} label="课程表现：">
                                <Input {...eventContentProps} type="textarea"  rows={4}   />
                            </FormItem>
                        </Row>
                    }

                    <Row >
                        <Col span={12}>
                            <FormItem {...formItemLayout} label="我的成绩：">
                                {
                                    this.props.componentState === "readOnly" &&
                                    this.props.record.examScore
                                }
                                {
                                    this.props.componentState !== "readOnly" &&
                                    <Input {...examScoreProps}  />
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label="课程学分：">
                                {
                                    this.props.componentState === "readOnly" &&
                                    this.props.record.courseCredit
                                }
                                {
                                    this.props.componentState !== "readOnly" &&
                                    <Input {...courseCreditProps}  />
                                }
                            </FormItem>
                        </Col>
                    </Row>



                    <div className=" am-cf am-margin-top-sm" >
                        {
                            this.props.componentState === "addNew" &&
                                <div className="delete-line">
                                    <div className="pull-right">
                                        {saveBtn}
                                        {cancelBtn}
                                    </div>
                                </div>
                        }
                        {
                            this.props.componentState === "editOldRecord" &&
                            <div className="delete-line">
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
                            this.props.componentState === "readOnly" &&  !this.props.disableEdit &&
                            <div className="pull-right">
                                {editBtn}
                            </div>
                        }

                    </div>
                </Form>

                <Modal title="选择课程名称"
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                >
                    <ChooseElectiveCourseModal  record={GET_COURSE} />
                </Modal>

            </div>
        )
    }
}

export =  createForm()(ElectiveCourseForm)