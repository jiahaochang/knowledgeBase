import * as React from 'react'
import {Row,Col} from 'antd'
"use strict";

interface StudentOrganizationSingleProps extends React.Props<StudentOrganizationSingle> {
    organ:any
}

interface StudentOrganizationSingleState {

}
/**
 * 个人素质报告
 * 我的综合素质活动
 * 学生社团single
 */
class StudentOrganizationSingle extends React.Component<StudentOrganizationSingleProps, StudentOrganizationSingleState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var imgFlag = this.props.organ.imgURL.length>0?true:false;
        return (
            <div className="comprehensive-activities-single">
                <div className="col2Con">
                    <b>社团名称：</b>{this.props.organ.organName}
                    <span className="rightText">
                        所属分类：{this.props.organ.organClassification}
                    </span>
                </div>
                <div className="col2Con">
                    <b>我的角色：</b>{this.props.organ.organRole}
                </div>
                <div className="colOne">
                    <span>我的表现：</span>
                    <div className="detail">
                        {this.props.organ.organPerfomance}
                        {
                            imgFlag &&
                                <Row>
                                    {this.props.organ.imgURL.map(function(url, index){
                                          return <Col span={8} key={index}><img src={url} style={{width:"90%"}}/></Col>
                                        }
                                    )}
                                </Row>

                        }
                    </div>
                </div>

            </div>
        )
    }
}

export = StudentOrganizationSingle