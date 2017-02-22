import * as React from 'react'
import DualAxisProgressBar = require ('common/Component/DualAxisProgressBar')
import {MBTIInfoScale} from 'common/Config/AssessCenterConfig2'
import {progressDualAxis} from 'common/commonFunc'
"use strict";

interface MBTIResultChartProps extends React.Props<MBTIResultChart> {
    dimScores?:Array<any>

}

interface MBTIResultChartState {
    dimScores?:Array<any>

}

class MBTIResultChart extends React.Component<MBTIResultChartProps, MBTIResultChartState> {
    constructor(props) {
        super(props);
        this.state = {
            dimScores:[]
        }
    }

    componentWillMount(){
        var dimScores = progressDualAxis(this.props.dimScores,false);
        this.setState({
            dimScores
        })
    }

    static defaultProps = {};
//width = $(".jobPersonalStyle").width()-80
    render() {
        return (
            <div  className="jobPersonalStyle am-cf" >
                {this.state.dimScores.map(function(item, index){
                        return <DualAxisProgressBar  leftText={item.leftText} leftChar={item.leftChar} rightText={item.rightText} rightChar={item.rightChar} direction={item.direction} score={item.dimScore} width={423}/>
                    }
                )}

                <div className="progress-typeDouble-div-scale am-cf">
                    {MBTIInfoScale.map(function(scale, index){
                            return  <div key={"infoScale"+index} className="progress-typeDouble-div-width-scale" style={{width:scale.width,left:scale.leftWidth}}>
                                <div className="progress-typeDouble-div-width-span-scale">{scale.desc}</div>
                            </div>
                        }
                    )}
                </div>
            </div>
        )
    }
}

export = MBTIResultChart