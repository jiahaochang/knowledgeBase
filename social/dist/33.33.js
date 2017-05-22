webpackJsonp([33],{

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

/***/ 734:
/*!***********************************************************************!*\
  !*** ./pages/AdminPage/SchoolStarManagement/SchoolStarManagement.tsx ***!
  \***********************************************************************/
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
	var SchoolStarManagementTable = __webpack_require__(/*! ./Component/SchoolStarManagementTable */ 735);
	"use strict";
	var SchoolStarManagement = (function (_super) {
	    __extends(SchoolStarManagement, _super);
	    function SchoolStarManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    SchoolStarManagement.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardWithTitleBox, {title: "校园寻星", subComponent: React.createElement(SchoolStarManagementTable, null)}))));
	    };
	    SchoolStarManagement.defaultProps = {};
	    return SchoolStarManagement;
	}(React.Component));
	module.exports = SchoolStarManagement;


/***/ },

/***/ 735:
/*!**************************************************************************************!*\
  !*** ./pages/AdminPage/SchoolStarManagement/Component/SchoolStarManagementTable.tsx ***!
  \**************************************************************************************/
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
	var CheckboxGroup = antd_1.Checkbox.Group;
	"use strict";
	/**
	 * 积分管理---积分管理table
	 */
	var SchoolStarManagementTable = (function (_super) {
	    __extends(SchoolStarManagementTable, _super);
	    function SchoolStarManagementTable(props) {
	        _super.call(this, props);
	        this.state = {
	            date: {},
	            data: []
	        };
	    }
	    SchoolStarManagementTable.prototype.setData = function () {
	        //console.log('2222222');
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.GET_ADMIN_STAROPTIONS, function (response) {
	            var data = response.result.schoolStarOptions;
	            this_.setState({
	                data: data,
	            });
	        });
	    };
	    ;
	    SchoolStarManagementTable.prototype.componentWillMount = function () {
	        var myDate = new Date();
	        this.setState({
	            date: myDate
	        });
	        this.setData();
	    };
	    //模态对话框关闭，刷新页面
	    SchoolStarManagementTable.prototype.handleRefresh = function () {
	    };
	    SchoolStarManagementTable.prototype.onChange = function () {
	        console.log('onchange');
	    };
	    SchoolStarManagementTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	    };
	    SchoolStarManagementTable.prototype.render = function () {
	        var date = this.state.date;
	        var options = [
	            { label: '品德表现之星', value: 'Apple' },
	            { label: '校内活动之星', value: 'Pear' },
	            { label: '选修课之星', value: 'Orange' },
	            { label: '艺术素养之星', value: '222' },
	            { label: '运动健康之星', value: '33' },
	            { label: '校外实践之星', value: '44' },
	            { label: '社团之星', value: '55' },
	            { label: '创新实践之星', value: '66' },
	        ];
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement("div", null, "请选择评比条目：", React.createElement(CheckboxGroup, {options: this.state.data, onChange: this.onChange}), React.createElement("br", null)), React.createElement("div", null, "截止日期：", date.getFullYear(), "年", date.getMonth() + 1, "月", date.getDate() + 1, "日")));
	    };
	    SchoolStarManagementTable.defaultProps = {};
	    return SchoolStarManagementTable;
	}(React.Component));
	module.exports = SchoolStarManagementTable;


/***/ }

});
//# sourceMappingURL=33.33.js.map