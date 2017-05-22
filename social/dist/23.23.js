webpackJsonp([23],{

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

/***/ 688:
/*!*************************************************************!*\
  !*** ./pages/AdminPage/ScoreManagement/ScoreManagement.tsx ***!
  \*************************************************************/
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
	var ScoreManagementTable = __webpack_require__(/*! ./Component/ScoreManagementTable */ 689);
	"use strict";
	var ScoreManagement = (function (_super) {
	    __extends(ScoreManagement, _super);
	    function ScoreManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    ScoreManagement.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardWithTitleBox, {title: "成绩管理", subComponent: React.createElement(ScoreManagementTable, null)}))));
	    };
	    ScoreManagement.defaultProps = {};
	    return ScoreManagement;
	}(React.Component));
	module.exports = ScoreManagement;


/***/ },

/***/ 689:
/*!****************************************************************************!*\
  !*** ./pages/AdminPage/ScoreManagement/Component/ScoreManagementTable.tsx ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var Option = antd_1.Select.Option;
	var CreateScoreForm = __webpack_require__(/*! ./CreateScoreForm */ 690);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	"use strict";
	var ScoreManagementTable = (function (_super) {
	    __extends(ScoreManagementTable, _super);
	    function ScoreManagementTable(props) {
	        _super.call(this, props);
	        this.handleGradeChange = this.handleGradeChange.bind(this);
	        this.handleClassChange = this.handleClassChange.bind(this);
	        this.handleRefrsh = this.handleRefrsh.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.editInfo = this.editInfo.bind(this);
	        this.addInfo = this.addInfo.bind(this);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            termOption: [],
	            gradeOption: [],
	            termOptions: [],
	            chosenClass: "",
	            chosenGrade: "",
	            visible: false,
	            editData: {},
	            formType: ""
	        };
	    }
	    //点击添加成绩，显示模态对话框
	    ScoreManagementTable.prototype.addInfo = function () {
	        this.setState({
	            visible: true,
	            formType: "add"
	        });
	    };
	    //点击编辑，显示模态对话框
	    ScoreManagementTable.prototype.editInfo = function (record) {
	        console.log(record);
	        this.setState({
	            visible: true,
	            editData: record,
	            formType: "edit"
	        });
	    };
	    //模态对话框关闭，刷新页面
	    ScoreManagementTable.prototype.handleRefrsh = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    //模态对话框关闭，不刷新页面
	    ScoreManagementTable.prototype.handleCancel = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    //改变年级时，set class ,set data
	    ScoreManagementTable.prototype.handleGradeChange = function (value) {
	        var gradeClassOptions = [];
	        for (var i = 0; i < this.state.termOptions.length; i++) {
	            if (value == this.state.termOptions[i].grade) {
	                gradeClassOptions = this.state.termOptions[i].terms;
	            }
	        }
	        this.setState({
	            termOption: gradeClassOptions,
	            chosenGrade: value,
	            chosenClass: gradeClassOptions[0].termID,
	        });
	    };
	    //改变班级时，set data
	    ScoreManagementTable.prototype.handleClassChange = function (value) {
	        this.setState({
	            chosenClass: value,
	        });
	    };
	    ScoreManagementTable.prototype.componentWillMount = function () {
	        var data = [];
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_EXAMINFO, function (response) {
	            data = response.result.examInfos;
	        });
	        var rawGrades = [];
	        var gradesTerms = {};
	        var gradeTerms = [];
	        var grades = [];
	        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_TERMWITHGRADEYEARSTRUCT, function (response) {
	            rawGrades = response.result.schoolStruct.grades;
	            gradesTerms = response.result.schoolStruct.gradeTermMap;
	            for (var i = 0; i < rawGrades.length; i++) {
	                gradeTerms = gradesTerms[rawGrades[i].grade];
	                grades.push({
	                    grade: rawGrades[i].grade,
	                    gradeName: rawGrades[i].gradeName,
	                    terms: gradeTerms,
	                });
	            }
	        });
	        var classOption = gradesTerms[rawGrades[0].grade];
	        this.setState({
	            data: data,
	            loading: !this.state.loading,
	            termOption: classOption,
	            termOptions: grades,
	            gradeOption: rawGrades,
	            chosenClass: classOption[0].termID,
	            chosenGrade: rawGrades[0].grade,
	        });
	    };
	    ScoreManagementTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    ScoreManagementTable.prototype.handleSearch = function (value) {
	        alert(value);
	    };
	    ScoreManagementTable.prototype.confirm = function () {
	        antd_1.message.info('点击了确定');
	    };
	    ScoreManagementTable.prototype.render = function () {
	        var this_ = this;
	        var deleteText = "确定要删除这个任务吗";
	        var columns = [
	            {
	                title: '年级',
	                key: 'grade',
	                dataIndex: 'grade',
	            },
	            {
	                title: '学年-学期',
	                key: 'termName',
	                dataIndex: 'termName',
	            },
	            {
	                title: '考试名称',
	                key: 'examName',
	                dataIndex: 'examName',
	            },
	            {
	                title: '考试成绩',
	                key: 'scoreOpt',
	                render: function (text, record) {
	                    if (record.recordUploaded) {
	                        return React.createElement(antd_1.Button, {className: "btn-grey"}, "已上传");
	                    }
	                    else {
	                        return React.createElement(antd_1.Button, {className: "btn-blue"}, "上传");
	                    }
	                }
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	            }
	        ];
	        var studentInClass = [];
	        for (var i = 0; i < this.state.data.length; i++) {
	            if (this.state.chosenClass == this.state.data[i].termID && this.state.chosenGrade == this.state.data[i].grade) {
	                studentInClass.push(this.state.data[i]);
	            }
	        }
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(antd_1.Row, {className: "search-condition", style: { marginBottom: "30px" }}, React.createElement(antd_1.Col, {span: 8}, React.createElement("span", {className: "am-padding-xs"}, "年级"), React.createElement(antd_1.Select, {value: this.state.chosenGrade, size: "large", style: { width: "60%" }, onChange: this.handleGradeChange}, this.state.gradeOption.map(function (item, index) { return (React.createElement(Option, {key: item.grade, value: item.grade}, item.grade)); }))), React.createElement(antd_1.Col, {span: 8}, React.createElement("span", {className: "am-padding-xs"}, "学期"), React.createElement(antd_1.Select, {value: this.state.chosenClass, size: "large", style: { width: "60%" }, onChange: this.handleClassChange}, this.state.termOption.map(function (item, index) { return (React.createElement(Option, {key: item.termID, value: item.termID}, item.termName)); })))), React.createElement(antd_1.Table, {columns: columns, dataSource: studentInClass, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true}), React.createElement(antd_1.Button, {className: "btn-yellow", icon: "plus", onClick: this.addInfo}, "新建"), React.createElement(antd_1.Modal, {title: this.state.formType == "edit" ? "编辑成绩信息" : "添加成绩", visible: this.state.visible, onCancel: this.handleCancel, footer: []}, React.createElement(CreateScoreForm, {grades: this.state.termOptions, handleRefrsh: this.handleRefrsh, handleCancel: this.handleCancel, editData: this.state.editData, formType: this.state.formType})), React.createElement("div", {className: "ant-alert ant-alert-info download-info am-margin-top-sm"}, React.createElement("i", {className: "ant-alert-icon anticon anticon-info-circle"}), React.createElement("span", {className: "ant-alert-message"}, "提示：上传成绩之前请先下载成绩模板，按照模板填写成绩再进行成绩的上传。"), React.createElement("span", {className: "ant-alert-description"}, React.createElement(antd_1.Button, {className: "btn-blue", icon: "download"}, "成绩模板下载")))));
	    };
	    ScoreManagementTable.defaultProps = {};
	    return ScoreManagementTable;
	}(React.Component));
	module.exports = ScoreManagementTable;


