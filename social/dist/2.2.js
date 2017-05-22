webpackJsonp([2],{

/***/ 438:
/*!*******************************************!*\
  !*** ./pages/HomePage/MyPersonalPage.tsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var StudentRankState = __webpack_require__(/*! common/Component/StudentRankState */ 439);
	var PersonalBasicInfo = __webpack_require__(/*! ../../common/Component/PersonalBasicInfo */ 441);
	var CardTitleWithLine = __webpack_require__(/*! ../../common/Component/CardTitleWithLine */ 442);
	var CardTabs = __webpack_require__(/*! ../../common/Component/CardTabs */ 444);
	var SubjectChoice = __webpack_require__(/*! ./Component/SubjectChoice */ 445);
	var MajorIntended = __webpack_require__(/*! ./Component/MajorIntended */ 447);
	var AssessCenterStatus = __webpack_require__(/*! ./Component/AssessCenterStatus */ 448);
	var CollapsableCard = __webpack_require__(/*! ../../common/Component/CollapsableCard */ 449);
	var PersonalComprehensiveQualityRecord = __webpack_require__(/*! ./Component/PersonalComprehensiveQualityRecord */ 452);
	var PersonalTargetMatch = __webpack_require__(/*! ./Component/PersonalTargetMatch */ 464);
	var PersonalLatestVisitor = __webpack_require__(/*! ./Component/PersonalLatestVisitor */ 465);
	var SubjectInterest = __webpack_require__(/*! ./Component/SubjectInterest */ 467);
	var SubjectAbility = __webpack_require__(/*! ./Component/SubjectAbility */ 468);
	var PersonalTargetSet = __webpack_require__(/*! ./Component/PersonalTargetSet */ 469);
	var PersonalAnalyzeMyself = __webpack_require__(/*! ./Component/PersonalAnalyzeMyself */ 471);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var Scrollspy = __webpack_require__(/*! react-scrollspy */ 472).Scrollspy;
	"use strict";
	var ImpressionPersonal = __webpack_require__(/*! ./Component/ImpressionPersonal */ 473);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! ../../common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! ../../actions/HomePage/HomePageActionTypes */ 380);
	var HomePageConfig_1 = __webpack_require__(/*! ../../common/Config/HomePageConfig */ 446);
	var pageUtil_1 = __webpack_require__(/*! ../../common/pageUtil */ 474);
	/**
	 * 个人首页
	 * 状态：学期，当前选中的模块
	 *  当前选中的模块可能从首页点击过来，从路由传递过来的
	 */
	var MyPersonalPage = (function (_super) {
	    __extends(MyPersonalPage, _super);
	    function MyPersonalPage(props) {
	        _super.call(this, props);
	        this.state = {
	            currentTerm: storageUtil_1.getTermIDFromStorage()
	        };
	        this.goMIAssess = this.goMIAssess.bind(this);
	        this.onTermChange = this.onTermChange.bind(this);
	    }
	    MyPersonalPage.prototype.componentWillMount = function () {
	        var currentTerm = this.state.currentTerm;
	        this.setStateByTermID(currentTerm);
	        var this_ = this;
	    };
	    MyPersonalPage.prototype.setStateByTermID = function (currentTerm) {
	        var this_ = this;
	        //todo 获取学校有的9个模块配置
	        ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.GET_STUDENT_RANKSTATE, { termID: currentTerm }, function (response) {
	            this_.setState({
	                qualityCategories: ['electiveCourse', 'campusActivities', 'offCampusPractice', 'studentOrgan', 'researchLearning', 'serveAsPosition', 'mySpecialty', 'honoraryTitle']
	            });
	        });
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_RANKSTATE, { termID: currentTerm }, function (response) {
	            this_.setState({
	                ranks: response.result
	            });
	        });
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_SUBJECTCHOICESTATE, { termID: currentTerm }, function (response) {
	            this_.setState({
	                subjectsData: response.result
	            });
	        });
	        //测试中心
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_CAREERSTATE, { termID: currentTerm }, function (response) {
	            this_.setState({
	                assessData: response.result
	            });
	        });
	        //自我剖析  analyzeData
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_ANALYZEMYSELF, { termID: currentTerm }, function (response) {
	            this_.setState({
	                analyzeData: response.result
	            });
	        });
	        //目标设定
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_TARGETSTATE, { termID: currentTerm }, function (response) {
	            this_.setState({
	                targetSet: response.result.target
	            });
	        });
	    };
	    MyPersonalPage.prototype.goMIAssess = function () {
	        var url = "/careerExploreAndTargetSet/TestMain";
	        this.props.router.push(url);
	    };
	    MyPersonalPage.prototype.onTermChange = function (termAfterChange) {
	        this.setStateByTermID(termAfterChange);
	        this.setState({
	            currentTerm: termAfterChange
	        });
	    };
	    //左测导航click事件
	    MyPersonalPage.prototype.navigate = function (e) {
	        pageUtil_1.navigate(e);
	    };
	    MyPersonalPage.prototype.render = function () {
	        var currentTerm = this.state.currentTerm;
	        var ranks = this.state.ranks;
	        //7选3tab传值  7选3结果
	        var subjectsData = this.state.subjectsData;
	        var subjectsChoose = subjectsData && subjectsData.subjectChoiceResult.chosenSubjects;
	        var subTab = subjectsData && subjectsChoose && [
	            { tabName: "我的7选3结果", tabContent: React.createElement(SubjectChoice, {subjects: subjectsChoose}) },
	            { tabName: "学科兴趣", tabContent: React.createElement(SubjectInterest, {subjectInterest: subjectsData.subjectInterest}) },
	            { tabName: "学科能力", tabContent: React.createElement(SubjectAbility, {subjectAbility: subjectsData.subjectAbility}) },
	            { tabName: "我的意向专业", tabContent: React.createElement(MajorIntended, {subjectNames: subjectsData.chosenMajors}) },
	        ];
	        //生涯探索与目标设定传值
	        //1.测评中心
	        var assessData = this.state.assessData;
	        var tests = assessData && assessData.assessCenter.assessInfo;
	        var analyzeMyself = this.state.analyzeData;
	        var careerExploreTab = [
	            {
	                tabName: "测评中心",
	                tabContent: React.createElement(AssessCenterStatus, {tests: tests})
	            },
	            {
	                tabName: "自我剖析",
	                tabContent: React.createElement(PersonalAnalyzeMyself, {currentTerm: currentTerm, analyze: analyzeMyself})
	            },
	        ];
	        var targetSetTab = this.state.targetSet ? [
	            {
	                tabName: "目标设定",
	                tabContent: React.createElement(PersonalTargetSet, {currentTerm: currentTerm, targets: this.state.targetSet})
	            },
	            {
	                tabName: "升学目标匹配",
	                tabContent: React.createElement(PersonalTargetMatch, null)
	            },
	        ] : [];
	        //综合素质：学业水平
	        var learnContent = { title: "选修课", starCount: 3, commentFlag: true, commentCount: 15, addFlag: true, addText: "增加社团" };
	        //获取学校配置内容的9项
	        var qualityCategories = this.state.qualityCategories;
	        var scrollItem = ['subjectChoice', 'careerExplore', 'goalSetting'];
	        //'electiveCourse','campusActivities','offCampusPractice','studentOrgan','researchLearning','serveAsPosition','mySpecialty','honoraryTitle'
	        Array.prototype.push.apply(scrollItem, qualityCategories);
	        {
	        }
	        var scrollSpy = !qualityCategories ? (React.createElement(Scrollspy, {items: scrollItem, currentClassName: "active"}, React.createElement("li", null, React.createElement("a", {href: "subjectChoice"}, "我的7选3")), React.createElement("li", null, React.createElement("a", {href: "careerExplore"}, "生涯探索")), React.createElement("li", null, React.createElement("a", {href: "goalSetting"}, "目标设定")))) : (React.createElement(Scrollspy, {items: scrollItem, currentClassName: "active"}, React.createElement("li", null, React.createElement("a", {href: "subjectChoice"}, "我的7选3")), React.createElement("li", null, React.createElement("a", {href: "careerExplore"}, "生涯探索")), React.createElement("li", null, React.createElement("a", {href: "goalSetting"}, "目标设定")), qualityCategories.map(function (item, index) {
	            return React.createElement("li", {key: index}, React.createElement("a", {href: item}, HomePageConfig_1.QualityCategoryIDInfoMap[item].displayName));
	        })));
	        return (React.createElement("div", {className: "main-container am-margin-top"}, React.createElement("div", {className: "col3-withLeftTab-leftTab "}, React.createElement(antd_1.Affix, {offsetTop: 120}, React.createElement("div", {className: "fixed-nav-btnList index-fixed", onClick: this.navigate}, scrollSpy))), React.createElement("div", {className: "col3-withLeftTab-middleContext"}, React.createElement(PersonalBasicInfo, null), React.createElement("div", {className: "padding-0 am-margin-top", id: "subjectChoice"}, React.createElement(CardTabs, {tabs: subTab})), React.createElement("div", {className: "padding-0 am-margin-top", id: "careerExplore"}, React.createElement(CardTabs, {tabs: careerExploreTab})), React.createElement("div", {className: "padding-0 am-margin-top", id: "goalSetting"}, React.createElement(CardTabs, {tabs: targetSetTab})), React.createElement(CollapsableCard, {className: "blueBack am-margin-bottom", titleWithClick: React.createElement(CardTitleWithLine, {title: "学期综合素质记录", rightText: "积分：222"}), collapsableElement: React.createElement(PersonalComprehensiveQualityRecord, null)})), React.createElement("div", {className: "col3-withLeftTab-rightPanel"}, !!ranks &&
	            React.createElement(StudentRankState, {className: "am-margin-bottom", currentTerm: this.state.currentTerm, onTermChange: this.onTermChange, grownScore: ranks.integralScore, classRank: ranks.rankInClass, schoolRank: ranks.rankInSchool}), React.createElement(ImpressionPersonal, null), React.createElement(PersonalLatestVisitor, {style: { marginTop: "25px" }}))));
	    };
	    return MyPersonalPage;
	}(React.Component));
	module.exports = react_router_1.withRouter(MyPersonalPage);


/***/ },

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

/***/ 445:
/*!****************************************************!*\
  !*** ./pages/HomePage/Component/SubjectChoice.tsx ***!
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
	var HomePageConfig_1 = __webpack_require__(/*! ../../../common/Config/HomePageConfig */ 446);
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	"use strict";
	var SubjectChoice = (function (_super) {
	    __extends(SubjectChoice, _super);
	    function SubjectChoice(props) {
	        _super.call(this, props);
	    }
	    SubjectChoice.prototype.render = function () {
	        var chooses = null;
	        var subjects = this.props.subjects;
	        //判断是否已完成选科
	        if (!commonFunc_1.isEmptyObject(subjects) && subjects.length > 0) {
	            subjects = (React.createElement(antd_1.Row, {type: "flex", justify: "center", className: "am-margin-top"}, this.props.subjects.map(function (subject, index) {
	                return React.createElement(antd_1.Col, {span: 8, key: index}, React.createElement("img", {src: HomePageConfig_1.subjectDisplayMap[subject.subjectName]["imgUrl"], width: "60", className: "am-center"}), React.createElement("div", {className: "am-padding-top-xs am-text-center"}, subject.subjectName));
	            })));
	        }
	        else {
	            subjects = (React.createElement("div", {className: "non-choose-subject"}, React.createElement("img", {src: "vendor/images/QRCode.png"}), React.createElement("div", {className: "text"}, "你还未完成7选3，请扫描二维码在手机上完成，才能看到结果并获得积分哦！")));
	        }
	        return (React.createElement("div", null, subjects, React.createElement("div", {className: "eye"}, React.createElement(antd_1.Icon, {type: "eye-o"}), "仅自己可见")));
	    };
	    SubjectChoice.defaultProps = {};
	    return SubjectChoice;
	}(React.Component));
	module.exports = SubjectChoice;


