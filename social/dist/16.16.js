webpackJsonp([16],{

/***/ 440:
/*!*****************************************!*\
  !*** ./common/Component/SelectTerm.tsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var Option = antd_1.Select.Option;
	"use strict";
	var GlobalContext_1 = __webpack_require__(/*! common/GlobalContext */ 377);
	/**
	 * 带有学期选择的 select
	 *
	 */
	var SelectTerm = (function (_super) {
	    __extends(SelectTerm, _super);
	    function SelectTerm(props) {
	        _super.call(this, props);
	        this.handleChange = this.handleChange.bind(this);
	    }
	    SelectTerm.prototype.handleChange = function (value) {
	        this.props.onTermChange(value);
	    };
	    SelectTerm.prototype.componentWillMount = function () {
	        this.setState({
	            termOptions: GlobalContext_1.getTermOptions()
	        });
	    };
	    SelectTerm.prototype.render = function () {
	        return (React.createElement("div", {className: "RankStateDiv"}, !!this.state.termOptions &&
	            React.createElement(antd_1.Select, {value: this.props.currentTerm, style: { width: "100%" }, onChange: this.handleChange}, this.state.termOptions.map(function (item, index) {
	                return React.createElement(Option, {value: item.termID, key: index}, item.termName);
	            }))));
	    };
	    SelectTerm.defaultProps = {};
	    return SelectTerm;
	}(React.Component));
	module.exports = SelectTerm;


/***/ },

/***/ 441:
/*!************************************************!*\
  !*** ./common/Component/PersonalBasicInfo.tsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	"use strict";
	var Role_1 = __webpack_require__(/*! ../Module/Role */ 379);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	var ajaxUtil = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var responseCacheContext = __webpack_require__(/*! ../../common/ResponseCacheContext */ 426);
	var CommonActionTypes = __webpack_require__(/*! ../../actions/CommonAction/CommonActionTypes */ 399);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	/**
	 * 个人基本信息 学生、老师、管理员各不相同
	 */
	var PersonalBasicInfo = (function (_super) {
	    __extends(PersonalBasicInfo, _super);
	    function PersonalBasicInfo(props) {
	        _super.call(this, props);
	        this.state = {
	            role: new Role_1.Role(0 /* student */),
	            userImmutableInfo: null
	        };
	        this.goToPersonalPage = this.goToPersonalPage.bind(this);
	        this.goToMyFollow = this.goToMyFollow.bind(this);
	    }
	    PersonalBasicInfo.prototype.goToPersonalPage = function () {
	        var url = this.state.role.getRoleRelateInfo().personalPageUrl;
	        this.props.router.push(url);
	    };
	    //跳转到我的关注页面
	    PersonalBasicInfo.prototype.goToMyFollow = function () {
	        var url = "/myFollow";
	        this.props.router.push(url);
	    };
	    PersonalBasicInfo.prototype.componentWillMount = function () {
	        this.getBasicInfoData(this.props);
	    };
	    PersonalBasicInfo.prototype.componentWillReceiveProps = function (nextProps) {
	        if (Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)) {
	            this.getBasicInfoData(nextProps);
	        }
	    };
	    PersonalBasicInfo.prototype.getBasicInfoData = function (props) {
	        var this_ = this;
	        //role 是在登陆之后就确定了的 存储在sessionStorage中
	        //todo 需要再传一个 userID  roleEnum
	        var roleEnum = !!props.roleEnum ? storageUtil_1.getRoleEnumFromStorage() : props.roleEnum;
	        var role = new Role_1.Role(Role_1.Role.transToRoleEnum(roleEnum));
	        var actionID = role.getRoleRelateInfo().getUserInfoActionID;
	        var userID = commonFunc_1.isEmptyObject(props.userID) ? storageUtil_1.getUserIDFromStorage() : props.userID;
	        var queryObj = { userID: userID };
	        ajaxUtil.getDataFromContextByActionIDAsync(responseCacheContext.getResponseCache(), actionID, function (response) {
	            var responseData = response.result;
	            //根据role 发起不同请求获取用户的基本信息
	            this_.setState({
	                role: role,
	                userImmutableInfo: responseData
	            });
	        }, queryObj);
	        if (roleEnum !== 2 /* admin */) {
	            ajaxUtil.getDataByActionIDWithQueryAsync(CommonActionTypes.GET_COMMON_SOCIALINFO, { targetUserID: userID }, function (response) {
	                this_.setState({
	                    socialInfo: response.result
	                });
	            });
	        }
	    };
	    PersonalBasicInfo.prototype.render = function () {
	        var roleName = this.state.role.getRoleRelateInfo().displayChinese;
	        var isStudent = this.state.role.getRoleEnum() === 0 /* student */;
	        var isAdmin = this.state.role.getRoleEnum() === 2 /* admin */;
	        var systemIDName = isStudent ? "学号" : "教工号";
	        var userImmutableInfo = this.state.userImmutableInfo;
	        var socialInfo = this.state.socialInfo;
	        var dataReady = !!userImmutableInfo && !!socialInfo;
	        return (React.createElement("div", {className: this.props.className}, dataReady &&
	            React.createElement("div", {className: "right-info"}, React.createElement("img", {src: commonFunc_1.isEmptyObject(userImmutableInfo.headImage) ? CommonConfig_1.studentDefaultHeadPic : userImmutableInfo.headImage}), React.createElement("div", {className: "name"}, userImmutableInfo.name, React.createElement("span", {className: "right-credit"}, roleName)), React.createElement("div", {className: "number-sign"}, React.createElement("span", {className: "am-block"}, systemIDName, "：", userImmutableInfo.systemID), !isAdmin &&
	                React.createElement("div", null, React.createElement("a", null, "班级：", userImmutableInfo.className), React.createElement("span", {className: "pull-right"}, "我的关注  ", React.createElement("span", {className: "good-friend-count"}, socialInfo.followingUserCount))), React.createElement("span", {className: "am-block am-margin-top-xs"}, "个性签名：", userImmutableInfo.stateMsg)))));
	    };
	    PersonalBasicInfo.defaultProps = {
	        className: ""
	    };
	    return PersonalBasicInfo;
	}(React.Component));
	module.exports = react_router_1.withRouter(PersonalBasicInfo);


/***/ },

