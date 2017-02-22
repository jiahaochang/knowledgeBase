import * as React from 'react'
import { Row, Col } from 'antd';
import {majorRankDefaultCount} from 'common/Config/CommonConfig'
"use strict";
/**
 * 专业库---显示专业列表
 */
interface MajorIntroRankProps extends React.Props<MajorIntroRank> {
    rankList:Array<any>
}
interface MajorIntroRankState {
}

class MajorIntroRank extends React.Component<MajorIntroRankProps, MajorIntroRankState> {
    constructor(props) {
        super(props);
        this.state= {

        };
    }


    render() {
        var this_ = this;
        return (
            <Row>
                {this_.props.rankList.map(function(group, index){
                    var number = index*majorRankDefaultCount;
                       return(
                           <Col span={12} key={index} style={{padding:"10px 10px 30px"}}>
                               <div className="school-score-single">
                                   <ul className="header am-avg-sm-3"><li>序号</li><li>学校</li><li>等级</li></ul>
                                   {group.map(function(major, index){
                                           return  <ul className="am-avg-sm-3" key={index}><li>{number+index+1}</li><li>{major.collegeName}</li><li>{major.rank}</li></ul>
                                       }
                                   )}
                               </div>
                           </Col>
                       )
                    }
                )}
            </Row>


        )
    }
}
export = MajorIntroRank

