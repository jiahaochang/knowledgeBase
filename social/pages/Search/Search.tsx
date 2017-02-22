import * as React from 'react'
import { Row, Col,Icon,Button,Checkbox } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GroupCheckbox = require('./Component/GroupCheckbox');
import PersonInfoList = require('./Component/PersonInfoList');
import * as ActionTypes from '../../actions/Search/SearchActionTypes'
import * as ajaxUtil from '../../common/ajaxUtil'
import * as ItemsActions from '../../actions/Search/SearchAction'
"use strict";

interface SearchProps extends React.Props<Search> {
    actions: any,
    searchState:any,
}

interface SearchState {
    results?:Array<any>
    currentGrade?:Array<any>,
    gradeOptions?:Array<any>,
    classOptions?:Array<any>
}

/**
 * 搜索用户
 */
class Search extends React.Component<SearchProps, SearchState> {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
        this.setCurrentGrade = this.setCurrentGrade.bind(this);
    }

    static defaultProps = {
    };

    componentWillMount(){
        var this_ = this;
        //ajax获取用于筛选搜索结果的左侧条件
        ajaxUtil.getDataByActionIDAsync(ActionTypes.GET_SEARCH_OPTIONS, function (response) {
            const optionRecords = response.result;
            this_.setState({
                gradeOptions: optionRecords.gradeOptions,
            });
        });
        this_.setState({currentGrade: []});
    }

    /**
     * 将当前选中的年级设置state
     */
    setCurrentGrade(checkedValues){
        this.setState({currentGrade:checkedValues});
    }

    componentDidMount(){
    }

    render() {
        //获取左侧筛选栏的筛选条件“年级”
        var options:any[] = this.state.gradeOptions;
        var gradeCheckTitle = "所在年级：";
        //@param searchResult显示的搜索结果
        var searchResult = [];

        //根据左侧的年级筛选条件来筛选搜索结果
        var responseData = [];
        responseData = this.props.searchState.toJS().searchResult;
        var currentGrade = this.state.currentGrade;
        if(currentGrade.length != 0){
            for (var key in responseData) {
                for(var i=0;i<currentGrade.length;i++){
                    if((responseData[key].grade+"").indexOf(currentGrade[i]) != -1){
                        searchResult.push(responseData[key]);
                    }
                }
            }
        }else if(currentGrade.length == 0){
            searchResult = responseData;
        }

        //如果查找的返回信息为空，则提示“未查找到相关用户”
        if(searchResult.length == 0) {
            var message = "未查找到相关用户";
        }else {
            var message = "";
        }

        return (
            <div className="main-container">
                <Row>
                    <Col span={4}>
                        <div className="am-margin-top-lg">
                            <GroupCheckbox
                                setCurrentGrade={this.setCurrentGrade}
                                options={options}
                                title={gradeCheckTitle}
                            />
                        </div>
                    </Col>
                    <Col span={13}>
                        <div className="am-margin-top-lg">
                            {message}
                            {
                                searchResult.map(function(item, index) {
                                    return (
                                    <PersonInfoList key={index} searchResult={item}/>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export =  connect(state => ({
    searchState: state.searchState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(Search)
