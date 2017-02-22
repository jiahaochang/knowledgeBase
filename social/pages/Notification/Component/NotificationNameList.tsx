import * as React from 'react';
"use strict";

interface NotificationNameListProps extends React.Props<NotificationNameList> {
    currentNotificationName:string;
    handleClick:Function;
}
interface NotificationNameListState {

}

class NotificationNameList extends React.Component<NotificationNameListProps,NotificationNameListState> {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(NotificationName){
        this.props.handleClick(NotificationName);
    }

    render(){
        var this_=this;
        var NotificationNameList = ['通知','评论','赞'];
        return(
            <div className="notification-box">
                <h1 className="notification-nav-title">我的消息箱</h1>
                <ul className="notification-nav-btnList index-fixed">
                    {
                        NotificationNameList.map(function(item,index){
                            var activeClass = item == this_.props.currentNotificationName?"active":"";
                            return ( <li key={index} className={activeClass} onClick={this_.handleClick.bind(this_,item)}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export = NotificationNameList