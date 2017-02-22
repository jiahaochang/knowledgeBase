import * as React from 'react'
"use strict";

/**
 *
 */
interface ResultDimIntroductionProps extends React.Props<ResultDimIntroduction> {
    dimTypeIntroductions?:Array<any>,
}
interface ResultDimIntroductionState {

}

class ResultDimIntroduction extends React.Component<ResultDimIntroductionProps, ResultDimIntroductionState> {
    constructor(props) {
        super(props);
    }

    componentWillMount(){

    }

    render() {
        var introductions = this.props.dimTypeIntroductions;
        return (
            <div className="career-intro-list" >
                {
                    introductions.map(function(intro, index){
                        return (
                        <div className="career-intro-single" key={index} style={{borderBottom:"none"}}>
                            <div className="title"><span>{intro.introductionName}</span></div>
                            <div>{intro.introductionValue}</div>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export = ResultDimIntroduction

