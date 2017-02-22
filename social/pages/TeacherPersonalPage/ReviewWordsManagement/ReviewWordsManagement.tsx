import * as React from 'react'

"use strict";
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import CardTabs = require('../../../common/Component/CardTabs')
import ReviewWordsManagementTable = require('./Component/ReviewWordsManagementTable')

interface ReviewWordsManagementProps extends React.Props<ReviewWordsManagement> {

}

interface ReviewWordsManagementState {

}

class ReviewWordsManagement extends React.Component<ReviewWordsManagementProps, ReviewWordsManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    componentWillMount(){

    }

    render() {
        var subTab = [
            {tabName:"评语库",tabContent:<ReviewWordsManagementTable />},
        ];

        return (
            <div>
                <PersonInfoAndRank />
                <div className="am-margin-top block-box-shadows-0 blueBack">
                    <CardTabs tabs={subTab} />
                </div>
            </div>
        )
    }
}

export = ReviewWordsManagement