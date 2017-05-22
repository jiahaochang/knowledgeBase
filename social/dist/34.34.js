webpackJsonp([34],{

/***/ 737:
/*!*********************************************!*\
  !*** ./pages/TermAnalysis/TermAnalysis.tsx ***!
  \*********************************************/
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
	/**
	 * 学期总结主页
	 */
	var TermAnalysis = (function (_super) {
	    __extends(TermAnalysis, _super);
	    function TermAnalysis(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TermAnalysis.prototype.componentDidMount = function () {
	    };
	    TermAnalysis.prototype.render = function () {
	        var links = menuUtil_1.getMenuInfoList(MenuConfig_1.StudentTermAnalysisDefaultStruct);
	        return (React.createElement("div", {className: "main-container"}, React.createElement("div", {className: "col2-withLeftTab-leftSide"}, React.createElement("div", {className: "fixed-nav-btnList"}, React.createElement("ul", null, links.map(function (item, index) {
	            return (React.createElement("li", {key: index}, React.createElement(react_router_1.Link, {to: { pathname: item.url }, activeClassName: "active"}, item.displayName)));
	        })))), React.createElement("div", {className: "col2-withLeftTab-rightSide am-margin-top"}, this.props.children)));
	    };
	    TermAnalysis.defaultProps = {};
	    return TermAnalysis;
	}(React.Component));
	module.exports = react_router_1.withRouter(TermAnalysis);


/***/ }

});
//# sourceMappingURL=34.34.js.map