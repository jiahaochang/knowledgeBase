webpackJsonp([48],{

/***/ 442:
/*!************************************************!*\
  !*** ./common/Component/CardTitleWithLine.tsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var IconRotate180WithClick = __webpack_require__(/*! ./IconRotate180WithClick */ 443);
	"use strict";
	var CardTitleWithLine = (function (_super) {
	    __extends(CardTitleWithLine, _super);
	    function CardTitleWithLine(props) {
	        _super.call(this, props);
	        this.state = {
	            scaleName: "收起"
	        };
	        this.handleClick = this.handleClick.bind(this);
	    }
	    CardTitleWithLine.prototype.handleClick = function (isCollapsed) {
	        this.props.toggleCollapse(isCollapsed);
	    };
	    CardTitleWithLine.prototype.render = function () {
	        return (React.createElement("div", {className: "text-colorLine " + this.props.className, style: this.props.style}, this.props.titleIconType &&
	            React.createElement("i", {className: "fa " + this.props.titleIconType}), this.props.title, React.createElement("span", {className: "rightText"}, this.props.rightText, this.props.scaleFlag && React.createElement(IconRotate180WithClick, {handleClick: this.handleClick}))));
	    };
	    CardTitleWithLine.defaultProps = {
	        className: ""
	    };
	    return CardTitleWithLine;
	}(React.Component));
	module.exports = CardTitleWithLine;


/***/ },

/***/ 443:
/*!*****************************************************!*\
  !*** ./common/Component/IconRotate180WithClick.tsx ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var IconRotate180WithClick = (function (_super) {
	    __extends(IconRotate180WithClick, _super);
	    function IconRotate180WithClick(props) {
	        _super.call(this, props);
	        this.state = {
	            collapsed: false
	        };
	        this.handleClick = this.handleClick.bind(this);
	    }
	    IconRotate180WithClick.prototype.handleClick = function () {
	        this.props.handleClick(!this.state.collapsed);
	        this.setState({
	            collapsed: !this.state.collapsed
	        });
	    };
	    IconRotate180WithClick.prototype.render = function () {
	        var propsClassName = this.props.className ? this.props.className : " anticon anticon-circle-o-right ";
	        var collapsedClassName = this.state.collapsed ? " " : " expand";
	        var iconClassName = " collapse " + propsClassName + collapsedClassName;
	        return (React.createElement("span", {className: "scaletext", onClick: this.handleClick}, this.props.text, React.createElement("i", {className: iconClassName})));
	    };
	    return IconRotate180WithClick;
	}(React.Component));
	module.exports = IconRotate180WithClick;


/***/ },

/***/ 781:
/*!****************************************!*\
  !*** ./common/Component/SearchBox.tsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var SearchBox = (function (_super) {
	    __extends(SearchBox, _super);
	    function SearchBox(props) {
	        _super.call(this, props);
	        this.searchWithInput = this.searchWithInput.bind(this);
	        this.rightSearch = this.rightSearch.bind(this);
	        this.handlerKeyUp = this.handlerKeyUp.bind(this);
	    }
	    //input回车事件
	    SearchBox.prototype.handlerKeyUp = function (event) {
	        if (event.keyCode === 13) {
	            var value = event.target.value;
	            if (!value)
	                return false;
	            this.props.searchCallBack(value);
	        }
	    };
	    //搜索框点击事件
	    SearchBox.prototype.searchWithInput = function (e) {
	        var value = $("#searchInput").val();
	        if ($.trim(value) != "") {
	            this.props.searchCallBack(value);
	        }
	    };
	    //右边点击事件
	    SearchBox.prototype.rightSearch = function (e) {
	        this.props.rightTextCallBack(e.currentTarget.innerText);
	    };
	    SearchBox.prototype.render = function () {
	        var this_ = this;
	        var rightFlag = this.props.rightContent == undefined ? false : true;
	        return (React.createElement("div", {className: "search-major-box"}, React.createElement("span", {className: "pull-left"}, this.props.title), React.createElement("div", {className: "search-box-orange"}, React.createElement("input", {type: "text", id: "searchInput", onKeyUp: this.handlerKeyUp}), React.createElement("i", {className: " anticon anticon-search"}), React.createElement("button", {onClick: this.searchWithInput}, "搜索")), rightFlag &&
	            React.createElement("div", {className: "pull-right"}, this.props.rightContent.map(function (content, index) {
	                return React.createElement("a", {className: "blue-raduis-box", key: index, onClick: this_.rightSearch}, content);
	            }))));
	    };
	    SearchBox.defaultProps = {};
	    return SearchBox;
	}(React.Component));
	module.exports = SearchBox;


/***/ },