/***/ },

/***/ 446:
/*!*****************************************!*\
  !*** ./common/Config/HomePageConfig.ts ***!
  \*****************************************/
/***/ function(module, exports) {

	"use strict";
	//选科七门
	exports.subjectDisplayMap = {
	    物理: {
	        name: "物理",
	        imgUrl: "vendor/images/subjects/physics.png"
	    },
	    化学: {
	        name: "化学",
	        imgUrl: "vendor/images/subjects/chemistry.png"
	    },
	    生物: {
	        name: "生物",
	        imgUrl: "vendor/images/subjects/biology.png"
	    },
	    政治: {
	        name: "政治",
	        imgUrl: "vendor/images/subjects/politics.png"
	    },
	    历史: {
	        name: "历史",
	        imgUrl: "vendor/images/subjects/history.png"
	    },
	    地理: {
	        name: "地理",
	        imgUrl: "vendor/images/subjects/geography.png"
	    },
	    技术: {
	        name: "技术",
	        imgUrl: "vendor/images/subjects/technology.png"
	    }
	};
	//测评中心
	exports.assessCenterDisplayMap = {
	    holland: {
	        name: "职业兴趣测试",
	        imgUrl: "vendor/images/tests/holland.png"
	    },
	    MBTI: {
	        name: "职业性格测试",
	        imgUrl: "vendor/images/tests/mbti.png"
	    },
	    multipleIntelligence: {
	        name: "多元智能",
	        imgUrl: "vendor/images/tests/multipleIntelligence.png"
	    },
	    values: {
	        name: "价值观",
	        imgUrl: "vendor/images/tests/values.png"
	    },
	};
	//综合素质纪录八项
	exports.comprehensiveQualityDisplayMap = {
	    "electiveCourse": {
	        addTitle: "添加选修课",
	    },
	    "campusActivities": {
	        addTitle: "添加校内活动",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "活动名称",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "fromDate",
	                    name: "活动时间",
	                    type: "date",
	                },
	                {
	                    id: "toDate",
	                    name: "",
	                    type: "date",
	                }
	            ],
	            [
	                {
	                    id: "eventContent",
	                    name: "活动表现",
	                    type: "textarea"
	                }
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    },
	    "offCampusPractice": {
	        addTitle: "添加校外实践",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "活动名称",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "fromDate",
	                    name: "活动时间",
	                    type: "date",
	                },
	                {
	                    id: "toDate",
	                    name: "",
	                    type: "date",
	                }
	            ],
	            [
	                {
	                    id: "eventContent",
	                    name: "活动表现",
	                    type: "textarea"
	                }
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    },
	    "studentOrgan": {
	        addTitle: "添加社团",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "社团名称",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "myRole",
	                    name: "我的角色",
	                    type: "input",
	                }
	            ],
	            [
	                {
	                    id: "eventContent",
	                    name: "我的表现",
	                    type: "textarea"
	                }
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    },
	    "researchLearning": {
	        addTitle: "添加研究性学习",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "课题名称",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "eventContent",
	                    name: "我的表现",
	                    type: "textarea"
	                }
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    },
	    "serveAsPosition": {
	        addTitle: "添加职务",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "职务名称",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "eventContent",
	                    name: "职责描述",
	                    type: "textarea"
	                }
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    },
	    "mySpecialty": {
	        addTitle: "添加特长",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "特长名称",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "eventContent",
	                    name: "特长描述",
	                    type: "textarea"
	                }
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    },
	    "honoraryTitle": {
	        addTitle: "添加荣誉",
	        formItems: [
	            [
	                {
	                    id: "eventHolderName",
	                    name: "荣誉称号",
	                    type: "input"
	                },
	                {
	                    id: "qualityCategoryName",
	                    name: "所属类别",
	                    type: "input"
	                },
	            ],
	            [
	                {
	                    id: "pictures",
	                    name: "相关证明",
	                    type: "uploadImg"
	                }
	            ]
	        ]
	    }
	};
	exports.QualityCategoryIDInfoMap = {
	    'electiveCourse': {
	        displayName: "选修课"
	    },
	    'campusActivities': {
	        displayName: "校内活动"
	    },
	    'offCampusPractice': {
	        displayName: "校外实践"
	    },
	    'studentOrgan': {
	        displayName: "学生社团"
	    },
	    'researchLearning': {
	        displayName: "研究性学习"
	    },
	    'serveAsPosition': {
	        displayName: "担任职务"
	    },
	    'mySpecialty': {
	        displayName: "我的特长"
	    },
	    'honoraryTitle': {
	        displayName: "荣誉称号"
	    }
	};


/***/ },

/***/ 447:
/*!****************************************************!*\
  !*** ./pages/HomePage/Component/MajorIntended.tsx ***!
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
	"use strict";
	var MajorIntended = (function (_super) {
	    __extends(MajorIntended, _super);
	    function MajorIntended(props) {
	        _super.call(this, props);
	    }
	    MajorIntended.prototype.render = function () {
	        return (React.createElement("div", {className: "major-intended"}, React.createElement(antd_1.Row, {className: "am-margin"}, this.props.subjectNames.map(function (item, index) {
	            return React.createElement(antd_1.Col, {span: 8, key: index}, React.createElement("div", {className: "blue-small-block am-margin-right-xs"}), item.majorMLName);
	        }))));
	    };
	    MajorIntended.defaultProps = {};
	    return MajorIntended;
	}(React.Component));
	module.exports = MajorIntended;


/***/ },

/***/ 448:
/*!*********************************************************!*\
  !*** ./pages/HomePage/Component/AssessCenterStatus.tsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var HomePageConfig_1 = __webpack_require__(/*! ../../../common/Config/HomePageConfig */ 446);
	"use strict";
	var AssessCenterStatus = (function (_super) {
	    __extends(AssessCenterStatus, _super);
	    function AssessCenterStatus(props) {
	        _super.call(this, props);
	    }
	    AssessCenterStatus.prototype.render = function () {
	        return (React.createElement(antd_1.Row, {type: "flex", justify: "center", className: "am-margin-top"}, this.props.tests && this.props.tests.map(function (test, index) {
	            var ifActive = test.finished ? "active" : "";
	            var imgURL = HomePageConfig_1.assessCenterDisplayMap[test.testTypeID]["imgUrl"];
	            return (React.createElement(antd_1.Col, {span: 6, key: index}, React.createElement("div", {className: "am-block am-text-center am-text-sm"}, test.testTypeName), React.createElement("div", {className: "img-with-greenActive " + ifActive}, React.createElement("img", {src: imgURL, width: "90"}))));
	        })));
	    };
	    AssessCenterStatus.defaultProps = {};
	    return AssessCenterStatus;
	}(React.Component));
	module.exports = AssessCenterStatus;


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

/***/ 452:
/*!*************************************************************************!*\
  !*** ./pages/HomePage/Component/PersonalComprehensiveQualityRecord.tsx ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var PersonalComprehensiveQualityRecordSingle = __webpack_require__(/*! ./PersonalComprehensiveQualityRecordSingle */ 453);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! ../../../actions/HomePage/HomePageActionTypes */ 380);
	"use strict";
	/**
	 * 个人页面--综合素质纪录的八项
	 *
	 */
	var PersonalComprehensiveQualityRecord = (function (_super) {
	    __extends(PersonalComprehensiveQualityRecord, _super);
	    function PersonalComprehensiveQualityRecord(props) {
	        _super.call(this, props);
	        this.state = {
	            records: []
	        };
	    }
	    PersonalComprehensiveQualityRecord.prototype.componentWillMount = function () {
	        var this_ = this;
	        var queryObj = {};
	        if (!!this.props.targetUserID) {
	            queryObj["targetUserID"] = this.props.targetUserID;
	        }
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_COMPROHENSIVEQUALITYCARDS, queryObj, function (response) {
	            this_.setState({
	                records: response.result.qualityRecords
	            });
	        });
	    };
	    PersonalComprehensiveQualityRecord.prototype.render = function () {
	        var records = this.state.records;
	        var colors = ["blueBack", "greenBack", "purpleBack", "yellowBack", "blueDuckDuckBack", "orangeBack", "greenBlueBack", "redDuckBack"];
	        var this_ = this;
	        return (React.createElement("div", {className: this.props.className, style: this.props.style}, records.map(function (item, index) {
	            return React.createElement(PersonalComprehensiveQualityRecordSingle, {key: index, data: item, color: colors[index], disableEdit: this_.props.disableEdit});
	        })));
	    };
	    PersonalComprehensiveQualityRecord.defaultProps = {
	        className: ""
	    };
	    return PersonalComprehensiveQualityRecord;
	}(React.Component));
	module.exports = PersonalComprehensiveQualityRecord;


/***/ },

