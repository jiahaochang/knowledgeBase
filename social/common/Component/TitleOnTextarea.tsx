import * as React from 'react'

"use strict";

interface TitleOnTextareaProps extends React.Props<TitleOnTextarea> {
    title?: string,
    rightMsg?: string
}

interface TitleOnTextareaState {

}

/**
 * 左侧带有蓝色竖条的 title
 */
class TitleOnTextarea extends React.Component<TitleOnTextareaProps, TitleOnTextareaState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div className="title-on-textarea">
                <span>{this.props.title}</span>
                <span>{this.props.rightMsg}</span>
            </div>
        )
    }
}

export = TitleOnTextarea