import * as React from 'react'
import { Row, Col,Icon } from 'antd';
"use strict";

interface MajorIntendedProps extends React.Props<MajorIntended> {
    subjectNames:Array<any>
}

class MajorIntended extends React.Component<MajorIntendedProps, {}> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };

    render() {

        return (
            <div className="major-intended">
                <Row className="am-margin">
                    {this.props.subjectNames.map(function(item, index){
                            return <Col span={8} key={index}><div className="blue-small-block am-margin-right-xs"></div>{item.majorMLName}</Col>
                        }
                    )}
                </Row>
            </div>
        )
    }
}

export = MajorIntended