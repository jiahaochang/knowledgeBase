webpackJsonp([14],{

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

/***/ 449:
/*!**********************************************!*\
  !*** ./common/Component/CollapsableCard.tsx ***!
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
	var AbstractCollapsableComponent = __webpack_require__(/*! ./AbstractCollapsableComponent */ 450);
	var AddPropsHOC_1 = __webpack_require__(/*! ./AddPropsHOC */ 451);
	/**
	 * 可收缩组件，
	 *  titleWithClick 表示标题栏，带有收起按钮的
	 *  collapsableElement 表示需要被折叠的组件
	 */
	var CollapsableCard = (function (_super) {
	    __extends(CollapsableCard, _super);
	    function CollapsableCard(props) {
	        _super.call(this, props);
	        this.toggleCollapse = this.toggleCollapse.bind(this);
	    }
	    CollapsableCard.prototype.getCollapsableDiv = function () {
	        return $(this.getDOMNode()).children().last();
	    };
	    CollapsableCard.prototype.toggleCollapse = function (isCollapse) {
	        isCollapse ? this.collapse() : this.expand();
	    };
	    CollapsableCard.prototype.render = function () {
	        return (React.createElement("div", {className: "am-margin-top code-box " + this.props.className, id: this.props.id ? this.props.id : ""}, AddPropsHOC_1.AddPropsHOC(this.props.titleWithClick, { toggleCollapse: this.toggleCollapse }), React.createElement("div", {className: "highlight-wrapper"}, this.props.collapsableElement)));
	    };
	    CollapsableCard.defaultProps = {
	        className: ""
	    };
	    return CollapsableCard;
	}(AbstractCollapsableComponent));
	module.exports = CollapsableCard;


/***/ },

/***/ 450:
/*!***********************************************************!*\
  !*** ./common/Component/AbstractCollapsableComponent.tsx ***!
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
	var AbstractCollapsableComponent = (function (_super) {
	    __extends(AbstractCollapsableComponent, _super);
	    function AbstractCollapsableComponent() {
	        _super.apply(this, arguments);
	    }
	    AbstractCollapsableComponent.prototype.collapse = function () {
	        var collapsableDiv = this.getCollapsableDiv();
	        collapsableDiv.slideUp();
	    };
	    AbstractCollapsableComponent.prototype.expand = function () {
	        var collapsableDiv = this.getCollapsableDiv();
	        collapsableDiv.slideDown();
	    };
	    AbstractCollapsableComponent.prototype.getDOMNode = function () {
	        return this._reactInternalInstance.getHostNode();
	    };
	    return AbstractCollapsableComponent;
	}(React.Component));
	module.exports = AbstractCollapsableComponent;


/***/ },

/***/ 451:
/*!*****************************************!*\
  !*** ./common/Component/AddPropsHOC.ts ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(/*! react */ 93);
	var objectAssign = __webpack_require__(/*! object-assign */ 96);
	exports.AddPropsHOC = function (ComposedComponent, addedProps) {
	    return React.createElement(ComposedComponent.type, objectAssign(addedProps, ComposedComponent.props));
	};


/***/ },