/***/ 442:
/*!************************************************!*\
  !*** ./common/Component/CardTitleWithLine.tsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var IconRotate180WithClick = __webpack_require__(/*! ./IconRotate180WithClick */ 443);
	"use strict";
	var CardTitleWithLine = (function (_super) {
	    __extends(CardTitleWithLine, _super);
	    function CardTitleWithLine(props) {
	        _super.call(this, props);
	        this.state = {
	            scaleName: "收起"
	        };
	        this.handleClick = this.handleClick.bind(this);
	    }
	    CardTitleWithLine.prototype.handleClick = function (isCollapsed) {
	        this.props.toggleCollapse(isCollapsed);
	    };
	    CardTitleWithLine.prototype.render = function () {
	        return (React.createElement("div", {className: "text-colorLine " + this.props.className, style: this.props.style}, this.props.titleIconType &&
	            React.createElement("i", {className: "fa " + this.props.titleIconType}), this.props.title, React.createElement("span", {className: "rightText"}, this.props.rightText, this.props.scaleFlag && React.createElement(IconRotate180WithClick, {handleClick: this.handleClick}))));
	    };
	    CardTitleWithLine.defaultProps = {
	        className: ""
	    };
	    return CardTitleWithLine;
	}(React.Component));
	module.exports = CardTitleWithLine;


/***/ },

/***/ 443:
/*!*****************************************************!*\
  !*** ./common/Component/IconRotate180WithClick.tsx ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var IconRotate180WithClick = (function (_super) {
	    __extends(IconRotate180WithClick, _super);
	    function IconRotate180WithClick(props) {
	        _super.call(this, props);
	        this.state = {
	            collapsed: false
	        };
	        this.handleClick = this.handleClick.bind(this);
	    }
	    IconRotate180WithClick.prototype.handleClick = function () {
	        this.props.handleClick(!this.state.collapsed);
	        this.setState({
	            collapsed: !this.state.collapsed
	        });
	    };
	    IconRotate180WithClick.prototype.render = function () {
	        var propsClassName = this.props.className ? this.props.className : " anticon anticon-circle-o-right ";
	        var collapsedClassName = this.state.collapsed ? " " : " expand";
	        var iconClassName = " collapse " + propsClassName + collapsedClassName;
	        return (React.createElement("span", {className: "scaletext", onClick: this.handleClick}, this.props.text, React.createElement("i", {className: iconClassName})));
	    };
	    return IconRotate180WithClick;
	}(React.Component));
	module.exports = IconRotate180WithClick;


/***/ },

/***/ 497:
/*!****************************************************************!*\
  !*** ./pages/TeacherPersonalPage/TeacherPersnalPageContext.ts ***!
  \****************************************************************/
/***/ function(module, exports) {

	"use strict";
	var classAllMember;
	function setClassAllMember(member) {
	    classAllMember = member;
	}
	exports.setClassAllMember = setClassAllMember;
	function getClassAllMember() {
	    return classAllMember;
	}
	exports.getClassAllMember = getClassAllMember;
	var evaluateStudentDict;
	function setEvaluateStudentDict(dict) {
	    evaluateStudentDict = dict;
	}
	exports.setEvaluateStudentDict = setEvaluateStudentDict;
	function getEvaluateStudentDict() {
	    return evaluateStudentDict;
	}
	exports.getEvaluateStudentDict = getEvaluateStudentDict;
	//班主任评价学生 --  综合评价  --提交数据  保存在context 中
	var teacherEvaluatePostData;
	function setTeacherEvaluatePostData(data) {
	    teacherEvaluatePostData = data;
	}
	exports.setTeacherEvaluatePostData = setTeacherEvaluatePostData;
	function getTeacherEvaluatePostData() {
	    return teacherEvaluatePostData;
	}
	exports.getTeacherEvaluatePostData = getTeacherEvaluatePostData;
	//评论库--- 两个select options  【对应省系统项目-对应项目分类指标】
	var reviewWordsSelectData;
	function setReviewWordsSelectData(selectData) {
	    reviewWordsSelectData = selectData;
	}
	exports.setReviewWordsSelectData = setReviewWordsSelectData;
	function getReviewWordsSelectData() {
	    return reviewWordsSelectData;
	}
	exports.getReviewWordsSelectData = getReviewWordsSelectData;
	//学生表现记录 --  类别、表现情况
	var studentPerformanceOptions;
	function setStudentPerformanceOptions(optionData) {
	    studentPerformanceOptions = optionData;
	}
	exports.setStudentPerformanceOptions = setStudentPerformanceOptions;
	function getStudentPerformanceOptions() {
	    return studentPerformanceOptions;
	}
	exports.getStudentPerformanceOptions = getStudentPerformanceOptions;


/***/ },

/***/ 509:
/*!************************************************!*\
  !*** ./common/Component/TextareaWithTitle.tsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(/*! react */ 93);
	var TextareaWithButton = __webpack_require__(/*! ./TextareaWithButton */ 510);
	"use strict";
	/**
	 * 带有标题栏的文本框
	 */
	var TextareaWithTitle = (function (_super) {
	    __extends(TextareaWithTitle, _super);
	    function TextareaWithTitle(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TextareaWithTitle.prototype.render = function () {
	        var lengthMsg = "";
	        var integralScoreMsg = "";
	        var _a = this.props, minLength = _a.minLength, score = _a.score;
	        if (minLength) {
	            lengthMsg = "(不少于" + minLength + "字)";
	        }
	        if (score) {
	            integralScoreMsg = "积分：" + score + "分";
	        }
	        var className = "textarea-with-title";
	        if (this.props.className) {
	            className = className + " " + this.props.className;
	        }
	        return (React.createElement("div", {className: className}, this.props.title &&
	            React.createElement("div", {className: "title"}, React.createElement("span", null, this.props.title, lengthMsg), React.createElement("span", null, integralScoreMsg)), React.createElement(TextareaWithButton, __assign({}, this.props))));
	    };
	    TextareaWithTitle.defaultProps = {};
	    return TextareaWithTitle;
	}(React.Component));
	module.exports = TextareaWithTitle;


/***/ },

