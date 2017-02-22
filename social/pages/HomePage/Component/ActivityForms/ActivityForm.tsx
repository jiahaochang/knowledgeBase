import * as React from 'react'
import {Row, Col, Input, DatePicker, Button, Form, Popconfirm, message} from 'antd'
import {isEmptyObject} from '../../../../common/commonFunc'
import {comprehensiveQualityDisplayMap} from '../../../../common/Config/HomePageConfig'
import ImageUploadList = require('../../../../common/Component/ImageUploadList')
const createForm = Form.create;
const FormItem = Form.Item;
"use strict";

interface ActivityFormProps extends React.Props<ActivityForm> {
    record?: any,
    form?: any,
    componentState?:"editOldRecord"|"readOnly"|"addNew",
    cancel?:Function,
    delete?:Function,
    commentBoxShowHide?:Function,
    from?:string,
    refresh?:Function,
    paramMap?:any,
    disableEdit?: boolean//查看其他人页面禁止编辑
}

interface ActivityFormState {
    hide?: boolean
}
/**
 * 综合素质纪录---除选修课外的七项form
 * 有3种状态：editOldRecord readOnly addNew
 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
 *      只读，底部有按钮 编辑
 *      添加新记录 内容为空 底部有按钮 保存 取消
 */
class ActivityForm extends React.Component<ActivityFormProps, ActivityFormState> {
    constructor(props) {
        super(props);
        this.state = {
            hide:false,
        };
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }

    static defaultProps = {};

    //表单赋初始值For edit
    setFormValue(record){
        const { setFieldsValue} = this.props.form;
        var valueInitMap = {};
        var paramMap = this.props.paramMap;
        var eventCategoryType = paramMap["eventCategoryType"];
        var recordItem = comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
        for (let items of recordItem) {
            for(let item of items){
                valueInitMap[item.id] = record[item.id];
            }
        }
        setFieldsValue(valueInitMap);
    }


    //编辑
    edit(){
        this.props.commentBoxShowHide(false,"editOldRecord");
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
       /* this.setState({
            hide: true
        })*/
    }

    componentWillMount(){
        if(!isEmptyObject(this.props.record)){
            this.initForm(this.props.record);
        }

    }

    //表单初始化
    initForm(record){
        const { getFieldProps, getFieldValue,setFieldsValue} = this.props.form;
        getFieldProps('content', {
            initialValue: [],
        });
        var valueInitMap = {};
        var paramMap = this.props.paramMap;
        var eventCategoryType = paramMap["eventCategoryType"];
        var recordItem = comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
        for(let items of recordItem){
            for(let item of items){
                valueInitMap[item.id] = record[item.id];
                let content = getFieldValue('content');
                var map = {};
                map["id"] = item.id;
                map["name"] = item.name;
                map["value"] = item.type=="date"?new Date(Date.parse(record[item.id].replace(/-/g,   "/"))):record[item.id];
                map["type"] = item.type;
                content = content.concat(map);
                setFieldsValue({
                    content,
                });
            }
        }
        setFieldsValue(valueInitMap);
    }

    fieldsValueItem(){
        var this_ = this;
        var paramMap = this.props.paramMap;
        var eventCategoryType = paramMap["eventCategoryType"];
        var recordItem = comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
        var fieldsValueMap = {};
        for(let items of recordItem){
            for(let item of items){
                var value = isEmptyObject(this_.props.record)?null:this_.props.record[item.id];
                fieldsValueMap[item.id] = value;
            }
        }
        return fieldsValueMap;
    }


