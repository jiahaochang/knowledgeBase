import * as React from 'react'
import TextareaWithButton = require('./TextareaWithButton')
"use strict";

interface TextareaWithTitleProps extends React.Props<TextareaWithTitle> {
    title?: string,
    minLength?: number,
    maxLength?: number,
    score?: number,
    submit?(words: string):void,
    className?: string,
    content?: string,
    readOnly?:boolean,
    placeholder?:string,
    saveBtnText?: string,
    resetAfterSave?: boolean,
    buttonShow?:boolean
}

interface TextareaWithTitleState {

}

/**
 * 带有标题栏的文本框
 */
class TextareaWithTitle extends React.Component<TextareaWithTitleProps, TextareaWithTitleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var lengthMsg = "";
        var integralScoreMsg = "";
        var {minLength, score} = this.props;
        if(minLength){
            lengthMsg = "(不少于" + minLength + "字)";
        }

        if (score){
            integralScoreMsg = "积分：" + score + "分";
        }

        var className = "textarea-with-title";
        if(this.props.className){
            className = className + " " +this.props.className;
        }

        return (
            <div className={className}>
                {
                    this.props.title &&
                    <div className="title">
                        <span>{this.props.title}{lengthMsg}</span>
                        <span>{integralScoreMsg}</span>
                    </div>
                }
                <TextareaWithButton {...this.props}/>
            </div>
        )
    }
}

export = TextareaWithTitle