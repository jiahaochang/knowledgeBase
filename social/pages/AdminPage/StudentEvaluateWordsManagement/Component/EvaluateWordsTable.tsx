import * as React from 'react'
import {Row,Col,Button,Popconfirm, message} from 'antd'
import {changeArrayForNewGroup} from "../../../../common/commonFunc"
import CreateEvaluateWordsForm = require('./CreateEvaluateWordsForm')

"use strict";

interface EvaluateWordsTableProps extends React.Props<EvaluateWordsTable> {
    keyWordList:Array<any>,
    keyWordOptions:Array<any>,

}
/**
 * 两列table显示
 */
interface EvaluateWordsTableState {
    form?:any,
    editData?:any,
    handleRefresh?:Function,
    formType?:string,
    visible?:boolean,
    hideModal?:Function
}

class EvaluateWordsTable extends React.Component<EvaluateWordsTableProps, EvaluateWordsTableState> {
    constructor(props) {
        super(props);
        this.confirm = this.confirm.bind(this);
        this.edit = this.edit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.state = {}
    }

    static defaultProps = {};

    //删除
    confirm(single) {
        message.info('点击了确定'+single.impressionID);
    }
    //编辑
    edit(single){
        message.info('点击了编辑'+single.impressionID);
        this.setState({
            editData:single,
            formType:"edit",
            visible:true
        });
    }

    handleRefresh(){
        var this_ = this;
        this_.setState({
            visible:false
        });
    }

    showModal() {
        this.setState({
            visible:true,
            editData:{impressionID: "01", impressionTypeName: "德"}
        })

    }
    
    hideModal(){
        this.setState({
            visible:false
        })
    }

    render() {

        var this_ = this;
        var keywordList = changeArrayForNewGroup(this.props.keyWordList,10);
        const deleteText = "确定要删除这个任务吗";
        return (
            <div>
                <Row>
                    {keywordList.map(function(group, index){
                        return(
                            <Col span={12} key={index} style={{padding:"10px 10px 30px"}}>
                                <div className="school-score-single">
                                    <ul className="header am-avg-sm-3"><li>关键词类别</li><li>关键词</li><li>操作</li></ul>
                                    {group.map(function(single, index){
                                            return  (
                                                <ul className="am-avg-sm-3" key={index}>
                                                    <li>{single.impressionTypeName}</li>
                                                    <li>{single.impressionContent}</li>
                                                    <li>
                                                    <span>
                                                        <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.edit.bind(this_,single)}>编辑<i className="fa fa-edit"></i></Button>
                                                        <Popconfirm placement="top" title={deleteText} onConfirm={this_.confirm.bind(this_,single)}>
                                                            <Button className="btn-blue" size="small" >删除<i className="fa fa-trash"></i></Button>
                                                        </Popconfirm>
                                                    </span>
                                                    </li>
                                                </ul>
                                            )

                                        }
                                    )}
                                </div>
                            </Col>
                        )
                    }
                )}
            </Row>
            <Button className="btn-yellow" icon="plus" onClick={this.showModal}>新建</Button>
            <CreateEvaluateWordsForm handleRefresh={this.handleRefresh} visible={this.state.visible} hideModal={this.hideModal}
                                     editData={this.state.editData} formType={this.state.formType}
                                     keyWordOptions={this.props.keyWordOptions}/>
            </div>
        )
    }
}
export = EvaluateWordsTable