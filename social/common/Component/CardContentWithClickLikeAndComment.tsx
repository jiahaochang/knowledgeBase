import * as React from 'react'
import CommentList = require('./CommentList')
import {AddPropsHOC} from "./AddPropsHOC";
import {Row,Col} from 'antd'
"use strict";

interface CardContentWithClickLikeAndCommentProps extends React.Props<CardContentWithClickLikeAndComment> {
    style?:any,
    className?:string,
    showSocialBar?:boolean,//是否显示点赞和评论所在div 默认true
    likeCount?:number, //点赞数
    commentCount?:number, //评论数
    subComponent:any,
    selfLike?:boolean ,  //自己是否已点赞
    cancel?:Function,
    comments?:Array<any>,//评论列表
    componentState?:string //子组件form当前状态
}
interface CardContentWithClickLikeAndCommentState {
    commentList?:Array<any>,//评论列表
    commentFlag?:boolean,//是否显示评论列表
    likeDIV?:any,
    commentBoxFlag?:boolean //是否显示点赞 评论的box
    componentState?:string //子组件form当前状态
    isHide?:boolean

}
/**
 *个人主页---带有评论和点赞所在的颜色框
 */
class CardContentWithClickLikeAndComment extends React.Component<CardContentWithClickLikeAndCommentProps, CardContentWithClickLikeAndCommentState> {
    constructor(props) {
        super(props);
        this.state = {
            commentFlag:false,
            commentBoxFlag:this.props.showSocialBar,
            componentState:this.props.componentState,
            isHide:false
        };
        this.clickLick = this.clickLick.bind(this);
        this.showComment = this.showComment.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
        this.commentBoxShowHide = this.commentBoxShowHide.bind(this);
        this.delete = this.delete.bind(this);
    }

    //点击评论展示评论列表
    showComment(e){
        $(e.currentTarget).toggleClass("active").siblings().removeClass("active");
        var commentFlag = false;
        if($(e.currentTarget).hasClass("active")){
            //this.props.comments;
            commentFlag = true;
        }

        this.setState({commentList:this.props.comments,commentFlag:commentFlag})
    }

    static defaultProps = {
        showSocialBar:true,
        likeCount:0,
        commentCount:0,
        className:""
    };

    clickLick(e){
        $(e.currentTarget).addClass("active").siblings().removeClass("active");
        this.setState({commentFlag:false});
        var likeCount = parseInt($(e.currentTarget).children("span").text());
        var currLikeCount =$(e.currentTarget).children("i").hasClass("active")?(likeCount-1):(likeCount+1);
        $(e.currentTarget).children("span").text(currLikeCount);
        $(e.currentTarget).children("i").toggleClass("active")
    }
    commentSubmit(commentID){
        alert(commentID)

    }

    //评论框是否显示
    commentBoxShowHide(commentBoxFlag,componentState){
        this.setState({commentBoxFlag:commentBoxFlag,componentState:componentState});
    }

    delete(){
        this.setState({isHide:true});
    }


    render() {
        var likeActive = this.props.selfLike?"active":"";
        var className = this.state.isHide?"content-with-likeAndcomment am-hide ":"content-with-likeAndcomment ";
        return (
            <div className={className+this.props.className } style={this.props.style}>
                <div className="content">
                    {AddPropsHOC(this.props.subComponent,{commentBoxShowHide:this.commentBoxShowHide,cancel:this.props.cancel,componentState:this.state.componentState,delete:this.delete})}
                </div>
                {
                    this.state.commentBoxFlag &&
                    <div className="am-cf">
                        <Row className="footer-like-comment">
                            <Col span={12} onClick={this.clickLick}>
                                <i className={"fa fa-thumbs-o-up "+likeActive}></i>点赞
                                <span className="am-padding-left-xs">{this.props.likeCount}</span>
                            </Col>
                            <Col  span={12}   onClick={this.showComment}>
                                <i className="fa fa-commenting-o" ></i>评论
                                <span className="am-padding-left-xs">{this.props.commentCount}</span>
                            </Col>
                        </Row>
                        {
                            this.state.commentFlag &&
                            <CommentList  commentSubmit={this.commentSubmit} commentList={this.state.commentList} />
                        }

                    </div>

                }
            </div>
        )
    }
}

export = CardContentWithClickLikeAndComment