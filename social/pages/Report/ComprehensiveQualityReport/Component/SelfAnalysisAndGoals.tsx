import * as React from 'react'

"use strict";

interface SelfAnalysisAndGoalsProps extends React.Props<SelfAnalysisAndGoals> {

}

interface SelfAnalysisAndGoalsState {

}
/**
 * 个人素质档案
 * 自我剖析与目标
 */
class SelfAnalysisAndGoals extends React.Component<SelfAnalysisAndGoalsProps, SelfAnalysisAndGoalsState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div className="am-margin-top">
                <div className="self-analysis-goals-single am-cf">
                    <div className="title">
                        <i className="fa fa-heart"></i>
                        我的性格与兴趣：
                    </div>
                    <p className="content">
                        你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？
                    </p>
                </div>
                <div className="self-analysis-goals-single am-cf">
                    <div className="title">
                        <i className="fa fa-balance-scale"></i>
                        我的优势与不足：
                    </div>
                    <p className="content">
                        你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？
                    </p>
                </div>
                <div className="self-analysis-goals-single am-cf">
                    <div className="title">
                        <i className="fa fa-university"></i>
                        我的大学升学目标：
                    </div>
                    <p className="content">
                        你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？
                    </p>
                </div>
                <div className="self-analysis-goals-single am-cf">
                    <div className="title">
                        <i className="fa fa-flag-checkered"></i>
                        本学期我的综合素质培养目标：
                    </div>
                    <p className="content">
                        你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？你觉得呢？还没弄清栗子为什么可以放在黄焖鸡里面？
                    </p>
                </div>
            </div>
        )
    }
}

export = SelfAnalysisAndGoals