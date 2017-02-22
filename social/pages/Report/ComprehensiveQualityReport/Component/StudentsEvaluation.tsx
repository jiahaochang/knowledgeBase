import * as React from 'react'
import {Row,Col,Rate} from 'antd'
"use strict";

interface StudentsEvaluationProps extends React.Props<StudentsEvaluation> {

}

interface StudentsEvaluationState {

}
/**
 * 个人素质档案
 * 同学评价
 */
class StudentsEvaluation extends React.Component<StudentsEvaluationProps, StudentsEvaluationState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var desc = ["东河什么","匆匆那年","你还在么"]
        return (
            <Row className="report-student-evaluation">
                <Col span={8} className="left-rankState">
                    <div className="title">同学打分</div>
                    <div className="rateDIV">
                        品德表现
                        <Rate disabled defaultValue={2} />
                    </div>
                    <div className="rateDIV">
                        创意实践
                        <Rate disabled defaultValue={2} />
                    </div>
                    <div className="rateDIV">
                        运动健康
                        <Rate disabled defaultValue={4} />
                    </div>
                    <div className="rateDIV">
                        艺术素养
                        <Rate disabled defaultValue={5}  />
                    </div>
                </Col>
                <Col span={16} className="right-circle-desc">
                    <Row >
                        {desc.map(function(single, index){
                                return <Col span={8} key={index}><div className="circle">{single}</div></Col>
                            }
                        )}
                    </Row>
                </Col>
            </Row>
        )
    }
}

export = StudentsEvaluation