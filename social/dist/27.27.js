webpackJsonp([27],{

/***/ 521:
/*!***********************************************!*\
  !*** ./common/Component/CardWithTitleBox.tsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var CardWithTitleBox = (function (_super) {
	    __extends(CardWithTitleBox, _super);
	    function CardWithTitleBox(props) {
	        _super.call(this, props);
	    }
	    CardWithTitleBox.prototype.render = function () {
	        return (React.createElement("div", {className: "card-with-title-box " + this.props.className, style: this.props.style}, React.createElement("div", {className: "title"}, this.props.title), React.createElement("div", {className: "content"}, this.props.subComponent)));
	    };
	    CardWithTitleBox.defaultProps = {
	        className: ""
	    };
	    return CardWithTitleBox;
	}(React.Component));
	module.exports = CardWithTitleBox;


/***/ },

/***/ 678:
/*!******************************************************!*\
  !*** ./pages/AdminPage/Component/AdminBasicInfo.tsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	"use strict";
	/**
	 * 管理员个人信息+统计结果
	 */
	var AdminBasicInfo = (function (_super) {
	    __extends(AdminBasicInfo, _super);
	    function AdminBasicInfo(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    AdminBasicInfo.prototype.render = function () {
	        return (React.createElement(antd_1.Row, {className: "display-box"}, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, React.createElement("div", {className: "right-info"}, React.createElement("img", {src: "vendor/images/default-headpic.jpg"}), React.createElement("div", {className: "name"}, "李自强", React.createElement("span", {className: "right-credit"}, "管理员")), React.createElement("div", {className: "number-sign"}, React.createElement("span", {className: "am-block"}, "教工号：10203"), React.createElement("span", {className: "am-block am-margin-top-xs"}, "个性签名：桃李不言，下自成蹊")))), React.createElement(antd_1.Col, {span: 7, className: "block-box-shadows "}, React.createElement("div", {className: "left-statistics"}, React.createElement("div", {className: "title"}, "学校帐户统计"), React.createElement("div", {className: "statistics-single"}, "学生帐户", React.createElement("span", {className: "rightCount green"}, "230")), React.createElement("div", {className: "statistics-single"}, "管理员/老师帐户", React.createElement("span", {className: "rightCount blue"}, "20"))))));
	    };
	    AdminBasicInfo.defaultProps = {};
	    return AdminBasicInfo;
	}(React.Component));
	module.exports = AdminBasicInfo;


/***/ },

/***/ 681:
/*!*********************************************!*\
  !*** ./pages/AdminPage/AdminPageContext.ts ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	//后台返回的班级  年级 数据
	var gradeClassResponseData;
	function setGradeClassResponseData(responseData) {
	    gradeClassResponseData = responseData;
	}
	exports.setGradeClassResponseData = setGradeClassResponseData;
	function getGradeClassResponseData() {
	    return gradeClassResponseData;
	}
	exports.getGradeClassResponseData = getGradeClassResponseData;
	//年级数据 以班级ID为键
	var classMapGradeIDBeKey;
	function setClassMapGradeIDBeKey(grades) {
	    classMapGradeIDBeKey = grades;
	}
	exports.setClassMapGradeIDBeKey = setClassMapGradeIDBeKey;
	function getClassMapGradeIDBeKey() {
	    return classMapGradeIDBeKey;
	}
	exports.getClassMapGradeIDBeKey = getClassMapGradeIDBeKey;
	//德智体美劳的学生关键词
	var evaluateWordsData;
	function setEvaluateWordsData(selectData) {
	    evaluateWordsData = selectData;
	}
	exports.setEvaluateWordsData = setEvaluateWordsData;
	function getEvaluateWordsData() {
	    return evaluateWordsData;
	}
	exports.getEvaluateWordsData = getEvaluateWordsData;


/***/ },

/***/ 700:
/*!*******************************************************************************************!*\
  !*** ./pages/AdminPage/StudentEvaluateWordsManagement/StudentEvaluateWordsManagement.tsx ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var AdminBasicInfo = __webpack_require__(/*! ../Component/AdminBasicInfo */ 678);
	var CardWithTitleBox = __webpack_require__(/*! ../../../common/Component/CardWithTitleBox */ 521);
	var EvaluateWordsTableContainer = __webpack_require__(/*! ./Component/EvaluateWordsTableContainer */ 701);
	"use strict";
	var StudentEvaluateWordsManagement = (function (_super) {
	    __extends(StudentEvaluateWordsManagement, _super);
	    function StudentEvaluateWordsManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    StudentEvaluateWordsManagement.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardWithTitleBox, {title: "学生描述关键词管理", subComponent: React.createElement(EvaluateWordsTableContainer, null)}))));
	    };
	    StudentEvaluateWordsManagement.defaultProps = {};
	    return StudentEvaluateWordsManagement;
	}(React.Component));
	module.exports = StudentEvaluateWordsManagement;


