import * as React from 'react'

"use strict";
import {formatDate} from 'common/commonFunc'
import ClassNotificationItem = Nicezy.ClassNotificationItem;
import * as ajaxUtil from 'common/ajaxUtil'
import * as ActionTypes from'actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
interface NotificationRecordProps extends React.Props<NotificationRecord> {
    record:ClassNotificationItem,
    refresh:Function,
    disableEdit?: boolean
}

interface NotificationRecordState {
    hide?: boolean
}

/**
 * 过往通知记录, 显示通知内容，不能编辑内容，但是可以删除
 */
class NotificationRecord extends React.Component<NotificationRecordProps, NotificationRecordState> {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        };
        this.delete = this.delete.bind(this);
    }

    componentWillMount() {
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props) {

    }

    delete(id){
        var this_ = this;
        var postData = {notificationID:id};
        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.DELETE_TEACHER_CLASSNOTIFICATION,postData,function (response) {
            this_.setState({hide:true});
            this_.props.refresh();
        })
    }


    render() {
        var item = this.props.record;
        var className = this.state.hide?"past-record-single am-hide":"past-record-single";
        var modifiedTime = formatDate(item.modifiedTime,"yyyy-MM-dd HH:mm");

        return (
            <div className={className}>
                {
                    !this.props.disableEdit &&
                    <div className="am-text-right">
                        <a className="redLink anticon anticon-cross" onClick={this.delete.bind(this,item.notificationID)}>删除</a>
                    </div>
                }

                <p>{item.notificationContent}</p>
                <div className="am-text-right am-text-sm" style={{color:"#B5A7A7"}}>
                    {modifiedTime}
                </div>
            </div>

        )
    }
}

export = NotificationRecord