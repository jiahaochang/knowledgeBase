"use strict";

import * as assessCenterActionTypes from '../../../actions/AssessCenter/AssessCenterActionTypes'

let assessCenterMockTemplateTemp = {};

//获取MBTI测试的结果
assessCenterMockTemplateTemp[assessCenterActionTypes.GET_ASSESSCENTER_MBTI_REPORT] = {
    status: 'success',
    result:{
        //没有则不传
        dimScores:[
            {
                dimType:"IE",
                dimName:"内倾-外倾",

                //MBTI处需要显示两个维度，如果一个维度只传上面的
                displayDim:[
                    //数组中第一个对应0分
                    {
                        dimType:"I",
                        dimName:"内倾",
                    },
                    {
                        dimType:"E",
                        dimName:"外倾",
                    }
                ],
                score:"7",
                totalScore:"16"
            },
            {
                dimType:"NS",
                dimName:"直觉-实感",

                //MBTI处需要显示两个维度，如果一个维度只传上面的
                displayDim:[
                    {
                        dimType:"N",
                        dimName:"直觉",
                    },
                    {
                        dimType:"S",
                        dimName:"实感",
                    }
                ],
                score:"10",
                totalScore:"16"
            },
            {
                dimType:"FT",
                dimName:"情感-思考",

                //MBTI处需要显示两个维度，如果一个维度只传上面的
                displayDim:[
                    {
                        dimType:"F",
                        dimName:"情感",
                    },
                    {
                        dimType:"T",
                        dimName:"思考",
                    }
                ],
                score:"10",
                totalScore:"16"
            },
            {
                dimType:"PJ",
                dimName:"知觉-判断",

                //MBTI处需要显示两个维度，如果一个维度只传上面的
                displayDim:[
                    {
                        dimType:"P",
                        dimName:"知觉",
                    },
                    {
                        dimType:"J",
                        dimName:"判断",
                    }
                ],
                score:"11",
                totalScore:"16"
            }
        ],
        report:{
            //优势结果，排名靠前的结果
            advantage:[
                {
                    resultDimType:"ESFP", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"表演家",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"个性特征描述",
                            introductionValue:"你富有人情味，兴趣更多地集中在有关人的领域；你在人际中常常表现出机敏，令人感到轻松，友好；" +
                            "善于对人进行评估，容易很快了解到他人的优点与缺点；你可能对美有独特的个人感受力，容易表现出品味和艺术鉴赏力。"
                        },
                        {
                            introductionID:"002",
                            introductionName:"适合的职业",
                            introductionValue:"公共关系专员，秘书，演员，舞蹈家，销售，运动员，幼儿教师，乘务员，协调员，家庭健康社工等。"
                        },
                        {
                            introductionID:"003",
                            introductionName:"专业选择建议",
                            introductionValue:"儿童教育，艺术，市场营销，体育，行政管理，护理，戏剧表演类"
                        },
                        {
                            introductionID:"004",
                            introductionName:"典型职业",
                            introductionValue:"表演者"
                        },
                    ]
                }
            ],
            //没有则不传，目前MI多元智能测试需要
            disadvantage:[

            ]
        }
    }
};

//获取测试的结果
assessCenterMockTemplateTemp[assessCenterActionTypes.GET_ASSESSCENTER_HOLLAND_REPORT] = {
    status: 'success',
    result:{
        //没有则不传
        dimScores:[
            {
                dimType:"I",
                dimName:"抗挫",
                score:"65",
                totalScore:"100"
            },
            {
                dimType:"A",
                dimName:"人际",
                score:"58",
                totalScore:"100"
            },
            {
                dimType:"S",
                dimName:"头脑",
                score:"81",
                totalScore:"100"
            },
            {
                dimType:"E",
                dimName:"运动",
                score:"48",
                totalScore:"100"
            },
            {
                dimType:"C",
                dimName:"学习",
                score:"75",
                totalScore:"100"
            },
            {
                dimType:"R",
                dimName:"认知",
                score:"50",
                totalScore:"100"
            }
        ],
        report:{
            //优势结果，排名靠前的结果
            advantage:[
                {
                    resultDimType:"A",
                    resultDimName:"抗挫",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"特征描述",
                            introductionValue:"1234567899"
                        },
                        {
                            introductionID:"002",
                            introductionName:"培养方法",
                            introductionValue:"6666666666666666。"
                        }
                    ]
                },
                {
                    resultDimType:"S",
                    resultDimName:"学习",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"特征描述",
                            introductionValue:"学习能力很强大"
                        },
                        {
                            introductionID:"002",
                            introductionName:"加强方法",
                            introductionValue:"666666"
                        }
                    ]
                },
                {
                    resultDimType:"I",
                    resultDimName:"头脑",

                    introductions:[
                        {
                            introductionID:"001",
                            introductionName:"特征描述",
                            introductionValue:"I型的人有比较明显的科研倾向，重视科学研究，喜欢对各种现象进行观察、分析和推理，乐于进行系统和创造性"
                        },
                        {
                            introductionID:"002",
                            introductionName:"加强方法",
                            introductionValue:"6666666666666666666666666666"
                        }
                    ]
                }
            ],
            //没有则不传，目前MI多元智能测试需要
            disadvantage:[

            ]
        }
    }
};

var postData = {};
postData = {
    MIAnswers:[
        {
            questionID:"",
            answerID:""
        }
    ]
};

/*
assessCenterMockTemplateTemp[assessCenterActionTypes.SUBMIT_ASSESSCENTER_MI_ANSWERS] = {
    status: 'success',
    result: {},
};
*/

postData = {
    valueAnswers:[
        {
            valueTypeID:"",
            valueTypeName:"",
            valueTypeDesc:""
        }
    ]
};
assessCenterMockTemplateTemp[assessCenterActionTypes.SUBMIT_ASSESSCENTER_VALUE_ANSWERS] = {
    status: 'success',
    result: {
    },
};

var MBTIResultResponse = {
    status:"success",
    result:{
        //没有则不传
        dimScores:[
            {
                dimType:"IE",
                dimName:"外倾-内倾",

                //MBTI处需要显示两个维度，如果一个维度只传上面的
                displayDim:[
                    {
                        dimType:"I",
                        dimName:"内倾",
                    },
                    {
                        dimType:"E",
                        dimName:"外倾",
                    }
                ],
                score:"",
                totalScore:""
            }
        ],
        report:{
            //优势结果，排名靠前的结果
            advantage:[
                {
                    resultDimType:"ESFP", //此处维度可能与上面分数中的维度不一致，例如MBTI
                    resultDimName:"表演家",

                    introductions:[
                        {
                            introductionID:"002",
                            introductionName:"职业发展建议",
                            introductionValue:"销售，培训师，金融从业人员"
                        }
                    ]
                }
            ],
            //没有则不传，目前MI多元智能测试需要
            disadvantage:[

            ]
        }
    }
};


var HollandResultResponse = {
    status:"success",
    result:{

    }
};


export var assessCenterMockTemplate = assessCenterMockTemplateTemp;