/***/ },

/***/ 690:
/*!***********************************************************************!*\
  !*** ./pages/AdminPage/ScoreManagement/Component/CreateScoreForm.tsx ***!
  \***********************************************************************/
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
	var AdminPageUtil_1 = __webpack_require__(/*! ../../AdminPageUtil */ 682);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	"use strict";
	/**
	 * 编辑成绩信息 or  添加成绩信息
	 */
	var CreateScoreForm = (function (_super) {
	    __extends(CreateScoreForm, _super);
	    function CreateScoreForm(props) {
	        _super.call(this, props);
	        this.handleGradeChange = this.handleGradeChange.bind(this);
	        this.handleClassChange = this.handleClassChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.getTermOptions = this.getTermOptions.bind(this);
	        this.state = {
	            classOption: [],
	            gradeSelectID: "",
	            classSelectID: ""
	        };
	    }
	    CreateScoreForm.prototype.componentWillMount = function () {
	        this.showAddOrEdit(this.props);
	    };
	    CreateScoreForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.showAddOrEdit(newProps);
	        }
	    };
	    CreateScoreForm.prototype.getTermOptions = function (grade) {
	        var gradeTermOptions = [];
	        for (var i = 0; i < this.props.grades.length; i++) {
	            if (grade == this.props.grades[i].grade) {
	                gradeTermOptions = this.props.grades[i].terms;
	            }
	        }
	        return gradeTermOptions;
	    };
	    CreateScoreForm.prototype.showAddOrEdit = function (studentProps) {
	        if (!commonFunc_1.isEmptyObject(studentProps.editData)) {
	            var editData = studentProps.editData;
	            console.log(editData);
	            var classOption = this.getTermOptions(editData.gradeID);
	            this.setState({
	                gradeSelectID: editData.grade,
	                classSelectID: editData.termID,
	                classOption: classOption
	            });
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                stuClass: editData.termID,
	                grade: editData.grade,
	                name: editData.examName,
	                systemID: editData.examID
	            });
	        }
	        else {
	            var gradeID = this.props.grades[0].grade;
	            var classOption = this.getTermOptions(gradeID);
	            this.setState({
	                gradeSelectID: gradeID,
	                classSelectID: classOption[0].termID,
	                classOption: classOption
	            });
	            var setFieldsValue = this.props.form.setFieldsValue;
	            setFieldsValue({
	                stuClass: classOption[0].termID,
	                grade: gradeID,
	            });
	        }
	    };
	    //年级改变
	    CreateScoreForm.prototype.handleGradeChange = function (value) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            grade: value
	        });
	        var classOption = this.getTermOptions(value);
	        classOption.splice(0, 1);
	        this.setState({
	            gradeSelectID: value,
	            classOption: classOption,
	            classSelectID: classOption[0].termID
	        });
	    };
	    //班级改变
	    CreateScoreForm.prototype.handleClassChange = function (value) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            stuClass: value
	        });
	        this.setState({
	            classSelectID: value
	        });
	    };
	    //取消
	    CreateScoreForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.handleCancel();
	    };
	    //提交按钮
	    CreateScoreForm.prototype.handleSubmit = function (e) {
	        var _this = this;
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            if (_this.props.formType == 'add') {
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.CREATE_ADMIN_EXAMINFO, values, function (response) {
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
	                ajaxUtil.getDataByActionIDWithQuery(ActionTypes.UPDATE_ADMIN_EXAMINFO, values, function (response) {
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
	    CreateScoreForm.prototype.userExists = function (rule, value, callback) {
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
	    CreateScoreForm.prototype.render = function () {
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
	                { required: true, message: '名称不能为空' }
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
	        var gradeOption = this.props.grades;
	        if (gradeOption[0].gradeName == AdminPageUtil_1.ALL) {
	            gradeOption.splice(0, 1);
	        }
	        return (React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "名称："}), React.createElement(antd_1.Input, __assign({placeholder: "请输入姓名"}, nameProps))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "年级："}), React.createElement(antd_1.Select, __assign({}, gradeProps, {onChange: this.handleGradeChange, value: this.state.gradeSelectID}), gradeOption.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.grade}, option.gradeName);
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "学期："}), React.createElement(antd_1.Select, __assign({}, stuClassProps, {onChange: this.handleClassChange, value: this.state.classSelectID}), this.state.classOption.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.termID}, option.termName);
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18, style: { textAlign: "center" }}, React.createElement(antd_1.Button, {className: "btn-orange", style: { marginRight: "35px" }, onClick: this.handleSubmit}, "提交"), React.createElement(antd_1.Button, {onClick: this.handleCancel}, "取消")))));
	    };
	    CreateScoreForm.defaultProps = {};
	    return CreateScoreForm;
	}(React.Component));
	module.exports = createForm()(CreateScoreForm);


/***/ }

});
//# sourceMappingURL=23.23.js.map