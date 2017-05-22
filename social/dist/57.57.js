webpackJsonp([57],{

/***/ 846:
/*!**************************************************************!*\
  !*** ./pages/AssessCenter/ValueAssess/ValueAssessContext.ts ***!
  \**************************************************************/
/***/ function(module, exports) {

	"use strict";
	var valueAspect;
	function setValueAspect(aspect) {
	    valueAspect = aspect;
	}
	exports.setValueAspect = setValueAspect;
	function getValueAspect() {
	    return valueAspect;
	}
	exports.getValueAspect = getValueAspect;
	var isValueAssessFinished;
	function setValueAssessFinishState(state) {
	    isValueAssessFinished = state;
	}
	exports.setValueAssessFinishState = setValueAssessFinishState;
	function getValueAssessFinishState() {
	    return isValueAssessFinished;
	}
	exports.getValueAssessFinishState = getValueAssessFinishState;


/***/ },

/***/ 847:
/*!***************************************************************!*\
  !*** ./actions/AssessCenter/ValueAssess/ValueAssessAction.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actionTypes = __webpack_require__(/*! ./ValueAssessActionTypes */ 408);
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var context = __webpack_require__(/*! ../../../pages/AssessCenter/ValueAssess/ValueAssessContext */ 846);
	function initValueAssessFinishState() {
	    var successFunc = function (response) {
	        context.setValueAssessFinishState(response.result.isMIAssessFinished);
	    };
	    ajaxUtil_1.getDataByActionID(actionTypes.GET_VALUEASSESS_VALUEASSESSFINISHSTATE, successFunc);
	}
	exports.initValueAssessFinishState = initValueAssessFinishState;
	function initValueAssessQuizzes() {
	    var successFunc = function (response) {
	        context.setValueAspect(response.result.valueAspects);
	    };
	    ajaxUtil_1.getDataByActionID(actionTypes.GET_VALUEASSESS_QUIZZES, successFunc);
	}
	exports.initValueAssessQuizzes = initValueAssessQuizzes;


/***/ },

/***/ 854:
/*!**********************************************************!*\
  !*** ./pages/AssessCenter/ValueAssess/ValueQuizPage.tsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var ValueAssessQuestionAndAnswerOption = __webpack_require__(/*! ./Component/ValueAssessQuestionAndAnswerOption */ 855);
	var Actions = __webpack_require__(/*! ../../../actions/AssessCenter/ValueAssess/ValueAssessAction */ 847);
	"use strict";
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ValueQuizPage = (function (_super) {
	    __extends(ValueQuizPage, _super);
	    function ValueQuizPage(props) {
	        _super.call(this, props);
	        this.state = {
	            currentPageNum: 1
	        };
	        this.onChangePageNum = this.onChangePageNum.bind(this);
	        this.onSubmitResult = this.onSubmitResult.bind(this);
	        this.onFinishedAnswer = this.onFinishedAnswer.bind(this);
	    }
	    ValueQuizPage.prototype.onChangePageNum = function (pageNumAfterChanged) {
	        this.setState({
	            currentPageNum: pageNumAfterChanged
	        });
	    };
	    ValueQuizPage.prototype.onSubmitResult = function () {
	        /*var undonePageList: Array<any> = MIAssessQuizAPI.getUndonePageList();
	        if (!undonePageList || undonePageList.length === 0){
	            console.log(MIAssessQuizAPI.getMIResultData());
	        }else{
	            console.log(undonePageList);
	            this.setState({
	                currentPageNum: undonePageList[0]
	            })
	        }*/
	    };
	    ValueQuizPage.prototype.onFinishedAnswer = function () {
	        var totalPageCount = 5;
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
	    ValueQuizPage.prototype.componentWillMount = function () {
	        //ajax
	        Actions.initValueAssessQuizzes();
	    };
	    ValueQuizPage.prototype.render = function () {
	        var currentPageNum = this.state.currentPageNum;
	        var totalPageCount = 5;
	        return (React.createElement("div", null, React.createElement(ValueAssessQuestionAndAnswerOption, {currentPageNum: currentPageNum, onFinishedAnswer: this.onFinishedAnswer}), React.createElement(antd_1.Slider, {min: 1, max: totalPageCount, value: currentPageNum, disabled: true})));
	    };
	    return ValueQuizPage;
	}(React.Component));
	module.exports = ValueQuizPage;


/***/ },

