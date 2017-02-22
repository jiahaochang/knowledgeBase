import * as React from 'react'

"use strict";

interface SubjectInterestProps extends React.Props<SubjectInterest> {
    subjectInterest:any
}

interface SubjectInterestState {

}
/**
 * 学科兴趣排名
 */
class SubjectInterest extends React.Component<SubjectInterestProps, SubjectInterestState> {
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

    static defaultProps = {};

    render() {

        var ranks = this.sortArrayRank(this.props.subjectInterest);
        //七科排序，黄色圆柱形所占height百分比
        var heights = [100,80,70,50,30,20,10];
        return (
            <ul className="subject-interest-rank am-avg-sm-7">
                {ranks.map(function(item, index){
                    var height = {height:heights[index]+"%"}
                    return (
                        <li key={index}>
                            <div className="rankName">{item.rank}</div>
                            <div className="cylinder-color"><div className="rank-height-cylinder" style={height}></div></div>
                            <div className="subject-name">{item.subjectName}</div>
                        </li>
                    )

                    }
                )}
            </ul>
        )
    }
}

export = SubjectInterest