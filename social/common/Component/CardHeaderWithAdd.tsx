import * as React from 'react'
import IconRotate180WithClick = require('./IconRotate180WithClick')
"use strict";
import {AddPropsHOC} from "./AddPropsHOC";

interface CardHeaderWithAddProps extends React.Props<CardHeaderWithAdd> {
    title:string,
    rightText?:any,
    addtitle:string,
    scaleFlag?:boolean,
    style?:any,
    className?:string,
    toggleCollapse?:Function,
    addComponent?: any,
    editClassName?:string,
    noAdd?: boolean //没有添加
}
interface CardHeaderWithAddState {
    isEditing?: boolean
}
/**
 *个人主页---添加活动时的header,带有header按钮
 */
class CardHeaderWithAdd extends React.Component<CardHeaderWithAddProps, CardHeaderWithAddState> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.addItem = this.addItem.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this)
        this.state = {
            isEditing: false
        }
    }

    static defaultProps = {
        scaleFlag:false,
        className:"blueBack",
        editClassName:""
    };

    handleClick(isCollapsed){
        this.props.toggleCollapse(isCollapsed);
    }

    addItem(){
        this.setState({
            isEditing: true
        })
    }

    //添加页面的取消按钮
    cancelAdd(){
        this.setState({
            isEditing: false
        })
    }

    render() {
        return (
            <div >
                <div className={"header-with-add "+this.props.className} style={this.props.style}>
                    <div className="title">{this.props.title}</div>
                    {
                        !this.props.noAdd &&
                        <span className="addtitle" onClick={this.addItem}><i className=" fa fa-plus-circle am-padding-right-sm"></i>{this.props.addtitle}</span>
                    }
                    <span className="rightText ">
                        {this.props.rightText}
                        {
                            this.props.scaleFlag &&  <IconRotate180WithClick handleClick={this.handleClick}/>
                        }
                    </span>
                </div>
                {
                    this.state.isEditing &&
                    <div className={this.props.editClassName}>
                        {AddPropsHOC(this.props.addComponent,{cancel:this.cancelAdd})}
                    </div>

                }
            </div>
        )
    }
}

export = CardHeaderWithAdd