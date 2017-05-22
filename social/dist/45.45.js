webpackJsonp([45],{

/***/ 786:
/*!*******************************************!*\
  !*** ./pages/CollegeLib/CollegeIntro.tsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var CollegeIntroRequireTable = __webpack_require__(/*! ./Component/CollegeIntroRequireTable */ 787);
	var CollegeBatchResult = __webpack_require__(/*! ./Component/CollegeBatchResult */ 788);
	var ajaxUtil_1 = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! ../../actions/CollegeLib/CollegeLibActionTypes */ 368);
	"use strict";
	/**
	 * 院校库---院校介绍
	 */
	var TabPane = antd_1.Tabs.TabPane;
	var CollegeIntro = (function (_super) {
	    __extends(CollegeIntro, _super);
	    function CollegeIntro(props) {
	        _super.call(this, props);
	    }
	    CollegeIntro.prototype.getCollegeDetail = function () {
	        var postData = this.props.location.query;
	        var responseData = ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.GET_COLLEGELIB_COLLEGEDETAIL, postData).result;
	        return responseData;
	    };
	    CollegeIntro.prototype.render = function () {
	        var college = this.getCollegeDetail();
	        var collegeInfo = college.collegeInfo;
	        var introduction = college.introduction;
	        return (React.createElement("div", {className: "main-container", style: { padding: "0px" }}, React.createElement("div", {className: "block-box-shadows", style: { marginTop: "2.4rem" }}, React.createElement("div", {className: "school-intro-gray"}, React.createElement("img", {src: collegeInfo.logo, width: "90", className: "pull-left"}), React.createElement("div", {className: "rightText"}, React.createElement("div", {className: "line-one"}, React.createElement("h3", null, collegeInfo.collegeName), collegeInfo.collegeLevel.map(function (level, index) {
	            return React.createElement("div", {className: "school-level", key: index}, level.collegeLevelName);
	        })), React.createElement("div", {className: "line-two"}, React.createElement("span", null, collegeInfo.collegeEnglishName), React.createElement("i", {className: "fa fa-map-marker am-padding-left am-padding-right-xs"}), React.createElement("span", null, collegeInfo.province))))), React.createElement(antd_1.Row, {className: "block-box-shadows am-margin-top-lg"}, React.createElement(antd_1.Col, {span: 16}, React.createElement("div", {className: "card-container"}, React.createElement(antd_1.Tabs, {type: "card"}, introduction.map(function (item, index) {
	            var component = null;
	            if (item.introductionID == "intro") {
	                component = React.createElement("div", {className: "school-intro-simple"}, item.introductionValue);
	            }
	            else if (item.introductionID == "require") {
	                component = React.createElement(CollegeIntroRequireTable, {data: item.introductionValue});
	            }
	            else if (item.introductionID == "scoreLine") {
	                component = React.createElement(CollegeBatchResult, {data: item.introductionValue});
	            }
	            return React.createElement(TabPane, {tab: item.introductionKey, key: index + 1}, component);
	        })))), React.createElement(antd_1.Col, {span: 8, style: { paddingLeft: "40px" }}, React.createElement("div", {className: "school-intro-rightBox"}, React.createElement("img", {src: collegeInfo.image}), React.createElement("h3", {className: "college-name"}, collegeInfo.collegeName), React.createElement("div", {className: "intro"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, "类别"), React.createElement(antd_1.Col, {span: 12}, collegeInfo.foundationYear)), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, "隶属于"), React.createElement(antd_1.Col, {span: 12}, collegeInfo.belongTo)), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, "繁殖方法"), React.createElement(antd_1.Col, {span: 12}, collegeInfo.totalStudentCount)), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, "栽培技术"), React.createElement(antd_1.Col, {span: 12}, collegeInfo.academicianCount)), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, "品种分类"), React.createElement(antd_1.Col, {span: 12}, collegeInfo.keyDisciplineCount)), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, "经济价值"), React.createElement(antd_1.Col, {span: 12}, collegeInfo.collegeProp))))))));
	    };
	    CollegeIntro.defaultProps = {};
	    return CollegeIntro;
	}(React.Component));
	module.exports = CollegeIntro;


/***/ },

