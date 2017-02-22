import * as React from 'react'

"use strict";

interface NavBtnListProps extends React.Props<NavBtnList> {
    currentActiveBtn?: string;
    clickedNav: Function;
}

interface NavBtnListState {
    currentActiveBtn?: string;
}

const navList = [
    {
        icon: "123",
        displayName: "我的7选3",
        url: "homePage/myPersonalPage",
        query:{
            anchor: "subjectChoose"
        },
        active: true
    },
    {
        icon: "123",
        displayName: "我的7选3",
        url: "homePage/myPersonalPage",
        query:{
            anchor: "subjectChoose"
        },
        active: false
    }
];

/**
 * 导航列表
 */
class NavBtnList extends React.Component<NavBtnListProps, NavBtnListState> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
    };

    handleClick(url){
        this.props.clickedNav(url);
    }

    render() {
        var this_ = this;
        return (
            <div>
                {
                    navList.map(function(item, index){
                        var btnClass = item.active?"active":"";
                        return <div className={btnClass} onClick={this_.handleClick.bind(this_, item.url)} key={index}>{item.displayName}</div>
                    })
                }
            </div>
        )
    }
}

export = NavBtnList