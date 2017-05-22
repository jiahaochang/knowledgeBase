webpackJsonp([41],{

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

/***/ 486:
/*!*************************************************!*\
  !*** ./pages/HomePage/Component/Impression.tsx ***!
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
	var responseCacheContext = __webpack_require__(/*! common/ResponseCacheContext */ 426);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/HomePage/HomePageActionTypes */ 380);
	var CheckboxGroup = antd_1.Checkbox.Group;
	"use strict";
	/**
	 * 班主任---同学互评
	 * 同学眼中的我 印象
	 * 逻辑：如果之前已有评价，那么显示评价
	 * 如果未有评价，提示评价，
	 * 点击选择后，进入评价选择页面，
	 * 评价后显示评价统计结果
	 */
	var chooseLimitCount = 3;
	var Impression = (function (_super) {
	    __extends(Impression, _super);
	    function Impression(props) {
	        _super.call(this, props);
	        this.state = {
	            visible: false,
	            message: ""
	        };
	        this.chooseImpressionWords = this.chooseImpressionWords.bind(this);
	        this.onImpressionChange = this.onImpressionChange.bind(this);
	        this.handleOk = this.handleOk.bind(this);
	        this.handleCancel = this.handleCancel.bind(this);
	    }
	    Impression.prototype.componentWillMount = function () {
	        this.getStudentImpression(this.props);
	    };
	    Impression.prototype.componentWillReceiveProps = function (newProps) {
	        if (JSON.stringify(this.props) != JSON.stringify(newProps)) {
	            this.getStudentImpression(newProps);
	        }
	    };
	    Impression.prototype.getStudentImpression = function (props) {
	        var this_ = this;
	        var studentUserID = props.currentStudentID;
	        var queryObj = { studentUserID: studentUserID };
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_STUDENT_IMPRESSION, queryObj, function (response) {
	            this_.setState({
	                impressions: response.result
	            });
	        });
	    };
	    Impression.prototype.handleOk = function () {
	        var this_ = this;
	        var checkedImpression = this.state.checkedImpression;
	        var impressions = [];
	        for (var _i = 0, checkedImpression_1 = checkedImpression; _i < checkedImpression_1.length; _i++) {
	            var item = checkedImpression_1[_i];
	            var map = {};
	            map["impressionID"] = item;
	            impressions.push(map);
	        }
	        var postData = {
	            impressedUserID: this.props.currentStudentID,
	            impressions: impressions
	        };
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.SET_STUDENT_IMPRESSIONS, postData, function (response) {
	            this_.getStudentImpression(this_.props);
	            antd_1.message.success('提交成功');
	            this_.setState({
	                visible: false
	            });
	        });
	    };
	    Impression.prototype.handleCancel = function (e) {
	        this.setState({
	            visible: false,
	        });
	    };
	    //点击圆框选择关键词
	    Impression.prototype.chooseImpressionWords = function () {
	        var this_ = this;
	        ajaxUtil_1.getDataFromContextByActionIDAsync(responseCacheContext.getResponseCache(), actionTypes.SCHOOL_PROVIDED_IMPRESSIONS, function (response) {
	            var impressionsWithSchoolID = response.result.schoolProvidedImpressions;
	            this_.setState({
	                visible: true,
	                impressionsWithSchoolID: impressionsWithSchoolID
	            });
	        });
	    };
	    Impression.prototype.onImpressionChange = function (checkedValues) {
	        if (checkedValues.length != chooseLimitCount) {
	            this.setState({
	                message: "请选择" + chooseLimitCount + "个关键词"
	            });
	            return false;
	        }
	        else {
	            this.setState({
	                checkedImpression: checkedValues,
	                message: ""
	            });
	        }
	    };
	    // onClick={this.goEdit}
	    Impression.prototype.render = function () {
	        var this_ = this;
	        var desc = ["请选择", "请选择", "请选择"];
	        var options = [];
	        if (!!this.state.impressionsWithSchoolID) {
	            var impressionsWithSchoolID = this.state.impressionsWithSchoolID;
	            for (var _i = 0, impressionsWithSchoolID_1 = impressionsWithSchoolID; _i < impressionsWithSchoolID_1.length; _i++) {
	                var item = impressionsWithSchoolID_1[_i];
	                var map = {};
	                map["label"] = item.impressionContent;
	                map["value"] = item.impressionID;
	                options.push(map);
	            }
	        }
	        var impressions = null;
	        if (!!this.state.impressions) {
	            var hasImpression = this.state.impressions.hasImpression; //有没有结果
	            var isVisible = this.state.impressions.visible; //自己是否已经填写了评价【若没有填写，则不能显示】
	            if (isVisible && hasImpression) {
	                var titleText = "我们对" + this_.props.currentStudentName + "的印象";
	                var impressions = this_.state.impressions.impressions;
	                impressions = (React.createElement("div", {className: "impression-div"}, React.createElement("div", {className: "impression-text blue"}, titleText), React.createElement(antd_1.Row, null, impressions.map(function (single, index) {
	                    return React.createElement(antd_1.Col, {span: 8, key: index}, React.createElement("div", {className: "circle"}, single));
	                }))));
	            }
	            else {
	                impressions = (React.createElement("div", {className: "impression-div"}, React.createElement("div", {className: "impression-text blue"}, "请选择三个关键词来形容同学：", this_.props.currentStudentName), React.createElement(antd_1.Row, null, desc.map(function (single, index) {
	                    return React.createElement(antd_1.Col, {span: 8, key: index, onClick: this_.chooseImpressionWords}, React.createElement("div", {className: "circle"}, single));
	                })), React.createElement("div", {className: "impression-text gray am-text-center"}, "完成后可查看其他同学对", this_.props.currentStudentName, "的评价")));
	            }
	        }
	        return (React.createElement("div", null, impressions, React.createElement(antd_1.Modal, {title: "请从以下选项中，选出三项来描述他/她", visible: this.state.visible, onOk: this.handleOk, onCancel: this.handleCancel}, !!this.state.impressionsWithSchoolID &&
	            React.createElement("div", {className: "impressions-checkbox-group"}, !commonFunc_1.isEmptyObject(this_.state.message) &&
	                React.createElement(antd_1.Alert, {message: this_.state.message, type: "error", showIcon: true}), React.createElement(CheckboxGroup, {options: options, onChange: this.onImpressionChange})))));
	    };
	    return Impression;
	}(React.Component));
	module.exports = Impression;


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

