webpackJsonp([44],{

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

/***/ 779:
/*!*****************************************!*\
  !*** ./pages/CollegeLib/CollegeLib.tsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ItemsActions = __webpack_require__(/*! ../../actions/CollegeLib/CollegeLibAction */ 780);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var ajaxUtil_1 = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var responseCacheContext = __webpack_require__(/*! ../../common/ResponseCacheContext */ 426);
	var actionTypes = __webpack_require__(/*! ../../actions/CollegeLib/CollegeLibActionTypes */ 368);
	var SearchBox = __webpack_require__(/*! ../../common/Component/SearchBox */ 781);
	var CardTitleWithLine = __webpack_require__(/*! ../../common/Component/CardTitleWithLine */ 442);
	var CollegeResult = __webpack_require__(/*! ./Component/CollegeResult */ 782);
	var SchoolConditionOptions = __webpack_require__(/*! ./Component/CollegeConditionOptions */ 784);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var CollegeLibUtil_1 = __webpack_require__(/*! ./CollegeLibUtil */ 783);
	"use strict";
	/**
	 * 院校库
	 */
	var CollegeLib = (function (_super) {
	    __extends(CollegeLib, _super);
	    function CollegeLib(props) {
	        _super.call(this, props);
	        this.searchWithInput = this.searchWithInput.bind(this);
	    }
	    //搜索框搜索院校列表
	    CollegeLib.prototype.searchWithInput = function (val) {
	        this.props.actions.mergeCollegeOptionsInput({ collegeLib_searchBox_input: val });
	        this.props.actions.mergeCurrentPage({ collegeLib_currentPage: CommonConfig_1.defaultCurrentPage });
	        var postData = CollegeLibUtil_1.getSearchConditionFromStateTree(this.props.collegeLibState.toJS(), "keyword", val);
	        this.props.actions.getCollegeResult(postData);
	    };
	    CollegeLib.prototype.componentWillMount = function () {
	        //左边--选择条件
	        var conditions = ajaxUtil_1.getDataFromContextByActionID(responseCacheContext.getResponseCache(), actionTypes.GET_COLLEGELIB_CONDITIONS).result;
	        this.setState({
	            conditions: conditions
	        });
	    };
	    CollegeLib.prototype.render = function () {
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 17}, React.createElement("div", {className: "mlr20"}, React.createElement("div", {className: "block-box-shadows", style: { marginBottom: "40px" }}, React.createElement(SearchBox, {title: "输入药材关键词", searchCallBack: this.searchWithInput})), React.createElement("div", {className: "block-box-shadows", style: { paddingBottom: "20px" }}, React.createElement("div", {className: "blueBack mtb20"}, React.createElement(CardTitleWithLine, {title: "药材列表"}), React.createElement(CollegeResult, null))))), React.createElement(antd_1.Col, {span: 7}, React.createElement("div", {className: "school-lib-right"}, React.createElement("div", {className: "profession-screen-single"}, React.createElement("h3", {className: "profession-screen-title"}, "药材类别"), React.createElement("div", {className: "condition-list"}, React.createElement(SchoolConditionOptions, {optionsFlag: "province", options: this.state.conditions.province}), React.createElement(SchoolConditionOptions, {optionsFlag: "collegeProp", options: this.state.conditions.collegeProp}))))))));
	    };
	    CollegeLib.defaultProps = {};
	    return CollegeLib;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    collegeLibState: state.collegeLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(CollegeLib);


/***/ },

/***/ 780:
/*!************************************************!*\
  !*** ./actions/CollegeLib/CollegeLibAction.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actionTypes = __webpack_require__(/*! ./CollegeLibActionTypes */ 368);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	//学院类别  ----地区
	function mergeCollegeOptionsProvince(state) {
	    return {
	        type: actionTypes.MERGE_COLLEGEOPTIONS_PROVINCE,
	        mergeState: state
	    };
	}
	exports.mergeCollegeOptionsProvince = mergeCollegeOptionsProvince;
	//学院类别  ----级别（985，211，其他）
	function mergeCollegeOptionsLevel(state) {
	    return {
	        type: actionTypes.MERGE_COLLEGEOPTIONS_LEVEL,
	        mergeState: state
	    };
	}
	exports.mergeCollegeOptionsLevel = mergeCollegeOptionsLevel;
	//学院类别  --- 类别（本科、专科）
	function mergeCollegeOptionsType(state) {
	    return {
	        type: actionTypes.MERGE_COLLEGEOPTIONS_TYPE,
	        mergeState: state
	    };
	}
	exports.mergeCollegeOptionsType = mergeCollegeOptionsType;
	//学院类别 --- major门类
	function mergeCollegeOptionsMajorML(state) {
	    return {
	        type: actionTypes.MERGE_COLLEGEOPTIONS_COLLEGEPROP,
	        mergeState: state
	    };
	}
	exports.mergeCollegeOptionsMajorML = mergeCollegeOptionsMajorML;
	//搜索框input值
	function mergeCollegeOptionsInput(state) {
	    return {
	        type: actionTypes.MERGE_COLLEGEOPTIONS_INPUT,
	        mergeState: state
	    };
	}
	exports.mergeCollegeOptionsInput = mergeCollegeOptionsInput;
	//当前页码
	function mergeCurrentPage(state) {
	    return {
	        type: actionTypes.MERGE_CURRENTPAGE,
	        mergeState: state
	    };
	}
	exports.mergeCurrentPage = mergeCurrentPage;
	//院校库列表
	function getCollegeResult(postData) {
	    var responseData = ajaxUtil.getDataByActionIDWithQuery(actionTypes.GET_COLLEGELIB_COLLEGELIST, postData).result;
	    var initState = { collegeLib_collegeResult: responseData };
	    return {
	        type: actionTypes.MERGE_COLLEGERESULT,
	        mergeState: initState
	    };
	}
	exports.getCollegeResult = getCollegeResult;


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