/***/ 510:
/*!*************************************************!*\
  !*** ./common/Component/TextareaWithButton.tsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var TermAnalysisConfig_1 = __webpack_require__(/*! common/Config/TermAnalysisConfig */ 511);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	"use strict";
	/**
	 *textarea带有提交的按钮
	 * 传值---textarea初始化的默认值
	 */
	var TextareaWithButton = (function (_super) {
	    __extends(TextareaWithButton, _super);
	    function TextareaWithButton(props) {
	        _super.call(this, props);
	        this.state = {
	            inputValue: this.props.content ? this.props.content : "",
	            isEditing: false,
	            minLength: this.props.minLength ? this.props.minLength : TermAnalysisConfig_1.defaultMinLength,
	            maxLength: this.props.maxLength ? this.props.maxLength : TermAnalysisConfig_1.defaultMaxLength,
	            errorMsg: ""
	        };
	        this.handleInputChange = this.handleInputChange.bind(this);
	        this.handleSubmitChange = this.handleSubmitChange.bind(this);
	        this.handleCancelChange = this.handleCancelChange.bind(this);
	        this.handleEditChange = this.handleEditChange.bind(this);
	    }
	    TextareaWithButton.prototype.componentWillReceiveProps = function (nextProps) {
	        if (Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)) {
	            this.setState({
	                inputValue: nextProps.content ? nextProps.content : "",
	            });
	        }
	    };
	    TextareaWithButton.prototype.handleInputChange = function (e) {
	        var strings = e.target.value;
	        if (strings.length > this.state.maxLength) {
	            strings = strings.substr(0, this.state.maxLength);
	        }
	        this.setState({
	            errorMsg: "",
	            inputValue: strings,
	        });
	    };
	    //编辑按钮
	    TextareaWithButton.prototype.handleEditChange = function () {
	        this.setState({
	            isEditing: true,
	        });
	    };
	    //保存按钮
	    TextareaWithButton.prototype.handleSubmitChange = function () {
	        if (!this.state.inputValue || this.state.inputValue.length < this.state.minLength) {
	            this.setState({
	                errorMsg: "请输入不少于" + this.state.minLength + "个字符"
	            });
	        }
	        else if (this.state.inputValue.length > this.state.maxLength) {
	            this.setState({
	                errorMsg: "请输入不多于" + this.state.maxLength + "个字符"
	            });
	        }
	        else {
	            this.props.submit(this.state.inputValue);
	            if (this.props.resetAfterSave) {
	                this.setState({
	                    isEditing: false,
	                    inputValue: ""
	                });
	            }
	            else {
	                this.setState({
	                    isEditing: false,
	                });
	            }
	        }
	    };
	    //取消按钮
	    TextareaWithButton.prototype.handleCancelChange = function () {
	        this.setState({
	            isEditing: false,
	            inputValue: this.props.content,
	            errorMsg: ""
	        });
	    };
	    TextareaWithButton.prototype.render = function () {
	        var readOnly = this.props.readOnly ? true : false;
	        var saveBtnText = this.props.saveBtnText ? this.props.saveBtnText : "保存";
	        var btns = (!this.state.isEditing) ? [
	            React.createElement("div", {key: "1"}, React.createElement("span", {style: { color: "red", paddingRight: "20px" }}, this.state.errorMsg), React.createElement(antd_1.Button, {className: "btn-blue", size: "small", onClick: this.handleEditChange}, "编辑"))
	        ] : [
	            React.createElement("div", {key: "2"}, React.createElement("span", {style: { color: "red", paddingRight: "20px" }}, this.state.errorMsg), React.createElement(antd_1.Button, {className: "btn-blue", size: "small", onClick: this.handleSubmitChange}, saveBtnText), React.createElement(antd_1.Button, {size: "small", onClick: this.handleCancelChange}, "取消"))
	        ];
	        //一行100字，最少显示4行
	        var rows = Math.ceil(this.state.maxLength / 100);
	        rows = rows > 4 ? rows : 4;
	        return (React.createElement("div", {className: "textarea-with-button"}, React.createElement(antd_1.Input, {type: "textarea", value: this.state.inputValue, onChange: this.handleInputChange, placeholder: this.props.placeholder, style: {}, disabled: !this.state.isEditing, rows: rows}), !readOnly && this.props.buttonShow &&
	            React.createElement("div", {className: "btn-groups"}, btns)));
	    };
	    TextareaWithButton.defaultProps = {
	        buttonShow: true
	    };
	    return TextareaWithButton;
	}(React.Component));
	module.exports = TextareaWithButton;


/***/ },

/***/ 511:
/*!*********************************************!*\
  !*** ./common/Config/TermAnalysisConfig.ts ***!
  \*********************************************/
/***/ function(module, exports) {

	"use strict";
	//textarea默认输入的字符
	exports.defaultMinLength = 5;
	exports.defaultMaxLength = 500;


/***/ },

/***/ 658:
/*!***********************************************************************!*\
  !*** ./pages/TeacherPersonalPage/EvaluateStudent/EvaluateStudent.tsx ***!
  \***********************************************************************/
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
	var PersonalBasicInfo = __webpack_require__(/*! common/Component/PersonalBasicInfo */ 441);
	var SelectTerm = __webpack_require__(/*! common/Component/SelectTerm */ 440);
	var ClassMateEvaluateList = __webpack_require__(/*! ../../TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateList */ 659);
	var TeacherEvaluateAndStudentSummary = __webpack_require__(/*! ./Component/TeacherEvaluateAndStudentSummary */ 663);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	/**
	 * 班主任老师 评价班级内学生
	 */
	var EvaluateStudent = (function (_super) {
	    __extends(EvaluateStudent, _super);
	    function EvaluateStudent(props) {
	        _super.call(this, props);
	        this.state = {
	            currentStudentID: this.props.location.query.studentID,
	            currentTerm: storageUtil_1.getTermIDFromStorage()
	        };
	        this.onStudentChange = this.onStudentChange.bind(this);
	        this.onTermChange = this.onTermChange.bind(this);
	    }
	    EvaluateStudent.prototype.onTermChange = function (termAfterChange) {
	        this.setStateByTermID(termAfterChange);
	    };
	    EvaluateStudent.prototype.onStudentChange = function (studentID) {
	        this.setState({
	            currentStudentID: studentID
	        });
	    };
	    EvaluateStudent.prototype.componentWillMount = function () {
	        this.setStateByTermID(this.state.currentTerm);
	    };
	    EvaluateStudent.prototype.setStateByTermID = function (currentTerm) {
	        //ajax get all classmates
	        var this_ = this;
	        var queryObj = {
	            schoolTerm: currentTerm,
	            fromUserID: storageUtil_1.getUserIDFromStorage()
	        };
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_EVALUATESTUDENT_STAR, queryObj, function (response) {
	            var allClassmates = response.result.evaluateStudentByScores;
	            this_.setState({
	                currentStudentID: this_.state.currentStudentID ? this_.state.currentStudentID : allClassmates[0].studentUserID,
	                allClassmates: allClassmates,
	                currentTerm: currentTerm
	            });
	        });
	    };
	    EvaluateStudent.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(antd_1.Row, {className: "am-margin-top"}, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, React.createElement(PersonalBasicInfo, {className: "block-box-shadows am-margin-bottom"}), React.createElement("div", {className: "block-box-shadows"}, this.state.currentStudentID && this.state.currentTerm &&
	            React.createElement(TeacherEvaluateAndStudentSummary, {termID: this.state.currentTerm, studentID: this.state.currentStudentID}))), React.createElement(antd_1.Col, {span: 7, className: "block-box-shadows"}, React.createElement(SelectTerm, {onTermChange: this.onTermChange, currentTerm: this.state.currentTerm}), React.createElement("div", {className: " am-cf am-margin-bottom"}, this.state.currentStudentID && this.state.currentTerm &&
	            React.createElement(ClassMateEvaluateList, {currentTerm: this.state.currentTerm, currentClassmateID: this.state.currentStudentID, allClassmates: this.state.allClassmates, onClassmateChange: this.onStudentChange}))))));
	    };
	    return EvaluateStudent;
	}(React.Component));
	module.exports = EvaluateStudent;