/***/ 768:
/*!********************************************************************!*\
  !*** ./pages/TermAnalysis/ClassmateEvaluate/ClassmateEvaluate.tsx ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var PersonalBasicInfo = __webpack_require__(/*! common/Component/PersonalBasicInfo */ 441);
	var Impression = __webpack_require__(/*! pages/HomePage/Component/Impression */ 486);
	var RankState = __webpack_require__(/*! common/Component/RankState */ 769);
	var ClassMateEvaluateList = __webpack_require__(/*! pages/TermAnalysis/ClassMateEvaluate/Component/ClassMateEvaluateList */ 659);
	var storageUtil_1 = __webpack_require__(/*! common/storageUtil */ 383);
	var CommonConfig_1 = __webpack_require__(/*! common/Config/CommonConfig */ 369);
	"use strict";
	//调用API
	var ajaxUtil_1 = __webpack_require__(/*! common/ajaxUtil */ 385);
	var actionTypes = __webpack_require__(/*! actions/TermAnalysis/TermAnalysisActionTypes */ 401);
	/**
	 * 同学互评
	 */
	var ClassmateEvaluate = (function (_super) {
	    __extends(ClassmateEvaluate, _super);
	    function ClassmateEvaluate(props) {
	        _super.call(this, props);
	        this.state = {
	            currentStudentID: "",
	            currentStudentName: "",
	            currentTerm: storageUtil_1.getTermIDFromStorage()
	        };
	        this.onStudentChange = this.onStudentChange.bind(this);
	        this.onTermChange = this.onTermChange.bind(this);
	    }
	    ClassmateEvaluate.prototype.onTermChange = function (termAfterChange) {
	        this.setStateByTermID(termAfterChange);
	    };
	    ClassmateEvaluate.prototype.onStudentChange = function (studentID, studentName) {
	        this.setState({
	            currentStudentID: studentID,
	            currentStudentName: studentName
	        });
	    };
	    ClassmateEvaluate.prototype.componentWillMount = function () {
	        this.setStateByTermID(this.state.currentTerm);
	    };
	    ClassmateEvaluate.prototype.setStateByTermID = function (currentTerm) {
	        var this_ = this;
	        ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_EVALUATE_STUDENT_STAR, { termID: currentTerm }, function (response) {
	            var allClassmates = response.result.evaluationToClassmates;
	            ajaxUtil_1.getDataByActionIDWithQueryAsync(actionTypes.GET_EVALUATE_STUDENT_MYSELF_STAR, { termID: currentTerm }, function (response) {
	                var studentWithScoreMySelf = response.evaluationFromClassmates;
	                if (!studentWithScoreMySelf.qualityEvaluationToClassmatesFinished) {
	                    for (var i = 0; i < studentWithScoreMySelf.qualityEvaluations.length; i++) {
	                        studentWithScoreMySelf.qualityEvaluations[i].evaluationScore = CommonConfig_1.defaultStarValues;
	                    }
	                }
	                this_.setState({
	                    currentStudentID: allClassmates[0].studentUserID,
	                    currentStudentName: allClassmates[0].name,
	                    allClassmates: allClassmates,
	                    currentTerm: currentTerm,
	                    studentWithScoreMySelf: studentWithScoreMySelf
	                });
	            });
	        });
	    };
	    ClassmateEvaluate.prototype.render = function () {
	        return (React.createElement("div", null, this.state.currentStudentID && this.state.currentTerm &&
	            React.createElement(antd_1.Row, null, React.createElement(antd_1.Col, {span: 17, className: "am-padding-right-sm"}, React.createElement(PersonalBasicInfo, {roleEnum: 0 /* student */, userID: this.state.currentStudentID, className: "block-box-shadows am-margin-bottom"}), React.createElement("div", {className: "block-box-shadows"}, React.createElement(Impression, {currentStudentID: this.state.currentStudentID, currentStudentName: this.state.currentStudentName}))), React.createElement(antd_1.Col, {span: 7, className: "block-box-shadows am-margin-bottom-xs"}, React.createElement(RankState, {onTermChange: this.onTermChange, termSelectable: true, onlyTermSelect: true, currentTerm: this.state.currentTerm}), React.createElement("div", {className: "student-evaluation-desc"}, React.createElement("div", {className: "blue-title"}, "同学互评"), React.createElement("div", null, "请点击下方头像对同学进行各个维度的素质评价")), React.createElement("div", {className: " am-cf am-margin-bottom"}, React.createElement(ClassMateEvaluateList, {currentClassmateID: this.state.currentStudentID, allClassmates: this.state.allClassmates, onClassmateChange: this.onStudentChange})), React.createElement("div", {className: "student-evaluation-desc"}, React.createElement("div", {className: "blue-title"}, "我的得分"), React.createElement("div", null, "提示：在同学都打完分之后才会显示你的得分")), this.state.studentWithScoreMySelf.qualityEvaluations.map(function (item, index) {
	                var currentValue = Number(item.evaluationScore);
	                var key = item.qualityCategoryID + "_" + index;
	                return (React.createElement("div", {className: "ClassMateEvaluateListStarDiv", key: key}, React.createElement("div", {className: "ClassMateEvaluateListStarWords"}, item.qualityCategoryName), React.createElement(antd_1.Rate, {value: currentValue, disabled: true, allowHalf: true})));
	            })))));
	    };
	    ClassmateEvaluate.defaultProps = {};
	    return ClassmateEvaluate;
	}(React.Component));
	module.exports = ClassmateEvaluate;


