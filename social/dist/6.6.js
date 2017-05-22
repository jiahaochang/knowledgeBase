webpackJsonp([6],{

/***/ 483:
/*!******************************************************!*\
  !*** ./pages/HomePage/MyFollow/Component/MyFans.tsx ***!
  \******************************************************/
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
	 * 我的粉丝
	 */
	var MyFans = (function (_super) {
	    __extends(MyFans, _super);
	    function MyFans(props) {
	        _super.call(this, props);
	        this.cancelConcern = this.cancelConcern.bind(this);
	        this.addConcern = this.addConcern.bind(this);
	    }
	    MyFans.prototype.componentWillMount = function () {
	        var fansList = [
	            {
	                studentID: "01",
	                nickName: "张三",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg",
	                status: 2,
	            },
	            {
	                studentID: "02",
	                nickName: "李四",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg",
	                status: 1,
	            },
	            {
	                studentID: "03",
	                nickName: "王二麻子",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg",
	                status: 2,
	            },
	            {
	                studentID: "04",
	                nickName: "判官",
	                className: "高一一班",
	                imgURL: "vendor/images/default-headpic.jpg",
	                status: 1,
	            },
	        ];
	        this.setState({ fansList: fansList });
	    };
	    //取消关注
	    MyFans.prototype.cancelConcern = function (studentID) {
	        console.log(studentID);
	        //state再赋值刷新页面
	    };
	    //关注
	    MyFans.prototype.addConcern = function (studnetID) {
	        console.log(studnetID);
	    };
	    MyFans.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement(antd_1.Row, {className: "am-margin-top"}, this.state.fansList.map(function (info, index) {
	            var content = null, title = "";
	            if (info.status == 1) {
	                title = "互相关注";
	                content = (React.createElement("div", {style: { cursor: "pointer" }, onClick: this_.cancelConcern.bind(this_, info.studentID)}, "取消关注"));
	            }
	            else if (info.status == 2) {
	                title = "未关注";
	                content = (React.createElement("div", {style: { cursor: "pointer" }, onClick: this_.addConcern.bind(this_, info.studentID)}, "关注"));
	            }
	            return (React.createElement(antd_1.Col, {span: 8, key: index}, React.createElement("div", {className: "myFollow-box"}, React.createElement("img", {src: info.imgURL}), React.createElement("div", {className: "name-div"}, React.createElement("b", null, info.nickName), React.createElement(antd_1.Popover, {content: content, overlayClassName: "popver-width", placement: "bottom"}, React.createElement("span", {className: "rightinfo"}, title, React.createElement("i", {className: "fa fa-angle-down"})))), React.createElement("div", {className: "am-margin-top"}, info.className))));
	        })));
	    };
	    MyFans.defaultProps = {};
	    return MyFans;
	}(React.Component));
	module.exports = MyFans;


/***/ }

});
//# sourceMappingURL=6.6.js.map