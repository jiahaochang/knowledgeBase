import * as React from 'react'
"use strict";
import {withRouter, Link} from "react-router";
import {getMenuInfoList} from "../../common/menuUtil";
import {StudentTermAnalysisDefaultStruct} from "../../common/Config/MenuConfig";

interface TermAnalysisProps extends React.Props<TermAnalysis> {
}

interface TermAnalysisState {

}

/**
 * 学期总结主页
 */
class TermAnalysis extends React.Component<TermAnalysisProps, TermAnalysisState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
    };

    componentDidMount(){

    }
    
    render() {

        var links = getMenuInfoList(StudentTermAnalysisDefaultStruct);

        return (
            <div className="main-container">
                <div className="col2-withLeftTab-leftSide">
                    <div className="fixed-nav-btnList" >
                        <ul>
                            {links.map(function(item, index){
                                return (
                                    <li key={index}><Link to={{pathname:item.url}}  activeClassName="active">{item.displayName}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col2-withLeftTab-rightSide am-margin-top">
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export = withRouter(TermAnalysis)