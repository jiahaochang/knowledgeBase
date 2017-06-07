import * as React from 'react'
"use strict";

import {getDataByActionIDWithQuery} from '../../../common/ajaxUtil'
import * as ActionTypes from '../../../actions/JobLib/JobLibActionTypes'
/**
 * 方剂库---方剂小类
 */
interface JobIntroSinglePartProps extends React.Props<JobIntroSinglePart> {
    subJobCategoryID: string
}
interface JobIntroSinglePartState {
    introductions?:Array<any>
}

class JobIntroSinglePart extends React.Component<JobIntroSinglePartProps, JobIntroSinglePartState> {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.setStateByProps(this.props);
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    setStateByProps(props){
        var introductionResult = getDataByActionIDWithQuery(ActionTypes.GET_JOBLIB_JOBINTRODUCTION, {
            subJobCategoryID:props.subJobCategoryID
        });

        this.setState({
            introductions: introductionResult.result.introduction
        })
    }

    render() {
        var intro = this.state.introductions;
        return (
            <div className="career-intro-list" >
                {
                    this.state.introductions.map(function(intro, index){
                        return (
                            <div className="career-intro-single" key={index}>
                                <div className="title"><span>{intro.introductionkey}</span></div>
                                <pre>{intro.introductionValue}</pre>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export = JobIntroSinglePart

