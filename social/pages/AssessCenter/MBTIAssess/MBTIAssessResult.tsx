import * as React from 'react'
import { Row, Col,Button } from 'antd';
import * as ajaxUtil from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/AssessCenter/AssessCenterActionTypes'
import CardTitleWithLine = require('../../../common/Component/CardTitleWithLine');
import  ResultIntroduction = require('./Component/ResultIntroduction');
import {mbtiDimTitleMap} from 'common/Config/AssessCenterConfig2'
import MBTIResultChart = require('./Component/MBTIResultChart')
import {isEmptyObject} from 'common/commonFunc'
"use strict";

interface MBTIAssessResultProps extends React.Props<MBTIAssessResult> {

}

interface MBTIAssessResultState {
    advantage?:Array<any>,
    dimScores?:Array<any>,
}

class MBTIAssessResult extends React.Component<MBTIAssessResultProps, MBTIAssessResultState> {
    constructor(props) {
        super(props);
        this.state = {
            advantage: [],
            dimScores:[],
        };
    }

    static defaultProps = {};

    componentWillMount(){
        //ajax获取测试报告的结果
        var this_=this;
        ajaxUtil.getDataByActionID(ActionTypes.GET_ASSESSCENTER_MBTI_REPORT, function (response) {
            const records = response.result;
            this_.setState({
                advantage: records.report.advantage,
                dimScores: records.dimScores,
            });
        });
    }

    render() {
        var dimScores = this.state.dimScores;
        var advantage = this.state.advantage;
        var mbtiMap = !isEmptyObject(advantage)?mbtiDimTitleMap[advantage[0].resultDimType]:"";
        return (
            <div className="am-margin-top">
               
                <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"20px 20px 30px"}}>
                    <Row className="vertical-horizon-center">
                        <Col span={8} className="am-text-center">
                            <img src={mbtiMap.detailPicUrl} />
                            <div className="am-text-center">
                                <Button className="btn-orange" size="large">{mbtiMap.resultTitle}</Button>
                            </div>
                        </Col>
                        <Col span={16}>{
                            !isEmptyObject(dimScores) &&
                             <MBTIResultChart dimScores={dimScores} />
                        }
                        </Col>
                    </Row>

                </div>
                <div className="blueBack block-box-shadows" style={{margin:"30px 15px",padding:"20px 20px 30px"}}>
                    {
                        advantage.map(function(intro, index){
                            return <ResultIntroduction dimTypeIntroductions={intro.introductions}  key={index}/>
                        })
                    }
                </div>

            </div>
        )
    }
}

export = MBTIAssessResult