import * as React from 'react'
import * as context from '../SubjectLibContext'
"use strict";

interface SubjectContentProps extends React.Props<SubjectContent> {
    subName:string;
}

class SubjectContent extends React.Component<SubjectContentProps, {}> {

    render(){
        var subjectLibMockData = context.getSubjectLibResponseData();
        var snArr = subjectLibMockData.subjects;
        var content = [];
        for(var i = 0;i<snArr.length;i++){
            if(snArr[i].subjectName == this.props.subName){
                content = snArr[i].references;
            }
        }
        return(
            <div className="profession-single am-cf block-box-shadows" >
                {
                    content.map(function(item,index){
                        return(
                            <div key={index} className="am-margin-bottom">
                                <div className="profession-title">{item.referenceKey}</div>
                                <pre className="am-margin-top-xs">{item.referenceValue}</pre>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export = SubjectContent