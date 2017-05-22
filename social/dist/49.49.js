webpackJsonp([49],{

/***/ 808:
/*!*********************************!*\
  !*** ./pages/Search/Search.tsx ***!
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
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	var GroupCheckbox = __webpack_require__(/*! ./Component/GroupCheckbox */ 809);
	var PersonInfoList = __webpack_require__(/*! ./Component/PersonInfoList */ 810);
	var ActionTypes = __webpack_require__(/*! ../../actions/Search/SearchActionTypes */ 373);
	var ajaxUtil = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var ItemsActions = __webpack_require__(/*! ../../actions/Search/SearchAction */ 433);
	"use strict";
	/**
	 * 搜索用户
	 */
	var Search = (function (_super) {
	    __extends(Search, _super);
	    function Search(props) {
	        _super.call(this, props);
	        this.state = {
	            results: []
	        };
	        this.setCurrentGrade = this.setCurrentGrade.bind(this);
	    }
	    Search.prototype.componentWillMount = function () {
	        var this_ = this;
	        //ajax获取用于筛选搜索结果的左侧条件
	        ajaxUtil.getDataByActionIDAsync(ActionTypes.GET_SEARCH_OPTIONS, function (response) {
	            var optionRecords = response.result;
	            this_.setState({
	                gradeOptions: optionRecords.gradeOptions,
	            });
	        });
	        this_.setState({ currentGrade: [] });
	    };
	    /**
	     * 将当前选中的年级设置state
	     */
	    Search.prototype.setCurrentGrade = function (checkedValues) {
	        this.setState({ currentGrade: checkedValues });
	    };
	    Search.prototype.componentDidMount = function () {
	    };
	    Search.prototype.render = function () {
	        //获取左侧筛选栏的筛选条件“年级”
	        var options = this.state.gradeOptions;
	        var gradeCheckTitle = "所在年级：";
	        //@param searchResult显示的搜索结果
	        var searchResult = [];
	        //根据左侧的年级筛选条件来筛选搜索结果
	        var responseData = [];
	        responseData = this.props.searchState.toJS().searchResult;
	        var currentGrade = this.state.currentGrade;
	        if (currentGrade.length != 0) {
	            for (var key in responseData) {
	                for (var i = 0; i < currentGrade.length; i++) {
	                    if ((responseData[key].grade + "").indexOf(currentGrade[i]) != -1) {
	                        searchResult.push(responseData[key]);
	                    }
	                }
	            }
	        }
	        else if (currentGrade.length == 0) {
	            searchResult = responseData;
	        }
	        //如果查找的返回信息为空，则提示“未查找到相关用户”
	        if (searchResult.length == 0) {
	            var message = "未查找到相关用户";
	        }
	        else {
	            var message = "";
	        }
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 4}, React.createElement("div", {className: "am-margin-top-lg"}, React.createElement(GroupCheckbox, {setCurrentGrade: this.setCurrentGrade, options: options, title: gradeCheckTitle}))), React.createElement(antd_1.Col, {span: 13}, React.createElement("div", {className: "am-margin-top-lg"}, message, searchResult.map(function (item, index) {
	            return (React.createElement(PersonInfoList, {key: index, searchResult: item}));
	        }))))));
	    };
	    Search.defaultProps = {};
	    return Search;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    searchState: state.searchState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	}); })(Search);


/***/ },

