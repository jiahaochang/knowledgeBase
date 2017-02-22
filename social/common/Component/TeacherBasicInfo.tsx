import * as React from 'react'

"use strict";
import IUserImmutableInfo = Nicezy.IUserImmutableInfo;
import {isEmptyObject} from "../commonFunc";
import {studentDefaultHeadPic} from "../Config/CommonConfig";

interface TeacherBasicInfoProps extends React.Props<TeacherBasicInfo> {
    className?: string,
    teacherBasicInfo?: IUserImmutableInfo,
    disableEdit?: boolean
}

interface TeacherBasicInfoState {

}

class TeacherBasicInfo extends React.Component<TeacherBasicInfoProps, TeacherBasicInfoState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var dataReady = !!this.props.teacherBasicInfo;
        var userImmutableInfo = this.props.teacherBasicInfo;
        return (
            <div className={this.props.className}>
                {
                    dataReady &&
                    <div className="right-info">
                        <img src={isEmptyObject(userImmutableInfo.headImage)?studentDefaultHeadPic:userImmutableInfo.headImage}/>
                        <div className="name">
                            {userImmutableInfo.name}
                            <span className="right-credit">班主任</span>
                        </div>
                        <div className="number-sign">
                            <span className="am-block">工号：{userImmutableInfo.systemID}</span>
                            <div>
                                <a>班级：{userImmutableInfo.className}</a>
                                {
                                    false &&
                                    <span className="pull-right">
                                    关注&nbsp;&nbsp;
                                      <span className="good-friend-count">1</span>
                                    </span>
                                }

                            </div>
                            <span className="am-block am-margin-top-xs">个性签名：{userImmutableInfo.stateMsg}</span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export = TeacherBasicInfo