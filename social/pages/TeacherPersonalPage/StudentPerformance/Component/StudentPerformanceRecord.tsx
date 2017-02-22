import * as React from 'react'

"use strict";

import {Row, Col,Radio,Popconfirm,message} from 'antd'
import {isEmptyObject,formatDate} from 'common/commonFunc'
import {getUserIDFromStorage} from 'common/storageUtil'
import StudentPerformanceItem = Nicezy.StudentPerformanceItem;
import {getStudentPerformanceOptions} from '../../TeacherPersnalPageContext'
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
const RadioGroup = Radio.Group;

interface StudentPerformanceRecordProps extends React.Props<StudentPerformanceRecord> {
    studentID?:string,
    studentName?:string,
    record?:StudentPerformanceItem,
    disableEdit?: boolean
}

interface StudentPerformanceRecordState {
    hide?:boolean
}


/**
 * 老师界面 学生表现记录 过住记录single
 */
class StudentPerformanceRecord extends React.Component<StudentPerformanceRecordProps, StudentPerformanceRecordState> {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {hide:false}
    }

    static defaultProps = {};

    delete(id){
        var this_ = this;
        var postData = {};
        postData["studentUserID"] = this.props.studentID;
        postData["UserID"] = getUserIDFromStorage();
        postData["studentPerformanceID"] = id;

        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.DELETE_TEACHER_STUDENTPERFORMANCE_RECORD,postData,function (response) {
            this_.setState({hide:true});
            message.success("删除成功");
        })
    }

    getPerformanceTypeName(performanceTypeID){
        var performanceOptionData = getStudentPerformanceOptions();
        for(let item of performanceOptionData.performanceTypes){
            if(item.performanceTypeID = performanceTypeID){
                return item.performanceTypeName;
            }
        };

    }

    render() {

        var item = this.props.record;
        var performanceTypeName = this.getPerformanceTypeName(item.performanceTypeID);
        var performanceDate = formatDate(item.performanceDate,"yyyy-MM-dd");
        var performanceLevels = getStudentPerformanceOptions().performanceLevels;
        var deleteText = "确认要删除该条表现记录吗？"


        var className = this.state.hide?"past-record-single am-hide":"past-record-single";

        return (
            <div className={className}>

                <div className="am-margin-bottom-xs">
                    <span className="am-padding-right">{this.props.studentName}</span>
                    <span className="am-padding-right">{performanceDate}</span>
                    <span >{performanceTypeName}</span>

                    {
                        !this.props.disableEdit &&
                        <Popconfirm title={deleteText}
                                    onConfirm={this.delete.bind(this,item.studentPerformanceID)}
                        >
                            <a className="redLink anticon anticon-cross  pull-right">删除</a>
                        </Popconfirm>
                    }

                </div>

                
                <div className="am-margin-bottom-xs">
                    表现情况：
                    <RadioGroup defaultValue={item.performanceLevelID}>
                        {
                            performanceLevels.map(function (item, index) {
                                return (
                                    <Radio value={item.performanceLevelID} key={index} disabled >{item.performanceLevelName}</Radio>
                                )
                            })
                        }
                    </RadioGroup>
                    
                </div>

                {
                    !isEmptyObject(item.content) &&
                    <div className="am-margin-bottom-xs">
                        补充说明(选填):
                        {item.content}
                    </div>
                }



                {
                    !isEmptyObject(item.pictures) &&
                    <Row>
                        <Col span={6}>
                            相关材料：
                        </Col>
                        <Col >
                            {
                                item.pictures.map( (singleItem, index)=>(<image key={index} src={singleItem.pictureUrl}> </image>) )
                            }
                        </Col>
                    </Row>
                }



            </div>
        )
    }
}

export = StudentPerformanceRecord