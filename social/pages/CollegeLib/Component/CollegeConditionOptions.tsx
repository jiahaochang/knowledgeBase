import * as React from 'react'
import * as ItemsActions from '../../../actions/CollegeLib/CollegeLibAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {defaultCurrentPage} from 'common/Config/CommonConfig'
import {getSearchConditionFromStateTree} from '../CollegeLibUtil'
"use strict";
/**
 * 院校库---左边选择条件
 */
interface SchoolConditionOptionsProps extends React.Props<SchoolConditionOptions> {
    options:Array<any>,
    optionsFlag:string,
    collegeLibState?: any,
    actions?: any
}
interface SchoolConditionOptionsState {
}
let keyID = "";
let keyName = "";
const UNLIMITED = "不限";
class SchoolConditionOptions extends React.Component<SchoolConditionOptionsProps, SchoolConditionOptionsState> {
    constructor(props) {
        super(props);
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
    };

    getActiveOption(parent){
        var chooseArray = [];
        parent.children("a").each(function(index) {
            if($(this).hasClass("active")){
                var optionID = $(this).attr('id');
                chooseArray.push(optionID);
            }
        });
        return chooseArray;
    }
    //条件点击事件
    showActive(e){
        var obj = $(e.currentTarget);
        var defaultActiveObj = obj.parent().children().first();
        var chooseArray = [];
        //单选
        if(this.props.optionsFlag == "majorType" || this.props.optionsFlag == "collegeLevel"){

            if(obj.text() == UNLIMITED){
                obj.addClass("active").siblings().removeClass("active");
                chooseArray.push(e.currentTarget.id);
            }else{
                if(obj.hasClass("active")){
                    obj.removeClass("active");
                    defaultActiveObj.addClass("active");
                    chooseArray.push(defaultActiveObj.attr("id"));
                }else{
                    obj.addClass("active").siblings().removeClass("active");
                    chooseArray.push(e.currentTarget.id);
                }
            }
            if(this.props.optionsFlag=="majorType"){
                this.props.actions.mergeCollegeOptionsLevel({collegeLib_collegeOptions_type:chooseArray});
            }else{
                this.props.actions.mergeCollegeOptionsLevel({collegeLib_collegeOptions_level:chooseArray });
            }
        }
         //多选
        else if(this.props.optionsFlag == "province" || this.props.optionsFlag == "collegeProp"){
            if(obj.text() == UNLIMITED){
                obj.addClass("active").siblings().removeClass("active");
            }else{
                if(obj.hasClass("active")){
                    obj.removeClass("active");
                    var activeCount = this.getActiveOption(obj.parent()).length;
                    if(activeCount==0){
                        defaultActiveObj.addClass("active");
                    }
                }else{
                    obj.addClass("active");
                    defaultActiveObj.removeClass("active");
                }
            }
            chooseArray = this.getActiveOption(obj.parent());
            if(this.props.optionsFlag=="province"){
                this.props.actions.mergeCollegeOptionsProvince({collegeLib_collegeOptions_province: chooseArray});
            }else{
                this.props.actions.mergeCollegeOptionsMajorML({collegeLib_collegeOptions_collegeProp: chooseArray});
            }
        }
        this.props.actions.mergeCurrentPage({collegeLib_currentPage:defaultCurrentPage});
        var postData = getSearchConditionFromStateTree(this.props.collegeLibState.toJS(),this.props.optionsFlag,chooseArray);
        this.props.actions.getCollegeResult(postData);

    }
    //1.取数组【0】map 的key   2.数组赋值不限
    initOptions(){
        var options = this.props.options;
        var keys = [];
        var hasLimited = false;
        $.each(options[0],function(key,values){
            if(key.indexOf("ID")>0 ||key.indexOf("Name")>0 ){
                if(values=="" || values==UNLIMITED){
                    hasLimited = true;
                }
            }
            keys.push(key);
        });
        for (let value of keys) {
            if(value.indexOf("ID")>0){
                keyID = value;
            }else if(value.indexOf("Name")>0){
                keyName = value;
            }
        }
        if(!hasLimited){
            var defaultMap = {};
            defaultMap[keyID] = "";
            defaultMap[keyName] = UNLIMITED;
            options.unshift(defaultMap);
        }
        return options;
    }
    render() {
        var this_ = this;
        //一行放几个属性由col后面的数字决定
        var className = "school-condition-options col4";
        if(this.props.optionsFlag == "majorType" || this.props.optionsFlag == "collegeLevel"){
            className = "school-condition-options col3";
        }

        var options = this.initOptions();

        return (

            <div className={className}>
                {options.map(function(option, index){
                        var activeClassName = index == 0?"active":"";
                        return <a  key={index} className={activeClassName} onClick={this_.showActive} id={option[keyID]} >{option[keyName]}</a>
                    }
                )}
            </div>
            
        )
    }
}
export = connect(state => ({
    collegeLibState: state.collegeLibState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch),
}))(SchoolConditionOptions)

