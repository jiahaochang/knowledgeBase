webpackJsonp([59],{

/***/ 863:
/*!*********************************************!*\
  !*** ./pages/Notification/Notification.tsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var NotificationNameList = __webpack_require__(/*! ./Component/NotificationNameList */ 864);
	var NotificationContent = __webpack_require__(/*! ./Component/NotificationContent */ 865);
	"use strict";
	var Notification = (function (_super) {
	    __extends(Notification, _super);
	    function Notification(props) {
	        _super.call(this, props);
	        this.state = {
	            currentNotificationName: "通知"
	        };
	        this.handleClick = this.handleClick.bind(this);
	    }
	    Notification.prototype.componentWillMount = function () {
	    };
	    Notification.prototype.handleClick = function (NotificationName) {
	        this.setState({
	            currentNotificationName: NotificationName
	        });
	    };
	    Notification.prototype.render = function () {
	        var currentNotificationName = this.state.currentNotificationName;
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 6}, React.createElement(NotificationNameList, {currentNotificationName: currentNotificationName, handleClick: this.handleClick})), React.createElement(antd_1.Col, {span: 18}, React.createElement(NotificationContent, {currentNotificationName: currentNotificationName})))));
	    };
	    Notification.defaultProps = {};
	    return Notification;
	}(React.Component));
	module.exports = Notification;


/***/ },

/***/ 864:
/*!***************************************************************!*\
  !*** ./pages/Notification/Component/NotificationNameList.tsx ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var NotificationNameList = (function (_super) {
	    __extends(NotificationNameList, _super);
	    function NotificationNameList() {
	        _super.call(this);
	        this.handleClick = this.handleClick.bind(this);
	    }
	    NotificationNameList.prototype.handleClick = function (NotificationName) {
	        this.props.handleClick(NotificationName);
	    };
	    NotificationNameList.prototype.render = function () {
	        var this_ = this;
	        var NotificationNameList = ['通知', '评论', '赞'];
	        return (React.createElement("div", {className: "notification-box"}, React.createElement("h1", {className: "notification-nav-title"}, "我的消息箱"), React.createElement("ul", {className: "notification-nav-btnList index-fixed"}, NotificationNameList.map(function (item, index) {
	            var activeClass = item == this_.props.currentNotificationName ? "active" : "";
	            return (React.createElement("li", {key: index, className: activeClass, onClick: this_.handleClick.bind(this_, item)}, item));
	        }))));
	    };
	    return NotificationNameList;
	}(React.Component));
	module.exports = NotificationNameList;


/***/ },

/***/ 865:
/*!**************************************************************!*\
  !*** ./pages/Notification/Component/NotificationContent.tsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var NotificationContent = (function (_super) {
	    __extends(NotificationContent, _super);
	    function NotificationContent(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    NotificationContent.prototype.render = function () {
	        var allcontent = [
	            {
	                notificationType: "通知",
	                notificationItems: [
	                    {
	                        notificationID: "1",
	                        name: "李老师",
	                        time: "7月10日 10:30",
	                        content: "通知高一一班的同学",
	                        extra: "大家假期注意安全，假期愉快"
	                    }
	                ]
	            },
	            {
	                notificationType: "评论",
	                notificationItems: [
	                    {
	                        notificationID: "1",
	                        name: "李小",
	                        time: "7月10日 11:30",
	                        content: "回复李帅龙：放假注意事项学校网站上有通知，可以去看一下",
	                        extra: "回复我的状态：请问放假具体时间安排和注意事项哪里可以看到！谢谢！"
	                    }
	                ]
	            },
	            {
	                notificationType: "赞",
	                notificationItems: [
	                    {
	                        notificationID: "1",
	                        name: "赵小",
	                        time: "7月10日 11:20",
	                        content: "赞了我的状态",
	                        extra: "我：请问放假具体时间安排和注意事项哪里可以看到！谢谢！"
	                    }
	                ]
	            }
	        ];
	        var content = [];
	        for (var i = 0; i < allcontent.length; i++) {
	            if (allcontent[i].notificationType == this.props.currentNotificationName) {
	                content = allcontent[i].notificationItems;
	            }
	        }
	        var isComment = "";
	        if (this.props.currentNotificationName == "评论") {
	            isComment = "comment-written";
	        }
	        else {
	            isComment = "no-comment";
	        }
	        return (React.createElement("div", {className: "notification-box"}, React.createElement("h3", {className: "notification-content-title"}, "收到的", this.props.currentNotificationName), content.map(function (item, index) {
	            return (React.createElement("div", {key: index, className: "notification-content"}, React.createElement("img", {src: "vendor/images/default-headpic.jpg"}), React.createElement("div", {className: "words"}, React.createElement("div", {className: "nameAndTime"}, item.name, React.createElement("span", null, item.time)), React.createElement("div", {className: "margin-top-content"}, React.createElement("span", null, item.content)), React.createElement("div", {className: "extra-reply"}, React.createElement("span", null, item.extra)), React.createElement("div", {className: isComment}, React.createElement("span", null, "回复")))));
	        })));
	    };
	    return NotificationContent;
	}(React.Component));
	module.exports = NotificationContent;


/***/ }

});
//# sourceMappingURL=59.59.js.map