/***/ 787:
/*!*****************************************************************!*\
  !*** ./pages/CollegeLib/Component/CollegeIntroRequireTable.tsx ***!
  \*****************************************************************/
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
	// width:75   width:110  width:100
	var columns = [
	    {
	        title: '性味',
	        dataIndex: 'majorType',
	        key: 'majorType',
	    }, {
	        title: '功效',
	        dataIndex: 'majorName',
	        key: 'majorName',
	    }, {
	        title: '归经',
	        dataIndex: 'requireSubject',
	        key: 'requireSubject',
	    }, {
	        title: '主治',
	        dataIndex: 'subMajor',
	        key: 'subMajor',
	    }
	];
	var CollegeIntroRequireTable = (function (_super) {
	    __extends(CollegeIntroRequireTable, _super);
	    function CollegeIntroRequireTable(props) {
	        _super.call(this, props);
	        this.state = {
	            pagination: {}
	        };
	    }
	    CollegeIntroRequireTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    CollegeIntroRequireTable.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("div", {className: "school-intro-table"}, React.createElement(antd_1.Table, {columns: columns, dataSource: this.props.data, pagination: this.state.pagination, onChange: this.handleTableChange, bordered: true})));
	    };
	    return CollegeIntroRequireTable;
	}(React.Component));
	module.exports = CollegeIntroRequireTable;


/***/ },

/***/ 788:
/*!***********************************************************!*\
  !*** ./pages/CollegeLib/Component/CollegeBatchResult.tsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var CollegeBatchSingle = __webpack_require__(/*! ./CollegeBatchSingle */ 789);
	"use strict";
	var CollegeBatchResult = (function (_super) {
	    __extends(CollegeBatchResult, _super);
	    function CollegeBatchResult(props) {
	        _super.call(this, props);
	    }
	    CollegeBatchResult.prototype.render = function () {
	        var this_ = this;
	        var hasScience = !commonFunc_1.isEmptyObject(this.props.data.science) ? true : false;
	        var hasArt = !commonFunc_1.isEmptyObject(this.props.data.art) ? true : false;
	        var noResultTip = React.createElement("div", {className: "am-margin-top-sm", style: { color: "grey" }}, React.createElement(antd_1.Icon, {type: "frown"}), "暂无数据");
	        return (React.createElement("div", {className: "subject-batch-result"}, React.createElement("div", null, React.createElement("b", null, "内服")), React.createElement(antd_1.Row, null, hasScience &&
	            this.props.data.science.map(function (batch, index) {
	                return React.createElement(CollegeBatchSingle, {batchSingle: batch, parentDIV: "col-12", key: index});
	            }), !hasScience && noResultTip), React.createElement("div", {className: "am-margin-top-sm"}, React.createElement("b", null, "外用")), React.createElement(antd_1.Row, null, hasArt &&
	            this.props.data.art.map(function (batch, index) {
	                return React.createElement(CollegeBatchSingle, {batchSingle: batch, parentDIV: "col-12", key: index});
	            }), !hasArt && noResultTip)));
	    };
	    return CollegeBatchResult;
	}(React.Component));
	module.exports = CollegeBatchResult;


/***/ },

/***/ 789:
/*!***********************************************************!*\
  !*** ./pages/CollegeLib/Component/CollegeBatchSingle.tsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var SubjectBatchSingle = (function (_super) {
	    __extends(SubjectBatchSingle, _super);
	    function SubjectBatchSingle(props) {
	        _super.call(this, props);
	    }
	    SubjectBatchSingle.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("div", {className: this.props.parentDIV}, React.createElement("div", {className: "school-score-single-title"}, this.props.batchSingle.batch), React.createElement("div", {className: "school-score-single"}, React.createElement("ul", {className: "header am-avg-sm-4"}, React.createElement("li", null, "方剂"), React.createElement("li", null, "功效"), React.createElement("li", null, "成分"), React.createElement("li", null, "出处")), this_.props.batchSingle.collegeAdmissionLines.map(function (score, index) {
	            return React.createElement("ul", {className: "am-avg-sm-4", key: index}, React.createElement("li", null, score.year), React.createElement("li", null, score.batchScore), React.createElement("li", null, score.admissionScore), React.createElement("li", null, score.diffWithBatchScore));
	        }))));
	    };
	    return SubjectBatchSingle;
	}(React.Component));
	module.exports = SubjectBatchSingle;


/***/ }

});
//# sourceMappingURL=45.45.js.map