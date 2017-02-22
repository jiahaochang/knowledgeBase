import * as React from 'react'

"use strict";

interface NotificationContentProps extends React.Props<NotificationContent> {
    currentNotificationName:string;
}
interface NotificationContentState {

}
class NotificationContent extends React.Component<NotificationContentProps, NotificationContentState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        var allcontent = [
            {
                notificationType: "通知",

                notificationItems: [
                    {
                        notificationID:"1",
                        name:"李老师",
                        time: "7月10日 10:30",
                        content: "通知高一一班的同学",
                        extra:"大家假期注意安全，假期愉快"
                    }
                ]
            },
            {
                notificationType: "评论",

                notificationItems: [
                    {
                        notificationID:"1",
                        name:"李小",
                        time: "7月10日 11:30",
                        content: "回复李帅龙：放假注意事项学校网站上有通知，可以去看一下",
                        extra:"回复我的状态：请问放假具体时间安排和注意事项哪里可以看到！谢谢！"
                    }
                ]
            },
            {
                notificationType: "赞",

                notificationItems: [
                    {
                        notificationID:"1",
                        name:"赵小",
                        time: "7月10日 11:20",
                        content: "赞了我的状态",
                        extra:"我：请问放假具体时间安排和注意事项哪里可以看到！谢谢！"
                    }
                ]
            }
        ];
        var content=[];
        for(var i = 0;i<allcontent.length;i++){
            if(allcontent[i].notificationType == this.props.currentNotificationName){
                content = allcontent[i].notificationItems;
            }
        }
        var isComment="";
        if(this.props.currentNotificationName=="评论"){
            isComment="comment-written";
        }
        else{
            isComment="no-comment";
        }
        return(
            <div className="notification-box" >
                <h3 className="notification-content-title">收到的{this.props.currentNotificationName}</h3>
                {
                    content.map(function(item,index){
                        return(
                             <div key={index} className="notification-content">
                                 <img src="vendor/images/default-headpic.jpg" />
                                 <div className="words">
                                     <div className="nameAndTime">
                                        {item.name}
                                        <span>{item.time}</span>
                                     </div>
                                     <div className="margin-top-content">
                                        <span>{item.content}</span>
                                     </div>
                                     <div className="extra-reply">
                                        <span>{item.extra}</span>
                                     </div>
                                     <div className={isComment}>
                                         <span>回复</span>
                                     </div>

                                 </div>
                             </div>
                        )
                    })
                }
            </div>
        )
    }
}

export = NotificationContent