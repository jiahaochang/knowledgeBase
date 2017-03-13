
import * as majorLibActionTypes from '../../../actions/MajorLib/MajorLibActionTypes'

var postData = {};
let majorLibMockTemplateTemp = {};

majorLibMockTemplateTemp[majorLibActionTypes.GET_MAJORLIB_MAJORLIB] = {
    status: 'success',
    result: {
        majorType: [
            {
                majorTypeName:"本科专业",
                majorTypeID: "1",
            },
            {
                majorTypeName:"高职专业",
                majorTypeID: "2",
            }
        ],
        majorType2CategoryMap: {
            "1": [
                {
                    majorCategoryID: "01",
                    //majorCategoryName: "哲学"
                    majorCategoryName: "医案推荐"
                },
                /*{
                    majorCategoryID: "02",
                    majorCategoryName: "经济学"
                }*/
            ],
            "2": []
        },
        majorCategory2MLMap: {
            "01": [
                {
                    majorMLID: "0101",
                    majorMLName: "哲学类"
                }
            ],
            "02": [
                {
                    majorMLID: "0201",
                    majorMLName: "经济学类"
                },
                {
                    majorMLID: "0202",
                    majorMLName: "财政学类"
                },
                {
                    majorMLID: "0203",
                    majorMLName: "金融学类"
                },
                {
                    majorMLID: "0204",
                    majorMLName: "经济与贸易类"
                }
            ]
        },
        majorML2SubMajorMLMap: {
            "0101": [
                {
                    fatherMajorMLID:"0101",
                    subMajorMLID: "010101",
                    gender: "男",
                    subMajorMLName: "清热利湿、化瘀散结治疗肝癌、门静脉高压症",
                    subMajortitle:"男性患者 65岁",
                    subMajorSum:"肝癌属肝胆湿热、气血瘀滞证，治以茵陈蒿汤和甘露消毒丹加减，清热利湿、化瘀散结",
                },
                //{
                //    subMajorMLID: "010102",
                //    gender: "女",
                //    subMajorMLName: "清化湿热、疏肝和胃治疗十二指肠球部溃疡",
                //    subMajortitle:"女性患者 38岁",
                //    subMajorSum:"患妇产后腹痛，涩脉似枕而轻，以龙胆泻肝汤引之",
                //},
                {
                    subMajorMLID: "010102",
                    gender: "NULL",
                    subMajorMLName: "NULL",
                    subMajortitle:"NULL",
                    subMajorSum:"NULL",
                },
                {
                    subMajorMLID: "010103",
                    subMajorMLName: "NULL",
                    subMajorSum:"",
                },
                {
                    subMajorMLID: "010104",
                    subMajorMLName: "NULL",
                    subMajorSum:"",
                }
            ],
           /* "0201": [
                {
                    subMajorMLID: "020101",
                    subMajorMLName: "经济学"
                },
                {
                    subMajorMLID: "020102",
                    subMajorMLName: "能源经济"
                },
                {
                    subMajorMLID: "020103",
                    subMajorMLName: "经济统计学"
                },
                {
                    subMajorMLID: "020104",
                    subMajorMLName: "商务经济学"
                },
                {
                    subMajorMLID: "020105",
                    subMajorMLName: "国民经济管理"
                },
                {
                    subMajorMLID: "020106",
                    subMajorMLName: "资源与环境经济学"
                }
            ],
            "0202": [
                {
                    subMajorMLID: "020201",
                    subMajorMLName: "财政学"
                },
                {
                    subMajorMLID: "020202",
                    subMajorMLName: "税收学"
                }
            ],
            "0203": [
                {
                    subMajorMLID: "020301",
                    subMajorMLName: "金融学"
                },
                {
                    subMajorMLID: "020302",
                    subMajorMLName: "保险学"
                },
                {
                    subMajorMLID: "020303",
                    subMajorMLName: "投资学"
                },
                {
                    subMajorMLID: "020304",
                    subMajorMLName: "金融工程"
                }
            ],
            "0204": [
                {
                    subMajorMLID: "020401",
                    subMajorMLName: "贸易经济"
                },
                {
                    subMajorMLID: "020402",
                    subMajorMLName: "国际经济与贸易"
                }
            ], */
        }
    }
};



