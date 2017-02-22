import * as React from 'react'
import {Row,Col} from 'antd'
"use strict";

interface OffCampusPracticeSingleProps extends React.Props<OffCampusPracticeSingle> {
    practice:any
}

interface OffCampusPracticeSingleState {

}
/**
 * 个人素质报告
 * 我的综合素质活动
 * 校外实践single
 */
class OffCampusPracticeSingle extends React.Component<OffCampusPracticeSingleProps, OffCampusPracticeSingleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var imgFlag = this.props.practice.imgURL.length>0?true:false;
        return (
            <div className="comprehensive-activities-single">
                <div className="col2Con">
                    <b>活动名称：</b>{this.props.practice.practiceName}
                    <span className="rightText">
                        所属分类：{this.props.practice.practiceClassification}
                    </span>
                </div>
                <div className="col2Con">
                    日期：<b>{this.props.practice.practiceDate}</b>
                </div>
                <div className="colOne">
                    <span>活动简介：</span>
                    <p className="detail">
                        {this.props.practice.practiceDesc}
                    </p>
                </div>
                {
                    imgFlag &&
                    <div className="colOne">
                        <span>相关证明：</span>
                        <div className="detail">
                            <Row>
                                {this.props.practice.imgURL.map(function(url, index){
                                        return <Col span={8} key={index}><img src={url} style={{width:"90%"}}/></Col>
                                    }
                                )}
                            </Row>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export = OffCampusPracticeSingle