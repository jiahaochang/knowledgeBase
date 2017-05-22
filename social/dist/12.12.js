webpackJsonp([12],{

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

/***/ 496:
/*!************************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/ClassNotification/Component/StudentListWithClickCallback.tsx ***!
  \************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	"use strict";
	/**
	 * 学生列表 点击个人头像 触发回调
	 * 每行3个
	 */
	var StudentListWithClickCallback = (function (_super) {
	    __extends(StudentListWithClickCallback, _super);
	    function StudentListWithClickCallback(props) {
	        _super.call(this, props);
	    }
	    StudentListWithClickCallback.prototype.clickedIcon = function (studentID, studentName) {
	        this.setState({ currentStudentID: studentID });
	        this.props.clickedIcon(studentID, studentName);
	    };
	    StudentListWithClickCallback.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("div", {className: "am-cf"}, !!this.props.currentStudentID &&
	            this.props.students.map(function (item, index) {
	                var className = item.userID == this_.props.currentStudentID ? "ClassMateEvaluateListActiveSpecial" : "ClassMateEvaluateListActiveNormal";
	                var headImage = commonFunc_1.isEmptyObject(item.headImage) ? CommonConfig_1.studentDefaultHeadPic : item.headImage;
	                var name = commonFunc_1.isEmptyObject(item.name) ? CommonConfig_1.studentDefaultName : item.name;
	                return (React.createElement("div", {key: index, className: className, onClick: this_.clickedIcon.bind(this_, item.userID, item.name)}, React.createElement("img", {src: headImage, width: "60"}), React.createElement("div", {className: "name"}, name)));
	            })));
	    };
	    return StudentListWithClickCallback;
	}(React.Component));
	module.exports = StudentListWithClickCallback;


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

