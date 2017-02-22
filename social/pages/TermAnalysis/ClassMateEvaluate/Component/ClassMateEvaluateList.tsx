import * as React from 'react'
import {Row, Col} from 'antd'
"use strict";
import {changeArrayForNewGroup} from "../../../../common/commonFunc";
import {ClassMateEvaluateListIconTypeEnum} from "../Data/ClassMateEvaluateListIconTypeEnum";
import ClassMateEvaluateListIcon = require('./ClassMateEvaluateListIcon')
import ClassMateEvaluateListEvaluateStars = require('./ClassMateEvaluateListEvaluateStars')

import EvaluateStudentByScore = Nicezy.EvaluateStudentByScore;

interface ClassMateEvaluateListProps extends React.Props<ClassMateEvaluateList> {
    currentTerm?:string,
    currentClassmateID: string,
    onClassmateChange(classmateID: string,classmateName?:string): void,
    allClassmates: Array<EvaluateStudentByScore>
}

interface ClassMateEvaluateListState {
}

class PositionInGroup {
    row: number;
    index: number;
}

/**
 * 同学互评列表 包括头像
 */

const iconCountInEachRow = 3;
class ClassMateEvaluateList extends React.Component<ClassMateEvaluateListProps, ClassMateEvaluateListState> {
    constructor(props) {
        super(props);
        this.calActivePositionInGroup = this.calActivePositionInGroup.bind(this);
        this.getActiveIndexInAll = this.getActiveIndexInAll.bind(this);
        this.onClassmateChange = this.onClassmateChange.bind(this);
    }

    getActiveIndexInAll(activeID:any, all:Array<any>):number{
        for(var i=0; i<all.length; i++){
            if(all[i].studentUserID === activeID){
                return i
            }
        }
        return;
    }

    calActivePositionInGroup(activeIndexInAll:number, iconCountInEachRow:number):PositionInGroup{
        var row = Math.floor(activeIndexInAll/iconCountInEachRow);
        var index = activeIndexInAll - row*iconCountInEachRow;
        return {
            row,
            index
        }
    }

    onClassmateChange(classmateID,classmateName){
        this.props.onClassmateChange(classmateID,classmateName);
       
    }

    render() {
        var allClassmates = this.props.allClassmates;
        var currentClassmateID = this.props.currentClassmateID;

        var currentStudentWithScore = allClassmates.filter(function (item, index, items) {
            return item.studentUserID === currentClassmateID;
        })[0];

        var classmatesAfterGrouped = changeArrayForNewGroup(allClassmates, iconCountInEachRow);
        var activeIndexInAll = this.getActiveIndexInAll(currentClassmateID, allClassmates);
        var activePosition = this.calActivePositionInGroup(activeIndexInAll, iconCountInEachRow);

        var this_ = this;
        return (
            <div className="ClassMateEvaluateList">
                {
                    classmatesAfterGrouped.map(function (groupItem, groupIndex) {
                        if (groupIndex === activePosition.row){
                            return (
                                <Row key={groupIndex} className="current-row-eva">
                                    {groupItem.map(function (item, index) {
                                        var key = item.studentUserID + "_" + index;
                                        var typeName = index === activePosition.index?ClassMateEvaluateListIconTypeEnum.ActiveSpecial:ClassMateEvaluateListIconTypeEnum.ActiveNormal;
                                        return (
                                            <Col span={8} key={key} >
                                                <ClassMateEvaluateListIcon  type={typeName} onClick={this_.onClassmateChange}
                                                                           classmateID={item.studentUserID} isFinished={item.qualityEvaluationFinished} name={item.name} headImage={item.headImage}/>
                                            </Col>
                                        )
                                    })}
                                    <Col span={24}><ClassMateEvaluateListEvaluateStars studentWithScore={currentStudentWithScore} currentTerm={this_.props.currentTerm}/></Col>
                                </Row>
                            )
                        }else{
                            return (
                                <Row key={groupIndex}>
                                    {groupItem.map(function (item, index) {
                                    var key = item.studentUserID + "_" + index
                                    return (
                                        <Col span={8} key={key}>
                                            <ClassMateEvaluateListIcon  type={ClassMateEvaluateListIconTypeEnum.Normal} onClick={this_.onClassmateChange}
                                                                       classmateID={item.studentUserID} isFinished={item.qualityEvaluationFinished} name={item.name} headImage={item.headImage}/>
                                        </Col>
                                    )
                                    })
                                            }
                                </Row>
                            )

                        }
                    })
                }
            </div>
        )
    }


}

export = ClassMateEvaluateList