/***/ 809:
/*!**************************************************!*\
  !*** ./pages/Search/Component/GroupCheckbox.tsx ***!
  \**************************************************/
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
	var CheckboxGroup = antd_1.Checkbox.Group;
	var GroupCheckbox = (function (_super) {
	    __extends(GroupCheckbox, _super);
	    function GroupCheckbox(props) {
	        _super.call(this, props);
	        this.onChange = this.onChange.bind(this);
	        this.checkAll = this.checkAll.bind(this);
	    }
	    GroupCheckbox.prototype.componentWillMount = function () {
	        this.setState({ checked: true });
	        //this.props.options = [];
	    };
	    GroupCheckbox.prototype.setStateByProps = function (newProps) {
	        var options = newProps.options;
	        var checkboxGroupAllValue = [];
	        for (var key in options) {
	            checkboxGroupAllValue.push(options[key]['value']);
	        }
	        this.setState({ checkboxGroupAllValue: checkboxGroupAllValue });
	    };
	    GroupCheckbox.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    GroupCheckbox.prototype.onChange = function (checkedValues) {
	        var this_ = this;
	        console.log('checked = ', checkedValues);
	        this_.props.setCurrentGrade(checkedValues);
	        //设置CheckboxGroup的value为手动点击选上的内容
	        this_.setState({ checkboxGroupAllValue: checkedValues });
	        //设置“全部”选项为非选中状态
	        if (checkedValues.length < this.props.options.length) {
	            this_.setState({ checked: false });
	        }
	        else {
	            this_.setState({ checked: true });
	        }
	    };
	    GroupCheckbox.prototype.checkAll = function () {
	        //每次点击“全部”，设置“全部”选项为与上次点击不同的状态
	        this.setState({ checked: !this.state.checked });
	        //@param options 为checkbox中的选项内容组成的数组
	        var options = this.props.options;
	        var checkboxGroupAllValue = [];
	        //获取所有选项的value，当点击“全选”时，下面所有的checkbox设置为选中状态
	        for (var key in options) {
	            checkboxGroupAllValue.push(options[key]['value']);
	        }
	        //当点击“全部”时，如果下面的条件没有全部都选上，给全都选上，并且设置筛选条件
	        if (this.state.checkboxGroupAllValue.length != options.length) {
	            this.setState({ checkboxGroupAllValue: checkboxGroupAllValue });
	            this.props.setCurrentGrade(checkboxGroupAllValue);
	        }
	        else {
	            this.setState({ checkboxGroupAllValue: [] });
	            this.props.setCurrentGrade([]);
	        }
	    };
	    GroupCheckbox.prototype.render = function () {
	        var options = this.props.options;
	        var title = this.props.title;
	        return (React.createElement("div", {className: "block-box-shadows"}, title, React.createElement("br", null), React.createElement(antd_1.Checkbox, {onChange: this.checkAll, checked: this.state.checked}, "全部"), React.createElement("br", null), React.createElement(CheckboxGroup, {value: this.state.checkboxGroupAllValue, options: options, onChange: this.onChange})));
	    };
	    GroupCheckbox.defaultProps = {
	        options: [],
	    };
	    return GroupCheckbox;
	}(React.Component));
	module.exports = GroupCheckbox;


/***/ },

/***/ 810:
/*!***************************************************!*\
  !*** ./pages/Search/Component/PersonInfoList.tsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/CommonAction/CommonActionTypes */ 399);
	"use strict";
	var DropdownButton = antd_1.Dropdown.Button;
	var PersonInfoList = (function (_super) {
	    __extends(PersonInfoList, _super);
	    function PersonInfoList(props) {
	        _super.call(this, props);
	    }
	    PersonInfoList.prototype.handleButtonClick = function (userID, e) {
	        console.log('click left button', e);
	        console.log('userID=', userID);
	        var postData = { followingUserID: userID, };
	        ajaxUtil_1.getDataByActionIDWithQuery(ActionTypes.SET_COMMON_BECOMEFOLLOWER, postData, function () {
	            antd_1.message.success('加关注成功');
	        });
	    };
	    PersonInfoList.prototype.handleMenuClick = function (userID, e) {
	        console.log('click', e);
	        console.log('userID=', userID);
	        var postData = { cancelFollowingUserID: userID, };
	        ajaxUtil_1.getDataByActionIDWithQuery(ActionTypes.SET_COMMON_CANCELFOLLOWED, postData, function () {
	            antd_1.message.success('取消关注成功');
	        });
	    };
	    PersonInfoList.prototype.render = function () {
	        var searchResult = this.props.searchResult;
	        //已经互相关注
	        var cancelFollowed = (React.createElement(antd_1.Menu, {onClick: this.handleMenuClick.bind(this, searchResult.userID)}, React.createElement(antd_1.Menu.Item, {key: "1"}, "取消关注")));
	        if (searchResult.relationState == "1") {
	            var buttonContent = "已关注";
	        }
	        else if (searchResult.relationState == "0") {
	            var buttonContent = "加关注+";
	        }
	        else if (searchResult.relationState == "2") {
	            var buttonContent = "互相关注";
	        }
	        return (React.createElement("ul", {className: "homepage-activitiesUL"}, React.createElement("li", null, React.createElement("div", {className: "content"}, React.createElement("a", {className: "headPic"}, React.createElement("img", {src: searchResult.headImage})), React.createElement("div", {className: "header"}, React.createElement(antd_1.Row, null, React.createElement("span", {className: "am-padding-right-sm"}, searchResult.name)), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 2}, React.createElement("span", {className: "am-padding-right-lg"}, searchResult.gender)), React.createElement(antd_1.Col, {offset: "18"}, searchResult.relationState !== "0" &&
	            React.createElement(DropdownButton, {type: "ghost", overlay: cancelFollowed}, buttonContent), searchResult.relationState == "0" &&
	            React.createElement(antd_1.Button, {type: "ghost", onClick: this.handleButtonClick.bind(this, searchResult.userID)}, buttonContent))), React.createElement(antd_1.Row, null, React.createElement("span", null, searchResult.gradeName), React.createElement("span", null, searchResult.className))), React.createElement("div", {className: "content-desc"}, searchResult.stateMsg)))));
	    };
	    return PersonInfoList;
	}(React.Component));
	module.exports = react_router_1.withRouter(PersonInfoList);


/***/ }

});
//# sourceMappingURL=49.49.js.map