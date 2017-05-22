webpackJsonp([47],{

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

/***/ 796:
/*!*************************************!*\
  !*** ./pages/MajorLib/MajorLib.tsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ItemsActions = __webpack_require__(/*! ../../actions/MajorLib/MajorLibAction */ 797);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var SearchBox = __webpack_require__(/*! ../../common/Component/SearchBox */ 781);
	var MajorIntro = __webpack_require__(/*! ./Component/MajorIntro */ 798);
	var MajorResult = __webpack_require__(/*! ./Component/MajorResult */ 799);
	var responseCacheContext = __webpack_require__(/*! common/ResponseCacheContext */ 426);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/MajorLib/MajorLibActionTypes */ 366);
	"use strict";
	//let非全局
	var undergraduateCount = 0; //本科专业个数
	var undergraduateID = ""; //本科ID
	var specialtyCount = 0; //专科专业个数
	var specialtyID = ""; //专科ID
	/**
	 * 专业库
	 */
	//React.Component 是一个抽象的Class，通常继承该类来构建自定义的Component
	//<>表示实现的接口？
	//subMajorML:{}？
	//bind(this)？
	//react class中，方法的传入参数不需要指定类型？
	var MajorLib = (function (_super) {
	    __extends(MajorLib, _super);
	    function MajorLib(props) {
	        _super.call(this, props);
	        this.state = {
	            subMajorML: {}
	        };
	        //bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。由于作用域问题，this的指向可能是不明确的
	        // JavaScript新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，希望方法中的 this 是原来的对象。
	        this.searchWithInput = this.searchWithInput.bind(this);
	        this.rightSearch = this.rightSearch.bind(this);
	        this.showMajorDetail = this.showMajorDetail.bind(this);
	    }
	    //搜索框搜索专业列表
	    MajorLib.prototype.searchWithInput = function (val) {
	        if (!commonFunc_1.isEmptyObject(val)) {
	            this.props.actions.mergeMajorSearchVal({ majorlib_search_value: $.trim(val) });
	            //置空右边搜索的三个叶子
	            this.props.actions.mergeSubjCategories({ majorlib_subj_categories: {} });
	            this.props.actions.mergeMajorCategories({ majorlib_major_categories: {} });
	            this.props.actions.mergeMajorClickFlag({ majorlib_major_clickflag: "search" });
	            this.props.actions.mergeMajorPageShowWho({ majorlib_major_page_show: CommonConfig_1.majorShowList }); //默认显示majorList
	        }
	    };
	    //本科专业、专科专业蓝框点击显示专业列表
	    MajorLib.prototype.rightSearch = function (text) {
	        var map = {};
	        var majorTypeID = text.indexOf("本科") > -1 ? undergraduateID : specialtyID;
	        map["majorTypeID"] = majorTypeID;
	        map["majorTypeName"] = text;
	        this.props.actions.mergeSubjClassification({ majorlib_subj_classification: map });
	        //其他状态树 value 清空
	        this.props.actions.mergeSubjCategories({ majorlib_subj_categories: {} });
	        this.props.actions.mergeMajorCategories({ majorlib_major_categories: {} });
	        this.props.actions.mergeMajorSearchVal({ majorlib_search_value: "" });
	        this.props.actions.mergeMajorClickFlag({ majorlib_major_clickflag: "" });
	    };
	    //获取本科专业、专科专业信息
	    MajorLib.prototype.getUnderGraduateAndSpecialtyInfo = function (data) {
	        //1.本科、专科 ID
	        for (var _i = 0, _a = data.majorType; _i < _a.length; _i++) {
	            var item = _a[_i];
	            var majorTypeName = item.majorTypeName;
	            var majorTypeID = item.majorTypeID;
	            if (majorTypeName.indexOf("本科") > -1) {
	                undergraduateID = majorTypeID;
	            }
	            else if (majorTypeName.indexOf("高职") > -1) {
	                specialtyID = majorTypeID;
	            }
	        }
	        //2.获取本科、专科个数
	        undergraduateCount = this.getUnderGraduateAndSpecialtyCount(data, undergraduateID);
	        specialtyCount = this.getUnderGraduateAndSpecialtyCount(data, specialtyID);
	    };
	    //获取本科专业、专科专业个数
	    MajorLib.prototype.getUnderGraduateAndSpecialtyCount = function (data, majorTypeID) {
	        var count = 0;
	        var majorCategoryList = data.majorType2CategoryMap[majorTypeID];
	        for (var _i = 0, majorCategoryList_1 = majorCategoryList; _i < majorCategoryList_1.length; _i++) {
	            var items = majorCategoryList_1[_i];
	            var majorCategoryID = items.majorCategoryID;
	            var majorCategory2MList = data.majorCategory2MLMap[majorCategoryID];
	            for (var _a = 0, majorCategory2MList_1 = majorCategory2MList; _a < majorCategory2MList_1.length; _a++) {
	                var item = majorCategory2MList_1[_a];
	                var majorMLID = item.majorMLID;
	                var length = data.majorML2SubMajorMLMap[majorMLID].length;
	                count += length;
	            }
	        }
	        return count;
	    };
	    MajorLib.prototype.componentWillMount = function () {
	        var this_ = this;
	        var responseData = ajaxUtil_1.getDataFromContextByActionID(responseCacheContext.getResponseCache(), actionTypes.GET_MAJORLIB_MAJORLIB).result;
	        /*从缓存中获取结果，如果缓存中没有，发起ajax，然后将结果放入缓存
	         * 缓存的key是actionID, 如果queryObj不为空，将其序列化后，以下划线链接*/
	        this.getUnderGraduateAndSpecialtyInfo(responseData);
	        var defaultSubjClassification = responseData.majorType[0];
	        this.props.actions.mergeSubjClassification({ majorlib_subj_classification: defaultSubjClassification });
	        this.props.actions.mergeMajorPageShowWho({ majorlib_major_page_show: CommonConfig_1.majorShowList });
	        //majorlib_major_page_show: 当前显示专业详情/专业列表  intro/majorResult
	    };
	    //点击专业跳转到专业详情
	    MajorLib.prototype.showMajorDetail = function (subMajorML) {
	        //mergeMajorPageShowWho方法，传入参数是subMajorML类型的，
	        //返回值是  type: actionTypes.MERGE_MAJOR_SHOW_WHO,  mergedState: state
	        this.props.actions.mergeMajorPageShowWho({ majorlib_major_page_show: CommonConfig_1.majorShowIntro }); //显示majorIntro
	        //subMajorMl是由interface majorLibRouteState指定的
	        //注意 setState({key(state名):value})的工作方式。你传递一个对象，其中包含你要更新的状态。
	        //传递的对象将具有与组件状态中的键相对应的键，然后 setState（）通过对象合并到状态来更新或设置状态。
	        //在这里，subMajorML状态被set为subMajorML
	        this.setState({
	            subMajorML: subMajorML,
	        });
	    };
	    MajorLib.prototype.render = function () {
	        //var undergraduate = "本科专业"+undergraduateCount+"个";
	        //var specialty = "专科专业"+specialtyCount+"个";
	        var subComponent = this.props.majorLibState.toJS().majorlib_major_page_show == CommonConfig_1.majorShowIntro ? React.createElement(MajorIntro, {subMajorML: this.state.subMajorML}) : React.createElement(MajorResult, {showDetail: this.showMajorDetail});
	        //var subComponent = <MajorIntro  subMajorML={this.state.subMajorML}  />
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, "  ", React.createElement(antd_1.Col, {span: 24, style: { paddingRight: "20px" }}, React.createElement("div", {className: "block-box-shadows"}, React.createElement(SearchBox, {title: "输入医案关键词", searchCallBack: this.searchWithInput})), React.createElement("div", {className: "block-box-shadows", style: { marginTop: "40px" }}, subComponent)))));
	    };
	    MajorLib.defaultProps = {};
	    return MajorLib;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    majorLibState: state.majorLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch)
	}); })(MajorLib);


