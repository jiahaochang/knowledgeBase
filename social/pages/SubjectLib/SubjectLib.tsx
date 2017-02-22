import * as React from 'react'
import { Row, Col } from 'antd';
import SubjectNameList = require('./Component/SubjectNameList');
import SubjectContent = require('./Component/SubjectContent');
import * as ItemsActions from '../../actions/SubjectLib/SubjectLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as context from './SubjectLibContext'
"use strict";

interface SubjectLibRouteProps extends React.Props<SubjectLib> {
    actions: any,
    subjectLibState: any,
    changeSubjName:Function
}

interface SubjectLibRouteState {

}

class SubjectLib extends React.Component<SubjectLibRouteProps,SubjectLibRouteState> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentWillMount(){
        //ajax to get data
        this.props.actions.initSubjectLibCurrentSubject(true);
    }

    handleClick(subName){
        this.props.actions.changeSubjName({currentSubject: subName});//唯一改变状态的入口
        console.log("currentSubject是"+this.props.subjectLibState.toJS().currentSubject);
    }

    render(){
        var currentSubjectName = this.props.subjectLibState.toJS().currentSubject;
        return(
            <div className="main-container">
                <Row>
                    <Col span={18} style={{paddingRight:"20px"}}>
                        <SubjectContent subName={currentSubjectName}/>
                    </Col>
                    <Col span={6}>
                        <SubjectNameList subName={currentSubjectName} handleClick={this.handleClick}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export =  connect(state => ({
    subjectLibState: state.subjectLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
    changeSubjName: bindActionCreators(ItemsActions.changeSubjName, dispatch),
}))(SubjectLib)
