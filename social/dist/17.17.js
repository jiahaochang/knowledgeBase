webpackJsonp([17],{

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

/***/ 444:
/*!***************************************!*\
  !*** ./common/Component/CardTabs.tsx ***!
  \***************************************/
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
	var CardTabs = (function (_super) {
	    __extends(CardTabs, _super);
	    function CardTabs(props) {
	        _super.call(this, props);
	        this.state = {
	            activeIndex: 0
	        };
	        this.showActive = this.showActive.bind(this);
	    }
	    CardTabs.prototype.showActive = function (e) {
	        this.setState({ activeIndex: e.currentTarget.tabIndex });
	    };
	    //[{tabName:"",tabContent:子组件},{tabName:"",tabContent:子组件},{tabName:"",tabContent:子组件},]
	    CardTabs.prototype.render = function () {
	        if (commonFunc_1.isEmptyObject(this.props.tabs)) {
	            return React.createElement("div", null, "loading");
	        }
	        var this_ = this;
	        var tabBarClsName = "tab-bar am-cf am-avg-sm-" + this.props.tabs.length;
	        var tabContent = this.props.tabs[this.state.activeIndex].tabContent;
	        return (React.createElement("div", {className: "tab-bar-parent"}, React.createElement("ul", {className: tabBarClsName}, this.props.tabs.map(function (tab, index) {
	            var activeClass = index == this_.state.activeIndex ? "active" : "";
	            return React.createElement("li", {className: activeClass, key: index, onClick: this_.showActive, tabIndex: index}, tab.tabName);
	        })), React.createElement("div", {className: "tab-content am-cf"}, tabContent)));
	    };
	    CardTabs.defaultProps = {
	        className: ""
	    };
	    return CardTabs;
	}(React.Component));
	module.exports = CardTabs;


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

/***/ 669:
/*!***********************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/ReviewWordsManagement/ReviewWordsManagement.tsx ***!
  \***********************************************************************************/
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
	var CardTabs = __webpack_require__(/*! ../../../common/Component/CardTabs */ 444);
	var ReviewWordsManagementTable = __webpack_require__(/*! ./Component/ReviewWordsManagementTable */ 670);
	var ReviewWordsManagement = (function (_super) {
	    __extends(ReviewWordsManagement, _super);
	    function ReviewWordsManagement(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    ReviewWordsManagement.prototype.componentWillMount = function () {
	    };
	    ReviewWordsManagement.prototype.render = function () {
	        var subTab = [
	            { tabName: "评语库", tabContent: React.createElement(ReviewWordsManagementTable, null) },
	        ];
	        return (React.createElement("div", null, React.createElement(PersonInfoAndRank, null), React.createElement("div", {className: "am-margin-top block-box-shadows-0 blueBack"}, React.createElement(CardTabs, {tabs: subTab}))));
	    };
	    ReviewWordsManagement.defaultProps = {};
	    return ReviewWordsManagement;
	}(React.Component));
	module.exports = ReviewWordsManagement;


/***/ },

/***/ 670:
/*!**************************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/ReviewWordsManagement/Component/ReviewWordsManagementTable.tsx ***!
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
	var CreateReviewForm = __webpack_require__(/*! ./CreateReviewForm */ 671);
	var ajaxUtil = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../../actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var Option = antd_1.Select.Option;
	"use strict";
	var tableDataDefault = [];
	var ReviewWordsManagementTable = (function (_super) {
	    __extends(ReviewWordsManagementTable, _super);
	    function ReviewWordsManagementTable(props) {
	        _super.call(this, props);
	        this.showModal = this.showModal.bind(this);
	        this.hideModal = this.hideModal.bind(this);
	        this.handleRefresh = this.handleRefresh.bind(this);
	        this.rootQualityCategoryOptionChanged = this.rootQualityCategoryOptionChanged.bind(this);
	        this.qualityCategoryIdOptionChanged = this.qualityCategoryIdOptionChanged.bind(this);
	        this.state = {
	            data: [],
	            pagination: {},
	            loading: true,
	            editData: {},
	            formType: "",
	            qualityCategoryIdOptions: [],
	            rootQualityCategoryOptions: [],
	            visible: false
	        };
	    }
	    //通过两个select的值，筛选tableData
	    ReviewWordsManagementTable.prototype.tableDataFromDefault = function (rootQualityCategoryOption, qualityCategoryIdOption) {
	        var data = [];
	        for (var _i = 0, tableDataDefault_1 = tableDataDefault; _i < tableDataDefault_1.length; _i++) {
	            var item = tableDataDefault_1[_i];
	            if (item.rootQualityCategoryID == rootQualityCategoryOption && item.qualityCategoryID == qualityCategoryIdOption) {
	                data.push(item);
	            }
	        }
	        return data;
	    };
	    ReviewWordsManagementTable.prototype.setData = function () {
	        var this_ = this;
	        var teacherUserID = storageUtil_1.getUserIDFromStorage();
	        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.READ_TEACHER_EVALUATESTUDENTDICT, { teacherUserID: teacherUserID }, function (response) {
	            //begin
	            var rootQualityCategoriesList = [];
	            var qualityCategoriesMap = {};
	            tableDataDefault = [];
	            for (var _i = 0, _a = response.result.evaluateStudentDict; _i < _a.length; _i++) {
	                var studentDictItem = _a[_i];
	                var rootQualityCategoryMap = {};
	                var rootQualityCategoryID = studentDictItem.rootQualityCategoryID;
	                rootQualityCategoryMap["rootQualityCategoryID"] = rootQualityCategoryID;
	                rootQualityCategoryMap["rootQualityCategoryName"] = studentDictItem.rootQualityCategoryName;
	                if (!commonFunc_1.containsItems(rootQualityCategoriesList, rootQualityCategoryMap, "rootQualityCategoryID")) {
	                    rootQualityCategoriesList.push(rootQualityCategoryMap);
	                }
	                if (!commonFunc_1.isEmptyObject(studentDictItem.evaluationItems)) {
	                    var qualityCategoriesList = commonFunc_1.isEmptyObject(qualityCategoriesMap[rootQualityCategoryID]) ? [] : qualityCategoriesMap[rootQualityCategoryID];
	                    for (var _b = 0, _c = studentDictItem.evaluationItems; _b < _c.length; _b++) {
	                        var evaluationItems = _c[_b];
	                        var qualityCategoryMap = {};
	                        var qualityCategoryID = evaluationItems.qualityCategoryID;
	                        qualityCategoryMap["qualityCategoryID"] = qualityCategoryID;
	                        qualityCategoryMap["qualityCategoryName"] = evaluationItems.qualityCategoryName;
	                        if (!commonFunc_1.containsItems(qualityCategoriesList, qualityCategoryMap, "qualityCategoryID")) {
	                            qualityCategoriesList.push(qualityCategoryMap);
	                        }
	                        qualityCategoriesMap[rootQualityCategoryID] = qualityCategoriesList;
	                        var dataTemp = evaluationItems;
	                        dataTemp["rootQualityCategoryID"] = rootQualityCategoryID;
	                        tableDataDefault.push(dataTemp);
	                    }
	                }
	            }
	            var reviewWordsSelectData = {};
	            reviewWordsSelectData["rootQualityCategories"] = rootQualityCategoriesList;
	            reviewWordsSelectData["qualityCategories"] = qualityCategoriesMap;
	            TeacherPersnalPageContext_1.setReviewWordsSelectData(reviewWordsSelectData);
	            var rootQualityCategoryOptions = rootQualityCategoriesList;
	            var rootQualityCategoryOption = rootQualityCategoriesList[0].rootQualityCategoryID;
	            var qualityCategoryIdOptions = qualityCategoriesMap[rootQualityCategoryOption];
	            var qualityCategoryIdOption = qualityCategoryIdOptions[0].qualityCategoryID;
	            var tableData = this_.tableDataFromDefault(rootQualityCategoryOption, qualityCategoryIdOption);
	            this_.setState({
	                data: tableData,
	                rootQualityCategoryOptions: rootQualityCategoryOptions,
	                rootQualityCategoryOption: rootQualityCategoryOption,
	                qualityCategoryIdOptions: qualityCategoryIdOptions,
	                qualityCategoryIdOption: qualityCategoryIdOption,
	                loading: false,
	            });
	            //end
	        });
	    };
	    ReviewWordsManagementTable.prototype.componentWillMount = function () {
	        this.setData();
	    };
	    ReviewWordsManagementTable.prototype.handleTableChange = function (pagination, filters, sorter) {
	        var pager = this.state.pagination;
	        pager.current = pagination.current;
	        this.setState({
	            pagination: pager
	        });
	    };
	    ReviewWordsManagementTable.prototype.editInfo = function (record) {
	        var rootQualityCategoryID = record.rootQualityCategoryID;
	        var rootQualityCategoryName = "";
	        for (var _i = 0, _a = this.state.rootQualityCategoryOptions; _i < _a.length; _i++) {
	            var item = _a[_i];
	            if (item.rootQualityCategoryID == rootQualityCategoryID) {
	                rootQualityCategoryName = item.rootQualityCategoryName;
	                break;
	            }
	        }
	        record["rootQualityCategoryName"] = rootQualityCategoryName;
	        this.setState({
	            editData: record,
	            formType: "edit",
	            visible: true
	        });
	    };
	    //模态对话框关闭，刷新页面
	    ReviewWordsManagementTable.prototype.handleRefresh = function () {
	        this.setState({
	            visible: false
	        });
	        this.setData();
	    };
	    ReviewWordsManagementTable.prototype.hideModal = function () {
	        this.setState({
	            visible: false
	        });
	    };
	    ReviewWordsManagementTable.prototype.delete = function (record) {
	        var this_ = this;
	        var postData = {
	            evaluationItemID: record.evaluationItemID,
	            teacherUserID: storageUtil_1.getUserIDFromStorage()
	        };
	        ajaxUtil.getDataByActionIDWithQuery(ActionTypes.DELETE_TEACHER_REVIEWWORD, postData, function (response) {
	            antd_1.message.success('删除成功');
	            this_.setData();
	        });
	    };
	    ReviewWordsManagementTable.prototype.showModal = function () {
	        this.setState({
	            visible: true,
	            editData: {}
	        });
	    };
	    //评论大类
	    ReviewWordsManagementTable.prototype.rootQualityCategoryOptionChanged = function (value) {
	        var qualityCategoryIdOptions = TeacherPersnalPageContext_1.getReviewWordsSelectData()["qualityCategories"][value];
	        var qualityCategoryIdOption = qualityCategoryIdOptions[0].qualityCategoryID;
	        var tableData = this.tableDataFromDefault(value, qualityCategoryIdOption);
	        this.setState({
	            rootQualityCategoryOption: value,
	            qualityCategoryIdOptions: qualityCategoryIdOptions,
	            qualityCategoryIdOption: qualityCategoryIdOption,
	            data: tableData
	        });
	    };
	    //评论小类别
	    ReviewWordsManagementTable.prototype.qualityCategoryIdOptionChanged = function (value) {
	        var tableData = this.tableDataFromDefault(this.state.rootQualityCategoryOption, value);
	        this.setState({
	            qualityCategoryIdOption: value,
	            data: tableData
	        });
	    };
	    ReviewWordsManagementTable.prototype.render = function () {
	        var this_ = this;
	        var deleteText = "确定要删除这个任务吗";
	        var columns = [
	            {
	                title: '序号',
	                key: 'sequence',
	                dataIndex: 'sequence',
	            },
	            {
	                title: '评语类型',
	                key: 'qualityCategoryName',
	                dataIndex: 'qualityCategoryName',
	            },
	            {
	                title: '评语内容',
	                key: 'evaluationItemContent',
	                dataIndex: 'evaluationItemContent',
	            },
	            {
	                title: '操作',
	                key: 'operation',
	                render: function (text, record) { return (React.createElement("span", null, React.createElement(antd_1.Button, {className: "btn-blue am-margin-right-xs", size: "small", onClick: this_.editInfo.bind(this_, record)}, "编辑", React.createElement("i", {className: "fa fa-edit"})), React.createElement(antd_1.Popconfirm, {placement: "top", title: deleteText, onConfirm: this_.delete.bind(this_, record)}, React.createElement(antd_1.Button, {className: "btn-blue", size: "small"}, "删除", React.createElement("i", {className: "fa fa-trash"}))))); },
	            }
	        ];
	        var reviewItemsArr = [];
	        var data = this.state.data;
	        for (var i = 0; i < data.length; i++) {
	            var index = i + 1;
	            var item = data[i];
	            item["sequence"] = index;
	            reviewItemsArr.push(item);
	        }
	        return (React.createElement("div", {className: "admin-table", style: { margin: "30px" }}, React.createElement(antd_1.Row, {className: "am-margin-top am-margin-bottom"}, React.createElement(antd_1.Col, {span: 4}, "对应省系统项目："), React.createElement(antd_1.Col, {span: 6, className: "am-margin-right-xl"}, React.createElement(antd_1.Select, {value: this.state.rootQualityCategoryOption, style: { width: "100%" }, onChange: this.rootQualityCategoryOptionChanged}, this.state.rootQualityCategoryOptions.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.rootQualityCategoryID}, option.rootQualityCategoryName);
	        }))), React.createElement(antd_1.Col, {span: 5}, "对应项目分类指标："), React.createElement(antd_1.Col, {span: 6}, React.createElement(antd_1.Select, {value: this.state.qualityCategoryIdOption, style: { width: "100%" }, onChange: this.qualityCategoryIdOptionChanged}, this.state.qualityCategoryIdOptions.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.qualityCategoryID}, option.qualityCategoryName);
	        })))), React.createElement(antd_1.Table, {columns: columns, dataSource: reviewItemsArr, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange, bordered: true}), React.createElement(antd_1.Button, {className: "btn-yellow", icon: "plus", type: "primary", onClick: this.showModal}, "新建"), React.createElement(CreateReviewForm, {handleRefresh: this.handleRefresh, visible: this.state.visible, hideModal: this.hideModal, editData: this.state.editData, formType: this.state.formType})));
	    };
	    ReviewWordsManagementTable.defaultProps = {};
	    return ReviewWordsManagementTable;
	}(React.Component));
	module.exports = ReviewWordsManagementTable;


