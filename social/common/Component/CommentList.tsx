import * as React from 'react'
import { Button, Icon,Row,Col,Tooltip,Input  } from 'antd'
import CommentSingle = require('./CommentSingle')
import CommentInputBox = require('./CommentInputBox')
"use strict";

interface CommentListProps extends React.Props<CommentList> {
    commentList:Array<any>,
    commentSubmit?:Function
}
interface CommentListState {
    parentCommentID?:string,
    curCommentID?:string,
    commentBoxDefaultShow?:boolean,
}
/**
 *个人主页---评论列表，包含点赞、评论、回复操作
 */
class CommentList extends React.Component<CommentListProps, CommentListState> {
    constructor(props) {
        super(props);
        this.state = {
            parentCommentID:"",
            commentBoxDefaultShow:false
        };
        this.subCommentSubmit = this.subCommentSubmit.bind(this);
        this.commentBoxShow = this.commentBoxShow.bind(this);
    }

    static defaultProps = {
    };

    subCommentSubmit(commentID,parentCommentID){
        this.setState({parentCommentID:parentCommentID,curCommentID:commentID,commentBoxDefaultShow:false})
    }

    commentBoxShow(){
        this.setState({commentBoxDefaultShow:!this.state.commentBoxDefaultShow})
    }



    render() {
        var this_ = this;
        var icon = <i className="fa fa-smile-o" style={{color:"#6db0f2",fontSize:"18px"}}></i>;
        var commentBox = this.state.commentBoxDefaultShow?<CommentInputBox type="comment"  commentID={"123"} commentSubmit={this.props.commentSubmit} />:<Input  onClick={this.commentBoxShow} addonAfter={icon} defaultValue="说两句吧" />
        return (
            <div className="am-margin-bottom-sm">
                <div className="comments-list">
                    <ul>
                        {this.props.commentList.map(function(comment, index){
                                return (
                                    <div key={index} >
                                        <CommentSingle commentSingle={comment} subCommentSubmit={this_.subCommentSubmit}/>
                                        {
                                            this_.state.parentCommentID == comment.commentID &&
                                            <CommentInputBox type="reply"  commentID={this_.state.curCommentID} commentSubmit={this_.props.commentSubmit}  />
                                        }

                                    </div>
                                )
                            }
                        )}
                    </ul>
                </div>
                {commentBox}
            </div>
        )
    }
}

export = CommentList