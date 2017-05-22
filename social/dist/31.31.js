webpackJsonp([31],{

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

/***/ 727:
/*!*****************************************************************************!*\
  !*** ./pages/AdminPage/IntegralScoreManagement/IntegralScoreManagement.tsx ***!
  \*****************************************************************************/
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
	var IntegralScoreManagementTable = __webpack_require__(/*! ./Component/IntegralScoreManagementTable */ 728);
	"use strict";
	var IntegralScoreManagement = (function (_super) {
	    __extends(IntegralScoreManagement, _super);
	    function IntegralScoreManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    IntegralScoreManagement.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardWithTitleBox, {title: "积分管理", subComponent: React.createElement(IntegralScoreManagementTable, null)}))));
	    };
	    IntegralScoreManagement.defaultProps = {};
	    return IntegralScoreManagement;
	}(React.Component));
	module.exports = IntegralScoreManagement;


/***/ },

/***/ 728:
/*!********************************************************************************************!*\
  !*** ./pages/AdminPage/IntegralScoreManagement/Component/IntegralScoreManagementTable.tsx ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var CreateIntegralScoreForm = __webpack_require__(/*! ./CreateIntegralScoreForm */ 729);
	"use strict";
	/**
	 * 积分管理---积分管理table
	 */
	var IntegralScoreManagementTable = (function (_super) {
	    __extends(IntegralScoreManagementTable, _super);
	    function IntegralScoreManagementTable(props) {
	        _super.call(this, props);
	        this.hideModal = this.hideModal.bind(this);
	        this.handleRefresh = this.handleRefresh.bind(this);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            visible: false,
	            editData: {},
	            formType: ""
	        };
	    }
	    IntegralScoreManagementTable.prototype.setData = function () {
	        //console.log('2222222');
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_INTEGRALSCOREITEM, function (response) {
	            var data = response.result.schoolIntegralScoreItems;
	            this_.setState({
	                data: data,
	                loading: !this_.state.loading
	            });
	        });
	    };
	    ;
	    IntegralScoreManagementTable.prototype.componentWillMount = function () {
	        this.setData();
	    };
	    IntegralScoreManagementTable.prototype.edit = function (record) {
	        antd_1.message.info('点击了编辑' + record.schoolIntegralScoreItemID);
	        this.setState({
	            editData: record,
	            formType: "edit",
	            visible: true
	        });
	    };
	    //模态对话框关闭，刷新页面
	    IntegralScoreManagementTable.prototype.handleRefresh = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    IntegralScoreManagementTable.prototype.hideModal = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    IntegralScoreManagementTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    IntegralScoreManagementTable.prototype.render = function () {
	        var this_ = this;
	        var columns = [
	            {
	                title: '序号',
	                key: 'schoolIntegralScoreItemID',
	                dataIndex: 'schoolIntegralScoreItemID',
	            },
	            {
	                title: '积分活动大类',
	                key: 'rootIntegralScoreCategoryName',
	                dataIndex: 'rootIntegralScoreCategoryName',
	            },
	            {
	                title: '积分活动小类',
	                key: 'integralScoreCategoryName',
	                dataIndex: 'integralScoreCategoryName',
	            },
	            {
	                title: '其他条件',
	                key: 'condition',
	                dataIndex: 'condition',
	            },
	            {
	                title: '积分数',
	                key: 'score',
	                dataIndex: 'score',
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue", size: "small", onClick: this_.edit.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})))); },
	            }
	        ];
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(antd_1.Table, {columns: columns, dataSource: this.state.data, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true}), React.createElement(CreateIntegralScoreForm, {handleRefresh: this.handleRefresh, visible: this.state.visible, hideModal: this.hideModal, editData: this.state.editData})));
	    };
	    IntegralScoreManagementTable.defaultProps = {};
	    return IntegralScoreManagementTable;
	}(React.Component));
	module.exports = IntegralScoreManagementTable;


