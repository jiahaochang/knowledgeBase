import * as React from 'react'
import { Row, Col,Icon,Button,Checkbox } from 'antd';
"use strict";

const CheckboxGroup = Checkbox.Group;

interface GroupCheckProps extends React.Props<GroupCheckbox> {
    setCurrentGrade?:Function,
    options?:Array<any>,
    title?:any,
    defaultValue?:Array<any>,
}

interface GroupCheckState {
    checkboxGroupAllValue?:Array<any>,
    checked?:boolean
}

class GroupCheckbox extends React.Component<GroupCheckProps, GroupCheckState> {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.checkAll = this.checkAll.bind(this);
    }

    componentWillMount(){
        this.setState({checked:true});
        //this.props.options = [];
    }

    static defaultProps = {
        options:[],
    };

    setStateByProps(newProps){
        var options = newProps.options;
        var checkboxGroupAllValue = [];
        for (var key in options) {
            checkboxGroupAllValue.push(options[key]['value']);
        }
        this.setState({checkboxGroupAllValue:checkboxGroupAllValue});
    }

    componentWillReceiveProps(newProps){
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)){
            this.setStateByProps(newProps);
        }
    }

    onChange(checkedValues) {
        var this_=this;
        console.log('checked = ', checkedValues);

        this_.props.setCurrentGrade(checkedValues);
        //设置CheckboxGroup的value为手动点击选上的内容
        this_.setState({checkboxGroupAllValue: checkedValues});

        //设置“全部”选项为非选中状态
        if(checkedValues.length < this.props.options.length) {
            this_.setState({checked: false});
        }else {
            this_.setState({checked: true});
        }
    }

    checkAll(){
        //每次点击“全部”，设置“全部”选项为与上次点击不同的状态
        this.setState({checked:!this.state.checked});
        //@param options 为checkbox中的选项内容组成的数组
        var options = this.props.options;
        var checkboxGroupAllValue = [];
        //获取所有选项的value，当点击“全选”时，下面所有的checkbox设置为选中状态
        for (var key in options) {
            checkboxGroupAllValue.push(options[key]['value']);
        }
        //当点击“全部”时，如果下面的条件没有全部都选上，给全都选上，并且设置筛选条件
        if(this.state.checkboxGroupAllValue.length != options.length) {
            this.setState({checkboxGroupAllValue: checkboxGroupAllValue});
            this.props.setCurrentGrade(checkboxGroupAllValue);
        }else{
            this.setState({checkboxGroupAllValue: []});
            this.props.setCurrentGrade([]);
        }
    }

    render(){
        var options = this.props.options;
        var title = this.props.title;
        return(
            <div className="block-box-shadows">
                {title}
                <br />
                <Checkbox onChange={this.checkAll} checked={this.state.checked}>全部</Checkbox>
                <br />
                <CheckboxGroup value={this.state.checkboxGroupAllValue} options={options} onChange={this.onChange} />
                {/*
                    this.props.options.map(function(item, index) {
                        return (
                            <div key={index}>
                                <Checkbox checked={true}>
                                    {item.label}
                                </Checkbox>
                                <br />
                            </div>
                        )
                    })
                */}
            </div>
        )
    }
}

export = GroupCheckbox