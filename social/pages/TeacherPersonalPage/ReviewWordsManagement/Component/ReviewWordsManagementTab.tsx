import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select,Alert,Modal} from 'antd'
import CreateReviewForm = require('./CreateReviewForm')
const Option = Select.Option;

"use strict";

interface ReviewWordsManagementTabProps extends React.Props<ReviewWordsManagementTab> {

}
interface ReviewWordsManagementTabState {
}

class ReviewWordsManagementTab extends React.Component<ReviewWordsManagementTabProps, ReviewWordsManagementTabState> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};

    render() {

        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <div>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export = ReviewWordsManagementTab