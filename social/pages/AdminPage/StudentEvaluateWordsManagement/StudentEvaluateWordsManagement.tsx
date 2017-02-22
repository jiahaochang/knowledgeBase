import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import EvaluateWordsTableContainer = require('./Component/EvaluateWordsTableContainer')
"use strict";

interface StudentEvaluateWordsManagementProps extends React.Props<StudentEvaluateWordsManagement> {

}

interface StudentEvaluateWordsManagementState {

}

class StudentEvaluateWordsManagement extends React.Component<StudentEvaluateWordsManagementProps, StudentEvaluateWordsManagementState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>
                <AdminBasicInfo />
                <div className="am-margin-top block-box-shadows-0 blueBack">
                    <CardWithTitleBox title="学生描述关键词管理" subComponent={<EvaluateWordsTableContainer />} />
                </div>
            </div>
        )
    }
}

export = StudentEvaluateWordsManagement