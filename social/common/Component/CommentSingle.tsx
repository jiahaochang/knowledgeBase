import * as React from 'react'
import { Button, Icon,Row,Col,Tooltip  } from 'antd'
import CommentInputBox = require('./CommentInputBox')
"use strict";

interface CommentSingleProps extends React.Props<CommentSingle> {
    commentSingle:any,
    subCommentSubmit?:Function
}
interface CommentSingleState {
    commentID?:string

}
/**
 *个人主页---评论列表，包含点赞、评论、回复操作
 */
const replyText = <span>回复</span>;
const likeText = <span>点赞</span>;
class CommentSingle extends React.Component<CommentSingleProps, CommentSingleState> {
    constructor(props) {
        super(props);
        this.replyPrimary = this.replyPrimary.bind(this);
        this.replySecondary = this.replySecondary.bind(this);
        this.clickLike = this.clickLike.bind(this);
    }
    //对回复的回复进行回复
    replySecondary(userID,commentID,parentCommentID,e){
        this.props.subCommentSubmit(commentID,parentCommentID);
    }
    //对主回复进行回复
    replyPrimary(userID,commentID){
        this.props.subCommentSubmit(commentID,commentID);
    }
    //点赞
    clickLike(userID,e){
        var likeCount = parseInt($(e.currentTarget).text());
        var currLikeCount =$(e.currentTarget).parent().hasClass("active")?(likeCount-1):(likeCount+1);
        $(e.currentTarget).text(currLikeCount);
        $(e.currentTarget).parent().toggleClass("active")

    }

    static defaultProps = {

    };


    render() {
        var this_ = this;
        var parentCommentID = this.props.commentSingle.commentID;
        return (
         <li className="comments-item levelOneItem" >
             <div className="comments-item-bd">
                 <div className="ui-avatar">
                     <img src={this.props.commentSingle.headImage}/>
                 </div>
                 <div className="comments-content">
                     <div className="">
                         <span className="nickName">{this.props.commentSingle.name}</span>
                         <span className="date">{this.props.commentSingle.date}</span>
                                            <span className="replyAndLike">
                                                 <Tooltip placement="topLeft" title={replyText}>
                                                     <i className=" anticon anticon-message" onClick={this.replyPrimary.bind(this,this.props.commentSingle.userID,this.props.commentSingle.commentID)}></i>
                                                  </Tooltip>
                                                 <Tooltip placement="topLeft" title={likeText}>
                                                      <i className={this.props.commentSingle.admire.isAdmired?"fa fa-thumbs-o-up active":"fa fa-thumbs-o-up"} onClick={this.clickLike.bind(this,this.props.commentSingle.commentID)}>{this.props.commentSingle.admire.count}</i>
                                                 </Tooltip>
                                            </span>
                     </div>
                     <div className="">{this.props.commentSingle.commentContent}</div>
                 </div>
                 <div className="mod-comments-sub">
                     <ul >
                         {this.props.commentSingle.subComments.map(function(sub, index){
                                 return (
                                     <li className="comments-item" key={index}>
                                         <div className="comments-item-bd">
                                             <div className="ui-avatar">
                                                 <img src={sub.headImage}/>
                                             </div>
                                             <div className="comments-content">
                                                 <div className="">
                                                     <span className="nickName">{sub.fromUserName}</span>回复
                                                     <span className="nickName two">{sub.toUserName}</span>
                                                     <span className="date">{sub.date}</span>
                                                            <span className={sub.admire.isAdmired?"replyAndLike active":"replyAndLike"}>
                                                                 <Tooltip placement="topLeft" title={replyText}>
                                                                     <i className=" anticon anticon-message" onClick={this_.replySecondary.bind(this_,sub.userID,sub.commentID,parentCommentID)}></i>
                                                                  </Tooltip>
                                                                 <Tooltip placement="topLeft" title={likeText}>
                                                                      <i className="fa fa-thumbs-o-up" onClick={this_.clickLike.bind(this_,sub.commentID)}>{sub.admire.count}</i>
                                                                 </Tooltip>
                                                            </span>
                                                 </div>
                                                 <div className="">{sub.commentContent}</div>
                                             </div>

                                         </div>
                                     </li>
                                 )
                             }
                         )}

                     </ul>
                 </div>
             </div>
         </li>
            
        )
    }
}

export = CommentSingle