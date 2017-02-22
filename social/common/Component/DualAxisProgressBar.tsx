import * as React from 'react'

"use strict";

interface DualAxisProgressBarProps extends React.Props<DualAxisProgressBar> {
    leftText:string,
    leftChar:string,
    rightText:string,
    rightChar:string,
    direction:'left'|'right',
    score:number,
    width:number
}

interface DualAxisProgressBarState {

}
/**
 * 双轴线温度计进度条
 */
class DualAxisProgressBar extends React.Component<DualAxisProgressBarProps, DualAxisProgressBarState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var leftText = this.props.leftText;
        var leftChar  = this.props.leftChar;
        var rightText = this.props.rightText;
        var rightChar  = this.props.rightChar;
        var displayLeftStyle = {},displayRightStyle = {},backgroundOrange="";
        if(this.props.direction == "left"){
            displayLeftStyle["width"] = (100-this.props.score)+"%";
            backgroundOrange="#FF9800";
        }else{
            displayRightStyle["width"] = this.props.score+"%";
        }

        var bigWidth=(this.props.width)+"px";
        var leftRightWidth=((this.props.width-22)/2)+"px";


        return(
            <div className=" am-cf" >
                <div className="progress-my-span" >
                    <span >{leftText}</span>
                    <span className="am-fr">{leftChar}</span>
                </div>

                <div className="progress-div-typeDouble" style={{"width":bigWidth}} >
                    <div className="progress-div-typeDouble-div progress-div-typeDouble-div-left" style={{"width":leftRightWidth,"background":backgroundOrange}}>
                        <div className="progress-div-typeDouble-div-left-active" style={displayLeftStyle} ></div>
                    </div>
                    <div className="progress-div-typeDouble-circle" ></div>
                    <div className="progress-div-typeDouble-div progress-div-typeDouble-div-right" style={{"width":leftRightWidth}} >
                        <div className="progress-div-typeDouble-div-right-active" style={displayRightStyle}  ></div>
                    </div>
                </div>

                <div className="progress-my-span" >
                    <span >{rightChar}</span>
                    <span className="am-fr" >{rightText}</span>
                </div>
            </div>


        )
    }
}

export = DualAxisProgressBar