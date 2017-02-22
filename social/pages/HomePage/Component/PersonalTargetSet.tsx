import * as React from 'react'
import {Button,Icon,message} from 'antd'
import PersonalTargetSetSingle = require('./PersonalTargetSetSingle')
"use strict";
import {isEmptyObject} from "../../../common/commonFunc";

//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
interface PersonalTargetSetProps extends React.Props<PersonalTargetSet> {
    currentTerm:string,
    targets:any
}

interface PersonalTargetSetState {
    schoolTargetContent?:string,//我的大学升学目标
    qualityTargetContent?:string,//本学期我的综合素质培养目标
    currentTerm?:string,
    btnShow?:boolean//是否显示提交按钮
}

class PersonalTargetSet extends React.Component<PersonalTargetSetProps, PersonalTargetSetState> {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.textareaChange = this.textareaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        this.setStateByProps(this.props);
    }

    setStateByProps(props){
        this.setState({
            schoolTargetContent:props.targets.schoolTargetContent?props.targets.schoolTargetContent:"",
            qualityTargetContent:props.targets.qualityTargetContent?props.targets.qualityTargetContent:"",
            btnShow:(isEmptyObject(props.targets.schoolTargetContent)|| isEmptyObject(props.targets.qualityTargetContent))?true:false,
            currentTerm:props.currentTerm
        })
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    textareaChange(words,type){

        var map = type=="schoolTargetContent"?{
            schoolTargetContent:words
        }:{
            qualityTargetContent:words
        }
        this.setState(map);

    }

    handleSubmit(){
        var this_ = this;
        if(isEmptyObject(this.state.qualityTargetContent)|| isEmptyObject(this.state.schoolTargetContent)){
            message.error("请填写完再提交");
        }else{
            var postData = {
                termID:this.state.currentTerm,
                schoolTargetContent:this.state.schoolTargetContent,
                qualityTargetContent:this.state.qualityTargetContent
            };
            getDataByActionIDWithQuery(actionTypes.SET_STUDENT_TARGETSTATE,postData,function () {
                this_.setState({
                    btnShow:false
                })
                message.success('保存成功');
            });
        }

    }

    static defaultProps = {};

    render() {
        var btnShow = this.state.btnShow;
        return (
            <div className="target-set">

                <PersonalTargetSetSingle termID={this.props.currentTerm}  iconName="university" title="我的大学升学目标" type="schoolTargetContent" content={this.state.schoolTargetContent} textareaChange={this.textareaChange} disabled={!btnShow}/>
                <PersonalTargetSetSingle termID={this.props.currentTerm} iconName="flag-checkered" title="本学期我的综合素质培养目标" type="qualityTargetContent" content={this.state.qualityTargetContent} textareaChange={this.textareaChange}  disabled={!btnShow}/>
                {
                   btnShow &&
                        <div className="am-text-center">
                            <Button className="btn-yellow" size="large" onClick={this.handleSubmit}>提交</Button>
                        </div>

                }
                <div className="eye">
                    <Icon type="eye-o" />仅自己可见
                </div>
            </div>
        )
    }
}

export = PersonalTargetSet