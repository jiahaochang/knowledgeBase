import * as React from 'react'
import {Checkbox, Button,Row,Col,Modal,Alert,message} from 'antd'
import * as responseCacheContext from 'common/ResponseCacheContext'
import {isEmptyObject} from 'common/commonFunc'

//调用API
import {getDataByActionIDWithQueryAsync,getDataFromContextByActionIDAsync} from "common/ajaxUtil"
import * as actionTypes from 'actions/HomePage/HomePageActionTypes'
import {getUserIDFromStorage} from 'common/storageUtil'

"use strict";

interface ImpressionPersonalProps extends React.Props<ImpressionPersonal> {

}

interface ImpressionPersonalState {
    impressions?:any

}

/**
 * 学生--个人页面
 * 同学眼中的我 印象
 *
 */


class ImpressionPersonal extends React.Component<ImpressionPersonalProps, ImpressionPersonalState> {
    constructor(props) {
        super(props);
        this.state = {
            impressions: {},
        };
    }

    componentWillMount(){
        this.getStudentImpression();
    }


    getStudentImpression(){
        var this_ = this;
        var studentUserID = getUserIDFromStorage();
        var queryObj = {studentUserID:studentUserID};
        getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_IMPRESSION,queryObj,function (response) {
            this_.setState({
                impressions:response.result
            })
        })
    }


    render() {
        var this_　= this;
        var desc = ["他们暂时","没有","评价你哟"];
        if(!isEmptyObject(this.state.impressions)){
            var hasImpression = this.state.impressions.hasImpression;  //有没有结果
            var isVisible = this.state.impressions.visible;  //自己是否已经填写了评价【若没有填写，则不能显示】
            if(isVisible && hasImpression){
                desc = this.state.impressions.impressions;
            }
        }

        return (
            <div className="impression-div">
                <div className="impression-text ">别人眼中的我</div>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <div className="circle small">{desc[0]}</div>
                    </Col>
                </Row>
                <Row  type="flex">
                    <Col span={12}>
                        <div className="circle small">{desc[1]}</div>
                    </Col>
                    <Col span={12} >
                        <div className="circle small">{desc[2]}</div>
                    </Col>
                </Row>
            </div>
            
        )

    }
}

export = ImpressionPersonal