/***/ },

/***/ 797:
/*!********************************************!*\
  !*** ./actions/MajorLib/MajorLibAction.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actionTypes = __webpack_require__(/*! ./MajorLibActionTypes */ 366);
	//学科类别  ----专科、本科
	function mergeSubjClassification(state) {
	    return {
	        type: actionTypes.MERGE_SUBJ_CLASSIFICATION,
	        mergedState: state
	    };
	}
	exports.mergeSubjClassification = mergeSubjClassification;
	//学科门类  ----哲学、经济学
	function mergeSubjCategories(state) {
	    return {
	        type: actionTypes.MERGE_SUBJ_CATEGORIES,
	        mergedState: state
	    };
	}
	exports.mergeSubjCategories = mergeSubjCategories;
	//专业类别  --- 哲学类、经济学类
	function mergeMajorCategories(state) {
	    return {
	        type: actionTypes.MERGE_MAJOR_CATEGORIES,
	        mergedState: state
	    };
	}
	exports.mergeMajorCategories = mergeMajorCategories;
	//搜索框input值
	function mergeMajorSearchVal(state) {
	    return {
	        type: actionTypes.MERGE_MAJOR_SEARCHVAL,
	        mergedState: state
	    };
	}
	exports.mergeMajorSearchVal = mergeMajorSearchVal;
	//当前点击事件标识
	function mergeMajorClickFlag(state) {
	    return {
	        type: actionTypes.MERGE_MAJOR_CLICKFLAG,
	        mergedState: state
	    };
	}
	exports.mergeMajorClickFlag = mergeMajorClickFlag;
	//当前 显示专业详情 还是 显示专业列表
	function mergeMajorPageShowWho(state) {
	    return {
	        type: actionTypes.MERGE_MAJOR_SHOW_WHO,
	        mergedState: state
	    };
	}
	exports.mergeMajorPageShowWho = mergeMajorPageShowWho;


