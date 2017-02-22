
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
                    majorCategoryName: "哲学"
                },
                {
                    majorCategoryID: "02",
                    majorCategoryName: "经济学"
                }
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
                    subMajorMLName: "哲学"
                },
                {
                    subMajorMLID: "010102",
                    subMajorMLName: "逻辑学"
                },
                {
                    subMajorMLID: "010103",
                    subMajorMLName: "宗教学"
                },
                {
                    subMajorMLID: "010104",
                    subMajorMLName: "伦理学"
                }
            ],
            "0201": [
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
            ],
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
                introductionKey:"授予学位",
                introductionValue:"哲学学士",
                introductionType:"1",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                introductionKey:"修学年限",
                introductionValue:"四年",
                introductionType:"2",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                introductionKey:"专业解读",
                introductionValue:"哲学实用性若但稀少的专业，经常讲物质决定意识。哲学是一门“爱智”学科，哲学是对普遍而基本的问题的研究，这些问题多与实在、存在、知识、价值、理性、心灵、语言、思想等有关。",
                introductionType:"3",//1 中间 2 右边 3 tab
            },
            {
                introductionID:"",
                introductionKey:"核心教程",
                introductionValue:"哲学概论  马克思主义哲学原理  中国哲学史  西方哲学史  科学技术哲学  伦理学  宗教学  美学  逻辑学  心理学  中外哲学原著导读等。",
                introductionType:"3",//1 中间 2 右边  3 tab
            },
            {
                introductionID:"",
                introductionKey:"专业排名",
                introductionValue:[
                    {
                        collegeName:"北京大学",
                        rank:"A++"
                    },
                    {
                        collegeName:"中国人民大学",
                        rank:"A++"
                    },
                    {
                        collegeName:"复旦大学",
                        rank:"A+"
                    }
                ],
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