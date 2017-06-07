import * as React from 'react'
import * as ItemsActions from '../../../actions/CollegeLib/CollegeLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {defaultPageSize} from 'common/Config/CommonConfig'
import {getSearchConditionFromStateTree} from '../CollegeLibUtil'
import { Pagination,Icon } from 'antd';
"use strict";
import {isEmptyObject} from "../../../common/commonFunc";
/**
 * 院校库---左边选择条件
 */
interface CollegeResultProps extends React.Props<CollegeResult> {
    options:Array<any>,
    optionsFlag:string,
    collegeLibState?: any,
    actions?: any,
    router?:any
}
interface CollegeResultState {

}
const COLLECTION_ALREADY ="已收藏";
const COLLECTION_NOT  = "收藏";

class CollegeResult extends React.Component<CollegeResultProps, CollegeResultState> {
    constructor(props) {
        super(props);

        this.onChangePagination = this.onChangePagination.bind(this);
        this.getResultList = this.getResultList.bind(this);

    }

    /*static defaultProps = {
    };*/

    componentWillMount(){
        var postData = getSearchConditionFromStateTree(this.props.collegeLibState.toJS());
        this.props.actions.getCollegeResult(postData);
    }




    //收藏院校
    collectCollege(collegeID,e){
        var text = $(e.currentTarget).text();
        if($(e.currentTarget).find("i").length){
            $(e.currentTarget).html(COLLECTION_ALREADY);
            $(e.currentTarget).addClass("ant-btn-primary");
        }else{
            $(e.currentTarget).html('<i class=" anticon anticon-plus"></i><span>'+COLLECTION_NOT+'</span>');
            $(e.currentTarget).removeClass("ant-btn-primary");
        }
    }
    //查看院校详情
    showCollegeIntro(collegeID,e){
        this.props.router.push({
            pathname: 'collegeLib/collegeIntro',
            query: {collegeID:collegeID}
        });
    }

    //分页显示
    onChangePagination(page){
        this.props.actions.mergeCurrentPage({collegeLib_currentPage:page});
        var postData = getSearchConditionFromStateTree(this.props.collegeLibState.toJS(),"page",page);
        this.props.actions.getCollegeResult(postData);
    }

    //收藏待定
   /* var collection =  <Button icon="plus" onClick={this_.collectCollege.bind(this_,info.collegeID)}>{COLLECTION_NOT}</Button>;
    if(info.favorite){
    collection = <Button  type="primary"  onClick={this_.collectCollege.bind(this_,info.collegeID)}>{COLLECTION_ALREADY}</Button>;
    line 110  has {collection}
}*/
    getResultList(responseData){
        var collegePropID = this.props.collegeLibState.toJS().collegeLib_collegeOptions_collegeProp;
        var resultList = [];

        var searchKey = this.props.collegeLibState.toJS().collegeLib_searchBox_input;

        if(collegePropID.length>0 && !isEmptyObject(collegePropID[0])){
            for (let item of responseData.colleges){
                if(collegePropID.indexOf(item.typeID)>=0){
                    if(searchKey == ""){
                        resultList.push(item);
                    }
                }
                if(searchKey!="") {
                    if (item.medicinalMaterialName.indexOf(searchKey) >= 0) {
                        resultList.push(item);
                    }
                }
            }
        }else if(collegePropID.length == 0 || isEmptyObject(collegePropID[0])){
            if(responseData.length == 0){
                resultList=[]
            }else {
                if(searchKey == "")
                resultList = responseData.colleges;
                if(searchKey!="") {
                    for (let item of responseData.colleges) {
                        if (item.medicinalMaterialName.indexOf(searchKey) >= 0) {
                            resultList.push(item);
                        }
                    }
                }
            }
        }
        return resultList;
    }

    render() {
        var this_ = this;
        var tempData = this.props.collegeLibState.toJS().collegeLib_collegeResult;
        var responseData = isEmptyObject(tempData)?[]:tempData;
        var collegeList = this.getResultList(responseData);

        var total = collegeList.length;
        var current = this.props.collegeLibState.toJS().collegeLib_currentPage;
        var hasResult = isEmptyObject(responseData)? false:true;



        return (
            <div>
                {
                    collegeList.map(function(info, index){
                    //maybe has collection
                    if( ((current-1) *defaultPageSize-1) < index && index < (current*defaultPageSize) )
                        {
                            return (
                            <div className="am-cf school-intro-single" key={index}>
                                <img src={info.logo} width="90" height="110" className="pull-left"
                                     onClick={this_.showCollegeIntro.bind(this_,info.collegeID)}/>
                                <div className="middle-intro">
                                    <div className="line-one">
                                        <h3 onClick={this_.showCollegeIntro.bind(this_,info.collegeID)}>{info.medicinalMaterialName}</h3>
                                    </div>
                                    <div className="line-two">
                                        <div>隶属    ：{info.belongTo}</div>
                                    </div>
                                    <div className="line-three">
                                        <div>处方用名：{info.chufangName}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    }
                    )
                }

                {
                    hasResult &&
                    <div className="am-margin-top-sm">
                        <Pagination  current={current} onChange={this.onChangePagination} total={total} pageSize={defaultPageSize}  showTotal={total => `共 ${total} 条`} />
                    </div>
                }

                {
                    !hasResult &&
                    <div className="show-search-text am-text-center" style={{marginBottom:"20px"}} >暂无匹配药材，请尝试其他关键词搜索吧<Icon type="frown" /></div>
                }


            </div>
            
        )
    }
}
export = withRouter(connect(state => ({
    collegeLibState: state.collegeLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(CollegeResult))

