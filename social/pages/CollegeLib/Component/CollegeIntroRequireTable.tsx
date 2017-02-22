import * as React from 'react'
import { Table } from 'antd';
"use strict";
/**
 * 院校库---院校主页（招生专业与学科要求tab内容）
 */
interface CollegeIntroRequireTableProps extends React.Props<CollegeIntroRequireTable> {
    data:any

}
interface CollegeIntroRequireTableState {
    pagination?:any,
}
// width:75   width:110  width:100
    const columns = [
        {
            title: '性味',
            dataIndex: 'majorType',
            key: 'majorType',
        }, {
            title: '功效',
            dataIndex: 'majorName',
            key: 'majorName',
        }, {
            title: '归经',
            dataIndex: 'requireSubject',
            key: 'requireSubject',
        }, {
            title: '主治',
            dataIndex: 'subMajor',
            key: 'subMajor',
        }
    ]


class CollegeIntroRequireTable extends React.Component<CollegeIntroRequireTableProps, CollegeIntroRequireTableState> {
    constructor(props) {
        super(props);
        this.state = {
            pagination: {}
        }
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });

    }


    render() {
        var this_ = this;

        return (

            <div className="school-intro-table">
                <Table columns={columns}
                       dataSource={this.props.data}
                       pagination={this.state.pagination}
                       onChange={this.handleTableChange}
                       bordered  />
            </div>
            
        )
    }
}
export = CollegeIntroRequireTable