/***/ },

/***/ 659:
/*!**********************************************************************************!*\
  !*** ./pages/TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateList.tsx ***!
  \**********************************************************************************/
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
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var ClassMateEvaluateListIconTypeEnum_1 = __webpack_require__(/*! ../Data/ClassMateEvaluateListIconTypeEnum */ 660);
	var ClassMateEvaluateListIcon = __webpack_require__(/*! ./ClassMateEvaluateListIcon */ 661);
	var ClassMateEvaluateListEvaluateStars = __webpack_require__(/*! ./ClassMateEvaluateListEvaluateStars */ 662);
	var PositionInGroup = (function () {
	    function PositionInGroup() {
	    }
	    return PositionInGroup;
	}());
	/**
	 * 同学互评列表 包括头像
	 */
	var iconCountInEachRow = 3;
	var ClassMateEvaluateList = (function (_super) {
	    __extends(ClassMateEvaluateList, _super);
	    function ClassMateEvaluateList(props) {
	        _super.call(this, props);
	        this.calActivePositionInGroup = this.calActivePositionInGroup.bind(this);
	        this.getActiveIndexInAll = this.getActiveIndexInAll.bind(this);
	        this.onClassmateChange = this.onClassmateChange.bind(this);
	    }
	    ClassMateEvaluateList.prototype.getActiveIndexInAll = function (activeID, all) {
	        for (var i = 0; i < all.length; i++) {
	            if (all[i].studentUserID === activeID) {
	                return i;
	            }
	        }
	        return;
	    };
	    ClassMateEvaluateList.prototype.calActivePositionInGroup = function (activeIndexInAll, iconCountInEachRow) {
	        var row = Math.floor(activeIndexInAll / iconCountInEachRow);
	        var index = activeIndexInAll - row * iconCountInEachRow;
	        return {
	            row: row,
	            index: index
	        };
	    };
	    ClassMateEvaluateList.prototype.onClassmateChange = function (classmateID, classmateName) {
	        this.props.onClassmateChange(classmateID, classmateName);
	    };
	    ClassMateEvaluateList.prototype.render = function () {
	        var allClassmates = this.props.allClassmates;
	        var currentClassmateID = this.props.currentClassmateID;
	        var currentStudentWithScore = allClassmates.filter(function (item, index, items) {
	            return item.studentUserID === currentClassmateID;
	        })[0];
	        var classmatesAfterGrouped = commonFunc_1.changeArrayForNewGroup(allClassmates, iconCountInEachRow);
	        var activeIndexInAll = this.getActiveIndexInAll(currentClassmateID, allClassmates);
	        var activePosition = this.calActivePositionInGroup(activeIndexInAll, iconCountInEachRow);
	        var this_ = this;
	        return (React.createElement("div", {className: "ClassMateEvaluateList"}, classmatesAfterGrouped.map(function (groupItem, groupIndex) {
	            if (groupIndex === activePosition.row) {
	                return (React.createElement(antd_1.Row, {key: groupIndex, className: "current-row-eva"}, groupItem.map(function (item, index) {
	                    var key = item.studentUserID + "_" + index;
	                    var typeName = index === activePosition.index ? ClassMateEvaluateListIconTypeEnum_1.ClassMateEvaluateListIconTypeEnum.ActiveSpecial : ClassMateEvaluateListIconTypeEnum_1.ClassMateEvaluateListIconTypeEnum.ActiveNormal;
	                    return (React.createElement(antd_1.Col, {span: 8, key: key}, React.createElement(ClassMateEvaluateListIcon, {type: typeName, onClick: this_.onClassmateChange, classmateID: item.studentUserID, isFinished: item.qualityEvaluationFinished, name: item.name, headImage: item.headImage})));
	                }), React.createElement(antd_1.Col, {span: 24}, React.createElement(ClassMateEvaluateListEvaluateStars, {studentWithScore: currentStudentWithScore, currentTerm: this_.props.currentTerm}))));
	            }
	            else {
	                return (React.createElement(antd_1.Row, {key: groupIndex}, groupItem.map(function (item, index) {
	                    var key = item.studentUserID + "_" + index;
	                    return (React.createElement(antd_1.Col, {span: 8, key: key}, React.createElement(ClassMateEvaluateListIcon, {type: ClassMateEvaluateListIconTypeEnum_1.ClassMateEvaluateListIconTypeEnum.Normal, onClick: this_.onClassmateChange, classmateID: item.studentUserID, isFinished: item.qualityEvaluationFinished, name: item.name, headImage: item.headImage})));
	                })));
	            }
	        })));
	    };
	    return ClassMateEvaluateList;
	}(React.Component));
	module.exports = ClassMateEvaluateList;


/***/ },

/***/ 660:
/*!****************************************************************************************!*\
  !*** ./pages/TermAnalysis/ClassMateEvaluate/Data/ClassMateEvaluateListIconTypeEnum.ts ***!
  \****************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	(function (ClassMateEvaluateListIconTypeEnum) {
	    ClassMateEvaluateListIconTypeEnum[ClassMateEvaluateListIconTypeEnum["Normal"] = 0] = "Normal";
	    ClassMateEvaluateListIconTypeEnum[ClassMateEvaluateListIconTypeEnum["ActiveNormal"] = 1] = "ActiveNormal";
	    ClassMateEvaluateListIconTypeEnum[ClassMateEvaluateListIconTypeEnum["ActiveSpecial"] = 2] = "ActiveSpecial";
	})(exports.ClassMateEvaluateListIconTypeEnum || (exports.ClassMateEvaluateListIconTypeEnum = {}));
	var ClassMateEvaluateListIconTypeEnum = exports.ClassMateEvaluateListIconTypeEnum;


/***/ },