/***/ },

/***/ 798:
/*!*************************************************!*\
  !*** ./pages/MajorLib/Component/MajorIntro.tsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ItemsActions = __webpack_require__(/*! ../../../actions/MajorLib/MajorLibAction */ 797);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var CardTitleWithLine = __webpack_require__(/*! ../../../common/Component/CardTitleWithLine */ 442);
	"use strict";
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/MajorLib/MajorLibActionTypes */ 366);
	var TabPane = antd_1.Tabs.TabPane;
	var MajorIntro = (function (_super) {
	    __extends(MajorIntro, _super);
	    function MajorIntro(props) {
	        _super.call(this, props);
	        this.state = {};
	        this.goBackToMajorLib = this.goBackToMajorLib.bind(this);
	    }
	    MajorIntro.prototype.goBackToMajorLib = function () {
	        this.props.actions.mergeMajorPageShowWho({ majorlib_major_page_show: CommonConfig_1.majorShowList }); //显示majorShowList；majorShowList = "majorResult"
	        //majorlib_major_page_show:""   当前 显示专业详情 还是 显示专业列表  intro/majorResult
	    };
	    //数组按 introductionType 分组（用来处理专业排名）
	    MajorIntro.prototype.changeArrayToMapGroupWithIntroductionType = function (data) {
	        var groupMap = {};
	        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	            var item = data_1[_i];
	            var id = item.introductionType;
	            if (commonFunc_1.isEmptyObject(groupMap[id])) {
	                var list = [];
	                list.push(item);
	                groupMap[id] = list;
	            }
	            else {
	                groupMap[id].push(item);
	            }
	        }
	        return groupMap;
	    };
	    MajorIntro.prototype.getMajorIntro = function () {
	        var this_ = this;
	        var queryObj = {
	            majorMLID: this.props.subMajorML.subMajorMLID,
	            majorType: this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID
	        };
	        var introductions = ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.GET_MAJORLIB_MAJORDETAIL, queryObj).result.introductions;
	        //getDataByActionIDWithQuery 同步带参请求
	        var map = {};
	        map["introductionKey"] = "医案编号";
	        map["introductionValue"] = this.props.subMajorML.subMajorMLID;
	        map["introductionGender"] = this.props.subMajorML.introductionAge;
	        //map["introductionGender"] = this.props.subMajorML.gender;
	        map["introductionType"] = "0";
	        introductions.unshift(map);
	        var groupMap = this.changeArrayToMapGroupWithIntroductionType(introductions);
	        var rowLists = [], tabLists = [];
	        for (var key in groupMap) {
	            if (key != "3" && key != "4") {
	                if ($.isArray(groupMap[key])) {
	                    for (var _i = 0, _a = groupMap[key]; _i < _a.length; _i++) {
	                        var item = _a[_i];
	                        rowLists.push(item);
	                    }
	                }
	                else {
	                    rowLists.push(groupMap[key]);
	                }
	            }
	            else {
	                if ($.isArray(groupMap[key])) {
	                    for (var _b = 0, _c = groupMap[key]; _b < _c.length; _b++) {
	                        var item = _c[_b];
	                        tabLists.push(item);
	                    }
	                }
	                else {
	                    tabLists.push(groupMap[key]);
	                }
	            }
	        }
	        var map = {};
	        map["row"] = rowLists;
	        map["tab"] = tabLists;
	        return map;
	    };
	    MajorIntro.prototype.render = function () {
	        var this_ = this;
	        var dataMap = this.getMajorIntro();
	        return (React.createElement("div", {className: "blueBack am-margin-top-lg"}, React.createElement(CardTitleWithLine, {title: this.props.subMajorML.subMajorMLName, rightText: React.createElement(antd_1.Button, {type: "primary", onClick: this.goBackToMajorLib, style: { borderRadius: "0px" }}, React.createElement(antd_1.Icon, {type: "left"}), "返回")}), React.createElement(antd_1.Row, {className: "am-margin-top"}, dataMap["row"].map(function (item, index) {
	            return (
	            //<Col span={8} key={index} >{item.introductionKey}：{item.introductionValue}</Col>
	            React.createElement(antd_1.Col, {span: 8, key: index}, item.introductionKey, "：", item.introductionValue));
	        })), React.createElement("div", {className: "card-container card-container-grayLine am-margin-top"}, React.createElement(antd_1.Tabs, {type: "card"}, dataMap["tab"].map(function (item, index) {
	            var content = React.createElement("div", null, item.introductionValue);
	            {
	            }
	            return (React.createElement(TabPane, {tab: item.introductionKey, key: index}, content));
	        })))));
	    };
	    return MajorIntro;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    majorLibState: state.majorLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch)
	}); })(MajorIntro);


