import * as React from 'react'

"use strict";

interface IconRotate180WithClickProps extends React.Props<IconRotate180WithClick> {
    text?:string,
    className?: string,
    handleClick: Function
}

interface IconRotate180WithClickState {
    collapsed: boolean
}

class IconRotate180WithClick extends React.Component<IconRotate180WithClickProps, IconRotate180WithClickState> {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.handleClick(!this.state.collapsed);
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {

        let propsClassName = this.props.className?this.props.className:" anticon anticon-circle-o-right ";
        let collapsedClassName = this.state.collapsed?" ":" expand";
        let iconClassName = " collapse " + propsClassName + collapsedClassName;

        return (
            <span className="scaletext" onClick={this.handleClick}>{this.props.text}<i className={iconClassName}></i></span>
        )
    }
}

export = IconRotate180WithClick