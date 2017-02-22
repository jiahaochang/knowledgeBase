import * as React from 'react'
import {isEmptyObject} from '../commonFunc'
"use strict";

interface SearchInputProps extends React.Props<SearchInput> {
    handleSearch?:Function,
    btnColor?:string,
    placeholder?:string

}

interface SearchInputState {

}

class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(){
        var value = $.trim($("#inputValue").val());
        if(!isEmptyObject(value)){
            this.props.handleSearch(value);
        }
    }

    static defaultProps = {
        placeholder:"搜索"
    };

    render() {
        return (
            <div className="search-box-table">
                <div className="search-input">
                    <input placeholder={this.props.placeholder} id="inputValue" />
                    <i className=" anticon anticon-search"></i>
                </div>
                <button className={"ant-btn "+this.props.btnColor} onClick={this.handleSearch}>搜索</button>
            </div>
        )
    }
}

export = SearchInput