webpackJsonp([20],{

/***/ 675:
/*!***************************************!*\
  !*** ./pages/AdminPage/AdminPage.tsx ***!
  \***************************************/
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
	var menuUtil_1 = __webpack_require__(/*! ../../common/menuUtil */ 429);
	var MenuConfig_1 = __webpack_require__(/*! ../../common/Config/MenuConfig */ 431);
	var AdminPage = (function (_super) {
	    __extends(AdminPage, _super);
	    function AdminPage(props) {
	        _super.call(this, props);
	    }
	    AdminPage.prototype.componentDidMount = function () {
	    };
	    AdminPage.prototype.componentWillMount = function () {
	        var links = menuUtil_1.getMenuInfoList(MenuConfig_1.AdminDefaultStruct);
	        this.setState({
	            links: links
	        });
	    };
	    AdminPage.prototype.render = function () {
	        /*var links = [
	            {
	                url: "adminPage/accountManagement",
	                displayName: "账户管理"
	            },
	            {
	                url: "adminPage/scoreManagement",
	                displayName: "成绩管理"
	            },
	            {
	                url: "adminPage/courseLibManagement",
	                displayName: "课程库"
	            },
	            {
	                url: "adminPage/clubManagement",
	                displayName: "活动与社团库"
	            },
	            {
	                url: "adminPage/honorManagement",
	                displayName: "特长/荣誉/职务"
	            },
	            {
	                url: "adminPage/studentEvaluateWordsManagement",
	                displayName: "同学描述用语"
	            },
	            {
	                url: "adminPage/monthThemeManagement",
	                displayName: "月度主题"
	            },
	            {
	                url: "adminPage/statistics",
	                displayName: "统计功能"
	            },
	            {
	                url: "adminPage/recordManagement",
	                displayName: "档案管理"
	            },
	            {
	                url: "adminPage/integralScoreManagement",
	                displayName: "积分管理"
	            },
	            {
	                url: "adminPage/contentAudit",
	                displayName: "内容审核"
	            }
	        ];*/
	        var links = this.state.links;
	        return (React.createElement("div", {className: "main-container"}, React.createElement("div", {className: "col2-withLeftTab-leftSide"}, React.createElement("div", {className: "fixed-nav-btnList"}, React.createElement("ul", null, links.map(function (item, index) {
	            return (React.createElement("li", {key: index}, React.createElement(react_router_1.Link, {to: { pathname: item.url }, activeClassName: "active"}, item.displayName)));
	        })))), React.createElement("div", {className: "col2-withLeftTab-rightSide"}, this.props.children)));
	    };
	    AdminPage.defaultProps = {};
	    return AdminPage;
	}(React.Component));
	module.exports = react_router_1.withRouter(AdminPage);


/***/ }

});
//# sourceMappingURL=20.20.js.map