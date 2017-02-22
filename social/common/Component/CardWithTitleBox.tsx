import * as React from 'react'
"use strict";

interface CardWithTitleBoxProps extends React.Props<CardWithTitleBox> {
    subComponent:any,
    title:string,
    className?:string,
    style?:string,
}

class CardWithTitleBox extends React.Component<CardWithTitleBoxProps, {}> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        className:""
    };

    render() {
        return (
            <div className={"card-with-title-box "+this.props.className} style={this.props.style}>
                <div className="title">{this.props.title}</div>
                <div className="content">
                    {this.props.subComponent}
                </div>
            </div>
        )
    }
}

export = CardWithTitleBox