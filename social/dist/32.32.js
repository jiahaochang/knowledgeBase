webpackJsonp([32],{

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

/***/ 731:
/*!*******************************************************!*\
  !*** ./pages/AdminPage/ContentAudit/ContentAudit.tsx ***!
  \*******************************************************/
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
	var ContentAuditTable = __webpack_require__(/*! ./Component/ContentAuditTable */ 732);
	"use strict";
	/**
	 * 内容审核
	 */
	var ContentAudit = (function (_super) {
	    __extends(ContentAudit, _super);
	    function ContentAudit(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    ContentAudit.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardWithTitleBox, {title: "内容审核", subComponent: React.createElement(ContentAuditTable, null)}))));
	    };
	    ContentAudit.defaultProps = {};
	    return ContentAudit;
	}(React.Component));
	module.exports = ContentAudit;


/***/ },

/***/ 732:
/*!**********************************************************************!*\
  !*** ./pages/AdminPage/ContentAudit/Component/ContentAuditTable.tsx ***!
  \**********************************************************************/
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
	 * 内容审核---内容审核table
	 */
	var ContentAuditTable = (function (_super) {
	    __extends(ContentAuditTable, _super);
	    function ContentAuditTable(props) {
	        _super.call(this, props);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	        };
	    }
	    ContentAuditTable.prototype.componentWillMount = function () {
	        var data = [
	            {
	                key: '1',
	                serialNumber: '1',
	                reportedContent: "小苹果儿",
	                reportedDesc: "含有人身攻击",
	                reportedType: "虚假信息",
	                reportedMan: "郭德钢",
	                reportedDate: "2015/5/16-20:08",
	                reportedWho: "岳云鹏",
	                status: true
	            },
	            {
	                key: '2',
	                serialNumber: '2',
	                reportedContent: "小苹果儿",
	                reportedDesc: "含有人身攻击",
	                reportedType: "虚假信息",
	                reportedMan: "郭德钢",
	                reportedDate: "2015/5/16-20:08",
	                reportedWho: "岳云鹏",
	                status: false
	            },
	            {
	                key: '3',
	                serialNumber: '3',
	                reportedContent: "小苹果儿",
	                reportedDesc: "含有人身攻击",
	                reportedType: "虚假信息",
	                reportedMan: "郭德钢",
	                reportedDate: "2015/5/16-20:08",
	                reportedWho: "岳云鹏",
	                status: true
	            }
	        ];
	        this.setState({
	            data: data,
	            loading: !this.state.loading,
	        });
	    };
	    ContentAuditTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    ContentAuditTable.prototype.render = function () {
	        var this_ = this;
	        var columns = [
	            {
	                title: '序号',
	                key: 'serialNumber',
	                dataIndex: 'serialNumber',
	            },
	            {
	                title: '举报内容',
	                key: 'reportedContent',
	                render: function (text, record) { return (React.createElement("a", null, record.reportedContent)); },
	            },
	            {
	                title: '举报说明',
	                key: 'reportedDesc',
	                dataIndex: 'reportedDesc',
	            },
	            {
	                title: '举报类型',
	                key: 'reportedType',
	                dataIndex: 'reportedType',
	            },
	            {
	                title: '举报人',
	                key: 'reportedMan',
	                dataIndex: 'reportedMan',
	            },
	            {
	                title: '举报时间',
	                key: 'reportedDate',
	                dataIndex: 'reportedDate',
	            },
	            {
	                title: '被举报人',
	                key: 'reportedWho',
	                dataIndex: 'reportedWho',
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", {className: "am-text-lg"}, React.createElement("i", {className: "fa fa-check-circle-o am-padding-right-sm"}), React.createElement("i", {className: "fa fa-trash-o am-padding-right-sm"}), React.createElement("i", {className: "fa fa-flag-o"}))); },
	            },
	            {
	                title: '审核状态',
	                key: 'auditStatus',
	                render: function (text, record) {
	                    if (record.status) {
	                        return React.createElement(antd_1.Button, {className: "btn-blue"}, "已审核");
	                    }
	                    else {
	                        return React.createElement(antd_1.Button, {className: "btn-grey"}, "未审核");
	                    }
	                }
	            },
	        ];
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(antd_1.Table, {columns: columns, dataSource: this.state.data, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true})));
	    };
	    ContentAuditTable.defaultProps = {};
	    return ContentAuditTable;
	}(React.Component));
	module.exports = ContentAuditTable;


/***/ }

});
//# sourceMappingURL=32.32.js.map