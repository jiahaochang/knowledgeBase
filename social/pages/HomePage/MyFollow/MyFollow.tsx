import * as React from 'react'
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import {withRouter, Link} from "react-router";
import {SchoolTermEnum} from "../../../common/Module/SchoolTerm";
"use strict";


interface MyFollowProps extends React.Props<MyFollow> {

}

interface MyFollowState {

}

class MyFollow extends React.Component<MyFollowProps, MyFollowState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {
    };


    componentDidMount(){

    }

    render() {

        var links = [
            {
                url: "myFollow/myConcern",
                displayName: "我的关注"
            },
            {
                url: "myFollow/myFans",
                displayName: "我的粉丝"
            },
        ];

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
                <div className="col2-withLeftTab-rightSide ">
                    <PersonInfoAndRank  />
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export = MyFollow