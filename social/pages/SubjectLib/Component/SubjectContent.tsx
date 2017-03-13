import * as React from 'react'
import * as context from '../SubjectLibContext'
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
"use strict";

interface SubjectContentProps extends React.Props<SubjectContent> {
    subName:string;
}

class SubjectContent extends React.Component<SubjectContentProps, {}> {

    callback(key) {
    console.log(key);
    }

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
                        {/*
                        return(
                            <div key={index} className="am-margin-bottom">
                                <div className="profession-title">{item.referenceKey}</div>
                                <pre className="am-margin-top-xs">{item.referenceValue}</pre>
                            </div>
                        )
                         */}
                        return(
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header={item.referenceKey} key="1">
                                <p>{item.referenceValue}</p>
                            </Panel>
                            <Panel header={item.referenceKey} key="2">
                                <p>{item.referenceValue1}</p>
                            </Panel>
                            <Panel header={item.referenceKey} key="3">
                                <p>{item.referenceValue2}</p>
                            </Panel>
                        </Collapse>
                            )

                    })
                }
            </div>
        )
    }
}

export = SubjectContent