/***/ 453:
/*!*******************************************************************************!*\
  !*** ./pages/HomePage/Component/PersonalComprehensiveQualityRecordSingle.tsx ***!
  \*******************************************************************************/
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
	var CardHeaderWithAdd = __webpack_require__(/*! ../../../common/Component/CardHeaderWithAdd */ 454);
	var CollapsableCard = __webpack_require__(/*! ../../../common/Component/CollapsableCard */ 449);
	var CardContentWithClickLikeAndComment = __webpack_require__(/*! ../../../common/Component/CardContentWithClickLikeAndComment */ 455);
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	var ElectiveCourseForm = __webpack_require__(/*! ./ActivityForms/ElectiveCourseForm */ 460);
	var ActivityForm = __webpack_require__(/*! ./ActivityForms/ActivityForm */ 462);
	var HomePageConfig_1 = __webpack_require__(/*! ../../../common/Config/HomePageConfig */ 446);
	"use strict";
	/**
	 * 个人页面---八项的子组件，每项返回的已完成活动list
	 */
	var PersonalComprehensiveQualityRecordSingle = (function (_super) {
	    __extends(PersonalComprehensiveQualityRecordSingle, _super);
	    function PersonalComprehensiveQualityRecordSingle(props) {
	        _super.call(this, props);
	        this.refresh = this.refresh.bind(this);
	        var dataInit = this.props.data.records;
	        this.state = {
	            result: dataInit
	        };
	    }
	    PersonalComprehensiveQualityRecordSingle.prototype.refresh = function () {
	    };
	    PersonalComprehensiveQualityRecordSingle.prototype.render = function () {
	        var this_ = this;
	        var backClassName = this.props.color;
	        var id = this.props.data.eventCategoryType;
	        var title = this.props.data.rootEventCategoryName;
	        var addTitle = HomePageConfig_1.comprehensiveQualityDisplayMap[id]["addTitle"];
	        var hasResult = (!commonFunc_1.isEmptyObject(this.state.result) && this.state.result.length != 0) ? true : false;
	        var recordList = null;
	        var paramMap = {};
	        paramMap["eventCategoryType"] = id;
	        paramMap["rootEventCategoryName"] = title;
	        paramMap["rootEventCategoryID"] = this.props.data.rootEventCategoryID;
	        var component = null;
	        if (hasResult) {
	            recordList = this.props.data.records.map(function (item, index) {
	                var subComponent = id == "electiveCourse" ? React.createElement(ElectiveCourseForm, {paramMap: paramMap, refresh: this_.refresh, record: item, disableEdit: this_.props.disableEdit}) : React.createElement(ActivityForm, {paramMap: paramMap, refresh: this_.refresh, record: item, disableEdit: this_.props.disableEdit});
	                var props = {
	                    likeCount: item.admire.count,
	                    commentCount: item.comments.length,
	                    subComponent: subComponent,
	                    selfLike: item.admire.isAdmired,
	                    comments: item.comments //评论列表
	                };
	                return React.createElement(CardContentWithClickLikeAndComment, __assign({componentState: "readOnly", className: "am-margin-bottom", key: index}, props));
	            });
	        }
	        var addComponentSubComponent = id == "electiveCourse" ? React.createElement(ElectiveCourseForm, {paramMap: paramMap, refresh: this_.refresh, from: "headAdd", disableEdit: this.props.disableEdit}) : React.createElement(ActivityForm, {paramMap: paramMap, from: "headAdd", refresh: this_.refresh, disableEdit: this.props.disableEdit});
	        var addComponent = React.createElement(CardContentWithClickLikeAndComment, {componentState: "addNew", className: "am-margin-bottom", showSocialBar: false, subComponent: addComponentSubComponent});
	        return (React.createElement("div", {className: this.props.className, style: this.props.style}, !hasResult && (React.createElement("div", {className: backClassName + " am-margin-top", id: id}, React.createElement(CardHeaderWithAdd, {title: title, addtitle: addTitle, addComponent: addComponent, noAdd: this.props.disableEdit}))), hasResult && (React.createElement(CollapsableCard, {id: id, className: backClassName, titleWithClick: React.createElement(CardHeaderWithAdd, {title: title, addtitle: addTitle, scaleFlag: true, addComponent: addComponent, editClassName: "am-margin-bottom", noAdd: this.props.disableEdit}), collapsableElement: recordList}))));
	    };
	    PersonalComprehensiveQualityRecordSingle.defaultProps = {
	        className: ""
	    };
	    return PersonalComprehensiveQualityRecordSingle;
	}(React.Component));
	module.exports = PersonalComprehensiveQualityRecordSingle;


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

/***/ 455:
/*!*****************************************************************!*\
  !*** ./common/Component/CardContentWithClickLikeAndComment.tsx ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var CommentList = __webpack_require__(/*! ./CommentList */ 456);
	var AddPropsHOC_1 = __webpack_require__(/*! ./AddPropsHOC */ 451);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	"use strict";
	/**
	 *个人主页---带有评论和点赞所在的颜色框
	 */
	var CardContentWithClickLikeAndComment = (function (_super) {
	    __extends(CardContentWithClickLikeAndComment, _super);
	    function CardContentWithClickLikeAndComment(props) {
	        _super.call(this, props);
	        this.state = {
	            commentFlag: false,
	            commentBoxFlag: this.props.showSocialBar,
	            componentState: this.props.componentState,
	            isHide: false
	        };
	        this.clickLick = this.clickLick.bind(this);
	        this.showComment = this.showComment.bind(this);
	        this.commentSubmit = this.commentSubmit.bind(this);
	        this.commentBoxShowHide = this.commentBoxShowHide.bind(this);
	        this.delete = this.delete.bind(this);
	    }
	    //点击评论展示评论列表
	    CardContentWithClickLikeAndComment.prototype.showComment = function (e) {
	        $(e.currentTarget).toggleClass("active").siblings().removeClass("active");
	        var commentFlag = false;
	        if ($(e.currentTarget).hasClass("active")) {
	            //this.props.comments;
	            commentFlag = true;
	        }
	        this.setState({ commentList: this.props.comments, commentFlag: commentFlag });
	    };
	    CardContentWithClickLikeAndComment.prototype.clickLick = function (e) {
	        $(e.currentTarget).addClass("active").siblings().removeClass("active");
	        this.setState({ commentFlag: false });
	        var likeCount = parseInt($(e.currentTarget).children("span").text());
	        var currLikeCount = $(e.currentTarget).children("i").hasClass("active") ? (likeCount - 1) : (likeCount + 1);
	        $(e.currentTarget).children("span").text(currLikeCount);
	        $(e.currentTarget).children("i").toggleClass("active");
	    };
	    CardContentWithClickLikeAndComment.prototype.commentSubmit = function (commentID) {
	        alert(commentID);
	    };
	    //评论框是否显示
	    CardContentWithClickLikeAndComment.prototype.commentBoxShowHide = function (commentBoxFlag, componentState) {
	        this.setState({ commentBoxFlag: commentBoxFlag, componentState: componentState });
	    };
	    CardContentWithClickLikeAndComment.prototype.delete = function () {
	        this.setState({ isHide: true });
	    };
	    CardContentWithClickLikeAndComment.prototype.render = function () {
	        var likeActive = this.props.selfLike ? "active" : "";
	        var className = this.state.isHide ? "content-with-likeAndcomment am-hide " : "content-with-likeAndcomment ";
	        return (React.createElement("div", {className: className + this.props.className, style: this.props.style}, React.createElement("div", {className: "content"}, AddPropsHOC_1.AddPropsHOC(this.props.subComponent, { commentBoxShowHide: this.commentBoxShowHide, cancel: this.props.cancel, componentState: this.state.componentState, delete: this.delete })), this.state.commentBoxFlag &&
	            React.createElement("div", {className: "am-cf"}, React.createElement(antd_1.Row, {className: "footer-like-comment"}, React.createElement(antd_1.Col, {span: 12, onClick: this.clickLick}, React.createElement("i", {className: "fa fa-thumbs-o-up " + likeActive}), "点赞", React.createElement("span", {className: "am-padding-left-xs"}, this.props.likeCount)), React.createElement(antd_1.Col, {span: 12, onClick: this.showComment}, React.createElement("i", {className: "fa fa-commenting-o"}), "评论", React.createElement("span", {className: "am-padding-left-xs"}, this.props.commentCount))), this.state.commentFlag &&
	                React.createElement(CommentList, {commentSubmit: this.commentSubmit, commentList: this.state.commentList}))));
	    };
	    CardContentWithClickLikeAndComment.defaultProps = {
	        showSocialBar: true,
	        likeCount: 0,
	        commentCount: 0,
	        className: ""
	    };
	    return CardContentWithClickLikeAndComment;
	}(React.Component));
	module.exports = CardContentWithClickLikeAndComment;


/***/ },

/***/ 456:
/*!******************************************!*\
  !*** ./common/Component/CommentList.tsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var CommentSingle = __webpack_require__(/*! ./CommentSingle */ 457);
	var CommentInputBox = __webpack_require__(/*! ./CommentInputBox */ 458);
	"use strict";
	/**
	 *个人主页---评论列表，包含点赞、评论、回复操作
	 */
	var CommentList = (function (_super) {
	    __extends(CommentList, _super);
	    function CommentList(props) {
	        _super.call(this, props);
	        this.state = {
	            parentCommentID: "",
	            commentBoxDefaultShow: false
	        };
	        this.subCommentSubmit = this.subCommentSubmit.bind(this);
	        this.commentBoxShow = this.commentBoxShow.bind(this);
	    }
	    CommentList.prototype.subCommentSubmit = function (commentID, parentCommentID) {
	        this.setState({ parentCommentID: parentCommentID, curCommentID: commentID, commentBoxDefaultShow: false });
	    };
	    CommentList.prototype.commentBoxShow = function () {
	        this.setState({ commentBoxDefaultShow: !this.state.commentBoxDefaultShow });
	    };
	    CommentList.prototype.render = function () {
	        var this_ = this;
	        var icon = React.createElement("i", {className: "fa fa-smile-o", style: { color: "#6db0f2", fontSize: "18px" }});
	        var commentBox = this.state.commentBoxDefaultShow ? React.createElement(CommentInputBox, {type: "comment", commentID: "123", commentSubmit: this.props.commentSubmit}) : React.createElement(antd_1.Input, {onClick: this.commentBoxShow, addonAfter: icon, defaultValue: "说两句吧"});
	        return (React.createElement("div", {className: "am-margin-bottom-sm"}, React.createElement("div", {className: "comments-list"}, React.createElement("ul", null, this.props.commentList.map(function (comment, index) {
	            return (React.createElement("div", {key: index}, React.createElement(CommentSingle, {commentSingle: comment, subCommentSubmit: this_.subCommentSubmit}), this_.state.parentCommentID == comment.commentID &&
	                React.createElement(CommentInputBox, {type: "reply", commentID: this_.state.curCommentID, commentSubmit: this_.props.commentSubmit})));
	        }))), commentBox));
	    };
	    CommentList.defaultProps = {};
	    return CommentList;
	}(React.Component));
	module.exports = CommentList;


/***/ },

/***/ 457:
/*!********************************************!*\
  !*** ./common/Component/CommentSingle.tsx ***!
  \********************************************/
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
	/**
	 *个人主页---评论列表，包含点赞、评论、回复操作
	 */
	var replyText = React.createElement("span", null, "回复");
	var likeText = React.createElement("span", null, "点赞");
	var CommentSingle = (function (_super) {
	    __extends(CommentSingle, _super);
	    function CommentSingle(props) {
	        _super.call(this, props);
	        this.replyPrimary = this.replyPrimary.bind(this);
	        this.replySecondary = this.replySecondary.bind(this);
	        this.clickLike = this.clickLike.bind(this);
	    }
	    //对回复的回复进行回复
	    CommentSingle.prototype.replySecondary = function (userID, commentID, parentCommentID, e) {
	        this.props.subCommentSubmit(commentID, parentCommentID);
	    };
	    //对主回复进行回复
	    CommentSingle.prototype.replyPrimary = function (userID, commentID) {
	        this.props.subCommentSubmit(commentID, commentID);
	    };
	    //点赞
	    CommentSingle.prototype.clickLike = function (userID, e) {
	        var likeCount = parseInt($(e.currentTarget).text());
	        var currLikeCount = $(e.currentTarget).parent().hasClass("active") ? (likeCount - 1) : (likeCount + 1);
	        $(e.currentTarget).text(currLikeCount);
	        $(e.currentTarget).parent().toggleClass("active");
	    };
	    CommentSingle.prototype.render = function () {
	        var this_ = this;
	        var parentCommentID = this.props.commentSingle.commentID;
	        return (React.createElement("li", {className: "comments-item levelOneItem"}, React.createElement("div", {className: "comments-item-bd"}, React.createElement("div", {className: "ui-avatar"}, React.createElement("img", {src: this.props.commentSingle.headImage})), React.createElement("div", {className: "comments-content"}, React.createElement("div", {className: ""}, React.createElement("span", {className: "nickName"}, this.props.commentSingle.name), React.createElement("span", {className: "date"}, this.props.commentSingle.date), React.createElement("span", {className: "replyAndLike"}, React.createElement(antd_1.Tooltip, {placement: "topLeft", title: replyText}, React.createElement("i", {className: " anticon anticon-message", onClick: this.replyPrimary.bind(this, this.props.commentSingle.userID, this.props.commentSingle.commentID)})), React.createElement(antd_1.Tooltip, {placement: "topLeft", title: likeText}, React.createElement("i", {className: this.props.commentSingle.admire.isAdmired ? "fa fa-thumbs-o-up active" : "fa fa-thumbs-o-up", onClick: this.clickLike.bind(this, this.props.commentSingle.commentID)}, this.props.commentSingle.admire.count)))), React.createElement("div", {className: ""}, this.props.commentSingle.commentContent)), React.createElement("div", {className: "mod-comments-sub"}, React.createElement("ul", null, this.props.commentSingle.subComments.map(function (sub, index) {
	            return (React.createElement("li", {className: "comments-item", key: index}, React.createElement("div", {className: "comments-item-bd"}, React.createElement("div", {className: "ui-avatar"}, React.createElement("img", {src: sub.headImage})), React.createElement("div", {className: "comments-content"}, React.createElement("div", {className: ""}, React.createElement("span", {className: "nickName"}, sub.fromUserName), "回复", React.createElement("span", {className: "nickName two"}, sub.toUserName), React.createElement("span", {className: "date"}, sub.date), React.createElement("span", {className: sub.admire.isAdmired ? "replyAndLike active" : "replyAndLike"}, React.createElement(antd_1.Tooltip, {placement: "topLeft", title: replyText}, React.createElement("i", {className: " anticon anticon-message", onClick: this_.replySecondary.bind(this_, sub.userID, sub.commentID, parentCommentID)})), React.createElement(antd_1.Tooltip, {placement: "topLeft", title: likeText}, React.createElement("i", {className: "fa fa-thumbs-o-up", onClick: this_.clickLike.bind(this_, sub.commentID)}, sub.admire.count)))), React.createElement("div", {className: ""}, sub.commentContent)))));
	        }))))));
	    };
	    CommentSingle.defaultProps = {};
	    return CommentSingle;
	}(React.Component));
	module.exports = CommentSingle;