/***/ 454:
/*!************************************************!*\
  !*** ./common/Component/CardHeaderWithAdd.tsx ***!
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
	var AddPropsHOC_1 = __webpack_require__(/*! ./AddPropsHOC */ 451);
	/**
	 *个人主页---添加活动时的header,带有header按钮
	 */
	var CardHeaderWithAdd = (function (_super) {
	    __extends(CardHeaderWithAdd, _super);
	    function CardHeaderWithAdd(props) {
	        _super.call(this, props);
	        this.handleClick = this.handleClick.bind(this);
	        this.addItem = this.addItem.bind(this);
	        this.cancelAdd = this.cancelAdd.bind(this);
	        this.state = {
	            isEditing: false
	        };
	    }
	    CardHeaderWithAdd.prototype.handleClick = function (isCollapsed) {
	        this.props.toggleCollapse(isCollapsed);
	    };
	    CardHeaderWithAdd.prototype.addItem = function () {
	        this.setState({
	            isEditing: true
	        });
	    };
	    //添加页面的取消按钮
	    CardHeaderWithAdd.prototype.cancelAdd = function () {
	        this.setState({
	            isEditing: false
	        });
	    };
	    CardHeaderWithAdd.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("div", {className: "header-with-add " + this.props.className, style: this.props.style}, React.createElement("div", {className: "title"}, this.props.title), !this.props.noAdd &&
	            React.createElement("span", {className: "addtitle", onClick: this.addItem}, React.createElement("i", {className: " fa fa-plus-circle am-padding-right-sm"}), this.props.addtitle), React.createElement("span", {className: "rightText "}, this.props.rightText, this.props.scaleFlag && React.createElement(IconRotate180WithClick, {handleClick: this.handleClick}))), this.state.isEditing &&
	            React.createElement("div", {className: this.props.editClassName}, AddPropsHOC_1.AddPropsHOC(this.props.addComponent, { cancel: this.cancelAdd }))));
	    };
	    CardHeaderWithAdd.defaultProps = {
	        scaleFlag: false,
	        className: "blueBack",
	        editClassName: ""
	    };
	    return CardHeaderWithAdd;
	}(React.Component));
	module.exports = CardHeaderWithAdd;


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

