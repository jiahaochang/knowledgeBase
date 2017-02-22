import * as ActionTypes from '../../../actions/AssessCenter/MIAssess/MIAssessActionTypes'

let MIAssessMockTemplateTemp = {};

MIAssessMockTemplateTemp[ActionTypes.GET_MIASSESS_QUIZZES] = {
    status: "success",
    quizzes: [
        {
            questionNo: 1,
            questionText: "我书面或口头表达时词汇丰富",
            answerOptions: [
                {
                    answerNo: 1,
                    answerText: "完全符合"
                },
                {
                    answerNo: 2,
                    answerText: "大致符合"
                },
                {
                    answerNo: 3,
                    answerText: "部分符合"
                },
                {
                    answerNo: 4,
                    answerText: "小部分符合"
                },
                {
                    answerNo: 5,
                    answerText: "全完不符"
                },
            ]
        },
        {
            questionNo: 2,
            questionText: "对科学新知识很有兴趣，喜欢实验各种事物",
            answerOptions: [
                {
                    answerNo: 1,
                    answerText: "完全符合"
                },
                {
                    answerNo: 2,
                    answerText: "大致符合"
                },
                {
                    answerNo: 3,
                    answerText: "部分符合"
                },
                {
                    answerNo: 4,
                    answerText: "小部分符合"
                },
                {
                    answerNo: 5,
                    answerText: "全完不符"
                },
            ]
        },
        {
            questionNo: 3,
            questionText: "喜欢实验各种事物",
            answerOptions: [
                {
                    answerNo: 1,
                    answerText: "完全符合"
                },
                {
                    answerNo: 2,
                    answerText: "大致符合"
                },
                {
                    answerNo: 3,
                    answerText: "部分符合"
                },
                {
                    answerNo: 4,
                    answerText: "小部分符合"
                },
                {
                    answerNo: 5,
                    answerText: "全完不符"
                },
            ]
        },
        {
            questionNo: 4,
            questionText: "在希腊神话中，蛇魔女梅杜莎看守的金羊皮如果被你所获，你会把它放在~",
            answerOptions: [
                {
                    answerNo: 1,
                    answerText: "完全符合"
                },
                {
                    answerNo: 2,
                    answerText: "大致符合"
                },
                {
                    answerNo: 3,
                    answerText: "部分符合"
                },
                {
                    answerNo: 4,
                    answerText: "小部分符合"
                },
                {
                    answerNo: 5,
                    answerText: "全完不符"
                },
            ]
        },
        {
            questionNo: 5,
            questionText: "走进流行的时尚餐厅，奶油螃蟹、清蒸螃蟹、咖喱螃蟹，你最想要吃哪一道？",
            answerOptions: [
                {
                    answerNo: 1,
                    answerText: "完全符合"
                },
                {
                    answerNo: 2,
                    answerText: "大致符合"
                },
                {
                    answerNo: 3,
                    answerText: "部分符合"
                },
                {
                    answerNo: 4,
                    answerText: "小部分符合"
                },
                {
                    answerNo: 5,
                    answerText: "全完不符"
                },
            ]
        }
    ]
};

var MIAssessResult = {
    MIAssessAllTypeScores:[
        {
            MITypeName:"",
            score:""
        }
    ]
};

var MIAssessRank = {
    MIAssessRank:[
        {
            MITypeName:"",
            MITypeID:"",
            introductions:[
                {
                    introductionKey:"",
                    introductionValue:"",
                }
            ]
        }
    ]
};

//提交MI测试填写的答案
MIAssessMockTemplateTemp[ActionTypes.SUBMIT_MIASSESS_ANSWERS] = {
    status: "success",
    result:{},
}

//获取MI测试是否完成的状态
MIAssessMockTemplateTemp[ActionTypes.GET_MIASSESS_MIASSWSSFINISHSTATE] = {
    status: "success",
    result:{
        isMIAssessFinished:false,
    }
}

//MI测试引导页面的介绍
MIAssessMockTemplateTemp[ActionTypes.GET_MIASSESS_INTRODUCTION] = {
    status: 'success',
    result: {
        MIIntroduction:{
            MIIntroduction:"多元智能量表是基于美国哈佛大学心理学家加德纳（Howard Gardner）于1983年提出的多元智能理论，" +
            "针对中国中学生的特点而制定开发，能够帮助中学生发现自身的优势潜能，了解各项潜能的培训方法，并了解与各项潜能" +
            "相匹配的职业和专业。\n" +
            "测验的主要目的是帮助同学们深入了解自己的优势智能，为未来的职业发展提供重要参考。请根据自己的实际情况，判断下列题目" +
            "描述与你自身特点的复合程度，并从5个选项中（完全符合、大致符合、部分符合、小部分符合、完全不符合）选择一个。"
        }
    },
};

