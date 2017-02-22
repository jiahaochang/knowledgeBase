import * as React from 'react'
import {Select} from 'antd'
import {withRouter} from 'react-router'

const Option = Select.Option;
"use strict";
import {getTermOptions} from 'common/GlobalContext'

interface SelectTermProps extends React.Props<SelectTerm> {
    currentTerm?: string, //当前选择的学期
    onTermChange?(termAfterChange: string): void,
}

interface SelectTermState {
    termOptions?:Array<any>
}
/**
 * 带有学期选择的 select
 *
 */
class SelectTerm extends React.Component<SelectTermProps, SelectTermState> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {

    };

    handleChange(value){
        this.props.onTermChange(value);
    }


    componentWillMount(){
        this.setState({
            termOptions:getTermOptions()
        })
    }

    render() {

        return (
            <div className="RankStateDiv">
                {
                    !!this.state.termOptions &&
                        <Select value={this.props.currentTerm} style={{ width: "100%" }} onChange={this.handleChange}>
                            {this.state.termOptions.map(function(item, index){
                                    return <Option value={item.termID}  key={index}>{item.termName}</Option>
                                }
                            )}
                        </Select>
                }

            </div>
        )
    }
}

export = SelectTerm