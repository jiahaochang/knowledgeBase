import * as React from 'react'

"use strict";
import visitor = Nicezy.visitor;
import {withRouter} from "react-router";
import {goToOtherPersonalPage} from "../../../common/routeUtil";
import {getDataByActionID, getDataByActionIDWithQuery} from "../../../common/ajaxUtil";
import {
    GET_COMMON_OTHERUSERREGIONSCHOOLINFO,
    ADD_COMMON_VISITRECORD
} from "../../../actions/CommonAction/CommonActionTypes";

interface VisitorsProps extends React.Props<Visitors> {
    visitors: Array<visitor>
}

interface VisitorsState {

}

class Visitors extends React.Component<VisitorsProps, VisitorsState> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        visitors:[]
    };

    goToOtherPersonalPage(otherUserID){
        //跳转到其他页面前，添加访问记录，获取此用户的regionID 和 schoolID,存储到context
        getDataByActionIDWithQuery(ADD_COMMON_VISITRECORD, {targetUserID: otherUserID});

        goToOtherPersonalPage(otherUserID, this);
    }

    render() {
        var this_ = this;
        return (
            <ul className="latest-visitor-ul">
                {
                    this.props.visitors.map((item, index)=>(
                        <li key={item.userID} onClick={this_.goToOtherPersonalPage.bind(this_, item.userID)}>
                            <img src={item.headImage} />
                            <span className="am-padding-right-sm">{item.name}</span>{item.className}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export = withRouter(Visitors)