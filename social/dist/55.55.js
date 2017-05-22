webpackJsonp([55],{

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

/***/ 817:
/*!**********************************************!*\
  !*** ./common/Config/AssessCenterConfig2.ts ***!
  \**********************************************/
/***/ function(module, exports) {

	"use strict";
	exports.hollandTypeDispalyMap = {
	    "A": {
	        "chinese": "人际",
	        "chineseWithChar": "人际",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/Holland_A_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/Holland_A_120x120.png"
	    },
	    "R": {
	        "chinese": "认知",
	        "chineseWithChar": "认知",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/Holland_R_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/Holland_R_120x120.png"
	    },
	    "I": {
	        "chinese": "抗挫",
	        "chineseWithChar": "抗挫",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/Holland_I_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/Holland_I_120x120.png"
	    },
	    "S": {
	        "chinese": "头脑",
	        "chineseWithChar": "头脑",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/Holland_S_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/Holland_S_120x120.png"
	    },
	    "E": {
	        "chinese": "运动",
	        "chineseWithChar": "运动",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/Holland_E_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/Holland_E_120x120.png"
	    },
	    "C": {
	        "chinese": "学习",
	        "chineseWithChar": "学习",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/Holland_C_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/Holland_C_120x120.png"
	    },
	};
	exports.mbtiTypeDisplayMap = {
	    "I": {
	        "chinese": "内倾",
	        "chineseWithChar": "内倾(I)",
	    },
	    "E": {
	        "chinese": "外倾",
	        "chineseWithChar": "外倾(E)",
	    },
	    "N": {
	        "chinese": "直觉",
	        "chineseWithChar": "直觉(N)",
	    },
	    "S": {
	        "chinese": "实感",
	        "chineseWithChar": "实感(S)",
	    },
	    "F": {
	        "chinese": "情感",
	        "chineseWithChar": "情感(F)",
	    },
	    "T": {
	        "chinese": "思考",
	        "chineseWithChar": "思考(T)",
	    },
	    "P": {
	        "chinese": "知觉",
	        "chineseWithChar": "知觉(P)",
	    },
	    "J": {
	        "chinese": "判断",
	        "chineseWithChar": "判断(J)",
	    },
	};
	exports.mbtiDimTitleMap = {
	    "ISTJ": {
	        resultTitle: "侦探（ISTJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISTJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISTJ_120x120.png"
	    },
	    "ISFJ": {
	        resultTitle: "保护者（ISFJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISFJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISFJ_120x120.png"
	    },
	    "INFJ": {
	        resultTitle: "设计师（INFJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INFJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INFJ_120x120.png"
	    },
	    "INTJ": {
	        resultTitle: "专家（INTJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INTJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INTJ_120x120.png"
	    },
	    "ISTP": {
	        resultTitle: "飞行员（ISTP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISTP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISTP_120x120.png"
	    },
	    "ISFP": {
	        resultTitle: "创作者（ISFP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISFP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ISFP_120x120.png"
	    },
	    "INFP": {
	        resultTitle: "哲学家（INFP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INFP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INFP_120x120.png"
	    },
	    "INTP": {
	        resultTitle: "学者（INTP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INTP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_INTP_120x120.png"
	    },
	    "ESTP": {
	        resultTitle: "挑战者（ESTP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESTP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESTP_120x120.png"
	    },
	    "ESFP": {
	        resultTitle: "表演家（ESFP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESFP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESFP_120x120.png"
	    },
	    "ENFP": {
	        resultTitle: "记者（ENFP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENFP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENFP_120x120.png"
	    },
	    "ENTP": {
	        resultTitle: "发明家（ENTP）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENTP_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENTP_120x120.png"
	    },
	    "ESTJ": {
	        resultTitle: "管理者（ESTJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESTJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESTJ_120x120.png"
	    },
	    "ESFJ": {
	        resultTitle: "主人型（ESFJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESFJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ESFJ_120x120.png"
	    },
	    "ENFJ": {
	        resultTitle: "教导者（ENFJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENFJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENFJ_120x120.png"
	    },
	    "ENTJ": {
	        resultTitle: "统帅者（ENTJ）",
	        "picUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENTJ_80x80.png",
	        "detailPicUrl": "vendor/images/tests/MbtiHollandPic/MBTI_ENTJ_120x120.png"
	    }
	};
	//todo key
	exports.valuesDimTitleMap = {
	    "001": {
	        chinese: "美的追求",
	        picUrl: "vendor/images/tests/values/pretty.png"
	    },
	    "002": {
	        chinese: "智力刺激",
	        picUrl: "vendor/images/tests/values/IQ.png"
	    },
	    "003": {
	        chinese: "经济报酬",
	        picUrl: "vendor/images/tests/values/money.png"
	    },
	    "004": {
	        chinese: "利他主义",
	        picUrl: "vendor/images/tests/values/advantage.png"
	    },
	    "005": {
	        chinese: "舒适环境",
	        picUrl: "vendor/images/tests/values/environment.png"
	    },
	};
	exports.MBTIInfoScale = [
	    { "desc": "强", "width": "20%", "leftWidth": "0%" },
	    { "desc": "中等", "width": "20%", "leftWidth": "20%" },
	    { "desc": "轻微", "width": "20%", "leftWidth": "40%" },
	    { "desc": "中等", "width": "20%", "leftWidth": "60%" },
	    { "desc": "强", "width": "20%", "leftWidth": "80%" }
	];


/***/ },

/***/ 823:
/*!****************************************************************!*\
  !*** ./pages/AssessCenter/Component/ResultDimIntroduction.tsx ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	"use strict";
	var ResultDimIntroduction = (function (_super) {
	    __extends(ResultDimIntroduction, _super);
	    function ResultDimIntroduction(props) {
	        _super.call(this, props);
	    }
	    ResultDimIntroduction.prototype.componentWillMount = function () {
	    };
	    ResultDimIntroduction.prototype.render = function () {
	        var introductions = this.props.dimTypeIntroductions;
	        return (React.createElement("div", {className: "career-intro-list"}, introductions.map(function (intro, index) {
	            return (React.createElement("div", {className: "career-intro-single", key: index, style: { borderBottom: "none" }}, React.createElement("div", {className: "title"}, React.createElement("span", null, intro.introductionName)), React.createElement("div", null, intro.introductionValue)));
	        })));
	    };
	    return ResultDimIntroduction;
	}(React.Component));
	module.exports = ResultDimIntroduction;


/***/ },

/***/ 843:
/*!********************************************************!*\
  !*** ./pages/AssessCenter/ValueAssess/ValueAssess.tsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var HomePageConfig_1 = __webpack_require__(/*! common/Config/HomePageConfig */ 446);
	var ValueAssessGuide = __webpack_require__(/*! ./ValueAssessGuide */ 844);
	var ValueAssessResult = __webpack_require__(/*! ./ValueAssessResult */ 845);
	var context = __webpack_require__(/*! ./ValueAssessContext */ 846);
	var Actions = __webpack_require__(/*! ../../../actions/AssessCenter/ValueAssess/ValueAssessAction */ 847);
	"use strict";
	var ValueAssess = (function (_super) {
	    __extends(ValueAssess, _super);
	    function ValueAssess(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    ValueAssess.prototype.componentWillMount = function () {
	        Actions.initValueAssessFinishState();
	    };
	    ValueAssess.prototype.render = function () {
	        var isValueAssessFinished = context.getValueAssessFinishState();
	        var title = isValueAssessFinished ? "结果" : "";
	        return (React.createElement("div", {className: "am-margin-top"}, React.createElement("div", {className: "MIGuideTitle"}, React.createElement("img", {src: HomePageConfig_1.assessCenterDisplayMap.values.imgUrl}), React.createElement("span", null, HomePageConfig_1.assessCenterDisplayMap.values.name + "测试" + title)), isValueAssessFinished && React.createElement(ValueAssessResult, null), !isValueAssessFinished && React.createElement(ValueAssessGuide, null)));
	    };
	    ValueAssess.defaultProps = {};
	    return ValueAssess;
	}(React.Component));
	module.exports = ValueAssess;


/***/ },

