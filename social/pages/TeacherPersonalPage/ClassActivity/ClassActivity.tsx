import * as React from 'react'
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank') //todo：有一种可以在webpack中配置缩写的方法
"use strict";

import {Row, Col} from 'antd'
import StudentListWithRouter = require('../ClassNotification/Component/StudentListWithRouter')
import ClassActivityRecord = require('./Component/ClassActivityRecord')
import CollapsableCard = require('../../../common/Component/CollapsableCard')
import CardHeaderWithAdd = require('../../../common/Component/CardHeaderWithAdd')
import {getUserIDFromStorage} from 'common/storageUtil'

import * as ActionTypes from '../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import * as ajaxUtil from '../../../common/ajaxUtil'

interface ClassActivityProps extends React.Props<ClassActivity> {

}

interface ClassActivityState {
    records?: Array<any>,
    fileList?: Array<any>,
}

class ClassActivity extends React.Component<ClassActivityProps, ClassActivityState> {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {
            records: []
        }
    }

    static defaultProps = {};

    componentWillMount(){
        this.refresh();
    }

    refresh(){
        var this_ = this;
        //ajax get record
        var teacherUserID = getUserIDFromStorage();
        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_ACTIVITY,{teacherUserID:teacherUserID}, function (response) {
            var records = response.result.classActivityInfoList;
            this_.setState({
                records: records,
            })
        });

    }

    render() {
        var this_ = this;
        var addComponent = <ClassActivityRecord componentState="addNew" from="headAdd" refresh={this.refresh}/>;
        //班团活动
        var classActivityList = (
            <div>
                {this.state.records.map(function (item, index) {
                    return (
                        <ClassActivityRecord record={item}  key={index} componentState="readOnly" refresh={this_.refresh}/>
                    )
                })}
            </div>
        );

        return (
            <Row>
                <PersonInfoAndRank />

                <Col span={17} className="am-padding-right-sm">
                    <CollapsableCard  className="blueBack"  titleWithClick={<CardHeaderWithAdd title ="班团活动教案与设计" addtitle="添加班团活动" editClassName="am-margin-bottom-sm" scaleFlag={true}  addComponent={addComponent} />}
                                     collapsableElement={ classActivityList}
                    />
                </Col>
                <Col span={7}>
                    <StudentListWithRouter/>
                </Col>
            </Row>

        )
    }
}

export = ClassActivity