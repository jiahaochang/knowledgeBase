webpackJsonp([56],{

/***/ 840:
/*!*********************************************************!*\
  !*** ./actions/AssessCenter/MIAssess/MIAssessAction.ts ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actionTypes = __webpack_require__(/*! ./MIAssessActionTypes */ 394);
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var context = __webpack_require__(/*! ../../../pages/AssessCenter/MIAssess/MIAssessContext */ 841);
	//action 实际ajax请求及 对应状态树的变化
	function initMIAssessQuestions() {
	    var successFunc = function (response) {
	        context.setAllQuizzes(response.quizzes);
	    };
	    ajaxUtil_1.getDataByActionID(actionTypes.GET_MIASSESS_QUIZZES, successFunc);
	}
	exports.initMIAssessQuestions = initMIAssessQuestions;
	function initMIAssessFinishState() {
	    var successFunc = function (response) {
	        context.setMIAssessFinishState(response.result.isMIAssessFinished);
	    };
	    ajaxUtil_1.getDataByActionID(actionTypes.GET_MIASSESS_MIASSWSSFINISHSTATE, successFunc);
	}
	exports.initMIAssessFinishState = initMIAssessFinishState;


/***/ },

/***/ 841:
/*!********************************************************!*\
  !*** ./pages/AssessCenter/MIAssess/MIAssessContext.ts ***!
  \********************************************************/
/***/ function(module, exports) {

	"use strict";
	var allQuizzes;
	var quizTotalCount;
	function setAllQuizzes(quizzes) {
	    allQuizzes = quizzes;
	    quizTotalCount = quizzes.length;
	}
	exports.setAllQuizzes = setAllQuizzes;
	function getAllQuizzes() {
	    return allQuizzes;
	}
	exports.getAllQuizzes = getAllQuizzes;
	function getQuizTotalCount() {
	    return quizTotalCount;
	}
	exports.getQuizTotalCount = getQuizTotalCount;
	var allQuizAnswers; //{1:2}
	function setAllQuizAnswers(answers) {
	    allQuizAnswers = answers;
	}
	exports.setAllQuizAnswers = setAllQuizAnswers;
	function getAllQuizAnswers() {
	    return allQuizAnswers;
	}
	exports.getAllQuizAnswers = getAllQuizAnswers;
	var isMIAssessFinished;
	function setMIAssessFinishState(state) {
	    isMIAssessFinished = state;
	}
	exports.setMIAssessFinishState = setMIAssessFinishState;
	function getMIAssessFinishState() {
	    return isMIAssessFinished;
	}
	exports.getMIAssessFinishState = getMIAssessFinishState;


/***/ },

/***/ 849:
/*!****************************************************!*\
  !*** ./pages/AssessCenter/MIAssess/MIQuizPage.tsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/AssessCenter/MIAssess/MIAssessActionTypes */ 394);
	var FlipWithSlider = __webpack_require__(/*! ./Component/FlipWithSlider */ 850);
	var MIQuestionAndAnswerOption = __webpack_require__(/*! ./Component/MIQuestionAndAnswerOption */ 851);
	var context = __webpack_require__(/*! ./MIAssessContext */ 841);
	var MIAssessQuizAPI = __webpack_require__(/*! ./MIAssessQuizAPI */ 852);
	var Actions = __webpack_require__(/*! ../../../actions/AssessCenter/MIAssess/MIAssessAction */ 840);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	"use strict";
	var MIQuizPage = (function (_super) {
	    __extends(MIQuizPage, _super);
	    function MIQuizPage(props) {
	        _super.call(this, props);
	        this.state = {
	            currentPageNum: 1
	        };
	        this.onChangePageNum = this.onChangePageNum.bind(this);
	        this.onSubmitResult = this.onSubmitResult.bind(this);
	        this.onFinishedAnswer = this.onFinishedAnswer.bind(this);
	    }
	    MIQuizPage.prototype.onChangePageNum = function (pageNumAfterChanged) {
	        this.setState({
	            currentPageNum: pageNumAfterChanged
	        });
	    };
	    MIQuizPage.prototype.onSubmitResult = function () {
	        var undonePageList = MIAssessQuizAPI.getUndonePageList();
	        if (!undonePageList || undonePageList.length === 0) {
	            console.log(MIAssessQuizAPI.getMIResultData());
	            var postData = MIAssessQuizAPI.getMIResultData();
	            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SUBMIT_MIASSESS_ANSWERS, postData, function () {
	                antd_1.message.success('提交成功');
	            });
	            var url = "assessCenter/MIAssess";
	            this.props.router.push(url);
	        }
	        else {
	            console.log(undonePageList);
	            this.setState({
	                currentPageNum: undonePageList[0]
	            });
	        }
	    };
	    MIQuizPage.prototype.onFinishedAnswer = function () {
	        var totalPageCount = context.getQuizTotalCount();
	        if (this.state.currentPageNum === totalPageCount) {
	            this.setState({
	                currentPageNum: totalPageCount
	            });
	        }
	        else {
	            this.setState({
	                currentPageNum: this.state.currentPageNum + 1
	            });
	        }
	    };
	    MIQuizPage.prototype.componentWillMount = function () {
	        //ajax
	        Actions.initMIAssessQuestions();
	    };
	    MIQuizPage.prototype.componentDidMount = function () { };
	    MIQuizPage.prototype.render = function () {
	        var currentPageNum = this.state.currentPageNum;
	        var totalPageCount = context.getQuizTotalCount();
	        return (React.createElement("div", null, React.createElement(MIQuestionAndAnswerOption, {currentPageNum: currentPageNum, onFinishedAnswer: this.onFinishedAnswer}), React.createElement(FlipWithSlider, {totalPageCount: totalPageCount, currentPageNum: currentPageNum, onChangePageNum: this.onChangePageNum, onSubmitResult: this.onSubmitResult, isSliderDraggable: true})));
	    };
	    return MIQuizPage;
	}(React.Component));
	module.exports = react_router_1.withRouter(MIQuizPage);