/***/ },

/***/ 769:
/*!****************************************!*\
  !*** ./common/Component/RankState.tsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var antd_1 = __webpack_require__(/*! antd */ 386);
	var react_router_1 = __webpack_require__(/*! react-router */ 264);
	var Option = antd_1.Select.Option;
	"use strict";
	var SchoolTerm_1 = __webpack_require__(/*! ../Module/SchoolTerm */ 770);
	var storageUtil_1 = __webpack_require__(/*! ../storageUtil */ 383);
	/**
	 * 带有学期选择的 排名积分卡片
	 * 有学生和 班主任两种数据
	 */
	var RankState = (function (_super) {
	    __extends(RankState, _super);
	    function RankState(props) {
	        _super.call(this, props);
	        this.handleChange = this.handleChange.bind(this);
	    }
	    RankState.prototype.handleChange = function (value) {
	        this.props.onTermChange(value);
	    };
	    RankState.prototype.goTermAnalysis = function (type) {
	        var url = "";
	        if (type === "rankInClass") {
	            url = "termAnalysis/rankInClass";
	        }
	        else if (type === "scoreGrowthRecord") {
	            url = "termAnalysis/scoreGrowthRecord";
	        }
	        this.props.router.push(url);
	    };
	    RankState.prototype.componentWillMount = function () {
	        //ajax get rank state
	        //get latestTerm from sessionStorage
	        var latestTerm = storageUtil_1.getTermIDFromStorage();
	        this.setState({
	            latestTerm: latestTerm
	        });
	    };
	    RankState.prototype.render = function () {
	        var currentTerm = this.props.currentTerm;
	        var options = [];
	        for (var i = 0 /* Grade1Term1 */; i <= 5 /* Grade3Term2 */; i++) {
	            var term = new SchoolTerm_1.SchoolTerm(i);
	            var displayChinese = term.getDisplayChinese();
	            var optionValue = i + "";
	            if (i <= this.state.latestTerm) {
	                options.push(React.createElement(Option, {value: optionValue, key: optionValue}, displayChinese));
	            }
	            else {
	                options.push(React.createElement(Option, {value: optionValue, disabled: true, key: optionValue}, displayChinese));
	            }
	        }
	        var selectValue = currentTerm + "";
	        var marginTopSingleStyle = {};
	        if (this.props.from == "nonIndex") {
	            if (this.props.termSelectable) {
	                marginTopSingleStyle = { marginTop: "19px" };
	            }
	            else {
	                marginTopSingleStyle = { marginTop: "28px" };
	            }
	        }
	        var grownScoreText = this.props.isTeacher ? "班级平均积分" : "成长积分";
	        var classRankText = this.props.isTeacher ? "积分年级排名" : "班级排名";
	        return (React.createElement("div", {className: "RankStateDiv"}, this.props.termSelectable &&
	            React.createElement(antd_1.Select, {value: selectValue, style: { width: "100%" }, onChange: this.handleChange}, options), !this.props.onlyTermSelect &&
	            React.createElement("div", null, React.createElement("div", null, React.createElement("div", {className: "RankStateSingle green", style: marginTopSingleStyle, onClick: this.props.isTeacher ? null : this.goTermAnalysis.bind(this, "scoreGrowthRecord")}, grownScoreText, React.createElement("span", {className: "count"}, this.props.grownScore, !this.props.isTeacher &&
	                React.createElement("i", {className: "fa fa-chevron-right"}))), React.createElement("div", {className: "RankStateSingle blueDuck", style: marginTopSingleStyle, onClick: this.props.isTeacher ? null : this.goTermAnalysis.bind(this, "rankInClass")}, classRankText, React.createElement("span", {className: "count"}, this.props.classRank, !this.props.isTeacher &&
	                React.createElement("i", {className: "fa fa-chevron-right"})))), this.props.hasSchoolRank && !this.props.isTeacher &&
	                React.createElement("div", {className: "RankStateSingle yellow", style: marginTopSingleStyle}, "全校排名", React.createElement("span", {className: "count"}, this.props.schoolRank)))));
	    };
	    RankState.defaultProps = {
	        hasSchoolRank: true,
	        from: "nonIndex"
	    };
	    return RankState;
	}(React.Component));
	module.exports = react_router_1.withRouter(RankState);


