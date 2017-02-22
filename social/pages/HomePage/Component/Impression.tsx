import * as React from 'react'
import {Checkbox, Button,Row,Col,Modal,Alert,message} from 'antd'
import * as responseCacheContext from 'common/ResponseCacheContext'
import {isEmptyObject} from 'common/commonFunc'

//调用API
import {getDataByActionIDWithQueryAsync,getDataFromContextByActionIDAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
import {getUserIDFromStorage} from 'common/storageUtil'

const CheckboxGroup = Checkbox.Group;
"use strict";

interface ImpressionProps extends React.Props<Impression> {
    currentStudentID?:string,
    currentStudentName?:string
}

interface ImpressionState {
    impressions?:any,
    impressionsWithSchoolID?:Array<any>,
    visible?:boolean,//modal visible
    message?:string,
    checkedImpression?: Array<string>;
    canSubmit?: boolean
}

/**
 * 班主任---同学互评
 * 同学眼中的我 印象
 * 逻辑：如果之前已有评价，那么显示评价
 * 如果未有评价，提示评价，
 * 点击选择后，进入评价选择页面，
 * 评价后显示评价统计结果
 */

const chooseLimitCount = 3;

class Impression extends React.Component<ImpressionProps, ImpressionState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            message:""
        };
        this.chooseImpressionWords = this.chooseImpressionWords.bind(this);
        this.onImpressionChange = this.onImpressionChange.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount(){
        this.getStudentImpression(this.props);
    }

    componentWillReceiveProps(newProps){
        if(JSON.stringify(this.props) != JSON.stringify(newProps)){
            this.getStudentImpression(newProps);
        }
    }

    getStudentImpression(props){
        var this_ = this;
        var studentUserID = props.currentStudentID;
        var queryObj = {studentUserID:studentUserID};
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_IMPRESSION,queryObj,function (response) {
            this_.setState({
                impressions: response.result
            })
        })

    }

    handleOk(){
        var this_ = this;
        var checkedImpression = this.state.checkedImpression;
        var impressions = [];
        for(let item of checkedImpression){
            var map = {};
            map["impressionID"] = item;
            impressions.push(map);
        }
        var postData = {
            impressedUserID:this.props.currentStudentID,
            impressions:impressions
        };
        getDataByActionIDWithQueryAsync(actionTypes.SET_STUDENT_IMPRESSIONS,postData,function (response) {
            this_.getStudentImpression(this_.props);
            message.success('提交成功');
            this_.setState({
                visible: false
            });
        })

    }

    handleCancel(e) {
        this.setState({
            visible: false,
        });
    }

    //点击圆框选择关键词
    chooseImpressionWords(){
        var this_ = this;
        getDataFromContextByActionIDAsync(responseCacheContext.getResponseCache(),actionTypes.SCHOOL_PROVIDED_IMPRESSIONS,function (response) {
            var impressionsWithSchoolID = response.result.schoolProvidedImpressions;
            this_.setState({
                visible:true,
                impressionsWithSchoolID: impressionsWithSchoolID
            })

        })

    }

    onImpressionChange(checkedValues){

        if (checkedValues.length != chooseLimitCount){
            this.setState(
                {
                    message: "请选择"+chooseLimitCount+"个关键词"
                }
            )
            return false;
        }else{

            this.setState(
                {
                    checkedImpression:checkedValues,
                    message:""
                }
            )
        }

    }
// onClick={this.goEdit}
    render() {
        var this_　= this;
        var desc = ["请选择","请选择","请选择"];
        var options = [];
        if(!!this.state.impressionsWithSchoolID){
            var impressionsWithSchoolID = this.state.impressionsWithSchoolID;
            for(let item of impressionsWithSchoolID){
                var map = {};
                map["label"] = item.impressionContent;
                map["value"] = item.impressionID;
                options.push(map);
            }
        }

        var impressions = null;
        if(!!this.state.impressions){
            var hasImpression = this.state.impressions.hasImpression;  //有没有结果
            var isVisible = this.state.impressions.visible;  //自己是否已经填写了评价【若没有填写，则不能显示】
            if(isVisible && hasImpression){
                var titleText = "我们对"+this_.props.currentStudentName+"的印象";
                var impressions = this_.state.impressions.impressions;
                impressions = (
                    <div className="impression-div">
                        <div className="impression-text blue">{titleText}</div>
                        <Row>
                            {impressions.map(function(single, index){
                                    return <Col span={8} key={index}  ><div className="circle">{single}</div></Col>
                                }
                            )}
                        </Row>
                    </div>
                )

            }else{
                impressions = (
                    <div className="impression-div">
                        <div className="impression-text blue">请选择三个关键词来形容同学：{this_.props.currentStudentName}</div>
                        <Row>
                            {desc.map(function(single, index){
                                    return <Col span={8} key={index} onClick={this_.chooseImpressionWords} ><div className="circle">{single}</div></Col>
                                }
                            )}
                        </Row>
                        <div className="impression-text gray am-text-center">完成后可查看其他同学对{this_.props.currentStudentName}的评价</div>
                    </div>
                )

            }
        }
        return (
            <div>
                {impressions}

                <Modal title="请从以下选项中，选出三项来描述他/她" visible={this.state.visible}
                       onOk={this.handleOk}  onCancel={this.handleCancel}
                >
                   {
                       !!this.state.impressionsWithSchoolID &&
                           <div className="impressions-checkbox-group">
                               {
                                   !isEmptyObject(this_.state.message) &&
                                   <Alert message={this_.state.message} type="error" showIcon />
                               }
                               <CheckboxGroup options={options}  onChange={this.onImpressionChange} />
                           </div>
                   }
                </Modal>

            </div>
            
        )

    }
}

export = Impression