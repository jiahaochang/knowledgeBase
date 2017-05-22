webpackJsonp([46],{

/***/ 791:
/*!*****************************************!*\
  !*** ./pages/SubjectLib/SubjectLib.tsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	//中医周边
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var SubjectContent = __webpack_require__(/*! ./Component/SubjectContent */ 792);
	var ItemsActions = __webpack_require__(/*! ../../actions/SubjectLib/SubjectLibAction */ 794);
	var redux_1 = __webpack_require__(/*! redux */ 338);
	var react_redux_1 = __webpack_require__(/*! react-redux */ 331);
	"use strict";
	var SubjectLib = (function (_super) {
	    __extends(SubjectLib, _super);
	    function SubjectLib(props) {
	        _super.call(this, props);
	        this.handleClick = this.handleClick.bind(this);
	    }
	    SubjectLib.prototype.componentWillMount = function () {
	        //ajax to get data
	        this.props.actions.initSubjectLibCurrentSubject(true);
	    };
	    SubjectLib.prototype.handleClick = function (subName) {
	        this.props.actions.changeSubjName({ currentSubject: subName }); //唯一改变状态的入口
	        console.log("currentSubject是" + this.props.subjectLibState.toJS().currentSubject);
	    };
	    SubjectLib.prototype.render = function () {
	        var currentSubjectName = this.props.subjectLibState.toJS().currentSubject;
	        return (React.createElement("div", {className: "main-container"}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 24, style: { paddingRight: "20px" }}, React.createElement(SubjectContent, {subName: currentSubjectName})))));
	    };
	    return SubjectLib;
	}(React.Component));
	module.exports = react_redux_1.connect(function (state) { return ({
	    subjectLibState: state.subjectLibState
	}); }, function (dispatch) { return ({
	    actions: redux_1.bindActionCreators(ItemsActions, dispatch),
	    changeSubjName: redux_1.bindActionCreators(ItemsActions.changeSubjName, dispatch),
	}); })(SubjectLib);


/***/ },

/***/ 792:
/*!*******************************************************!*\
  !*** ./pages/SubjectLib/Component/SubjectContent.tsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var context = __webpack_require__(/*! ../SubjectLibContext */ 793);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var Panel = antd_1.Collapse.Panel;
	"use strict";
	var SubjectContent = (function (_super) {
	    __extends(SubjectContent, _super);
	    function SubjectContent() {
	        _super.apply(this, arguments);
	    }
	    SubjectContent.prototype.callback = function (key) {
	        console.log(key);
	    };
	    SubjectContent.prototype.render = function () {
	        var subjectLibMockData = context.getSubjectLibResponseData();
	        var snArr = subjectLibMockData.subjects;
	        var content = [];
	        for (var i = 0; i < snArr.length; i++) {
	            if (snArr[i].subjectName == this.props.subName) {
	                content = snArr[i].references;
	            }
	        }
	        return (React.createElement("div", {className: "profession-single am-cf block-box-shadows"}, content.map(function (item, index) {
	            {
	            }
	            return (React.createElement(antd_1.Collapse, {defaultActiveKey: ['1']}, React.createElement(Panel, {header: item.referenceKey, key: "1"}, React.createElement("p", null, item.referenceValue)), React.createElement(Panel, {header: item.referenceKey, key: "2"}, React.createElement("p", null, item.referenceValue1)), React.createElement(Panel, {header: item.referenceKey, key: "3"}, React.createElement("p", null, item.referenceValue2))));
	        })));
	    };
	    return SubjectContent;
	}(React.Component));
	module.exports = SubjectContent;


/***/ },

/***/ 793:
/*!***********************************************!*\
  !*** ./pages/SubjectLib/SubjectLibContext.ts ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	var subjectLibResponseData;
	function setSubjectLibResponseData(responseData) {
	    subjectLibResponseData = responseData;
	}
	exports.setSubjectLibResponseData = setSubjectLibResponseData;
	function getSubjectLibResponseData() {
	    return subjectLibResponseData;
	}
	exports.getSubjectLibResponseData = getSubjectLibResponseData;


/***/ },

/***/ 794:
/*!************************************************!*\
  !*** ./actions/SubjectLib/SubjectLibAction.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actionTypes = __webpack_require__(/*! ./SubjectLibActionTypes */ 364);
	var ajaxUtil_1 = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var context = __webpack_require__(/*! ../../pages/SubjectLib/SubjectLibContext */ 793);
	//action 实际ajax请求及 对应状态树的变化
	function mergeSubjectLibCurrentSubject(state) {
	    return {
	        type: actionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
	        mergeState: state
	    };
	}
	exports.mergeSubjectLibCurrentSubject = mergeSubjectLibCurrentSubject;
	function initSubjectLibCurrentSubject() {
	    var response = ajaxUtil_1.getDataByActionID(actionTypes.INIT_SUBJLIB_CURRENTSUBJ, null).result;
	    context.setSubjectLibResponseData(response);
	    var currentSubject = response.subjects[0].subjectName;
	    var initState = { currentSubject: currentSubject };
	    return {
	        type: actionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
	        mergeState: initState
	    };
	}
	exports.initSubjectLibCurrentSubject = initSubjectLibCurrentSubject;
	function changeSubjName(state) {
	    return {
	        type: actionTypes.MERGE_SUBJLIB_CURRENTSUBJ,
	        mergeState: state
	    };
	}
	exports.changeSubjName = changeSubjName;


/***/ }

});
//# sourceMappingURL=46.46.js.map