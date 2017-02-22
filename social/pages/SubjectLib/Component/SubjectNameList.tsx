import * as React from 'react';
import * as context from '../SubjectLibContext'
"use strict";

interface SubjectNameListProps extends React.Props<SubjectNameList> {
    handleClick:Function;
    isActive?:boolean;
    subName:string;
}

class SubjectNameList extends React.Component<SubjectNameListProps, {}> {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(subName){
        this.props.handleClick(subName);
    }

    render(){
        var this_=this;
        var subjectLibMockData = context.getSubjectLibResponseData();
        var subjectNameList = [];
        var snArr = subjectLibMockData.subjects;
        for(var i = 0;i < snArr.length;i++){
            subjectNameList.push(snArr[i].subjectName);
        }
        return(
            <div className="profession-screen-single am-cf block-box-shadows">
                <h3 className="profession-screen-title">高考学科</h3>
                <ul className="profession-screen-content am-cf">
                {
                    subjectNameList.map(function(item,index){
                        var activeClass = item == this_.props.subName?"active":"";
                        return ( <li key={index} className={activeClass} onClick={this_.handleClick.bind(this_,item)}>{item}</li>)
                    })
                }
                </ul>
            </div>
        )
    }
}

export = SubjectNameList