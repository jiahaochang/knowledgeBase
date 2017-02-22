import * as React from 'react'

"use strict";
import {withRouter, Link} from "react-router";
import * as ActionTypes from '../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as TestActionTypes from '../../actions/AdminPage/AdminPageActionTypes'
import * as ajaxUtil from '../../common/ajaxUtil'
import {moduleIDInfoMap} from '../../common/Config/TeacherPersonalPageConfig'
import {getResponseCache} from '../../common/ResponseCacheContext'
import {getMenuInfoList} from "../../common/menuUtil";
import { OtherTeacherPageDefaultStruct} from "../../common/Config/MenuConfig";

interface OtherTeacherPageProps extends React.Props<OtherTeacherPage> {
    location?: any
}

interface OtherTeacherPageState {
    links?: Array<any>,
    otherTeacherUserID?: string
}

class OtherTeacherPage extends React.Component<OtherTeacherPageProps, OtherTeacherPageState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    componentWillMount(){
        //var response = ajaxUtil.getDataFromContextByActionID(getResponseCache(), ActionTypes.GET_TEACHER_MODULECONFIG);
        var links = getMenuInfoList(OtherTeacherPageDefaultStruct);
        var otherTeacherUserID = this.props.location.query.otherTeacherUserID;
        this.setState({
            links,
            otherTeacherUserID
        })
    }
    
    render() {
        var otherTeacherUserID = this.state.otherTeacherUserID;

        if (!otherTeacherUserID){
            return <div>loading</div>
        }

        return (
            <div className="main-container">
                <div className="col2-withLeftTab-leftSide">
                    <div className="fixed-nav-btnList" >
                        <ul>
                            {this.state.links.map(function(item, index){
                                var linkInfo = {
                                    pathname:item.url,
                                    query:{
                                        disableEdit:true,
                                        otherTeacherUserID:otherTeacherUserID
                                    }
                                };
                                return (
                                    <li key={index}><Link to={linkInfo}  activeClassName="active">{item.displayName}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="col2-withLeftTab-rightSide am-margin-top am-margin-bottom">{this.props.children}</div>
            </div>
        )
    }
}

export = withRouter(OtherTeacherPage)