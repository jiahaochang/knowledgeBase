webpackJsonp([22],{

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

/***/ 677:
/*!*****************************************************************!*\
  !*** ./pages/AdminPage/AccountManagement/AccountManagement.tsx ***!
  \*****************************************************************/
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
	var TeacherAdminAccountTable = __webpack_require__(/*! ./Component/TeacherAdminAccountTable */ 679);
	var StudentAccountTable = __webpack_require__(/*! ./Component/StudentAccountTable */ 685);
	"use strict";
	/**
	 * 管理员---帐户管理
	 */
	var AccountManagement = (function (_super) {
	    __extends(AccountManagement, _super);
	    function AccountManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    AccountManagement.prototype.render = function () {
	        var subTab = [
	            { tabName: "教师/管理员帐户", tabContent: React.createElement(TeacherAdminAccountTable, null) },
	            { tabName: "学生帐户", tabContent: React.createElement(StudentAccountTable, null) },
	        ];
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0"}, React.createElement(CardTabs, {tabs: subTab}))));
	    };
	    AccountManagement.defaultProps = {};
	    return AccountManagement;
	}(React.Component));
	module.exports = AccountManagement;


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

/***/ 679:
/*!**********************************************************************************!*\
  !*** ./pages/AdminPage/AccountManagement/Component/TeacherAdminAccountTable.tsx ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var CreateTeacherAdminForm = __webpack_require__(/*! ./CreateTeacherAdminForm */ 680);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var context = __webpack_require__(/*! ../../AdminPageContext */ 681);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var AdminPageUtil_1 = __webpack_require__(/*! ../../AdminPageUtil */ 682);
	var GradeAndClassSelector = __webpack_require__(/*! ./GradeAndClassSelector */ 683);
	var Option = antd_1.Select.Option;
	"use strict";
	/**
	 * 教师管理员帐户table
	 */
	var TeacherAdminAccountTable = (function (_super) {
	    __extends(TeacherAdminAccountTable, _super);
	    function TeacherAdminAccountTable(props) {
	        _super.call(this, props);
	        this.gradeActive = this.gradeActive.bind(this);
	        this.classActive = this.classActive.bind(this);
	        this.handleSearch = this.handleSearch.bind(this);
	        this.handleRefrsh = this.handleRefrsh.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.editInfo = this.editInfo.bind(this);
	        this.addInfo = this.addInfo.bind(this);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            classOption: [],
	            gradeSelectID: AdminPageUtil_1.GRADEALL,
	            classSelectID: AdminPageUtil_1.CLASSALL,
	            searchContent: "",
	            searchOrNot: false,
	            visible: false,
	            editData: {},
	            formType: ""
	        };
	    }
	    //点击年级，加上active class
	    TeacherAdminAccountTable.prototype.gradeActive = function (id) {
	        var classOption = context.getClassMapGradeIDBeKey()[id];
	        this.setState({
	            gradeSelectID: id,
	            classOption: classOption,
	            classSelectID: AdminPageUtil_1.CLASSALL,
	            searchOrNot: false,
	        });
	    };
	    //点击班级，加上active class
	    TeacherAdminAccountTable.prototype.classActive = function (id) {
	        this.setState({
	            classSelectID: id,
	            searchOrNot: false,
	        });
	    };
	    TeacherAdminAccountTable.prototype.componentWillMount = function () {
	        var data = [];
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_MANAGERCOUNT, function (response) {
	            data = response.result.teacherAccounts;
	            for (var i = 0; i < data.length; i++) {
	                var gradeObj = data[i].department;
	                if (typeof gradeObj.grades != "undefined") {
	                    data[i]["gradeName"] = gradeObj.grades[0].gradeName.toString();
	                    data[i]["gradeID"] = gradeObj.grades[0].grade.toString();
	                    if (typeof gradeObj.grades[0].classes != "undefined") {
	                        data[i]["className"] = gradeObj.grades[0].classes[0].className.toString();
	                        data[i]["classID"] = gradeObj.grades[0].classes[0].classID.toString();
	                    }
	                    else {
	                        data[i]["className"] = AdminPageUtil_1.ALL;
	                        data[i]["classID"] = AdminPageUtil_1.CLASSALL;
	                    }
	                }
	                else {
	                    data[i]["gradeName"] = AdminPageUtil_1.ALL;
	                    data[i]["className"] = AdminPageUtil_1.ALL;
	                    data[i]["classID"] = AdminPageUtil_1.CLASSALL;
	                    data[i]["gradeID"] = AdminPageUtil_1.GRADEALL;
	                }
	            }
	        });
	        if (commonFunc_1.isEmptyObject(context.getGradeClassResponseData())) {
	            var rawGrades = [];
	            var gradesClasses = {};
	            var gradeClasses = [];
	            var grades = [];
	            ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT, function (response) {
	                rawGrades = response.result.schoolStruct.grades;
	                gradesClasses = response.result.schoolStruct.gradeClassMap;
	                for (var i = 0; i < rawGrades.length; i++) {
	                    gradeClasses = gradesClasses[rawGrades[i].grade];
	                    grades.push({
	                        grade: rawGrades[i].grade,
	                        gradeName: rawGrades[i].gradeName,
	                        classes: gradeClasses,
	                    });
	                }
	            });
	            //返回数组加上全部选项
	            var gradesall = [{ grade: AdminPageUtil_1.GRADEALL, gradeName: AdminPageUtil_1.ALL, classes: [{ classID: AdminPageUtil_1.CLASSALL, className: AdminPageUtil_1.ALL }] }];
	            gradesall = gradesall.concat(grades);
	            context.setGradeClassResponseData(gradesall);
	            context.setClassMapGradeIDBeKey(AdminPageUtil_1.changeClassMapGradeIDBeKey(gradesall));
	        }
	        var classOption = context.getClassMapGradeIDBeKey()[AdminPageUtil_1.GRADEALL];
	        this.setState({
	            data: data,
	            loading: !this.state.loading,
	            classOption: classOption,
	        });
	    };
	    TeacherAdminAccountTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    TeacherAdminAccountTable.prototype.handleSearch = function (value) {
	        /*alert(value);*/
	        this.setState({
	            searchContent: value,
	            searchOrNot: true,
	        });
	    };
	    TeacherAdminAccountTable.prototype.confirm = function () {
	        antd_1.message.info('点击了确定');
	    };
	    //点击添加教师/管理员，显示模态对话框
	    TeacherAdminAccountTable.prototype.addInfo = function () {
	        this.setState({
	            visible: true,
	            formType: "add"
	        });
	    };
	    //点击编辑，显示模态对话框
	    TeacherAdminAccountTable.prototype.editInfo = function (record) {
	        console.log(record);
	        this.setState({
	            visible: true,
	            editData: record,
	            formType: "edit"
	        });
	    };
	    //模态对话框关闭，刷新页面
	    TeacherAdminAccountTable.prototype.handleRefrsh = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    //模态对话框关闭，不刷新页面
	    TeacherAdminAccountTable.prototype.handleCancel = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    TeacherAdminAccountTable.prototype.render = function () {
	        var this_ = this;
	        var deleteText = "确定要删除这个任务吗";
	        var columns = [
	            {
	                title: '序号',
	                key: 'systemID',
	                dataIndex: 'systemID',
	            },
	            {
	                title: '类型',
	                key: 'roleType',
	                dataIndex: 'roleType',
	            },
	            {
	                title: '所在年级',
	                key: 'gradeName',
	                dataIndex: 'gradeName',
	            },
	            {
	                title: '所在班级',
	                key: 'className',
	                dataIndex: 'className',
	            },
	            {
	                title: '姓名',
	                key: 'name',
	                dataIndex: 'name',
	            },
	            {
	                title: '帐号',
	                key: 'teacherUserID',
	                dataIndex: 'teacherUserID',
	            },
	            {
	                title: '手机号',
	                key: 'tel',
	                dataIndex: 'tel',
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	            }
	        ];
	        var studentInClass = [];
	        if (this.state.gradeSelectID == AdminPageUtil_1.GRADEALL) {
	            studentInClass = this.state.data;
	        }
	        else if (this.state.classSelectID == AdminPageUtil_1.CLASSALL) {
	            for (var i = 0; i < this.state.data.length; i++) {
	                if (this.state.gradeSelectID == this.state.data[i].gradeID) {
	                    studentInClass.push(this.state.data[i]);
	                }
	            }
	        }
	        else {
	            for (var i = 0; i < this.state.data.length; i++) {
	                if (this.state.classSelectID == this.state.data[i].classID) {
	                    studentInClass.push(this.state.data[i]);
	                }
	            }
	        }
	        var shownItems = [];
	        if (this.state.searchContent != "" && this.state.searchOrNot) {
	            var searchContent = this.state.searchContent;
	            for (var i = 0; i < studentInClass.length; i++) {
	                if (studentInClass[i].teacherUserID.indexOf(searchContent) != -1 || studentInClass[i].name.indexOf(searchContent) != -1) {
	                    shownItems.push(studentInClass[i]);
	                }
	            }
	        }
	        else {
	            shownItems = studentInClass;
	        }
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(GradeAndClassSelector, {gradeSelectID: this.state.gradeSelectID, classSelectID: this.state.classSelectID, classOption: this.state.classOption, gradeActive: this.gradeActive, classActive: this.classActive, handleSearch: this.handleSearch}), React.createElement(antd_1.Table, {columns: columns, dataSource: shownItems, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true}), React.createElement(antd_1.Button, {className: "btn-yellow", icon: "plus", onClick: this.addInfo}, "新建"), React.createElement(antd_1.Modal, {title: this.state.formType == "edit" ? "编辑管理员信息" : "添加管理员", visible: this.state.visible, onCancel: this.handleCancel, footer: []}, React.createElement(CreateTeacherAdminForm, {handleRefrsh: this.handleRefrsh, handleCancel: this.handleCancel, editData: this.state.editData, formType: this.state.formType}))));
	    };
	    TeacherAdminAccountTable.defaultProps = {};
	    return TeacherAdminAccountTable;
	}(React.Component));
	module.exports = TeacherAdminAccountTable;