/***/ },

/***/ 458:
/*!**********************************************!*\
  !*** ./common/Component/CommentInputBox.tsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var QQFace = __webpack_require__(/*! ./QQFace */ 459);
	"use strict";
	var CommentInputBox = (function (_super) {
	    __extends(CommentInputBox, _super);
	    function CommentInputBox(props) {
	        _super.call(this, props);
	        this.state = { QQFaceFlag: false };
	        this.handleClick = this.handleClick.bind(this);
	        this.QQFaceSingleSubmit = this.QQFaceSingleSubmit.bind(this);
	        this.showQQFace = this.showQQFace.bind(this);
	    }
	    CommentInputBox.prototype.handleClick = function (e) {
	        this.props.commentSubmit(this.props.commentID);
	    };
	    //回调，选择的表情显示在inputContent
	    CommentInputBox.prototype.QQFaceSingleSubmit = function (path) {
	        var img = '<img src="' + path + '"/>';
	        var html = $(".input-box").html() + img;
	        $(".input-box").html(html);
	    };
	    //点击表情ICON，显示表情包
	    CommentInputBox.prototype.showQQFace = function () {
	        var flag = this.state.QQFaceFlag ? false : true;
	        this.setState({ QQFaceFlag: flag });
	    };
	    CommentInputBox.prototype.render = function () {
	        var this_ = this;
	        var buttonName = this.props.type == "comment" ? "评论" : "回复";
	        return (React.createElement("div", {className: "comments-area " + this.props.className, style: this.props.style}, React.createElement("div", {className: "input-box", contentEditable: "true"}), React.createElement("div", {className: "am-margin-top-xs"}, React.createElement("i", {className: "fa fa-smile-o", onClick: this.showQQFace}), React.createElement(antd_1.Button, {type: "primary", className: "pull-right", onClick: this.handleClick}, buttonName)), this.state.QQFaceFlag && React.createElement(QQFace, {QQFaceSingleSubmit: this.QQFaceSingleSubmit})));
	    };
	    CommentInputBox.defaultProps = {
	        className: ""
	    };
	    return CommentInputBox;
	}(React.Component));
	module.exports = CommentInputBox;


/***/ },

/***/ 459:
/*!*************************************!*\
  !*** ./common/Component/QQFace.tsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var GlobalContext_1 = __webpack_require__(/*! ../GlobalContext */ 377);
	var commonFunc_1 = __webpack_require__(/*! ../commonFunc */ 378);
	"use strict";
	/**
	 * qq表情包
	 */
	var QQFace = (function (_super) {
	    __extends(QQFace, _super);
	    function QQFace(props) {
	        _super.call(this, props);
	        this.QQFaceShow = this.QQFaceShow.bind(this);
	    }
	    QQFace.prototype.QQFaceShow = function (path, e) {
	        this.props.QQFaceSingleSubmit(path);
	    };
	    QQFace.prototype.componentWillMount = function () {
	        if (commonFunc_1.isEmptyObject(GlobalContext_1.getQQFace())) {
	            var QQFace = [];
	            var path = "vendor/images/qqface/";
	            for (var i = 1; i <= 75; i++) {
	                var map = {};
	                map["em"] = "em_" + i;
	                map["path"] = path + i + ".gif";
	                QQFace.push(map);
	            }
	            GlobalContext_1.setQQFace(commonFunc_1.changeArrayForNewGroup(QQFace, 15));
	        }
	    };
	    QQFace.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("div", {className: "QQFace"}, React.createElement("table", {className: ""}, React.createElement("tbody", null, GlobalContext_1.getQQFace().map(function (group, index) {
	            return (React.createElement("tr", {key: index}, group.map(function (face, index) {
	                return React.createElement("td", {key: index}, React.createElement("img", {src: face.path, "data-em": face.em, onClick: this_.QQFaceShow.bind(this_, face.path)}));
	            })));
	        })))));
	    };
	    QQFace.defaultProps = {
	        className: ""
	    };
	    return QQFace;
	}(React.Component));
	module.exports = QQFace;


/***/ },

/***/ 460:
/*!***********************************************************************!*\
  !*** ./pages/HomePage/Component/ActivityForms/ElectiveCourseForm.tsx ***!
  \***********************************************************************/
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
	var ChooseElectiveCourseModal = __webpack_require__(/*! ./ChooseElectiveCourseModal */ 461);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! ../../../../common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! ../../../../actions/HomePage/HomePageActionTypes */ 380);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	var GET_COURSE = null;
	"use strict";
	/**
	 * 选修课
	 * 有3种状态：editOldRecord readOnly addNew
	 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
	 *      只读，底部有按钮 编辑
	 *      添加新记录 内容为空 底部有按钮 保存 取消
	 */
	var ElectiveCourseForm = (function (_super) {
	    __extends(ElectiveCourseForm, _super);
	    function ElectiveCourseForm(props) {
	        _super.call(this, props);
	        this.state = {
	            hide: false,
	        };
	        this.edit = this.edit.bind(this);
	        this.save = this.save.bind(this);
	        this.cancel = this.cancel.bind(this);
	        this.deleteRecord = this.deleteRecord.bind(this);
	        this.chooseCourseName = this.chooseCourseName.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	        this.handleOk = this.handleOk.bind(this);
	    }
	    //编辑
	    ElectiveCourseForm.prototype.edit = function () {
	        this.props.commentBoxShowHide(false, "editOldRecord");
	        this.initForm(this.props.record);
	    };
	    //保存
	    ElectiveCourseForm.prototype.save = function (e) {
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            console.log(values);
	            if (this_.props.from == "headAdd") {
	                this_.props.cancel ? this_.props.cancel() : "";
	            }
	            this_.props.refresh();
	        });
	    };
	    //取消
	    ElectiveCourseForm.prototype.cancel = function () {
	        if (this.props.from == "headAdd") {
	            this.props.cancel ? this.props.cancel() : "";
	        }
	        else {
	            this.props.commentBoxShowHide(true, "readOnly");
	        }
	    };
	    //删除
	    ElectiveCourseForm.prototype.deleteRecord = function () {
	        antd_1.message.success('删除成功');
	        this.props.delete();
	    };
	    //表单初始化
	    ElectiveCourseForm.prototype.initForm = function (record) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        setFieldsValue({
	            eventHolderName: record.eventHolderName,
	            eventCategoryName: record.eventCategoryName,
	            eventContent: record.eventContent,
	            courseCredit: record.courseCredit.toString(),
	            examScore: record.examScore.toString()
	        });
	    };
	    ElectiveCourseForm.prototype.chooseCourseName = function () {
	        GET_COURSE = ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.GET_ELECTIVECOURSE_CATEGORY, this.props.paramMap, null).result;
	        var map = { activityCategoryID: "other", activityCategoryName: "其他" };
	        GET_COURSE.activityCategories.push(map);
	        this.setState({
	            visible: true,
	        });
	    };
	    ElectiveCourseForm.prototype.handleOk = function () {
	        this.setState({
	            visible: false,
	        });
	    };
	    ElectiveCourseForm.prototype.handleCancel = function () {
	        console.log('点击了取消');
	        this.setState({
	            visible: false,
	        });
	    };
	    ElectiveCourseForm.prototype.render = function () {
	        var text = '确定要删除该班团活动吗？';
	        var saveBtn = React.createElement(antd_1.Button, {onClick: this.save, className: "btn-blue am-margin-left-sm"}, "保存");
	        var cancelBtn = React.createElement(antd_1.Button, {onClick: this.cancel, className: "am-margin-left-sm"}, "取消");
	        var editBtn = React.createElement(antd_1.Button, {onClick: this.edit, className: "btn-blue am-margin-left-sm"}, "编辑");
	        var deleteBtn = React.createElement(antd_1.Popconfirm, {title: text, onConfirm: this.deleteRecord}, React.createElement("a", {className: "redLink am-margin-left-sm"}, "删除本条记录"));
	        var getFieldProps = this.props.form.getFieldProps;
	        var eventHolderNameProps = getFieldProps("eventHolderName", {
	            rules: [
	                {
	                    required: true,
	                    message: "名称不能为空"
	                }
	            ]
	        });
	        var eventCategoryNameProps = getFieldProps("eventCategoryName", {
	            rules: [
	                {
	                    required: true,
	                    message: "类别不能为空"
	                }
	            ]
	        });
	        var eventContentProps = getFieldProps("eventContent", {
	            rules: [
	                {
	                    required: true,
	                    message: "表现不能为空"
	                }
	            ]
	        });
	        var examScoreProps = getFieldProps("examScore", {
	            rules: [
	                {
	                    required: true,
	                    message: "成绩不能为空"
	                }
	            ]
	        });
	        var courseCreditProps = getFieldProps("courseCredit", {
	            rules: [
	                {
	                    required: true,
	                    message: "学分不能为空"
	                }
	            ]
	        });
	        var formItemLayout = {
	            labelCol: { span: 10 },
	            wrapperCol: { span: 12 },
	        };
	        var formItemLayout2 = {
	            labelCol: { span: 5 },
	            wrapperCol: { span: 19 },
	        };
	        var defaultClassName = "class-activity-form comprehensive-form ";
	        var className = this.state.hide ? (defaultClassName + "am-hide ") : defaultClassName;
	        return (React.createElement("div", {className: className}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, React.createElement(antd_1.Row, {className: "am-margin-top-sm"}, React.createElement(antd_1.Col, {span: 12}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "课程名称："}), this.props.componentState === "readOnly" &&
	            this.props.record.eventHolderName, this.props.componentState !== "readOnly" &&
	            React.createElement(antd_1.Input, __assign({}, eventHolderNameProps, {onClick: this.chooseCourseName})))), React.createElement(antd_1.Col, {span: 12}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "所属类别："}), this.props.componentState === "readOnly" &&
	            this.props.record.qualityCategoryName, this.props.componentState !== "readOnly" &&
	            React.createElement(antd_1.Input, __assign({}, eventCategoryNameProps))))), this.props.componentState === "readOnly" &&
	            React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, __assign({}, formItemLayout2, {label: "课程表现："}), this.props.record.eventContent))), this.props.componentState !== "readOnly" &&
	            React.createElement(antd_1.Row, null, React.createElement(FormItem, {wrapperCol: { span: 20, offset: 1 }, labelCol: { span: 5 }, label: "课程表现："}, React.createElement(antd_1.Input, __assign({}, eventContentProps, {type: "textarea", rows: 4})))), React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 12}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "我的成绩："}), this.props.componentState === "readOnly" &&
	            this.props.record.examScore, this.props.componentState !== "readOnly" &&
	            React.createElement(antd_1.Input, __assign({}, examScoreProps)))), React.createElement(antd_1.Col, {span: 12}, React.createElement(FormItem, __assign({}, formItemLayout, {label: "课程学分："}), this.props.componentState === "readOnly" &&
	            this.props.record.courseCredit, this.props.componentState !== "readOnly" &&
	            React.createElement(antd_1.Input, __assign({}, courseCreditProps))))), React.createElement("div", {className: " am-cf am-margin-top-sm"}, this.props.componentState === "addNew" &&
	            React.createElement("div", {className: "delete-line"}, React.createElement("div", {className: "pull-right"}, saveBtn, cancelBtn)), this.props.componentState === "editOldRecord" &&
	            React.createElement("div", {className: "delete-line"}, React.createElement("div", {className: "pull-left"}, saveBtn, cancelBtn), React.createElement("div", {className: "pull-right"}, deleteBtn)), this.props.componentState === "readOnly" && !this.props.disableEdit &&
	            React.createElement("div", {className: "pull-right"}, editBtn))), React.createElement(antd_1.Modal, {title: "选择课程名称", visible: this.state.visible, onOk: this.handleOk, onCancel: this.handleCancel}, React.createElement(ChooseElectiveCourseModal, {record: GET_COURSE}))));
	    };
	    ElectiveCourseForm.defaultProps = {};
	    return ElectiveCourseForm;
	}(React.Component));
	module.exports = createForm()(ElectiveCourseForm);