/***/ },

/***/ 701:
/*!**************************************************************************************************!*\
  !*** ./pages/AdminPage/StudentEvaluateWordsManagement/Component/EvaluateWordsTableContainer.tsx ***!
  \**************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var AdminPageContext_1 = __webpack_require__(/*! ../../AdminPageContext */ 681);
	var EvaluateWordsTable = __webpack_require__(/*! ./EvaluateWordsTable */ 702);
	"use strict";
	/**
	 * 描述语table
	 */
	var groupData = [], total = 0;
	var EvaluateWordsTableContainer = (function (_super) {
	    __extends(EvaluateWordsTableContainer, _super);
	    function EvaluateWordsTableContainer(props) {
	        _super.call(this, props);
	        this.onChange = this.onChange.bind(this);
	        this.state = {
	            current: 1,
	            curPageList: [],
	            keyWordOptions: [] //德智体美劳的数组  用ajax从后台获取
	        };
	    }
	    EvaluateWordsTableContainer.prototype.onChange = function (page) {
	        this.setState({
	            current: page,
	            curPageList: groupData[page - 1]
	        });
	    };
	    EvaluateWordsTableContainer.prototype.setData = function () {
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_IMPRESSIONWORD, function (response) {
	            var data = response.result.schoolProvidedImpressions;
	            total = data.length;
	            groupData = commonFunc_1.changeArrayForNewGroup(data, 20);
	            this_.setState({
	                curPageList: groupData[this_.state.current - 1],
	            });
	        });
	        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_IMPRESSIONTYPES, function (response) {
	            var data = response.result.schoolProvidedImpressionTypes;
	            this_.setState({
	                keyWordOptions: data
	            });
	            AdminPageContext_1.setEvaluateWordsData(data);
	        });
	    };
	    EvaluateWordsTableContainer.prototype.componentWillMount = function () {
	        this.setData();
	    };
	    EvaluateWordsTableContainer.prototype.render = function () {
	        return (React.createElement("div", {className: "col2-table-ul"}, React.createElement(EvaluateWordsTable, {keyWordList: this.state.curPageList, keyWordOptions: this.state.keyWordOptions}), React.createElement(antd_1.Pagination, {onChange: this.onChange, current: this.state.current, total: total, defaultPageSize: 20})));
	    };
	    EvaluateWordsTableContainer.defaultProps = {};
	    return EvaluateWordsTableContainer;
	}(React.Component));
	module.exports = EvaluateWordsTableContainer;


/***/ },