/***/ },

/***/ 680:
/*!********************************************************************************!*\
  !*** ./pages/AdminPage/AccountManagement/Component/CreateTeacherAdminForm.tsx ***!
  \********************************************************************************/
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
	var context = __webpack_require__(/*! ../../AdminPageContext */ 681);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var AdminPageUtil_1 = __webpack_require__(/*! ../../AdminPageUtil */ 682);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	"use strict";
	/**
	 * 编辑管理员/教师信息 or  添加管理员/教师信息
	 */
	var CreateTeacherAdminForm = (function (_super) {
	    __extends(CreateTeacherAdminForm, _super);
	    function CreateTeacherAdminForm(props) {
	        _super.call(this, props);
	        this.handleGradeChange = this.handleGradeChange.bind(this);
	        this.handleClassChange = this.handleClassChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.state = {
	            classOption: [],
	            gradeSelectID: "",
	            classSelectID: ""
	        };
	    }
	    CreateTeacherAdminForm.prototype.componentWillMount = function () {
	        this.showAddOrEdit(this.props);
	    };
	    CreateTeacherAdminForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.showAddOrEdit(newProps);
	        }
	    };
	    CreateTeacherAdminForm.prototype.showAddOrEdit = function (studentProps) {
	        if (!commonFunc_1.isEmptyObject(studentProps.editData)) {
	            var editData = studentProps.editData;
	            var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[editData.gradeID]).toJS();
	            if (classOption[0].className == AdminPageUtil_1.ALL) {
	                classOption.splice(0, 1);
	            }
	            this.setState({
	                gradeSelectID: editData.gradeID,
	                classSelectID: editData.classID,
	                classOption: classOption
	            });
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                stuClass: editData.classID,
	                grade: editData.gradeID,
	                name: editData.name,
	                systemID: editData.teacherUserID
	            });
	        }
	        else {
	            var gradeID = context.getGradeClassResponseData()[1].grade;
	            var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[gradeID]).toJS();
	            if (classOption[0].className == AdminPageUtil_1.ALL) {
	                classOption.splice(0, 1);
	            }
	            this.setState({
	                gradeSelectID: gradeID,
	                classSelectID: classOption[0].classID,
	                classOption: classOption
	            });
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                stuClass: classOption[0].classID,
	                grade: gradeID,
	            });
	        }
	    };
	    //年级改变
	    CreateTeacherAdminForm.prototype.handleGradeChange = function (value) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            grade: value
	        });
	        var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[value]).toJS();
	        classOption.splice(0, 1);
	        this.setState({
	            gradeSelectID: value,
	            classOption: classOption,
	            classSelectID: classOption[0].classID
	        });
	    };
	    //班级改变
	    CreateTeacherAdminForm.prototype.handleClassChange = function (value) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            stuClass: value
	        });
	        this.setState({
	            classSelectID: value
	        });
	    };
	    //取消
	    CreateTeacherAdminForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.handleCancel();
	    };
	    //提交按钮
	    CreateTeacherAdminForm.prototype.handleSubmit = function (e) {
	        var _this = this;
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            if (_this.props.formType == 'add') {
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.CREATE_ADMIN_MANAGERCOUNT, values, function (response) {
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
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_MANAGERCOUNT, values, function (response) {
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
	    CreateTeacherAdminForm.prototype.userExists = function (rule, value, callback) {
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
	    CreateTeacherAdminForm.prototype.render = function () {
	        var this_ = this;
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldError = _a.getFieldError, isFieldValidating = _a.isFieldValidating;
	        var systemIDProps = getFieldProps('systemID', {
	            rules: [
	                { required: true, message: '帐号不能为空' },
	                { validator: this.userExists },
	            ],
	        });
	        var nameProps = getFieldProps('name', {
	            rules: [
	                { required: true, message: '姓名不能为空' }
	            ],
	        });
	        var gradeProps = getFieldProps('grade', {
	            rules: [
	                { required: true, message: '年级不能为空' }
	            ],
	        });
	        var stuClassProps = getFieldProps('stuClass', {
	            rules: [
	                { required: true, message: '班级不能为空' }
	            ],
	        });
	        var formItemLayout = {
	            labelCol: { span: 6, offset: 0 },
	            wrapperCol: { span: 18, offset: 0 },
	        };
	        var gradeOption = Immutable.fromJS(context.getGradeClassResponseData()).toJS();
	        if (gradeOption[0].gradeName == AdminPageUtil_1.ALL) {
	            gradeOption.splice(0, 1);
	        }
	        return (React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "帐号："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入帐号"}, systemIDProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "姓名："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入姓名"}, nameProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "年级："}), React.createElement(antd_1.Select, __assign({}, gradeProps, {onChange: this.handleGradeChange, value: this.state.gradeSelectID}), gradeOption.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.grade}, option.gradeName);
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "班级："}), React.createElement(antd_1.Select, __assign({}, stuClassProps, {onChange: this.handleClassChange, value: this.state.classSelectID}), this.state.classOption.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.classID}, option.className);
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18, style: { textAlign: "center" }}, React.createElement(antd_1.Button, {className: "btn-orange", style: { marginRight: "35px" }, onClick: this.handleSubmit}, "提交"), React.createElement(antd_1.Button, {onClick: this.handleCancel}, "取消")))));
	    };
	    CreateTeacherAdminForm.defaultProps = {};
	    return CreateTeacherAdminForm;
	}(React.Component));
	module.exports = createForm()(CreateTeacherAdminForm);


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