/***/ 514:
/*!*********************************************************************!*\
  !*** ./pages/TeacherPersonalPage/SpecialStudent/SpecialStudent.tsx ***!
  \*********************************************************************/
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
	var StudentListWithClickCallback = __webpack_require__(/*! ../ClassNotification/Component/StudentListWithClickCallback */ 496);
	var StudentListSelectable = __webpack_require__(/*! ./Component/StudentListSelectable */ 515);
	var PersonalBasicInfo = __webpack_require__(/*! common/Component/PersonalBasicInfo */ 441);
	var CurrentSpecialStudentRecord = __webpack_require__(/*! ./Component/CurrentSpecialStudentRecord */ 516);
	var ButtonGroup = antd_1.Button.Group;
	var util = __webpack_require__(/*! ../TeacherPersnalPageUtil */ 504);
	var ajaxUtil = __webpack_require__(/*! common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var commonFunc = __webpack_require__(/*! common/commonFunc */ 378);
	var TeacherPersnalPageUtil_1 = __webpack_require__(/*! ../TeacherPersnalPageUtil */ 504);
	var TeacherPersnalPageUtil_2 = __webpack_require__(/*! ../TeacherPersnalPageUtil */ 504);
	var TeacherPersnalPageUtil_3 = __webpack_require__(/*! ../TeacherPersnalPageUtil */ 504);
	var TeacherBasicInfo = __webpack_require__(/*! ../../../common/Component/TeacherBasicInfo */ 506);
	/**
	 * 特殊学生情况记录
	 *
	 * 右侧栏有添加和删除状态
	 */
	var SpecialStudent = (function (_super) {
	    __extends(SpecialStudent, _super);
	    function SpecialStudent(props) {
	        _super.call(this, props);
	        this.state = {
	            currentStudentID: "",
	            currentStudentListState: "read",
	            showEdit: false,
	            specialStudents: [],
	            normalStudents: []
	        };
	        this.showDeleteSpecialStudent = this.showDeleteSpecialStudent.bind(this);
	        this.showAddSpecialStudent = this.showAddSpecialStudent.bind(this);
	        this.deleteSpecialStudent = this.deleteSpecialStudent.bind(this);
	        this.addSpecialStudent = this.addSpecialStudent.bind(this);
	        this.cancelStudentList = this.cancelStudentList.bind(this);
	        this.clickedIcon = this.clickedIcon.bind(this);
	        this.addSpecialStudentRecord = this.addSpecialStudentRecord.bind(this);
	        this.save = this.save.bind(this);
	        this.cancel = this.cancel.bind(this);
	    }
	    SpecialStudent.prototype.showDeleteSpecialStudent = function () {
	        this.setState({
	            currentStudentListState: "delete"
	        });
	    };
	    SpecialStudent.prototype.showAddSpecialStudent = function () {
	        this.setState({
	            currentStudentListState: "add"
	        });
	    };
	    //移除特殊学生
	    SpecialStudent.prototype.deleteSpecialStudent = function (studentList) {
	        var this_ = this;
	        //调用api 将特殊学生移出特殊组
	        var postData = {
	            specialStudents: studentList
	        };
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.DELETE_TEACHER_SPECIALSTUDENT, postData, function (response) {
	            commonFunc.reallocArray(this_.state.normalStudents, this_.state.specialStudents, studentList);
	            var currentStudentID = "";
	            if (this_.state.specialStudents.length !== 0) {
	                currentStudentID = this_.state.specialStudents[0].userID;
	            }
	            this_.setState({
	                specialStudents: this_.state.specialStudents,
	                normalStudents: this_.state.normalStudents,
	                currentStudentListState: "read",
	                currentStudentID: currentStudentID
	            });
	        });
	    };
	    //添加特殊学生
	    SpecialStudent.prototype.addSpecialStudent = function (studentList) {
	        var this_ = this;
	        //调用api
	        var postData = {
	            specialStudents: studentList
	        };
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.CREATE_TEACHER_SPECIALSTUDENT, postData, function (response) {
	            commonFunc.reallocArray(this_.state.specialStudents, this_.state.normalStudents, studentList);
	            this_.setState({
	                specialStudents: this_.state.specialStudents,
	                normalStudents: this_.state.normalStudents,
	                currentStudentListState: "read",
	                currentStudentID: this_.state.specialStudents[0].userID
	            });
	        });
	    };
	    SpecialStudent.prototype.cancelStudentList = function () {
	        this.setState({
	            currentStudentListState: "read"
	        });
	    };
	    SpecialStudent.prototype.clickedIcon = function (studentID) {
	        this.setState({
	            currentStudentID: studentID
	        });
	    };
	    SpecialStudent.prototype.addSpecialStudentRecord = function () {
	        this.setState({
	            showEdit: true
	        });
	    };
	    SpecialStudent.prototype.save = function (record) {
	        console.log(record);
	        this.setState({
	            showEdit: false
	        });
	    };
	    SpecialStudent.prototype.cancel = function () {
	        this.setState({
	            showEdit: false
	        });
	    };
	    SpecialStudent.prototype.edit = function () {
	        this.setState({
	            showEdit: false
	        });
	    };
	    SpecialStudent.prototype.componentWillMount = function () {
	        var _a = TeacherPersnalPageUtil_1.getTeacherUserIDAndDisableEditFlag(this), teacherUserID = _a.teacherUserID, disableEdit = _a.disableEdit;
	        var allStudents = util.getAllStudentsFromCacheContext(teacherUserID);
	        var this_ = this;
	        this.setState({
	            teacherUserID: teacherUserID,
	            disableEdit: disableEdit
	        });
	        var queryObj = {};
	        queryObj["teacherUserID"] = teacherUserID;
	        TeacherPersnalPageUtil_2.getTeacherBasicInfoAsync(teacherUserID, this, function (teacherUserInfo) {
	            this_.setState({
	                teacherBasicInfo: teacherUserInfo
	            });
	        });
	        TeacherPersnalPageUtil_3.getTeacherRankStateAsync(teacherUserID, this, function (teacherRankState) {
	            this_.setState({
	                teacherRankState: teacherRankState
	            });
	        });
	        ajaxUtil.getDataByActionIDWithQueryAsync(ActionTypes.READ_TEACHER_SPECIALSTUDENT, queryObj, function (response) {
	            var specialStudents = response.result.specialStudents;
	            var normalStudents = this_.getNormalStudents(allStudents, specialStudents);
	            var currentStudentID = specialStudents[0] ? specialStudents[0].userID : "";
	            this_.setState({
	                specialStudents: specialStudents,
	                normalStudents: normalStudents,
	                currentStudentID: currentStudentID
	            });
	        });
	    };
	    SpecialStudent.prototype.getNormalStudents = function (allStudents, specialStudents) {
	        var normalStudents = [];
	        var copyList = allStudents;
	        for (var i = 0; i < copyList.length; i++) {
	            var item = copyList[i];
	            var indexInArray = commonFunc.getIndexInArray(item, specialStudents, ["userID"]);
	            if (indexInArray === -1) {
	                normalStudents.push(item);
	            }
	        }
	        return normalStudents;
	    };
	    SpecialStudent.prototype.render = function () {
	        return (React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, React.createElement("div", {className: "block-box-shadows"}, !this.state.disableEdit &&
	            React.createElement(PersonalBasicInfo, null), this.state.disableEdit &&
	            React.createElement(TeacherBasicInfo, {teacherBasicInfo: this.state.teacherBasicInfo, disableEdit: true})), this.state.currentStudentID && React.createElement(CurrentSpecialStudentRecord, {studentID: this.state.currentStudentID, teacherUserID: this.state.teacherUserID, disableEdit: this.state.disableEdit}), !this.state.currentStudentID &&
	            React.createElement("div", null, "暂无特殊学生")), React.createElement(antd_1.Col, {span: 7}, React.createElement("div", {className: "block-box-shadows am-cf"}, React.createElement(StudentListWithClickCallback, {students: this.state.specialStudents, clickedIcon: this.clickedIcon, currentStudentID: this.state.currentStudentID}), !this.state.currentStudentID &&
	            React.createElement("div", null, "暂无特殊学生"), !this.state.disableEdit &&
	            React.createElement("div", {className: "am-margin-top am-text-center"}, React.createElement(ButtonGroup, null, React.createElement(antd_1.Button, {className: "btn-red", onClick: this.showDeleteSpecialStudent, icon: "minus"}, "移除"), React.createElement(antd_1.Button, {className: "btn-green", onClick: this.showAddSpecialStudent, icon: "plus"}, "添加"))), this.state.currentStudentListState === "delete" &&
	            React.createElement(StudentListSelectable, {studentList: this.state.specialStudents, from: "special", save: this.deleteSpecialStudent, cancel: this.cancelStudentList}), this.state.currentStudentListState === "add" &&
	            React.createElement(StudentListSelectable, {studentList: this.state.normalStudents, from: "normal", save: this.addSpecialStudent, cancel: this.cancelStudentList})))));
	    };
	    SpecialStudent.defaultProps = {};
	    return SpecialStudent;
	}(React.Component));
	module.exports = SpecialStudent;


