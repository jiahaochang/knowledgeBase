webpackJsonp([28],{

/***/ 509:
/*!************************************************!*\
  !*** ./common/Component/TextareaWithTitle.tsx ***!
  \************************************************/
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
	var TextareaWithButton = __webpack_require__(/*! ./TextareaWithButton */ 510);
	"use strict";
	/**
	 * 带有标题栏的文本框
	 */
	var TextareaWithTitle = (function (_super) {
	    __extends(TextareaWithTitle, _super);
	    function TextareaWithTitle(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TextareaWithTitle.prototype.render = function () {
	        var lengthMsg = "";
	        var integralScoreMsg = "";
	        var _a = this.props, minLength = _a.minLength, score = _a.score;
	        if (minLength) {
	            lengthMsg = "(不少于" + minLength + "字)";
	        }
	        if (score) {
	            integralScoreMsg = "积分：" + score + "分";
	        }
	        var className = "textarea-with-title";
	        if (this.props.className) {
	            className = className + " " + this.props.className;
	        }
	        return (React.createElement("div", {className: className}, this.props.title &&
	            React.createElement("div", {className: "title"}, React.createElement("span", null, this.props.title, lengthMsg), React.createElement("span", null, integralScoreMsg)), React.createElement(TextareaWithButton, __assign({}, this.props))));
	    };
	    TextareaWithTitle.defaultProps = {};
	    return TextareaWithTitle;
	}(React.Component));
	module.exports = TextareaWithTitle;


/***/ },

/***/ 510:
/*!*************************************************!*\
  !*** ./common/Component/TextareaWithButton.tsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var TermAnalysisConfig_1 = __webpack_require__(/*! common/Config/TermAnalysisConfig */ 511);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	"use strict";
	/**
	 *textarea带有提交的按钮
	 * 传值---textarea初始化的默认值
	 */
	var TextareaWithButton = (function (_super) {
	    __extends(TextareaWithButton, _super);
	    function TextareaWithButton(props) {
	        _super.call(this, props);
	        this.state = {
	            inputValue: this.props.content ? this.props.content : "",
	            isEditing: false,
	            minLength: this.props.minLength ? this.props.minLength : TermAnalysisConfig_1.defaultMinLength,
	            maxLength: this.props.maxLength ? this.props.maxLength : TermAnalysisConfig_1.defaultMaxLength,
	            errorMsg: ""
	        };
	        this.handleInputChange = this.handleInputChange.bind(this);
	        this.handleSubmitChange = this.handleSubmitChange.bind(this);
	        this.handleCancelChange = this.handleCancelChange.bind(this);
	        this.handleEditChange = this.handleEditChange.bind(this);
	    }
	    TextareaWithButton.prototype.componentWillReceiveProps = function (nextProps) {
	        if (Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)) {
	            this.setState({
	                inputValue: nextProps.content ? nextProps.content : "",
	            });
	        }
	    };
	    TextareaWithButton.prototype.handleInputChange = function (e) {
	        var strings = e.target.value;
	        if (strings.length > this.state.maxLength) {
	            strings = strings.substr(0, this.state.maxLength);
	        }
	        this.setState({
	            errorMsg: "",
	            inputValue: strings,
	        });
	    };
	    //编辑按钮
	    TextareaWithButton.prototype.handleEditChange = function () {
	        this.setState({
	            isEditing: true,
	        });
	    };
	    //保存按钮
	    TextareaWithButton.prototype.handleSubmitChange = function () {
	        if (!this.state.inputValue || this.state.inputValue.length < this.state.minLength) {
	            this.setState({
	                errorMsg: "请输入不少于" + this.state.minLength + "个字符"
	            });
	        }
	        else if (this.state.inputValue.length > this.state.maxLength) {
	            this.setState({
	                errorMsg: "请输入不多于" + this.state.maxLength + "个字符"
	            });
	        }
	        else {
	            this.props.submit(this.state.inputValue);
	            if (this.props.resetAfterSave) {
	                this.setState({
	                    isEditing: false,
	                    inputValue: ""
	                });
	            }
	            else {
	                this.setState({
	                    isEditing: false,
	                });
	            }
	        }
	    };
	    //取消按钮
	    TextareaWithButton.prototype.handleCancelChange = function () {
	        this.setState({
	            isEditing: false,
	            inputValue: this.props.content,
	            errorMsg: ""
	        });
	    };
	    TextareaWithButton.prototype.render = function () {
	        var readOnly = this.props.readOnly ? true : false;
	        var saveBtnText = this.props.saveBtnText ? this.props.saveBtnText : "保存";
	        var btns = (!this.state.isEditing) ? [
	            React.createElement("div", {key: "1"}, React.createElement("span", {style: { color: "red", paddingRight: "20px" }}, this.state.errorMsg), React.createElement(antd_1.Button, {className: "btn-blue", size: "small", onClick: this.handleEditChange}, "编辑"))
	        ] : [
	            React.createElement("div", {key: "2"}, React.createElement("span", {style: { color: "red", paddingRight: "20px" }}, this.state.errorMsg), React.createElement(antd_1.Button, {className: "btn-blue", size: "small", onClick: this.handleSubmitChange}, saveBtnText), React.createElement(antd_1.Button, {size: "small", onClick: this.handleCancelChange}, "取消"))
	        ];
	        //一行100字，最少显示4行
	        var rows = Math.ceil(this.state.maxLength / 100);
	        rows = rows > 4 ? rows : 4;
	        return (React.createElement("div", {className: "textarea-with-button"}, React.createElement(antd_1.Input, {type: "textarea", value: this.state.inputValue, onChange: this.handleInputChange, placeholder: this.props.placeholder, style: {}, disabled: !this.state.isEditing, rows: rows}), !readOnly && this.props.buttonShow &&
	            React.createElement("div", {className: "btn-groups"}, btns)));
	    };
	    TextareaWithButton.defaultProps = {
	        buttonShow: true
	    };
	    return TextareaWithButton;
	}(React.Component));
	module.exports = TextareaWithButton;


