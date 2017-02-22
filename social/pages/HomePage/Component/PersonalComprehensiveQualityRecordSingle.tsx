import * as React from 'react'
import { Row, Col,Input,Button } from 'antd';
import  CardHeaderWithAdd = require('../../../common/Component/CardHeaderWithAdd')
import CollapsableCard = require('../../../common/Component/CollapsableCard')
import CardContentWithClickLikeAndComment = require('../../../common/Component/CardContentWithClickLikeAndComment')
import {isEmptyObject} from '../../../common/commonFunc'
import ElectiveCourseForm = require('./ActivityForms/ElectiveCourseForm')
import ActivityForm = require('./ActivityForms/ActivityForm')
import {comprehensiveQualityDisplayMap} from '../../../common/Config/HomePageConfig'

"use strict";
import IQualityRecord = Nicezy.IQualityRecord;

interface PersonalComprehensiveQualityRecordSingleProps extends React.Props<PersonalComprehensiveQualityRecordSingle> {
    style?:any,
    className?:string,
    data:IQualityRecord,
    color?:string
    disableEdit?: boolean //查看其他人页面 禁止编辑
}
interface PersonalComprehensiveQualityRecordSingleState {
    inputValue?: any,
    result?:any,
}
/**
 * 个人页面---八项的子组件，每项返回的已完成活动list
 */
class PersonalComprehensiveQualityRecordSingle extends React.Component<PersonalComprehensiveQualityRecordSingleProps, PersonalComprehensiveQualityRecordSingleState> {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        var dataInit = this.props.data.records;
        this.state = {
            result:dataInit
        }
    }

    static defaultProps = {
        className:""
    };

    refresh(){

    }


    render() {
        var this_ = this;
        var backClassName = this.props.color;
        var id = this.props.data.eventCategoryType;
        var title = this.props.data.rootEventCategoryName;
        var addTitle = comprehensiveQualityDisplayMap[id]["addTitle"];
        var hasResult = (!isEmptyObject(this.state.result) && this.state.result.length != 0)?true:false;
        var recordList = null;
        var paramMap = {};
        paramMap["eventCategoryType"] = id;
        paramMap["rootEventCategoryName"] = title;
        paramMap["rootEventCategoryID"] = this.props.data.rootEventCategoryID;

        var component = null;

        if(hasResult){
            recordList = this.props.data.records.map(function(item, index){
                var subComponent = id=="electiveCourse"?<ElectiveCourseForm  paramMap={paramMap} refresh={this_.refresh} record={item} disableEdit={this_.props.disableEdit}/>:<ActivityForm  paramMap={paramMap}  refresh={this_.refresh} record={item} disableEdit={this_.props.disableEdit}/>;
                const props = {
                    likeCount:item.admire.count, //点赞数
                    commentCount:item.comments.length, //评论数
                    subComponent:subComponent,
                    selfLike:item.admire.isAdmired,   //自己是否已点赞
                    comments:item.comments //评论列表
                }
                return <CardContentWithClickLikeAndComment componentState="readOnly" className="am-margin-bottom" key={index} {...props}   />

            })
        }
        var addComponentSubComponent = id=="electiveCourse"?<ElectiveCourseForm  paramMap={paramMap}  refresh={this_.refresh} from= "headAdd" disableEdit={this.props.disableEdit}/>:<ActivityForm  paramMap={paramMap}  from= "headAdd" refresh={this_.refresh}  disableEdit={this.props.disableEdit}/>;

        var addComponent = <CardContentWithClickLikeAndComment   componentState="addNew"  className="am-margin-bottom" showSocialBar={false}  subComponent={addComponentSubComponent} />;

        return (
            <div className={this.props.className} style={this.props.style}>
                {
                    !hasResult && (
                        <div className={backClassName + " am-margin-top"} id={id}>
                            <CardHeaderWithAdd title={title} addtitle={addTitle} addComponent={addComponent} noAdd={this.props.disableEdit}/>
                        </div>
                    )
                }
                {
                    hasResult && (
                        <CollapsableCard id={id} className={backClassName}  titleWithClick={<CardHeaderWithAdd title ={title} addtitle={addTitle}  scaleFlag={true} addComponent={addComponent} editClassName="am-margin-bottom"  noAdd={this.props.disableEdit}/>}
                                         collapsableElement={ recordList }
                        />
                    )
                }

            </div>
        )
    }
}

export = PersonalComprehensiveQualityRecordSingle