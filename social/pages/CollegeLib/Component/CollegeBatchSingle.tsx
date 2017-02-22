import * as React from 'react'

"use strict";
/**
 * 院校库---院校主页（历年分数线tab单个table内容）
 */
interface SubjectBatchSingleProps extends React.Props<SubjectBatchSingle> {
    batchSingle:any,
    parentDIV?:string

}
interface SubjectBatchSingleState {
}

class SubjectBatchSingle extends React.Component<SubjectBatchSingleProps, {}> {
    constructor(props) {
        super(props);
    }


    render() {
        var this_ = this;
        return (

            <div className={this.props.parentDIV}>
                <div className="school-score-single-title">{this.props.batchSingle.batch}</div>
                <div className="school-score-single">
                    <ul className="header am-avg-sm-4"><li>方剂</li><li>功效</li><li>成分</li><li>出处</li></ul>
                    {this_.props.batchSingle.collegeAdmissionLines.map(function(score, index){
                            return  <ul className="am-avg-sm-4" key={index}><li>{score.year}</li><li>{score.batchScore}</li><li>{score.admissionScore}</li><li>{score.diffWithBatchScore}</li></ul>

                        }
                    )}
                </div>
            </div>
            
        )
    }
}
export = SubjectBatchSingle