/***/ 500:
/*!*****************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/StudentPerformance/StudentPerformance.tsx ***!
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
	var PersonInfoAndRank = __webpack_require__(/*! ../../../common/Component/PersonInfoAndRank */ 477);
	var TeacherRecordStudentPerformance = __webpack_require__(/*! ./Component/TeacherRecordStudentPerformance */ 501);
	var StudentPerformanceRecord = __webpack_require__(/*! ./Component/StudentPerformanceRecord */ 502);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var TitleOnTextarea = __webpack_require__(/*! ../../../common/Component/TitleOnTextarea */ 503);
	var StudentListWithClickCallback = __webpack_require__(/*! ../ClassNotification/Component/StudentListWithClickCallback */ 496);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../TeacherPersnalPageContext */ 497);
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var TeacherPersnalPageUtil_1 = __webpack_require__(/*! ../TeacherPersnalPageUtil */ 504);
	var OtherTeacherBasicInfoAndRank = __webpack_require__(/*! ../../../common/Component/OtherTeacherBasicInfoAndRank */ 505);
	var StudentPerformance = (function (_super) {
	    __extends(StudentPerformance, _super);
	    function StudentPerformance(props) {
	        _super.call(this, props);
	        this.onStudentChange = this.onStudentChange.bind(this);
	        this.refresh = this.refresh.bind(this);
	        this.state = {
	            currentStudentID: "",
	            studentPerformances: [],
	            currentStudentName: ""
	        };
	    }
	    StudentPerformance.prototype.onStudentChange = function (studentID, studentName) {
	        this.setState({
	            currentStudentID: studentID,
	            currentStudentName: studentName
	        });
	    };
	    StudentPerformance.prototype.refresh = function () {
	        var this_ = this;
	        var _a = TeacherPersnalPageUtil_1.getTeacherUserIDAndDisableEditFlag(this), teacherUserID = _a.teacherUserID, disableEdit = _a.disableEdit;
	        this.setState({
	            teacherUserID: teacherUserID,
	            disableEdit: disableEdit
	        });
	        TeacherPersnalPageUtil_1.getTeacherBasicInfoAsync(teacherUserID, this, function (teacherUserInfo) {
	            this_.setState({
	                teacherBasicInfo: teacherUserInfo
	            });
	        });
	        TeacherPersnalPageUtil_1.getTeacherRankStateAsync(teacherUserID, this, function (teacherRankState) {
	            this_.setState({
	                teacherRankState: teacherRankState
	            });
	        });
	        // 类别  表现情况
	        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_STUDENTPERFORMANCEOPTIONS, { teacherUserID: teacherUserID }, function (response) {
	            var responseData = response.result;
	            TeacherPersnalPageContext_1.setStudentPerformanceOptions(responseData);
	        });
	        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.GET_TEACHER_CLASSMATELIST, { teacherUserID: teacherUserID }, function (response) {
	            var currentStudentID = response.result.students[0].userID;
	            var currentStudentName = response.result.students[0].name;
	            var students = response.result.students;
	            var queryObj = {};
	            queryObj["teacherUserID"] = teacherUserID;
	            queryObj["studentUserID"] = currentStudentID;
	            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_STUDENTPERFORMANCE_RECORD, queryObj, function (response) {
	                this_.setState({
	                    students: students,
	                    currentStudentID: currentStudentID,
	                    currentStudentName: currentStudentName,
	                    studentPerformances: response.result.studentPerformances
	                });
	            });
	        });
	    };
	    StudentPerformance.prototype.componentWillMount = function () {
	        this.refresh();
	    };
	    StudentPerformance.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("div", null, !this.state.disableEdit &&
	            React.createElement(PersonInfoAndRank, null), this.state.disableEdit &&
	            React.createElement(OtherTeacherBasicInfoAndRank, {teacherBasicInfo: this.state.teacherBasicInfo, teacherRankState: this.state.teacherRankState, disableEdit: true}), React.createElement(antd_1.Row, {className: "am-margin-top"}, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, !this.state.disableEdit &&
	            React.createElement("div", {className: "block-box-shadows am-margin-bottom "}, React.createElement(TitleOnTextarea, {title: "记录学生表现"}), this.state.currentStudentID &&
	                React.createElement(TeacherRecordStudentPerformance, {studentID: this.state.currentStudentID, studentName: this_.state.currentStudentName, refresh: this.refresh})), React.createElement("div", {className: "block-box-shadows am-margin-bottom "}, React.createElement(TitleOnTextarea, {title: "过往记录"}), this.state.currentStudentID &&
	            this.state.studentPerformances.map(function (item, index) {
	                return React.createElement(StudentPerformanceRecord, {studentID: this_.state.currentStudentID, studentName: this_.state.currentStudentName, record: item, key: index, disableEdit: this_.state.disableEdit});
	            }))), React.createElement(antd_1.Col, {span: 7}, React.createElement("div", {className: "block-box-shadows  am-cf am-margin-bottom"}, React.createElement(StudentListWithClickCallback, {students: this.state.students, currentStudentID: this.state.currentStudentID, clickedIcon: this.onStudentChange}))))));
	    };
	    return StudentPerformance;
	}(React.Component));
	module.exports = StudentPerformance;


/***/ },