/***/ 702:
/*!*****************************************************************************************!*\
  !*** ./pages/AdminPage/StudentEvaluateWordsManagement/Component/EvaluateWordsTable.tsx ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var CreateEvaluateWordsForm = __webpack_require__(/*! ./CreateEvaluateWordsForm */ 703);
	"use strict";
	var EvaluateWordsTable = (function (_super) {
	    __extends(EvaluateWordsTable, _super);
	    function EvaluateWordsTable(props) {
	        _super.call(this, props);
	        this.confirm = this.confirm.bind(this);
	        this.edit = this.edit.bind(this);
	        this.showModal = this.showModal.bind(this);
	        this.hideModal = this.hideModal.bind(this);
	        this.handleRefresh = this.handleRefresh.bind(this);
	        this.state = {};
	    }
	    //删除
	    EvaluateWordsTable.prototype.confirm = function (single) {
	        antd_1.message.info('点击了确定' + single.impressionID);
	    };
	    //编辑
	    EvaluateWordsTable.prototype.edit = function (single) {
	        antd_1.message.info('点击了编辑' + single.impressionID);
	        this.setState({
	            editData: single,
	            formType: "edit",
	            visible: true
	        });
	    };
	    EvaluateWordsTable.prototype.handleRefresh = function () {
	        var this_ = this;
	        this_.setState({
	            visible: false
	        });
	    };
	    EvaluateWordsTable.prototype.showModal = function () {
	        this.setState({
	            visible: true,
	            editData: { impressionID: "01", impressionTypeName: "德" }
	        });
	    };
	    EvaluateWordsTable.prototype.hideModal = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    EvaluateWordsTable.prototype.render = function () {
	        var this_ = this;
	        var keywordList = commonFunc_1.changeArrayForNewGroup(this.props.keyWordList, 10);
	        var deleteText = "确定要删除这个任务吗";
	        return (React.createElement("div", null, React.createElement(antd_1.Row, null, keywordList.map(function (group, index) {
	            return (React.createElement(antd_1.Col, {span: 12, key: index, style: { padding: "10px 10px 30px" }}, React.createElement("div", {className: "school-score-single"}, React.createElement("ul", {className: "header am-avg-sm-3"}, React.createElement("li", null, "关键词类别"), React.createElement("li", null, "关键词"), React.createElement("li", null, "操作")), group.map(function (single, index) {
	                return (React.createElement("ul", {className: "am-avg-sm-3", key: index}, React.createElement("li", null, single.impressionTypeName), React.createElement("li", null, single.impressionContent), React.createElement("li", null, React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.edit.bind(this_, single)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm.bind(this_, single)}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"})))))));
	            }))));
	        })), React.createElement(antd_1.Button, {className: "btn-yellow", icon: "plus", onClick: this.showModal}, "新建"), React.createElement(CreateEvaluateWordsForm, {handleRefresh: this.handleRefresh, visible: this.state.visible, hideModal: this.hideModal, editData: this.state.editData, formType: this.state.formType, keyWordOptions: this.props.keyWordOptions})));
	    };
	    EvaluateWordsTable.defaultProps = {};
	    return EvaluateWordsTable;
	}(React.Component));
	module.exports = EvaluateWordsTable;


/***/ },

/***/ 703:
/*!**********************************************************************************************!*\
  !*** ./pages/AdminPage/StudentEvaluateWordsManagement/Component/CreateEvaluateWordsForm.tsx ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var AdminPageContext_1 = __webpack_require__(/*! ../../AdminPageContext */ 681);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	"use strict";
	var CreateEvaluateWordsForm = (function (_super) {
	    __extends(CreateEvaluateWordsForm, _super);
	    function CreateEvaluateWordsForm(props) {
	        _super.call(this, props);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.impressionTypeIDOptionChanged = this.impressionTypeIDOptionChanged.bind(this);
	    }
	    CreateEvaluateWordsForm.prototype.componentWillMount = function () {
	        this.showAddOrEdit(this.props);
	    };
	    CreateEvaluateWordsForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.showAddOrEdit(newProps);
	        }
	    };
	    CreateEvaluateWordsForm.prototype.showAddOrEdit = function (reviewProps) {
	        var editData = reviewProps.editData;
	        var setFieldsValue = this.props.form.setFieldsValue;
	        var impressionTypeIDOptions = AdminPageContext_1.getEvaluateWordsData();
	        var impressionTypeIDOption = !commonFunc_1.isEmptyObject(editData) ? editData.impressionTypeName : impressionTypeIDOptions[0].impressionTypeName;
	        var impressionTypeName = !commonFunc_1.isEmptyObject(editData) ? editData.impressionContent : impressionTypeIDOptions[0].impressionContent;
	        this.setState({
	            impressionTypeIDOption: impressionTypeIDOption,
	            impressionTypeName: impressionTypeName,
	        });
	        setFieldsValue({
	            evaluationItemContent: !commonFunc_1.isEmptyObject(editData) ? editData.impressionContent : "",
	        });
	    };
	    CreateEvaluateWordsForm.prototype.handleSubmit = function (e) {
	        var this_ = this;
	        this.props.form.validateFields(function (errors, record) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            //放置选择的
	            record["impressionTypeID"] = this_.state.impressionTypeIDOption;
	            record["impressionTypeName"] = this_.state.impressionTypeName;
	            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_IMPRESSIONWORD, record, function (response) {
	                this_.props.form.resetFields();
	                antd_1.message.success("保存成功");
	                this_.props.handleRefresh();
	            });
	        });
	    };
	    //取消
	    CreateEvaluateWordsForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.hideModal();
	    };
	    CreateEvaluateWordsForm.prototype.impressionTypeIDOptionChanged = function (value) {
	        this.setState({
	            impressionTypeIDOption: value.label
	        });
	        console.log(value);
	    };
	    CreateEvaluateWordsForm.prototype.render = function () {
	        var this_ = this;
	        var getFieldProps = this.props.form.getFieldProps;
	        var evaluationItemContentProps = getFieldProps('evaluationItemContent', {
	            rules: [
	                { required: true, message: '内容不能为空' }
	            ],
	        });
	        var formItemLayout = {
	            labelCol: { span: 8 },
	            wrapperCol: { span: 16 },
	        };
	        return (React.createElement(antd_1.Modal, {title: this.props.formType == "edit" ? "编辑评论信息" : "添加评论", visible: this.props.visible, onOk: this.handleSubmit, onCancel: this.handleCancel}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "关键词类别："}), React.createElement(antd_1.Select, {value: { key: this.state.impressionTypeIDOption }, labelInValue: true, style: { width: "100%" }, onChange: this.impressionTypeIDOptionChanged}, this.props.keyWordOptions.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.impressionTypeID}, option.impressionTypeName);
	        }))), React.createElement(FormItem, __assign({}, formItemLayout, {label: "关键词："}), React.createElement(antd_1.Input, __assign({type: "textarea", rows: 4, placeholder: "请输入评语内容"}, evaluationItemContentProps))))))));
	    };
	    return CreateEvaluateWordsForm;
	}(React.Component));
	module.exports = createForm()(CreateEvaluateWordsForm);


/***/ }

});
//# sourceMappingURL=27.27.js.map