/***/ },

/***/ 799:
/*!**************************************************!*\
  !*** ./pages/MajorLib/Component/MajorResult.tsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ItemsActions = __webpack_require__(/*! ../../../actions/MajorLib/MajorLibAction */ 797);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var responseCacheContext = __webpack_require__(/*! common/ResponseCacheContext */ 426);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/MajorLib/MajorLibActionTypes */ 366);
	"use strict";
	var MajorResult = (function (_super) {
	    __extends(MajorResult, _super);
	    function MajorResult(props) {
	        _super.call(this, props);
	        this.showMajorDetail = this.showMajorDetail.bind(this);
	    }
	    //li点击事件--显示专业详情
	    MajorResult.prototype.showMajorDetail = function (e) {
	        var map = {};
	        map["subMajorMLID"] = e.currentTarget.id;
	        map["subMajorMLName"] = e.currentTarget.textContent;
	        this.props.showDetail(map);
	    };
	    //根据majorCategoryID 获取majorCategoryName
	    MajorResult.prototype.getMajorCategoryName = function (majorCategoryID, data) {
	        for (var key in data) {
	            for (var _i = 0, _a = data[key]; _i < _a.length; _i++) {
	                var item = _a[_i];
	                if (item.majorCategoryID == majorCategoryID) {
	                    return item.majorCategoryName;
	                }
	            }
	        }
	    };
	    //数组按组subMajorMLID 前两位分组
	    MajorResult.prototype.changeArrayToMapGroupWithSubMajorMLID = function (data) {
	        var groupMap = {};
	        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	            var item = data_1[_i];
	            var id = item.subMajorMLID.substr(0, 2);
	            if (commonFunc_1.isEmptyObject(groupMap[id])) {
	                var list = [];
	                list.push(item);
	                groupMap[id] = list;
	            }
	            else {
	                groupMap[id].push(item);
	            }
	        }
	        return groupMap;
	    };
	    MajorResult.prototype.getMajorResultList = function () {
	        var list = [];
	        var responseData = ajaxUtil_1.getDataFromContextByActionID(responseCacheContext.getResponseCache(), actionTypes.GET_MAJORLIB_MAJORLIB).result;
	        //获取jason数据
	        var chosenSubjClassificationID = this.props.majorLibState.toJS().majorlib_subj_classification.majorTypeID; //专科 本科
	        var chosenSubjCategoriesID = this.props.majorLibState.toJS().majorlib_subj_categories.majorCategoryID; //哲学 经济学
	        var chosenMajorCategoriesID = this.props.majorLibState.toJS().majorlib_major_categories.majorMLID; //哲学类 经济学类
	        var searchValue = this.props.majorLibState.toJS().majorlib_search_value;
	        //var clickFlag =this.props.majorLibState.toJS().majorlib_major_clickflag;
	        if (commonFunc_1.isEmptyObject(searchValue)) {
	            //不是搜索框点击的
	            if (commonFunc_1.isEmptyObject(chosenSubjCategoriesID)) {
	                var subjCategoryList = responseData.majorType2CategoryMap[chosenSubjClassificationID];
	                for (var _i = 0, subjCategoryList_1 = subjCategoryList; _i < subjCategoryList_1.length; _i++) {
	                    var subjCategory = subjCategoryList_1[_i];
	                    var majorCategoryID = subjCategory.majorCategoryID;
	                    for (var _a = 0, _b = responseData.majorCategory2MLMap[majorCategoryID]; _a < _b.length; _a++) {
	                        var majorML = _b[_a];
	                        var majorMLID = majorML.majorMLID;
	                        var majorList = responseData.majorML2SubMajorMLMap[majorMLID];
	                        for (var _c = 0, majorList_1 = majorList; _c < majorList_1.length; _c++) {
	                            var item = majorList_1[_c];
	                            list.push(item);
	                        }
	                    }
	                }
	            }
	            else {
	                if (commonFunc_1.isEmptyObject(chosenMajorCategoriesID)) {
	                    for (var _d = 0, _e = responseData.majorCategory2MLMap[chosenSubjCategoriesID]; _d < _e.length; _d++) {
	                        var items = _e[_d];
	                        var majorMLID = items.majorMLID;
	                        var majorList = responseData.majorML2SubMajorMLMap[majorMLID];
	                        for (var _f = 0, majorList_2 = majorList; _f < majorList_2.length; _f++) {
	                            var item = majorList_2[_f];
	                            list.push(item);
	                        }
	                    }
	                }
	                else {
	                    list = responseData.majorML2SubMajorMLMap[chosenMajorCategoriesID];
	                }
	            }
	        }
	        else {
	            //是搜索框点击的
	            var majorML2SubMajorMLMap = responseData.majorML2SubMajorMLMap;
	            for (var key in majorML2SubMajorMLMap) {
	                for (var _g = 0, _h = majorML2SubMajorMLMap[key]; _g < _h.length; _g++) {
	                    var item_1 = _h[_g];
	                    if (item_1.subMajorMLName.indexOf(searchValue) > -1) {
	                        list.push(item_1);
	                    }
	                }
	            }
	            ;
	        }
	        //lists格式 [{name:"哲学",majorCategory:[{subMajorMLID:"01",subMajorMLName:"逻辑学"}]}]
	        var lists = [];
	        var groupMap = this.changeArrayToMapGroupWithSubMajorMLID(list);
	        var groupMapKey = []; //groupMap key排序
	        $.each(groupMap, function (key, val) { groupMapKey[groupMapKey.length] = key; });
	        groupMapKey.sort();
	        for (var _j = 0, groupMapKey_1 = groupMapKey; _j < groupMapKey_1.length; _j++) {
	            var item_2 = groupMapKey_1[_j];
	            var majorCategoryName = this.getMajorCategoryName(item_2, responseData.majorType2CategoryMap);
	            var map = {};
	            map["name"] = majorCategoryName;
	            map["majorCategory"] = groupMap[item_2];
	            lists.push(map);
	        }
	        return lists;
	    };
	    MajorResult.prototype.render = function () {
	        var this_ = this;
	        var majorList = this.getMajorResultList();
	        var ifShow = commonFunc_1.isEmptyObject(this.props.majorLibState.toJS().majorlib_search_value) || commonFunc_1.isEmptyObject(majorList) ? "none" : "block";
	        //判断是否为搜索结果
	        return (React.createElement("div", {className: "profession-content-list"}, React.createElement("div", {className: "show-search-text", style: { display: ifShow, marginBottom: "20px" }}, "以下是您的医案查询结果："), commonFunc_1.isEmptyObject(majorList) &&
	            React.createElement("div", {className: "show-search-text am-text-center", style: { marginBottom: "20px" }}, "暂无匹配医案，请尝试其他关键词搜索吧", React.createElement(antd_1.Icon, {type: "frown"})), majorList.map(function (major, index) {
	            return (React.createElement("div", {className: "profession-single am-cf", key: index}, React.createElement("div", {className: "profession-title"}, major.name), React.createElement("ul", {className: "profession-content"}, major.majorCategory.map(function (item, index) {
	                return (
	                //显示学科名称
	                React.createElement("div", null, React.createElement("br", null), React.createElement("li", {onClick: this_.showMajorDetail, id: item.subMajorMLID, key: index}, item.subMajorMLName), React.createElement("br", null), React.createElement(antd_1.Card, {title: item.subMajortitle, style: { width: '50%' }}, item.subMajorSum), React.createElement("br", null)));
	            }))));
	        })));
	    };
	    MajorResult.defaultProps = {};
	    return MajorResult;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    majorLibState: state.majorLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch)
	}); })(MajorResult);


/***/ }

});
//# sourceMappingURL=47.47.js.map