/***/ 501:
/*!****************************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/StudentPerformance/Component/TeacherRecordStudentPerformance.tsx ***!
  \****************************************************************************************************/
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
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	"use strict";
	var Immutable = __webpack_require__(/*! immutable */ 363);
	var Option = antd_1.Select.Option;
	var RadioGroup = antd_1.Radio.Group;
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	/**
	 * 老师界面 学生表现记录 老师记录学生表现
	 */
	var TeacherRecordStudentPerformance = (function (_super) {
	    __extends(TeacherRecordStudentPerformance, _super);
	    function TeacherRecordStudentPerformance(props) {
	        _super.call(this, props);
	        this.state = {
	            performanceTypes: [],
	            performanceLevels: []
	        };
	        this.save = this.save.bind(this);
	        this.handleReset = this.handleReset.bind(this);
	    }
	    TeacherRecordStudentPerformance.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    TeacherRecordStudentPerformance.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    TeacherRecordStudentPerformance.prototype.setStateByProps = function (props) {
	        var performanceData = Immutable.fromJS(TeacherPersnalPageContext_1.getStudentPerformanceOptions()).toJS();
	        this.setState({
	            performanceTypes: performanceData.performanceTypes,
	            performanceLevels: performanceData.performanceLevels,
	        });
	        var setFieldsValue = props.form.setFieldsValue;
	        setFieldsValue({
	            performanceDate: new Date()
	        });
	    };
	    //保存
	    TeacherRecordStudentPerformance.prototype.save = function (e) {
	        var this_ = this;
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            console.log(values);
	            values["studentUserID"] = this_.props.studentID;
	            values["teacherUserID"] = storageUtil_1.getUserIDFromStorage();
	            ajaxUtil.getDataByActionIDWithQuery(actionTypes.SAVE_TEACHER_STUDENTPERFORMANCE_RECORD, { studentPerformance: values }, function (response) {
	                antd_1.message.success("添加成功");
	                this_.props.form.resetFields();
	                this_.props.refresh();
	            });
	        });
	    };
	    //重置表格
	    TeacherRecordStudentPerformance.prototype.handleReset = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	    };
	    TeacherRecordStudentPerformance.prototype.render = function () {
	        var text = React.createElement("span", null, "点击右边头像自动显示姓名");
	        var saveBtn = React.createElement(antd_1.Button, {onClick: this.save, className: "btn-blue am-margin-left-sm"}, "保存");
	        var cancelBtn = React.createElement(antd_1.Button, {onClick: this.handleReset, className: "am-margin-left-sm"}, "取消");
	        var iconProps = {
	            name: 'file',
	            action: '/upload.do',
	            //headers: {
	            //    authorization: 'authorization-text',
	            //},
	            onChange: function (info) {
	                if (info.file.status !== 'uploading') {
	                    console.log(info.file, info.fileList);
	                }
	                if (info.file.status === 'done') {
	                    antd_1.message.success(info.file.name + " \u4E0A\u4F20\u6210\u529F\u3002");
	                }
	                else if (info.file.status === 'error') {
	                    antd_1.message.error(info.file.name + " \u4E0A\u4F20\u5931\u8D25\u3002");
	                }
	            },
	        };
	        var upload = React.createElement(antd_1.Upload, __assign({}, iconProps), React.createElement(antd_1.Button, {type: "ghost"}, React.createElement(antd_1.Icon, {type: "upload"}), "点击上传"));
	        var getFieldProps = this.props.form.getFieldProps;
	        var performanceLevelIDProps = getFieldProps("performanceLevelID", {
	            rules: [
	                {
	                    required: true,
	                    message: "表现情况不能为空"
	                }
	            ]
	        });
	        var performanceTypeIDProps = getFieldProps("performanceTypeID", {
	            rules: [
	                {
	                    required: true,
	                    message: "类别不能为空"
	                }
	            ]
	        });
	        var performanceDateProps = getFieldProps("performanceDate", {
	            rules: [
	                {
	                    required: true,
	                    type: "date",
	                    message: "日期不能为空"
	                }
	            ]
	        });
	        var contentProps = getFieldProps("content", {
	            rules: [
	                {
	                    required: false
	                }
	            ]
	        });
	        var formItemLayout = {
	            labelCol: { span: 6 },
	            wrapperCol: { span: 15 },
	        };
	        //图片上传 todo
	        /*<Row >
	            <Col span={20}>
	                相关材料：
	            </Col>
	            <Col span={4}>
	                {upload}
	            </Col>
	        </Row>*/
	        return (React.createElement("div", {className: "am-margin-top"}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 6}, "姓名：", React.createElement(antd_1.Tooltip, {placement: "top", title: text}, React.createElement(antd_1.Input, {disabled: true, value: this.props.studentName, style: { width: "90px" }}))), React.createElement(antd_1.Col, {span: 9, offset: "1"}, React.createElement(FormItem, __assign({label: "日期"}, formItemLayout), React.createElement(antd_1.DatePicker, __assign({placeholder: "请选择时间"}, performanceDateProps)))), React.createElement(antd_1.Col, {span: 8}, React.createElement(FormItem, __assign({label: "类别"}, formItemLayout), React.createElement(antd_1.Select, __assign({}, performanceTypeIDProps), this.state.performanceTypes.map(function (item, index) {
	            return (React.createElement(Option, {value: item.performanceTypeID.toString(), key: item.performanceTypeName + item.performanceTypeID}, item.performanceTypeName));
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, {label: "表现情况", wrapperCol: { span: 15 }, labelCol: { span: 3 }}, React.createElement(RadioGroup, __assign({}, performanceLevelIDProps), this.state.performanceLevels.map(function (item, index) {
	            return (React.createElement(antd_1.Radio, {value: item.performanceLevelID.toString(), key: index}, item.performanceLevelName));
	        }))))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, {label: "补充说明（选填）", wrapperCol: { span: 18 }, labelCol: { span: 5 }}, React.createElement(antd_1.Input, __assign({type: "textarea"}, contentProps))))), React.createElement("div", {className: "am-margin-top-sm am-cf", style: { marginRight: "70px" }}, React.createElement("div", {className: "pull-left"}, saveBtn, cancelBtn)))));
	    };
	    TeacherRecordStudentPerformance.defaultProps = {};
	    return TeacherRecordStudentPerformance;
	}(React.Component));
	module.exports = createForm()(TeacherRecordStudentPerformance);