/***/ 661:
/*!**************************************************************************************!*\
  !*** ./pages/TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateListIcon.tsx ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	"use strict";
	var ClassMateEvaluateListIconTypeEnum_1 = __webpack_require__(/*! ../Data/ClassMateEvaluateListIconTypeEnum */ 660);
	/**
	 * 同学互评列表中的 头像
	 * 有三种状态 正常，激活列的激活图标，激活列的未激活图标
	 */
	var ClassMateEvaluateListIcon = (function (_super) {
	    __extends(ClassMateEvaluateListIcon, _super);
	    function ClassMateEvaluateListIcon(props) {
	        _super.call(this, props);
	        this.onClickImg = this.onClickImg.bind(this);
	    }
	    ClassMateEvaluateListIcon.prototype.onClickImg = function () {
	        this.props.onClick(this.props.classmateID, this.props.name);
	    };
	    ClassMateEvaluateListIcon.prototype.render = function () {
	        var typeClassName = this.props.type === ClassMateEvaluateListIconTypeEnum_1.ClassMateEvaluateListIconTypeEnum.ActiveSpecial ? "ClassMateEvaluateListActiveSpecial" : "ClassMateEvaluateListActiveNormal";
	        var finishedClassName = this.props.isFinished ? " isFinished" : " ";
	        var className = typeClassName + finishedClassName;
	        var headImage = commonFunc_1.isEmptyObject(this.props.headImage) ? CommonConfig_1.studentDefaultHeadPic : this.props.headImage;
	        var name = commonFunc_1.isEmptyObject(this.props.name) ? CommonConfig_1.studentDefaultName : this.props.name;
	        return (React.createElement("div", {className: className, onClick: this.onClickImg}, React.createElement("img", {src: headImage, width: "65"}), React.createElement("div", {className: "name"}, name)));
	    };
	    return ClassMateEvaluateListIcon;
	}(React.Component));
	module.exports = ClassMateEvaluateListIcon;


/***/ },

/***/ 662:
/*!***********************************************************************************************!*\
  !*** ./pages/TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateListEvaluateStars.tsx ***!
  \***********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	"use strict";
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	/**
	 * 同学互评打分的星星
	 * 如果已经评价过，直接显示星星
	 * 如果没有评价过，显示默认值，及提交，提交后
	 */
	var ClassMateEvaluateListEvaluateStars = (function (_super) {
	    __extends(ClassMateEvaluateListEvaluateStars, _super);
	    function ClassMateEvaluateListEvaluateStars(props) {
	        _super.call(this, props);
	        this.submit = this.submit.bind(this);
	    }
	    ClassMateEvaluateListEvaluateStars.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    ClassMateEvaluateListEvaluateStars.prototype.componentWillReceiveProps = function (nextProps) {
	        if (Immutable.fromJS(nextProps) !== Immutable.fromJS(this.props)) {
	            this.setStateByProps(nextProps);
	        }
	    };
	    ClassMateEvaluateListEvaluateStars.prototype.setStateByProps = function (props) {
	        var finished = props.studentWithScore.qualityEvaluationFinished;
	        var qualityEvaluations = props.studentWithScore.qualityEvaluations;
	        //若没有完成评价，以防后台出错，前台默认将分数=默认值
	        if (!finished) {
	            for (var i = 0; i < qualityEvaluations.length; i++) {
	                qualityEvaluations[i].evaluationScore = CommonConfig_1.defaultStarValues;
	            }
	        }
	        this.setState({
	            qualityEvaluationFinished: finished,
	            qualityEvaluations: qualityEvaluations
	        });
	    };
	    ClassMateEvaluateListEvaluateStars.prototype.onScoreChange = function (item, value) {
	        var qualityEvaluations = this.state.qualityEvaluations;
	        var canSubmit = true;
	        for (var i = 0; i < qualityEvaluations.length; i++) {
	            if (qualityEvaluations[i].qualityCategoryName === item.qualityCategoryName) {
	                qualityEvaluations[i].evaluationScore = value;
	            }
	            if (canSubmit && typeof qualityEvaluations[i].evaluationScore === "undefined") {
	                canSubmit = false;
	            }
	        }
	        this.setState({
	            canSubmit: canSubmit,
	            qualityEvaluations: qualityEvaluations
	        });
	    };
	    ClassMateEvaluateListEvaluateStars.prototype.submit = function () {
	        var qualityEvaluations = this.state.qualityEvaluations;
	        var evaluateResult = [];
	        for (var i = 0; i < qualityEvaluations.length; i++) {
	            var evaluationScore = qualityEvaluations[i].evaluationScore;
	            if (evaluationScore == CommonConfig_1.defaultStarValues) {
	                antd_1.message.error("请选择完再提交");
	                return;
	            }
	            var evaluateResultOneAspect = {
	                qualityCategoryName: qualityEvaluations[i].qualityCategoryName,
	                qualityCategoryID: qualityEvaluations[i].qualityCategoryID,
	                evaluationScore: qualityEvaluations[i].evaluationScore
	            };
	            evaluateResult.push(evaluateResultOneAspect);
	        }
	        var queryObj = {
	            termID: this.props.currentTerm,
	            teacherUserID: storageUtil_1.getUserIDFromStorage(),
	            evaluateStudentUserID: this.props.studentWithScore.studentUserID,
	            qualityEvaluations: qualityEvaluations
	        };
	        var this_ = this;
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.SET_TEACHER_EVALUATESTUDENT_STAR, queryObj, function (response) {
	            antd_1.message.success("提交成功");
	            this_.setState({
	                qualityEvaluations: qualityEvaluations,
	                qualityEvaluationFinished: true
	            });
	        });
	    };
	    ClassMateEvaluateListEvaluateStars.prototype.render = function () {
	        var disabled = this.state.qualityEvaluationFinished;
	        var this_ = this;
	        return (React.createElement("div", {className: "ClassMateEvaluateListStar am-margin-top-sm"}, this.state.qualityEvaluations.map(function (item, index) {
	            var currentValue = Number(item.evaluationScore);
	            var key = item.qualityCategoryID + "_" + index;
	            return (React.createElement("div", {className: "ClassMateEvaluateListStarDiv", key: key}, React.createElement("div", {className: "ClassMateEvaluateListStarWords"}, item.qualityCategoryName), React.createElement(antd_1.Rate, {value: currentValue, disabled: disabled, onChange: this_.onScoreChange.bind(this_, item), allowHalf: true})));
	        }), !this.state.qualityEvaluationFinished &&
	            React.createElement(antd_1.Button, {className: "ClassMateEvaluateListStarButton", disabled: !this.state.canSubmit, onClick: this.submit}, "提交")));
	    };
	    return ClassMateEvaluateListEvaluateStars;
	}(React.Component));
	module.exports = ClassMateEvaluateListEvaluateStars;


/***/ },

