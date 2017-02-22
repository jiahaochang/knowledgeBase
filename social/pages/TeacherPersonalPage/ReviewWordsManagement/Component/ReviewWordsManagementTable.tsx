import * as React from 'react'
import {Row,Col,Table,Popconfirm, message,Button,Select,Alert,Modal} from 'antd'
import CreateReviewForm = require('./CreateReviewForm')
import * as ajaxUtil from '../../../../common/ajaxUtil'
import * as ActionTypes from '../../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes'
import {containsItems,isEmptyObject} from 'common/commonFunc'
import {setReviewWordsSelectData,getReviewWordsSelectData} from '../../TeacherPersnalPageContext'
import {getUserIDFromStorage} from 'common/storageUtil'
const Option = Select.Option;

"use strict";
var tableDataDefault = [];
interface ReviewWordsManagementTableProps extends React.Props<ReviewWordsManagementTable> {

}
interface ReviewWordsManagementTableState {
    data?:Array<any>,
    pagination?:any,
    loading?:boolean,
    editData?:any,
    formType?:string,
    visible?:boolean,
    qualityCategoryIdOption?:string,  //评论小类选中的ID
    qualityCategoryIdOptions?:Array<any>,
    rootQualityCategoryOption?:string,//评论大类选中的ID
    rootQualityCategoryOptions?:Array<any>
}