/***/ },

/***/ 461:
/*!******************************************************************************!*\
  !*** ./pages/HomePage/Component/ActivityForms/ChooseElectiveCourseModal.tsx ***!
  \******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var InputGroup = antd_1.Input.Group;
	var RadioGroup = antd_1.Radio.Group;
	"use strict";
	var ChooseElectiveCourseModal = (function (_super) {
	    __extends(ChooseElectiveCourseModal, _super);
	    function ChooseElectiveCourseModal(props) {
	        _super.call(this, props);
	        var id = this.props.record.activityCategories[0].activityCategoryID;
	        this.state = {
	            levelOneChooseID: this.props.record.activityCategories[0].activityCategoryID,
	            levelTwoItem: this.props.record.activityCategoryMap[id][0]
	        };
	        this.chooseLevelOneID = this.chooseLevelOneID.bind(this);
	        this.chooseLevelTwoID = this.chooseLevelTwoID.bind(this);
	    }
	    ChooseElectiveCourseModal.prototype.chooseLevelOneID = function (e) {
	        var item = this.props.record.activityCategoryMap[e.currentTarget.id];
	        this.setState({ levelOneChooseID: e.currentTarget.id, levelTwoItem: item });
	    };
	    ChooseElectiveCourseModal.prototype.chooseLevelTwoID = function (item, e) {
	        this.setState({ levelTwoItem: item });
	    };
	    ChooseElectiveCourseModal.prototype.render = function () {
	        var this_ = this;
	        var activityCategories = this.props.record.activityCategories;
	        var activityCategoryMap = this.props.record.activityCategoryMap[this.state.levelOneChooseID];
	        return (React.createElement("div", null, React.createElement("p", null, "请选择课程类别"), React.createElement("div", {className: "school-condition-options choose-elective-course-padding"}, activityCategories.map(function (item, index) {
	            var className = this_.state.levelOneChooseID == item.activityCategoryID ? "active" : "";
	            return React.createElement("a", {className: className, key: index, id: item.activityCategoryID, onClick: this_.chooseLevelOneID}, item.activityCategoryName);
	        })), this.state.levelOneChooseID != "other" &&
	            React.createElement("div", null, React.createElement("div", {className: "school-condition-options choose-elective-course-padding"}, activityCategoryMap.map(function (item, index) {
	                var className = this_.state.levelTwoItem.eventHolderID == item.eventHolderID ? "active" : "";
	                return React.createElement("a", {className: className, key: index, id: item.eventHolderID, onClick: this_.chooseLevelTwoID.bind(this_, item)}, item.eventHolderName);
	            })), React.createElement("div", {className: "elective-course-modal-text"}, React.createElement("span", {className: "am-padding-right"}, "所属类别：", this.state.levelTwoItem.qualityCategoryName), React.createElement("span", null, "课程学分：", this.state.levelTwoItem.integralScore))), this.state.levelOneChooseID == "other" &&
	            React.createElement("div", {style: { marginTop: "20px" }}, React.createElement(InputGroup, {size: "large"}, React.createElement(antd_1.Col, {span: 4}, React.createElement(antd_1.Input, {defaultValue: "0571"})), React.createElement(antd_1.Col, {span: 8}, React.createElement(antd_1.Input, {defaultValue: "26888888"}))))));
	    };
	    ChooseElectiveCourseModal.defaultProps = {};
	    return ChooseElectiveCourseModal;
	}(React.Component));
	module.exports = ChooseElectiveCourseModal;


/***/ },

