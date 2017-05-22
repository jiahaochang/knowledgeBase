webpackJsonp([39],{

/***/ 439:
/*!***********************************************!*\
  !*** ./common/Component/StudentRankState.tsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var SelectTerm = __webpack_require__(/*! common/Component/SelectTerm */ 440);
	"use strict";
	var StudentRankState = (function (_super) {
	    __extends(StudentRankState, _super);
	    function StudentRankState(props) {
	        _super.call(this, props);
	        this.onTermChange = this.onTermChange.bind(this);
	        this.goTermAnalysis = this.goTermAnalysis.bind(this);
	    }
	    StudentRankState.prototype.goTermAnalysis = function (type) {
	        var url = "";
	        if (type === "rankInClass") {
	            url = "termAnalysis/rankInClass";
	        }
	        else if (type === "scoreGrowthRecord") {
	            url = "termAnalysis/scoreGrowthRecord";
	        }
	        this.props.router.push(url);
	    };
	    StudentRankState.prototype.onTermChange = function (termAfterChange) {
	        this.props.onTermChange(termAfterChange);
	    };
	    StudentRankState.prototype.render = function () {
	        return (React.createElement("div", {className: this.props.className, style: this.props.style}, this.props.selectShow &&
	            React.createElement(SelectTerm, {onTermChange: this.onTermChange, currentTerm: this.props.currentTerm}), React.createElement("div", {className: "RankStateSingle green", onClick: !this.props.showClickIcon ? null : this.goTermAnalysis.bind(this, "scoreGrowthRecord")}, "成长积分", React.createElement("span", {className: "count"}, this.props.grownScore, this.props.showClickIcon &&
	            React.createElement("i", {className: "fa fa-chevron-right"}))), React.createElement("div", {className: "RankStateSingle blueDuck", onClick: !this.props.showClickIcon ? null : this.goTermAnalysis.bind(this, "rankInClass")}, "班级排名", React.createElement("span", {className: "count"}, this.props.classRank, this.props.showClickIcon &&
	            React.createElement("i", {className: "fa fa-chevron-right"}))), React.createElement("div", {className: "RankStateSingle yellow"}, "全校排名", React.createElement("span", {className: "count"}, this.props.schoolRank))));
	    };
	    StudentRankState.defaultProps = {
	        showClickIcon: true,
	        selectShow: true,
	        grownScore: 0,
	        classRank: 0,
	        schoolRank: 0,
	        className: ""
	    };
	    return StudentRankState;
	}(React.Component));
	module.exports = react_router_1.withRouter(StudentRankState);


/***/ },

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