/***/ },

/***/ 850:
/*!******************************************************************!*\
  !*** ./pages/AssessCenter/MIAssess/Component/FlipWithSlider.tsx ***!
  \******************************************************************/
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
	var preBtyType = "preBtn"; //上一页
	var nextBtnType = "nextBtn"; //下一页
	/**
	 * 带有滑块进度条的翻页组件
	 */
	var FlipWithSlider = (function (_super) {
	    __extends(FlipWithSlider, _super);
	    function FlipWithSlider(props) {
	        _super.call(this, props);
	        this.getPageNumAfterChange = this.getPageNumAfterChange.bind(this);
	        this.afterSliderChange = this.afterSliderChange.bind(this);
	        this.ChangePageNum = this.ChangePageNum.bind(this);
	    }
	    FlipWithSlider.prototype.ChangePageNum = function (btnType) {
	        var pageNumAfterChange = this.getPageNumAfterChange(btnType);
	        this.props.onChangePageNum(pageNumAfterChange);
	    };
	    FlipWithSlider.prototype.getPageNumAfterChange = function (btnType) {
	        if (btnType === preBtyType) {
	            return this.props.currentPageNum - 1;
	        }
	        else if (btnType === nextBtnType) {
	            return this.props.currentPageNum + 1;
	        }
	        else {
	            return this.props.currentPageNum;
	        }
	    };
	    FlipWithSlider.prototype.afterSliderChange = function (value) {
	        this.props.onChangePageNum(value);
	    };
	    FlipWithSlider.prototype.render = function () {
	        var _a = this.props, totalPageCount = _a.totalPageCount, currentPageNum = _a.currentPageNum, isSliderDraggable = _a.isSliderDraggable;
	        var isPrePageEnable = !(currentPageNum === 1);
	        var isNextPageEnable = !(currentPageNum === totalPageCount);
	        var isSubmitBtnShown = currentPageNum === totalPageCount;
	        return (React.createElement("div", null, React.createElement(antd_1.Slider, {min: 1, max: this.props.totalPageCount, value: this.props.currentPageNum, onChange: this.afterSliderChange, disabled: !isSliderDraggable}), isPrePageEnable &&
	            React.createElement(antd_1.Button, {className: "MIAssess-btn-last", onClick: this.ChangePageNum.bind(this, preBtyType)}, "上一题"), isSubmitBtnShown &&
	            React.createElement(antd_1.Button, {className: "MIAssess-btn-submit", onClick: this.props.onSubmitResult}, "提交"), isNextPageEnable &&
	            React.createElement(antd_1.Button, {className: "MIAssess-btn-next", onClick: this.ChangePageNum.bind(this, nextBtnType)}, "下一题")));
	    };
	    return FlipWithSlider;
	}(React.Component));
	module.exports = FlipWithSlider;


/***/ },

