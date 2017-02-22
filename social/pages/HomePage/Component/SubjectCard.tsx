import * as React from 'react'
import { Row, Col } from 'antd';
"use strict";

interface SubjectCardProps extends React.Props<SubjectCard> {
}

class SubjectCard extends React.Component<SubjectCardProps, {}> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };

    render() {
        return (
            <div>
                <div>我的7选三 加横线</div>
                <div style={{height: 50}}>
                    4tab here
                </div>
            </div>
        )
    }
}

export = SubjectCard