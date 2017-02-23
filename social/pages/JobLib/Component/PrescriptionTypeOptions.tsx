import * as React from 'react'
import * as ItemsActions from '../../../actions/JobLib/JobLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col,Icon } from 'antd';
"use strict";

import * as context from '../JobLibContext'

/**
 * 职业库---右边选择条件
 */
interface JobOptionsProps extends React.Props<JobOptions> {
    jobCategoryOptions:Array<any>,
    jobLibState?: any,
    actions?: any,
    searchKeyWord?:string,
    handleSearchWithInput?:Function
}

interface JobOptionsState {
}

class JobOptions extends React.Component<JobOptionsProps, JobOptionsState> {
    constructor(props) {
        super(props);
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
    };

    //条件点击事件
    showActive(e){
        var obj = $(e.currentTarget);
        if(!obj.hasClass("active")){
            obj.addClass("active").siblings().removeClass("active");
            this.props.actions.mergeJobOptionsJob({currentJobOption:{jobCategoryID:e.currentTarget.id,jobCategoryName:obj.text()}});
            //点击后恢复到未搜索状态
            this.props.handleSearchWithInput("");
            $("#searchInput").val("");
        }
    }

    componentWillMount(){
        this.props.actions.mergeJobOptionsJob({
            currentJobOption:this.props.jobCategoryOptions[0]
        });
    }

    render() {
        var this_ = this;
        var jobSearchInput = this.props.searchKeyWord;
        var currentJobCategoryID = "";
        if(jobSearchInput != ""){//如果是搜索状态，则输入的关键字不为空。这时，控制职业大类为未选择状态
            currentJobCategoryID = "";
        }else{
            currentJobCategoryID = this.props.jobLibState.toJS().currentJobOption.jobCategoryID;
        }
        return (
            <div className="profession-screen-single block-box-shadows">
                <h3 className="profession-screen-title">剂型</h3>
                <ul className="profession-screen-content am-cf">
                    {this.props.jobCategoryOptions.map(function(option, index){
                            if(currentJobCategoryID == option.jobCategoryID){
                                var activeClassName = "active";
                            }else{
                                var activeClassName = "";
                            }
                            return <li  key={index} className={activeClassName} onClick={this_.showActive} id={option.jobCategoryID} >{option.jobCategoryName}</li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export = connect(state => ({
    jobLibState: state.jobLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(JobOptions)