/***/ 477:
/*!************************************************!*\
  !*** ./common/Component/PersonInfoAndRank.tsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var StudentRankState = __webpack_require__(/*! ./StudentRankState */ 439);
	var AdminRankState = __webpack_require__(/*! ./AdminRankState */ 478);
	var TeacherRankState = __webpack_require__(/*! ./TeacherRankState */ 479);
	var PersonalBasicInfo = __webpack_require__(/*! ./PersonalBasicInfo */ 441);
	"use strict";
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var teacherActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var studentActionTypes = __webpack_require__(/*! actions/HomePage/HomePageActionTypes */ 380);
	var adminActionTypes = __webpack_require__(/*! actions/AdminPage/AdminPageActionTypes */ 382);
	var Role_1 = __webpack_require__(/*! common/Module/Role */ 379);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	/**
	 *学期整体评价系列----右边的个人信息和排名的row
	 */
	var PersonInfoAndRank = (function (_super) {
	    __extends(PersonInfoAndRank, _super);
	    function PersonInfoAndRank(props) {
	        _super.call(this, props);
	        this.state = {
	            rankResult: {}
	        };
	        this.onTermChange = this.onTermChange.bind(this);
	    }
	    PersonInfoAndRank.prototype.componentWillMount = function () {
	        var this_ = this;
	        var roleEnum = this.props.roleEnum;
	        var actionTypes = "";
	        if (roleEnum == 0 /* student */) {
	            actionTypes = studentActionTypes.GET_STUDENT_RANKSTATE;
	        }
	        else if (roleEnum == 1 /* teacher */) {
	            actionTypes = teacherActionTypes.GET_TEACHER_RANKSTATE;
	        }
	        else if (roleEnum == 2 /* admin */) {
	            actionTypes = adminActionTypes.GET_ADMIN_SCHOOLACCOUNTSTATISTIC;
	        }
	        ajaxUtil.getDataByActionIDAsync(actionTypes, function (response) {
	            this_.setState({
	                rankResult: response.result
	            });
	        });
	    };
	    PersonInfoAndRank.prototype.onTermChange = function (termAfterChange) {
	        this.props.onTermChange(termAfterChange);
	    };
	    PersonInfoAndRank.prototype.render = function () {
	        var roleRankResult = null;
	        var roleEnum = this.props.roleEnum;
	        var ranks = this.state.rankResult;
	        if (!!ranks) {
	            if (roleEnum == 0 /* student */) {
	                roleRankResult = React.createElement(StudentRankState, {selectShow: this.props.selectShow, showClickIcon: this.props.showClickIcon, currentTerm: this.props.currentTerm, onTermChange: this.onTermChange, grownScore: ranks.integralScore, classRank: ranks.rankInClass, schoolRank: ranks.rankInSchool});
	            }
	            else if (roleEnum == 1 /* teacher */) {
	                roleRankResult = React.createElement(TeacherRankState, null);
	            }
	            else if (roleEnum == 2 /* admin */) {
	                roleRankResult = React.createElement(AdminRankState, {studentAccountCount: ranks.studentAccountCount, teacherAccountCount: ranks.teacherAccountCount});
	            }
	        }
	        return (React.createElement(antd_1.Row, {className: "display-box"}, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, React.createElement(PersonalBasicInfo, {className: "block-box-shadows", roleEnum: this.props.roleEnum})), React.createElement(antd_1.Col, {span: 7, className: "block-box-shadows "}, roleRankResult)));
	    };
	    PersonInfoAndRank.defaultProps = {
	        roleEnum: Role_1.Role.transToRoleEnum(storageUtil_1.getRoleEnumFromStorage())
	    };
	    return PersonInfoAndRank;
	}(React.Component));
	module.exports = PersonInfoAndRank;


/***/ },

/***/ 478:
/*!*********************************************!*\
  !*** ./common/Component/AdminRankState.tsx ***!
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
	var AdminRankState = (function (_super) {
	    __extends(AdminRankState, _super);
	    function AdminRankState(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    AdminRankState.prototype.render = function () {
	        return (React.createElement("div", {className: "left-statistics"}, React.createElement("div", {className: "title"}, "学校帐户统计"), React.createElement("div", {className: "statistics-single"}, "学生帐户", React.createElement("span", {className: "rightCount green"}, this.props.studentAccountCount)), React.createElement("div", {className: "statistics-single"}, "管理员/老师帐户", React.createElement("span", {className: "rightCount blue"}, this.props.teacherAccountCount))));
	    };
	    AdminRankState.defaultProps = {
	        studentAccountCount: 0,
	        teacherAccountCount: 0
	    };
	    return AdminRankState;
	}(React.Component));
	module.exports = AdminRankState;


/***/ },