/***/ },

/***/ 515:
/*!**************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/SpecialStudent/Component/StudentListSelectable.tsx ***!
  \**************************************************************************************/
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
	var ButtonGroup = antd_1.Button.Group;
	/**
	 * 可选的学生列表，点击单个头像，切换选中状态，
	 * 有保存回调 和 取消回调
	 */
	var StudentListSelectable = (function (_super) {
	    __extends(StudentListSelectable, _super);
	    function StudentListSelectable(props) {
	        _super.call(this, props);
	        this.cancel = this.cancel.bind(this);
	        this.save = this.save.bind(this);
	    }
	    StudentListSelectable.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    StudentListSelectable.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    StudentListSelectable.prototype.setStateByProps = function (props) {
	        this.setState({
	            studentList: Immutable.fromJS(props.studentList).toJS()
	        });
	    };
	    StudentListSelectable.prototype.clickedIcon = function (studentID) {
	        var studentList = this.state.studentList;
	        for (var i = 0; i < studentList.length; i++) {
	            if (studentList[i].userID === studentID) {
	                studentList[i].chosen = !studentList[i].chosen;
	                break;
	            }
	        }
	        this.setState({
	            studentList: studentList
	        });
	    };
	    StudentListSelectable.prototype.save = function () {
	        var chosenList = [];
	        var studentList = this.state.studentList;
	        for (var i = 0; i < studentList.length; i++) {
	            if (studentList[i].chosen) {
	                delete studentList[i].chosen;
	                chosenList.push(studentList[i]);
	            }
	        }
	        this.props.save(chosenList);
	    };
	    StudentListSelectable.prototype.cancel = function () {
	        this.props.cancel();
	        this.setState({
	            studentList: this.props.studentList
	        });
	    };
	    StudentListSelectable.prototype.render = function () {
	        var students = this.state.studentList;
	        var this_ = this;
	        var text = this.props.from == "special" ? "请选择要移除的同学" : "请选择要添加的同学";
	        return (React.createElement("div", {className: "am-cf am-margin-top"}, React.createElement("b", {className: "am-block"}, text), React.createElement("div", {className: "am-cf"}, students.map(function (item, index) {
	            var className = "ClassMateEvaluateListActiveNormal";
	            if (item.chosen) {
	                className = "ClassMateEvaluateListActiveSpecial";
	            }
	            return (React.createElement("div", {key: index, className: className, onClick: this_.clickedIcon.bind(this_, item.userID)}, React.createElement("img", {src: item.headImage, width: "60"}), React.createElement("div", {className: "name"}, item.name)));
	        })), React.createElement("div", {className: "am-margin-top am-text-center", style: { clear: "both" }}, React.createElement(ButtonGroup, null, React.createElement(antd_1.Button, {className: "btn-orange", onClick: this.save, icon: "plus"}, "保存"), React.createElement(antd_1.Button, {onClick: this.cancel, icon: "minus"}, "取消")))));
	    };
	    return StudentListSelectable;
	}(React.Component));
	module.exports = StudentListSelectable;


