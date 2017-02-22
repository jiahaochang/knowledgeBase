import * as React from 'react'
import AdminBasicInfo = require('../Component/AdminBasicInfo')
import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import ContentAuditTable = require('./Component/ContentAuditTable')
"use strict";

interface ContentAuditProps extends React.Props<ContentAudit> {

}

interface ContentAuditState {

}
/**
 * 内容审核
 */
class ContentAudit extends React.Component<ContentAuditProps, ContentAuditState> {
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
                    <CardWithTitleBox title="内容审核" subComponent={<ContentAuditTable />} />
                </div>
            </div>
        )
    }
}

export = ContentAudit