/***/ 479:
/*!***********************************************!*\
  !*** ./common/Component/TeacherRankState.tsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var TeacherRankState = (function (_super) {
	    __extends(TeacherRankState, _super);
	    function TeacherRankState(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TeacherRankState.prototype.render = function () {
	        return (React.createElement("div", {className: "left-statistics teacher-rank-state"}, React.createElement("div", {className: "statistics-single"}, "班级平均积分", React.createElement("span", {className: "rightCount green"}, this.props.classAvgIntegralScore)), React.createElement("div", {className: "statistics-single"}, "积分年级排名", React.createElement("span", {className: "rightCount blue"}, this.props.gradeIntegralRank))));
	    };
	    TeacherRankState.defaultProps = {
	        classAvgIntegralScore: 0,
	        gradeIntegralRank: 0
	    };
	    return TeacherRankState;
	}(React.Component));
	module.exports = TeacherRankState;


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

/***/ 764:
/*!********************************************************!*\
  !*** ./pages/TermAnalysis/TermSummary/TermSummary.tsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var TextareaWithTitle = __webpack_require__(/*! ../../../common/Component/TextareaWithTitle */ 509);
	var PersonInfoAndRank = __webpack_require__(/*! ../../../common/Component/PersonInfoAndRank */ 477);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TermAnalysis/TermAnalysisActionTypes */ 401);
	"use strict";
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var TermSummary = (function (_super) {
	    __extends(TermSummary, _super);
	    function TermSummary(props) {
	        _super.call(this, props);
	        this.state = {
	            currentTerm: storageUtil_1.getTermIDFromStorage()
	        };
	        this.onTermChange = this.onTermChange.bind(this);
	    }
	    TermSummary.prototype.componentWillMount = function () {
	        var this_ = this;
	        this.setStateByTermID(this.state.currentTerm);
	    };
	    TermSummary.prototype.setStateByTermID = function (currentTerm) {
	        var this_ = this;
	        var queryObj = { termID: currentTerm };
	        ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.GET_STUDENT_SEMESTERSUMMARY, queryObj, function (response) {
	            var result = response.result;
	            this_.setState({
	                summaryData: result,
	            });
	        });
	    };
	    TermSummary.prototype.onTermChange = function (termAfterChange) {
	        this.setStateByTermID(termAfterChange);
	        this.setState({
	            currentTerm: termAfterChange
	        });
	    };
	    TermSummary.prototype.handleSubmit = function (id, type, value) {
	        var postData = {
	            termID: this.state.currentTerm,
	            content: value
	        };
	        postData[type] = id;
	        var actionType = type == "schoolSummaryTitleID" ? actionTypes.SET_STUDENT_SEMESTERSUMMARY : actionTypes.SET_STUDENT_SEMESTERQUALITYSUMMARY;
	        ajaxUtil_1.getDataByActionIDWithQuery(actionType, postData, function (response) {
	            console.log("success");
	        });
	    };
	    TermSummary.prototype.render = function () {
	        var this_ = this;
	        var termAnalysisInfos = this.state.summaryData.termAnalysisInfos;
	        var termQualitySummaryInfos = this.state.summaryData.termQualitySummaryInfos;
	        return (React.createElement("div", null, React.createElement(PersonInfoAndRank, {roleEnum: 0 /* student */, onTermChange: this.onTermChange, currentTerm: this.state.currentTerm}), termAnalysisInfos.map(function (item, index) {
	            var schoolSummaryTitle = item.schoolSummaryTitle;
	            var summaryContent = item.stuSummaryContentInfo.summaryContent;
	            return React.createElement(TextareaWithTitle, {className: "block-box-shadows am-margin-top", key: index, submit: this_.handleSubmit.bind(this_, schoolSummaryTitle.schoolSummaryTitleID, "schoolSummaryTitleID"), minLength: schoolSummaryTitle.summaryLimit, title: schoolSummaryTitle.summaryTitle, score: schoolSummaryTitle.integralScore, placeholder: schoolSummaryTitle.summaryHint, content: summaryContent});
	        }), termQualitySummaryInfos.map(function (item, index) {
	            var schoolSummaryTitle = item.schoolSummaryTitle;
	            var summaryContent = item.stuSummaryContentInfo.summaryContent;
	            return React.createElement(TextareaWithTitle, {className: "block-box-shadows am-margin-top", key: index, submit: this_.handleSubmit.bind(this_, schoolSummaryTitle.qualityCategoryID, "qualityCategoryID"), minLength: schoolSummaryTitle.summaryLimit, title: schoolSummaryTitle.qualityCategoryName, score: schoolSummaryTitle.integralScore, placeholder: schoolSummaryTitle.summaryHint, content: summaryContent});
	        })));
	    };
	    return TermSummary;
	}(React.Component));
	module.exports = TermSummary;


/***/ }

});
//# sourceMappingURL=39.39.js.map