class ReviewWordsManagementTable extends React.Component<ReviewWordsManagementTableProps, ReviewWordsManagementTableState> {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.rootQualityCategoryOptionChanged = this.rootQualityCategoryOptionChanged.bind(this);
        this.qualityCategoryIdOptionChanged = this.qualityCategoryIdOptionChanged.bind(this);
        this.state = {
            data:[],
            pagination: {},
            loading: true,
            editData:{},
            formType:"",
            qualityCategoryIdOptions:[],
            rootQualityCategoryOptions:[],
            visible:false

        }
    }

    static defaultProps = {};

    //通过两个select的值，筛选tableData
    tableDataFromDefault(rootQualityCategoryOption,qualityCategoryIdOption){
        var data = [];
        for(let item of tableDataDefault){
            if(item.rootQualityCategoryID == rootQualityCategoryOption && item.qualityCategoryID == qualityCategoryIdOption){
                data.push(item);
            }
        }
        return data;
    }

    setData(){
        var this_ = this;
        var teacherUserID = getUserIDFromStorage();
        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_EVALUATESTUDENTDICT,{teacherUserID:teacherUserID}, function (response) {
            //begin
            var rootQualityCategoriesList = [];
            var qualityCategoriesMap = {};
            tableDataDefault = [];

            for(let studentDictItem of response.result.evaluateStudentDict ){
                var rootQualityCategoryMap = {};
                var rootQualityCategoryID = studentDictItem.rootQualityCategoryID;
                rootQualityCategoryMap["rootQualityCategoryID"] = rootQualityCategoryID;
                rootQualityCategoryMap["rootQualityCategoryName"] = studentDictItem.rootQualityCategoryName;
                if(!containsItems(rootQualityCategoriesList,rootQualityCategoryMap,"rootQualityCategoryID")){
                    rootQualityCategoriesList.push(rootQualityCategoryMap);
                }
                if(!isEmptyObject(studentDictItem.evaluationItems)){
                    var qualityCategoriesList = isEmptyObject(qualityCategoriesMap[rootQualityCategoryID])?[]:qualityCategoriesMap[rootQualityCategoryID];
                    for(let evaluationItems of studentDictItem.evaluationItems){
                        var qualityCategoryMap = {};
                        var qualityCategoryID = evaluationItems.qualityCategoryID;
                        qualityCategoryMap["qualityCategoryID"] = qualityCategoryID;
                        qualityCategoryMap["qualityCategoryName"] = evaluationItems.qualityCategoryName;
                        if(!containsItems(qualityCategoriesList,qualityCategoryMap,"qualityCategoryID")){
                            qualityCategoriesList.push(qualityCategoryMap);
                        }
                        qualityCategoriesMap[rootQualityCategoryID] = qualityCategoriesList;
                        var dataTemp =  evaluationItems;
                        dataTemp["rootQualityCategoryID"] = rootQualityCategoryID;
                        tableDataDefault.push(dataTemp);
                    }
                }
            }
            var reviewWordsSelectData = {};
            reviewWordsSelectData["rootQualityCategories"] = rootQualityCategoriesList;
            reviewWordsSelectData["qualityCategories"] = qualityCategoriesMap;
            setReviewWordsSelectData(reviewWordsSelectData);

            var rootQualityCategoryOptions = rootQualityCategoriesList;
            var rootQualityCategoryOption = rootQualityCategoriesList[0].rootQualityCategoryID;
            var qualityCategoryIdOptions = qualityCategoriesMap[rootQualityCategoryOption];
            var qualityCategoryIdOption = qualityCategoryIdOptions[0].qualityCategoryID;

            var tableData = this_.tableDataFromDefault(rootQualityCategoryOption,qualityCategoryIdOption);



            this_.setState({
                data:tableData,
                rootQualityCategoryOptions: rootQualityCategoryOptions,
                rootQualityCategoryOption:rootQualityCategoryOption,
                qualityCategoryIdOptions: qualityCategoryIdOptions,
                qualityCategoryIdOption:qualityCategoryIdOption,
                loading: false,
            })


            //end

        });
    }

    componentWillMount(){
        this.setData();
    }

    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });

    }

    editInfo(record){
        var rootQualityCategoryID = record.rootQualityCategoryID;
        var rootQualityCategoryName = "";
        for(let item of this.state.rootQualityCategoryOptions){
            if(item.rootQualityCategoryID == rootQualityCategoryID){
                rootQualityCategoryName = item.rootQualityCategoryName;
                break;
            }
        }
        record["rootQualityCategoryName"] = rootQualityCategoryName;
        this.setState({
            editData:record,
            formType:"edit",
            visible:true
        })
    }

    //模态对话框关闭，刷新页面
    handleRefresh(){
        this.setState({
            visible:false
        })
        this.setData();
    }

    hideModal(){
        this.setState({
            visible:false
        })
    }

    delete(record) {
        var this_ = this;
        var postData = {
            evaluationItemID:record.evaluationItemID,
            teacherUserID:getUserIDFromStorage()
        };
        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.DELETE_TEACHER_REVIEWWORD,postData,function (response) {
            message.success('删除成功');
            this_.setData();

        })
    }

    showModal() {
        this.setState({
            visible:true,
            editData:{}
        })

    }

    //评论大类
    rootQualityCategoryOptionChanged(value){

        var qualityCategoryIdOptions = getReviewWordsSelectData()["qualityCategories"][value];
        var qualityCategoryIdOption = qualityCategoryIdOptions[0].qualityCategoryID;
        var tableData = this.tableDataFromDefault(value,qualityCategoryIdOption);

        this.setState({
            rootQualityCategoryOption: value,
            qualityCategoryIdOptions:qualityCategoryIdOptions,
            qualityCategoryIdOption:qualityCategoryIdOption,
            data:tableData
        });

    }
    //评论小类别
    qualityCategoryIdOptionChanged(value){
        var tableData = this.tableDataFromDefault(this.state.rootQualityCategoryOption,value);
        this.setState({
            qualityCategoryIdOption:value,
            data:tableData
        });
    }

    render() {
        var this_ = this;
        const deleteText = "确定要删除这个任务吗";
        const columns = [
            {
                title: '序号',
                key:'sequence',
                dataIndex: 'sequence',
            },
            {
                title: '评语类型',
                key:'qualityCategoryName',
                dataIndex: 'qualityCategoryName',
            },
            {
                title: '评语内容',
                key:'evaluationItemContent',
                dataIndex: 'evaluationItemContent',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                    <span>
                        <Button className="btn-blue am-margin-right-xs" size="small" onClick={this_.editInfo.bind(this_,record)}>编辑<i className="fa fa-edit"></i></Button>
                        <Popconfirm placement="top" title={deleteText} onConfirm={this_.delete.bind(this_,record)} >
                            <Button className="btn-blue" size="small">删除<i className="fa fa-trash"></i></Button>
                        </Popconfirm>
                    </span>
                ),
            }
        ];
        var reviewItemsArr=[];
        var data = this.state.data;
        for(var i=0;i< data.length;i++){
            var index = i+1;
            var item = data[i];
            item["sequence"] = index;
            reviewItemsArr.push(item);
        }
        return (
            <div className="admin-table"  style={{margin:"30px"}}>
                <Row className="am-margin-top am-margin-bottom">
                    <Col span={4}>
                        对应省系统项目：
                    </Col>
                    <Col span={6} className="am-margin-right-xl" >
                        <Select value={this.state.rootQualityCategoryOption} style={{width:"100%"}} onChange={this.rootQualityCategoryOptionChanged}>
                            {
                                this.state.rootQualityCategoryOptions.map(function(option, index){
                                    return  <Option key={index} value={option.rootQualityCategoryID}>{option.rootQualityCategoryName}</Option>
                                })
                            }
                        </Select>
                    </Col>
                    <Col span={5}>
                        对应项目分类指标：
                    </Col>
                    <Col span={6}>
                        <Select value={this.state.qualityCategoryIdOption} style={{width:"100%"}} onChange={this.qualityCategoryIdOptionChanged}>
                            {
                                this.state.qualityCategoryIdOptions.map(function(option,index){
                                    return  <Option key={index} value={option.qualityCategoryID}>{option.qualityCategoryName}</Option>
                                }
                            )}
                        </Select>
                    </Col>
                </Row>
                <Table columns={columns}
                       dataSource={reviewItemsArr}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleTableChange}
                       bordered/>
                <Button className="btn-yellow" icon="plus" type="primary" onClick={this.showModal}>新建</Button>
                <CreateReviewForm handleRefresh={this.handleRefresh} visible={this.state.visible} hideModal={this.hideModal}
                                  editData={this.state.editData}
                                  formType={this.state.formType}/>
            </div>
        )
    }
}

export = ReviewWordsManagementTable