import * as React from 'react'
import {Pagination, Button} from 'antd'
import {changeArrayForNewGroup} from "../../../../common/commonFunc"
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/AdminPage/AdminPageActionTypes'
import {getEvaluateWordsData, setEvaluateWordsData} from '../../AdminPageContext'

import EvaluateWordsTable = require('./EvaluateWordsTable')
"use strict";

interface EvaluateWordsTableContainerProps extends React.Props<EvaluateWordsTableContainer> {

}

interface EvaluateWordsTableContainerState {
    current?:number,
    curPageList?:Array<any>,
    keyWordOptions?:Array<any>
}
/**
 * 描述语table
 */
var groupData = [],total=0;
class EvaluateWordsTableContainer extends React.Component<EvaluateWordsTableContainerProps, EvaluateWordsTableContainerState> {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = {
            current:1,
            curPageList:[],  //所有的数据
            keyWordOptions:[]   //德智体美劳的数组  用ajax从后台获取
        }
    }

    static defaultProps = {};

    onChange(page){
        this.setState(
            {
                current: page,
                curPageList: groupData[page-1]
            }
        );
    }
    setData(){
        var this_ = this;
        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_IMPRESSIONWORD,function (response) {
            var data = response.result.schoolProvidedImpressions;
            total = data.length;
            groupData = changeArrayForNewGroup(data,20);
            this_.setState({
                curPageList: groupData[this_.state.current-1],
            });
        });
        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_IMPRESSIONTYPES,function (response) {
            var data = response.result.schoolProvidedImpressionTypes;
            this_.setState({
                keyWordOptions: data
            });
            setEvaluateWordsData(data)
        });
    }
    componentWillMount(){
        this.setData();
    }

    render() {
        return (
            <div className="col2-table-ul">
                <EvaluateWordsTable keyWordList={this.state.curPageList} keyWordOptions={this.state.keyWordOptions}/>
                <Pagination  onChange={this.onChange} current={this.state.current}  total={total} defaultPageSize={20} />
            </div>
        )
    }
}

export = EvaluateWordsTableContainer