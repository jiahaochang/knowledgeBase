webpackJsonp([13],{

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


/***/ },

/***/ 508:
/*!***************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/ClassNotification/ClassNotification.tsx ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var TextareaWithTitle = __webpack_require__(/*! ../../../common/Component/TextareaWithTitle */ 509);
	var TitleOnTextarea = __webpack_require__(/*! ../../../common/Component/TitleOnTextarea */ 503);
	var StudentListWithClickCallback = __webpack_require__(/*! ./Component/StudentListWithClickCallback */ 496);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	"use strict";
	var PersonInfoAndRank = __webpack_require__(/*! ../../../common/Component/PersonInfoAndRank */ 477);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var confirm = antd_1.Modal.confirm;
	var NotificationRecord = __webpack_require__(/*! ./Component/NotificationRecord */ 512);
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	var TeacherPersnalPageUtil_1 = __webpack_require__(/*! ../TeacherPersnalPageUtil */ 504);
	var storageUtil_1 = __webpack_require__(/*! ../../../common/storageUtil */ 383);
	var OtherTeacherBasicInfoAndRank = __webpack_require__(/*! ../../../common/Component/OtherTeacherBasicInfoAndRank */ 505);
	var ClassNotification = (function (_super) {
	    __extends(ClassNotification, _super);
	    function ClassNotification(props) {
	        _super.call(this, props);
	        this.sendClassNotification = this.sendClassNotification.bind(this);
	        this.clickedIcon = this.clickedIcon.bind(this);
	        this.refresh = this.refresh.bind(this);
	        this.state = {
	            notifications: [],
	            students: [],
	            currentStudentID: ""
	        };
	    }
	    ClassNotification.prototype.sendClassNotification = function (words) {
	        var this_ = this;
	        confirm({
	            title: '您是否确认要发布这项内容',
	            content: '发布成功后，你的学生将看到你的发送的通知',
	            onOk: function () {
	                console.log("words");
	                this_.handleSendClassNotification(words);
	                this_.refresh();
	            },
	            onCancel: function () { },
	        });
	    };
	    //发送班级通知调用ajax
	    ClassNotification.prototype.handleSendClassNotification = function (words) {
	        var userID = storageUtil_1.getUserIDFromStorage();
	        if (!commonFunc_1.isEmptyObject(words)) {
	            var postData = {
	                notificationContent: words,
	                fromUserID: userID,
	            };
	            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SET_TEACHER_CLASSNOTIFICATION, postData, function () {
	                antd_1.message.success('发送成功');
	            });
	        }
	    };
	    ClassNotification.prototype.clickedIcon = function (studentID) {
	        var url = "homePage/teacherPersonalPage/evaluateStudent";
	        var routeObj = {
	            pathname: url,
	            query: {
	                studentID: studentID
	            },
	        };
	        this.props.router.push(routeObj);
	    };
	    ClassNotification.prototype.componentWillMount = function () {
	        this.refresh();
	    };
	    ClassNotification.prototype.refresh = function () {
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
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_CLASSNOTIFICATION, { teacherUserID: teacherUserID }, function (response) {
	            this_.setState({
	                notifications: response.result.notifications
	            });
	        });
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.GET_TEACHER_CLASSMATELIST, { teacherUserID: teacherUserID }, function (response) {
	            this_.setState({
	                students: response.result.students,
	                currentStudentID: response.result.students[0].userID
	            });
	        });
	    };
	    ClassNotification.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("div", null, !this.state.disableEdit &&
	            React.createElement(PersonInfoAndRank, null), this.state.disableEdit &&
	            React.createElement(OtherTeacherBasicInfoAndRank, {teacherBasicInfo: this.state.teacherBasicInfo, teacherRankState: this.state.teacherRankState, disableEdit: true}), React.createElement(antd_1.Row, {className: "am-margin-top"}, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, !this.state.disableEdit &&
	            React.createElement("div", {className: "block-box-shadows "}, React.createElement(TextareaWithTitle, {title: "发送班级通知", placeholder: "请老师在这里写下班级通知，点击发送后发送给班级每个同学", submit: this.sendClassNotification, saveBtnText: "发送", resetAfterSave: true})), React.createElement("div", {className: "block-box-shadows am-margin-top am-margin-bottom am-cf"}, React.createElement(TitleOnTextarea, {title: "过往通知"}), this.state.notifications.map(function (item, index) {
	            return React.createElement(NotificationRecord, {record: item, key: index, refresh: this_.refresh, disableEdit: this_.state.disableEdit});
	        }))), React.createElement(antd_1.Col, {span: 7}, React.createElement("div", {className: "block-box-shadows"}, React.createElement(StudentListWithClickCallback, {clickedIcon: this.clickedIcon, students: this.state.students, currentStudentID: this.state.currentStudentID}))))));
	    };
	    ClassNotification.defaultProps = {};
	    return ClassNotification;
	}(React.Component));
	module.exports = react_router_1.withRouter(ClassNotification);


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

/***/ 512:
/*!**************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/ClassNotification/Component/NotificationRecord.tsx ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	/**
	 * 过往通知记录, 显示通知内容，不能编辑内容，但是可以删除
	 */
	var NotificationRecord = (function (_super) {
	    __extends(NotificationRecord, _super);
	    function NotificationRecord(props) {
	        _super.call(this, props);
	        this.state = {
	            hide: false
	        };
	        this.delete = this.delete.bind(this);
	    }
	    NotificationRecord.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    NotificationRecord.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    NotificationRecord.prototype.setStateByProps = function (props) {
	    };
	    NotificationRecord.prototype.delete = function (id) {
	        var this_ = this;
	        var postData = { notificationID: id };
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.DELETE_TEACHER_CLASSNOTIFICATION, postData, function (response) {
	            this_.setState({ hide: true });
	            this_.props.refresh();
	        });
	    };
	    NotificationRecord.prototype.render = function () {
	        var item = this.props.record;
	        var className = this.state.hide ? "past-record-single am-hide" : "past-record-single";
	        var modifiedTime = commonFunc_1.formatDate(item.modifiedTime, "yyyy-MM-dd HH:mm");
	        return (React.createElement("div", {className: className}, !this.props.disableEdit &&
	            React.createElement("div", {className: "am-text-right"}, React.createElement("a", {className: "redLink anticon anticon-cross", onClick: this.delete.bind(this, item.notificationID)}, "删除")), React.createElement("p", null, item.notificationContent), React.createElement("div", {className: "am-text-right am-text-sm", style: { color: "#B5A7A7" }}, modifiedTime)));
	    };
	    return NotificationRecord;
	}(React.Component));
	module.exports = NotificationRecord;


/***/ }

});
//# sourceMappingURL=13.13.js.map