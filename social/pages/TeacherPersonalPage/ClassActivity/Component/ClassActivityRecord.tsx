import * as React from 'react'

"use strict";
import {Row, Col, Input, DatePicker, Button, Form, Popconfirm, message} from 'antd'
import * as actionTypes from '../../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {getDataByActionIDWithQuery} from "../../../../common/ajaxUtil"
import {isEmptyObject,formatDate} from '../../../../common/commonFunc'
import {getUserIDFromStorage} from 'common/storageUtil'

const createForm = Form.create;
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

interface ClassActivityRecordProps extends React.Props<ClassActivityRecord> {
    record?: any,
    form?: any,
    componentState?: "editOldRecord"|"readOnly"|"addNew",
    cancel?:Function,
    from?:string,
    refresh?:Function,
    disableEdit?: boolean
}

interface ClassActivityRecordState {
    componentState?: "editOldRecord"|"readOnly"|"addNew",
    hide?: boolean,
    records?: Array<any>
}

//todo: 添加一个toDate 还有文件上传
/**
 * 班团活动
 * 有3种状态：editOldRecord readOnly addNew
 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
 *      只读，底部有按钮 编辑
 *      添加新记录 内容为空 底部有按钮 保存 取消
 */
class ClassActivityRecord extends React.Component<ClassActivityRecordProps, ClassActivityRecordState> {
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

    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.setState({
                componentState: newProps.componentState
            })
        }
    }
    

    //编辑
    edit(){
        this.setState({
            componentState: "editOldRecord"
        });
        this.initForm(this.props.record);
    }

   /* relatedFiles:[
        {
            uploadFileName:"",
            uploadFileID:"",
            uploadFileUrl:""
        }
        ],*/

    //保存
    save(e){
        var this_ = this;
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            if(this_.props.from == "headAdd"){
                this_.props.cancel?this_.props.cancel():"";
            }

            var activityTime = values.activityTime;
            values["fromDate"] = activityTime[0];
            values["toDate"] = activityTime[1];
            values["teacherUserID"] = getUserIDFromStorage();
            var stuClassActivityID = this_.state.componentState == "addNew"?"":this_.props.record.stuClassActivityID;
            values["stuClassActivityID"] = stuClassActivityID;

            getDataByActionIDWithQuery(actionTypes.SAVE_TEACHER_ACTIVITY,{classActivity:values},function (response) {
                message.success('保存成功');
                this_.props.refresh();
            });

        });
    }

    //取消
    cancel(){
        if(this.props.from == "headAdd"){
            this.props.cancel?this.props.cancel():"";
        }else{
            this.setState({
                componentState: "readOnly"
            });
        }
    }

    //删除
    deleteRecord(){
        var this_ = this;
        var postData = {};
        postData["teacherUserID"] = getUserIDFromStorage();
        postData["stuClassActivityID"] = this.props.record.stuClassActivityID;
        getDataByActionIDWithQuery(actionTypes.DELETE_TEACHER_ACTIVITY,postData,function (response) {
            message.success('删除成功');
            this_.setState({
                hide: true
            })
        });

    }

    //表单初始化
    initForm(record){
        const {setFieldsValue} = this.props.form;
        setFieldsValue({
            stuClassActivityTheme: record.stuClassActivityTheme,
            activityTime:[new Date(record.fromDate),new Date(record.toDate)],
            stuClassActivityTarget:record.stuClassActivityTarget,
            stuClassActivityPlan:record.stuClassActivityPlan,
        });
    }

    render() {
        const text = '确定要删除该班团活动吗？';
        var saveBtn = <Button onClick={this.save} className="btn-blue am-margin-left-sm">保存</Button>;
        var cancelBtn = <Button onClick={this.cancel} className="am-margin-left-sm">取消</Button>;
        var editBtn = <Button onClick={this.edit} className="btn-blue am-margin-left-sm">编辑</Button>;
        var deleteBtn = <Popconfirm  title={text} onConfirm={this.deleteRecord}>
                            <a  className="redLink am-margin-left-sm">删除本条记录</a>
                        </Popconfirm> ;

        const {getFieldProps} = this.props.form;
        const activityThemeProps = getFieldProps("stuClassActivityTheme",{
            rules:[
                {
                    required: true,
                    message: "主题不能为空"
                }
            ]
        });

        const intentionProps = getFieldProps("stuClassActivityTarget", {
            rules:[
                {
                    required: true,
                    message: "设计意图不能为空"
                }
            ]
        });

        const teachingPlanProps = getFieldProps("stuClassActivityPlan", {
            rules:[
                {
                    required: true,
                    message: "活动教案不能为空"
                }
            ]
        });

        const timeProps = getFieldProps('activityTime', {
            rules: [
                {
                    required: true,
                    message: "活动时间不能为空",
                    type: "array",
                }
            ],
        });

        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 10 },
        };

        const formItemLayout2 = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        var separator = "~";
        var className = this.state.hide?"class-activity-form am-hide":"class-activity-form";

        return (
            <div className={className}>
                <Form horizontal form={this.props.form}>
                    <Row className="am-margin-top-sm">
                        <Col span={12}>
                            <FormItem {...formItemLayout} label="活动主题：">
                                {
                                    this.state.componentState === "readOnly" &&
                                    this.props.record.stuClassActivityTheme
                                }
                                {
                                    this.state.componentState !== "readOnly" &&
                                    <Input {...activityThemeProps} />
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <FormItem {...formItemLayout2} label="活动时间：">
                                {
                                    this.state.componentState === "readOnly" &&
                                        <span>
                                            {formatDate(this.props.record.fromDate,"yyyy-MM-dd")}
                                            <span>{separator}</span>
                                            {formatDate(this.props.record.toDate,"yyyy-MM-dd")}
                                        </span>
                                }


                                {
                                    this.state.componentState !== "readOnly" &&
                                    <RangePicker
                                        style={{ width: 284 }}
                                        format="yyyy-MM-dd"

                                        {...timeProps}
                                    />
                                }

                            </FormItem>
                        </Col>
                    </Row>
                    {
                        this.state.componentState === "readOnly" &&
                        <Row>
                            <Col span={24}>
                                <FormItem {...formItemLayout2} label="设计意图：">
                                    {this.props.record.stuClassActivityTarget}
                                </FormItem>
                            </Col>
                        </Row>
                    }

                    {
                        this.state.componentState !== "readOnly" &&
                        <Row>
                            <FormItem wrapperCol={{ span: 20, offset: 1 }} labelCol={{ span:4}} label="设计意图：">
                                <Input {...intentionProps} type="textarea"  />
                            </FormItem>
                        </Row>
                    }

                    {
                        this.state.componentState === "readOnly" &&
                        <Row>
                            <Col span={24}>
                                <FormItem {...formItemLayout2} label="活动教案：">
                                    {this.props.record.stuClassActivityPlan}
                                </FormItem>
                            </Col>
                        </Row>
                    }

                    {
                        this.state.componentState !== "readOnly" &&
                        <Row>
                            <FormItem wrapperCol={{ span: 20, offset: 1 }} labelCol={{ span:4}} label="活动教案：">
                                <Input {...teachingPlanProps} type="textarea"  />
                            </FormItem>
                        </Row>
                    }

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

export = createForm()(ClassActivityRecord)