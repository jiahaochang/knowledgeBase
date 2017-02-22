import * as React from 'react'
import {DatePicker, Row, Col, Select,Tooltip,Input,message,Radio,Button,Form,Icon,Upload  } from 'antd'
import TextareaWithButton = require('../../../../common/Component/TextareaWithButton')

import * as ajaxUtil from 'common/ajaxUtil'
import * as actionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {getUserIDFromStorage} from 'common/storageUtil'
import {getStudentPerformanceOptions} from '../../TeacherPersnalPageContext'
"use strict";

import Immutable = require('immutable')
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;
interface TeacherRecordStudentPerformanceProps extends React.Props<TeacherRecordStudentPerformance> {
    studentID: string,
    studentName?:string,
    refresh?:Function,
    form?:any,
}

interface TeacherRecordStudentPerformanceState {
    currentStudentID?: string,
    performanceTypes?:Array<any>,
    performanceLevels?:Array<any>
}

/**
 * 老师界面 学生表现记录 老师记录学生表现
 */
class TeacherRecordStudentPerformance extends React.Component<TeacherRecordStudentPerformanceProps, TeacherRecordStudentPerformanceState> {
    constructor(props) {
        super(props);
        this.state = {
            performanceTypes:[],
            performanceLevels:[]
        };
        this.save = this.save.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    static defaultProps = {};


    componentWillMount(){
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props){
        var performanceData = Immutable.fromJS(getStudentPerformanceOptions()).toJS();
        this.setState({
            performanceTypes:performanceData.performanceTypes,
            performanceLevels:performanceData.performanceLevels,
        })
        const {setFieldsValue} = props.form;
        setFieldsValue({
            performanceDate:new Date()
        });
    }


    //保存
    save(e){
        var this_ = this;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log(values);
            values["studentUserID"] = this_.props.studentID;
            values["teacherUserID"] = getUserIDFromStorage();
            ajaxUtil.getDataByActionIDWithQuery(actionTypes.SAVE_TEACHER_STUDENTPERFORMANCE_RECORD,{studentPerformance:values},function (response) {
                message.success("添加成功");
                this_.props.form.resetFields();
                this_.props.refresh();
            })

        });
    }

    //重置表格
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    }

    render() {
        
        const text=<span>点击右边头像自动显示姓名</span>
        var saveBtn = <Button onClick={this.save} className="btn-blue am-margin-left-sm">保存</Button>;
        var cancelBtn = <Button onClick={this.handleReset} className="am-margin-left-sm">取消</Button>;
        
        const iconProps = {
            name: 'file',
            action: '/upload.do',
            //headers: {
            //    authorization: 'authorization-text',
            //},
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功。`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败。`);
                }
            },
        };
        var upload = <Upload {...iconProps}><Button type="ghost"><Icon type="upload" />点击上传</Button></Upload>;

        const {getFieldProps} = this.props.form;
        const performanceLevelIDProps = getFieldProps("performanceLevelID",{
            rules:[
                {
                    required: true,
                    message:"表现情况不能为空"
                }
            ]
        });

        const performanceTypeIDProps = getFieldProps("performanceTypeID", {
            rules:[
                {
                    required: true,
                    message:"类别不能为空"
                }
            ]
        });

        const performanceDateProps = getFieldProps("performanceDate", {
            rules:[
                {
                    required: true,
                    type:"date",
                    message:"日期不能为空"
                }
            ]
        });

        const contentProps = getFieldProps("content", {
            rules:[
                {
                    required: false
                }
            ]
        });

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 15 },
        };

        //图片上传 todo
        /*<Row >
            <Col span={20}>
                相关材料：
            </Col>
            <Col span={4}>
                {upload}
            </Col>
        </Row>*/

        return (
            <div className="am-margin-top">
                <Form horizontal form={this.props.form}>
                    <Row >
                        <Col span={6}>
                            姓名：
                            <Tooltip placement="top" title={text}>
                                <Input disabled  value={this.props.studentName}  style={{width:"90px"}}/>
                            </Tooltip>
                        </Col>
                        <Col span={9} offset="1">
                            <FormItem label="日期" {...formItemLayout}>
                                <DatePicker    placeholder="请选择时间" {...performanceDateProps}   />
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem label="类别" {...formItemLayout}>
                                <Select   {...performanceTypeIDProps}>
                                    {
                                        this.state.performanceTypes.map(function (item, index) {
                                            return (
                                                <Option value={item.performanceTypeID.toString()} key={item.performanceTypeName+item.performanceTypeID}>{item.performanceTypeName}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24}>
                           <FormItem  label="表现情况" wrapperCol={{ span: 15 }}  labelCol={{ span: 3 }} >
                               <RadioGroup {...performanceLevelIDProps}>
                                   {
                                       this.state.performanceLevels.map(function (item, index) {
                                           return (
                                               <Radio value={item.performanceLevelID.toString()} key={index}>{item.performanceLevelName}</Radio>
                                           )
                                       })
                                   }
                               </RadioGroup>
                           </FormItem>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24}>
                            <FormItem label="补充说明（选填）" wrapperCol={{ span: 18 }}  labelCol={{ span: 5 }}  >
                                <Input type="textarea" {...contentProps}/>
                            </FormItem>
                        </Col>
                    </Row>

                    <div className="am-margin-top-sm am-cf" style={{marginRight:"70px"}}>
                        <div className="pull-left">
                            {saveBtn}
                            {cancelBtn}
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export = createForm()(TeacherRecordStudentPerformance)