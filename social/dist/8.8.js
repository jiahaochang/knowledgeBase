webpackJsonp([8],{

/***/ 490:
/*!***********************************************************!*\
  !*** ./pages/TeacherPersonalPage/TeacherPersonalPage.tsx ***!
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
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var TestActionTypes = __webpack_require__(/*! ../../actions/AdminPage/AdminPageActionTypes */ 382);
	var menuUtil_1 = __webpack_require__(/*! ../../common/menuUtil */ 429);
	var MenuConfig_1 = __webpack_require__(/*! ../../common/Config/MenuConfig */ 431);
	var TeacherPersonalPage = (function (_super) {
	    __extends(TeacherPersonalPage, _super);
	    function TeacherPersonalPage(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TeacherPersonalPage.prototype.componentWillMount = function () {
	        //test generate code
	        var actionIDs = [];
	        for (var key in TestActionTypes) {
	            actionIDs.push(key);
	        }
	        console.log(actionIDs);
	        //var response = ajaxUtil.getDataFromContextByActionID(getResponseCache(), ActionTypes.GET_TEACHER_MODULECONFIG);
	        var links = menuUtil_1.getMenuInfoList(MenuConfig_1.TeacherDefaultStruct);
	        this.setState({
	            links: links
	        });
	    };
	    TeacherPersonalPage.prototype.render = function () {
	        /*var links = [
	            {
	                url: "homePage/teacherPersonalPage/classActivity",
	                displayName: "班团活动"
	            },
	            {
	                url: "homePage/teacherPersonalPage/studentPerformance",
	                displayName: "学生表现记录"
	            },
	            {
	                url: "homePage/teacherPersonalPage/classNotification",
	                displayName: "班级通知"
	            },
	            {
	                url: "homePage/teacherPersonalPage/specialStudent",
	                displayName: "特殊学生情况"
	            },
	            {
	                url: "homePage/teacherPersonalPage/rankInClass",
	                displayName: "班级积分排名"
	            },
	            {
	                url: "homePage/teacherPersonalPage/evaluateStudent",
	                displayName: "评价学生"
	            },
	            {
	                url: "homePage/teacherPersonalPage/reviewWordsManagement",
	                displayName: "评语管理"
	            },
	
	        ];*/
	        return (React.createElement("div", {className: "main-container"}, React.createElement("div", {className: "col2-withLeftTab-leftSide"}, React.createElement("div", {className: "fixed-nav-btnList"}, React.createElement("ul", null, this.state.links.map(function (item, index) {
	            return (React.createElement("li", {key: index}, React.createElement(react_router_1.Link, {to: { pathname: item.url }, activeClassName: "active"}, item.displayName)));
	        })))), React.createElement("div", {className: "col2-withLeftTab-rightSide am-margin-top am-margin-bottom"}, this.props.children)));
	    };
	    TeacherPersonalPage.defaultProps = {};
	    return TeacherPersonalPage;
	}(React.Component));
	module.exports = react_router_1.withRouter(TeacherPersonalPage);


/***/ }

});
//# sourceMappingURL=8.8.js.map