/***/ },

/***/ 729:
/*!***************************************************************************************!*\
  !*** ./pages/AdminPage/IntegralScoreManagement/Component/CreateIntegralScoreForm.tsx ***!
  \***************************************************************************************/
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
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	"use strict";
	var CreateIntegralScoreForm = (function (_super) {
	    __extends(CreateIntegralScoreForm, _super);
	    function CreateIntegralScoreForm(props) {
	        _super.call(this, props);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.onChange = this.onChange.bind(this);
	    }
	    CreateIntegralScoreForm.prototype.show = function (reviewProps) {
	        var editData = reviewProps.editData;
	        var setFieldsValue = this.props.form.setFieldsValue;
	        var schoolIntegralScoreItemID = editData.schoolIntegralScoreItemID;
	        var score = editData.score;
	        this.setState({
	            schoolIntegralScoreItemID: schoolIntegralScoreItemID,
	            score: score,
	        });
	        setFieldsValue({
	            integralScore: !commonFunc_1.isEmptyObject(editData) ? editData.score : "",
	        });
	    };
	    CreateIntegralScoreForm.prototype.componentWillMount = function () {
	        this.show(this.props);
	    };
	    CreateIntegralScoreForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.show(newProps);
	        }
	    };
	    CreateIntegralScoreForm.prototype.handleSubmit = function (e) {
	        var this_ = this;
	        this.props.form.validateFields(function (errors, record) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            record["schoolIntegralScoreItemID"] = this_.state.schoolIntegralScoreItemID;
	            record["score"] = this_.state.score;
	            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SET_ADMIN_INTEGRALSCOREITEM, record, function (response) {
	                this_.props.form.resetFields();
	                antd_1.message.success("保存成功");
	                this_.props.handleRefresh();
	            });
	        });
	        console.log(this.state.score + 'a 1111111111111');
	    };
	    CreateIntegralScoreForm.prototype.onChange = function (value) {
	        var this_ = this;
	        console.log('changed', value);
	        this_.setState({
	            score: value
	        });
	        console.log(this_.state.score);
	    };
	    CreateIntegralScoreForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.hideModal();
	    };
	    CreateIntegralScoreForm.prototype.render = function () {
	        var getFieldProps = this.props.form.getFieldProps;
	        var integralScoreProps = getFieldProps('integralScore', {
	            rules: [
	                { required: true, message: '请修改积分', type: "number" }
	            ],
	        });
	        var formItemLayout = {
	            labelCol: { span: 8 },
	            wrapperCol: { span: 8 },
	        };
	        var formItemLayoutInputNumber = {
	            labelCol: { span: 10 },
	            wrapperCol: { span: 8 },
	        };
	        return (React.createElement(antd_1.Modal, {title: "编辑活动积分", visible: this.props.visible, onOk: this.handleSubmit, onCancel: this.handleCancel}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, {type: "flex", justify: "center"}, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "积分活动大类："}), React.createElement(antd_1.Input, {type: "textarea", rows: 1, autosize: true, readOnly: true, style: { resize: 'none' }, placeholder: this.props.editData.rootIntegralScoreCategoryName})), React.createElement(FormItem, __assign({}, formItemLayout, {label: "积分活动小类："}), React.createElement(antd_1.Input, {type: "textarea", rows: 1, autosize: true, readOnly: true, style: { resize: 'none' }, placeholder: this.props.editData.integralScoreCategoryName})), React.createElement(FormItem, __assign({}, formItemLayoutInputNumber, {label: "积分："}), React.createElement(antd_1.InputNumber, __assign({min: 1, max: 100, onChange: this.onChange}, integralScoreProps))))))));
	    };
	    CreateIntegralScoreForm.defaultProps = {};
	    return CreateIntegralScoreForm;
	}(React.Component));
	module.exports = createForm()(CreateIntegralScoreForm);


/***/ }

});
//# sourceMappingURL=31.31.js.map