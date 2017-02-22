import * as React from 'react'
import MIAssessMain = require('./MIAssess/MIAssess')
import {getMenuInfoList} from "common/menuUtil";
import {AssessCenterStruct} from "common/Config/MenuConfig";
"use strict";
import {withRouter, Link} from "react-router";

interface TestMainProps extends React.Props<TestMain> {
}

class TestMain extends React.Component<TestMainProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {

        var links = getMenuInfoList(AssessCenterStruct);

        return (
            <div className="main-container-withLeftTab">
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
                <div className="col2-withLeftTab-rightSide">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export = withRouter(TestMain)