/***/ },

/***/ 770:
/*!*************************************!*\
  !*** ./common/Module/SchoolTerm.ts ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	var SchoolTerm = (function () {
	    function SchoolTerm(term) {
	        this._term = term;
	    }
	    Object.defineProperty(SchoolTerm.prototype, "term", {
	        get: function () {
	            return this._term;
	        },
	        set: function (value) {
	            this._term = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SchoolTerm.prototype.getDisplayChinese = function () {
	        switch (this._term) {
	            case 0 /* Grade1Term1 */:
	                return "高一上学期";
	            case 1 /* Grade1Term2 */:
	                return "高一下学期";
	            case 2 /* Grade2Term1 */:
	                return "高二上学期";
	            case 3 /* Grade2Term2 */:
	                return "高二下学期";
	            case 4 /* Grade3Term1 */:
	                return "高三上学期";
	            case 5 /* Grade3Term2 */:
	                return "高三下学期";
	            default:
	                return "高一上学期";
	        }
	    };
	    //返回月份list
	    SchoolTerm.prototype.getMonths = function (currentYear) {
	        var nextYear = parseInt(currentYear) + 1;
	        var yearMonths = [];
	        for (var i = 9; i <= 12; i++) {
	            var map = {};
	            map["month"] = i;
	            map["year"] = currentYear;
	            yearMonths.push(map);
	        }
	        for (var j = 1; j <= 6; j++) {
	            var map = {};
	            map["month"] = j;
	            map["year"] = nextYear;
	            yearMonths.push(map);
	        }
	        return yearMonths;
	    };
	    //获取
	    SchoolTerm.prototype.getSchoolMonth = function () {
	        var yearMonths = [];
	        //todo grade from sessionStorage
	        //var grade = window.sessionStorage.getItem("grade");
	        var grade = "2015";
	        var currentYear = 0;
	        if (this._term == 0 /* Grade1Term1 */ || this._term == 1 /* Grade1Term2 */) {
	            currentYear = parseInt(grade);
	        }
	        else if (this._term == 2 /* Grade2Term1 */ || this._term == 3 /* Grade2Term2 */) {
	            currentYear = parseInt(grade) + 1;
	        }
	        else if (this._term == 4 /* Grade3Term1 */ || this._term == 5 /* Grade3Term2 */) {
	            currentYear = parseInt(grade) + 2;
	        }
	        yearMonths = this.getMonths(currentYear);
	        return yearMonths;
	    };
	    return SchoolTerm;
	}());
	exports.SchoolTerm = SchoolTerm;


/***/ }

});
//# sourceMappingURL=41.41.js.map