import * as React from 'react'
"use strict";
import {isEmptyObject} from "../commonFunc";

interface TabBarColorProps extends React.Props<CardTabs> {
    tabs:Array<any>
}
interface TabBarColorState {
    activeIndex: number
}

class CardTabs extends React.Component<TabBarColorProps, TabBarColorState> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0
        };
        this.showActive = this.showActive.bind(this);
    }

    static defaultProps = {
        className:""
    };

    showActive(e){
        this.setState({activeIndex:e.currentTarget.tabIndex});

    }
//[{tabName:"",tabContent:子组件},{tabName:"",tabContent:子组件},{tabName:"",tabContent:子组件},]
    render() {
        if(isEmptyObject(this.props.tabs)){
            return <div>loading</div>
        }

        var this_ = this;
        var tabBarClsName = "tab-bar am-cf am-avg-sm-"+this.props.tabs.length;
        var tabContent = this.props.tabs[this.state.activeIndex].tabContent;

        return (
            <div className="tab-bar-parent">
                <ul className={tabBarClsName}>
                    {this.props.tabs.map(function(tab, index){
                        var activeClass = index==this_.state.activeIndex?"active":"";
                        return <li className={activeClass} key={index} onClick={this_.showActive} tabIndex={index}>{tab.tabName}</li>
                        }
                    )}
                </ul>
                <div className="tab-content am-cf">
                    {tabContent}
                </div>
            </div>
        )
    }
}

export = CardTabs