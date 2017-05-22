webpackJsonp([52],{

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

/***/ 814:
/*!******************************************************!*\
  !*** ./pages/AssessCenter/MBTIAssess/MBTIAssess.tsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var MBTIAssessResult = __webpack_require__(/*! ./MBTIAssessResult */ 815);
	var HomePageConfig_1 = __webpack_require__(/*! common/Config/HomePageConfig */ 446);
	"use strict";
	var MBTIAssess = (function (_super) {
	    __extends(MBTIAssess, _super);
	    function MBTIAssess(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    MBTIAssess.prototype.render = function () {
	        var isMBTIAssessFinished = true;
	        var title = isMBTIAssessFinished ? "结果" : "";
	        return (React.createElement("div", {className: "am-margin-top"}, React.createElement("div", {className: "MIGuideTitle"}, React.createElement("img", {src: HomePageConfig_1.assessCenterDisplayMap.MBTI.imgUrl}), React.createElement("span", null, "性格测试结果")), isMBTIAssessFinished && React.createElement(MBTIAssessResult, null), !isMBTIAssessFinished &&
	            React.createElement("div", null, "MBTI测试还未完成")));
	    };
	    MBTIAssess.defaultProps = {};
	    return MBTIAssess;
	}(React.Component));
	module.exports = MBTIAssess;


/***/ },

/***/ 815:
/*!************************************************************!*\
  !*** ./pages/AssessCenter/MBTIAssess/MBTIAssessResult.tsx ***!
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
	var ajaxUtil = __webpack_require__(/*! ../../../common/ajaxUtil */ 385);
	var ActionTypes = __webpack_require__(/*! ../../../actions/AssessCenter/AssessCenterActionTypes */ 406);
	var ResultIntroduction = __webpack_require__(/*! ./Component/ResultIntroduction */ 816);
	var AssessCenterConfig2_1 = __webpack_require__(/*! common/Config/AssessCenterConfig2 */ 817);
	var MBTIResultChart = __webpack_require__(/*! ./Component/MBTIResultChart */ 818);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	"use strict";
	var MBTIAssessResult = (function (_super) {
	    __extends(MBTIAssessResult, _super);
	    function MBTIAssessResult(props) {
	        _super.call(this, props);
	        this.state = {
	            advantage: [],
	            dimScores: [],
	        };
	    }
	    MBTIAssessResult.prototype.componentWillMount = function () {
	        //ajax获取测试报告的结果
	        var this_ = this;
	        ajaxUtil.getDataByActionID(ActionTypes.GET_ASSESSCENTER_MBTI_REPORT, function (response) {
	            var records = response.result;
	            this_.setState({
	                advantage: records.report.advantage,
	                dimScores: records.dimScores,
	            });
	        });
	    };
	    MBTIAssessResult.prototype.render = function () {
	        var dimScores = this.state.dimScores;
	        var advantage = this.state.advantage;
	        var mbtiMap = !commonFunc_1.isEmptyObject(advantage) ? AssessCenterConfig2_1.mbtiDimTitleMap[advantage[0].resultDimType] : "";
	        return (React.createElement("div", {className: "am-margin-top"}, React.createElement("div", {className: "blueBack block-box-shadows", style: { margin: "30px 15px", padding: "20px 20px 30px" }}, React.createElement(antd_1.Row, {className: "vertical-horizon-center"}, React.createElement(antd_1.Col, {span: 8, className: "am-text-center"}, React.createElement("img", {src: mbtiMap.detailPicUrl}), React.createElement("div", {className: "am-text-center"}, React.createElement(antd_1.Button, {className: "btn-orange", size: "large"}, mbtiMap.resultTitle))), React.createElement(antd_1.Col, {span: 16}, !commonFunc_1.isEmptyObject(dimScores) &&
	            React.createElement(MBTIResultChart, {dimScores: dimScores})))), React.createElement("div", {className: "blueBack block-box-shadows", style: { margin: "30px 15px", padding: "20px 20px 30px" }}, advantage.map(function (intro, index) {
	            return React.createElement(ResultIntroduction, {dimTypeIntroductions: intro.introductions, key: index});
	        }))));
	    };
	    MBTIAssessResult.defaultProps = {};
	    return MBTIAssessResult;
	}(React.Component));
	module.exports = MBTIAssessResult;


/***/ },

/***/ 816:
/*!************************************************************************!*\
  !*** ./pages/AssessCenter/MBTIAssess/Component/ResultIntroduction.tsx ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var CardTitleWithLine = __webpack_require__(/*! ../../../../common/Component/CardTitleWithLine */ 442);
	"use strict";
	var ResultIntroduction = (function (_super) {
	    __extends(ResultIntroduction, _super);
	    function ResultIntroduction(props) {
	        _super.call(this, props);
	    }
	    ResultIntroduction.prototype.componentWillMount = function () {
	    };
	    ResultIntroduction.prototype.render = function () {
	        var introductions = this.props.dimTypeIntroductions;
	        var iconList = ["fa-user", "fa-user-secret", "fa-hand-o-right", "fa-crosshairs"];
	        return (React.createElement("div", {className: ""}, introductions.map(function (intro, index) {
	            return (React.createElement("div", {className: "am-margin-bottom", key: index}, React.createElement(CardTitleWithLine, {title: intro.introductionName, titleIconType: iconList[index] + " fa-2x am-padding-left am-padding-right-xs"}), React.createElement("div", {className: "am-margin-top-sm", style: { textIndent: "2em" }}, intro.introductionValue)));
	        })));
	    };
	    return ResultIntroduction;
	}(React.Component));
	module.exports = ResultIntroduction;


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

