import * as React from 'react'

"use strict";

interface ReportSingleProps extends React.Props<ReportSingle> {
    number?:number,
    title:string,
    subComponent:any,
    className?:string


}

interface ReportSingleState {

}
/**
 * 个人综合素质报告的一部分---每个带有编号的title+具体内容
 * 传值：编号number   标题title   内容 subComponent
 */
class ReportSingle extends React.Component<ReportSingleProps, ReportSingleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
        className:""
    };

    render() {
        return (
            <div className={"report-single am-margin-top-lg "+this.props.className}>
                <div className="report-single-title">
                    <div className="titleDIV">
                            <span className="titleSpan">
                                {
                                    this.props.number &&
                                    <div className="number">{this.props.number}</div>
                                }
                                <span className="titleName">{this.props.title}</span>
                            </span>
                    </div>
                </div>
                <div className="content">
                    {this.props.subComponent}
                </div>
            </div>
        )
    }
}

export = ReportSingle