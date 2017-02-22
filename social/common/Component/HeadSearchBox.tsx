import * as React from 'react'
import * as ItemsActions from '../../actions/MajorLib/MajorLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col,Icon } from 'antd';

"use strict";
/**
 * 灰色背景下面的搜索框
 * 主要用于专业库、职业库、院校库
 */
interface HeadSearchBoxprops extends React.Props<SearchBox> {
    title:string,
    rightContent?:Array<string>,
    searchCallBack:Function,
    rightTextCallBack?:Function,
    router?: any
}

class SearchBox extends React.Component<HeadSearchBoxprops, {}> {
    constructor(props) {
        super(props);
        this.searchWithInput = this.searchWithInput.bind(this);
        this.handlerKeyUp = this.handlerKeyUp.bind(this);
    }

    static defaultProps = {
    };
    //input回车事件
    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;
            if(!value) return false;
            this.props.searchCallBack(value);
        }
    }
    //搜索框点击事件
    searchWithInput(e){
        var value = $("#searchInput").val();
        if($.trim(value)!=""){
            this.props.searchCallBack(value);
        }
    }

    render() {
        return (
                <div className="head-search-box-orange">
                    <input type="text" id="searchInput" onKeyUp={this.handlerKeyUp} />
                    <i className=" anticon anticon-search"></i>
                    <button onClick={this.searchWithInput}>搜索</button>
                </div>
        )
    }
}
export = SearchBox

