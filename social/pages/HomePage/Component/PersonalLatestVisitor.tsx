import * as React from 'react'

"use strict";
import StudentListWithClickCallback = require("../../TeacherPersonalPage/ClassNotification/Component/StudentListWithClickCallback");
import {getDataByActionIDAsync, getDataByActionIDWithQueryAsync} from "../../../common/ajaxUtil";
import {GET_STUDENT_LATESTVISITOR} from "../../../actions/HomePage/HomePageActionTypes";
import visitor = Nicezy.visitor;
import Visitors = require('./Visitors')
import {getUserIDFromStorage} from "../../../common/storageUtil";

interface PersonalLatestVisitorProps extends React.Props<PersonalLatestVisitor> {
    style?:any,
    className?:string,
    router?: any,
    targetUserID?: string
}
interface PersonalLatestVisitorState {
    visitors?: Array<visitor>
}

class PersonalLatestVisitor extends React.Component<PersonalLatestVisitorProps, PersonalLatestVisitorState> {
    constructor(props) {
        super(props);
        this.state = {
            visitors:[]
        }
    }

    componentDidMount(){

    }

    componentWillMount(){
        var this_ = this;
        var targetUserID = !!this.props.targetUserID?this.props.targetUserID:getUserIDFromStorage();

        getDataByActionIDWithQueryAsync(GET_STUDENT_LATESTVISITOR, {targetUserID},function (response) {
            this_.setState({
                visitors: response.result.latestVisitors
            })
        })
    }

    static defaultProps = {
        className:""
    };

    render() {
        var visitors = this.state.visitors;
        return (
            <div className={this.props.className} style={this.props.style}>
                <div style={{marginBottom:"25px"}}><b>最近来访</b></div>
                <Visitors visitors={visitors}/>
            </div>
        )
    }
}

export = PersonalLatestVisitor