//本科
postData = {
    subMajorMLID: "",
    //majorType:""
};
//majorLibMockTemplateTemp[majorLibActionTypes.GET_MAJORLIB_MAJORDETAIL]
majorLibMockTemplateTemp[majorLibActionTypes.GET_MAJORLIB_MAJORDETAIL] = {
    status: 'success',
    result: {
        subMajorMLID: "010102",
        introductions:[
            {
                introductionID:"",
                //introductionKey:"授予学位",
                introductionKey:"患者年龄",
                //introductionValue:"哲学学士",
                introductionValue:"65",
                introductionGender:"男",
                introductionType:"1",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                //introductionKey:"修学年限",
                //introductionValue:"四年",
                introductionKey:"是否初诊",
                introductionValue:"是",
                introductionType:"2",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                //introductionKey:"专业解读",
                introductionKey:"提要",
                introductionValue:"肝癌属肝胆湿热、气血瘀滞证，治以茵陈蒿汤和甘露消毒丹加减，清热利湿、化瘀散结。",
                introductionType:"3",//1 中间 2 右边 3 tab
            },
            {
                introductionID:"",
                //introductionKey:"核心教程",
                introductionKey:"处方",
                introductionValue:"茵陈 30g，栀子（焦）10g，大黄15g，豆蔻10g，广藿香10g，滑石粉10g（包煎），木通8g，黄芩10g，浙贝母10g，射干10g，丹参15g，赤芍15g，川芎10g，当归10g，桃仁10g，红花10g，莪术8g，甘草6g。4剂，水煎服，一日一剂，分两次温服。。",
                introductionType:"3",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                //introductionKey:"专业排名",
                introductionKey:"按语",
                introductionValue:"一般说来，胁痛初病在气，由肝郁气滞、气机不畅而致胁痛。气为血帅，气行则血行，故气滞日久，血行不畅，其病变由气滞转为血瘀，或气滞血瘀并见。气滞日久，易于化火伤阴；因饮食所伤，肝胆湿热，所致之胁痛，日久亦可耗伤阴津，皆可致肝阴耗伤，脉络失养，而转为虚证或虚实夹杂证。",
                introductionType:"4",//1 中间 2 右边 3 tab 4 专业排名
            }
        ],



    },
};

//高职
postData = {
    subMajorMLID:""
};
//  majorLibMockTemplateTemp[majorLibActionTypes.GET_MAJORLIB_MAJORDETAIL] =
 var gao={
    status: 'success',
    result: {
        subMajorMLID: "010102",

        introductions:[
            {
                introductionID:"",
                introductionKey:"修学年限",
                introductionValue:"三年",
                introductionType:"1",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                introductionKey:"专业解读",
                introductionValue:"茶艺专业是为适应我国市场经济建设的需要，有计划地培养茶文化工作者、茶艺工作和茶企业经营管理、茶叶市场营销人才而设置的。",
                introductionType:"3",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                introductionKey:"核心课程",
                introductionValue:"中国茶文化学  中国茶俗  茶道历史   茶艺学  茶艺馆实用英语  茶企业经营与管理  茶叶保健学  茶树栽培  茶叶加工与品评  茶具鉴赏 茶艺冲泡技巧  茶艺表演与编创  消费心理学  茶叶市场营销  职业形象与社交礼仪  文学欣赏  音乐欣赏  美术欣赏  表达与沟通  英语听说（外教授课）  形体训练  古筝等。",
                introductionType:"3",//1 中间 2 右边  3 tab
            },
            {
                introductionKey:"就业前景",
                introductionValue:"1、茶艺专业学生可在全国高档茶艺馆从事茶艺师、领班、经理等岗位工作，实习实训期间综合收入不低于1500元/月；",
                introductionType:"3",//1 中间 2 右边 3 tab
            }
        ],
    }
};

export var majorLibMockTemplate = majorLibMockTemplateTemp;