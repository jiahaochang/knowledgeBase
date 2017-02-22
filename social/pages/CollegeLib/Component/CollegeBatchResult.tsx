import * as React from 'react'
import { Row,Icon } from 'antd';
import {isEmptyObject} from 'common/commonFunc'
import  CollegeBatchSingle = require('./CollegeBatchSingle');
"use strict";
/**
 * 院校库---院校主页（历年分数线tab单个table内容）
 */
interface CollegeBatchResultProps extends React.Props<CollegeBatchResult> {
    data:any
}
interface CollegeBatchResultState {
}

class CollegeBatchResult extends React.Component<CollegeBatchResultProps, CollegeBatchResultState> {
    constructor(props) {
        super(props);
    }


    render() {
        var this_ = this;
        var hasScience = !isEmptyObject(this.props.data.science)?true:false;
        var hasArt = !isEmptyObject(this.props.data.art)?true:false;
        var noResultTip= <div className="am-margin-top-sm" style={{color:"grey"}}><Icon type="frown"/>暂无数据</div>;

        return (
            <div className="subject-batch-result">
                <div><b>内服</b></div>
                <Row>
                    {hasScience &&
                        this.props.data.science.map(function(batch, index){
                                return <CollegeBatchSingle batchSingle={batch} parentDIV="col-12" key={index}/>
                            }
                         )
                    }
                    {
                        !hasScience && noResultTip
                    }
                </Row>
                <div className="am-margin-top-sm"><b>外用</b></div>
                <Row>
                    {
                        hasArt &&
                            this.props.data.art.map(function(batch, index){
                                    return <CollegeBatchSingle batchSingle={batch} parentDIV="col-12"  key={index}/>
                                }
                            )
                    }
                    {
                        !hasArt && noResultTip
                    }
                </Row>
            </div>
            
            
        )
    }
}
export = CollegeBatchResult

