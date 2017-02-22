import * as React from 'react'

import TextColorLine = require('./CardTitleWithLine')
import TabBarColor = require('./CardTabs')
"use strict";
import AbstractCollapsableComponent = require("./AbstractCollapsableComponent");
import {AddPropsHOC} from "./AddPropsHOC";

interface CollapsableCardProps extends React.Props<CollapsableCardProps> {
    titleWithClick: any,
    collapsableElement: React.ReactNode,
    style?:any,
    className?:string;
    id?:string
}

/**
 * 可收缩组件，
 *  titleWithClick 表示标题栏，带有收起按钮的
 *  collapsableElement 表示需要被折叠的组件
 */
class CollapsableCard extends AbstractCollapsableComponent<CollapsableCardProps, {}>{

    protected getCollapsableDiv():any {
        return $(this.getDOMNode()).children().last();
    }
    constructor(props) {
        super(props);
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    static defaultProps = {
        className:""
    };

    toggleCollapse(isCollapse){
        isCollapse?this.collapse():this.expand();
    }

    render() {
        return (
            <div className={"am-margin-top code-box "+this.props.className} id={this.props.id?this.props.id:""}>
                {AddPropsHOC(this.props.titleWithClick, {toggleCollapse: this.toggleCollapse})}
                <div className="highlight-wrapper">
                    {this.props.collapsableElement}
                </div>
            </div>
        )
    }
}

export = CollapsableCard