/***/ },

/***/ 671:
/*!****************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/ReviewWordsManagement/Component/CreateReviewForm.tsx ***!
  \****************************************************************************************/
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
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var TeacherPersnalPageContext_1 = __webpack_require__(/*! ../../TeacherPersnalPageContext */ 497);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var Option = antd_1.Select.Option;
	"use strict";
	var CreateReviewForm = (function (_super) {
	    __extends(CreateReviewForm, _super);
	    function CreateReviewForm(props) {
	        _super.call(this, props);
	        this.handleSubmit = this.handleSubmit.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.rootQualityCategoryOptionChanged = this.rootQualityCategoryOptionChanged.bind(this);
	        this.qualityCategoryIdOptionChanged = this.qualityCategoryIdOptionChanged.bind(this);
	    }
	    CreateReviewForm.prototype.componentWillMount = function () {
	        this.showAddOrEdit(this.props);
	    };
	    CreateReviewForm.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.showAddOrEdit(newProps);
	        }
	    };
	    CreateReviewForm.prototype.showAddOrEdit = function (reviewProps) {
	        var editData = reviewProps.editData;
	        var setFieldsValue = this.props.form.setFieldsValue;
	        var rootQualityCategoryOptions = TeacherPersnalPageContext_1.getReviewWordsSelectData()["rootQualityCategories"];
	        var rootQualityCategoryOption = !commonFunc_1.isEmptyObject(editData) ? editData.rootQualityCategoryID : rootQualityCategoryOptions[0].rootQualityCategoryID;
	        var rootQualityCategoryName = !commonFunc_1.isEmptyObject(editData) ? editData.rootQualityCategoryName : rootQualityCategoryOptions[0].rootQualityCategoryName;
	        var qualityCategoryIdOptions = TeacherPersnalPageContext_1.getReviewWordsSelectData()["qualityCategories"][rootQualityCategoryOption];
	        var qualityCategoryIdOption = !commonFunc_1.isEmptyObject(editData) ? editData.qualityCategoryID : qualityCategoryIdOptions[0].qualityCategoryID;
	        var qualityCategoryName = !commonFunc_1.isEmptyObject(editData) ? editData.qualityCategoryName : qualityCategoryIdOptions[0].qualityCategoryName;
	        this.setState({
	            rootQualityCategoryOption: rootQualityCategoryOption,
	            rootQualityCategoryName: rootQualityCategoryName,
	            rootQualityCategoryOptions: rootQualityCategoryOptions,
	            qualityCategoryIdOption: qualityCategoryIdOption,
	            qualityCategoryName: qualityCategoryName,
	            qualityCategoryIdOptions: qualityCategoryIdOptions,
	        });
	        setFieldsValue({
	            evaluationItemContent: !commonFunc_1.isEmptyObject(editData) ? editData.evaluationItemContent : "",
	        });
	    };
	    //提交
	    CreateReviewForm.prototype.handleSubmit = function (e) {
	        var this_ = this;
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            values["rootQualityCategoryID"] = this_.state.rootQualityCategoryOption;
	            values["rootQualityCategoryName"] = this_.state.rootQualityCategoryName;
	            values["qualityCategoryID"] = this_.state.qualityCategoryIdOption;
	            values["qualityCategoryName"] = this_.state.qualityCategoryName;
	            values["teacherUserID"] = window.sessionStorage.getItem("UserID");
	            values["evaluationItemID"] = !commonFunc_1.isEmptyObject(this_.props.editData) ? this_.props.editData.evaluationItemID : "";
	            ajaxUtil.getDataByActionIDWithQuery(ActionTypes.SAVE_TEACHER_REVIEWWORD, values, function (response) {
	                this_.props.form.resetFields();
	                antd_1.message.success("保存成功");
	                this_.props.handleRefresh();
	            });
	        });
	    };
	    //取消
	    CreateReviewForm.prototype.handleCancel = function (e) {
	        e.preventDefault();
	        this.props.form.resetFields();
	        this.props.hideModal();
	    };
	    //评论大类
	    CreateReviewForm.prototype.rootQualityCategoryOptionChanged = function (value) {
	        var qualityCategoryIdOptions = TeacherPersnalPageContext_1.getReviewWordsSelectData()["qualityCategories"][value.key];
	        var qualityCategoryIdOption = qualityCategoryIdOptions[0].qualityCategoryID;
	        var qualityCategoryName = qualityCategoryIdOptions[0].qualityCategoryName;
	        this.setState({
	            rootQualityCategoryOption: value.key,
	            rootQualityCategoryName: value.label,
	            qualityCategoryIdOptions: qualityCategoryIdOptions,
	            qualityCategoryIdOption: qualityCategoryIdOption,
	            qualityCategoryName: qualityCategoryName
	        });
	    };
	    //评论小类别
	    CreateReviewForm.prototype.qualityCategoryIdOptionChanged = function (value) {
	        this.setState({
	            qualityCategoryIdOption: value.key,
	            qualityCategoryName: value.label
	        });
	    };
	    CreateReviewForm.prototype.render = function () {
	        var this_ = this;
	        var getFieldProps = this.props.form.getFieldProps;
	        var evaluationItemContentProps = getFieldProps('evaluationItemContent', {
	            rules: [
	                { required: true, message: '内容不能为空' }
	            ],
	        });
	        var formItemLayout = {
	            labelCol: { span: 8 },
	            wrapperCol: { span: 16 },
	        };
	        return (React.createElement(antd_1.Modal, {title: this.props.formType == "edit" ? "编辑评论信息" : "添加评论", visible: this.props.visible, onOk: this.handleSubmit, onCancel: this.handleCancel}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 18}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "对应省系统项目："}), React.createElement(antd_1.Select, {value: { key: this.state.rootQualityCategoryOption }, labelInValue: true, style: { width: "100%" }, onChange: this.rootQualityCategoryOptionChanged}, this.state.rootQualityCategoryOptions.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.rootQualityCategoryID}, option.rootQualityCategoryName);
	        }))), React.createElement(FormItem, __assign({}, formItemLayout, {label: "对应项目分类指标："}), React.createElement(antd_1.Select, {value: { key: this.state.qualityCategoryIdOption }, labelInValue: true, style: { width: "100%" }, onChange: this.qualityCategoryIdOptionChanged}, this.state.qualityCategoryIdOptions.map(function (option, index) {
	            return React.createElement(Option, {key: index, value: option.qualityCategoryID}, option.qualityCategoryName);
	        }))), React.createElement(FormItem, __assign({}, formItemLayout, {label: "评语内容"}), React.createElement(antd_1.Input, __assign({type: "textarea", rows: 4, placeholder: "请输入评语内容"}, evaluationItemContentProps))))))));
	    };
	    CreateReviewForm.defaultProps = {};
	    return CreateReviewForm;
	}(React.Component));
	module.exports = createForm()(CreateReviewForm);


/***/ }

});
//# sourceMappingURL=17.17.js.map