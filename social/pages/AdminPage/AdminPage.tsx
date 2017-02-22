import * as React from 'react'

"use strict";
import {withRouter, Link} from "react-router";
import {getMenuInfoList} from "../../common/menuUtil";
import {AdminDefaultStruct} from "../../common/Config/MenuConfig";

interface AdminPageProps extends React.Props<AdminPage> {

}

interface AdminPageState {
    links?: Array<any>
}

class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        
    }

    componentWillMount(){
        var links = getMenuInfoList(AdminDefaultStruct);
        this.setState({
            links
        })
    }

    static defaultProps = {};

    render() {

        /*var links = [
            {
                url: "adminPage/accountManagement",
                displayName: "账户管理"
            },
            {
                url: "adminPage/scoreManagement",
                displayName: "成绩管理"
            },
            {
                url: "adminPage/courseLibManagement",
                displayName: "课程库"
            },
            {
                url: "adminPage/clubManagement",
                displayName: "活动与社团库"
            },
            {
                url: "adminPage/honorManagement",
                displayName: "特长/荣誉/职务"
            },
            {
                url: "adminPage/studentEvaluateWordsManagement",
                displayName: "同学描述用语"
            },
            {
                url: "adminPage/monthThemeManagement",
                displayName: "月度主题"
            },
            {
                url: "adminPage/statistics",
                displayName: "统计功能"
            },
            {
                url: "adminPage/recordManagement",
                displayName: "档案管理"
            },
            {
                url: "adminPage/integralScoreManagement",
                displayName: "积分管理"
            },
            {
                url: "adminPage/contentAudit",
                displayName: "内容审核"
            }
        ];*/

        var links = this.state.links;
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

                <div className="col2-withLeftTab-rightSide">{this.props.children}</div>
            </div>
        )
    }
}

export = withRouter(AdminPage)