/***/ 462:
/*!*****************************************************************!*\
  !*** ./pages/HomePage/Component/ActivityForms/ActivityForm.tsx ***!
  \*****************************************************************/
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
	var HomePageConfig_1 = __webpack_require__(/*! ../../../../common/Config/HomePageConfig */ 446);
	var ImageUploadList = __webpack_require__(/*! ../../../../common/Component/ImageUploadList */ 463);
	var createForm = antd_1.Form.create;
	var FormItem = antd_1.Form.Item;
	"use strict";
	/**
	 * 综合素质纪录---除选修课外的七项form
	 * 有3种状态：editOldRecord readOnly addNew
	 *      编辑以往记录，显示已有内容，可编辑，底部有按钮 保存，取消，删除
	 *      只读，底部有按钮 编辑
	 *      添加新记录 内容为空 底部有按钮 保存 取消
	 */
	var ActivityForm = (function (_super) {
	    __extends(ActivityForm, _super);
	    function ActivityForm(props) {
	        _super.call(this, props);
	        this.state = {
	            hide: false,
	        };
	        this.edit = this.edit.bind(this);
	        this.save = this.save.bind(this);
	        this.cancel = this.cancel.bind(this);
	        this.deleteRecord = this.deleteRecord.bind(this);
	    }
	    //表单赋初始值For edit
	    ActivityForm.prototype.setFormValue = function (record) {
	        var setFieldsValue = this.props.form.setFieldsValue;
	        var valueInitMap = {};
	        var paramMap = this.props.paramMap;
	        var eventCategoryType = paramMap["eventCategoryType"];
	        var recordItem = HomePageConfig_1.comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
	        for (var _i = 0, recordItem_1 = recordItem; _i < recordItem_1.length; _i++) {
	            var items = recordItem_1[_i];
	            for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
	                var item = items_1[_a];
	                valueInitMap[item.id] = record[item.id];
	            }
	        }
	        setFieldsValue(valueInitMap);
	    };
	    //编辑
	    ActivityForm.prototype.edit = function () {
	        this.props.commentBoxShowHide(false, "editOldRecord");
	        this.setFormValue(this.props.record);
	    };
	    //保存
	    ActivityForm.prototype.save = function (e) {
	        var this_ = this;
	        e.preventDefault();
	        this.props.form.validateFields(function (errors, values) {
	            if (!!errors) {
	                console.log('Errors in form!!!');
	                return;
	            }
	            console.log(values);
	            if (this_.props.from == "headAdd") {
	                this_.props.cancel ? this_.props.cancel() : "";
	            }
	            this_.props.refresh();
	        });
	    };
	    //取消
	    ActivityForm.prototype.cancel = function () {
	        if (this.props.from == "headAdd") {
	            this.props.cancel ? this.props.cancel() : "";
	        }
	        else {
	            this.props.commentBoxShowHide(true, "readOnly");
	        }
	    };
	    //删除
	    ActivityForm.prototype.deleteRecord = function () {
	        antd_1.message.success('删除成功');
	        this.props.delete();
	        /* this.setState({
	             hide: true
	         })*/
	    };
	    ActivityForm.prototype.componentWillMount = function () {
	        if (!commonFunc_1.isEmptyObject(this.props.record)) {
	            this.initForm(this.props.record);
	        }
	    };
	    //表单初始化
	    ActivityForm.prototype.initForm = function (record) {
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldValue = _a.getFieldValue, setFieldsValue = _a.setFieldsValue;
	        getFieldProps('content', {
	            initialValue: [],
	        });
	        var valueInitMap = {};
	        var paramMap = this.props.paramMap;
	        var eventCategoryType = paramMap["eventCategoryType"];
	        var recordItem = HomePageConfig_1.comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
	        for (var _i = 0, recordItem_2 = recordItem; _i < recordItem_2.length; _i++) {
	            var items = recordItem_2[_i];
	            for (var _b = 0, items_2 = items; _b < items_2.length; _b++) {
	                var item = items_2[_b];
	                valueInitMap[item.id] = record[item.id];
	                var content = getFieldValue('content');
	                var map = {};
	                map["id"] = item.id;
	                map["name"] = item.name;
	                map["value"] = item.type == "date" ? new Date(Date.parse(record[item.id].replace(/-/g, "/"))) : record[item.id];
	                map["type"] = item.type;
	                content = content.concat(map);
	                setFieldsValue({
	                    content: content,
	                });
	            }
	        }
	        setFieldsValue(valueInitMap);
	    };
	    ActivityForm.prototype.fieldsValueItem = function () {
	        var this_ = this;
	        var paramMap = this.props.paramMap;
	        var eventCategoryType = paramMap["eventCategoryType"];
	        var recordItem = HomePageConfig_1.comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
	        var fieldsValueMap = {};
	        for (var _i = 0, recordItem_3 = recordItem; _i < recordItem_3.length; _i++) {
	            var items = recordItem_3[_i];
	            for (var _a = 0, items_3 = items; _a < items_3.length; _a++) {
	                var item = items_3[_a];
	                var value = commonFunc_1.isEmptyObject(this_.props.record) ? null : this_.props.record[item.id];
	                fieldsValueMap[item.id] = value;
	            }
	        }
	        return fieldsValueMap;
	    };
	    ActivityForm.prototype.render = function () {
	        var this_ = this;
	        var record = this.props.record;
	        var text = '确定要删除该条记录吗？';
	        var saveBtn = React.createElement(antd_1.Button, {onClick: this.save, className: "btn-blue am-margin-left-sm"}, "保存");
	        var cancelBtn = React.createElement(antd_1.Button, {onClick: this.cancel, className: "am-margin-left-sm"}, "取消");
	        var editBtn = React.createElement(antd_1.Button, {onClick: this.edit, className: "btn-blue am-margin-left-sm"}, "编辑");
	        var deleteBtn = React.createElement(antd_1.Popconfirm, {title: text, onConfirm: this.deleteRecord}, React.createElement("a", {className: "redLink am-margin-left-sm"}, "删除本条记录"));
	        var _a = this.props.form, getFieldProps = _a.getFieldProps, getFieldValue = _a.getFieldValue;
	        var formItemLayout = this.props.componentState === "readOnly" ? {
	            labelCol: { span: 8 },
	            wrapperCol: { span: 16 },
	        } : {
	            labelCol: { span: 10 },
	            wrapperCol: { span: 14 },
	        };
	        var textareaFormItemLayout = {
	            labelCol: { span: 4 },
	            wrapperCol: { span: 20 },
	        };
	        var dateFormItemLayout = {
	            labelCol: { span: 11 },
	            wrapperCol: { span: 12 },
	        };
	        var dateIndex = true;
	        var paramMap = this.props.paramMap;
	        var eventCategoryType = paramMap["eventCategoryType"];
	        var recordItem = HomePageConfig_1.comprehensiveQualityDisplayMap[eventCategoryType]["formItems"];
	        //begin
	        var values = this_.fieldsValueItem();
	        var formItems = recordItem.map(function (items, index) {
	            return (React.createElement(antd_1.Row, {key: index}, items.map(function (item, index) {
	                var value = values[item.id];
	                var filedProp = getFieldProps("" + item.id, {
	                    rules: "" + item.type == "date" ? [
	                        {
	                            required: true,
	                            message: ("" + item.name) + "不能为空",
	                            type: "date"
	                        }
	                    ] : [
	                        {
	                            required: item.type == "uploadImg" ? false : true,
	                            message: ("" + item.name) + "不能为空",
	                        }
	                    ]
	                });
	                var formItem = null;
	                if (item.type == "input") {
	                    formItem = (React.createElement(antd_1.Col, {span: 12, key: item.id}, React.createElement(FormItem, __assign({}, formItemLayout, {label: item.name + "\uFF1A"}), this_.props.componentState === "readOnly" &&
	                        React.createElement("div", null, value), this_.props.componentState !== "readOnly" &&
	                        React.createElement(antd_1.Input, __assign({}, filedProp)))));
	                }
	                else if (item.type == "date") {
	                    if (dateIndex) {
	                        formItem = this_.props.componentState === "readOnly" ? (React.createElement(antd_1.Col, {span: 12, key: item.id}, React.createElement(FormItem, {wrapperCol: { span: 10 }, labelCol: { span: 8 }, label: item.name + "\uFF1A"}, React.createElement("span", null, value), React.createElement(antd_1.Col, {span: 1, className: "pull-right"}, React.createElement("p", {className: "ant-form-split"}, "-"))))) : (React.createElement(antd_1.Col, {span: 12, key: item.id}, React.createElement(FormItem, __assign({}, formItemLayout, {label: item.name + "\uFF1A"}), this_.props.componentState !== "readOnly" &&
	                            React.createElement(antd_1.DatePicker, __assign({}, filedProp)), React.createElement(antd_1.Col, {span: 1, className: "pull-right", style: { marginRight: "-12px" }}, React.createElement("p", {className: "ant-form-split"}, "-")))));
	                        dateIndex = false;
	                    }
	                    else {
	                        formItem = this_.props.componentState === "readOnly" ? (React.createElement(antd_1.Col, {span: 6, key: item.id, style: { marginLeft: "-50px" }}, React.createElement(FormItem, __assign({}, dateFormItemLayout, {wrapperCol: { span: 18 }}), React.createElement("div", null, value)))) : (React.createElement(antd_1.Col, {span: 8, key: item.id, style: { marginLeft: "20px" }}, React.createElement(FormItem, __assign({}, dateFormItemLayout, {wrapperCol: { span: 20 }}), React.createElement(antd_1.DatePicker, __assign({}, filedProp)))));
	                    }
	                }
	                else if (item.type == "textarea") {
	                    formItem = this_.props.componentState == "readOnly" ? (React.createElement(antd_1.Col, {span: 24, key: item.id}, React.createElement(FormItem, __assign({}, textareaFormItemLayout, {label: item.name + "\uFF1A"}), React.createElement("div", null, value)))) : (React.createElement(antd_1.Row, {key: item.id}, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, {wrapperCol: { span: 19 }, labelCol: { span: 5 }, label: item.name + "\uFF1A"}, React.createElement(antd_1.Input, __assign({}, filedProp, {type: "textarea", rows: 4}))))));
	                }
	                else if (item.type == "uploadImg") {
	                    formItem = this_.props.componentState == "readOnly" ? (React.createElement(antd_1.Row, {key: item.id}, React.createElement(antd_1.Col, {span: 24}, React.createElement(FormItem, __assign({}, textareaFormItemLayout, {label: item.name + "\uFF1A"}), React.createElement(antd_1.Row, {style: { marginTop: "-20px" }}, !commonFunc_1.isEmptyObject(value) &&
	                        value.map(function (item, index) {
	                            return React.createElement(antd_1.Col, {span: 8, key: index}, React.createElement("img", {src: item.pictureUrl, style: { width: "90%" }}));
	                        })))))) : (React.createElement(antd_1.Row, {key: item.id}, React.createElement(FormItem, {wrapperCol: { span: 19 }, labelCol: { span: 5 }, label: item.name + "\uFF1A"}, React.createElement(ImageUploadList, {imgURL: value}))));
	                }
	                return formItem;
	            })));
	        });
	        //end
	        var defaultClassName = "class-activity-form comprehensive-form ";
	        var className = this.state.hide ? (defaultClassName + "am-hide ") : defaultClassName;
	        return (React.createElement("div", {className: className}, React.createElement(antd_1.Form, {horizontal: true, form: this.props.form}, formItems, React.createElement("div", {className: " am-cf am-margin-top-sm"}, this.props.componentState === "addNew" &&
	            React.createElement("div", {className: "delete-line"}, React.createElement("div", {className: "pull-right"}, saveBtn, cancelBtn)), this.props.componentState === "editOldRecord" &&
	            React.createElement("div", {className: "delete-line"}, React.createElement("div", {className: "pull-left"}, saveBtn, cancelBtn), React.createElement("div", {className: "pull-right"}, deleteBtn)), this.props.componentState === "readOnly" && !this.props.disableEdit &&
	            React.createElement("div", {className: "pull-right"}, editBtn)))));
	    };
	    ActivityForm.defaultProps = {};
	    return ActivityForm;
	}(React.Component));
	module.exports = createForm()(ActivityForm);


/***/ },

/***/ 463:
/*!**********************************************!*\
  !*** ./common/Component/ImageUploadList.tsx ***!
  \**********************************************/
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
	var commonFunc_1 = __webpack_require__(/*! ../commonFunc */ 378);
	"use strict";
	/**
	 * 图片上传插件
	 */
	var ImageUploadList = (function (_super) {
	    __extends(ImageUploadList, _super);
	    function ImageUploadList(props) {
	        _super.call(this, props);
	        this.state = {
	            previewVisible: false,
	            previewImage: '',
	            fileList: this.changeImgURLToFieldList()
	        };
	        this.handleCancel = this.handleCancel.bind(this);
	        this.handleChange = this.handleChange.bind(this);
	    }
	    ImageUploadList.prototype.handleCancel = function () {
	        this.setState({
	            previewVisible: false,
	        });
	    };
	    ImageUploadList.prototype.handleChange = function (info) {
	        var fileList = info.fileList;
	        // 1. 上传列表数量的限制
	        //    只显示最近上传的一个，旧的会被新的顶掉
	        // fileList = fileList.slice(-2);
	        // 2. 读取远程路径并显示链接
	        fileList = fileList.map(function (file) {
	            if (file.response) {
	                // 组件会将 file.url 作为链接进行展示
	                file.url = file.response.url;
	            }
	            return file;
	        });
	        // 3. 按照服务器返回信息筛选成功上传的文件
	        fileList = fileList.filter(function (file) {
	            if (file.response) {
	                return file.response.status === 'success';
	            }
	            return true;
	        });
	        this.setState({ fileList: fileList });
	    };
	    ImageUploadList.prototype.changeImgURLToFieldList = function () {
	        var imgURL = this.props.imgURL;
	        var defaultFileList = [];
	        if (!commonFunc_1.isEmptyObject(imgURL)) {
	            for (var i = 0; i < imgURL.length; i++) {
	                var map = {};
	                map["uid"] = i;
	                map["name"] = "img" + i;
	                map["url"] = imgURL[i].pictureUrl;
	                map["thumbUrl"] = imgURL[i].pictureUrl;
	                defaultFileList.push(map);
	            }
	        }
	        return defaultFileList;
	    };
	    ImageUploadList.prototype.render = function () {
	        var _this = this;
	        var props = {
	            action: '/Nicezhuanye/admin/Upload/uploadFile',
	            onPreview: function (file) {
	                _this.setState({
	                    previewImage: file.url,
	                    previewVisible: true,
	                });
	            },
	            onChange: this.handleChange,
	        };
	        return (React.createElement("div", {className: "am-cf"}, React.createElement(antd_1.Upload, __assign({}, props, {listType: "picture-card", fileList: this.state.fileList}), React.createElement(antd_1.Icon, {type: "plus"}), React.createElement("div", {className: "ant-upload-text"}, "上传照片")), React.createElement(antd_1.Modal, {visible: this.state.previewVisible, footer: null, onCancel: this.handleCancel}, React.createElement("img", {alt: "example", src: this.state.previewImage}))));
	    };
	    ImageUploadList.defaultProps = {};
	    return ImageUploadList;
	}(React.Component));
	module.exports = ImageUploadList;


/***/ },

/***/ 464:
/*!**********************************************************!*\
  !*** ./pages/HomePage/Component/PersonalTargetMatch.tsx ***!
  \**********************************************************/
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
	var PersonalTargetMatch = (function (_super) {
	    __extends(PersonalTargetMatch, _super);
	    function PersonalTargetMatch(props) {
	        _super.call(this, props);
	    }
	    PersonalTargetMatch.prototype.render = function () {
	        return (React.createElement("div", {className: " " + this.props.className, style: this.props.style}, React.createElement("div", {className: "target-match-single am-cf"}, React.createElement("span", {className: "header-left"}, React.createElement("i", {className: "fa fa-anchor"}), "请输入你的总分年级排名："), React.createElement("span", {className: "header-right"}, React.createElement(antd_1.Input, {style: {}}), React.createElement(antd_1.Button, {type: "primary"}, "确定"))), React.createElement("div", {className: "target-match-single am-cf"}, React.createElement("span", {className: "header-left"}, React.createElement("i", {className: "fa fa-university"}), "与我成绩匹配的大学有：")), React.createElement(antd_1.Row, {className: "am-margin-bottom", style: { padding: "0px 20px" }}, React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "清华大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "清华大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "复旦大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "南京大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "哈尔滨工业大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "清华大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "复旦大学"), React.createElement(antd_1.Col, {span: 8}, React.createElement("div", {className: "orange-small-block am-margin-right-xs"}), "南京大学"))));
	    };
	    PersonalTargetMatch.defaultProps = {
	        className: ""
	    };
	    return PersonalTargetMatch;
	}(React.Component));
	module.exports = PersonalTargetMatch;