/***/ },

/***/ 516:
/*!********************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/SpecialStudent/Component/CurrentSpecialStudentRecord.tsx ***!
  \********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var CollapsableCard = __webpack_require__(/*! common/Component/CollapsableCard */ 449);
	var CardHeaderWithAdd = __webpack_require__(/*! common/Component/CardHeaderWithAdd */ 454);
	var SpecialStudentRecordSingle = __webpack_require__(/*! ./SpecialStudentRecordSingle */ 517);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	var Immutable = __webpack_require__(/*! immutable */ 363);
	var TeacherPersonalPageConfig_1 = __webpack_require__(/*! common/Config/TeacherPersonalPageConfig */ 518);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	"use strict";
	var CurrentSpecialStudentRecord = (function (_super) {
	    __extends(CurrentSpecialStudentRecord, _super);
	    function CurrentSpecialStudentRecord(props) {
	        _super.call(this, props);
	        this.refresh = this.refresh.bind(this);
	        this.state = { specialStudentRecord: [] };
	    }
	    CurrentSpecialStudentRecord.prototype.componentWillMount = function () {
	        this.refresh(this.props.studentID);
	    };
	    CurrentSpecialStudentRecord.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.refresh(newProps.studentID);
	        }
	    };
	    CurrentSpecialStudentRecord.prototype.refresh = function (studentID) {
	        var this_ = this;
	        var queryObj = {
	            teacherUserID: this.props.teacherUserID,
	            studentUserID: studentID
	        };
	        ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.READ_TEACHER_SPECIALSTUDENT_RECORD, queryObj, function (response) {
	            var specialStudentRecords = response.result;
	            var records = [];
	            if (!commonFunc_1.isEmptyObject(specialStudentRecords)) {
	                for (var i = 0; i < specialStudentRecords.length; i++) {
	                    var specialStudent = specialStudentRecords[i];
	                    var paramMap = {};
	                    paramMap["specialStudentRecordID"] = specialStudent.specialStudentRecordID;
	                    paramMap["teacherUserID"] = specialStudent.teacherUserID;
	                    var record = [];
	                    for (var key in specialStudent) {
	                        if (!commonFunc_1.isEmptyObject(TeacherPersonalPageConfig_1.specialStudentRecordMap[key])) {
	                            var map = Immutable.fromJS(TeacherPersonalPageConfig_1.specialStudentRecordMap[key]).toJS();
	                            map["content"] = specialStudent[key];
	                            record.push(map);
	                        }
	                    }
	                    paramMap["record"] = record;
	                    records.push(paramMap);
	                }
	            }
	            this_.setState({
	                specialStudentRecord: records
	            });
	        });
	    };
	    CurrentSpecialStudentRecord.prototype.getHeaderAddDefaultParam = function () {
	        //点击添加默认传值record
	        var headItem = {};
	        var defaultMap = {
	            specialStudentRecordID: "",
	            recordDate: new Date(),
	            reason: "",
	            analysis: "",
	            talkRecord: "",
	            parentCommunication: "",
	            achievement: "",
	            teacherUserID: ""
	        };
	        headItem["specialStudentRecordID"] = "";
	        headItem["teacherUserID"] = "";
	        var recordHead = [];
	        for (var key in defaultMap) {
	            if (!commonFunc_1.isEmptyObject(TeacherPersonalPageConfig_1.specialStudentRecordMap[key])) {
	                var map = Immutable.fromJS(TeacherPersonalPageConfig_1.specialStudentRecordMap[key]).toJS();
	                map["content"] = defaultMap[key];
	                recordHead.push(map);
	            }
	        }
	        headItem["record"] = recordHead;
	        return headItem;
	    };
	    CurrentSpecialStudentRecord.prototype.render = function () {
	        var this_ = this;
	        var headItem = this.getHeaderAddDefaultParam();
	        var addComponent = React.createElement(SpecialStudentRecordSingle, {componentState: "addNew", from: "headAdd", refresh: this.refresh, record: headItem, studentID: this.props.studentID});
	        //分析记录
	        var specialRecordList = (React.createElement("div", null, this.state.specialStudentRecord.map(function (item, index) {
	            return (React.createElement(SpecialStudentRecordSingle, {record: item, key: index, componentState: "readOnly", refresh: this_.refresh, studentID: this_.props.studentID, disableEdit: this_.props.disableEdit}));
	        })));
	        return (React.createElement("div", {className: "am-margin-top am-margin-bottom"}, React.createElement(CollapsableCard, {className: "blueBack", titleWithClick: React.createElement(CardHeaderWithAdd, {title: "分析记录", addtitle: "添加记录", editClassName: " am-margin-bottom-sm", scaleFlag: true, addComponent: addComponent, noAdd: this.props.disableEdit}), collapsableElement: specialRecordList})));
	    };
	    CurrentSpecialStudentRecord.defaultProps = {};
	    return CurrentSpecialStudentRecord;
	}(React.Component));
	module.exports = CurrentSpecialStudentRecord;


