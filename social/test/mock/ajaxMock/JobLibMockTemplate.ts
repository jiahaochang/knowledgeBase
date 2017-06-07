"use strict";
import * as jobLibActionTypes from '../../../actions/JobLib/JobLibActionTypes'

let jobLibMockTemplateTemp = {};

jobLibMockTemplateTemp[jobLibActionTypes.GET_JOBLIB_JOBLIB] = {
    status: 'success',
    result: {
        jobCount:200,
        jobCategory:[
            {
                jobCategoryID: "10",
                jobCategoryName:"汤剂"
            },
            {
                jobCategoryID: "11",
                jobCategoryName:"丸剂"
            },
            {
                jobCategoryID: "12",
                jobCategoryName:"散剂"
            },
            {
                jobCategoryID: "13",
                jobCategoryName:"片剂"
            },
            {
                jobCategoryID: "14",
                jobCategoryName:"酒剂"
            }
            ,
            {
                jobCategoryID: "15",
                jobCategoryName:"冲剂"
            }
            ,
            {
                jobCategoryID: "16",
                jobCategoryName:"糖浆剂"
            }
            ,
            {
                jobCategoryID: "17",
                jobCategoryName:"口服液"
            }
            ,
            {
                jobCategoryID: "18",
                jobCategoryName:"注射液"
            }
        ],
        subJobCategoryMap:{
            10:[
                {
                    subJobCategoryID:"1010",
                    subJobCategoryName:"荆防败毒散"
                },
                {
                    subJobCategoryID:"1011",
                    subJobCategoryName:"小青龙汤"
                },
                {
                    subJobCategoryID:"1012",
                    subJobCategoryName:"孟婆汤"
                }
            ],
            11:[
                {
                    subJobCategoryID:"1110",
                    subJobCategoryName:"大力丸"
                },
                {
                    subJobCategoryID:"1111",
                    subJobCategoryName:"强肾丸"
                },
                {
                    subJobCategoryID:"1112",
                    subJobCategoryName:"无敌丸"
                }
            ],
            12:[
                {
                    subJobCategoryID:"1210",
                    subJobCategoryName:"清风散"
                },
                {
                    subJobCategoryID:"1211",
                    subJobCategoryName:"解毒散"
                },
                {
                    subJobCategoryID:"1212",
                    subJobCategoryName:"金身散"
                }
            ],
        13:[
            {
                subJobCategoryID:"1210",
                subJobCategoryName:"蓝药片"
            },
            {
                subJobCategoryID:"1211",
                subJobCategoryName:"黄药片"
            },
            {
                subJobCategoryID:"1212",
                subJobCategoryName:"绿药片"
            }
        ]
        },

    },
};

var postData = {};
postData = {
    subJobCategoryID: "1010"
};
jobLibMockTemplateTemp[jobLibActionTypes.GET_JOBLIB_JOBINTRODUCTION] = {
    status:"success",
    result:{
        introduction:[
            {
                introductionID:"1",
                introductionKey:"组成",
                introductionValue:"荆芥9g，防风9g，羌活9g，独活9g，柴胡9g，甘草3g",
            },
            {
                introductionID:"2",
                introductionKey:"功效",
                introductionValue:"发汗散寒，祛风除湿",
            },
            {
                introductionID:"3",
                introductionKey:"主治",
                introductionValue:"外感风寒挟湿。症见恶寒发热，头痛，肢体酸痛，无汗，鼻塞声重，咳嗽有痰，或胸膈痞闷，舌苔白，脉浮。",
            }
            ,
            {
                introductionID:"4",
                introductionKey:"运用",
                introductionValue:"(1)本方常用于治疗普通感冒、流行性感冒、支气管炎、过敏性皮炎、荨麻疹、湿疹及皮肤瘙痒等属于外感风寒挟湿者。(2)若兼有咽喉肿痛里热证，去独活，加银花、连翘、板蓝根等以清热解毒；若用于风毒瘾疹皮肤瘙痒症，可加蝉蜕、苦参以疏风止痒，清热",
            }
        ]
    }
};

export var jobLibMockTemplate = jobLibMockTemplateTemp;