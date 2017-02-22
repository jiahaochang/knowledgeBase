import * as React from 'react'
"use strict";
import {Score} from "../Data/Score";

interface ScoreSingleTableProps extends React.Props<ScoreSingleTable> {
    data: Array<Score>
}

interface ScoreSingleTableState {

}

class ScoreSingleTable extends React.Component<ScoreSingleTableProps, ScoreSingleTableState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var {data} = this.props;
        return (
            <ul className={"score-with-item am-avg-sm-"+this.props.data.length}>
                {data.map(function (item, index) {
                    return (
                        <li key={index}>
                            <div >{item.subject}</div>
                            <div >{item.score}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export = ScoreSingleTable