/***/ },

/***/ 502:
/*!*********************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/StudentPerformance/Component/StudentPerformanceRecord.tsx ***!
  \*********************************************************************************************/
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
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var RadioGroup = antd_1.Radio.Group;
	/**
	 * 老师界面 学生表现记录 过住记录single
	 */
	var StudentPerformanceRecord = (function (_super) {
	    __extends(StudentPerformanceRecord, _super);
	    function StudentPerformanceRecord(props) {
	        _super.call(this, props);
	        this.delete = this.delete.bind(this);
	        this.state = { hide: false };
	    }
	    StudentPerformanceRecord.prototype.delete = function (id) {
	        var this_ = this;
	        var postData = {};
	        postData["studentUserID"] = this.props.studentID;
	        postData["UserID"] = storageUtil_1.getUserIDFromStorage();
	        postData["studentPerformanceID"] = id;
	        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.DELETE_TEACHER_STUDENTPERFORMANCE_RECORD, postData, function (response) {
	            this_.setState({ hide: true });
	            antd_1.message.success("删除成功");
	        });
	    };
	    StudentPerformanceRecord.prototype.getPerformanceTypeName = function (performanceTypeID) {
	        var performanceOptionData = TeacherPersnalPageContext_1.getStudentPerformanceOptions();
	        for (var _i = 0, _a = performanceOptionData.performanceTypes; _i < _a.length; _i++) {
	            var item = _a[_i];
	            if (item.performanceTypeID = performanceTypeID) {
	                return item.performanceTypeName;
	            }
	        }
	        ;
	    };
	    StudentPerformanceRecord.prototype.render = function () {
	        var item = this.props.record;
	        var performanceTypeName = this.getPerformanceTypeName(item.performanceTypeID);
	        var performanceDate = commonFunc_1.formatDate(item.performanceDate, "yyyy-MM-dd");
	        var performanceLevels = TeacherPersnalPageContext_1.getStudentPerformanceOptions().performanceLevels;
	        var deleteText = "确认要删除该条表现记录吗？";
	        var className = this.state.hide ? "past-record-single am-hide" : "past-record-single";
	        return (React.createElement("div", {className: className}, React.createElement("div", {className: "am-margin-bottom-xs"}, React.createElement("span", {className: "am-padding-right"}, this.props.studentName), React.createElement("span", {className: "am-padding-right"}, performanceDate), React.createElement("span", null, performanceTypeName), !this.props.disableEdit &&
	            React.createElement(antd_1.Popconfirm, {title: deleteText, onConfirm: this.delete.bind(this, item.studentPerformanceID)}, React.createElement("a", {className: "redLink anticon anticon-cross  pull-right"}, "删除"))), React.createElement("div", {className: "am-margin-bottom-xs"}, "表现情况：", React.createElement(RadioGroup, {defaultValue: item.performanceLevelID}, performanceLevels.map(function (item, index) {
	            return (React.createElement(antd_1.Radio, {value: item.performanceLevelID, key: index, disabled: true}, item.performanceLevelName));
	        }))), !commonFunc_1.isEmptyObject(item.content) &&
	            React.createElement("div", {className: "am-margin-bottom-xs"}, "补充说明(选填):", item.content), !commonFunc_1.isEmptyObject(item.pictures) &&
	            React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 6}, "相关材料："), React.createElement(antd_1.Col, null, item.pictures.map(function (singleItem, index) { return (React.createElement("image", {key: index, src: singleItem.pictureUrl}, " ")); })))));
	    };
	    StudentPerformanceRecord.defaultProps = {};
	    return StudentPerformanceRecord;
	}(React.Component));
	module.exports = StudentPerformanceRecord;


