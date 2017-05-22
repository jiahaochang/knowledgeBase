webpackJsonp([25],{

/***/ 444:
/*!***************************************!*\
  !*** ./common/Component/CardTabs.tsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var commonFunc_1 = __webpack_require__(/*! ../commonFunc */ 378);
	var CardTabs = (function (_super) {
	    __extends(CardTabs, _super);
	    function CardTabs(props) {
	        _super.call(this, props);
	        this.state = {
	            activeIndex: 0
	        };
	        this.showActive = this.showActive.bind(this);
	    }
	    CardTabs.prototype.showActive = function (e) {
	        this.setState({ activeIndex: e.currentTarget.tabIndex });
	    };
	    //[{tabName:"",tabContent:子组件},{tabName:"",tabContent:子组件},{tabName:"",tabContent:子组件},]
	    CardTabs.prototype.render = function () {
	        if (commonFunc_1.isEmptyObject(this.props.tabs)) {
	            return React.createElement("div", null, "loading");
	        }
	        var this_ = this;
	        var tabBarClsName = "tab-bar am-cf am-avg-sm-" + this.props.tabs.length;
	        var tabContent = this.props.tabs[this.state.activeIndex].tabContent;
	        return (React.createElement("div", {className: "tab-bar-parent"}, React.createElement("ul", {className: tabBarClsName}, this.props.tabs.map(function (tab, index) {
	            var activeClass = index == this_.state.activeIndex ? "active" : "";
	            return React.createElement("li", {className: activeClass, key: index, onClick: this_.showActive, tabIndex: index}, tab.tabName);
	        })), React.createElement("div", {className: "tab-content am-cf"}, tabContent)));
	    };
	    CardTabs.defaultProps = {
	        className: ""
	    };
	    return CardTabs;
	}(React.Component));
	module.exports = CardTabs;


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

/***/ 693:
/*!********************************************************************************!*\
  !*** ./pages/AdminPage/CourseLibManagement/Component/CourseClubHonorTable.tsx ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var CreateCourseClubHonorForm = __webpack_require__(/*! ./CreateCourseClubHonorForm */ 694);
	var Option = antd_1.Select.Option;
	"use strict";
	/**
	 * 课程库---选修课table
	 */
	var CourseClubHonorTable = (function (_super) {
	    __extends(CourseClubHonorTable, _super);
	    function CourseClubHonorTable(props) {
	        _super.call(this, props);
	        this.handleRefrsh = this.handleRefrsh.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.editInfo = this.editInfo.bind(this);
	        this.addInfo = this.addInfo.bind(this);
	        this.state = {
	            pagination: {},
	            loading: true,
	            visible: false,
	            editData: {},
	            formType: ""
	        };
	    }
	    CourseClubHonorTable.prototype.componentWillMount = function () {
	        this.setState({
	            loading: !this.state.loading,
	        });
	    };
	    //点击添加课程/社团/荣誉，显示模态对话框
	    CourseClubHonorTable.prototype.addInfo = function () {
	        this.setState({
	            visible: true,
	            formType: "add"
	        });
	    };
	    //点击编辑，显示模态对话框
	    CourseClubHonorTable.prototype.editInfo = function (record) {
	        console.log(record);
	        this.setState({
	            visible: true,
	            editData: record,
	            formType: "edit"
	        });
	    };
	    //模态对话框关闭，刷新页面
	    CourseClubHonorTable.prototype.handleRefrsh = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    //模态对话框关闭，不刷新页面
	    CourseClubHonorTable.prototype.handleCancel = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    CourseClubHonorTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    CourseClubHonorTable.prototype.handleSearch = function (value) {
	        alert(value);
	    };
	    CourseClubHonorTable.prototype.confirm = function () {
	        antd_1.message.info('点击了确定');
	    };
	    CourseClubHonorTable.prototype.render = function () {
	        var this_ = this;
	        var deleteText = "确定要删除这个任务吗";
	        var columns = [];
	        if (this.props.eventCategoryType == "Course") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '选修课名称',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        else if (this.props.eventCategoryType == "Investigation") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '课程名称',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        else if (this.props.eventCategoryType == "Activity") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '活动名称',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        else if (this.props.eventCategoryType == "Club") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '社团名称',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        else if (this.props.eventCategoryType == "Honor") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '荣誉称号',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        else if (this.props.eventCategoryType == "Skill") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '特长名称',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        else if (this.props.eventCategoryType == "Position") {
	            columns = [
	                {
	                    title: '序号',
	                    key: 'eventHolderID',
	                    dataIndex: 'eventHolderID',
	                },
	                {
	                    title: '所在组织',
	                    key: 'eventHolderName',
	                    dataIndex: 'eventHolderName',
	                },
	                {
	                    title: '职务名称',
	                    key: 'positionTypeName',
	                    dataIndex: 'positionTypeName',
	                },
	                {
	                    title: '对应省系统项目',
	                    key: 'rootQualityCategoryName',
	                    dataIndex: 'rootQualityCategoryName',
	                },
	                {
	                    title: '对应项目分类指标',
	                    key: 'qualityCategoryName',
	                    dataIndex: 'qualityCategoryName',
	                },
	                {
	                    title: '操作',
	                    key: 'operation',
	                    render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	                }
	            ];
	        }
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(antd_1.Table, {columns: columns, dataSource: this.props.data, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true}), React.createElement(antd_1.Button, {className: "btn-yellow", icon: "plus", onClick: this.addInfo}, "新建"), React.createElement(antd_1.Modal, {title: this.state.formType == "edit" ? "编辑信息" : "添加", visible: this.state.visible, onCancel: this.handleCancel, footer: []}, React.createElement(CreateCourseClubHonorForm, {handleRefrsh: this.handleRefrsh, handleCancel: this.handleCancel, editData: this.state.editData, formType: this.state.formType}))));
	    };
	    CourseClubHonorTable.defaultProps = {};
	    return CourseClubHonorTable;
	}(React.Component));
	module.exports = CourseClubHonorTable;


