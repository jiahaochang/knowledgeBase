import * as React from 'react'
import { Input, Col,Radio } from 'antd';
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;
"use strict";

interface ChooseElectiveCourseModalProps extends React.Props<ChooseElectiveCourseModal> {
    record:any,
}

interface ChooseElectiveCourseModalState {
    levelOneChooseID?:string,
    levelTwoItem?:any,

}

class ChooseElectiveCourseModal extends React.Component<ChooseElectiveCourseModalProps, ChooseElectiveCourseModalState> {
    constructor(props) {
        super(props);
        var id = this.props.record.activityCategories[0].activityCategoryID;
        this.state = {
            levelOneChooseID:this.props.record.activityCategories[0].activityCategoryID,
            levelTwoItem:this.props.record.activityCategoryMap[id][0]
        }
        this.chooseLevelOneID = this.chooseLevelOneID.bind(this);
        this.chooseLevelTwoID = this.chooseLevelTwoID.bind(this);
    }

    static defaultProps = {};

    chooseLevelOneID(e){
        var item = this.props.record.activityCategoryMap[e.currentTarget.id];
        this.setState({levelOneChooseID:e.currentTarget.id,levelTwoItem:item});
    }
    chooseLevelTwoID(item,e){
        this.setState({levelTwoItem:item});

    }

    render() {
        var this_ = this;
        var activityCategories = this.props.record.activityCategories;
        var activityCategoryMap = this.props.record.activityCategoryMap[this.state.levelOneChooseID];

        return (
            <div>
                <p>请选择课程类别</p>
                <div className="school-condition-options choose-elective-course-padding">
                    {
                        activityCategories.map(function(item, index){
                            var className = this_.state.levelOneChooseID==item.activityCategoryID?"active":"";
                            return <a className={className}  key={index} id={item.activityCategoryID} onClick={this_.chooseLevelOneID}>{item.activityCategoryName}</a>
                        })
                    }
                </div>

                {
                    this.state.levelOneChooseID!="other" &&
                    <div>
                        <div className="school-condition-options choose-elective-course-padding">
                            {
                                activityCategoryMap.map(function(item, index){
                                    var className = this_.state.levelTwoItem.eventHolderID==item.eventHolderID?"active":"";
                                    return <a className={className}  key={index} id={item.eventHolderID} onClick={this_.chooseLevelTwoID.bind(this_,item)}>{item.eventHolderName}</a>
                                })
                            }
                        </div>

                        <div className="elective-course-modal-text">
                    <span className="am-padding-right">
                        所属类别：{this.state.levelTwoItem.qualityCategoryName}
                    </span>
                    <span>
                        课程学分：{this.state.levelTwoItem.integralScore}
                    </span>
                        </div>
                    </div>
                }

                {
                    this.state.levelOneChooseID=="other" &&
                    <div style={{marginTop:"20px"}}>
                        <InputGroup size="large">
                            <Col span={4}>
                                <Input defaultValue="0571" />
                            </Col>
                            <Col span={8}>
                                <Input defaultValue="26888888" />
                            </Col>
                        </InputGroup>
                    </div>

                }




            </div>
        )
    }
}

export = ChooseElectiveCourseModal