/***/ },

/***/ 517:
/*!*******************************************************************************************!*\
  !*** ./pages/TeacherPersonalPage/SpecialStudent/Component/SpecialStudentRecordSingle.tsx ***!
  \*******************************************************************************************/
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
	"use strict";
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! ../../../../common/commonFunc */ 378);
	var TeacherPersonalPageConfig_1 = __webpack_require__(/*! common/Config/TeacherPersonalPageConfig */ 518);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TeacherPersonalPage/TeacherPersonalPageActionTypes */ 381);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var dateString = "";
	/**
	 * 分析记录
	 * 有3种状态：editOldRecord readOnly addNew
	 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
	 *      只读，底部有按钮 编辑
	 *      添加新记录 内容为空 底部有按钮 保存 取消
	 */
	var SpecialStudentRecordSingle = (function (_super) {
	    __extends(SpecialStudentRecordSingle, _super);
	    function SpecialStudentRecordSingle(props) {
	        _super.call(this, props);
	        this.state = {
	            componentState: this.props.componentState,
	            hide: false,
	        };
	        this.edit = this.edit.bind(this);
	        this.save = this.save.bind(this);
	        this.cancel = this.cancel.bind(this);
	        this.deleteRecord = this.deleteRecord.bind(this);
	    }
	    SpecialStudentRecordSingle.prototype.componentWillMount = function () {
	        if (!commonFunc_1.isEmptyObject(this.props.record)) {
	            this.initForm(this.props.record);
	        }
	    };
	    SpecialStudentRecordSingle.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.setState({
	                componentState: newProps.componentState
	            });
	            if (newProps.componentState == "readOnly") {
	                this.initForm(newProps.record);
	            }
	        }
	    };
	    //表单赋初始值For edit
	    SpecialStudentRecordSingle.prototype.setFormValue = function (record) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        var valueInitMap = {};
	        var recordItem = record.record;
	        for (var i = 0; i < recordItem.length; i++) {
	            var item = recordItem[i];
	            valueInitMap[item.contentTypeID] = item.contentTypeID == TeacherPersonalPageConfig_1.recordDate ? new Date(item.content) : item.content;
	        }
	        setFieldsValue(valueInitMap);
	    };
	    //编辑
	    SpecialStudentRecordSingle.prototype.edit = function () {
	        this.setState({
	            componentState: "editOldRecord"
	        });
	        this.setFormValue(this.props.record);
	    };
	    //保存
	    SpecialStudentRecordSingle.prototype.save = function (e) {
	        var _this = this;
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            values["specialStudentRecordID"] = this_.state.componentState == "editOldRecord" ? _this.props.record.specialStudentRecordID : "";
	            values["teacherUserID"] = storageUtil_1.getUserIDFromStorage(); //this.props.record.teacherUserID
	            values["studentUserID"] = _this.props.studentID;
	            values["content"] = ""; //去掉动态生成form的初始化值
	            var postData = {
	                specialStudentRecord: values
	            };
	            //编辑过往记录  or 添加过往记录
	            ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.SAVE_TEACHER_SPECIALSTUDENT_RECORD, postData, function (response) {
	                if (this_.props.from == "headAdd") {
	                    this_.props.cancel ? this_.props.cancel() : "";
	                }
	                antd_1.message.success("保存成功");
	                this_.props.refresh(this_.props.studentID);
	            });
	        });
	    };
	    //取消
	    SpecialStudentRecordSingle.prototype.cancel = function () {
	        if (this.props.from == "headAdd") {
	            this.props.cancel ? this.props.cancel() : "";
	        }
	        else {
	            this.setState({
	                componentState: "readOnly"
	            });
	        }
	    };
	    //删除
	    SpecialStudentRecordSingle.prototype.deleteRecord = function () {
	        var this_ = this;
	        var postData = {
	            specialStudentRecordID: this.props.record.specialStudentRecordID,
	            studentUserID: this.props.studentID
	        };
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.DELETE_TEACHER_SPECIALSTUDENT_RECORD, postData, function (response) {
	            antd_1.message.success('删除成功');
	            this_.setState({
	                hide: true
	            });
	        });
	    };
	    //表单初始化
	    SpecialStudentRecordSingle.prototype.initForm = function (record) {
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldValue = _a.getFieldValue, setFieldsValue = _a.setFieldsValue;
	        getFieldProps('content', {
	            initialValue: [],
	        });
	        setFieldsValue({
	            content: []
	        });
	        var valueInitMap = {};
	        var recordItem = record.record;
	        for (var i = 0; i < recordItem.length; i++) {
	            var item = recordItem[i];
	            if (commonFunc_1.isEmptyObject(dateString) && item.contentTypeID == TeacherPersonalPageConfig_1.recordDate) {
	                dateString = commonFunc_1.formatDate(item.content, "yyyy-MM-dd");
	            }
	            var itemContent = item.contentTypeID == TeacherPersonalPageConfig_1.recordDate ? new Date(item.content) : item.content;
	            valueInitMap[item.contentTypeID] = itemContent;
	            var content = getFieldValue('content');
	            var map = {};
	            map["id"] = item.contentTypeID;
	            map["name"] = item.contentName;
	            map["value"] = itemContent;
	            content = content.concat(map);
	            setFieldsValue({
	                content: content,
	            });
	        }
	        setFieldsValue(valueInitMap);
	    };
	    SpecialStudentRecordSingle.prototype.render = function () {
	        var this_ = this;
	        var text = '确定要删除该分析记录吗？';
	        var saveBtn = React.createElement(antd_1.Button, {onClick: this.save, className: "btn-blue am-margin-left-sm"}, "保存");
	        var cancelBtn = React.createElement(antd_1.Button, {onClick: this.cancel, className: "am-margin-left-sm"}, "取消");
	        var editBtn = React.createElement(antd_1.Button, {onClick: this.edit, className: "btn-blue am-margin-left-sm"}, "编辑");
	        var deleteBtn = React.createElement(antd_1.Popconfirm, {title: text, onConfirm: this.deleteRecord}, React.createElement("a", {className: "redLink am-margin-left-sm"}, "删除本条记录"));
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldValue = _a.getFieldValue;
	        var formItemLayout = {
	            labelCol: { span: 4 },
	            wrapperCol: { span: 20 },
	        };
	        var formItems = getFieldValue('content').map(function (item) {
	            var filedProp = getFieldProps("" + item.id, {
	                rules: "" + item.id == TeacherPersonalPageConfig_1.recordDate ? [
	                    {
	                        required: true,
	                        message: ("" + item.name) + "不能为空",
	                        type: "date"
	                    }
	                ] : [
	                    {
	                        required: true,
	                        message: ("" + item.name) + "不能为空",
	                    }
	                ]
	            });
	            var formComponent = item.id == TeacherPersonalPageConfig_1.recordDate ? React.createElement(antd_1.DatePicker, __assign({}, filedProp)) : React.createElement(antd_1.Input, __assign({}, filedProp, {type: "textarea"}));
	            var formItem = this_.state.componentState == "readOnly" ? (React.createElement(antd_1.Row, {key: item.id}, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, __assign({}, formItemLayout, {label: item.name + "\uFF1A"}), item.id == TeacherPersonalPageConfig_1.recordDate ? dateString : item.value)))) : (React.createElement(antd_1.Row, {key: item.id}, React.createElement(FormItem, {wrapperCol: { span: 20, offset: 1 }, labelCol: { span: 4 }, label: item.name + "\uFF1A"}, formComponent)));
	            return formItem;
	        });
	        var className = this.state.hide ? "class-activity-form am-hide" : "class-activity-form";
	        return (React.createElement("div", {className: className}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, formItems, React.createElement("div", {className: "am-margin-top-sm am-cf", style: { marginRight: "70px" }}, this.state.componentState === "addNew" &&
	            React.createElement("div", {className: "pull-right"}, saveBtn, cancelBtn), this.state.componentState === "editOldRecord" &&
	            React.createElement("div", null, React.createElement("div", {className: "pull-left"}, saveBtn, cancelBtn), React.createElement("div", {className: "pull-right"}, deleteBtn)), this.state.componentState === "readOnly" && !this.props.disableEdit &&
	            React.createElement("div", {className: "pull-right"}, editBtn)))));
	    };
	    SpecialStudentRecordSingle.defaultProps = {};
	    return SpecialStudentRecordSingle;
	}(React.Component));
	module.exports = createForm()(SpecialStudentRecordSingle);