/***/ 851:
/*!*****************************************************************************!*\
  !*** ./pages/AssessCenter/MIAssess/Component/MIQuestionAndAnswerOption.tsx ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var MIAssessAPI = __webpack_require__(/*! ../MIAssessQuizAPI */ 852);
	"use strict";
	var MIQuestionAndAnserOption = (function (_super) {
	    __extends(MIQuestionAndAnserOption, _super);
	    function MIQuestionAndAnserOption(props) {
	        _super.call(this, props);
	    }
	    MIQuestionAndAnserOption.prototype.clickedRadio = function (answerNo) {
	        MIAssessAPI.saveAnswer(this.props.currentPageNum, answerNo);
	        this.props.onFinishedAnswer();
	    };
	    MIQuestionAndAnserOption.prototype.render = function () {
	        var currentPageNum = this.props.currentPageNum;
	        var quiz = MIAssessAPI.getQuizByPageNum(currentPageNum);
	        var questionText = quiz.questionText;
	        var answerOptions = quiz.answerOptions;
	        var this_ = this;
	        var answer = MIAssessAPI.getAnswerByPageNum(currentPageNum);
	        var hasChosenAnswer = typeof answer === "undefined" ? false : true;
	        return (React.createElement("div", {className: "MIAssess-questionAndAnswer"}, React.createElement("div", {className: "MIAssess-currentPageNum"}, currentPageNum), React.createElement("div", {className: "MIAssess-questionText"}, questionText), React.createElement("br", null), React.createElement("div", {className: "MIAssess-questionAndAnswerList"}, answerOptions.map(function (item, index) {
	            var divClass = "MIAssess-questionAndAnswerList-div";
	            var checked = false;
	            if (hasChosenAnswer && item.answerNo === answer) {
	                checked = true;
	                divClass = "MIAssess-questionAndAnswerList-div-active";
	            }
	            var key = currentPageNum + "_" + item.answerNo;
	            return (React.createElement("div", {className: divClass, key: key}, React.createElement("input", {className: "MIAssess-questionAndAnswerList-input", type: "radio", name: "answerOption", value: item.answerText, id: item.answerNo, onClick: this_.clickedRadio.bind(this_, item.answerNo), checked: checked, readOnly: true}), React.createElement("label", {htmlFor: item.answerNo}, "    ", React.createElement("span", null, item.answerText))));
	        }))));
	    };
	    return MIQuestionAndAnserOption;
	}(React.Component));
	module.exports = MIQuestionAndAnserOption;


/***/ },

/***/ 852:
/*!********************************************************!*\
  !*** ./pages/AssessCenter/MIAssess/MIAssessQuizAPI.ts ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var context = __webpack_require__(/*! ./MIAssessContext */ 841);
	"use strict";
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	var MIAssessContext_1 = __webpack_require__(/*! ./MIAssessContext */ 841);
	//pageNum start with 1
	function getQuizByPageNum(pageNum) {
	    var quizzes = context.getAllQuizzes();
	    return quizzes[pageNum - 1];
	}
	exports.getQuizByPageNum = getQuizByPageNum;
	function getAnswerByPageNum(pageNum) {
	    var allQuizAnswers = MIAssessContext_1.getAllQuizAnswers();
	    if (commonFunc_1.hasKeyInMap(pageNum, allQuizAnswers)) {
	        return allQuizAnswers[pageNum];
	    }
	}
	exports.getAnswerByPageNum = getAnswerByPageNum;
	//save answer in page n
	function saveAnswer(pageNum, answerNum) {
	    var answers = context.getAllQuizAnswers();
	    if (typeof answers === "undefined") {
	        answers = {};
	    }
	    answers[pageNum] = answerNum;
	    context.setAllQuizAnswers(answers);
	}
	exports.saveAnswer = saveAnswer;
	//get submit answer data
	function getMIResultData() {
	    var allAnswers = context.getAllQuizAnswers(); //{ pageNo:answerNo}
	    var allQuizzes = context.getAllQuizzes();
	    var resultData = []; //[ {questionNo:answerNo} ]
	    for (var key in allAnswers) {
	        var questionNo = allQuizzes[parseInt(key) - 1].questionNo;
	        var answerNo = allAnswers[key];
	        var resultObj = {};
	        resultObj[questionNo] = answerNo;
	        resultData.push(resultObj);
	    }
	    return resultData;
	}
	exports.getMIResultData = getMIResultData;
	//get pageNum list did not have answer
	function getUndonePageList() {
	    var totalCount = context.getQuizTotalCount();
	    var allQuizAnswers = context.getAllQuizAnswers();
	    var undonePageList = [];
	    for (var i = 1; i < totalCount + 1; i++) {
	        if (!commonFunc_1.hasKeyInMap(i, allQuizAnswers)) {
	            undonePageList.push(i);
	        }
	    }
	    return undonePageList;
	}
	exports.getUndonePageList = getUndonePageList;


/***/ }

});
//# sourceMappingURL=56.56.js.map