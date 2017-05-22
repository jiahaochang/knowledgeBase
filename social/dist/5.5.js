webpackJsonp([5],{

/***/ 481:
/*!*********************************************************!*\
  !*** ./pages/HomePage/MyFollow/Component/MyConcern.tsx ***!
  \*********************************************************/
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
	/**
	 * 我的关注
	 */
	var MyConcern = (function (_super) {
	    __extends(MyConcern, _super);
	    function MyConcern(props) {
	        _super.call(this, props);
	        this.cancelConcern = this.cancelConcern.bind(this);
	    }
	    MyConcern.prototype.componentWillMount = function () {
	        var concernList = [
	            {
	                studentID: "01",
	                nickName: "张三",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg"
	            },
	            {
	                studentID: "02",
	                nickName: "李四",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg"
	            },
	            {
	                studentID: "03",
	                nickName: "王二麻子",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg"
	            },
	            {
	                studentID: "04",
	                nickName: "判官",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg"
	            },
	        ];
	        this.setState({ concernList: concernList });
	    };
	    //取消关注
	    MyConcern.prototype.cancelConcern = function (studentID) {
	        console.log(studentID);
	        //state再赋值刷新页面
	    };
	    MyConcern.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement(antd_1.Row, {className: "am-margin-top"}, this.state.concernList.map(function (info, index) {
	            var content = (React.createElement("div", {style: { cursor: "pointer" }, onClick: this_.cancelConcern.bind(this_, info.studentID)}, "取消关注"));
	            return (React.createElement(antd_1.Col, {span: 8, key: index}, React.createElement("div", {className: "myFollow-box"}, React.createElement("img", {src: info.imgURL}), React.createElement("div", {className: "name-div"}, React.createElement("b", null, info.nickName), React.createElement(antd_1.Popover, {content: content, overlayClassName: "popver-width", placement: "bottom"}, React.createElement("span", {className: "rightinfo"}, "已关注", React.createElement("i", {className: "fa fa-angle-down"})))), React.createElement("div", {className: "am-margin-top"}, info.className))));
	        })));
	    };
	    MyConcern.defaultProps = {};
	    return MyConcern;
	}(React.Component));
	module.exports = MyConcern;


/***/ }

});
//# sourceMappingURL=5.5.js.map