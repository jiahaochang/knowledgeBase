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
interface SearchBoxProps extends React.Props<SearchBox> {
    title:string,
    rightContent?:Array<string>,
    searchCallBack:Function,
    rightTextCallBack?:Function
}

class SearchBox extends React.Component<SearchBoxProps, {}> {
    constructor(props) {
        super(props);
        this.searchWithInput = this.searchWithInput.bind(this);
        this.rightSearch = this.rightSearch.bind(this);
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
    //右边点击事件
    rightSearch(e){
        this.props.rightTextCallBack(e.currentTarget.innerText);
    }
    render() {
        var this_ = this;
        var rightFlag = this.props.rightContent ==undefined?false:true;
        return (
            <div className="search-major-box">
                <span className="pull-left">{this.props.title}</span>
                <div className="search-box-orange">
                    <input type="text" id="searchInput" onKeyUp={this.handlerKeyUp} />
                    <i className=" anticon anticon-search"></i>
                    <button onClick={this.searchWithInput}>搜索</button>
                </div>
                {
                    rightFlag &&
                    <div className="pull-right">
                        {this.props.rightContent.map(function(content, index){
                                return  <a className="blue-raduis-box"  key={index} onClick={this_.rightSearch}>{content}</a>
                            }
                        )}
                    </div>
                }

            </div>
        )
    }
}
export = SearchBox

