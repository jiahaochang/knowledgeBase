import * as React from 'react'
import { Row, Col,Input,Button } from 'antd';
import PersonalComprehensiveQualityRecordSingle = require('./PersonalComprehensiveQualityRecordSingle')
import  CardHeaderWithAdd = require('../../../common/Component/CardHeaderWithAdd')

//调用API
import {
    getDataByActionIDWithQueryAsync
} from "../../../common/ajaxUtil"
import * as actionTypes from '../../../actions/HomePage/HomePageActionTypes'

"use strict";

interface PersonalComprehensiveQualityRecordProps extends React.Props<PersonalComprehensiveQualityRecord> {
    style?:any,
    className?:string,
    targetUserID?: string //看其他人的页面 加载时要使用他人的UserID
    disableEdit?: boolean //看其他人页面时 禁止编辑
}
interface PersonalComprehensiveQualityRecordState {
    inputValue?: any,
    records?:any
}
/**
 * 个人页面--综合素质纪录的八项
 * 
 */
class PersonalComprehensiveQualityRecord extends React.Component<PersonalComprehensiveQualityRecordProps, PersonalComprehensiveQualityRecordState> {
    constructor(props) {
        super(props);
        this.state = {
            records:[]
        }
    }

    static defaultProps = {
        className:""
    };

    componentWillMount(){
        var this_ = this;
        var queryObj = {};
        if (!!this.props.targetUserID) {
            queryObj["targetUserID"] = this.props.targetUserID;
        }
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_COMPROHENSIVEQUALITYCARDS,queryObj, function (response) {
            this_.setState({
                records:response.result.qualityRecords
            })
        });
    }

    render() {
        var records = this.state.records;
        var colors = ["blueBack","greenBack","purpleBack","yellowBack","blueDuckDuckBack","orangeBack","greenBlueBack","redDuckBack"];
        var this_ = this;
        return (
            <div className={this.props.className} style={this.props.style}>

                {
                    records.map(function(item, index){
                        return <PersonalComprehensiveQualityRecordSingle key={index} data = {item} color={colors[index]} disableEdit={this_.props.disableEdit}/>
                    })
                }

            </div>
        )
    }
}

export = PersonalComprehensiveQualityRecord