    render() {
        var this_ = this;
        var record = this.props.record;
        const text = '确定要删除该条记录吗？';
        var saveBtn = <Button onClick={this.save} className="btn-blue am-margin-left-sm">保存</Button>;
        var cancelBtn = <Button onClick={this.cancel} className="am-margin-left-sm">取消</Button>;
        var editBtn = <Button onClick={this.edit} className="btn-blue am-margin-left-sm">编辑</Button>;
        var deleteBtn =  <Popconfirm  title={text} onConfirm={this.deleteRecord}>
            <a  className="redLink am-margin-left-sm">删除本条记录</a>
        </Popconfirm> ;

        const {getFieldProps,getFieldValue} = this.props.form;

        const formItemLayout = this.props.componentState === "readOnly"?{
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        }:{
            labelCol: { span: 10 },
            wrapperCol: { span: 14 },
        };

        const textareaFormItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        const dateFormItemLayout = {
            labelCol: { span: 11 },
            wrapperCol: { span: 12 },
        };
        var dateIndex = true;
        var paramMap = this.props.paramMap;
        var eventCategoryType = paramMap["eventCategoryType"];
        var recordItem = comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
        //begin
        var values = this_.fieldsValueItem();
        const formItems = recordItem.map(function(items, index){
            return (
                <Row key={index}>
                    {
                        items.map(function(item, index){
                            var value = values[item.id];
                            const filedProp = getFieldProps(`${item.id}`, {
                                rules:`${item.type}`=="date"?[
                                    {
                                        required: true,
                                        message:`${item.name}`+"不能为空",
                                        type: "date"
                                    }
                                ]:[
                                    {
                                        required: item.type == "uploadImg"?false:true,
                                        message:`${item.name}`+"不能为空",
                                    }
                                ]
                            });
                            var formItem = null;
                            if(item.type == "input"){
                                formItem = (
                                    <Col span={12} key={item.id}>
                                        <FormItem {...formItemLayout} label={`${item.name}：`}>
                                            {
                                                this_.props.componentState === "readOnly" &&
                                                <div>{value}</div>
                                            }
                                            {
                                                this_.props.componentState !== "readOnly" &&
                                                <Input {...filedProp}/>
                                            }
                                        </FormItem>
                                    </Col>
                                )
                            }else if(item.type == "date"){
                                if(dateIndex){
                                    formItem =  this_.props.componentState === "readOnly"?(
                                        <Col span={12} key={item.id}>
                                            <FormItem wrapperCol={{ span: 10 }} labelCol={{ span:8}} label={`${item.name}：`}>
                                                <span>{value}</span>
                                                <Col span={1} className="pull-right">
                                                    <p className="ant-form-split">-</p>
                                                </Col>
                                            </FormItem>
                                        </Col>
                                    ):(
                                        <Col span={12} key={item.id}>
                                            <FormItem {...formItemLayout} label={`${item.name}：`}>

                                                {
                                                    this_.props.componentState !== "readOnly" &&
                                                    <DatePicker {...filedProp}/>
                                                }
                                                <Col span={1} className="pull-right" style={{marginRight:"-12px"}} >
                                                    <p className="ant-form-split" >-</p>
                                                </Col>
                                            </FormItem>
                                        </Col>
                                    )

                                    dateIndex = false;
                                }else {
                                    formItem = this_.props.componentState === "readOnly"?(
                                        <Col span={6} key={item.id} style={{marginLeft:"-50px"}}>
                                            <FormItem {...dateFormItemLayout} wrapperCol={{span:18}}  >
                                                <div>{value}</div>
                                            </FormItem>
                                        </Col>
                                    ):(
                                        <Col span={8} key={item.id} style={{marginLeft:"20px"}}>
                                            <FormItem {...dateFormItemLayout} wrapperCol={{span:20}}  >
                                                <DatePicker {...filedProp}/>
                                            </FormItem>
                                        </Col>
                                    )
                                }
                            }else if(item.type == "textarea"){
                                formItem = this_.props.componentState == "readOnly"?(
                                    <Col span={24} key={item.id}>
                                        <FormItem {...textareaFormItemLayout} label={`${item.name}：`} >
                                            <div>{value}</div>
                                        </FormItem>
                                    </Col>
                                ):(
                                    <Row key={item.id}>
                                        <Col span={24} >
                                            <FormItem wrapperCol={{ span: 19}} labelCol={{ span:5}} label={`${item.name}：`} >
                                                <Input {...filedProp} type="textarea" rows={4} />
                                            </FormItem>
                                        </Col>
                                    </Row>
                                );
                            }else if(item.type == "uploadImg"){
                                formItem = this_.props.componentState == "readOnly"?(
                                    <Row key={item.id}>
                                        <Col span={24}>
                                            <FormItem {...textareaFormItemLayout} label={`${item.name}：`} >
                                                <Row style={{marginTop:"-20px"}}>
                                                    {!isEmptyObject(value) &&
                                                        value.map(function(item, index){
                                                            return <Col span={8} key={index}><img src={item.pictureUrl} style={{width:"90%"}} /></Col>
                                                        })
                                                    }
                                                </Row>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                ):(
                                    <Row key={item.id}>
                                        <FormItem wrapperCol={{ span: 19}} labelCol={{ span:5}} label={`${item.name}：`} >
                                            <ImageUploadList imgURL={value}/>
                                        </FormItem>
                                    </Row>
                                );

                            }

                            return formItem;
                        })
                    }
                </Row>
            )
        })

        //end

        var defaultClassName = "class-activity-form comprehensive-form ";
        var className = this.state.hide?(defaultClassName+"am-hide "):defaultClassName;

        return (
            <div className={className}>
                <Form horizontal form={this.props.form}>

                    {formItems}

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
                            this.props.componentState === "readOnly" && !this.props.disableEdit &&
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

export = createForm()(ActivityForm)