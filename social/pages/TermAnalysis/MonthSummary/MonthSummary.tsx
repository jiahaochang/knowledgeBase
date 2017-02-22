import * as React from 'react'
import TwelveMonthTab = require('./Component/TwelveMonthTab')
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import RankState = require('../../../common/Component/RankState')
import {getTermIDFromStorage} from 'common/storageUtil'
import {RoleEnum} from "common/Module/Role";
"use strict";

interface MonthSummaryProps extends React.Props<MonthSummary> {
}

interface MonthSummaryState {
    currentTerm?:string
}

class MonthSummary extends React.Component<MonthSummaryProps, MonthSummaryState> {
    constructor(props) {
        super(props);
        this.onTermChange = this.onTermChange.bind(this);
        this.state = {
            currentTerm: getTermIDFromStorage()
        };
    }

    static defaultProps = {
    };

    onTermChange(termAfterChange): void{
        this.setState({
            currentTerm: termAfterChange
        })
    }
    render() {
        return (
            <div>
                <PersonInfoAndRank  roleEnum={RoleEnum.student} currentTerm={this.state.currentTerm} onTermChange={this.onTermChange}   />
                <TwelveMonthTab currentTerm={this.state.currentTerm}/>
            </div>
        )
    }
}

export = MonthSummary