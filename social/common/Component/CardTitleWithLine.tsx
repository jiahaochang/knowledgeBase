import * as React from 'react'
import IconRotate180WithClick = require('./IconRotate180WithClick')
"use strict";

interface TextColorLineProps extends React.Props<CardTitleWithLine> {
    title:string,
    rightText?:any,
    scaleFlag?:boolean,
    style?:any,
    className?:string,
    toggleCollapse?:Function,
    titleIconType?:string //title上的Icon
}
interface TextColorLineState {
    scaleName: string
}

class CardTitleWithLine extends React.Component<TextColorLineProps, TextColorLineState> {
    constructor(props) {
        super(props);
        this.state = {
            scaleName:"收起"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        className:""
    };

    handleClick(isCollapsed){
        this.props.toggleCollapse(isCollapsed);
    }

    render() {
        return (
            <div className={"text-colorLine "+this.props.className} style={this.props.style}>
                {
                    this.props.titleIconType &&
                    <i className={"fa "+this.props.titleIconType}></i>
                }
                {this.props.title}
                <span className="rightText">
                    {this.props.rightText}
                    {
                        this.props.scaleFlag &&  <IconRotate180WithClick handleClick={this.handleClick}/>
                    }
                </span>
            </div>
        )
    }
}

export = CardTitleWithLine