/***/ 844:
/*!*************************************************************!*\
  !*** ./pages/AssessCenter/ValueAssess/ValueAssessGuide.tsx ***!
  \*************************************************************/
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
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/AssessCenter/ValueAssess/ValueAssessActionTypes */ 408);
	"use strict";
	/**
	 * MI测试引导页 文字说明 及开始测试按钮
	 */
	var ValueAssessGuide = (function (_super) {
	    __extends(ValueAssessGuide, _super);
	    function ValueAssessGuide(props) {
	        _super.call(this, props);
	        this.state = {};
	        this.goToTest = this.goToTest.bind(this);
	    }
	    ValueAssessGuide.prototype.goToTest = function () {
	        var url = "assessCenter/valueAssess/valueQuizPage";
	        this.props.router.push(url);
	    };
	    ValueAssessGuide.prototype.componentWillMount = function () {
	        //ajax获取搜索用户的结果
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.GET_VALUEASSESS_VALUE_INTRODUCTION, function (response) {
	            var records = response.result.valueAssessIntroduction;
	            this_.setState({
	                valueAssessIntroduction: records.valueAssessIntroduction,
	            });
	        });
	    };
	    ValueAssessGuide.prototype.render = function () {
	        return (React.createElement("div", {className: "am-margin-top"}, React.createElement("div", {className: "am-text-center"}, React.createElement("img", {src: "vendor/images/tests/valueTestGuide.png"})), React.createElement("div", {className: "career-intro-list"}, this.state.valueAssessIntroduction, React.createElement("div", null, "预计时长：8-10分钟")), React.createElement("div", {className: "am-text-center"}, React.createElement(antd_1.Button, {className: "btn-blue", onClick: this.goToTest, size: "large"}, "开始测试"))));
	    };
	    return ValueAssessGuide;
	}(React.Component));
	module.exports = react_router_1.withRouter(ValueAssessGuide);


