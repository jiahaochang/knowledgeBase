import * as React from 'react'
import {isEmptyObject} from 'common/commonFunc'
import {setTeacherEvaluatePostData,getTeacherEvaluatePostData} from '../../TeacherPersnalPageContext'
"use strict";
import {Select, Col, Row} from 'antd'
const Option = Select.Option;

interface SelectWithNameProps extends React.Props<SelectWithName> {
    name: string,
    options?: Array<any>,
    placeholder?: string,
    content?: string, //选择过的值
    isFinished?: boolean,//是否已经选择过,
    className?:string,
    style?:any
    id?: any,
    selectContextMap?:any//方便存储context
}

interface SelectWithNameState {
    chosenOption:""

}

/**
 * 班主任页面 评价学生 品德表现 中的选择评语
 * 左侧是有颜色的name 右侧是一个select
 * 组件有两个状态 如果之前选择过，那么现实选择的评语
 * 默认是未选择过的状态
 */
class SelectWithName extends React.Component<SelectWithNameProps, SelectWithNameState> {
    constructor(props) {
        super(props);
        this.state = {
            chosenOption:isEmptyObject(props.options)?"":props.options[0].ID
        }
        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {
        className:""
    };

    componentWillMount(){
        if(!isEmptyObject(this.state.chosenOption.toString())){
            this.checkContext(this.state.chosenOption,"init");
        }
    }

    changeMap(map,value,type){
        var this_ = this;
        var selectContextMap = this.props.selectContextMap;
        var stuTermQualityEvaluationLists = [];
        if(isEmptyObject(map)){
            map["rootQualityCategoryID"] = selectContextMap.rootQualityCategoryID;
            map["rootQualityCategoryName"] = selectContextMap.rootQualityCategoryName;
        }else{
            stuTermQualityEvaluationLists = map["stuTermQualityEvaluation"];
            for( var i=0;i<stuTermQualityEvaluationLists.length;i++ ){
                var item = stuTermQualityEvaluationLists[i];
                if(item.qualityCategoryID == this_.props.id){
                    if(type == "select"){
                        stuTermQualityEvaluationLists.splice(i,1);
                        break;
                    }else{
                        return;
                    }
                }
            }
        }
        var mapSub = {};
        mapSub["evaluationItemID"] = value;
        mapSub["qualityCategoryID"] = this.props.id;
        mapSub["qualityCategoryName"] = this.props.name;
        stuTermQualityEvaluationLists.push(mapSub);
        map["stuTermQualityEvaluation"] = stuTermQualityEvaluationLists;
        return map;
    }

    //check context 是否有值,根据情况对其赋值【1.willMount初始化时，若context中没有值，则对其赋值  2.select change事件赋不同的值】
    checkContext(value,type){
        var selectContextMap = this.props.selectContextMap;
        var teacherEvaluatePostData = getTeacherEvaluatePostData();
        if(isEmptyObject(teacherEvaluatePostData) || isEmptyObject(teacherEvaluatePostData[selectContextMap.rootQualityCategoryID]) ){
            teacherEvaluatePostData[selectContextMap.rootQualityCategoryID]  = this.changeMap({},value,type);
        }else{
            teacherEvaluatePostData[selectContextMap.rootQualityCategoryID]  = this.changeMap(teacherEvaluatePostData[selectContextMap.rootQualityCategoryID],value,type);
        }
        setTeacherEvaluatePostData(teacherEvaluatePostData);
    }

    //select handleChange
    handleChange(value){
        this.checkContext(value,"select");
        this.setState({
            chosenOption:value
        })

    }

    render() {

        return (
            <Row className={"header-with-select "+this.props.className} style={this.props.style}>
                <Col span={7} className="header">
                   {this.props.name}
                </Col>

                <Col span={17}>
                    {
                        this.props.isFinished &&
                        <div className="finished-right-text">{this.props.content}</div>
                    }

                    {
                        !this.props.isFinished &&
                        <Select style={{width: "100%"}} onChange={this.handleChange} value={this.state.chosenOption}  placeholder={this.props.placeholder?this.props.placeholder:"请选择学生评语"}>
                            {
                                this.props.options.map(function (item, index) {
                                    return (
                                        <Option key={index} value={item.ID}>{item.value}</Option>
                                    )
                                })
                            }
                        </Select>
                    }

                </Col>
            </Row>
        )
    }
}

export = SelectWithName