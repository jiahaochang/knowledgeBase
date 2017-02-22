import * as React from 'react'
import {Input,Button } from 'antd';
import {defaultMinLength,defaultMaxLength} from 'common/Config/TermAnalysisConfig'
import Immutable = require('immutable')
"use strict";

interface TextColorLineProps extends React.Props<TextareaWithButton> {
    content?:string,
    placeholder?: string,
    minLength?:number, //最小字数限制
    maxLength?:number //最大字数限制
    submit?(words: string):void, //提交的回调函数
    readOnly?: boolean,
    saveBtnText?: string, //保存按钮的文字
    resetAfterSave?: boolean, //保存结束后，是否清除内容，恢复初始状态，主要用在消息发布栏
    buttonShow?:boolean//是否显示按钮，适于仅显示文本内容，不对文本作处理
}
interface TextareaWithButtonState {
    inputValue?: string,
    isEditing?:boolean, //是否在编辑
    minLength?:number,
    maxLength?:number,
    errorMsg?:string
}

/**
 *textarea带有提交的按钮
 * 传值---textarea初始化的默认值
 */
class TextareaWithButton extends React.Component<TextColorLineProps, TextareaWithButtonState> {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:this.props.content?this.props.content:"",
            isEditing: false,
            minLength: this.props.minLength?this.props.minLength: defaultMinLength,
            maxLength: this.props.maxLength?this.props.maxLength: defaultMaxLength,
            errorMsg: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleCancelChange = this.handleCancelChange.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
    }

    static defaultProps = {
        buttonShow:true
    };


    componentWillReceiveProps(nextProps){
        if(Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)){
            this.setState({
                inputValue:nextProps.content?nextProps.content:"",
            })
        }
    }

    handleInputChange(e) {
        var strings = e.target.value;
        if(strings.length > this.state.maxLength){
            strings = strings.substr(0, this.state.maxLength);
        }

        this.setState({
            errorMsg: "",
            inputValue: strings,
        });
    }

    //编辑按钮
    handleEditChange(){
        this.setState({
            isEditing: true,
        });
    }

    //保存按钮
    handleSubmitChange(){
        if(!this.state.inputValue || this.state.inputValue.length < this.state.minLength){
            this.setState({
                errorMsg: "请输入不少于" + this.state.minLength + "个字符"
            })
        }else if(this.state.inputValue.length > this.state.maxLength){
            this.setState({
                errorMsg: "请输入不多于" + this.state.maxLength + "个字符"
            })
        }else{
            this.props.submit(this.state.inputValue);
            if(this.props.resetAfterSave){
                this.setState({
                    isEditing:false,
                    inputValue: ""
                })
            }else{
                this.setState({
                    isEditing:false,
                });
            }

        }
    }

    //取消按钮
    handleCancelChange(){
        this.setState({
            isEditing: false,
            inputValue: this.props.content,
            errorMsg: ""
        });
    }

    render() {
        var readOnly = this.props.readOnly?true:false;
        var saveBtnText = this.props.saveBtnText?this.props.saveBtnText:"保存";
        var btns = (!this.state.isEditing)?[
           <div key="1">
               <span style={{color: "red",paddingRight:"20px"}}>{this.state.errorMsg}</span>
               <Button className="btn-blue" size="small"  onClick={this.handleEditChange}>编辑</Button>
           </div>
        ]:[
            <div key="2">
                <span style={{color: "red",paddingRight:"20px"}}>{this.state.errorMsg}</span>
                <Button  className="btn-blue" size="small"  onClick={this.handleSubmitChange}>{saveBtnText}</Button>
                <Button  size="small"  onClick={this.handleCancelChange}>取消</Button>
            </div>
        ];
        //一行100字，最少显示4行
        var rows = Math.ceil(this.state.maxLength/100);
        rows = rows>4?rows:4;

        return (
            <div className="textarea-with-button">
                <Input type="textarea" value={this.state.inputValue} onChange={this.handleInputChange}  placeholder={this.props.placeholder} style={{}} disabled={!this.state.isEditing} rows={rows}/>
                {
                    !readOnly && this.props.buttonShow &&
                    <div className="btn-groups">
                        {btns}
                    </div>
                }

            </div>
        )
    }
}

export = TextareaWithButton