/***/ 782:
/*!******************************************************!*\
  !*** ./pages/CollegeLib/Component/CollegeResult.tsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ItemsActions = __webpack_require__(/*! ../../../actions/CollegeLib/CollegeLibAction */ 780);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var CollegeLibUtil_1 = __webpack_require__(/*! ../CollegeLibUtil */ 783);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	"use strict";
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	var COLLECTION_ALREADY = "已收藏";
	var COLLECTION_NOT = "收藏";
	var CollegeResult = (function (_super) {
	    __extends(CollegeResult, _super);
	    function CollegeResult(props) {
	        _super.call(this, props);
	        this.onChangePagination = this.onChangePagination.bind(this);
	    }
	    CollegeResult.prototype.componentWillMount = function () {
	        var postData = CollegeLibUtil_1.getSearchConditionFromStateTree(this.props.collegeLibState.toJS());
	        this.props.actions.getCollegeResult(postData);
	    };
	    //收藏院校
	    CollegeResult.prototype.collectCollege = function (collegeID, e) {
	        var text = $(e.currentTarget).text();
	        if ($(e.currentTarget).find("i").length) {
	            $(e.currentTarget).html(COLLECTION_ALREADY);
	            $(e.currentTarget).addClass("ant-btn-primary");
	        }
	        else {
	            $(e.currentTarget).html('<i class=" anticon anticon-plus"></i><span>' + COLLECTION_NOT + '</span>');
	            $(e.currentTarget).removeClass("ant-btn-primary");
	        }
	    };
	    //查看院校详情
	    CollegeResult.prototype.showCollegeIntro = function (collegeID, e) {
	        this.props.router.push({
	            pathname: 'collegeLib/collegeIntro',
	            query: { collegeID: collegeID }
	        });
	    };
	    //分页显示
	    CollegeResult.prototype.onChangePagination = function (page) {
	        this.props.actions.mergeCurrentPage({ collegeLib_currentPage: page });
	        var postData = CollegeLibUtil_1.getSearchConditionFromStateTree(this.props.collegeLibState.toJS(), "page", page);
	        this.props.actions.getCollegeResult(postData);
	    };
	    //收藏待定
	    /* var collection =  <Button icon="plus" onClick={this_.collectCollege.bind(this_,info.collegeID)}>{COLLECTION_NOT}</Button>;
	     if(info.favorite){
	     collection = <Button  type="primary"  onClick={this_.collectCollege.bind(this_,info.collegeID)}>{COLLECTION_ALREADY}</Button>;
	     line 110  has {collection}
	 }*/
	    CollegeResult.prototype.render = function () {
	        var this_ = this;
	        var responseData = this.props.collegeLibState.toJS().collegeLib_collegeResult;
	        var collegeList = commonFunc_1.isEmptyObject(responseData) ? [] : responseData.colleges;
	        var total = commonFunc_1.isEmptyObject(responseData) ? 0 : responseData.total;
	        var current = this.props.collegeLibState.toJS().collegeLib_currentPage;
	        var hasResult = commonFunc_1.isEmptyObject(responseData) ? false : true;
	        return (React.createElement("div", null, collegeList.map(function (info, index) {
	            //maybe has collection
	            return (React.createElement("div", {className: "am-cf school-intro-single", key: index}, React.createElement("img", {src: info.logo, width: "90", className: "pull-left", onClick: this_.showCollegeIntro.bind(this_, info.collegeID)}), React.createElement("div", {className: "middle-intro"}, React.createElement("div", {className: "line-one"}, React.createElement("h3", {onClick: this_.showCollegeIntro.bind(this_, info.collegeID)}, info.collegeName), info.collegeLevel.map(function (level, index) {
	                return React.createElement("div", {className: "school-level", key: index}, level.collegeLevelName);
	            })), React.createElement("div", {className: "line-two"}, React.createElement("div", null, "隶属：", info.belongTo), React.createElement("div", null, "形态特征：", info.masterStationCount)), React.createElement("div", {className: "line-three"}, React.createElement("div", null, "分布范围：", info.keyDisciplineCount), React.createElement("div", null, "生长环境：", info.doctorStationCount), info.hasAdmissionTeacher && React.createElement("div", {className: "teacherComing"}, React.createElement("i", {className: "fa fa-user"}), "招办老师已入住")))));
	        }), hasResult &&
	            React.createElement("div", {className: "am-margin-top-sm"}, React.createElement(antd_1.Pagination, {current: current, onChange: this.onChangePagination, total: total, pageSize: CommonConfig_1.defaultPageSize, showTotal: function (total) { return ("\u5171 " + total + " \u6761"); }})), !hasResult &&
	            React.createElement("div", {className: "show-search-text am-text-center", style: { marginBottom: "20px" }}, "暂无匹配药材，请尝试其他关键词搜索吧", React.createElement(antd_1.Icon, {type: "frown"}))));
	    };
	    CollegeResult.defaultProps = {};
	    return CollegeResult;
	}(React.Component));
	module.exports = react_router_1.withRouter(react_redux_1.connect(function (state) { return ({
	    collegeLibState: state.collegeLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(CollegeResult));


/***/ },

/***/ 783:
/*!********************************************!*\
  !*** ./pages/CollegeLib/CollegeLibUtil.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	//院校库 取树上节点的查询条件值  this.props.collegeLibState.toJS()
	function getSearchConditionFromStateTree(collegeLibState, type, value) {
	    var postData = {};
	    var provinceID = collegeLibState.collegeLib_collegeOptions_province;
	    if (provinceID.length > 0 && !commonFunc_1.isEmptyObject(provinceID[0])) {
	        postData["provinceID"] = provinceID;
	    }
	    var collegeLevelID = collegeLibState.collegeLib_collegeOptions_level;
	    if (collegeLevelID.length > 0 && !commonFunc_1.isEmptyObject(collegeLevelID[0])) {
	        postData["collegeLevelID"] = collegeLevelID;
	    }
	    var majorTypeID = collegeLibState.collegeLib_collegeOptions_type;
	    if (majorTypeID.length > 0 && !commonFunc_1.isEmptyObject(majorTypeID[0])) {
	        postData["majorTypeID"] = majorTypeID;
	    }
	    var collegePropID = collegeLibState.collegeLib_collegeOptions_collegeProp;
	    if (collegePropID.length > 0 && !commonFunc_1.isEmptyObject(collegePropID[0])) {
	        postData["collegePropID"] = collegePropID;
	    }
	    var keyword = collegeLibState.collegeLib_searchBox_input;
	    if (keyword.length > 0 && !commonFunc_1.isEmptyObject(keyword)) {
	        postData["keyword"] = keyword;
	    }
	    var currentPage = collegeLibState.collegeLib_currentPage;
	    postData["currentPage"] = currentPage;
	    if (!commonFunc_1.isEmptyObject(type)) {
	        if (type != "page") {
	            if (type == "province") {
	                postData["provinceID"] = value;
	            }
	            else if (type == "collegeProp") {
	                postData["collegePropID"] = value;
	            }
	            else if (type == "majorType") {
	                postData["majorTypeID"] = value;
	            }
	            else if (type == "collegeLevel") {
	                postData["collegeLevelID"] = value;
	            }
	            else if (type == "keyword") {
	                postData["keyword"] = value;
	            }
	            postData["currentPage"] = CommonConfig_1.defaultCurrentPage;
	        }
	        else {
	            postData["currentPage"] = value;
	        }
	    }
	    postData["pageSize"] = CommonConfig_1.defaultPageSize;
	    console.log(postData);
	    return postData;
	}
	exports.getSearchConditionFromStateTree = getSearchConditionFromStateTree;


/***/ },

/***/ 784:
/*!****************************************************************!*\
  !*** ./pages/CollegeLib/Component/CollegeConditionOptions.tsx ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ItemsActions = __webpack_require__(/*! ../../../actions/CollegeLib/CollegeLibAction */ 780);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var CollegeLibUtil_1 = __webpack_require__(/*! ../CollegeLibUtil */ 783);
	"use strict";
	var keyID = "";
	var keyName = "";
	var UNLIMITED = "不限";
	var SchoolConditionOptions = (function (_super) {
	    __extends(SchoolConditionOptions, _super);
	    function SchoolConditionOptions(props) {
	        _super.call(this, props);
	        this.showActive = this.showActive.bind(this);
	    }
	    SchoolConditionOptions.prototype.getActiveOption = function (parent) {
	        var chooseArray = [];
	        parent.children("a").each(function (index) {
	            if ($(this).hasClass("active")) {
	                var optionID = $(this).attr('id');
	                chooseArray.push(optionID);
	            }
	        });
	        return chooseArray;
	    };
	    //条件点击事件
	    SchoolConditionOptions.prototype.showActive = function (e) {
	        var obj = $(e.currentTarget);
	        var defaultActiveObj = obj.parent().children().first();
	        var chooseArray = [];
	        //单选
	        if (this.props.optionsFlag == "majorType" || this.props.optionsFlag == "collegeLevel") {
	            if (obj.text() == UNLIMITED) {
	                obj.addClass("active").siblings().removeClass("active");
	                chooseArray.push(e.currentTarget.id);
	            }
	            else {
	                if (obj.hasClass("active")) {
	                    obj.removeClass("active");
	                    defaultActiveObj.addClass("active");
	                    chooseArray.push(defaultActiveObj.attr("id"));
	                }
	                else {
	                    obj.addClass("active").siblings().removeClass("active");
	                    chooseArray.push(e.currentTarget.id);
	                }
	            }
	            if (this.props.optionsFlag == "majorType") {
	                this.props.actions.mergeCollegeOptionsLevel({ collegeLib_collegeOptions_type: chooseArray });
	            }
	            else {
	                this.props.actions.mergeCollegeOptionsLevel({ collegeLib_collegeOptions_level: chooseArray });
	            }
	        }
	        else if (this.props.optionsFlag == "province" || this.props.optionsFlag == "collegeProp") {
	            if (obj.text() == UNLIMITED) {
	                obj.addClass("active").siblings().removeClass("active");
	            }
	            else {
	                if (obj.hasClass("active")) {
	                    obj.removeClass("active");
	                    var activeCount = this.getActiveOption(obj.parent()).length;
	                    if (activeCount == 0) {
	                        defaultActiveObj.addClass("active");
	                    }
	                }
	                else {
	                    obj.addClass("active");
	                    defaultActiveObj.removeClass("active");
	                }
	            }
	            chooseArray = this.getActiveOption(obj.parent());
	            if (this.props.optionsFlag == "province") {
	                this.props.actions.mergeCollegeOptionsProvince({ collegeLib_collegeOptions_province: chooseArray });
	            }
	            else {
	                this.props.actions.mergeCollegeOptionsMajorML({ collegeLib_collegeOptions_collegeProp: chooseArray });
	            }
	        }
	        this.props.actions.mergeCurrentPage({ collegeLib_currentPage: CommonConfig_1.defaultCurrentPage });
	        var postData = CollegeLibUtil_1.getSearchConditionFromStateTree(this.props.collegeLibState.toJS(), this.props.optionsFlag, chooseArray);
	        this.props.actions.getCollegeResult(postData);
	    };
	    //1.取数组【0】map 的key   2.数组赋值不限
	    SchoolConditionOptions.prototype.initOptions = function () {
	        var options = this.props.options;
	        var keys = [];
	        var hasLimited = false;
	        $.each(options[0], function (key, values) {
	            if (key.indexOf("ID") > 0 || key.indexOf("Name") > 0) {
	                if (values == "" || values == UNLIMITED) {
	                    hasLimited = true;
	                }
	            }
	            keys.push(key);
	        });
	        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	            var value = keys_1[_i];
	            if (value.indexOf("ID") > 0) {
	                keyID = value;
	            }
	            else if (value.indexOf("Name") > 0) {
	                keyName = value;
	            }
	        }
	        if (!hasLimited) {
	            var defaultMap = {};
	            defaultMap[keyID] = "";
	            defaultMap[keyName] = UNLIMITED;
	            options.unshift(defaultMap);
	        }
	        return options;
	    };
	    SchoolConditionOptions.prototype.render = function () {
	        var this_ = this;
	        //一行放几个属性由col后面的数字决定
	        var className = "school-condition-options col4";
	        if (this.props.optionsFlag == "majorType" || this.props.optionsFlag == "collegeLevel") {
	            className = "school-condition-options col3";
	        }
	        var options = this.initOptions();
	        return (React.createElement("div", {className: className}, options.map(function (option, index) {
	            var activeClassName = index == 0 ? "active" : "";
	            return React.createElement("a", {key: index, className: activeClassName, onClick: this_.showActive, id: option[keyID]}, option[keyName]);
	        })));
	    };
	    SchoolConditionOptions.defaultProps = {};
	    return SchoolConditionOptions;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    collegeLibState: state.collegeLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(SchoolConditionOptions);


/***/ }

});
//# sourceMappingURL=44.44.js.map