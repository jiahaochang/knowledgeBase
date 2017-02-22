import * as React from 'react'
import {Row,Col} from 'antd'
import ElectiveCourseSingle = require('./ElectiveCourseSingle')
import StudentOrganizationSingle =require('./StudentOrganizationSingle')
import OffCampusPracticeSingle = require('./OffCampusPracticeSingle')
"use strict";

interface ComprehensiveQualityActivitiesSingleProps extends React.Props<ComprehensiveQualityActivitiesSingle> {
    imgURL:string,
    title:string,
    activitySingle:Array<any>

}

interface ComprehensiveQualityActivitiesSingleState {

}
/**
 * 个人素质报告
 * 我的综合素质活动single
 *
 */
class ComprehensiveQualityActivitiesSingle extends React.Component<ComprehensiveQualityActivitiesSingleProps, ComprehensiveQualityActivitiesSingleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var this_　= this;
        return (
            <Row className="comp-qual-activies-single">
                <Col span={6} className="leftTitle">
                    <div className="vertical-middle">
                        <img src={this.props.imgURL} />
                        <div className="title">{this.props.title}</div>
                    </div>
                </Col>
                <Col span={18} className="rightContent">
                    {this.props.activitySingle.map(function(single, index){
                        var result = null;
                        if(this_.props.title == "选修课"){
                            result = <ElectiveCourseSingle key={index} cource={single}  />
                        }else if(this_.props.title == "学生社团"){
                            result = <StudentOrganizationSingle key={index}  organ={single}  />
                        }else if(this_.props.title =="校外实践"){
                            result = <OffCampusPracticeSingle key={index}  practice={single}  />
                        }
                            return  result
                        }
                    )}
                </Col>
            </Row>
        )
    }
}

export = ComprehensiveQualityActivitiesSingle