import * as React from 'react'
import {Input } from 'antd';
import TextareaWithButton = require('../../../common/Component/TextareaWithButton')


"use strict";

interface PersonalTargetSetSingleProps extends React.Props<PersonalTargetSetSingle> {
    style?:any,
    className?:string,
    iconName?:string,
    title:string,
    integralTip?:string,//积分
    content:any,
    type:string,//自我剖析升学目标
    termID?:string,
    textareaChange?:Function,//textarea回调
    disabled?:boolean

}
interface PersonalTargetSetSingleState {
    inputValue?: any,
}

class PersonalTargetSetSingle extends React.Component<PersonalTargetSetSingleProps, PersonalTargetSetSingleState> {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:this.props.content
        }
    }

    static defaultProps = {
        className:"",
        disabled:false
    };


    handleSubmit(e){
        this.props.textareaChange(e.target.value,this.props.type);
    }

    render() {
        return (
            <div className={"targetSetSingle "+ this.props.className} style={this.props.style}>
                <i className={"fa fa-"+ this.props.iconName}></i>
                <div className="title">
                    {this.props.title}：
                    <span className="integral-tip">{this.props.integralTip}</span>
                </div>
                <Input type="textarea" rows={4} disabled={this.props.disabled}  placeholder="太懒了，居然还没填写……" value={this.props.content} onChange={this.handleSubmit.bind(this)}/>

            </div>
        )
    }
}

export = PersonalTargetSetSingle