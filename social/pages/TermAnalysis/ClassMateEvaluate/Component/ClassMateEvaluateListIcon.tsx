import * as React from 'react'
import {studentDefaultHeadPic,studentDefaultName} from 'common/Config/CommonConfig'
import {isEmptyObject} from 'common/commonFunc'
"use strict";
import {ClassMateEvaluateListIconTypeEnum} from "../Data/ClassMateEvaluateListIconTypeEnum";

interface ClassMateEvaluateListIconProps extends React.Props<ClassMateEvaluateListIcon> {
    type: ClassMateEvaluateListIconTypeEnum;
    onClick?:Function;
    classmateID: string;
    isFinished: boolean,
    name?:string,
    headImage?:string
}

interface ClassMateEvaluateListIconState {

}

/**
 * 同学互评列表中的 头像
 * 有三种状态 正常，激活列的激活图标，激活列的未激活图标
 */
class ClassMateEvaluateListIcon extends React.Component<ClassMateEvaluateListIconProps, ClassMateEvaluateListIconState> {
    constructor(props) {
        super(props);
        this.onClickImg = this.onClickImg.bind(this);
    }

    onClickImg(){
        this.props.onClick(this.props.classmateID,this.props.name);
    }
    
    render() {
        var typeClassName = this.props.type === ClassMateEvaluateListIconTypeEnum.ActiveSpecial?"ClassMateEvaluateListActiveSpecial":"ClassMateEvaluateListActiveNormal";
        var finishedClassName = this.props.isFinished?" isFinished":" ";
        var className = typeClassName+finishedClassName;
        var headImage = isEmptyObject(this.props.headImage)?studentDefaultHeadPic:this.props.headImage;
        var name = isEmptyObject(this.props.name)?studentDefaultName:this.props.name;
        return (
            <div className={className} onClick={this.onClickImg}>
                <img src={headImage} width="65"/>
                <div className="name">{name}</div>
            </div>
        )
    }
}

export = ClassMateEvaluateListIcon