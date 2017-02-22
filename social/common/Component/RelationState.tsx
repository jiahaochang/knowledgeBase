import * as React from 'react'

"use strict";
import relationState = Nicezy.relationState;
import size = Nicezy.size;
import {Popover} from "antd";

interface RelationStateProps extends React.Props<RelationState> {
    relationState?: relationState
    onChangeRelation?: Function,
    size?: size
}

interface RelationStateState {

}

class RelationState extends React.Component<RelationStateProps, RelationStateState> {
    constructor(props) {
        super(props);
        this.state = {};
        this.getRelationStateTextInfo = this.getRelationStateTextInfo.bind(this);
        this.changeRelation = this.changeRelation.bind(this);
    }

    static defaultProps = {};

    getRelationStateTextInfo(relationState:relationState):any{
        var alreadyFollowed = "已关注";
        var notFollowed = "未关注";
        var bothFollowed = "相互关注";
        var cancelFollow = "取消关注";
        var addFollow = "添加关注";
        switch (relationState) {
            case "0":
                return {
                    currentStateText: notFollowed,
                    nextStateText: addFollow,
                    nextState:"1"
                };
            case "1":
                return {
                    currentStateText: alreadyFollowed,
                    nextStateText: cancelFollow,
                    nextState:"0"
                };
            case "2":
                return {
                    currentStateText: bothFollowed,
                    nextStateText: cancelFollow,
                    nextState:"0"
                };
            case "-1":
                return {
                    currentStateText: notFollowed,
                    nextStateText: addFollow,
                    nextState:"1"
                };
            default:
                return {
                    currentStateText: notFollowed,
                    nextStateText: addFollow,
                    nextState:"1"
                };
        }
    }

    changeRelation(){
        var nextRelationState = this.getRelationStateTextInfo(this.props.relationState).nextState;
        this.props.onChangeRelation(nextRelationState);
    }

    render() {
        var relationStateInfo = this.getRelationStateTextInfo(this.props.relationState);
        var currentStateText = relationStateInfo.currentStateText;
        var nextStateText = relationStateInfo.nextStateText;
        const content = (
            <div style={{cursor:"pointer"}} onClick={this.changeRelation}>
                {nextStateText}
            </div>
        );
        return (
            <Popover content={content} overlayClassName="popver-width"  placement="bottom">
                <span className="rightinfo">
                    {currentStateText}<i className="fa fa-angle-down"></i>
                </span>
            </Popover>
        )
    }
}

export = RelationState