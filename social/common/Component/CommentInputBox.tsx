import * as React from 'react'
import { Row, Col,Button,Input } from 'antd';
import QQFace = require('./QQFace')
"use strict";

interface CommentInputBoxProps extends React.Props<CommentInputBox> {
    className?:string,
    style?:any,
    type:string,
    commentID?:string,
    commentSubmit?:Function
}
interface CommentInputBoxState {
    QQFaceFlag?: boolean,
}

class CommentInputBox extends React.Component<CommentInputBoxProps, CommentInputBoxState> {
    constructor(props) {
        super(props);
        this.state = {QQFaceFlag:false}
        this.handleClick = this.handleClick.bind(this);
        this.QQFaceSingleSubmit = this.QQFaceSingleSubmit.bind(this);
        this.showQQFace = this.showQQFace.bind(this);
    }

    static defaultProps = {
        className:""
    };

    handleClick(e){
        this.props.commentSubmit(this.props.commentID);
    }
    //回调，选择的表情显示在inputContent
    QQFaceSingleSubmit(path){
        var img = '<img src="'+path+'"/>';
        var html = $(".input-box").html()+img;
       $(".input-box").html(html);
        
    }
    //点击表情ICON，显示表情包
    showQQFace(){
        var flag = this.state.QQFaceFlag?false:true;
        this.setState({QQFaceFlag:flag})
    }
    render() {
        var this_ = this;
        var buttonName = this.props.type == "comment"?"评论" :"回复"

        return (
            <div className={"comments-area "+this.props.className} style={this.props.style}>
               <div className="input-box" contentEditable="true"></div>
                <div className="am-margin-top-xs" >
                    <i className="fa fa-smile-o" onClick={this.showQQFace}></i>
                    <Button type="primary" className="pull-right" onClick={this.handleClick}>{buttonName}</Button>
                </div>
                {
                    this.state.QQFaceFlag &&  <QQFace  QQFaceSingleSubmit={this.QQFaceSingleSubmit} />

                }
            </div>
        )
    }
}

export = CommentInputBox