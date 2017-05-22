webpackJsonp([18],{

/***/ 673:
/*!********************************************************!*\
  !*** ./pages/TeacherPersonalPage/OtherteacherPage.tsx ***!
  \********************************************************/
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
	var OtherTeacherPage = (function (_super) {
	    __extends(OtherTeacherPage, _super);
	    function OtherTeacherPage(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    OtherTeacherPage.prototype.componentWillMount = function () {
	        //var response = ajaxUtil.getDataFromContextByActionID(getResponseCache(), ActionTypes.GET_TEACHER_MODULECONFIG);
	        var links = menuUtil_1.getMenuInfoList(MenuConfig_1.OtherTeacherPageDefaultStruct);
	        var otherTeacherUserID = this.props.location.query.otherTeacherUserID;
	        this.setState({
	            links: links,
	            otherTeacherUserID: otherTeacherUserID
	        });
	    };
	    OtherTeacherPage.prototype.render = function () {
	        var otherTeacherUserID = this.state.otherTeacherUserID;
	        if (!otherTeacherUserID) {
	            return React.createElement("div", null, "loading");
	        }
	        return (React.createElement("div", {className: "main-container"}, React.createElement("div", {className: "col2-withLeftTab-leftSide"}, React.createElement("div", {className: "fixed-nav-btnList"}, React.createElement("ul", null, this.state.links.map(function (item, index) {
	            var linkInfo = {
	                pathname: item.url,
	                query: {
	                    disableEdit: true,
	                    otherTeacherUserID: otherTeacherUserID
	                }
	            };
	            return (React.createElement("li", {key: index}, React.createElement(react_router_1.Link, {to: linkInfo, activeClassName: "active"}, item.displayName)));
	        })))), React.createElement("div", {className: "col2-withLeftTab-rightSide am-margin-top am-margin-bottom"}, this.props.children)));
	    };
	    OtherTeacherPage.defaultProps = {};
	    return OtherTeacherPage;
	}(React.Component));
	module.exports = react_router_1.withRouter(OtherTeacherPage);


/***/ }

});
//# sourceMappingURL=18.18.js.map