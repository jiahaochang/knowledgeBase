import * as React from 'react'
import {Button, Slider} from 'antd'

"use strict";

interface FlipWithSliderProps extends React.Props<FlipWithSlider> {
    totalPageCount: number, //总数
    currentPageNum: number, //当前数
    isSliderDraggable?: boolean, //是否可拖拽进度条

    onChangePageNum(pageNumAfterChange: number): void, //页码变化回调
    onSubmitResult: React.EventHandler<any>  //提交回调
}

const preBtyType = "preBtn";//上一页
const nextBtnType = "nextBtn";//下一页

/**
 * 带有滑块进度条的翻页组件
 */
class FlipWithSlider extends React.Component<FlipWithSliderProps, {}> {
    constructor(props) {
        super(props);
        this.getPageNumAfterChange = this.getPageNumAfterChange.bind(this);
        this.afterSliderChange = this.afterSliderChange.bind(this);
        this.ChangePageNum = this.ChangePageNum.bind(this);
    }

    ChangePageNum(btnType:string): void{
        var pageNumAfterChange = this.getPageNumAfterChange(btnType);
        this.props.onChangePageNum(pageNumAfterChange);
    }

    getPageNumAfterChange(btnType:string): number{
        if (btnType === preBtyType){
            return this.props.currentPageNum - 1;
        }else if (btnType === nextBtnType){
            return this.props.currentPageNum + 1;
        }else {
            return this.props.currentPageNum;
        }
    }

    afterSliderChange(value){
        this.props.onChangePageNum(value);
    }

    render() {
        var {totalPageCount, currentPageNum, isSliderDraggable} = this.props;
        var isPrePageEnable = !(currentPageNum === 1);
        var isNextPageEnable = !(currentPageNum === totalPageCount);
        var isSubmitBtnShown = currentPageNum === totalPageCount;
        return (
            <div>
                <Slider min={1} max={this.props.totalPageCount} value={this.props.currentPageNum} onChange={this.afterSliderChange} disabled={!isSliderDraggable}/>
                {
                    isPrePageEnable &&
                    <Button className="MIAssess-btn-last" onClick={this.ChangePageNum.bind(this, preBtyType)} >上一题</Button>
                }

                {
                    isSubmitBtnShown &&
                    <Button className="MIAssess-btn-submit" onClick={this.props.onSubmitResult}>提交</Button>
                }

                {
                    isNextPageEnable &&
                    <Button className="MIAssess-btn-next" onClick={this.ChangePageNum.bind(this, nextBtnType)} >下一题</Button>
                }
            </div>
        )
    }
}

export = FlipWithSlider