/***/ },

/***/ 845:
/*!**************************************************************!*\
  !*** ./pages/AssessCenter/ValueAssess/ValueAssessResult.tsx ***!
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
	var CardTitleWithLine = __webpack_require__(/*! ../../../common/Component/CardTitleWithLine */ 442);
	var ResultDimIntroduction = __webpack_require__(/*! ../Component/ResultDimIntroduction */ 823);
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/AssessCenter/ValueAssess/ValueAssessActionTypes */ 408);
	var AssessCenterConfig2_1 = __webpack_require__(/*! common/Config/AssessCenterConfig2 */ 817);
	"use strict";
	var ValueAssessResult = (function (_super) {
	    __extends(ValueAssessResult, _super);
	    function ValueAssessResult(props) {
	        _super.call(this, props);
	        this.state = {
	            preferValues: []
	        };
	    }
	    ValueAssessResult.prototype.componentWillMount = function () {
	        //ajax获取测试报告的结果
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.GET_VALUEASSESS_VALUE_REPORT, function (response) {
	            var records = response.result.report;
	            this_.setState({
	                preferValues: records.advantage,
	            });
	        });
	    };
	    ValueAssessResult.prototype.render = function () {
	        var preferValues = this.state.preferValues;
	        return (React.createElement("div", {className: "blueBack block-box-shadows", style: { margin: "30px 15px", padding: "40px 20px 30px" }}, React.createElement("div", {className: "report-single-title holland-score-title"}, React.createElement("div", {className: "titleDIV"}, React.createElement("span", {className: "titleSpan"}, React.createElement("span", {className: "titleName"}, "根据测试结果，你做职业选择时最看重的三个价值观是")))), React.createElement(antd_1.Row, {type: "flex", justify: "center", className: "am-margin-top"}, preferValues.map(function (intro, index) {
	            return (React.createElement(antd_1.Col, {span: 8, key: index, className: "am-text-center"}, React.createElement(antd_1.Button, {className: "btn-yellow", size: "large"}, intro.resultDimName)));
	        })), preferValues.map(function (intro, index) {
	            var picUrl = AssessCenterConfig2_1.valuesDimTitleMap[intro.resultDimType].picUrl;
	            return (React.createElement(antd_1.Row, {className: "am-margin-top-lg display-box values-top-border", key: index}, React.createElement(antd_1.Col, {span: 8, className: "vertical-horizon-center"}, React.createElement("img", {src: picUrl})), React.createElement(antd_1.Col, {span: 16}, React.createElement(CardTitleWithLine, {title: intro.resultDimName, titleIconType: "fa-lightbulb-o fa-2x am-padding-right-xs"}), React.createElement(ResultDimIntroduction, {dimTypeIntroductions: intro.introductions}))));
	        })));
	    };
	    ValueAssessResult.defaultProps = {};
	    return ValueAssessResult;
	}(React.Component));
	module.exports = ValueAssessResult;


/***/ },

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


/***/ }

});
//# sourceMappingURL=55.55.js.map