/***/ 818:
/*!*********************************************************************!*\
  !*** ./pages/AssessCenter/MBTIAssess/Component/MBTIResultChart.tsx ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 93);
	var DualAxisProgressBar = __webpack_require__(/*! common/Component/DualAxisProgressBar */ 819);
	var AssessCenterConfig2_1 = __webpack_require__(/*! common/Config/AssessCenterConfig2 */ 817);
	var commonFunc_1 = __webpack_require__(/*! common/commonFunc */ 378);
	"use strict";
	var MBTIResultChart = (function (_super) {
	    __extends(MBTIResultChart, _super);
	    function MBTIResultChart(props) {
	        _super.call(this, props);
	        this.state = {
	            dimScores: []
	        };
	    }
	    MBTIResultChart.prototype.componentWillMount = function () {
	        var dimScores = commonFunc_1.progressDualAxis(this.props.dimScores, false);
	        this.setState({
	            dimScores: dimScores
	        });
	    };
	    //width = $(".jobPersonalStyle").width()-80
	    MBTIResultChart.prototype.render = function () {
	        return (React.createElement("div", {className: "jobPersonalStyle am-cf"}, this.state.dimScores.map(function (item, index) {
	            return React.createElement(DualAxisProgressBar, {leftText: item.leftText, leftChar: item.leftChar, rightText: item.rightText, rightChar: item.rightChar, direction: item.direction, score: item.dimScore, width: 423});
	        }), React.createElement("div", {className: "progress-typeDouble-div-scale am-cf"}, AssessCenterConfig2_1.MBTIInfoScale.map(function (scale, index) {
	            return React.createElement("div", {key: "infoScale" + index, className: "progress-typeDouble-div-width-scale", style: { width: scale.width, left: scale.leftWidth }}, React.createElement("div", {className: "progress-typeDouble-div-width-span-scale"}, scale.desc));
	        }))));
	    };
	    MBTIResultChart.defaultProps = {};
	    return MBTIResultChart;
	}(React.Component));
	module.exports = MBTIResultChart;


/***/ },

/***/ 819:
/*!**************************************************!*\
  !*** ./common/Component/DualAxisProgressBar.tsx ***!
  \**************************************************/
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
	 * 双轴线温度计进度条
	 */
	var DualAxisProgressBar = (function (_super) {
	    __extends(DualAxisProgressBar, _super);
	    function DualAxisProgressBar(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    DualAxisProgressBar.prototype.render = function () {
	        var leftText = this.props.leftText;
	        var leftChar = this.props.leftChar;
	        var rightText = this.props.rightText;
	        var rightChar = this.props.rightChar;
	        var displayLeftStyle = {}, displayRightStyle = {}, backgroundOrange = "";
	        if (this.props.direction == "left") {
	            displayLeftStyle["width"] = (100 - this.props.score) + "%";
	            backgroundOrange = "#FF9800";
	        }
	        else {
	            displayRightStyle["width"] = this.props.score + "%";
	        }
	        var bigWidth = (this.props.width) + "px";
	        var leftRightWidth = ((this.props.width - 22) / 2) + "px";
	        return (React.createElement("div", {className: " am-cf"}, React.createElement("div", {className: "progress-my-span"}, React.createElement("span", null, leftText), React.createElement("span", {className: "am-fr"}, leftChar)), React.createElement("div", {className: "progress-div-typeDouble", style: { "width": bigWidth }}, React.createElement("div", {className: "progress-div-typeDouble-div progress-div-typeDouble-div-left", style: { "width": leftRightWidth, "background": backgroundOrange }}, React.createElement("div", {className: "progress-div-typeDouble-div-left-active", style: displayLeftStyle})), React.createElement("div", {className: "progress-div-typeDouble-circle"}), React.createElement("div", {className: "progress-div-typeDouble-div progress-div-typeDouble-div-right", style: { "width": leftRightWidth }}, React.createElement("div", {className: "progress-div-typeDouble-div-right-active", style: displayRightStyle}))), React.createElement("div", {className: "progress-my-span"}, React.createElement("span", null, rightChar), React.createElement("span", {className: "am-fr"}, rightText))));
	    };
	    DualAxisProgressBar.defaultProps = {};
	    return DualAxisProgressBar;
	}(React.Component));
	module.exports = DualAxisProgressBar;


/***/ }

});
//# sourceMappingURL=52.52.js.map