/***/ 682:
/*!*******************************************!*\
  !*** ./pages/AdminPage/AdminPageUtil.tsx ***!
  \*******************************************/
/***/ function(module, exports) {

	"use strict";
	exports.ALL = "全部";
	exports.GRADEALL = "gradeAll";
	exports.CLASSALL = "classAll";
	function changeClassMapGradeIDBeKey(data) {
	    var classMap = {};
	    for (var i = 0; i < data.length; i++) {
	        var classAll = [];
	        if (data[i].gradeName != exports.ALL) {
	            classAll = [{ classID: exports.CLASSALL, className: exports.ALL, classShortName: exports.ALL }];
	        }
	        classMap[data[i].grade] = classAll.concat(data[i].classes);
	    }
	    return classMap;
	}
	exports.changeClassMapGradeIDBeKey = changeClassMapGradeIDBeKey;


/***/ },

/***/ 683:
/*!*******************************************************************************!*\
  !*** ./pages/AdminPage/AccountManagement/Component/GradeAndClassSelector.tsx ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var SearchInput = __webpack_require__(/*! ../../../../common/Component/SearchInput */ 684);
	var context = __webpack_require__(/*! ../../AdminPageContext */ 681);
	"use strict";
	/**
	 * GradeAndClassSelector
	 */
	var GradeAndClassSelector = (function (_super) {
	    __extends(GradeAndClassSelector, _super);
	    function GradeAndClassSelector(props) {
	        _super.call(this, props);
	        this.gradeActive = this.gradeActive.bind(this);
	        this.classActive = this.classActive.bind(this);
	        this.handleSearch = this.handleSearch.bind(this);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            visible: false,
	            editData: {},
	            formType: ""
	        };
	    }
	    GradeAndClassSelector.prototype.componentWillMount = function () {
	        var data = [];
	        this.setState({
	            data: data,
	            loading: !this.state.loading,
	        });
	    };
	    GradeAndClassSelector.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    //搜索框搜索
	    GradeAndClassSelector.prototype.handleSearch = function (value) {
	        this.props.handleSearch(value);
	    };
	    //点击年级，加上active class
	    GradeAndClassSelector.prototype.gradeActive = function (e) {
	        var id = e.currentTarget.id;
	        this.props.gradeActive(id);
	    };
	    //点击班级，加上active class
	    GradeAndClassSelector.prototype.classActive = function (e) {
	        var id = e.currentTarget.id;
	        this.props.classActive(id);
	    };
	    GradeAndClassSelector.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement(antd_1.Row, {className: "grade-class-filter"}, React.createElement(antd_1.Col, {span: 16}, React.createElement("dl", null, React.createElement("dt", null, React.createElement("strong", null, "年级：")), React.createElement("dd", null, context.getGradeClassResponseData().map(function (option, index) {
	            var className = this_.props.gradeSelectID == option.grade ? "active " : "";
	            if (index == 0) {
	                className += "all";
	            }
	            return (React.createElement("span", {onClick: this_.gradeActive, id: option.grade, key: index, className: className}, React.createElement("a", null, option.gradeName)));
	        })))), React.createElement(antd_1.Col, {span: 8}, React.createElement(SearchInput, {btnColor: "btn-blue", handleSearch: this.handleSearch, placeholder: "输入学号/姓名"})), React.createElement(antd_1.Col, {span: 24}, React.createElement("dl", null, React.createElement("dt", null, React.createElement("strong", null, "班级：")), React.createElement("dd", null, this.props.classOption.map(function (option, index) {
	            var className = this_.props.classSelectID == option.classID ? "active " : "";
	            if (index == 0) {
	                className += "all";
	            }
	            return (React.createElement("span", {onClick: this_.classActive, key: index, id: option.classID, className: className}, React.createElement("a", null, option.className)));
	        }))))));
	    };
	    GradeAndClassSelector.defaultProps = {};
	    return GradeAndClassSelector;
	}(React.Component));
	module.exports = GradeAndClassSelector;