/***/ },

/***/ 465:
/*!************************************************************!*\
  !*** ./pages/HomePage/Component/PersonalLatestVisitor.tsx ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var HomePageActionTypes_1 = __webpack_require__(/*! ../../../actions/HomePage/HomePageActionTypes */ 380);
	var Visitors = __webpack_require__(/*! ./Visitors */ 466);
	var storageUtil_1 = __webpack_require__(/*! ../../../common/storageUtil */ 383);
	var PersonalLatestVisitor = (function (_super) {
	    __extends(PersonalLatestVisitor, _super);
	    function PersonalLatestVisitor(props) {
	        _super.call(this, props);
	        this.state = {
	            visitors: []
	        };
	    }
	    PersonalLatestVisitor.prototype.componentDidMount = function () {
	    };
	    PersonalLatestVisitor.prototype.componentWillMount = function () {
	        var this_ = this;
	        var targetUserID = !!this.props.targetUserID ? this.props.targetUserID : storageUtil_1.getUserIDFromStorage();
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(HomePageActionTypes_1.GET_STUDENT_LATESTVISITOR, { targetUserID: targetUserID }, function (response) {
	            this_.setState({
	                visitors: response.result.latestVisitors
	            });
	        });
	    };
	    PersonalLatestVisitor.prototype.render = function () {
	        var visitors = this.state.visitors;
	        return (React.createElement("div", {className: this.props.className, style: this.props.style}, React.createElement("div", {style: { marginBottom: "25px" }}, React.createElement("b", null, "最近来访")), React.createElement(Visitors, {visitors: visitors})));
	    };
	    PersonalLatestVisitor.defaultProps = {
	        className: ""
	    };
	    return PersonalLatestVisitor;
	}(React.Component));
	module.exports = PersonalLatestVisitor;


/***/ },

/***/ 466:
/*!***********************************************!*\
  !*** ./pages/HomePage/Component/Visitors.tsx ***!
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
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var routeUtil_1 = __webpack_require__(/*! ../../../common/routeUtil */ 432);
	var ajaxUtil_1 = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var CommonActionTypes_1 = __webpack_require__(/*! ../../../actions/CommonAction/CommonActionTypes */ 399);
	var Visitors = (function (_super) {
	    __extends(Visitors, _super);
	    function Visitors(props) {
	        _super.call(this, props);
	    }
	    Visitors.prototype.goToOtherPersonalPage = function (otherUserID) {
	        //跳转到其他页面前，添加访问记录，获取此用户的regionID 和 schoolID,存储到context
	        ajaxUtil_1.getDataByActionIDWithQuery(CommonActionTypes_1.ADD_COMMON_VISITRECORD, { targetUserID: otherUserID });
	        routeUtil_1.goToOtherPersonalPage(otherUserID, this);
	    };
	    Visitors.prototype.render = function () {
	        var this_ = this;
	        return (React.createElement("ul", {className: "latest-visitor-ul"}, this.props.visitors.map(function (item, index) { return (React.createElement("li", {key: item.userID, onClick: this_.goToOtherPersonalPage.bind(this_, item.userID)}, React.createElement("img", {src: item.headImage}), React.createElement("span", {className: "am-padding-right-sm"}, item.name), item.className)); })));
	    };
	    Visitors.defaultProps = {
	        visitors: []
	    };
	    return Visitors;
	}(React.Component));
	module.exports = react_router_1.withRouter(Visitors);


/***/ },

/***/ 467:
/*!******************************************************!*\
  !*** ./pages/HomePage/Component/SubjectInterest.tsx ***!
  \******************************************************/
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
	 * 学科兴趣排名
	 */
	var SubjectInterest = (function (_super) {
	    __extends(SubjectInterest, _super);
	    function SubjectInterest(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    //数组按照rank正序排序
	    SubjectInterest.prototype.sortArrayRank = function (array) {
	        for (var i = 1; i < array.length; i++) {
	            var temp = array[i];
	            var j;
	            for (j = i - 1; j >= 0; j--) {
	                if (array[j].rank > temp.rank) {
	                    array[j + 1] = array[j];
	                }
	                else {
	                    break;
	                }
	            }
	            array[j + 1] = temp;
	        }
	        return array;
	    };
	    SubjectInterest.prototype.render = function () {
	        var ranks = this.sortArrayRank(this.props.subjectInterest);
	        //七科排序，黄色圆柱形所占height百分比
	        var heights = [100, 80, 70, 50, 30, 20, 10];
	        return (React.createElement("ul", {className: "subject-interest-rank am-avg-sm-7"}, ranks.map(function (item, index) {
	            var height = { height: heights[index] + "%" };
	            return (React.createElement("li", {key: index}, React.createElement("div", {className: "rankName"}, item.rank), React.createElement("div", {className: "cylinder-color"}, React.createElement("div", {className: "rank-height-cylinder", style: height})), React.createElement("div", {className: "subject-name"}, item.subjectName)));
	        })));
	    };
	    SubjectInterest.defaultProps = {};
	    return SubjectInterest;
	}(React.Component));
	module.exports = SubjectInterest;


/***/ },

/***/ 468:
/*!*****************************************************!*\
  !*** ./pages/HomePage/Component/SubjectAbility.tsx ***!
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
	/**
	 * 学科能力排名
	 */
	var SubjectAbility = (function (_super) {
	    __extends(SubjectAbility, _super);
	    function SubjectAbility(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    //数组按照rank正序排序
	    SubjectAbility.prototype.sortArrayRank = function (array) {
	        for (var i = 1; i < array.length; i++) {
	            var temp = array[i];
	            var j;
	            for (j = i - 1; j >= 0; j--) {
	                if (array[j].rank > temp.rank) {
	                    array[j + 1] = array[j];
	                }
	                else {
	                    break;
	                }
	            }
	            array[j + 1] = temp;
	        }
	        return array;
	    };
	    //percent format
	    SubjectAbility.prototype.percentFormat = function (num) {
	        var map = { top: "0%", show: false };
	        var st = num.toFixed(2);
	        if (st <= 0.20) {
	            st = parseFloat(st) * 100;
	            st = st.toFixed(0);
	            map["top"] = st + "%";
	            map["show"] = true;
	        }
	        else {
	            st = parseFloat(st) * 100;
	            map["top"] = st + "%";
	            map["show"] = false;
	        }
	        return map;
	    };
	    SubjectAbility.prototype.render = function () {
	        var this_ = this;
	        var ranks = this.sortArrayRank(this.props.subjectAbility);
	        return (React.createElement("ul", {className: "subject-ability-rank am-avg-sm-7"}, ranks.map(function (item, index) {
	            var topFormat = this_.percentFormat(item.percent);
	            var top = { top: topFormat.top };
	            var topNum = topFormat.show ? topFormat.top : "";
	            return (React.createElement("li", {key: index}, React.createElement("div", {className: "rankName"}, item.rank), React.createElement("div", {className: "cylinder-color"}, React.createElement("div", {className: "rank-height-cylinder", style: top}, topNum)), React.createElement("div", {className: "subject-name"}, item.subjectName)));
	        })));
	    };
	    SubjectAbility.defaultProps = {};
	    return SubjectAbility;
	}(React.Component));
	module.exports = SubjectAbility;


/***/ },

/***/ 469:
/*!********************************************************!*\
  !*** ./pages/HomePage/Component/PersonalTargetSet.tsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var PersonalTargetSetSingle = __webpack_require__(/*! ./PersonalTargetSetSingle */ 470);
	"use strict";
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/HomePage/HomePageActionTypes */ 380);
	var PersonalTargetSet = (function (_super) {
	    __extends(PersonalTargetSet, _super);
	    function PersonalTargetSet(props) {
	        _super.call(this, props);
	        this.state = {};
	        this.textareaChange = this.textareaChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    PersonalTargetSet.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    PersonalTargetSet.prototype.setStateByProps = function (props) {
	        this.setState({
	            schoolTargetContent: props.targets.schoolTargetContent ? props.targets.schoolTargetContent : "",
	            qualityTargetContent: props.targets.qualityTargetContent ? props.targets.qualityTargetContent : "",
	            btnShow: (commonFunc_1.isEmptyObject(props.targets.schoolTargetContent) || commonFunc_1.isEmptyObject(props.targets.qualityTargetContent)) ? true : false,
	            currentTerm: props.currentTerm
	        });
	    };
	    PersonalTargetSet.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    PersonalTargetSet.prototype.textareaChange = function (words, type) {
	        var map = type == "schoolTargetContent" ? {
	            schoolTargetContent: words
	        } : {
	            qualityTargetContent: words
	        };
	        this.setState(map);
	    };
	    PersonalTargetSet.prototype.handleSubmit = function () {
	        var this_ = this;
	        if (commonFunc_1.isEmptyObject(this.state.qualityTargetContent) || commonFunc_1.isEmptyObject(this.state.schoolTargetContent)) {
	            antd_1.message.error("请填写完再提交");
	        }
	        else {
	            var postData = {
	                termID: this.state.currentTerm,
	                schoolTargetContent: this.state.schoolTargetContent,
	                qualityTargetContent: this.state.qualityTargetContent
	            };
	            ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.SET_STUDENT_TARGETSTATE, postData, function () {
	                this_.setState({
	                    btnShow: false
	                });
	                antd_1.message.success('保存成功');
	            });
	        }
	    };
	    PersonalTargetSet.prototype.render = function () {
	        var btnShow = this.state.btnShow;
	        return (React.createElement("div", {className: "target-set"}, React.createElement(PersonalTargetSetSingle, {termID: this.props.currentTerm, iconName: "university", title: "我的大学升学目标", type: "schoolTargetContent", content: this.state.schoolTargetContent, textareaChange: this.textareaChange, disabled: !btnShow}), React.createElement(PersonalTargetSetSingle, {termID: this.props.currentTerm, iconName: "flag-checkered", title: "本学期我的综合素质培养目标", type: "qualityTargetContent", content: this.state.qualityTargetContent, textareaChange: this.textareaChange, disabled: !btnShow}), btnShow &&
	            React.createElement("div", {className: "am-text-center"}, React.createElement(antd_1.Button, {className: "btn-yellow", size: "large", onClick: this.handleSubmit}, "提交")), React.createElement("div", {className: "eye"}, React.createElement(antd_1.Icon, {type: "eye-o"}), "仅自己可见")));
	    };
	    PersonalTargetSet.defaultProps = {};
	    return PersonalTargetSet;
	}(React.Component));
	module.exports = PersonalTargetSet;


/***/ },

