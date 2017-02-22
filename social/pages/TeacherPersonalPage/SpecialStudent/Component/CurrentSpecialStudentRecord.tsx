import * as React from 'react'
import CollapsableCard = require('common/Component/CollapsableCard')
import CardHeaderWithAdd = require('common/Component/CardHeaderWithAdd')
import SpecialStudentRecordSingle = require('./SpecialStudentRecordSingle')
import {isEmptyObject} from 'common/commonFunc'
import Immutable = require('immutable')
import {specialStudentRecordMap} from 'common/Config/TeacherPersonalPageConfig'
//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as actionTypes from 'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
"use strict";

interface CurrentSpecialStudentRecordProps extends React.Props<CurrentSpecialStudentRecord> {
    studentID:string,
    teacherUserID: string,
    disableEdit?: boolean
}

interface CurrentSpecialStudentRecordState {
    specialStudentRecord?:Array<any>

}

class CurrentSpecialStudentRecord extends React.Component<CurrentSpecialStudentRecordProps, CurrentSpecialStudentRecordState> {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {specialStudentRecord:[]}
    }

    static defaultProps = {};

    componentWillMount(){
        this.refresh(this.props.studentID);
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.refresh(newProps.studentID);
        }
    }

    refresh(studentID){
        var this_ = this;
        var queryObj = {
            teacherUserID:this.props.teacherUserID,
            studentUserID: studentID
        };
        getDataByActionIDWithQuery(actionTypes.READ_TEACHER_SPECIALSTUDENT_RECORD,queryObj,function (response) {
            var specialStudentRecords = response.result;
            var records = [];
            if(!isEmptyObject(specialStudentRecords)){
                for(var i=0;i<specialStudentRecords.length;i++){
                    var specialStudent = specialStudentRecords[i];
                    var paramMap = {};
                    paramMap["specialStudentRecordID"] = specialStudent.specialStudentRecordID;
                    paramMap["teacherUserID"] = specialStudent.teacherUserID;
                    var record = [];
                    for(var key in specialStudent){
                        if(!isEmptyObject(specialStudentRecordMap[key])){
                            var map = Immutable.fromJS(specialStudentRecordMap[key]).toJS();
                            map["content"] = specialStudent[key];
                            record.push(map);
                        }
                    }
                    paramMap["record"] = record;
                    records.push(paramMap);
                }
            }

            this_.setState({
                specialStudentRecord:records
            });

        })
    }
    getHeaderAddDefaultParam(){
        //点击添加默认传值record
        var headItem = {};
        var defaultMap = {
            specialStudentRecordID: "",
            recordDate:new Date(),//分析时间
            reason: "",//情况缘由
            analysis: "", //个体分析
            talkRecord: "",//谈话记录
            parentCommunication:"",//家校沟通
            achievement:"", //达成效果
            teacherUserID: ""
        };
        headItem["specialStudentRecordID"] = "";
        headItem["teacherUserID"] = "";
        var recordHead = [];
        for(var key in defaultMap){
            if(!isEmptyObject(specialStudentRecordMap[key])){
                var map = Immutable.fromJS(specialStudentRecordMap[key]).toJS();
                map["content"] = defaultMap[key];
                recordHead.push(map);
            }
        }
        headItem["record"] = recordHead;
        return headItem;

    }


    render() {
        var this_ = this;
        var headItem = this.getHeaderAddDefaultParam();
        var addComponent = <SpecialStudentRecordSingle componentState="addNew" from="headAdd" refresh={this.refresh} record={headItem} studentID={this.props.studentID} />;
        //分析记录
        var specialRecordList = (
            <div>
                {this.state.specialStudentRecord.map(function (item, index) {
                    return (
                        <SpecialStudentRecordSingle record={item}  key={index} componentState="readOnly" refresh={this_.refresh}  studentID={this_.props.studentID} disableEdit={this_.props.disableEdit}/>
                    )
                })}
            </div>
        );
        return (
            <div className="am-margin-top am-margin-bottom">
                <CollapsableCard  className="blueBack"  titleWithClick={<CardHeaderWithAdd title ="分析记录" addtitle="添加记录" editClassName=" am-margin-bottom-sm" scaleFlag={true}  addComponent={addComponent} noAdd={this.props.disableEdit}/>}
                                  collapsableElement={ specialRecordList}
                />
            </div>
        )
    }
}

export = CurrentSpecialStudentRecord