/***/ },

/***/ 694:
/*!*************************************************************************************!*\
  !*** ./pages/AdminPage/CourseLibManagement/Component/CreateCourseClubHonorForm.tsx ***!
  \*************************************************************************************/
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
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	"use strict";
	/**
	 * 编辑管理员/教师信息 or  添加管理员/教师信息
	 */
	var CreateCourseClubHonorForm = (function (_super) {
	    __extends(CreateCourseClubHonorForm, _super);
	    function CreateCourseClubHonorForm(props) {
	        _super.call(this, props);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.state = {};
	    }
	    CreateCourseClubHonorForm.prototype.componentWillMount = function () {
	        this.showAddOrEdit(this.props);
	    };
	    CreateCourseClubHonorForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.showAddOrEdit(newProps);
	        }
	    };
	    CreateCourseClubHonorForm.prototype.showAddOrEdit = function (studentProps) {
	        if (!commonFunc_1.isEmptyObject(studentProps.editData)) {
	            var editData = studentProps.editData;
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                name: editData.eventHolderName,
	                rootQualityCategoryName: editData.rootQualityCategoryName,
	                qualityCategoryName: editData.qualityCategoryName
	            });
	        }
	        else {
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({});
	        }
	    };
	    //取消
	    CreateCourseClubHonorForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.handleCancel();
	    };
	    //提交按钮
	    CreateCourseClubHonorForm.prototype.handleSubmit = function (e) {
	        var _this = this;
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            if (_this.props.formType == 'add') {
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.CREATE_ADMIN_EVENTHOLDER, values, function (response) {
	                    if (response.status == 'success') {
	                        console.log('CreateSuccess');
	                        this_.props.form.resetFields();
	                        this_.props.handleRefrsh();
	                    }
	                    else {
	                        console.log('failed');
	                    }
	                });
	            }
	            else {
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_EVENTHOLDER, values, function (response) {
	                    if (response.status == 'success') {
	                        console.log('UpdateSuccess');
	                        this_.props.form.resetFields();
	                        this_.props.handleRefrsh();
	                    }
	                    else {
	                        console.log('failed');
	                    }
	                });
	            }
	        });
	    };
	    //验证帐号是否已存在
	    CreateCourseClubHonorForm.prototype.userExists = function (rule, value, callback) {
	        if (!value) {
	            callback();
	        }
	        else {
	            setTimeout(function () {
	                if (value === 'JasonWood') {
	                    callback([new Error('抱歉，该帐名已被占用。')]);
	                }
	                else {
	                    callback();
	                }
	            }, 800);
	        }
	    };
	    CreateCourseClubHonorForm.prototype.render = function () {
	        var this_ = this;
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldError = _a.getFieldError, isFieldValidating = _a.isFieldValidating;
	        var systemIDProps = getFieldProps('rootQualityCategoryName', {
	            rules: [
	                { required: true, message: '根目录不能为空' },
	                { validator: this.userExists },
	            ],
	        });
	        var nameProps = getFieldProps('name', {
	            rules: [
	                { required: true, message: '名称不能为空' }
	            ],
	        });
	        var gradeProps = getFieldProps('qualityCategoryName', {
	            rules: [
	                { required: true, message: '目录不能为空' }
	            ],
	        });
	        var formItemLayout = {
	            labelCol: { span: 6, offset: 0 },
	            wrapperCol: { span: 18, offset: 0 },
	        };
	        return (React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "根目录："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入根目录"}, systemIDProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "名称："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入名称"}, nameProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "目录："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入目录"}, gradeProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18, style: { textAlign: "center" }}, React.createElement(antd_1.Button, {className: "btn-orange", style: { marginRight: "35px" }, onClick: this.handleSubmit}, "提交"), React.createElement(antd_1.Button, {onClick: this.handleCancel}, "取消")))));
	    };
	    CreateCourseClubHonorForm.defaultProps = {};
	    return CreateCourseClubHonorForm;
	}(React.Component));
	module.exports = createForm()(CreateCourseClubHonorForm);


