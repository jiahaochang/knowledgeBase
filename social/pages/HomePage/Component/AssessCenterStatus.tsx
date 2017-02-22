import * as React from 'react'
import { Row, Col,Icon } from 'antd';
import {assessCenterDisplayMap} from '../../../common/Config/HomePageConfig'
"use strict";

interface AssessCenterStatusProps extends React.Props<AssessCenterStatus> {
    tests:Array<any>
}

class AssessCenterStatus extends React.Component<AssessCenterStatusProps, {}> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };
    render() {
        return (
            <Row type="flex" justify="center" className="am-margin-top">
                {this.props.tests && this.props.tests.map(function(test, index){
                        var ifActive = test.finished?"active":"";
                        var imgURL = assessCenterDisplayMap[test.testTypeID]["imgUrl"];
                        return (
                            <Col span={6} key={index}>
                                <div className="am-block am-text-center am-text-sm">{test.testTypeName}</div>
                                <div className={"img-with-greenActive "+ifActive}>
                                    <img src={imgURL} width="90" />
                                </div>
                            </Col>
                        )
                    }
                )}
            </Row>
        )
    }
}

export = AssessCenterStatus