/***/ 663:
/*!**************************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/EvaluateStudent/Component/TeacherEvaluateAndStudentSummary.tsx ***!
  \**************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var TabPane = antd_1.Tabs.TabPane;
	"use strict";
	var TeacherEvaluate = __webpack_require__(/*! ./TeacherEvaluate */ 664);
	var StudentMonthSummary = __webpack_require__(/*! ./StudentMonthSummary */ 666);
	var TeacherEvaluateAndStudentSummary = (function (_super) {
	    __extends(TeacherEvaluateAndStudentSummary, _super);
	    function TeacherEvaluateAndStudentSummary(props) {
	        _super.call(this, props);
	    }
	    TeacherEvaluateAndStudentSummary.prototype.render = function () {
	        var _a = this.props, termID = _a.termID, studentID = _a.studentID;
	        return (React.createElement(antd_1.Tabs, {defaultActiveKey: "1"}, React.createElement(TabPane, {tab: "综合评价", key: "1"}, React.createElement(TeacherEvaluate, {termID: termID, evaluateStudentUserID: studentID})), React.createElement(TabPane, {tab: "学生月度总结", key: "2"}, React.createElement(StudentMonthSummary, {termID: termID, studentID: studentID}))));
	    };
	    return TeacherEvaluateAndStudentSummary;
	}(React.Component));
	module.exports = TeacherEvaluateAndStudentSummary;


/***/ },

/***/ 664:
/*!*********************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/EvaluateStudent/Component/TeacherEvaluate.tsx ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var SelectWithName = __webpack_require__(/*! ./SelectWithName */ 665);
	var CardTitleWithLine = __webpack_require__(/*! common/Component/CardTitleWithLine */ 442);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var ResponseCacheContext = __webpack_require__(/*! common/ResponseCacheContext */ 426);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var TermAnalysisConfig_1 = __webpack_require__(/*! common/Config/TermAnalysisConfig */ 511);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	var context = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var emptyText = "请班主任填写总体评价";
	var TeacherEvaluate = (function (_super) {
	    __extends(TeacherEvaluate, _super);
	    function TeacherEvaluate(props) {
	        _super.call(this, props);
	        this.state = {
	            stuTermQualityEvaluations: [],
	            textareaValue: "",
	            buttonSubmitShow: false
	        };
	        this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    TeacherEvaluate.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    TeacherEvaluate.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    TeacherEvaluate.prototype.setStateByProps = function (props) {
	        var termID = props.termID, evaluateStudentUserID = props.evaluateStudentUserID;
	        var this_ = this;
	        //清空context
	        TeacherPersnalPageContext_1.setTeacherEvaluatePostData({});
	        if (!context.getEvaluateStudentDict()) {
	            var queryObj = { teacherUserID: storageUtil_1.getUserIDFromStorage() };
	            var response = ajaxUtil.getDataFromContextByActionID(ResponseCacheContext.getResponseCache(), ActionTypes.READ_TEACHER_EVALUATESTUDENTDICT, queryObj);
	            var dict = response.result.evaluateStudentDict;
	            context.setEvaluateStudentDict(dict);
	        }
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_TERMEVALUATE, { termID: termID, evaluateStudentUserID: evaluateStudentUserID }, function (response) {
	            var termOverallEvaluation = response.result.termOverallEvaluation;
	            var textareaValue = !termOverallEvaluation.termOverallEvaluationContent ? "" : termOverallEvaluation.termOverallEvaluationContent;
	            this_.setState({
	                stuTermQualityEvaluations: response.result.stuTermQualityEvaluations,
	                textareaValue: textareaValue,
	                buttonSubmitShow: commonFunc_1.isEmptyObject(termOverallEvaluation.termOverallEvaluationContent)
	            });
	        });
	    };
	    TeacherEvaluate.prototype.getEvaluationItems = function (rootQualityCategoryID, qualityCategoryID) {
	        var evaluateStudentDict = context.getEvaluateStudentDict();
	        var dict = evaluateStudentDict.filter(function (item, index, items) {
	            return item.rootQualityCategoryID === rootQualityCategoryID;
	        })[0];
	        return dict.evaluationItems.filter(function (item, index, items) {
	            return item.qualityCategoryID === qualityCategoryID;
	        });
	    };
	    TeacherEvaluate.prototype.handleChangeTextarea = function (e) {
	        var strings = e.target.value;
	        var parentsForm = $(e.currentTarget).parents(".ant-form-item-control");
	        var childrenExplain = parentsForm.children(".ant-form-explain");
	        if (strings.length < TermAnalysisConfig_1.defaultMinLength) {
	            parentsForm.addClass("has-error");
	            childrenExplain.find(".tips").text("请输入不少于" + TermAnalysisConfig_1.defaultMinLength + "个字符");
	        }
	        else if (strings.length > TermAnalysisConfig_1.defaultMaxLength) {
	            parentsForm.addClass("has-error");
	            childrenExplain.find(".tips").text("请输入少于" + TermAnalysisConfig_1.defaultMaxLength + "个字符");
	        }
	        else {
	            parentsForm.removeClass("has-error");
	            childrenExplain.find(".tips").text("");
	        }
	        childrenExplain.find(".currentInputLength").text("当前已输入" + strings.length + "个字");
	        this.setState({
	            textareaValue: strings,
	        });
	    };
	    TeacherEvaluate.prototype.handleSubmit = function () {
	        var this_ = this;
	        if ($(".ant-form-item-control").hasClass("has-error") || commonFunc_1.isEmptyObject(this.state.textareaValue)) {
	            antd_1.message.error(emptyText);
	        }
	        else {
	            var postData = {};
	            postData["teacherUserID"] = storageUtil_1.getUserIDFromStorage();
	            postData["studentUserID"] = this.props.evaluateStudentUserID;
	            postData["termID"] = this.props.termID;
	            postData["termOverallEvaluation"] = {
	                termOverallEvaluationContent: this.state.textareaValue
	            };
	            var stuTermQualityEvaluations = [];
	            var stuTermQualityEvaluationsMap = TeacherPersnalPageContext_1.getTeacherEvaluatePostData();
	            for (var key in stuTermQualityEvaluationsMap) {
	                stuTermQualityEvaluations.push(stuTermQualityEvaluationsMap[key]);
	            }
	            postData["stuTermQualityEvaluations"] = stuTermQualityEvaluations;
	            //保存 学生综合评价
	            ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.SET_TEACHER_TERMEVALUATE, postData, function (response) {
	                antd_1.message.success("保存成功");
	                this_.setState({
	                    buttonSubmitShow: false
	                });
	            });
	        }
	    };
	    TeacherEvaluate.prototype.render = function () {
	        var this_ = this;
	        var rows = Math.ceil(TermAnalysisConfig_1.defaultMaxLength / 100 / 3 * 2);
	        rows = rows > 4 ? rows : 4;
	        //select带不同颜色
	        var selectColors = ["blueBack", "greenBack", "purpleBack", "yellowBack"];
	        return (React.createElement("div", {className: "blueBack", style: { padding: "0px 20px 20px" }, key: this.props.evaluateStudentUserID}, React.createElement("div", {className: "text-colorLine am-margin-bottom-sm"}, "学期整体评价", React.createElement("a", {className: "rightText blackLink"}, "学生综合素质档案", React.createElement("i", {className: "fa fa-chevron-right am-padding-left-xs"}))), React.createElement(antd_1.Row, {key: this.props.evaluateStudentUserID}, React.createElement(antd_1.Col, {span: 24}, React.createElement("div", {className: "ant-form-item-control"}, React.createElement("span", {className: "ant-input-wrapper"}, React.createElement(antd_1.Input, {type: "textarea", rows: rows, value: this.state.textareaValue, placeholder: commonFunc_1.isEmptyObject(this.state.textareaValue) ? emptyText : "", onChange: this.handleChangeTextarea})), React.createElement("div", {className: "ant-form-explain"}, React.createElement("span", {className: "tips"}), React.createElement("span", {className: "pull-right currentInputLength"}))))), this.state.stuTermQualityEvaluations &&
	            this.state.stuTermQualityEvaluations.map(function (item, index) {
	                var colorClassName = "am-margin-top " + selectColors[index];
	                var selectContextMap = {};
	                selectContextMap["rootQualityCategoryID"] = item.rootQualityCategoryID;
	                selectContextMap["rootQualityCategoryName"] = item.rootQualityCategoryName;
	                return (React.createElement("div", {className: colorClassName, key: index}, React.createElement(CardTitleWithLine, {title: item.rootQualityCategoryName, className: "am-margin-bottom-sm "}), item.stuTermQualityEvaluation.map(function (single, singleIndex) {
	                    var isFinished = !single.evaluationItemID ? false : true;
	                    if (isFinished) {
	                        return (React.createElement(SelectWithName, {className: "am-margin-bottom-xs", key: "evaluated" + singleIndex, name: single.qualityCategoryName, isFinished: isFinished, content: single.evaluationItemContent}));
	                    }
	                    else {
	                        var rootQualityCategoryID = item.rootQualityCategoryID;
	                        var qualityCategoryID = single.qualityCategoryID;
	                        var evaluationItems = this_.getEvaluationItems(rootQualityCategoryID, qualityCategoryID);
	                        var options = evaluationItems.map(function (evaluationItem, evaluationItemIndex) {
	                            return {
	                                ID: evaluationItem.evaluationItemID,
	                                value: evaluationItem.evaluationItemContent,
	                            };
	                        });
	                        return (React.createElement(SelectWithName, {className: "am-margin-bottom-xs", selectContextMap: selectContextMap, id: single.qualityCategoryID, key: "singleIndex" + singleIndex, name: single.qualityCategoryName, isFinished: isFinished, options: options}));
	                    }
	                })));
	            }), this.state.buttonSubmitShow &&
	            React.createElement("div", {className: "am-text-center"}, React.createElement(antd_1.Button, {className: "btn-orange", size: "large", onClick: this.handleSubmit}, "提交"))));
	    };
	    return TeacherEvaluate;
	}(React.Component));
	module.exports = TeacherEvaluate;