/***/ },

/***/ 696:
/*!***********************************************************!*\
  !*** ./pages/AdminPage/ClubManagement/ClubManagement.tsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var AdminBasicInfo = __webpack_require__(/*! ../Component/AdminBasicInfo */ 678);
	var CardTabs = __webpack_require__(/*! ../../../common/Component/CardTabs */ 444);
	var CourseClubHonorTable = __webpack_require__(/*! ../CourseLibManagement/Component/CourseClubHonorTable */ 693);
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/AdminPage/AdminPageActionTypes */ 382);
	"use strict";
	var ClubManagement = (function (_super) {
	    __extends(ClubManagement, _super);
	    function ClubManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    ClubManagement.prototype.render = function () {
	        /*var subTab = [
	            {tabName:"校内活动库",tabContent:<SchoolActivitiesLibTable />},
	            {tabName:"校外实践库",tabContent:<OffCampusPracticeLibTable />},
	            {tabName:"社团库",tabContent:<CommunityLibTable />}
	        ];*/
	        var subTab = [];
	        var allData = [];
	        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_EVENTHOLDER, function (response) {
	            allData = response.result.eventLib;
	        });
	        for (var i = 0; i < allData.length; i++) {
	            subTab.push({
	                tabName: allData[i].rootEventCategoryName,
	                tabContent: React.createElement(CourseClubHonorTable, {data: allData[i].eventHolders, eventCategoryType: allData[i].eventCategoryType}),
	            });
	        }
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0"}, React.createElement(CardTabs, {tabs: subTab}))));
	    };
	    ClubManagement.defaultProps = {};
	    return ClubManagement;
	}(React.Component));
	module.exports = ClubManagement;


/***/ }

});
//# sourceMappingURL=25.25.js.map