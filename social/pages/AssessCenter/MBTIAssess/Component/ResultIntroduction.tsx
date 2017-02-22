import * as React from 'react'
import CardTitleWithLine = require('../../../../common/Component/CardTitleWithLine');
"use strict";

/**
 *
 */
interface ResultIntroductionProps extends React.Props<ResultIntroduction> {
    dimTypeIntroductions?:Array<any>,
}
interface ResultIntroductionState {

}

class ResultIntroduction extends React.Component<ResultIntroductionProps, ResultIntroductionState> {
    constructor(props) {
        super(props);
    }

    componentWillMount(){

    }

    render() {
        var introductions = this.props.dimTypeIntroductions;
        var iconList = ["fa-user","fa-user-secret","fa-hand-o-right","fa-crosshairs"];
        return (
            <div className="" >
                {
                    introductions.map(function(intro, index){
                        return (
                        <div className="am-margin-bottom" key={index}>
                            <CardTitleWithLine title={intro.introductionName} titleIconType={iconList[index]+" fa-2x am-padding-left am-padding-right-xs"}/>
                            <div className="am-margin-top-sm" style={{textIndent:"2em"}}>
                                {intro.introductionValue}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export = ResultIntroduction

