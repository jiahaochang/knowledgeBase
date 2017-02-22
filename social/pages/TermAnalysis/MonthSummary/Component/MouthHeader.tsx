import * as React from 'react'
import IconRotate180WithClick = require('common/Component/IconRotate180WithClick')
"use strict";

interface MouthHeaderProps extends React.Props<MouthHeader> {
    title:string,
    rightText?:any,
    addtitle:string,
    scaleFlag?:boolean,
    style?:any,
    className?:string,
    toggleCollapse?:Function,
}

interface MouthHeaderState {

}

class MouthHeader extends React.Component<MouthHeaderProps, MouthHeaderState> {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(isCollapsed){
        this.props.toggleCollapse(isCollapsed);
    }

    static defaultProps = {};

    render() {
        return (
            <div className={"header-with-add "+this.props.className} style={this.props.style}>
                <div className="title">{this.props.title}</div>
                <span className="addtitle am-padding-left-xl" >{this.props.addtitle}</span>
                <span className="rightText ">
                    {this.props.rightText}
                    {
                        this.props.scaleFlag &&  <IconRotate180WithClick handleClick={this.handleClick}/>
                    }
                </span>
            </div>
        )
    }
}

export = MouthHeader