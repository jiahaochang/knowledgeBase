import * as ActionTypes from '../../../actions/AssessCenter/ValueAssess/ValueAssessActionTypes'

let ValueAssessMockTemplateTemp = {};

ValueAssessMockTemplateTemp[ActionTypes.GET_VALUEASSESS_VALUEASSESSFINISHSTATE] = {
    status: "success",
    result:{
        isMIAssessFinished:false,
    }
};

ValueAssessMockTemplateTemp[ActionTypes.GET_VALUEASSESS_VALUE_INTRODUCTION] = {
    status: 'success',
    result: {
        valueAssessIntroduction:{
            valueAssessIntroduction:"职业价值观是人们在进行职业选择时所看重的原则、标准和品质，是对职业的一种信念和态度。" +
            "本问卷以美国心理学家舒伯（Super）的职业价值观分类为基础、针对中国中学生的特点而制定开发，能够帮助中学生了解自己在" +
            "职业选择时看重的因素，为大学专业选择和职业发展提供参考。\n" +
            "   下面是人们在职业选择时会考虑到的13种不同的价值观，这些价值观对于不同的人来说，重要性会有所不同。请根据自己的实际情况，判断你在选择职业" +
            "时对下列价值观的看重程度，并将这4个价值观按照你对它们的看重程度排序（非常重要、比较重要、一般、较不重要）。也许" +
            "在你看来每个价值观都很重要，单在实际的职业选择中不可能都得到满足。因此，请你按照现实的可能性和你本人的考虑来进行评判。",
        }
    },
};

ValueAssessMockTemplateTemp[ActionTypes.GET_VALUEASSESS_QUIZZES] = {
    status: "success",
    result:{
        valueAspects: [
            {
                aspectName: "利他主义",
                desc: "工作的目的和价值，在于提供机会为社会大众的幸福和利益尽一份力，为大众谋福利。"
            },
            {
                aspectName: "美的追求",
                desc: "工作的目的和价值，在于能不断地追求美的东西，得到美感的享受，增加艺术的气氛。"
            },
            {
                aspectName: "智力刺激",
                desc: "工作的目的和价值，在于能不断进行智力的操作，动脑思考，学习以及探索新事物、解决新问题。"
            },
            {
                aspectName: "成就满足",
                desc: "工作的目的和价值，在于能看到自己努力工作的具体成果，得到领导同事或社会的赞扬，因此获得精神上的满足。"
            },
            {
                aspectName: "独立自主",
                desc: "工作的目的和价值，在于能充分发挥自己的独立性和主动性，按自己的方式、步调或想法去做，不受太多限制。"
            },
            {
                aspectName: "社会地位",
                desc: "haha"
            },
            {
                aspectName: "管理权力",
                desc: "haha"
            },
            {
                aspectName: "经济报酬",
                desc: "haha"
            },
            {
                aspectName: "社会交际",
                desc: "haha"
            },
            {
                aspectName: "安全稳定",
                desc: "haha"
            },
            {
                aspectName: "舒适环境",
                desc: "haha"
            },
            {
                aspectName: "人际关系",
                desc: "haha"
            },
            {
                aspectName: "多样变化",
                desc: "haha"
            }
        ],
    }
};

ValueAssessMockTemplateTemp[ActionTypes.GET_VALUEASSESS_VALUE_REPORT] = {
    status: 'success',
    result: {
        report:{
            advantage:[
                {
                    resultDimName:"美的追求",
                    resultDimType:"001",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"内涵",
                            introductionValue:"工作的目的和价值，在于能不断追求美得东西，得到美得享受，增加艺术的气氛。"
                        },
                        {
                            introductionID:"002",
                            introductionName:"职业发展建议",
                            introductionValue:"广告设计，服装设计"
                        }
                    ]
                },
                {
                    resultDimName:"智力刺激",
                    resultDimType:"002",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"内涵",
                            introductionValue:"工作的目的和价值，在于能不断进行智力的操作，动脑思考，以及不断探索新事物。"
                        },
                        {
                            introductionID:"002",
                            introductionName:"职业发展建议",
                            introductionValue:"金融，教育培训"
                        }
                    ]
                },
                {
                    resultDimName:"经济报酬",
                    resultDimType:"003",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"内涵",
                            introductionValue:"工作的目的和价值，在于获得优厚的报酬。工作的目的和价值，在于获得优厚的报酬。"
                        },
                        {
                            introductionID:"002",
                            introductionName:"职业发展建议",
                            introductionValue:"销售，培训师，金融从业人员"
                        }
                    ]
                }
            ]
        }
    },
};

export var ValueAssessMockTemplate = ValueAssessMockTemplateTemp;