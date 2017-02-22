import * as React from 'react'
import { Row, Col } from 'antd';
import { setQQFace, getQQFace } from '../GlobalContext'
import {isEmptyObject,changeArrayForNewGroup} from '../commonFunc'
"use strict";

interface QQFaceProps extends React.Props<QQFace> {
    QQFaceSingleSubmit?:any
}
interface QQFaceState {
}
/**
 * qq表情包
 */
class QQFace extends React.Component<QQFaceProps, QQFaceState> {
    constructor(props) {
        super(props);
        this.QQFaceShow = this.QQFaceShow.bind(this);
    }

    static defaultProps = {
        className:""
    };

    QQFaceShow(path,e){
       this.props.QQFaceSingleSubmit(path);
    }
    componentWillMount(){
        if(isEmptyObject(getQQFace())){
            var QQFace = [];
            var path = "vendor/images/qqface/";
            for(var i=1;i<=75;i++){
                var map = {};
                map["em"] = "em_"+i;
                map["path"] = path+i+".gif";
                QQFace.push(map);
            }
            setQQFace(changeArrayForNewGroup(QQFace,15));
        }
        
        
    }
    render() {
        var this_ = this;
        return (
            <div className="QQFace">
                <table className="">
                    <tbody>
                    {getQQFace().map(function(group, index){
                            return(
                                <tr  key={index}>
                                    {group.map(function(face, index){
                                            return  <td  key={index}><img src={face.path} data-em={face.em} onClick={this_.QQFaceShow.bind(this_,face.path)}/></td>
                                        }
                                    )}
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export = QQFace