/***/ },

/***/ 665:
/*!********************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/EvaluateStudent/Component/SelectWithName.tsx ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	"use strict";
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var Option = antd_1.Select.Option;
	/**
	 * 班主任页面 评价学生 品德表现 中的选择评语
	 * 左侧是有颜色的name 右侧是一个select
	 * 组件有两个状态 如果之前选择过，那么现实选择的评语
	 * 默认是未选择过的状态
	 */
	var SelectWithName = (function (_super) {
	    __extends(SelectWithName, _super);
	    function SelectWithName(props) {
	        _super.call(this, props);
	        this.state = {
	            chosenOption: commonFunc_1.isEmptyObject(props.options) ? "" : props.options[0].ID
	        };
	        this.handleChange = this.handleChange.bind(this);
	    }
	    SelectWithName.prototype.componentWillMount = function () {
	        if (!commonFunc_1.isEmptyObject(this.state.chosenOption.toString())) {
	            this.checkContext(this.state.chosenOption, "init");
	        }
	    };
	    SelectWithName.prototype.changeMap = function (map, value, type) {
	        var this_ = this;
	        var selectContextMap = this.props.selectContextMap;
	        var stuTermQualityEvaluationLists = [];
	        if (commonFunc_1.isEmptyObject(map)) {
	            map["rootQualityCategoryID"] = selectContextMap.rootQualityCategoryID;
	            map["rootQualityCategoryName"] = selectContextMap.rootQualityCategoryName;
	        }
	        else {
	            stuTermQualityEvaluationLists = map["stuTermQualityEvaluation"];
	            for (var i = 0; i < stuTermQualityEvaluationLists.length; i++) {
	                var item = stuTermQualityEvaluationLists[i];
	                if (item.qualityCategoryID == this_.props.id) {
	                    if (type == "select") {
	                        stuTermQualityEvaluationLists.splice(i, 1);
	                        break;
	                    }
	                    else {
	                        return;
	                    }
	                }
	            }
	        }
	        var mapSub = {};
	        mapSub["evaluationItemID"] = value;
	        mapSub["qualityCategoryID"] = this.props.id;
	        mapSub["qualityCategoryName"] = this.props.name;
	        stuTermQualityEvaluationLists.push(mapSub);
	        map["stuTermQualityEvaluation"] = stuTermQualityEvaluationLists;
	        return map;
	    };
	    //check context 是否有值,根据情况对其赋值【1.willMount初始化时，若context中没有值，则对其赋值  2.select change事件赋不同的值】
	    SelectWithName.prototype.checkContext = function (value, type) {
	        var selectContextMap = this.props.selectContextMap;
	        var teacherEvaluatePostData = TeacherPersnalPageContext_1.getTeacherEvaluatePostData();
	        if (commonFunc_1.isEmptyObject(teacherEvaluatePostData) || commonFunc_1.isEmptyObject(teacherEvaluatePostData[selectContextMap.rootQualityCategoryID])) {
	            teacherEvaluatePostData[selectContextMap.rootQualityCategoryID] = this.changeMap({}, value, type);
	        }
	        else {
	            teacherEvaluatePostData[selectContextMap.rootQualityCategoryID] = this.changeMap(teacherEvaluatePostData[selectContextMap.rootQualityCategoryID], value, type);
	        }
	        TeacherPersnalPageContext_1.setTeacherEvaluatePostData(teacherEvaluatePostData);
	    };
	    //select handleChange
	    SelectWithName.prototype.handleChange = function (value) {
	        this.checkContext(value, "select");
	        this.setState({
	            chosenOption: value
	        });
	    };
	    SelectWithName.prototype.render = function () {
	        return (React.createElement(antd_1.Row, {className: "header-with-select " + this.props.className, style: this.props.style}, React.createElement(antd_1.Col, {span: 7, className: "header"}, this.props.name), React.createElement(antd_1.Col, {span: 17}, this.props.isFinished &&
	            React.createElement("div", {className: "finished-right-text"}, this.props.content), !this.props.isFinished &&
	            React.createElement(antd_1.Select, {style: { width: "100%" }, onChange: this.handleChange, value: this.state.chosenOption, placeholder: this.props.placeholder ? this.props.placeholder : "请选择学生评语"}, this.props.options.map(function (item, index) {
	                return (React.createElement(Option, {key: index, value: item.ID}, item.value));
	            })))));
	    };
	    SelectWithName.defaultProps = {
	        className: ""
	    };
	    return SelectWithName;
	}(React.Component));
	module.exports = SelectWithName;