/***/ },

/***/ 684:
/*!******************************************!*\
  !*** ./common/Component/SearchInput.tsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var commonFunc_1 = __webpack_require__(/*! ../commonFunc */ 378);
	"use strict";
	var SearchInput = (function (_super) {
	    __extends(SearchInput, _super);
	    function SearchInput(props) {
	        _super.call(this, props);
	        this.state = {};
	        this.handleSearch = this.handleSearch.bind(this);
	    }
	    SearchInput.prototype.handleSearch = function () {
	        var value = $.trim($("#inputValue").val());
	        if (!commonFunc_1.isEmptyObject(value)) {
	            this.props.handleSearch(value);
	        }
	    };
	    SearchInput.prototype.render = function () {
	        return (React.createElement("div", {className: "search-box-table"}, React.createElement("div", {className: "search-input"}, React.createElement("input", {placeholder: this.props.placeholder, id: "inputValue"}), React.createElement("i", {className: " anticon anticon-search"})), React.createElement("button", {className: "ant-btn " + this.props.btnColor, onClick: this.handleSearch}, "搜索")));
	    };
	    SearchInput.defaultProps = {
	        placeholder: "搜索"
	    };
	    return SearchInput;
	}(React.Component));
	module.exports = SearchInput;


/***/ },

/***/ 685:
/*!*****************************************************************************!*\
  !*** ./pages/AdminPage/AccountManagement/Component/StudentAccountTable.tsx ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var context = __webpack_require__(/*! ../../AdminPageContext */ 681);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var AdminPageUtil_1 = __webpack_require__(/*! ../../AdminPageUtil */ 682);
	var CreateStudentForm = __webpack_require__(/*! ./CreateStudentForm */ 686);
	var GradeAndClassSelector = __webpack_require__(/*! ./GradeAndClassSelector */ 683);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	"use strict";
	/**
	 * 学生帐户table
	 */
	var StudentsystemIDTable = (function (_super) {
	    __extends(StudentsystemIDTable, _super);
	    function StudentsystemIDTable(props) {
	        _super.call(this, props);
	        this.editInfo = this.editInfo.bind(this);
	        this.handleRefrsh = this.handleRefrsh.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.handleSearch = this.handleSearch.bind(this);
	        this.addInfo = this.addInfo.bind(this);
	        this.gradeActive = this.gradeActive.bind(this);
	        this.classActive = this.classActive.bind(this);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            classOption: [],
	            gradeSelectID: AdminPageUtil_1.GRADEALL,
	            classSelectID: AdminPageUtil_1.CLASSALL,
	            visible: false,
	            editData: {},
	            formType: "",
	            searchContent: "",
	            searchOrNot: false,
	        };
	    }
	    StudentsystemIDTable.prototype.componentWillMount = function () {
	        var data = [];
	        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_STUDENTACCOUNT, function (response) {
	            data = response.result.studentAccount;
	        });
	        if (commonFunc_1.isEmptyObject(context.getGradeClassResponseData())) {
	            var rawGrades = [];
	            var gradesClasses = {};
	            var gradeClasses = [];
	            var grades = [];
	            ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT, function (response) {
	                rawGrades = response.result.schoolStruct.grades;
	                gradesClasses = response.result.schoolStruct.gradeClassMap;
	                for (var i = 0; i < rawGrades.length; i++) {
	                    gradeClasses = gradesClasses[rawGrades[i].grade];
	                    grades.push({
	                        grade: rawGrades[i].grade,
	                        gradeName: rawGrades[i].gradeName,
	                        classes: gradeClasses,
	                    });
	                }
	            });
	            //返回数组加上全部选项
	            var gradesall = [{ grade: AdminPageUtil_1.GRADEALL, gradeName: AdminPageUtil_1.ALL, classes: [{ classID: AdminPageUtil_1.CLASSALL, className: AdminPageUtil_1.ALL }] }];
	            gradesall = gradesall.concat(grades);
	            context.setGradeClassResponseData(gradesall);
	            context.setClassMapGradeIDBeKey(AdminPageUtil_1.changeClassMapGradeIDBeKey(gradesall));
	        }
	        var classOption = context.getClassMapGradeIDBeKey()[AdminPageUtil_1.GRADEALL];
	        this.setState({
	            data: data,
	            loading: !this.state.loading,
	            classOption: classOption,
	        });
	    };
	    StudentsystemIDTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    //搜索框搜索
	    StudentsystemIDTable.prototype.handleSearch = function (value) {
	        this.setState({
	            searchContent: value,
	            searchOrNot: true,
	        });
	    };
	    //删除点击事件
	    StudentsystemIDTable.prototype.confirm = function () {
	        antd_1.message.success('删除成功');
	    };
	    //点击年级，加上active class
	    StudentsystemIDTable.prototype.gradeActive = function (id) {
	        var classOption = context.getClassMapGradeIDBeKey()[id];
	        this.setState({
	            gradeSelectID: id,
	            classOption: classOption,
	            classSelectID: AdminPageUtil_1.CLASSALL,
	            searchOrNot: false,
	        });
	    };
	    //点击班级，加上active class
	    StudentsystemIDTable.prototype.classActive = function (id) {
	        this.setState({
	            classSelectID: id,
	            searchOrNot: false,
	        });
	    };
	    //点击编辑，显示模态对话框
	    StudentsystemIDTable.prototype.editInfo = function (record) {
	        console.log(record);
	        this.setState({
	            visible: true,
	            editData: record,
	            formType: "edit"
	        });
	    };
	    //点击添加学生，显示模态对话框
	    StudentsystemIDTable.prototype.addInfo = function () {
	        this.setState({
	            visible: true,
	            formType: "add"
	        });
	    };
	    //模态对话框关闭，刷新页面
	    StudentsystemIDTable.prototype.handleRefrsh = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    //模态对话框关闭，不刷新页面
	    StudentsystemIDTable.prototype.handleCancel = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    StudentsystemIDTable.prototype.render = function () {
	        var this_ = this;
	        var deleteText = "确定要删除该学生帐号吗";
	        var columns = [
	            {
	                title: '序号',
	                key: 'systemID',
	                dataIndex: 'systemID',
	            },
	            {
	                title: '帐号',
	                key: 'userID',
	                dataIndex: 'userID',
	            },
	            {
	                title: '姓名',
	                key: 'name',
	                dataIndex: 'name',
	            },
	            {
	                title: '年级',
	                key: 'gradeName',
	                dataIndex: 'gradeName',
	            },
	            {
	                title: '班级',
	                key: 'className',
	                dataIndex: 'className',
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	            }
	        ];
	        var studentInClass = [];
	        if (this.state.gradeSelectID == AdminPageUtil_1.GRADEALL) {
	            studentInClass = this.state.data;
	        }
	        else if (this.state.classSelectID == AdminPageUtil_1.CLASSALL) {
	            for (var i = 0; i < this.state.data.length; i++) {
	                if (this.state.gradeSelectID == this.state.data[i].grade) {
	                    studentInClass.push(this.state.data[i]);
	                }
	            }
	        }
	        else {
	            for (var i = 0; i < this.state.data.length; i++) {
	                if (this.state.classSelectID == this.state.data[i].classID) {
	                    studentInClass.push(this.state.data[i]);
	                }
	            }
	        }
	        var shownItems = [];
	        if (this.state.searchContent != "" && this.state.searchOrNot) {
	            var searchContent = this.state.searchContent;
	            for (var i = 0; i < studentInClass.length; i++) {
	                if (studentInClass[i].userID.indexOf(searchContent) != -1 || studentInClass[i].name.indexOf(searchContent) != -1) {
	                    shownItems.push(studentInClass[i]);
	                }
	            }
	        }
	        else {
	            shownItems = studentInClass;
	        }
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(GradeAndClassSelector, {gradeSelectID: this.state.gradeSelectID, classSelectID: this.state.classSelectID, classOption: this.state.classOption, gradeActive: this.gradeActive, classActive: this.classActive, handleSearch: this.handleSearch}), React.createElement(antd_1.Table, {columns: columns, dataSource: shownItems, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true}), React.createElement(antd_1.Button, {className: "btn-orange", icon: "plus", onClick: this.addInfo}, "新建"), React.createElement(antd_1.Modal, {title: this.state.formType == "edit" ? "编辑学生信息" : "添加学生", visible: this.state.visible, onCancel: this.handleCancel, footer: []}, React.createElement(CreateStudentForm, {handleRefrsh: this.handleRefrsh, handleCancel: this.handleCancel, editData: this.state.editData, formType: this.state.formType}))));
	    };
	    StudentsystemIDTable.defaultProps = {};
	    return StudentsystemIDTable;
	}(React.Component));
	module.exports = StudentsystemIDTable;


