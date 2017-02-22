import * as React from 'react'
import {Button,Icon,message} from 'antd'
import PersonalTargetSetSingle = require('./PersonalTargetSetSingle')
"use strict";
import {isEmptyObject} from "../../../common/commonFunc";

//调用API
import {getDataByActionIDWithQuery} from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
interface PersonalAnalyzeMyselfProps extends React.Props<PersonalAnalyzeMyself> {
    currentTerm:string,
    analyze:any
}

interface PersonalAnalyzeMyselfState {
    selfCharacterContent?:string, //我的性格与兴趣
    selfAdvantageContent?:string, //我的优势与不足
    btnShow?:boolean,
    currentTerm?:string
}

class PersonalAnalyzeMyself extends React.Component<PersonalAnalyzeMyselfProps, PersonalAnalyzeMyselfState> {
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
            selfCharacterContent:props.analyze.selfCharacterContent?props.analyze.selfCharacterContent:"",
            selfAdvantageContent:props.analyze.selfAdvantageContent?props.analyze.selfAdvantageContent:"",
            btnShow:(isEmptyObject(props.analyze.selfCharacterContent)|| isEmptyObject(props.analyze.selfAdvantageContent))?true:false,
            currentTerm:props.currentTerm
        })
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    textareaChange(words,type){

        var map = type=="selfCharacterContent"?{
            selfCharacterContent:words
        }:{
            selfAdvantageContent:words
        }
        this.setState(map);

    }

    handleSubmit(){
        var this_ = this;
        if(isEmptyObject(this.state.selfAdvantageContent)||isEmptyObject(this.state.selfCharacterContent)){
            message.error("请填写完再提交");
        }else{
            var postData = {
                termID:this.state.currentTerm,
                selfCharacterContent:this.state.selfCharacterContent,
                selfAdvantageContent:this.state.selfAdvantageContent
            };
            getDataByActionIDWithQuery(actionTypes.SET_STUDENT_ANALYZEMYSELF,postData,function () {
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

                <PersonalTargetSetSingle termID={this.props.currentTerm}  iconName="heart" title="我的性格与兴趣" type="selfCharacterContent" content={this.state.selfCharacterContent} textareaChange={this.textareaChange} disabled={!btnShow}/>
                <PersonalTargetSetSingle termID={this.props.currentTerm} iconName="balance-scale" title="我的优势与不足" type="selfAdvantageContent" content={this.state.selfAdvantageContent} textareaChange={this.textareaChange}  disabled={!btnShow}/>
                {
                   btnShow &&
                        <div className="am-text-center">
                            <Button className="btn-orange" size="large" onClick={this.handleSubmit}>提交</Button>
                        </div>

                }
                <div className="eye">
                    <Icon type="eye-o" />仅自己可见
                </div>
            </div>
        )
    }
}

export = PersonalAnalyzeMyself