MIAssessMockTemplateTemp[ActionTypes.GET_MIASSESS_MI_REPORT] = {
    status: 'success',
    result: {
        //没有则不传
        dimScores:[
            {
                dimType:"001",
                dimName:"逻辑-数理智能",
                score:"100",
                totalScore:"100"
            },
            {
                dimType:"002",
                dimName:"身体-动觉智能",
                score:"90",
                totalScore:"100"
            },
            {
                dimType:"003",
                dimName:"视觉-空间智能",
                score:"50",
                totalScore:"100"
            },
            {
                dimType:"004",
                dimName:"音乐-节奏智能",
                score:"60",
                totalScore:"100"
            },
            {
                dimType:"005",
                dimName:"人际-交往智能",
                score:"60",
                totalScore:"100"
            },
            {
                dimType:"006",
                dimName:"自知-内省智能",
                score:"70",
                totalScore:"100"
            },
            {
                dimType:"007",
                dimName:"自然-观察智能",
                score:"80",
                totalScore:"100"
            },
            {
                dimType:"008",
                dimName:"言语-语言智能",
                score:"40",
                totalScore:"100"
            },
        ],
        report:{
            //优势结果，排名靠前的结果
            advantage:[
                {
                    resultDimType:"", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"逻辑-数理智能",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"内涵",
                            introductionValue:"有效地计算、测量、推理、归纳、分类，并进行复杂数学运算的能力"
                        },
                        {
                            introductionID:"002",
                            introductionName:"优势表现",
                            introductionValue:"数学逻辑智能强的人，擅长提出问题并执行试验以寻求答案；善于寻找事物的规律及逻辑顺序，" +
                            "以及在他人的言语或行为中寻找逻辑缺陷；对可被测量、归类、分析的事物比较容易接受。在学校里，他们比较喜欢数学或者科学类" +
                            "的课程，对科学的发展新发现有兴趣，擅长分析、归纳和解决问题。"
                        },
                        {
                            introductionID:"003",
                            introductionName:"相关职业",
                            introductionValue:"作家、演说家、记者、编辑、节目主持人、律师、政治活动家"
                        },
                    ]
                },
                {
                    resultDimType:"", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"自然-观察智能",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"内涵",
                            introductionValue:"有效地计算、测量、推理、归纳、分类，并进行复杂数学运算的能力"
                        },
                        {
                            introductionID:"002",
                            introductionName:"优势表现",
                            introductionValue:"数学逻辑智能强的人，擅长提出问题并执行试验以寻求答案；善于寻找事物的规律及逻辑顺序，" +
                            "以及在他人的言语或行为中寻找逻辑缺陷；对可被测量、归类、分析的事物比较容易接受。在学校里，他们比较喜欢数学或者科学类" +
                            "的课程，对科学的发展新发现有兴趣，擅长分析、归纳和解决问题。"
                        },
                        {
                            introductionID:"003",
                            introductionName:"相关职业",
                            introductionValue:"作家、演说家、记者、编辑、节目主持人、律师、政治活动家"
                        },
                    ]
                },
                {
                    resultDimType:"", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"自知-内省智能",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"内涵",
                            introductionValue:"有效地计算、测量、推理、归纳、分类，并进行复杂数学运算的能力"
                        },
                        {
                            introductionID:"002",
                            introductionName:"优势表现",
                            introductionValue:"数学逻辑智能强的人，擅长提出问题并执行试验以寻求答案；善于寻找事物的规律及逻辑顺序，" +
                            "以及在他人的言语或行为中寻找逻辑缺陷；对可被测量、归类、分析的事物比较容易接受。在学校里，他们比较喜欢数学或者科学类" +
                            "的课程，对科学的发展新发现有兴趣，擅长分析、归纳和解决问题。"
                        },
                        {
                            introductionID:"003",
                            introductionName:"相关职业",
                            introductionValue:"作家、演说家、记者、编辑、节目主持人、律师、政治活动家"
                        },
                    ]
                },
            ],
            //没有则不传，目前MI多元智能测试需要
            disadvantage:[
                {
                    resultDimType:"", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"言语-语言智能",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"提高方法",
                            introductionValue:"写故事、讲故事、做读书笔记、写心得、教别人、制订提纲、列清单、参加朗诵比赛、演讲比赛、担任博物馆讲解员、玩文字游戏等"
                        }
                    ]
                },
                {
                    resultDimType:"", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"音乐-节奏智能",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"提高方法",
                            introductionValue:"有效地计算写故事、讲故事、做读书笔记、写心得、教别人、制订提纲、列清单、参加朗诵比赛、演讲比赛、担任博物馆讲解员、玩文字游戏等"
                        }
                    ]
                }
            ]
        },
    },
};

export var MIAssessMockTemplate = MIAssessMockTemplateTemp;

