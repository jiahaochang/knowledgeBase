webpackJsonp([30],{

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

/***/ 724:
/*!***************************************************************!*\
  !*** ./pages/AdminPage/RecordManagement/RecordManagement.tsx ***!
  \***************************************************************/
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
	var StudentRecordManagementTable = __webpack_require__(/*! ./Component/StudentRecordManagementTable */ 725);
	"use strict";
	var RecordManagement = (function (_super) {
	    __extends(RecordManagement, _super);
	    function RecordManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    RecordManagement.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardWithTitleBox, {title: "学生档案", subComponent: React.createElement(StudentRecordManagementTable, null)}))));
	    };
	    RecordManagement.defaultProps = {};
	    return RecordManagement;
	}(React.Component));
	module.exports = RecordManagement;


/***/ },

/***/ 725:
/*!*************************************************************************************!*\
  !*** ./pages/AdminPage/RecordManagement/Component/StudentRecordManagementTable.tsx ***!
  \*************************************************************************************/
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
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/AdminPage/AdminPageActionTypes */ 382);
	"use strict";
	/**
	 * 档案管理---学生档案table
	 */
	var StudentRecordManagementTable = (function (_super) {
	    __extends(StudentRecordManagementTable, _super);
	    function StudentRecordManagementTable(props) {
	        _super.call(this, props);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            visible: false,
	            editData: {},
	            formType: "",
	        };
	    }
	    StudentRecordManagementTable.prototype.componentWillMount = function () {
	        this.setData();
	    };
	    StudentRecordManagementTable.prototype.setData = function () {
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.READ_ADMIN_STUDENTRECORD, function (response) {
	            var data = response.result.studentArchives;
	            this_.setState({
	                data: data,
	                loading: !this_.state.loading
	            });
	            console.log(this_.state.data);
	        });
	    };
	    StudentRecordManagementTable.prototype.hideModal = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    StudentRecordManagementTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    StudentRecordManagementTable.prototype.editInfo = function (record) {
	        this.setState({
	            editData: record,
	            formType: "edit",
	            visible: true
	        });
	    };
	    StudentRecordManagementTable.prototype.handleRefresh = function () {
	        this.setState({
	            visible: false
	        });
	        this.setData();
	    };
	    StudentRecordManagementTable.prototype.confirm = function () {
	        antd_1.message.info('点击了确定');
	    };
	    StudentRecordManagementTable.prototype.render = function () {
	        var this_ = this;
	        var deleteText = "确定要下载该学生的档案吗";
	        var arr = [1, 2, 3, 4, 5, 6, 7];
	        var columns = [
	            {
	                title: '序号',
	                key: 'serialNumber',
	                dataIndex: 'serialNumber',
	            },
	            {
	                title: '账号',
	                key: 'systemID',
	                dataIndex: 'systemID',
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
	                title: '学期',
	                key: 'termName',
	                dataIndex: 'termName',
	            },
	            {
	                title: '学生档案',
	                key: 'recoreOPT',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement("img", {src: "vendor/images/pdf.png", width: "40"}))); },
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.confirm}, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs"}, "下载", React.createElement("i", {className: "fa fa-cloud-download"}))), React.createElement(antd_1.Button, {className: "btn-blue am-margin-left-xs"}, "查看", React.createElement("i", {className: "fa fa-eye"})))); },
	            }
	        ];
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(antd_1.Table, {columns: columns, dataSource: this.state.data, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true})));
	    };
	    StudentRecordManagementTable.defaultProps = {};
	    return StudentRecordManagementTable;
	}(React.Component));
	module.exports = StudentRecordManagementTable;


/***/ }

});
//# sourceMappingURL=30.30.js.map