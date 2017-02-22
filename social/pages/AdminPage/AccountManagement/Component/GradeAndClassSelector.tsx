import * as React from 'react'
import {Row,Col,message} from 'antd'
import SearchInput = require('../../../../common/Component/SearchInput')
import context = require('../../AdminPageContext')
import {isEmptyObject} from '../../../../common/commonFunc'
import {changeClassMapGradeIDBeKey,ALL,GRADEALL,CLASSALL} from '../../AdminPageUtil'
import CreateStudentForm = require('./CreateStudentForm')
"use strict";
interface GradeAndClassSelectorProps extends React.Props<GradeAndClassSelector> {
    handleSearch?:Function;
    gradeSelectID?:string;
    classSelectID?:string;
    gradeActive?:Function;
    classActive?:Function;
    classOption?:Array<any>;
}

interface GradeAndClassSelectorState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    visible?:boolean,
    editData?:any,
    formType?:string
}
/**
 * GradeAndClassSelector
 */
class GradeAndClassSelector extends React.Component<GradeAndClassSelectorProps, GradeAndClassSelectorState> {
    constructor(props) {
        super(props);
        this.gradeActive = this.gradeActive.bind(this)
        this.classActive = this.classActive.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            visible:false,
            editData:{},
            formType:""
        }
    }

    static defaultProps = {};


    componentWillMount(){
        var  data = [

        ]

        this.setState(
            {
                data:data,
                loading: !this.state.loading,
            })
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });

    }

    //搜索框搜索
    handleSearch(value){
        this.props.handleSearch(value);
    }


    //点击年级，加上active class
    gradeActive(e){
        var id = e.currentTarget.id;
        this.props.gradeActive(id);
    }
    //点击班级，加上active class
    classActive(e){
        var id = e.currentTarget.id;
        this.props.classActive(id);
    }

    render() {
        var this_ = this;

        return (
                <Row  className="grade-class-filter">
                    <Col span={16}>
                        <dl>
                            <dt><strong>年级：</strong></dt>
                            <dd>
                                {context.getGradeClassResponseData().map(function(option, index){
                                        var className = this_.props.gradeSelectID == option.grade?"active ":"";
                                        if(index == 0){
                                            className += "all"
                                        }
                                        return (
                                            <span onClick={this_.gradeActive} id={option.grade} key={index} className={className}><a>{option.gradeName}</a></span>
                                        )
                                    }
                                )}
                            </dd>
                        </dl>
                    </Col>
                    <Col span={8}>
                        <SearchInput btnColor="btn-blue" handleSearch={this.handleSearch} placeholder="输入学号/姓名"/>
                    </Col>
                    <Col span={24}>
                        <dl>
                            <dt><strong>班级：</strong></dt>
                            <dd>
                                {this.props.classOption.map(function(option, index){
                                        var className = this_.props.classSelectID == option.classID?"active ":"";
                                        if(index == 0){
                                            className += "all"
                                        }
                                        return (
                                            <span onClick={this_.classActive}  key={index} id={option.classID} className={className}><a>{option.className}</a></span>
                                        )
                                    }
                                )}
                            </dd>
                        </dl>
                    </Col>
                </Row>
        )
    }
}

export = GradeAndClassSelector