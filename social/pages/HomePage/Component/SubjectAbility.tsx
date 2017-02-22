import * as React from 'react'

"use strict";

interface SubjectAbilityProps extends React.Props<SubjectAbility> {
    subjectAbility:any

}

interface SubjectAbilityState {

}
/**
 * 学科能力排名
 */
class SubjectAbility extends React.Component<SubjectAbilityProps, SubjectAbilityState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //数组按照rank正序排序
    sortArrayRank(array){
        for(var i=1;i<array.length;i++){
            var temp = array[i];
            var j;
            for(j=i-1;j >= 0; j--){
                if(array[j].rank > temp.rank){
                    array[j+1] = array[j];
                }else{
                    break;
                }
            }
            array[j + 1] = temp;
        }
        return array;
    }

    //percent format
    percentFormat(num){
        var map = {top:"0%",show:false};
        var st=num.toFixed(2);
        if(st<=0.20) {
            st = parseFloat(st)*100;
            st=st.toFixed(0);
            map["top"] = st+"%";
            map["show"] = true;
        }
        else
        {
            st=parseFloat(st)*100;
            map["top"] = st+"%";
            map["show"] = false;

        }
        return map;
    }

    static defaultProps = {};

    render() {
        var this_ = this;

        var ranks = this.sortArrayRank(this.props.subjectAbility);
        return (
            <ul className="subject-ability-rank am-avg-sm-7">
                {ranks.map(function(item, index){
                    var topFormat = this_.percentFormat(item.percent);
                    var top = {top:topFormat.top};
                    var topNum = topFormat.show?topFormat.top:""
                    return (
                        <li key={index}>
                            <div className="rankName">{item.rank}</div>
                            <div className="cylinder-color"><div className="rank-height-cylinder" style={top}>{topNum}</div></div>
                            <div className="subject-name">{item.subjectName}</div>
                        </li>
                    )

                    }
                )}
            </ul>
        )
    }
}

export = SubjectAbility