/***/ },

/***/ 666:
/*!*************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/EvaluateStudent/Component/StudentMonthSummary.tsx ***!
  \*************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var CardTitleWithLine = __webpack_require__(/*! ../../../../common/Component/CardTitleWithLine */ 442);
	var TextareaWithButton = __webpack_require__(/*! ../../../../common/Component/TextareaWithButton */ 510);
	var MonthSelect = __webpack_require__(/*! ./MonthSelect */ 667);
	var TextareaWithTitle = __webpack_require__(/*! common/Component/TextareaWithTitle */ 509);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TermAnalysis/TermAnalysisActionTypes */ 401);
	var teacherActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var commonFunc_2 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var monthList = [];
	var defaultPlaceHolder = "该学生尚未填写当前学期的月度总结";
	/**
	 * 班主任评价同学页面 查看同学月度总结
	 */
	var StudentMonthSummary = (function (_super) {
	    __extends(StudentMonthSummary, _super);
	    function StudentMonthSummary(props) {
	        _super.call(this, props);
	        this.state = {
	            monthSummaryMap: {}
	        };
	        this.onMonthChange = this.onMonthChange.bind(this);
	        this.monthEvaluate = this.monthEvaluate.bind(this);
	    }
	    StudentMonthSummary.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    StudentMonthSummary.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    StudentMonthSummary.prototype.setStateByProps = function (props) {
	        var this_ = this;
	        var _a = this.props, termID = _a.termID, studentID = _a.studentID;
	        var yearMonths = commonFunc_1.getYearMonthsByTermID(termID);
	        var queryObj = {
	            yearMonths: yearMonths,
	            studentUserID: studentID
	        };
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_MONTHSUMMARY, queryObj, function (response) {
	            var monthSummary = response.result.monthSummaryInfos;
	            //将monthSummary转成map, 以便通过月份，遍历变化的信息
	            var monthSummaryMap = {};
	            for (var _i = 0, monthSummary_1 = monthSummary; _i < monthSummary_1.length; _i++) {
	                var item = monthSummary_1[_i];
	                monthSummaryMap[item.month] = item;
	                monthList.push(item.month);
	            }
	            this_.setState({
	                monthSummaryMap: monthSummaryMap,
	                currentMonth: monthSummary[0].month,
	                currentStudentID: props.studentID
	            });
	        });
	    };
	    StudentMonthSummary.prototype.onMonthChange = function (month) {
	        this.setState({
	            currentMonth: month
	        });
	    };
	    //班主任评语submit
	    StudentMonthSummary.prototype.monthEvaluate = function (word) {
	        if (!commonFunc_2.isEmptyObject(word)) {
	            var map = { evaluationContent: word };
	            var postData = {
	                studentUserID: this.state.currentStudentID,
	                year: this.state.monthSummaryMap[this.state.currentMonth].year,
	                month: this.state.currentMonth,
	                teacherUserID: storageUtil_1.getUserIDFromStorage(),
	                teacherMonthSummaryEvaluation: map
	            };
	            ajaxUtil_1.getDataByActionIDWithQueryAsync(teacherActionTypes.SET_TEACHER_MONTHEVALUATE, postData, function (response) {
	                antd_1.message.success("保存成功");
	            });
	        }
	    };
	    StudentMonthSummary.prototype.render = function () {
	        var this_ = this;
	        var teacherReview = !commonFunc_2.isEmptyObject(this.state.monthSummaryMap) ? this.state.monthSummaryMap[this.state.currentMonth].teacherMonthSummaryEvaluation.evaluationContent : "";
	        return (React.createElement("div", {className: "blueBack am-padding-sm"}, React.createElement(MonthSelect, {onMonthChange: this.onMonthChange, monthList: monthList, currentMonth: this.state.currentMonth}), React.createElement(CardTitleWithLine, {title: "班主任月度评语", className: "am-margin-bottom-sm am-margin-top"}), React.createElement(TextareaWithButton, {content: teacherReview, submit: this.monthEvaluate}), React.createElement(CardTitleWithLine, {title: "学生月度总结", className: "am-margin-top am-margin-bottom"}), !commonFunc_2.isEmptyObject(this.state.monthSummaryMap) &&
	            this.state.monthSummaryMap[this.state.currentMonth].stuSummaryInfos.map(function (item, index) {
	                var schoolSummaryTitle = item.schoolSummaryTitle;
	                var summaryContent = item.stuSummaryContentInfo.summaryContent;
	                return React.createElement(TextareaWithTitle, {key: index, minLength: schoolSummaryTitle.summaryLimit, title: schoolSummaryTitle.summaryTitle, buttonShow: false, score: schoolSummaryTitle.integralScore, placeholder: defaultPlaceHolder, className: "am-margin-bottom", content: summaryContent});
	            })));
	    };
	    return StudentMonthSummary;
	}(React.Component));
	module.exports = StudentMonthSummary;


/***/ },

/***/ 667:
/*!*****************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/EvaluateStudent/Component/MonthSelect.tsx ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var antd_1 = __webpack_require__(/*! antd */ 386);
	/**
	 * 班主任评价学生 月份选择
	 */
	var MonthSelect = (function (_super) {
	    __extends(MonthSelect, _super);
	    function MonthSelect(props) {
	        _super.call(this, props);
	        this.handleClick = this.handleClick.bind(this);
	    }
	    MonthSelect.prototype.handleClick = function (e) {
	        var month = e.target.dataset.month;
	        this.props.onMonthChange(month);
	    };
	    MonthSelect.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement(antd_1.Row, {onClick: this.handleClick, className: "month-block-parent"}, this.props.monthList.map(function (item, index) {
	            var className = item == this_.props.currentMonth ? "month-block active" : "month-block";
	            return React.createElement(antd_1.Col, {span: 4, className: className, key: index, "data-month": item}, item, "月");
	        })));
	    };
	    return MonthSelect;
	}(React.Component));
	module.exports = MonthSelect;


/***/ }

});
//# sourceMappingURL=16.16.js.map