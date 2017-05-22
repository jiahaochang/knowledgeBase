webpackJsonp([1],{

/***/ 435:
/*!*************************************!*\
  !*** ./pages/HomePage/HomePage.tsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var HeadSearchBox = __webpack_require__(/*! ../../common/Component/HeadSearchBox */ 436);
	//for test
	"use strict";
	var replyText = React.createElement("span", null, "回复");
	var likeText = React.createElement("span", null, "点赞");
	var HomePage = (function (_super) {
	    __extends(HomePage, _super);
	    function HomePage(props) {
	        _super.call(this, props);
	        this.searchWithInput = this.searchWithInput.bind(this);
	    }
	    HomePage.prototype.searchWithInput = function (val) {
	        var postData = {
	            keyword: val,
	        };
	    };
	    HomePage.prototype.render = function () {
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 20, offset: '3'}, React.createElement("div", {align: "center"}, React.createElement("img", {src: "../../vendor/images/logo.png", height: "370", width: "370"})))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 20}, React.createElement(HeadSearchBox, {title: "输入搜索关键词", searchCallBack: this.searchWithInput})))));
	    };
	    return HomePage;
	}(React.Component));
	module.exports = react_router_1.withRouter(HomePage);


/***/ },

/***/ 436:
/*!********************************************!*\
  !*** ./common/Component/HeadSearchBox.tsx ***!
  \********************************************/
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
	    SearchBox.prototype.render = function () {
	        return (React.createElement("div", {className: "head-search-box-orange"}, React.createElement("input", {type: "text", id: "searchInput", onKeyUp: this.handlerKeyUp}), React.createElement("i", {className: " anticon anticon-search"}), React.createElement("button", {onClick: this.searchWithInput}, "搜索")));
	    };
	    SearchBox.defaultProps = {};
	    return SearchBox;
	}(React.Component));
	module.exports = SearchBox;


/***/ }

});
//# sourceMappingURL=1.1.js.map