/***/ 801:
/*!*********************************!*\
  !*** ./pages/JobLib/JobLib.tsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ItemsActions = __webpack_require__(/*! ../../actions/JobLib/JobLibAction */ 802);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var SearchBox = __webpack_require__(/*! ../../common/Component/SearchBox */ 781);
	var PrescriptionTypeOptions = __webpack_require__(/*! ./Component/PrescriptionTypeOptions */ 803);
	var PrescriptionTypeOptionsSubcategories = __webpack_require__(/*! ./Component/PrescriptionTypeOptionsSubcategories */ 804);
	"use strict";
	var ajaxUtil_1 = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../actions/JobLib/JobLibActionTypes */ 371);
	var context = __webpack_require__(/*! ./JobLibContext */ 806);
	/**
	 * 院校库
	 */
	var JobLib = (function (_super) {
	    __extends(JobLib, _super);
	    function JobLib(props) {
	        _super.call(this, props);
	        this.searchWithInput = this.searchWithInput.bind(this);
	    }
	    //搜索框搜索院校列表
	    JobLib.prototype.searchWithInput = function (val) {
	        //this.props.actions.searchJobType({jobLibSearchboxInput:val});
	        this.setState({ searchKeyWord: val });
	        this.refreshCurrentSubJobCategoryID("");
	    };
	    //点击相关职业的关键词触发事件
	    JobLib.prototype.refreshCurrentSubJobCategoryID = function (e) {
	        if (e === "") {
	            this.setState({ currentSubJobCategoryID: "" });
	        }
	        else {
	            this.setState({ currentSubJobCategoryID: e.currentTarget.id });
	        }
	    };
	    //点击搜索框右边“共有职位506种”触发事件,返回未搜索状态
	    JobLib.prototype.rightSearch = function () {
	        this.setState({ searchKeyWord: "" });
	        this.refreshCurrentSubJobCategoryID("");
	    };
	    JobLib.prototype.componentWillMount = function () {
	        var jobLibResponse = ajaxUtil_1.getDataByActionID(ActionTypes.GET_JOBLIB_JOBLIB);
	        context.setjobLibResponseData(jobLibResponse.result);
	        this.setState({ searchKeyWord: "" });
	    };
	    JobLib.prototype.render = function () {
	        var jobCategory = context.getjobLibResponseData().jobCategory;
	        var jobCount = "共有方剂" + context.getjobLibResponseData().jobCount + "种";
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 17}, React.createElement("div", {className: "mlr20"}, React.createElement("div", {className: "block-box-shadows"}, React.createElement(SearchBox, {title: "输入方剂关键词", searchCallBack: this.searchWithInput, rightContent: [jobCount], rightTextCallBack: this.rightSearch.bind(this)})), React.createElement(PrescriptionTypeOptionsSubcategories, {searchKeyWord: this.state.searchKeyWord, currentSubJobCategoryID: this.state.currentSubJobCategoryID, refreshCurrentSubJobCategoryID: this.refreshCurrentSubJobCategoryID.bind(this)}))), React.createElement(antd_1.Col, {span: 7}, React.createElement(PrescriptionTypeOptions, {jobCategoryOptions: jobCategory, searchKeyWord: this.state.searchKeyWord, handleSearchWithInput: this.searchWithInput.bind(this)})))));
	    };
	    JobLib.defaultProps = {};
	    return JobLib;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    jobLibState: state.jobLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(JobLib);


/***/ },

/***/ 802:
/*!****************************************!*\
  !*** ./actions/JobLib/JobLibAction.ts ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actionTypes = __webpack_require__(/*! ./JobLibActionTypes */ 371);
	function mergeJobOptionsJob(state) {
	    return {
	        type: actionTypes.GET_JOBLIB_JOBLIB,
	        mergedState: state
	    };
	}
	exports.mergeJobOptionsJob = mergeJobOptionsJob;
	function searchJobType(state) {
	    return {
	        type: actionTypes.GET_JOBLIB_SEARCHRESULT,
	        mergedState: state
	    };
	}
	exports.searchJobType = searchJobType;
	function getJobIntroduction(state) {
	    return {
	        type: actionTypes.GET_JOBLIB_JOBINTRODUCTION,
	        mergedState: state
	    };
	}
	exports.getJobIntroduction = getJobIntroduction;


/***/ },