/***/ },

/***/ 518:
/*!****************************************************!*\
  !*** ./common/Config/TeacherPersonalPageConfig.ts ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	//班主任模块
	exports.moduleIDInfoMap = {
	    classActivity: {
	        url: "homePage/teacherPersonalPage/classActivity",
	        displayName: "班团活动"
	    },
	    studentPerformance: {
	        url: "homePage/teacherPersonalPage/studentPerformance",
	        displayName: "学生表现记录"
	    },
	    classNotification: {
	        url: "homePage/teacherPersonalPage/classNotification",
	        displayName: "班级通知"
	    },
	    specialStudent: {
	        url: "homePage/teacherPersonalPage/specialStudent",
	        displayName: "特殊学生情况"
	    },
	    rankInClass: {
	        url: "homePage/teacherPersonalPage/rankInClass",
	        displayName: "班级积分排名"
	    },
	    evaluateStudent: {
	        url: "homePage/teacherPersonalPage/evaluateStudent",
	        displayName: "评价学生"
	    },
	    reviewWordsManagement: {
	        url: "homePage/teacherPersonalPage/reviewWordsManagement",
	        displayName: "评语管理"
	    },
	};
	//特殊学生情况 --- 分析记录form对应的key- value
	exports.specialStudentRecordMap = {
	    recordDate: {
	        contentTypeID: "recordDate",
	        contentName: "分析时间",
	    },
	    reason: {
	        contentTypeID: "reason",
	        contentName: "情况缘由",
	    },
	    analysis: {
	        contentTypeID: "analysis",
	        contentName: "个体分析",
	    },
	    talkRecord: {
	        contentTypeID: "talkRecord",
	        contentName: "谈话记录",
	    },
	    parentCommunication: {
	        contentTypeID: "parentCommunication",
	        contentName: "家校沟通",
	    },
	    achievement: {
	        contentTypeID: "achievement",
	        contentName: "达成效果",
	    },
	};
	//特殊学生情况 --- 分析记录form  分析时间对应ID
	exports.recordDate = "recordDate";


/***/ }

});
//# sourceMappingURL=14.14.js.map