/***/ },

/***/ 503:
/*!**********************************************!*\
  !*** ./common/Component/TitleOnTextarea.tsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	/**
	 * 左侧带有蓝色竖条的 title
	 */
	var TitleOnTextarea = (function (_super) {
	    __extends(TitleOnTextarea, _super);
	    function TitleOnTextarea(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TitleOnTextarea.prototype.render = function () {
	        return (React.createElement("div", {className: "title-on-textarea"}, React.createElement("span", null, this.props.title), React.createElement("span", null, this.props.rightMsg)));
	    };
	    TitleOnTextarea.defaultProps = {};
	    return TitleOnTextarea;
	}(React.Component));
	module.exports = TitleOnTextarea;


/***/ },

/***/ 504:
/*!*************************************************************!*\
  !*** ./pages/TeacherPersonalPage/TeacherPersnalPageUtil.ts ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var context = __webpack_require__(/*! ./TeacherPersnalPageContext */ 497);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var storageUtil_1 = __webpack_require__(/*! ../../common/storageUtil */ 383);
	var ajaxUtil_1 = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var TeacherPersonalPageActionTypes_1 = __webpack_require__(/*! ../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var TeacherPersonalPageActionTypes_2 = __webpack_require__(/*! ../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	function getAllStudentsFromCacheContext(teacherUserID) {
	    var allStudents = context.getClassAllMember();
	    if (!allStudents || allStudents.length != 0) {
	        allStudents = ajaxUtil.getDataByActionIDWithQuery(ActionTypes.GET_TEACHER_CLASSMATELIST, { teacherUserID: teacherUserID }).result.students;
	        context.setClassAllMember(allStudents);
	    }
	    return allStudents;
	}
	exports.getAllStudentsFromCacheContext = getAllStudentsFromCacheContext;
	function getTeacherUserIDAndDisableEditFlag(this_) {
	    var teacherUserID = storageUtil_1.getUserIDFromStorage();
	    var disableEdit = false;
	    if (this_.props.location && this_.props.location.query && this_.props.location.query.otherTeacherUserID) {
	        teacherUserID = this_.props.location.query.otherTeacherUserID;
	        disableEdit = this_.props.location.query.disableEdit;
	    }
	    return {
	        teacherUserID: teacherUserID,
	        disableEdit: disableEdit
	    };
	}
	exports.getTeacherUserIDAndDisableEditFlag = getTeacherUserIDAndDisableEditFlag;
	function getTeacherBasicInfoAsync(teacherUserID, this_, cb) {
	    ajaxUtil_1.getDataByActionIDWithQueryAsync(TeacherPersonalPageActionTypes_2.READ_TEACHER_USERINFO, { teacherUserID: teacherUserID }, function (response) {
	        cb(response.result);
	    });
	}
	exports.getTeacherBasicInfoAsync = getTeacherBasicInfoAsync;
	function getTeacherRankStateAsync(teacherUserID, this_, cb) {
	    ajaxUtil_1.getDataByActionIDWithQueryAsync(TeacherPersonalPageActionTypes_1.GET_TEACHER_RANKSTATE, { teacherUserID: teacherUserID }, function (response) {
	        cb(response.result.rankState);
	    });
	}
	exports.getTeacherRankStateAsync = getTeacherRankStateAsync;


/***/ },