/***/ 470:
/*!**************************************************************!*\
  !*** ./pages/HomePage/Component/PersonalTargetSetSingle.tsx ***!
  \**************************************************************/
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
	var PersonalTargetSetSingle = (function (_super) {
	    __extends(PersonalTargetSetSingle, _super);
	    function PersonalTargetSetSingle(props) {
	        _super.call(this, props);
	        this.state = {
	            inputValue: this.props.content
	        };
	    }
	    PersonalTargetSetSingle.prototype.handleSubmit = function (e) {
	        this.props.textareaChange(e.target.value, this.props.type);
	    };
	    PersonalTargetSetSingle.prototype.render = function () {
	        return (React.createElement("div", {className: "targetSetSingle " + this.props.className, style: this.props.style}, React.createElement("i", {className: "fa fa-" + this.props.iconName}), React.createElement("div", {className: "title"}, this.props.title, "：", React.createElement("span", {className: "integral-tip"}, this.props.integralTip)), React.createElement(antd_1.Input, {type: "textarea", rows: 4, disabled: this.props.disabled, placeholder: "太懒了，居然还没填写……", value: this.props.content, onChange: this.handleSubmit.bind(this)})));
	    };
	    PersonalTargetSetSingle.defaultProps = {
	        className: "",
	        disabled: false
	    };
	    return PersonalTargetSetSingle;
	}(React.Component));
	module.exports = PersonalTargetSetSingle;


/***/ },

/***/ 471:
/*!************************************************************!*\
  !*** ./pages/HomePage/Component/PersonalAnalyzeMyself.tsx ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var PersonalTargetSetSingle = __webpack_require__(/*! ./PersonalTargetSetSingle */ 470);
	"use strict";
	var commonFunc_1 = __webpack_require__(/*! ../../../common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/HomePage/HomePageActionTypes */ 380);
	var PersonalAnalyzeMyself = (function (_super) {
	    __extends(PersonalAnalyzeMyself, _super);
	    function PersonalAnalyzeMyself(props) {
	        _super.call(this, props);
	        this.state = {};
	        this.textareaChange = this.textareaChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	    }
	    PersonalAnalyzeMyself.prototype.componentWillMount = function () {
	        this.setStateByProps(this.props);
	    };
	    PersonalAnalyzeMyself.prototype.setStateByProps = function (props) {
	        this.setState({
	            selfCharacterContent: props.analyze.selfCharacterContent ? props.analyze.selfCharacterContent : "",
	            selfAdvantageContent: props.analyze.selfAdvantageContent ? props.analyze.selfAdvantageContent : "",
	            btnShow: (commonFunc_1.isEmptyObject(props.analyze.selfCharacterContent) || commonFunc_1.isEmptyObject(props.analyze.selfAdvantageContent)) ? true : false,
	            currentTerm: props.currentTerm
	        });
	    };
	    PersonalAnalyzeMyself.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
	            this.setStateByProps(newProps);
	        }
	    };
	    PersonalAnalyzeMyself.prototype.textareaChange = function (words, type) {
	        var map = type == "selfCharacterContent" ? {
	            selfCharacterContent: words
	        } : {
	            selfAdvantageContent: words
	        };
	        this.setState(map);
	    };
	    PersonalAnalyzeMyself.prototype.handleSubmit = function () {
	        var this_ = this;
	        if (commonFunc_1.isEmptyObject(this.state.selfAdvantageContent) || commonFunc_1.isEmptyObject(this.state.selfCharacterContent)) {
	            antd_1.message.error("请填写完再提交");
	        }
	        else {
	            var postData = {
	                termID: this.state.currentTerm,
	                selfCharacterContent: this.state.selfCharacterContent,
	                selfAdvantageContent: this.state.selfAdvantageContent
	            };
	            ajaxUtil_1.getDataByActionIDWithQuery(actionTypes.SET_STUDENT_ANALYZEMYSELF, postData, function () {
	                this_.setState({
	                    btnShow: false
	                });
	                antd_1.message.success('保存成功');
	            });
	        }
	    };
	    PersonalAnalyzeMyself.prototype.render = function () {
	        var btnShow = this.state.btnShow;
	        return (React.createElement("div", {className: "target-set"}, React.createElement(PersonalTargetSetSingle, {termID: this.props.currentTerm, iconName: "heart", title: "我的性格与兴趣", type: "selfCharacterContent", content: this.state.selfCharacterContent, textareaChange: this.textareaChange, disabled: !btnShow}), React.createElement(PersonalTargetSetSingle, {termID: this.props.currentTerm, iconName: "balance-scale", title: "我的优势与不足", type: "selfAdvantageContent", content: this.state.selfAdvantageContent, textareaChange: this.textareaChange, disabled: !btnShow}), btnShow &&
	            React.createElement("div", {className: "am-text-center"}, React.createElement(antd_1.Button, {className: "btn-orange", size: "large", onClick: this.handleSubmit}, "提交")), React.createElement("div", {className: "eye"}, React.createElement(antd_1.Icon, {type: "eye-o"}), "仅自己可见")));
	    };
	    PersonalAnalyzeMyself.defaultProps = {};
	    return PersonalAnalyzeMyself;
	}(React.Component));
	module.exports = PersonalAnalyzeMyself;


/***/ },

/***/ 472:
/*!****************************************!*\
  !*** ./~/react-scrollspy/scrollspy.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Scrollspy = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 93);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var win = window;
	var doc = document;
	
	var Scrollspy = exports.Scrollspy = function (_React$Component) {
	  _inherits(Scrollspy, _React$Component);
	
	  _createClass(Scrollspy, null, [{
	    key: 'PropTypes',
	    get: function get() {
	      return {
	        items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired,
	        currentClassName: _react2.default.PropTypes.string.isRequired
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        items: [],
	        currentClassName: ''
	      };
	    }
	  }]);
	
	  function Scrollspy(props) {
	    _classCallCheck(this, Scrollspy);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scrollspy).call(this, props));
	
	    _this.state = {
	      targetItems: [],
	      inViewState: []
	    };
	    return _this;
	  }
	
	  _createClass(Scrollspy, [{
	    key: '_initSpyTarget',
	    value: function _initSpyTarget(items) {
	      var targetItems = items.map(function (item) {
	
	        return doc.getElementById(item);
	      });
	
	      return targetItems;
	    }
	  }, {
	    key: '_getElemsViewState',
	    value: function _getElemsViewState(targets) {
	      var elemsInView = [];
	      var elemsOutView = [];
	      var viewStatusList = [];
	
	      var targetItems = targets ? targets : this.state.targetItems;
	
	      var hasInViewAlready = false;
	
	      for (var i = 0, max = targetItems.length; i < max; i++) {
	        var currentContent = targetItems[i];
	        var isInView = hasInViewAlready ? false : this._isInView(currentContent);
	
	        if (isInView) {
	          hasInViewAlready = true;
	          elemsInView.push(currentContent);
	        } else {
	          elemsOutView.push(currentContent);
	        }
	
	        viewStatusList.push(isInView);
	      }
	
	      return {
	        inView: elemsInView,
	        outView: elemsOutView,
	        viewStatusList: viewStatusList
	      };
	    }
	  }, {
	    key: '_isInView',
	    value: function _isInView(el) {
	      var winH = win.innerHeight;
	      var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
	      var scrollBottom = scrollTop + winH;
	      var elTop = el.offsetTop;
	      var elBottom = elTop + el.offsetHeight;
	
	      return elTop < scrollBottom && elBottom > scrollTop;
	    }
	  }, {
	    key: '_spy',
	    value: function _spy(targets) {
	      this.setState({
	        inViewState: this._getElemsViewState(targets).viewStatusList
	      });
	    }
	  }, {
	    key: '_handleSpy',
	    value: function _handleSpy() {
	      var timer = void 0;
	
	      if (timer) {
	        clearTimeout(timer);
	        timer = null;
	      }
	      timer = setTimeout(this._spy.bind(this), 100);
	    }
	  }, {
	    key: '_initFromProps',
	    value: function _initFromProps() {
	      var targetItems = this._initSpyTarget(this.props.items);
	
	      this.setState({
	        targetItems: targetItems
	      });
	
	      this._spy(targetItems);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._initFromProps();
	      win.addEventListener('scroll', this._handleSpy.bind(this));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      win.removeEventListener('scroll', this._handleSpy.bind(this));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this._initFromProps();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var counter = 0;
	      var items = _react2.default.Children.map(this.props.children, function (child, idx) {
	        return _react2.default.cloneElement(child, {
	          className: (child.props.className ? child.props.className : '') + (_this2.state.inViewState[idx] ? ' ' + _this2.props.currentClassName : ''),
	          key: counter++
	        });
	      });
	
	      return _react2.default.createElement(
	        'nav',
	        null,
	        _react2.default.createElement(
	          'ul',
	          { className: this.props.className ? this.props.className : '' },
	          items
	        )
	      );
	    }
	  }]);
	
	  return Scrollspy;
	}(_react2.default.Component);


/***/ },

/***/ 473:
/*!*********************************************************!*\
  !*** ./pages/HomePage/Component/ImpressionPersonal.tsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/HomePage/HomePageActionTypes */ 380);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	"use strict";
	/**
	 * 学生--个人页面
	 * 同学眼中的我 印象
	 *
	 */
	var ImpressionPersonal = (function (_super) {
	    __extends(ImpressionPersonal, _super);
	    function ImpressionPersonal(props) {
	        _super.call(this, props);
	        this.state = {
	            impressions: {},
	        };
	    }
	    ImpressionPersonal.prototype.componentWillMount = function () {
	        this.getStudentImpression();
	    };
	    ImpressionPersonal.prototype.getStudentImpression = function () {
	        var this_ = this;
	        var studentUserID = storageUtil_1.getUserIDFromStorage();
	        var queryObj = { studentUserID: studentUserID };
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_IMPRESSION, queryObj, function (response) {
	            this_.setState({
	                impressions: response.result
	            });
	        });
	    };
	    ImpressionPersonal.prototype.render = function () {
	        var this_ = this;
	        var desc = ["他们暂时", "没有", "评价你哟"];
	        if (!commonFunc_1.isEmptyObject(this.state.impressions)) {
	            var hasImpression = this.state.impressions.hasImpression; //有没有结果
	            var isVisible = this.state.impressions.visible; //自己是否已经填写了评价【若没有填写，则不能显示】
	            if (isVisible && hasImpression) {
	                desc = this.state.impressions.impressions;
	            }
	        }
	        return (React.createElement("div", {className: "impression-div"}, React.createElement("div", {className: "impression-text "}, "别人眼中的我"), React.createElement(antd_1.Row, {type: "flex", justify: "center"}, React.createElement(antd_1.Col, {span: 12}, React.createElement("div", {className: "circle small"}, desc[0]))), React.createElement(antd_1.Row, {type: "flex"}, React.createElement(antd_1.Col, {span: 12}, React.createElement("div", {className: "circle small"}, desc[1])), React.createElement(antd_1.Col, {span: 12}, React.createElement("div", {className: "circle small"}, desc[2])))));
	    };
	    return ImpressionPersonal;
	}(React.Component));
	module.exports = ImpressionPersonal;


/***/ },

/***/ 474:
/*!****************************!*\
  !*** ./common/pageUtil.ts ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var commonFunc_1 = __webpack_require__(/*! ./commonFunc */ 378);
	/*封装一些页面内的操作*/
	//左测导航click事件
	function navigate(e) {
	    e.preventDefault();
	    if ($(e.target).attr("href")) {
	        var element = $("#" + $(e.target).attr("href"));
	        commonFunc_1.scrollTo(element);
	    }
	}
	exports.navigate = navigate;


/***/ }

});
//# sourceMappingURL=2.2.js.map