/***/ 855:
/*!*****************************************************************************************!*\
  !*** ./pages/AssessCenter/ValueAssess/Component/ValueAssessQuestionAndAnswerOption.tsx ***!
  \*****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var context = __webpack_require__(/*! ../ValueAssessContext */ 846);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ValueAssessQuestionAndAnswerOption = (function (_super) {
	    __extends(ValueAssessQuestionAndAnswerOption, _super);
	    function ValueAssessQuestionAndAnswerOption(props) {
	        _super.call(this, props);
	        this.handleClick = this.handleClick.bind(this);
	    }
	    ValueAssessQuestionAndAnswerOption.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    /*componentWillReceiveProps(newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    }*/
	    ValueAssessQuestionAndAnswerOption.prototype.setStateByProps = function (props) {
	        var valueAspect = context.getValueAspect();
	        var remainAspect = Immutable.fromJS(valueAspect).toJS();
	        this.setState({
	            remainAspect: remainAspect,
	            aspectsInThisTurn: commonFunc_1.getRandomElementFromArray(remainAspect, 5),
	            chosenCount: 0
	        });
	    };
	    ValueAssessQuestionAndAnswerOption.prototype.clickedCard = function (item) {
	        var aspectsInThisTurn = this.state.aspectsInThisTurn;
	        var chosenCount = this.state.chosenCount;
	        for (var i = 0; i < aspectsInThisTurn.length; i++) {
	            if (item.aspectName === aspectsInThisTurn[i].aspectName) {
	                if (aspectsInThisTurn[i].chosen) {
	                    chosenCount = chosenCount - 1;
	                }
	                else {
	                    if (chosenCount === 3) {
	                        alert("至多选3个");
	                        return;
	                    }
	                    chosenCount = chosenCount + 1;
	                }
	                aspectsInThisTurn[i].chosen = !aspectsInThisTurn[i].chosen;
	                break;
	            }
	        }
	        this.setState({
	            aspectsInThisTurn: aspectsInThisTurn,
	            chosenCount: chosenCount
	        });
	    };
	    ValueAssessQuestionAndAnswerOption.prototype.handleClick = function () {
	        var remainAspect = this.state.remainAspect;
	        console.log(remainAspect.length);
	        var chosenAspects = [];
	        var aspectsInThisTurn = this.state.aspectsInThisTurn;
	        for (var i = 0; i < aspectsInThisTurn.length; i++) {
	            if (aspectsInThisTurn[i].chosen) {
	                if (this.props.currentPageNum !== 5) {
	                    aspectsInThisTurn[i].chosen = false;
	                }
	                chosenAspects.push(aspectsInThisTurn[i]);
	                remainAspect.push(aspectsInThisTurn[i]);
	            }
	        }
	        console.log(remainAspect.length);
	        if (this.props.currentPageNum === 5) {
	            console.log(chosenAspects);
	        }
	        else {
	            this.setState({
	                remainAspect: remainAspect,
	                aspectsInThisTurn: commonFunc_1.getRandomElementFromArray(remainAspect, 5),
	                chosenCount: 0
	            });
	            this.props.onFinishedAnswer();
	        }
	    };
	    ValueAssessQuestionAndAnswerOption.prototype.render = function () {
	        var aspectsInThisTurn = this.state.aspectsInThisTurn;
	        var this_ = this;
	        return (React.createElement("div", null, React.createElement("div", {className: "am-center "}, React.createElement(antd_1.Icon, {type: "exclamation-circle"}), "以下5个价值观，请按照你的看重程度选择3个"), React.createElement(antd_1.Row, {className: "am-padding-top-xl am-padding-bottom-lg"}, aspectsInThisTurn.map(function (item, index) {
	            return (React.createElement(antd_1.Col, {span: 4, className: "width20percent ", key: index, onClick: this_.clickedCard.bind(this_, item)}, React.createElement("div", {className: "value-test-card"}, React.createElement("div", null, React.createElement("img", {src: "vendor/images/default-headpic.jpg", width: "100%", height: "60%"})), React.createElement("div", {className: "am-text-sm"}, item.desc), React.createElement("div", null, React.createElement("span", {className: "am-margin-sm am-text-center"}, item.aspectName)))));
	        })), React.createElement(antd_1.Button, {disabled: this.state.chosenCount !== 3, onClick: this.handleClick}, "确定")));
	    };
	    return ValueAssessQuestionAndAnswerOption;
	}(React.Component));
	module.exports = ValueAssessQuestionAndAnswerOption;


/***/ }

});
//# sourceMappingURL=57.57.js.map