/***/ 505:
/*!***********************************************************!*\
  !*** ./common/Component/OtherTeacherBasicInfoAndRank.tsx ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var TeacherBasicInfo = __webpack_require__(/*! ./TeacherBasicInfo */ 506);
	var TeacherRankState = __webpack_require__(/*! ./TeacherRankState */ 479);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var antd_2 = __webpack_require__(/*! antd */ 386);
	var OtherTeacherBasicInfoAndRank = (function (_super) {
	    __extends(OtherTeacherBasicInfoAndRank, _super);
	    function OtherTeacherBasicInfoAndRank(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    OtherTeacherBasicInfoAndRank.prototype.render = function () {
	        return (React.createElement(antd_1.Row, {className: "display-box"}, React.createElement(antd_2.Col, {span: 17, className: "am-padding-right-sm"}, React.createElement(TeacherBasicInfo, {className: "block-box-shadows", teacherBasicInfo: this.props.teacherBasicInfo, disableEdit: this.props.disableEdit})), React.createElement(antd_2.Col, {span: 7, className: "block-box-shadows "}, this.props.teacherRankState &&
	            React.createElement(TeacherRankState, {classAvgIntegralScore: this.props.teacherRankState.classAvgIntegralScore, gradeIntegralRank: this.props.teacherRankState.gradeIntegralRank}))));
	    };
	    OtherTeacherBasicInfoAndRank.defaultProps = {};
	    return OtherTeacherBasicInfoAndRank;
	}(React.Component));
	module.exports = OtherTeacherBasicInfoAndRank;


/***/ },

/***/ 506:
/*!***********************************************!*\
  !*** ./common/Component/TeacherBasicInfo.tsx ***!
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
	var commonFunc_1 = __webpack_require__(/*! ../commonFunc */ 378);
	var CommonConfig_1 = __webpack_require__(/*! ../Config/CommonConfig */ 369);
	var TeacherBasicInfo = (function (_super) {
	    __extends(TeacherBasicInfo, _super);
	    function TeacherBasicInfo(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TeacherBasicInfo.prototype.render = function () {
	        var dataReady = !!this.props.teacherBasicInfo;
	        var userImmutableInfo = this.props.teacherBasicInfo;
	        return (React.createElement("div", {className: this.props.className}, dataReady &&
	            React.createElement("div", {className: "right-info"}, React.createElement("img", {src: commonFunc_1.isEmptyObject(userImmutableInfo.headImage) ? CommonConfig_1.studentDefaultHeadPic : userImmutableInfo.headImage}), React.createElement("div", {className: "name"}, userImmutableInfo.name, React.createElement("span", {className: "right-credit"}, "班主任")), React.createElement("div", {className: "number-sign"}, React.createElement("span", {className: "am-block"}, "工号：", userImmutableInfo.systemID), React.createElement("div", null, React.createElement("a", null, "班级：", userImmutableInfo.className), false &&
	                React.createElement("span", {className: "pull-right"}, "关注  ", React.createElement("span", {className: "good-friend-count"}, "1"))), React.createElement("span", {className: "am-block am-margin-top-xs"}, "个性签名：", userImmutableInfo.stateMsg)))));
	    };
	    TeacherBasicInfo.defaultProps = {};
	    return TeacherBasicInfo;
	}(React.Component));
	module.exports = TeacherBasicInfo;


/***/ }

});
//# sourceMappingURL=12.12.js.map