import * as React from 'react'
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
"use strict";

/**
 *
 */
interface ResultIntroductionProps extends React.Props<ResultIntroduction> {
    dimTypeIntroductions?:Array<any>,
    dimType?:string,
    colorName:"orange" | "blue"
}
interface ResultIntroductionState {

}

class ResultIntroduction extends React.Component<ResultIntroductionProps, ResultIntroductionState> {
    constructor(props) {
        super(props);
    }

    componentWillMount(){

    }

    render() {
        var introductions = this.props.dimTypeIntroductions;
        var dimType = this.props.dimType;
        return (
            <table className={"MIAssess-result-table am-margin-top "+this.props.colorName}>
                <tr>
                    <td className="title">{dimType}</td>
                    <td className="content">
                        {
                            introductions.map(function(intro, index){
                                return (
                                    <div key={index} className="detail">
                                        <span className="detail-title">{intro.introductionName}</span>
                                       <div>{intro.introductionValue}</div>
                                    </div>
                                )
                            })
                        }
                    </td>
                </tr>
            </table>
        )
    }
}

export = ResultIntroduction