/***/ 803:
/*!************************************************************!*\
  !*** ./pages/JobLib/Component/PrescriptionTypeOptions.tsx ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ItemsActions = __webpack_require__(/*! ../../../actions/JobLib/JobLibAction */ 802);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	"use strict";
	var JobOptions = (function (_super) {
	    __extends(JobOptions, _super);
	    function JobOptions(props) {
	        _super.call(this, props);
	        this.showActive = this.showActive.bind(this);
	    }
	    //条件点击事件
	    JobOptions.prototype.showActive = function (e) {
	        var obj = $(e.currentTarget);
	        if (!obj.hasClass("active")) {
	            obj.addClass("active").siblings().removeClass("active");
	            this.props.actions.mergeJobOptionsJob({ currentJobOption: { jobCategoryID: e.currentTarget.id, jobCategoryName: obj.text() } });
	            //点击后恢复到未搜索状态
	            this.props.handleSearchWithInput("");
	            $("#searchInput").val("");
	        }
	    };
	    JobOptions.prototype.componentWillMount = function () {
	        this.props.actions.mergeJobOptionsJob({
	            currentJobOption: this.props.jobCategoryOptions[0]
	        });
	    };
	    JobOptions.prototype.render = function () {
	        var this_ = this;
	        var jobSearchInput = this.props.searchKeyWord;
	        var currentJobCategoryID = "";
	        if (jobSearchInput != "") {
	            currentJobCategoryID = "";
	        }
	        else {
	            currentJobCategoryID = this.props.jobLibState.toJS().currentJobOption.jobCategoryID;
	        }
	        return (React.createElement("div", {className: "profession-screen-single block-box-shadows"}, React.createElement("h3", {className: "profession-screen-title"}, "剂型"), React.createElement("ul", {className: "profession-screen-content am-cf"}, this.props.jobCategoryOptions.map(function (option, index) {
	            if (currentJobCategoryID == option.jobCategoryID) {
	                var activeClassName = "active";
	            }
	            else {
	                var activeClassName = "";
	            }
	            return React.createElement("li", {key: index, className: activeClassName, onClick: this_.showActive, id: option.jobCategoryID}, option.jobCategoryName);
	        }))));
	    };
	    JobOptions.defaultProps = {};
	    return JobOptions;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    jobLibState: state.jobLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(JobOptions);


/***/ },

/***/ 804:
/*!*************************************************************************!*\
  !*** ./pages/JobLib/Component/PrescriptionTypeOptionsSubcategories.tsx ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ItemsActions = __webpack_require__(/*! ../../../actions/JobLib/JobLibAction */ 802);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var CardTitleWithLine = __webpack_require__(/*! ../../../common/Component/CardTitleWithLine */ 442);
	var PrescriptionIntroSinglePart = __webpack_require__(/*! ./PrescriptionIntroSinglePart */ 805);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	"use strict";
	var context = __webpack_require__(/*! ../JobLibContext */ 806);
	var JobOptionsML = (function (_super) {
	    __extends(JobOptionsML, _super);
	    function JobOptionsML(props) {
	        _super.call(this, props);
	        this.state = {};
	        this.showActive = this.showActive.bind(this);
	    }
	    //条件点击事件
	    JobOptionsML.prototype.showActive = function (e) {
	        var obj = $(e.currentTarget);
	        if (!obj.hasClass("active")) {
	            obj.addClass("active").siblings().removeClass("active");
	            this.props.refreshCurrentSubJobCategoryID(e);
	        }
	    };
	    JobOptionsML.prototype.componentWillMount = function () {
	    };
	    JobOptionsML.prototype.render = function () {
	        var this_ = this;
	        // 获取搜索输入的字符串
	        // @param jobSearchInput 搜索关键字
	        var jobSearchInput = this.props.searchKeyWord;
	        // 如果没有输入字符进行搜索，则显示出当前方剂大类里面的药剂类型
	        if (jobSearchInput == "") {
	            var title = "方剂类" + "相关药剂";
	            var currentJobCategory = this.props.jobLibState.toJS().currentJobOption;
	            var subJobCategories = [];
	            if (currentJobCategory.jobCategoryID) {
	                title = currentJobCategory.jobCategoryName + "相关药剂";
	                subJobCategories = context.getjobLibResponseData().subJobCategoryMap[currentJobCategory.jobCategoryID];
	            }
	            // 获取方剂介绍所对应的方剂类型的id
	            // @param subJobCategoryID 选中状态的方剂类型的ID
	            var subJobCategoryID = "";
	            //如果点击选中了某个方剂，则获取该方剂的ID
	            if (this.props.currentSubJobCategoryID) {
	                subJobCategoryID = this.props.currentSubJobCategoryID;
	            }
	            else if (subJobCategories.length !== 0) {
	                subJobCategoryID = subJobCategories[0].subJobCategoryID;
	            }
	        }
	        else {
	            // 如果输入字符进行搜索，则显示出与输入字符串相匹配的方剂类型
	            var title = "搜索结果";
	            var subJobCategories = [], subJobCategoriesTemp = [];
	            var subJobCategoryMap = context.getjobLibResponseData().subJobCategoryMap;
	            // 根据输入的关键词匹配所有方剂类型名称，并加入subJobCategories数组
	            for (var key in subJobCategoryMap) {
	                for (var i = 0; i < subJobCategoryMap[key].length; i++) {
	                    if (subJobCategoryMap[key][i]['subJobCategoryName'].indexOf(jobSearchInput) != -1) {
	                        subJobCategoriesTemp.push(subJobCategoryMap[key][i]);
	                    }
	                }
	            }
	            //数组去重
	            subJobCategories = commonFunc_1.removeRepeatObjectElementInArray(subJobCategoriesTemp, "subJobCategoryID");
	            // 如果搜索后没有匹配结果，则显示“暂无匹配方剂”
	            if (subJobCategories.length == 0) {
	                subJobCategories.push({
	                    subJobCategoryID: "-1",
	                    subJobCategoryName: "暂无匹配方剂"
	                });
	            }
	            // 获取方剂介绍所对应的方剂类型的id
	            // @param subJobCategoryID 选中状态的方剂类型的ID
	            var subJobCategoryID = "";
	            //如果点击选中了某个方剂，则获取该方剂的ID
	            if (this.props.currentSubJobCategoryID) {
	                subJobCategoryID = this.props.currentSubJobCategoryID;
	            }
	            else {
	                subJobCategoryID = subJobCategories[0].subJobCategoryID;
	            }
	        }
	        return (React.createElement("div", {className: "blueBack block-box-shadows", style: { margin: "30px 15px", padding: "20px 20px 30px" }}, React.createElement(CardTitleWithLine, {title: title}), React.createElement("div", {className: "careerML-options"}, subJobCategories.map(function (option, index) {
	            if (option.subJobCategoryID == subJobCategoryID) {
	                //如果该方剂ID与点击选中的方剂ID相同，则显示为active状态
	                var activeClassName = "active";
	            }
	            else {
	                var activeClassName = "";
	            }
	            return (React.createElement("a", {key: index, className: activeClassName, onClick: this_.showActive, id: option.subJobCategoryID}, option.subJobCategoryName));
	        })), React.createElement("div", {className: "am-margin-top-lg"}, React.createElement(CardTitleWithLine, {title: "方剂介绍"}), subJobCategoryID &&
	            React.createElement(PrescriptionIntroSinglePart, {subJobCategoryID: subJobCategoryID}))));
	    };
	    JobOptionsML.defaultProps = {
	        searchKeyWord: "",
	        currentSubJobCategoryID: ""
	    };
	    return JobOptionsML;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    jobLibState: state.jobLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(JobOptionsML);


/***/ },

/***/ 805:
/*!****************************************************************!*\
  !*** ./pages/JobLib/Component/PrescriptionIntroSinglePart.tsx ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/JobLib/JobLibActionTypes */ 371);
	var JobIntroSinglePart = (function (_super) {
	    __extends(JobIntroSinglePart, _super);
	    function JobIntroSinglePart(props) {
	        _super.call(this, props);
	    }
	    JobIntroSinglePart.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    JobIntroSinglePart.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    JobIntroSinglePart.prototype.setStateByProps = function (props) {
	        var introductionResult = ajaxUtil_1.getDataByActionIDWithQuery(ActionTypes.GET_JOBLIB_JOBINTRODUCTION, {
	            subJobCategoryID: props.subJobCategoryID
	        });
	        this.setState({
	            introductions: introductionResult.result.introduction
	        });
	    };
	    JobIntroSinglePart.prototype.render = function () {
	        return (React.createElement("div", {className: "career-intro-list"}, this.state.introductions.map(function (intro, index) {
	            return (React.createElement("div", {className: "career-intro-single", key: index}, React.createElement("div", {className: "title"}, React.createElement("span", null, intro.introductionKey)), React.createElement("pre", null, intro.introductionValue)));
	        })));
	    };
	    return JobIntroSinglePart;
	}(React.Component));
	module.exports = JobIntroSinglePart;


/***/ },

/***/ 806:
/*!***************************************!*\
  !*** ./pages/JobLib/JobLibContext.ts ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	var jobLibResponseData;
	function setjobLibResponseData(responseData) {
	    jobLibResponseData = responseData;
	}
	exports.setjobLibResponseData = setjobLibResponseData;
	function getjobLibResponseData() {
	    return jobLibResponseData;
	}
	exports.getjobLibResponseData = getjobLibResponseData;


/***/ }

});
//# sourceMappingURL=48.48.js.map