/***/ },

/***/ 686:
/*!***************************************************************************!*\
  !*** ./pages/AdminPage/AccountManagement/Component/CreateStudentForm.tsx ***!
  \***************************************************************************/
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
	var context = __webpack_require__(/*! ../../AdminPageContext */ 681);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var AdminPageUtil_1 = __webpack_require__(/*! ../../AdminPageUtil */ 682);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	"use strict";
	/**
	 * 编辑学生信息 or  添加学生信息
	 */
	var CreateStudentForm = (function (_super) {
	    __extends(CreateStudentForm, _super);
	    function CreateStudentForm(props) {
	        _super.call(this, props);
	        this.handleGradeChange = this.handleGradeChange.bind(this);
	        this.handleClassChange = this.handleClassChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.state = {
	            classOption: [],
	            gradeSelectID: "",
	            classSelectID: ""
	        };
	    }
	    CreateStudentForm.prototype.componentWillMount = function () {
	        this.showAddOrEdit(this.props);
	    };
	    CreateStudentForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.showAddOrEdit(newProps);
	        }
	    };
	    CreateStudentForm.prototype.showAddOrEdit = function (studentProps) {
	        if (!commonFunc_1.isEmptyObject(studentProps.editData)) {
	            var editData = studentProps.editData;
	            var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[editData.grade]).toJS();
	            if (classOption[0].className == AdminPageUtil_1.ALL) {
	                classOption.splice(0, 1);
	            }
	            this.setState({
	                gradeSelectID: editData.grade,
	                classSelectID: editData.classID,
	                classOption: classOption
	            });
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                stuClass: editData.classID,
	                grade: editData.grade,
	                name: editData.name,
	                systemID: editData.systemID
	            });
	        }
	        else {
	            var gradeID = context.getGradeClassResponseData()[1].grade;
	            var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[gradeID]).toJS();
	            if (classOption[0].className == AdminPageUtil_1.ALL) {
	                classOption.splice(0, 1);
	            }
	            this.setState({
	                gradeSelectID: gradeID,
	                classSelectID: classOption[0].classID,
	                classOption: classOption
	            });
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                stuClass: classOption[0].classID,
	                grade: gradeID,
	            });
	        }
	    };
	    //年级改变
	    CreateStudentForm.prototype.handleGradeChange = function (value) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            grade: value
	        });
	        var classOption = Immutable.fromJS(context.getClassMapGradeIDBeKey()[value]).toJS();
	        classOption.splice(0, 1);
	        this.setState({
	            gradeSelectID: value,
	            classOption: classOption,
	            classSelectID: classOption[0].classID
	        });
	    };
	    //班级改变
	    CreateStudentForm.prototype.handleClassChange = function (value) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            stuClass: value
	        });
	        this.setState({
	            classSelectID: value
	        });
	    };
	    //取消
	    CreateStudentForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.handleCancel();
	    };
	    //提交按钮
	    CreateStudentForm.prototype.handleSubmit = function (e) {
	        var _this = this;
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            if (_this.props.formType == 'add') {
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.CREATE_ADMIN_STUDENTACCOUNT, values, function (response) {
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
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_STUDENTACCOUNT, values, function (response) {
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
	    CreateStudentForm.prototype.userExists = function (rule, value, callback) {
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
	    CreateStudentForm.prototype.render = function () {
	        var this_ = this;
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldError = _a.getFieldError, isFieldValidating = _a.isFieldValidating;
	        var systemIDProps = getFieldProps('systemID', {
	            rules: [
	                { required: true, message: '帐号不能为空' },
	                { validator: this.userExists },
	            ],
	        });
	        var nameProps = getFieldProps('name', {
	            rules: [
	                { required: true, message: '姓名不能为空' }
	            ],
	        });
	        var gradeProps = getFieldProps('grade', {
	            rules: [
	                { required: true, message: '年级不能为空' }
	            ],
	        });
	        var stuClassProps = getFieldProps('stuClass', {
	            rules: [
	                { required: true, message: '班级不能为空' }
	            ],
	        });
	        var formItemLayout = {
	            labelCol: { span: 6, offset: 0 },
	            wrapperCol: { span: 18, offset: 0 },
	        };
	        var gradeOption = Immutable.fromJS(context.getGradeClassResponseData()).toJS();
	        if (gradeOption[0].gradeName == AdminPageUtil_1.ALL) {
	            gradeOption.splice(0, 1);
	        }
	        return (React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "帐号："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入帐号"}, systemIDProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "姓名："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入姓名"}, nameProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "年级："}), React.createElement(antd_1.Select, __assign({}, gradeProps, {onChange: this.handleGradeChange, value: this.state.gradeSelectID}), gradeOption.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.grade}, option.gradeName);
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "班级："}), React.createElement(antd_1.Select, __assign({}, stuClassProps, {onChange: this.handleClassChange, value: this.state.classSelectID}), this.state.classOption.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.classID}, option.className);
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18, style: { textAlign: "center" }}, React.createElement(antd_1.Button, {className: "btn-orange", style: { marginRight: "35px" }, onClick: this.handleSubmit}, "提交"), React.createElement(antd_1.Button, {onClick: this.handleCancel}, "取消")))));
	    };
	    CreateStudentForm.defaultProps = {};
	    return CreateStudentForm;
	}(React.Component));
	module.exports = createForm()(CreateStudentForm);


/***/ }

});
//# sourceMappingURL=22.22.js.map