/***/ },

/***/ 511:
/*!*********************************************!*\
  !*** ./common/Config/TermAnalysisConfig.ts ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	//textarea默认输入的字符
	exports.defaultMinLength = 5;
	exports.defaultMaxLength = 500;


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

/***/ 705:
/*!***********************************************************************!*\
  !*** ./pages/AdminPage/MonthThemeManagement/MonthThemeManagement.tsx ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var AdminBasicInfo = __webpack_require__(/*! ../Component/AdminBasicInfo */ 678);
	var TextareaWithTitle = __webpack_require__(/*! ../../../common/Component/TextareaWithTitle */ 509);
	var TabPane = antd_1.Tabs.TabPane;
	var Option = antd_1.Select.Option;
	"use strict";
	var MonthThemeManagement = (function (_super) {
	    __extends(MonthThemeManagement, _super);
	    function MonthThemeManagement(props) {
	        _super.call(this, props);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.state = {};
	    }
	    MonthThemeManagement.prototype.handleSubmit = function (monthID, type, words) {
	        console.log(words + monthID + type);
	    };
	    MonthThemeManagement.prototype.handleChange = function () {
	    };
	    MonthThemeManagement.prototype.render = function () {
	        var _this = this;
	        var this_ = this;
	        var twelveMonthSummaryData = [
	            {
	                monthID: "01",
	                monthName: "一月"
	            },
	            {
	                monthID: "02",
	                monthName: "二月"
	            },
	            {
	                monthID: "03",
	                monthName: "三月"
	            },
	            {
	                monthID: "04",
	                monthName: "四月"
	            },
	        ];
	        return (React.createElement("div", null, React.createElement(AdminBasicInfo, null), React.createElement("div", {className: "block-box-shadows am-margin-top"}, React.createElement(antd_1.Tabs, {defaultActiveKey: "0"}, twelveMonthSummaryData.map(function (item, index) { return (React.createElement(TabPane, {tab: item.monthName, key: index}, React.createElement("div", {key: index, style: { padding: "20px" }}, React.createElement(antd_1.Select, {defaultValue: "2016", style: { width: 200 }, onChange: this_.handleChange}, React.createElement(Option, {value: "2016"}, "2016年"), React.createElement(Option, {value: "2017"}, "2017年")), React.createElement(TextareaWithTitle, {submit: _this.handleSubmit.bind(_this, item.monthID, "theme"), title: "月度主题", className: "am-margin-bottom", content: "默认评论"}), React.createElement(TextareaWithTitle, {submit: _this.handleSubmit.bind(_this, item.monthID, "connotation"), title: "主题内涵", className: "am-margin-bottom"})))); })))));
	    };
	    MonthThemeManagement.defaultProps = {};
	    return MonthThemeManagement;
	}(React.Component));
	module.exports = MonthThemeManagement;


/***/ }

});
//# sourceMappingURL=28.28.js.map