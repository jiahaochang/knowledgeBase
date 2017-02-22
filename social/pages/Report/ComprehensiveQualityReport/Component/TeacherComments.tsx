import * as React from 'react'
import {Row,Col,Rate} from 'antd'
"use strict";

interface TeacherCommentsProps extends React.Props<TeacherComments> {

}

interface TeacherCommentsState {

}
/**
 * 个人素质档案
 * 老师评语
 */
class TeacherComments extends React.Component<TeacherCommentsProps, TeacherCommentsState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>
                <div className="teacher-comments-title">班主任老师评语</div>
                <Row className="report-student-evaluation">
                    <Col span={8} className="left-rankState">
                        <div className="title">班主任打分</div>
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
                        班主任尚未填写<img src="vendor/images/qqface/2.gif"/>……
                    </Col>
                </Row>

                <div className="teacher-comments-title">生涯导师评语</div>
                <div className="teacher-shengya">
                    <div>生涯老师尚未填写<img src="vendor/images/qqface/2.gif"/>……</div>
                </div>
            </div>
        )
    }
}

export = TeacherComments