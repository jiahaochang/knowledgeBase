"use strict";
import * as collegeLibActionTypes from '../../../actions/CollegeLib/CollegeLibActionTypes'

var postData = {};

let collegeLibMockTemplateTemp = {};

collegeLibMockTemplateTemp[collegeLibActionTypes.GET_COLLEGELIB_CONDITIONS] = {
    status: 'success',
    result: {
        province:[
            {
                regionName:"植物药",
                regionID:"01"
            },
            {
                regionName:"动物药",
                regionID:"02"
            },
            {
                regionName:"矿物药",
                regionID:"03"
            }
        ],
        majorType:[
            {
                majorTypeName:"解毒药",
                majorTypeID:""
            },
            {
                majorTypeName:"清热药",
                majorTypeID:""
            },
            {
                majorTypeName:"理气药",
                majorTypeID:""
            },
            {
                majorTypeName:"活血化瘀药",
                majorTypeID:""
            },
            {
                majorTypeName:"解表",
                majorTypeID:""
            },
            {
                majorTypeName:"温里药",
                majorTypeID:""
            },
            {
                majorTypeName:"祛湿药",
                majorTypeID:""
            },
        ],
        collegeLevel:[
            {
                collegeLevelName:"",
                collegeLevelID:"01"
            },
            {
                collegeLevelName:"",
                collegeLevelID:"02"
            },
            {
                collegeLevelName:"其他",
                collegeLevelID:"03"
            },
        ],
        collegeProp:[
            {
                collegePropName:"解毒药",
                collegePropID:"1"
            },
            {
                collegePropName:"清热药",
                collegePropID:"2"
            },
            {
                collegePropName:"解表药",
                collegePropID:"3"
            },
            {
                collegePropName:"温里药",
                collegePropID:"4"
            },
            {
                collegePropName:"泻下药",
                collegePropID:"5"
            },
            {
                collegePropName:"消导药",
                collegePropID:"6"
            },
            {
                collegePropName:"祛湿药",
                collegePropID:"7"
            },
            {
                collegePropName:"理气药",
                collegePropID:"8"
            },
            {
                collegePropName:"补益药",
                collegePropID:"9"
            },
            {
                collegePropName:"固涩药",
                collegePropID:"10"
            },
            {
                collegePropName:"开窍药",
                collegePropID:"11"
            },
            {
                collegePropName:"驱虫药",
                collegePropID:"12"
            },
            {
                collegePropName:"祛风湿",
                collegePropID:"13"
            },
            {
                collegePropName:"止咳药",
                collegePropID:"14"
            }
        ]
    },
};

postData = {
    filter:{
        keyword:"",//没有就不传
        regionID:[],//不限就不传
        majorTypeID:[],
        collegeLevelID:[],
        collegePropID:[],
    }
};
/*collegeLibMockTemplateTemp[collegeLibActionTypes.GET_COLLEGELIB_COLLEGELIST] = {
    status: 'success',
    result: {
        colleges:[
            {
                collegeName:"人参",
                collegeID:"01",
                logo:"/vendor/images/schools/renshen.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"安神"
                    },
                    {
                        collegeLevelName:"延年"
                    }
                ],
                masterStationCount:"22",
                doctorStationCount:"12",
                keyDisciplineCount:"10",
                favorite: false,
                hasAdmissionTeacher:false
            },
            {
                collegeName:"灵芝",
                collegeID:"02",
                logo:"/vendor/images/schools/lingzhi.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"明目"
                    },
                    {
                        collegeLevelName:"补肝"
                    }
                ],
                masterStationCount:"21",
                doctorStationCount:"10",
                keyDisciplineCount:"5",
                favorite: true,
                hasAdmissionTeacher:false
            },
            {
                collegeName:"灵芝",
                collegeID:"03",
                logo:"/vendor/images/schools/lingzhi.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"明目"
                    },
                    {
                        collegeLevelName:"补肝"
                    }
                ],
                masterStationCount:"21",
                doctorStationCount:"10",
                keyDisciplineCount:"5",
                favorite: true,
                hasAdmissionTeacher:false
            },
            {
                collegeName:"灵芝",
                collegeID:"03",
                logo:"/vendor/images/schools/lingzhi.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"明目"
                    },
                    {
                        collegeLevelName:"补肝"
                    }
                ],
                masterStationCount:"21",
                doctorStationCount:"10",
                keyDisciplineCount:"5",
                favorite: true,
                hasAdmissionTeacher:false
            },
            {
                collegeName:"灵芝",
                collegeID:"03",
                logo:"/vendor/images/schools/lingzhi.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"明目"
                    },
                    {
                        collegeLevelName:"补肝"
                    }
                ],
                masterStationCount:"21",
                doctorStationCount:"10",
                keyDisciplineCount:"5",
                favorite: true,
                hasAdmissionTeacher:false
            },
            {
                collegeName:"灵芝",
                collegeID:"03",
                logo:"/vendor/images/schools/lingzhi.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"明目"
                    },
                    {
                        collegeLevelName:"补肝"
                    }
                ],
                masterStationCount:"21",
                doctorStationCount:"10",
                keyDisciplineCount:"5",
                favorite: true,
                hasAdmissionTeacher:false
            },
            {
                collegeName:"灵芝",
                collegeID:"03",
                logo:"/vendor/images/schools/lingzhi.jpg",
                belongTo:"植物药",
                collegeLevel:[
                    {
                        collegeLevelName:"明目"
                    },
                    {
                        collegeLevelName:"补肝"
                    }
                ],
                masterStationCount:"21",
                doctorStationCount:"10",
                keyDisciplineCount:"5",
                favorite: true,
                hasAdmissionTeacher:false
            },
        ]
    },
};

postData = {
    collegeID:""
};
collegeLibMockTemplateTemp[collegeLibActionTypes.GET_COLLEGELIB_COLLEGEDETAIL] = {
    status: 'success',
    result: {
        collegeInfo:{
            collegeName: "人参",
            collegeID:"01",
            logo:"/vendor/images/schools/renshen.jpg",
            collegeLevel:[
                {
                    collegeLevelName:"安神",
                },
                {
                    collegeLevelName:"延年"
                }
            ],
            collegeEnglishName:"Panax ginseng C.A. Mey",
            province:"吉林、辽宁、黑龙江",

            image: "/vendor/images/schools/renshen.jpg",
            foundationYear:"中药",
            belongTo:"植物药",
            totalStudentCount:"播种、分株、扦插",
            academicianCount:"播种、催芽",

            keyDisciplineCount:"生晒参、白干参、红参",
            collegeProp:"美容、药用",
            masterStationCount:"253个",
            doctorStationCount:"271个"
        },

        introduction:[
            {
                introductionID:"intro",
                introductionType:"3",
                introductionKey:"药材介绍",
                introductionValue:"人参（Panax ginseng C. A. Mey）为多年生草本植物，喜阴凉，叶片无气孔和栅栏组织，无法保留水分，温度高于32度叶片会灼伤，郁闭度0.7-0.8。通常3年开花，5-6年结果，花期5-6月，果期6-9月。生长于北纬33度-48度之间的海拔数百米的以红松为主的针阔混交林或落叶阔叶林下，产于中国东北、朝鲜、韩国、日本、俄罗斯东部。人参的别称为黄参、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
            },
            {
                introductionID:"require",
                introductionType:"3",
                introductionKey:"功效作用",
                //todo
                introductionValue:[
                    {
                        majorType:"味甘、微苦、性温、平",
                        majorName:"大补元气",
                        requireSubject:"《本草汇言》",
                        subMajor:"体虚欲脱。。。"
                    }
                ]
            },
            {
                introductionID:"scoreLine",
                introductionType:"3",
                introductionKey:"药方选录",
                introductionValue:{
                    //todo
                    science:[
                        {
                            batch:"治营卫气虚",
                            collegeAdmissionLines:[
                                {
                                    year:"123",
                                    batchScore:"123",//省控线
                                    admissionScore:"123",//投档线
                                    diffWithBatchScore:"123"//线差
                                },
                            ]
                        },
                        {
                            batch:"止血后此药补之",
                            collegeAdmissionLines:[
                                {
                                    year:"",
                                    batchScore:"",//省控线
                                    admissionScore:"",//投档线
                                    diffWithBatchScore:""//线差
                                }
                            ]
                        }
                    ],
                    art:[
                        {
                            batch:"",
                            collegeAdmissionLines:[
                                {
                                    year:"",
                                    batchScore:"",//省控线
                                    admissionScore:"",//投档线
                                    diffWithBatchScore:""//线差
                                },
                            ]
                        }
                    ]
                }
            },
        ],
    }
};*/

collegeLibMockTemplateTemp[collegeLibActionTypes.GET_COLLEGELIB_COLLEGELIST] = {
    status: 'success',
    result: {
        colleges:[
            /*{
                medicinalMaterialName:"人参",
                collegeID:"1",                             //药材ID
                logo:"/vendor/images/schools/renshen.jpg",   //图片URL
                belongTo:"植物药",                          //大类名称
                typeID:"1",                                //属于哪个大类的ID
                chufangName:"生晒参、红参"
            },
            {
                medicinalMaterialName:"lingzhi",
                collegeID:"2",                             //药材ID
                logo:"/vendor/images/schools/renshen.jpg",   //图片URL
                belongTo:"植物药",                          //大类名称
                typeID:"2",                                //属于哪个大类的ID
                chufangName:"生晒参、红参"
            },
            {
                medicinalMaterialName:"人参",
                collegeID:"3",                             //药材ID
                logo:"/vendor/images/schools/renshen.jpg",   //图片URL
                belongTo:"植物药",                          //大类名称
                typeID:"3",                                //属于哪个大类的ID
                chufangName:"生晒参、红参"
            },
            {
                medicinalMaterialName:"人参",
                collegeID:"4",                             //药材ID
                logo:"/vendor/images/schools/renshen.jpg",   //图片URL
                belongTo:"植物药",                          //大类名称
                typeID:"4",                                //属于哪个大类的ID
                chufangName:"生晒参、红参"
            },
            {
                medicinalMaterialName:"人参",
                collegeID:"5",                             //药材ID
                logo:"/vendor/images/schools/renshen.jpg",   //图片URL
                belongTo:"植物药",                          //大类名称
                typeID:"5",                                //属于哪个大类的ID
                chufangName:"生晒参、红参"
            },*/

            {collegeID: "1", typeID: "1", medicinalMaterialName: "大黄", logo: "/vendor/images/schools/dahuang_2.jpg", belongTo: "解毒药", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n"},
            {collegeID: "2", typeID: "1", medicinalMaterialName: "生姜", logo: "/vendor/images/schools/shengjiang_1.jpg", belongTo: "解毒药", chufangName: "生姜（用新鲜者）\r\n"},
            {collegeID: "3", typeID: "1", medicinalMaterialName: "牛黄", logo: "/vendor/images/schools/niuhuang_1.jpg", belongTo: "解毒药", chufangName: "牛黄、西黄、犀黄（研粉用）\r\n"},
            {collegeID: "4", typeID: "1", medicinalMaterialName: "山慈菇", logo: "/vendor/images/schools/shancigu_1.jpg", belongTo: "解毒药", chufangName: "山慈菇、山茨菇（洗净，晒干，切片用）\r\n"},
            {collegeID: "5", typeID: "1", medicinalMaterialName: "土茯苓", logo: "/vendor/images/schools/tufuling_1.jpg", belongTo: "解毒药", chufangName: "土茯苓（洗净，晒干，切片用）\r\n"},
            {collegeID: "6", typeID: "1", medicinalMaterialName: "射干", logo: "/vendor/images/schools/shegan_1.jpg", belongTo: "解毒药", chufangName: "射干、嫩射干（洗净，晒干，切片用）\r\n"},
            {collegeID: "7", typeID: "1", medicinalMaterialName: "山豆根", logo: "/vendor/images/schools/shandougen_1.jpg", belongTo: "解毒药", chufangName: "山豆根（洗净，晒干，切片用）\r\n"},
            {collegeID: "8", typeID: "1", medicinalMaterialName: "马勃", logo: "/vendor/images/schools/mabo_1.jpg", belongTo: "解毒药", chufangName: "轻马勃、净马勃（晒干用）\r\n"},
            {collegeID: "9", typeID: "1", medicinalMaterialName: "一枝黄花", logo: "/vendor/images/schools/yizhihuanghua_1.jpg", belongTo: "解毒药", chufangName: "一枝黄花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "10", typeID: "1", medicinalMaterialName: "马齿苋", logo: "/vendor/images/schools/machixian_1.jpg", belongTo: "解毒药", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n"},
            {collegeID: "11", typeID: "1", medicinalMaterialName: "小飞蓬", logo: "/vendor/images/schools/xiaofeipeng_1.jpg", belongTo: "解毒药", chufangName: "小飞蓬（洗净，晒干，切碎用）\r\n"},
            {collegeID: "12", typeID: "1", medicinalMaterialName: "七叶一枝花", logo: "/vendor/images/schools/qiyeyizhihua_1.jpg", belongTo: "解毒药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "13", typeID: "1", medicinalMaterialName: "七叶一枝花", logo: "/vendor/images/schools/qiyeyizhihua_1.jpg", belongTo: "解毒药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "14", typeID: "1", medicinalMaterialName: "龙葵", logo: "/vendor/images/schools/longkuigen_1.jpg", belongTo: "解毒药", chufangName: "龙葵、龙葵草（洗净，晒干，切碎用）\r\n"},
            {collegeID: "15", typeID: "1", medicinalMaterialName: "天葵子", logo: "/vendor/images/schools/tiankuizi_1.jpg", belongTo: "解毒药", chufangName: "天葵子（洗净，晒干，切碎用）\r\n"},
            {collegeID: "16", typeID: "2", medicinalMaterialName: "大黄", logo: "/vendor/images/schools/dahuang_2.jpg", belongTo: "清热药", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n"},
            {collegeID: "17", typeID: "2", medicinalMaterialName: "天花粉", logo: "/vendor/images/schools/tianhuafen_1.jpg", belongTo: "清热药", chufangName: "天花粉、花粉（洗净，晒干，切碎用）\r\n"},
            {collegeID: "18", typeID: "2", medicinalMaterialName: "西瓜皮", logo: "/vendor/images/schools/xiguapi_1.jpg", belongTo: "清热药", chufangName: "西瓜皮、西瓜翠衣（洗净，晒干，切碎用）\r\n"},
            {collegeID: "19", typeID: "2", medicinalMaterialName: "牛黄", logo: "/vendor/images/schools/niuhuang_1.jpg", belongTo: "清热药", chufangName: "牛黄、西黄、犀黄（研粉用）\r\n"},
            {collegeID: "20", typeID: "2", medicinalMaterialName: "山慈菇", logo: "/vendor/images/schools/shancigu_1.jpg", belongTo: "清热药", chufangName: "山慈菇、山茨菇（洗净，晒干，切片用）\r\n"},
            {collegeID: "21", typeID: "2", medicinalMaterialName: "土茯苓", logo: "/vendor/images/schools/tufuling_1.jpg", belongTo: "清热药", chufangName: "土茯苓（洗净，晒干，切片用）\r\n"},
            {collegeID: "22", typeID: "2", medicinalMaterialName: "射干", logo: "/vendor/images/schools/shegan_1.jpg", belongTo: "清热药", chufangName: "射干、嫩射干（洗净，晒干，切片用）\r\n"},
            {collegeID: "23", typeID: "2", medicinalMaterialName: "山豆根", logo: "/vendor/images/schools/shandougen_1.jpg", belongTo: "清热药", chufangName: "山豆根（洗净，晒干，切片用）\r\n"},
            {collegeID: "24", typeID: "2", medicinalMaterialName: "马勃", logo: "/vendor/images/schools/mabo_1.jpg", belongTo: "清热药", chufangName: "轻马勃、净马勃（晒干用）\r\n"},
            {collegeID: "25", typeID: "2", medicinalMaterialName: "一枝黄花", logo: "/vendor/images/schools/yizhihuanghua_1.jpg", belongTo: "清热药", chufangName: "一枝黄花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "26", typeID: "2", medicinalMaterialName: "马齿苋", logo: "/vendor/images/schools/machixian_1.jpg", belongTo: "清热药", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n"},
            {collegeID: "27", typeID: "2", medicinalMaterialName: "小飞蓬", logo: "/vendor/images/schools/xiaofeipeng_1.jpg", belongTo: "清热药", chufangName: "小飞蓬（洗净，晒干，切碎用）\r\n"},
            {collegeID: "28", typeID: "2", medicinalMaterialName: "七叶一枝花", logo: "/vendor/images/schools/qiyeyizhihua_1.jpg", belongTo: "清热药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "29", typeID: "2", medicinalMaterialName: "七叶一枝花", logo: "/vendor/images/schools/qiyeyizhihua_1.jpg", belongTo: "清热药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "30", typeID: "2", medicinalMaterialName: "龙葵", logo: "/vendor/images/schools/longkuigen_1.jpg", belongTo: "清热药", chufangName: "龙葵、龙葵草（洗净，晒干，切碎用）\r\n"},
            {collegeID: "31", typeID: "2", medicinalMaterialName: "天葵子", logo: "/vendor/images/schools/tiankuizi_1.jpg", belongTo: "清热药", chufangName: "天葵子（洗净，晒干，切碎用）\r\n"},
            {collegeID: "32", typeID: "2", medicinalMaterialName: "龙胆草", logo: "/vendor/images/schools/longdan_1.jpg", belongTo: "清热药", chufangName: "龙胆草（洗净，晒干，切碎用）\r\n"},
            {collegeID: "33", typeID: "2", medicinalMaterialName: "天麻", logo: "/vendor/images/schools/tianma_1.jpg", belongTo: "清热药", chufangName: "天麻、明天麻（洗净，晒干，切片用）、煨天麻（用麸皮同炒后应用）\r\n"},
            {collegeID: "34", typeID: "2", medicinalMaterialName: "钩藤", logo: "/vendor/images/schools/gouteng_1.jpg", belongTo: "清热药", chufangName: "钩藤、嫩钩藤、嫩双钩、嫩钩钩（晒干用）\r\n"},
            {collegeID: "35", typeID: "3", medicinalMaterialName: "生姜", logo: "/vendor/images/schools/shengjiang_1.jpg", belongTo: "解表药", chufangName: "生姜（用新鲜者）\r\n"},
            {collegeID: "36", typeID: "3", medicinalMaterialName: "柴胡", logo: "/vendor/images/schools/chaihu_1.jpg", belongTo: "解表药", chufangName: "春柴胡、软柴胡、南柴胡、细柴胡（生用，用茎叶者）\r\n硬柴胡、北柴胡、秋柴胡（生用，用根者）\r\n鳖血拌柴胡（用鳖血、陈酒拌匀，主要用于虚热病症。）\r\n"},
            {collegeID: "37", typeID: "4", medicinalMaterialName: "五加皮", logo: "/vendor/images/schools/wujiapi_1.jpg", belongTo: "补益药", chufangName: "五加皮、南五加皮（洗净，晒干，切碎用）\r\n"},
            {collegeID: "38", typeID: "4", medicinalMaterialName: "木香", logo: "/vendor/images/schools/muxiang_1.jpg", belongTo: "补益药", chufangName: "木香、广木香（生用行气止痛）、煨木香、炙木香、炒木香（麸皮拌炒用以止泻）\r\n"},
            {collegeID: "39", typeID: "5", medicinalMaterialName: "大黄", logo: "/vendor/images/schools/dahuang_2.jpg", belongTo: "驱虫药", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n"},
            {collegeID: "40", typeID: "5", medicinalMaterialName: "山慈菇", logo: "/vendor/images/schools/shancigu_1.jpg", belongTo: "驱虫药", chufangName: "山慈菇、山茨菇（洗净，晒干，切片用）\r\n"},
            {collegeID: "41", typeID: "5", medicinalMaterialName: "七叶一枝花", logo: "/vendor/images/schools/qiyeyizhihua_1.jpg", belongTo: "驱虫药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "42", typeID: "5", medicinalMaterialName: "七叶一枝花", logo: "/vendor/images/schools/qiyeyizhihua_1.jpg", belongTo: "驱虫药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n"},
            {collegeID: "43", typeID: "5", medicinalMaterialName: "九香虫", logo: "/vendor/images/schools/jiuxiangchong_1.jpg", belongTo: "驱虫药", chufangName: "九香虫、灸九香虫（炒微焦用）\r\n"},
            {collegeID: "44", typeID: "5", medicinalMaterialName: "川楝子", logo: "/vendor/images/schools/chuanlianzi_1.jpg", belongTo: "驱虫药", chufangName: "川楝子金铃子灸川楝子（清炒至微焦用）\r\n"},
            {collegeID: "45", typeID: "5", medicinalMaterialName: "马鞭草", logo: "/vendor/images/schools/mabiancao_1.jpg", belongTo: "驱虫药", chufangName: "马鞭草（洗净，晒干，切碎用）\r\n"},
            {collegeID: "46", typeID: "5", medicinalMaterialName: "槟榔", logo: "/vendor/images/schools/binglang_1.jpg", belongTo: "驱虫药", chufangName: "槟榔、大槟榔、大腹子（晒干，打碎用）\r\n"},
            {collegeID: "47", typeID: "5", medicinalMaterialName: "钟乳石", logo: "/vendor/images/schools/zhongrushi_1.jpg", belongTo: "驱虫药", chufangName: "钟乳石、滴乳石、石钟乳（生用或?用）\r\n"},
            {collegeID: "48", typeID: "5", medicinalMaterialName: "五倍子", logo: "/vendor/images/schools/wubeizi_1.jpg", belongTo: "驱虫药", chufangName: "五倍子（煮死内部寄生虫后晒干应用）。\r\n"},
            {collegeID: "49", typeID: "5", medicinalMaterialName: "松香", logo: "/vendor/images/schools/songxiang_1.jpg", belongTo: "驱虫药", chufangName: "松香\r\n"},
            {collegeID: "50", typeID: "6", medicinalMaterialName: "大黄", logo: "/vendor/images/schools/dahuang_2.jpg", belongTo: "风湿", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n"},
            {collegeID: "51", typeID: "6", medicinalMaterialName: "茯苓", logo: "/vendor/images/schools/fuling_1.jpg", belongTo: "风湿", chufangName: "1.茯苓、白茯苓、云茯苓、云苓（去皮，蒸熟，切片，晒干用。偏于健脾宁心）\r\n2.赤茯苓、赤苓（去皮，取菌核的淡红色部份，蒸透切片，或辗碎用。偏于渗湿泄热）\r\n3.朱茯苓、辰茯苓、朱砂拌茯苓（取白茯苓净片，用朱砂2％拌匀后用。可增强宁心安神的作用。）\r\n"},
            {collegeID: "52", typeID: "6", medicinalMaterialName: "生姜", logo: "/vendor/images/schools/shengjiang_1.jpg", belongTo: "风湿", chufangName: "生姜（用新鲜者）\r\n"},
            {collegeID: "53", typeID: "6", medicinalMaterialName: "土茯苓", logo: "/vendor/images/schools/tufuling_1.jpg", belongTo: "风湿", chufangName: "土茯苓（洗净，晒干，切片用）\r\n"},
            {collegeID: "54", typeID: "6", medicinalMaterialName: "马齿苋", logo: "/vendor/images/schools/machixian_1.jpg", belongTo: "风湿", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n"},
            {collegeID: "55", typeID: "6", medicinalMaterialName: "龙胆草", logo: "/vendor/images/schools/longdan_1.jpg", belongTo: "风湿", chufangName: "龙胆草（洗净，晒干，切碎用）\r\n"},
            {collegeID: "56", typeID: "6", medicinalMaterialName: "威灵仙", logo: "/vendor/images/schools/weilingxian_1.jpg", belongTo: "风湿", chufangName: "威灵仙（洗净，晒干，切碎用）\r\n"},
            {collegeID: "57", typeID: "6", medicinalMaterialName: "五加皮", logo: "/vendor/images/schools/wujiapi_1.jpg", belongTo: "风湿", chufangName: "五加皮、南五加皮（洗净，晒干，切碎用）\r\n"},
            {collegeID: "58", typeID: "6", medicinalMaterialName: "千年健", logo: "/vendor/images/schools/qiannianjian_1.jpg", belongTo: "风湿", chufangName: "千年健（洗净，晒干，切碎用）\r\n"},
            {collegeID: "59", typeID: "6", medicinalMaterialName: "木瓜", logo: "/vendor/images/schools/mugua_1.jpg", belongTo: "风湿", chufangName: "木瓜宣木瓜（洗净，晒干，切碎用）\r\n"},
            {collegeID: "60", typeID: "6", medicinalMaterialName: "木香", logo: "/vendor/images/schools/muxiang_1.jpg", belongTo: "风湿", chufangName: "木香、广木香（生用行气止痛）、煨木香、炙木香、炒木香（麸皮拌炒用以止泻）\r\n"},
            {collegeID: "61", typeID: "6", medicinalMaterialName: "大腹皮", logo: "/vendor/images/schools/dafupi_1.jpg", belongTo: "风湿", chufangName: "大腹皮、槟榔皮（洗净，晒干用）\r\n"},
            {collegeID: "62", typeID: "6", medicinalMaterialName: "川楝子", logo: "/vendor/images/schools/chuanlianzi_1.jpg", belongTo: "风湿", chufangName: "川楝子金铃子灸川楝子（清炒至微焦用）\r\n"},
            {collegeID: "63", typeID: "6", medicinalMaterialName: "丁香", logo: "/vendor/images/schools/dingxiang_1.jpg", belongTo: "风湿", chufangName: "丁香公丁香（生用，花蕾）母丁香鸡舌香（生用，果实）\r\n"},
            {collegeID: "64", typeID: "6", medicinalMaterialName: "川芎", logo: "/vendor/images/schools/chuanxiong_1.jpg", belongTo: "风湿", chufangName: "川芎、抚芎（洗净，晒干，切碎用）、灸川芎（清炒至微焦）\r\n"},
            {collegeID: "65", typeID: "6", medicinalMaterialName: "马鞭草", logo: "/vendor/images/schools/mabiancao_1.jpg", belongTo: "风湿", chufangName: "马鞭草（洗净，晒干，切碎用）\r\n"},
            {collegeID: "66", typeID: "6", medicinalMaterialName: "干姜", logo: "/vendor/images/schools/ganjiang_1.jpg", belongTo: "风湿", chufangName: "淡干姜、均姜、泡姜（取生姜用沸水泡浸，干燥后应用。）\r\n"},
            {collegeID: "67", typeID: "6", medicinalMaterialName: "丁香", logo: "/vendor/images/schools/dingxiang_1.jpg", belongTo: "风湿", chufangName: "丁香、公丁香（药用花蕾，功效较佳，晒干用。）、母丁香（药用果实，功效较弱，晒干用。）\r\n"},
            {collegeID: "68", typeID: "6", medicinalMaterialName: "天麻", logo: "/vendor/images/schools/tianma_1.jpg", belongTo: "风湿", chufangName: "天麻、明天麻（洗净，晒干，切片用）、煨天麻（用麸皮同炒后应用）\r\n"},
            {collegeID: "69", typeID: "6", medicinalMaterialName: "五倍子", logo: "/vendor/images/schools/wubeizi_1.jpg", belongTo: "风湿", chufangName: "五倍子（煮死内部寄生虫后晒干应用）。\r\n"},
            {collegeID: "70", typeID: "6", medicinalMaterialName: "松香", logo: "/vendor/images/schools/songxiang_1.jpg", belongTo: "风湿", chufangName: "松香\r\n"},
            {collegeID: "71", typeID: "7", medicinalMaterialName: "茯苓", logo: "/vendor/images/schools/fuling_1.jpg", belongTo: "止咳药", chufangName: "1.茯苓、白茯苓、云茯苓、云苓（去皮，蒸熟，切片，晒干用。偏于健脾宁心）\r\n2.赤茯苓、赤苓（去皮，取菌核的淡红色部份，蒸透切片，或辗碎用。偏于渗湿泄热）\r\n3.朱茯苓、辰茯苓、朱砂拌茯苓（取白茯苓净片，用朱砂2％拌匀后用。可增强宁心安神的作用。）\r\n"},
            {collegeID: "72", typeID: "7", medicinalMaterialName: "生姜", logo: "/vendor/images/schools/shengjiang_1.jpg", belongTo: "止咳药", chufangName: "生姜（用新鲜者）\r\n"},
            {collegeID: "73", typeID: "7", medicinalMaterialName: "天花粉", logo: "/vendor/images/schools/tianhuafen_1.jpg", belongTo: "止咳药", chufangName: "天花粉、花粉（洗净，晒干，切碎用）\r\n"},
            {collegeID: "74", typeID: "7", medicinalMaterialName: "射干", logo: "/vendor/images/schools/shegan_1.jpg", belongTo: "止咳药", chufangName: "射干、嫩射干（洗净，晒干，切片用）\r\n"},
            {collegeID: "75", typeID: "7", medicinalMaterialName: "山豆根", logo: "/vendor/images/schools/shandougen_1.jpg", belongTo: "止咳药", chufangName: "山豆根（洗净，晒干，切片用）\r\n"},
            {collegeID: "76", typeID: "7", medicinalMaterialName: "马勃", logo: "/vendor/images/schools/mabo_1.jpg", belongTo: "止咳药", chufangName: "轻马勃、净马勃（晒干用）\r\n"},
            {collegeID: "77", typeID: "7", medicinalMaterialName: "马齿苋", logo: "/vendor/images/schools/machixian_1.jpg", belongTo: "止咳药", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n"},
            {collegeID: "78", typeID: "7", medicinalMaterialName: "木蝴蝶", logo: "/vendor/images/schools/muhudie_1.jpg", belongTo: "止咳药", chufangName: "木蝴蝶、玉蝴蝶、千张纸（晒干用）\r\n"},
            {collegeID: "79", typeID: "7", medicinalMaterialName: "千日红", logo: "/vendor/images/schools/qianrihong_1.gif", belongTo: "止咳药", chufangName: "千年红、千日红（晒干用）\r\n"},
            {collegeID: "80", typeID: "7", medicinalMaterialName: "钟乳石", logo: "/vendor/images/schools/zhongrushi_1.jpg", belongTo: "止咳药", chufangName: "钟乳石、滴乳石、石钟乳（生用或?用）\r\n"},
            {collegeID: "81", typeID: "7", medicinalMaterialName: "干姜", logo: "/vendor/images/schools/ganjiang_1.jpg", belongTo: "止咳药", chufangName: "淡干姜、均姜、泡姜（取生姜用沸水泡浸，干燥后应用。）\r\n"},
            {collegeID: "82", typeID: "7", medicinalMaterialName: "远志", logo: "/vendor/images/schools/yuanzhi_1.jpg", belongTo: "止咳药", chufangName: "炙远志、远志肉、远志筒（用甘草汤浸泡，微火煮至汤吸尽，趁热抽去木心，再用麸皮炒黄应用。）\r\n"},
            {collegeID: "83", typeID: "7", medicinalMaterialName: "阿胶", logo: "/vendor/images/schools/ejiao_1.jpg", belongTo: "止咳药", chufangName: "阿胶、陈阿胶、驴皮胶（补血止血）。阿胶珠、蛤粉炒阿胶（用海蛤壳研粉同炒，用以润肺化痰，止咳止血）。蒲黄炒阿胶（用以止血）。\r\n"},
            {collegeID: "84", typeID: "7", medicinalMaterialName: "五倍子", logo: "/vendor/images/schools/wubeizi_1.jpg", belongTo: "止咳药", chufangName: "五倍子（煮死内部寄生虫后晒干应用）。\r\n"}

        ]
    },
};

postData = {
    collegeID:""
};
collegeLibMockTemplateTemp[collegeLibActionTypes.GET_COLLEGELIB_COLLEGEDETAIL] = {
    status: 'success',
    result: {
        introList:[
            /*{
                collegeInfo: {
                    medicinalMaterialName: "人参",
                    collegeID: "01",
                    EnglishName: "Panax ginseng C.A. Mey",            //药材的英文名或者拼音

                    image: "/vendor/images/schools/renshen.jpg",
                    belongTo: "植物药",

                    chufangName: "生晒参、红参",
                    introduction: [
                        {
                            introductionID: "clinicalApplication",
                            introductionType: "1",
                            introductionKey: "临床应用",
                            introductionValue: "通常3年开花，5-6年结果，花期5-6月，果期6-9月。" +
                            "生长于北纬33度-48度之间的海拔数百米的以红松为主的针阔混交林或落叶阔叶林下，产于中国东北、朝鲜、韩国、" +
                            "日本、俄罗斯东部。人参的别称为黄参、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "examplesOfPrescriptions",
                            introductionType: "2",
                            introductionKey: "方剂举例",
                            //todo
                            introductionValue: "产于中国东北、朝鲜、韩国、" +
                            "日本、俄罗斯东部。人参的别称为黄参、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "effect",
                            introductionType: "3",
                            introductionKey: "功效",
                            introductionValue: "是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "medicinalPart",
                            introductionType: "4",
                            introductionKey: "药用部分",
                            introductionValue: "、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "dosage",
                            introductionType: "5",
                            introductionKey: "用法用量",
                            introductionValue: "、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "anYu",
                            introductionType: "6",
                            introductionKey: "按语",
                            introductionValue: "、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                    ],
                }
            },
            {
                collegeInfo: {
                    medicinalMaterialName: "灵芝",
                    collegeID: "02",
                    EnglishName: "Panax ginseng C.A. Mey",            //药材的英文名或者拼音
                    image: "/vendor/images/schools/lingzhi.jpg",
                    belongTo: "植物药",
                    chufangName: "生晒参、红参",
                    introduction: [
                        {
                            introductionID: "clinicalApplication",
                            introductionType: "1",
                            introductionKey: "临床应用",
                            introductionValue: "通常3年开花，5-6年结果，花期5-6月，果期6-9月。" +
                            "生长于北纬33度-48度之间的海拔数百米的以红松为主的针阔混交林或落叶阔叶林下，产于中国东北、朝鲜、韩国、" +
                            "日本、俄罗斯东部。人参的别称为黄参、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "examplesOfPrescriptions",
                            introductionType: "2",
                            introductionKey: "方剂举例",
                            //todo
                            introductionValue: "产于中国东北、朝鲜、韩国、" +
                            "日本、俄罗斯东部。人参的别称为黄参、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "effect",
                            introductionType: "3",
                            introductionKey: "功效",
                            introductionValue: "是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "medicinalPart",
                            introductionType: "4",
                            introductionKey: "药用部分",
                            introductionValue: "、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "dosage",
                            introductionType: "5",
                            introductionKey: "用法用量",
                            introductionValue: "、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                        {
                            introductionID: "anYu",
                            introductionType: "6",
                            introductionKey: "按语",
                            introductionValue: "、地精、神草、百草之王，是闻名遐迩的“东北三宝”之一。"
                        },
                    ],
                }
            }*/

            {collegeInfo:{belongTo: "解毒药", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n", collegeID: "1", medicinalMaterialName: "大黄", image: "/vendor/images/schools/dahuang_2.jpg", EnglishName: "Dài Huánɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于大便燥结，积滞泻痢，以及热结便秘、壮热苔黄等症。\r\n大黄泻下通便、清除积滞，故可用于大便不通及积滞泻痢、里急后重、溏而不爽等症；又因它能苦寒泄热，荡涤肠胃积滞，对于热结便秘、高热神昏等属于实热壅滞的症候，用之可以起到清热泻火的作用。在临床应用时，本品常与芒硝、厚朴、枳实等配伍。\r\n2.用于火热亢盛、迫血上溢，以及目赤暴痛，热毒疮疖等症。\r\n大黄泻下泄热，有泻血分实热的功效，故又能用治血热妄行而上溢，如吐血、衄血；对目赤肿痛、热毒疮疖等症属于血分实热壅滞的症候，可配黄连、黄芩、丹皮、赤芍等同用。\r\n3.用于产后瘀滞腹痛，瘀血凝滞、月经不通，以及跌打损伤、瘀滞作痛等症。\r\n大黄入血分，又能破血行瘀，故可用于上述瘀血留滞的实症，在使用时须配合活血行瘀的药物，如桃仁、赤芍、红花等同用。\r\n此外，大黄又可清化湿热而用于黄疸，临床多与茵陈、山栀等药配伍应用；如将本品研末，还可作为烫伤及热毒疮疡的外敷药，具有清热解毒的作用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "大承气汤《伤寒论》：大黄、芒硝、枳实、厚朴。主治热盛便秘，腹胀满，烦躁谵语，口干，舌苔焦黄起刺，脉沉实有力者等症。\r\n大黄附子汤《金匮要略》：大黄、附子、细辛。治寒积便秘。\r\n下瘀血汤《金匮要略》：大黄、桃仁、蟅虫。治产后腹中有瘀8血而腹痛者。\r\n大黄牡丹汤《金匮要略》：大黄、牡丹皮、桃仁、芒硝、冬瓜子。治肠痈。（近年来临床上治急性阑尾炎，常用本方加败酱草、红藤、生苡仁；或用本方去冬瓜子、加红藤、瓜蒌仁、赤芍。）"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "攻积导滞，泻火凉血，行瘀通经。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.大黄又称“川军”，性寒苦泄，是一味泻火、破积、行瘀的要药，使用\r\n少量，又有健胃作用，在临床上应用较为广泛，可随配伍的不同而发挥它的特长。如配以芒硝，可攻下破积；配以附子，可温阳降浊；配以茵陈，可清化湿热；配黄芩、黄连，可泻火凉血；配黄连、槟榔，可清热导滞，用于湿热下痢、里急后重；配丹皮、赤芍、桃仁等，可活血祛瘀，用于血瘀经闭、损伤瘀血或肠痈初起等症；又如用本品少量，配合乌贼骨，可清热而制酸，治胃痛泛酸、脘部灼热等症。\r\n2.大黄除内服外，又可外敷治热毒痈肿、水火烫伤，也是取它泻火解毒的功效。\r\n3.如用本品泻下通便，煎服时应后下，或用沸开水泡汁，否则药效会减弱。\r\n4.服用大黄后，其色素会从小便或汗腺中排泄，故小便、汗液可以出现黄色。此外，哺乳妇女服用后，婴儿吮食乳汁，可能引起腹泻，因此授乳妇女不宜服用。由于本品又能活血行瘀，故妇女胎前产后及月经期间也必须慎用。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n", collegeID: "16", medicinalMaterialName: "大黄", image: "/vendor/images/schools/dahuang_2.jpg", EnglishName: "Dài Huánɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于大便燥结，积滞泻痢，以及热结便秘、壮热苔黄等症。\r\n大黄泻下通便、清除积滞，故可用于大便不通及积滞泻痢、里急后重、溏而不爽等症；又因它能苦寒泄热，荡涤肠胃积滞，对于热结便秘、高热神昏等属于实热壅滞的症候，用之可以起到清热泻火的作用。在临床应用时，本品常与芒硝、厚朴、枳实等配伍。\r\n2.用于火热亢盛、迫血上溢，以及目赤暴痛，热毒疮疖等症。\r\n大黄泻下泄热，有泻血分实热的功效，故又能用治血热妄行而上溢，如吐血、衄血；对目赤肿痛、热毒疮疖等症属于血分实热壅滞的症候，可配黄连、黄芩、丹皮、赤芍等同用。\r\n3.用于产后瘀滞腹痛，瘀血凝滞、月经不通，以及跌打损伤、瘀滞作痛等症。\r\n大黄入血分，又能破血行瘀，故可用于上述瘀血留滞的实症，在使用时须配合活血行瘀的药物，如桃仁、赤芍、红花等同用。\r\n此外，大黄又可清化湿热而用于黄疸，临床多与茵陈、山栀等药配伍应用；如将本品研末，还可作为烫伤及热毒疮疡的外敷药，具有清热解毒的作用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "大承气汤《伤寒论》：大黄、芒硝、枳实、厚朴。主治热盛便秘，腹胀满，烦躁谵语，口干，舌苔焦黄起刺，脉沉实有力者等症。\r\n大黄附子汤《金匮要略》：大黄、附子、细辛。治寒积便秘。\r\n下瘀血汤《金匮要略》：大黄、桃仁、蟅虫。治产后腹中有瘀8血而腹痛者。\r\n大黄牡丹汤《金匮要略》：大黄、牡丹皮、桃仁、芒硝、冬瓜子。治肠痈。（近年来临床上治急性阑尾炎，常用本方加败酱草、红藤、生苡仁；或用本方去冬瓜子、加红藤、瓜蒌仁、赤芍。）"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "攻积导滞，泻火凉血，行瘀通经。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.大黄又称“川军”，性寒苦泄，是一味泻火、破积、行瘀的要药，使用\r\n少量，又有健胃作用，在临床上应用较为广泛，可随配伍的不同而发挥它的特长。如配以芒硝，可攻下破积；配以附子，可温阳降浊；配以茵陈，可清化湿热；配黄芩、黄连，可泻火凉血；配黄连、槟榔，可清热导滞，用于湿热下痢、里急后重；配丹皮、赤芍、桃仁等，可活血祛瘀，用于血瘀经闭、损伤瘀血或肠痈初起等症；又如用本品少量，配合乌贼骨，可清热而制酸，治胃痛泛酸、脘部灼热等症。\r\n2.大黄除内服外，又可外敷治热毒痈肿、水火烫伤，也是取它泻火解毒的功效。\r\n3.如用本品泻下通便，煎服时应后下，或用沸开水泡汁，否则药效会减弱。\r\n4.服用大黄后，其色素会从小便或汗腺中排泄，故小便、汗液可以出现黄色。此外，哺乳妇女服用后，婴儿吮食乳汁，可能引起腹泻，因此授乳妇女不宜服用。由于本品又能活血行瘀，故妇女胎前产后及月经期间也必须慎用。\r\n"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n", collegeID: "39", medicinalMaterialName: "大黄", image: "/vendor/images/schools/dahuang_2.jpg", EnglishName: "Dài Huánɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于大便燥结，积滞泻痢，以及热结便秘、壮热苔黄等症。\r\n大黄泻下通便、清除积滞，故可用于大便不通及积滞泻痢、里急后重、溏而不爽等症；又因它能苦寒泄热，荡涤肠胃积滞，对于热结便秘、高热神昏等属于实热壅滞的症候，用之可以起到清热泻火的作用。在临床应用时，本品常与芒硝、厚朴、枳实等配伍。\r\n2.用于火热亢盛、迫血上溢，以及目赤暴痛，热毒疮疖等症。\r\n大黄泻下泄热，有泻血分实热的功效，故又能用治血热妄行而上溢，如吐血、衄血；对目赤肿痛、热毒疮疖等症属于血分实热壅滞的症候，可配黄连、黄芩、丹皮、赤芍等同用。\r\n3.用于产后瘀滞腹痛，瘀血凝滞、月经不通，以及跌打损伤、瘀滞作痛等症。\r\n大黄入血分，又能破血行瘀，故可用于上述瘀血留滞的实症，在使用时须配合活血行瘀的药物，如桃仁、赤芍、红花等同用。\r\n此外，大黄又可清化湿热而用于黄疸，临床多与茵陈、山栀等药配伍应用；如将本品研末，还可作为烫伤及热毒疮疡的外敷药，具有清热解毒的作用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "大承气汤《伤寒论》：大黄、芒硝、枳实、厚朴。主治热盛便秘，腹胀满，烦躁谵语，口干，舌苔焦黄起刺，脉沉实有力者等症。\r\n大黄附子汤《金匮要略》：大黄、附子、细辛。治寒积便秘。\r\n下瘀血汤《金匮要略》：大黄、桃仁、蟅虫。治产后腹中有瘀8血而腹痛者。\r\n大黄牡丹汤《金匮要略》：大黄、牡丹皮、桃仁、芒硝、冬瓜子。治肠痈。（近年来临床上治急性阑尾炎，常用本方加败酱草、红藤、生苡仁；或用本方去冬瓜子、加红藤、瓜蒌仁、赤芍。）"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "攻积导滞，泻火凉血，行瘀通经。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.大黄又称“川军”，性寒苦泄，是一味泻火、破积、行瘀的要药，使用\r\n少量，又有健胃作用，在临床上应用较为广泛，可随配伍的不同而发挥它的特长。如配以芒硝，可攻下破积；配以附子，可温阳降浊；配以茵陈，可清化湿热；配黄芩、黄连，可泻火凉血；配黄连、槟榔，可清热导滞，用于湿热下痢、里急后重；配丹皮、赤芍、桃仁等，可活血祛瘀，用于血瘀经闭、损伤瘀血或肠痈初起等症；又如用本品少量，配合乌贼骨，可清热而制酸，治胃痛泛酸、脘部灼热等症。\r\n2.大黄除内服外，又可外敷治热毒痈肿、水火烫伤，也是取它泻火解毒的功效。\r\n3.如用本品泻下通便，煎服时应后下，或用沸开水泡汁，否则药效会减弱。\r\n4.服用大黄后，其色素会从小便或汗腺中排泄，故小便、汗液可以出现黄色。此外，哺乳妇女服用后，婴儿吮食乳汁，可能引起腹泻，因此授乳妇女不宜服用。由于本品又能活血行瘀，故妇女胎前产后及月经期间也必须慎用。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "生军、生川军、生锦纹、生大黄（生用，泻下力猛）酒川军、酒洗大黄（用生大黄喷黄酒，烘干后应用，可增强活血行瘀之功）\r\n制军、制川军、制大黄（用黄酒拌匀后蒸熟成黑色，泻下力较缓，能清热化湿）\r\n", collegeID: "50", medicinalMaterialName: "大黄", image: "/vendor/images/schools/dahuang_2.jpg", EnglishName: "Dài Huánɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于大便燥结，积滞泻痢，以及热结便秘、壮热苔黄等症。\r\n大黄泻下通便、清除积滞，故可用于大便不通及积滞泻痢、里急后重、溏而不爽等症；又因它能苦寒泄热，荡涤肠胃积滞，对于热结便秘、高热神昏等属于实热壅滞的症候，用之可以起到清热泻火的作用。在临床应用时，本品常与芒硝、厚朴、枳实等配伍。\r\n2.用于火热亢盛、迫血上溢，以及目赤暴痛，热毒疮疖等症。\r\n大黄泻下泄热，有泻血分实热的功效，故又能用治血热妄行而上溢，如吐血、衄血；对目赤肿痛、热毒疮疖等症属于血分实热壅滞的症候，可配黄连、黄芩、丹皮、赤芍等同用。\r\n3.用于产后瘀滞腹痛，瘀血凝滞、月经不通，以及跌打损伤、瘀滞作痛等症。\r\n大黄入血分，又能破血行瘀，故可用于上述瘀血留滞的实症，在使用时须配合活血行瘀的药物，如桃仁、赤芍、红花等同用。\r\n此外，大黄又可清化湿热而用于黄疸，临床多与茵陈、山栀等药配伍应用；如将本品研末，还可作为烫伤及热毒疮疡的外敷药，具有清热解毒的作用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "大承气汤《伤寒论》：大黄、芒硝、枳实、厚朴。主治热盛便秘，腹胀满，烦躁谵语，口干，舌苔焦黄起刺，脉沉实有力者等症。\r\n大黄附子汤《金匮要略》：大黄、附子、细辛。治寒积便秘。\r\n下瘀血汤《金匮要略》：大黄、桃仁、蟅虫。治产后腹中有瘀8血而腹痛者。\r\n大黄牡丹汤《金匮要略》：大黄、牡丹皮、桃仁、芒硝、冬瓜子。治肠痈。（近年来临床上治急性阑尾炎，常用本方加败酱草、红藤、生苡仁；或用本方去冬瓜子、加红藤、瓜蒌仁、赤芍。）"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "攻积导滞，泻火凉血，行瘀通经。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.大黄又称“川军”，性寒苦泄，是一味泻火、破积、行瘀的要药，使用\r\n少量，又有健胃作用，在临床上应用较为广泛，可随配伍的不同而发挥它的特长。如配以芒硝，可攻下破积；配以附子，可温阳降浊；配以茵陈，可清化湿热；配黄芩、黄连，可泻火凉血；配黄连、槟榔，可清热导滞，用于湿热下痢、里急后重；配丹皮、赤芍、桃仁等，可活血祛瘀，用于血瘀经闭、损伤瘀血或肠痈初起等症；又如用本品少量，配合乌贼骨，可清热而制酸，治胃痛泛酸、脘部灼热等症。\r\n2.大黄除内服外，又可外敷治热毒痈肿、水火烫伤，也是取它泻火解毒的功效。\r\n3.如用本品泻下通便，煎服时应后下，或用沸开水泡汁，否则药效会减弱。\r\n4.服用大黄后，其色素会从小便或汗腺中排泄，故小便、汗液可以出现黄色。此外，哺乳妇女服用后，婴儿吮食乳汁，可能引起腹泻，因此授乳妇女不宜服用。由于本品又能活血行瘀，故妇女胎前产后及月经期间也必须慎用。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "1.茯苓、白茯苓、云茯苓、云苓（去皮，蒸熟，切片，晒干用。偏于健脾宁心）\r\n2.赤茯苓、赤苓（去皮，取菌核的淡红色部份，蒸透切片，或辗碎用。偏于渗湿泄热）\r\n3.朱茯苓、辰茯苓、朱砂拌茯苓（取白茯苓净片，用朱砂2％拌匀后用。可增强宁心安神的作用。）\r\n", collegeID: "51", medicinalMaterialName: "茯苓", image: "/vendor/images/schools/fuling_1.jpg", EnglishName: "F&#250; L&#237;nɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于小便不利，水肿等症\r\n茯苓功能利水渗湿，而药性平和，利水而不伤正气，为利水渗湿要药。凡小便不利、水湿停滞的症候，不论偏于寒湿，或偏于湿热，或属于脾虚湿聚，均可配合应用。如偏于寒湿者，可与桂枝、白朮等配伍；偏于湿热者，可与猪苓、泽泻等配伍；属于脾气虚者，可与党参、黄耆、白朮等配伍；属虚寒者，还可配附子、白朮等同用。\r\n2.用于脾虚泄泻，带下\r\n茯苓既能健脾，又能渗湿，对于脾虚运化失常所致泄泻、带下，应用茯苓有标本兼顾之效，常与党参、白朮、山药等配伍。有可用为补肺脾，治气虚之辅佐药。\r\n3.用于痰饮咳嗽，痰湿入络，肩背酸痛\r\n茯苓既能利水渗湿，又具健脾作用，对于脾虚不能运化水湿，停聚化生痰饮之症，具有治疗作用。可用半夏、陈皮同用，也可配桂枝、白朮同用。治痰湿入络、肩酸背痛，可配半夏、枳壳同用。\r\n4.用于心悸，失眠等症\r\n茯苓能养心安神，故可用于心神不安、心悸、失眠等症，常与人参、远志、酸枣仁等配伍。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五苓散（《伤寒论》）：茯苓、猪苓、泽泻、白朮、桂枝。治头痛发热，口燥咽干，烦渴饮水，水入即吐，小便不利。\r\n苓桂朮甘汤（《金匮要略》）：茯苓、桂枝、白朮、炙甘草。治痰饮停聚，头眩，心悸，咳嗽。\r\n指迷茯苓丸（《医方考》）：半夏、茯苓、枳壳、风化硝、生姜。治痰湿内停，流注四肢，肩臂酸痛，两手疲软者。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "利水渗湿，健脾，化痰，宁心安神\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "茯苓淡而能渗，甘而能补，能泻能补，两得其宜之药也。利水湿以治水肿小便不利，化痰饮以治咳咳嗽、痰湿入络之症，健脾胃而能止泻止带，宁心神治惊悸失眠。药性平和，无伤正气之弊，以其既能扶正，又能祛邪，故脾虚湿盛，正虚邪实之症尤为适宜。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "1.茯苓、白茯苓、云茯苓、云苓（去皮，蒸熟，切片，晒干用。偏于健脾宁心）\r\n2.赤茯苓、赤苓（去皮，取菌核的淡红色部份，蒸透切片，或辗碎用。偏于渗湿泄热）\r\n3.朱茯苓、辰茯苓、朱砂拌茯苓（取白茯苓净片，用朱砂2％拌匀后用。可增强宁心安神的作用。）\r\n", collegeID: "71", medicinalMaterialName: "茯苓", image: "/vendor/images/schools/fuling_1.jpg", EnglishName: "F&#250; L&#237;nɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于小便不利，水肿等症\r\n茯苓功能利水渗湿，而药性平和，利水而不伤正气，为利水渗湿要药。凡小便不利、水湿停滞的症候，不论偏于寒湿，或偏于湿热，或属于脾虚湿聚，均可配合应用。如偏于寒湿者，可与桂枝、白朮等配伍；偏于湿热者，可与猪苓、泽泻等配伍；属于脾气虚者，可与党参、黄耆、白朮等配伍；属虚寒者，还可配附子、白朮等同用。\r\n2.用于脾虚泄泻，带下\r\n茯苓既能健脾，又能渗湿，对于脾虚运化失常所致泄泻、带下，应用茯苓有标本兼顾之效，常与党参、白朮、山药等配伍。有可用为补肺脾，治气虚之辅佐药。\r\n3.用于痰饮咳嗽，痰湿入络，肩背酸痛\r\n茯苓既能利水渗湿，又具健脾作用，对于脾虚不能运化水湿，停聚化生痰饮之症，具有治疗作用。可用半夏、陈皮同用，也可配桂枝、白朮同用。治痰湿入络、肩酸背痛，可配半夏、枳壳同用。\r\n4.用于心悸，失眠等症\r\n茯苓能养心安神，故可用于心神不安、心悸、失眠等症，常与人参、远志、酸枣仁等配伍。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五苓散（《伤寒论》）：茯苓、猪苓、泽泻、白朮、桂枝。治头痛发热，口燥咽干，烦渴饮水，水入即吐，小便不利。\r\n苓桂朮甘汤（《金匮要略》）：茯苓、桂枝、白朮、炙甘草。治痰饮停聚，头眩，心悸，咳嗽。\r\n指迷茯苓丸（《医方考》）：半夏、茯苓、枳壳、风化硝、生姜。治痰湿内停，流注四肢，肩臂酸痛，两手疲软者。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "利水渗湿，健脾，化痰，宁心安神\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "茯苓淡而能渗，甘而能补，能泻能补，两得其宜之药也。利水湿以治水肿小便不利，化痰饮以治咳咳嗽、痰湿入络之症，健脾胃而能止泻止带，宁心神治惊悸失眠。药性平和，无伤正气之弊，以其既能扶正，又能祛邪，故脾虚湿盛，正虚邪实之症尤为适宜。\r\n"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "生姜（用新鲜者）\r\n", collegeID: "2", medicinalMaterialName: "生姜", image: "/vendor/images/schools/shengjiang_1.jpg", EnglishName: "Shēnɡ Jiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风寒感冒、发热、恶寒等症。\r\n生姜用于解表，主要为发散风寒，多用治感冒轻症，煎汤，加红糖乘热服用，往往能得汗而解，也可用作预防感冒药物。生姜发汗作用较弱，常配合麻黄、桂枝等同用，作为发汗解表辅助的药品，能增强发汗力量。\r\n2.用于胃寒呕吐。\r\n生姜为止呕要药，可单独应用，治疗胃寒呕吐。也可治胃热呕吐，配合半夏、竹茹、黄连等同用。\r\n3.用于中鱼蟹毒、呕吐腹泻等症。\r\n生姜能解鱼蟹毒，单用或配紫苏同用。此外，生姜又能解生半夏、生南星之毒，煎汤饮服，可用于中半夏、南星毒引起的喉哑舌肿麻木等症。因此在炮制半夏、南星的时候，常用生姜同制，以减除它们的毒性。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "生姜半夏汤（《金匮要略》）生姜、半夏。治似呕不呕，似哕不哕，心中愦愦然者。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "发汗解表、温中止呕、解毒。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解表药", chufangName: "生姜（用新鲜者）\r\n", collegeID: "35", medicinalMaterialName: "生姜", image: "/vendor/images/schools/shengjiang_1.jpg", EnglishName: "Shēnɡ Jiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风寒感冒、发热、恶寒等症。\r\n生姜用于解表，主要为发散风寒，多用治感冒轻症，煎汤，加红糖乘热服用，往往能得汗而解，也可用作预防感冒药物。生姜发汗作用较弱，常配合麻黄、桂枝等同用，作为发汗解表辅助的药品，能增强发汗力量。\r\n2.用于胃寒呕吐。\r\n生姜为止呕要药，可单独应用，治疗胃寒呕吐。也可治胃热呕吐，配合半夏、竹茹、黄连等同用。\r\n3.用于中鱼蟹毒、呕吐腹泻等症。\r\n生姜能解鱼蟹毒，单用或配紫苏同用。此外，生姜又能解生半夏、生南星之毒，煎汤饮服，可用于中半夏、南星毒引起的喉哑舌肿麻木等症。因此在炮制半夏、南星的时候，常用生姜同制，以减除它们的毒性。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "生姜半夏汤（《金匮要略》）生姜、半夏。治似呕不呕，似哕不哕，心中愦愦然者。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "发汗解表、温中止呕、解毒。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "生姜（用新鲜者）\r\n", collegeID: "52", medicinalMaterialName: "生姜", image: "/vendor/images/schools/shengjiang_1.jpg", EnglishName: "Shēnɡ Jiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风寒感冒、发热、恶寒等症。\r\n生姜用于解表，主要为发散风寒，多用治感冒轻症，煎汤，加红糖乘热服用，往往能得汗而解，也可用作预防感冒药物。生姜发汗作用较弱，常配合麻黄、桂枝等同用，作为发汗解表辅助的药品，能增强发汗力量。\r\n2.用于胃寒呕吐。\r\n生姜为止呕要药，可单独应用，治疗胃寒呕吐。也可治胃热呕吐，配合半夏、竹茹、黄连等同用。\r\n3.用于中鱼蟹毒、呕吐腹泻等症。\r\n生姜能解鱼蟹毒，单用或配紫苏同用。此外，生姜又能解生半夏、生南星之毒，煎汤饮服，可用于中半夏、南星毒引起的喉哑舌肿麻木等症。因此在炮制半夏、南星的时候，常用生姜同制，以减除它们的毒性。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "生姜半夏汤（《金匮要略》）生姜、半夏。治似呕不呕，似哕不哕，心中愦愦然者。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "发汗解表、温中止呕、解毒。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "生姜（用新鲜者）\r\n", collegeID: "72", medicinalMaterialName: "生姜", image: "/vendor/images/schools/shengjiang_1.jpg", EnglishName: "Shēnɡ Jiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风寒感冒、发热、恶寒等症。\r\n生姜用于解表，主要为发散风寒，多用治感冒轻症，煎汤，加红糖乘热服用，往往能得汗而解，也可用作预防感冒药物。生姜发汗作用较弱，常配合麻黄、桂枝等同用，作为发汗解表辅助的药品，能增强发汗力量。\r\n2.用于胃寒呕吐。\r\n生姜为止呕要药，可单独应用，治疗胃寒呕吐。也可治胃热呕吐，配合半夏、竹茹、黄连等同用。\r\n3.用于中鱼蟹毒、呕吐腹泻等症。\r\n生姜能解鱼蟹毒，单用或配紫苏同用。此外，生姜又能解生半夏、生南星之毒，煎汤饮服，可用于中半夏、南星毒引起的喉哑舌肿麻木等症。因此在炮制半夏、南星的时候，常用生姜同制，以减除它们的毒性。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "生姜半夏汤（《金匮要略》）生姜、半夏。治似呕不呕，似哕不哕，心中愦愦然者。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "发汗解表、温中止呕、解毒。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解表药", chufangName: "春柴胡、软柴胡、南柴胡、细柴胡（生用，用茎叶者）\r\n硬柴胡、北柴胡、秋柴胡（生用，用根者）\r\n鳖血拌柴胡（用鳖血、陈酒拌匀，主要用于虚热病症。）\r\n", collegeID: "36", medicinalMaterialName: "柴胡", image: "/vendor/images/schools/chaihu_1.jpg", EnglishName: "Ch&#225;i H&#250;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于感冒、发热等症。\r\n柴胡功能解表，治疗感冒常与葛根、羌活等同用。\r\n2.用于寒热往来、疟疾等症。\r\n柴胡有较佳的退热作用，邪在少阳、寒热往来，常与黄芩、半夏等同用（如小柴胡汤）；对疟疾症，柴胡又可与草果、青皮等配伍应用。\r\n3.用于肝气郁结、胁肋疼痛、月经不调等症。\r\n柴胡既具良好的疏肝解郁作用，又为疏肝诸药之向导，是治肝气郁结之要药。对?肋疼痛无论内由肝郁、外因伤仆皆可应用；凡见肝气郁结所致的月经不调或痛经等，均可与当归、白芍、香附、郁金等药同用。\r\n4.用于气虚下陷、久泻脱肛、子宫下垂等症。\r\n柴胡药性升浮，配党参、黄耆等补气药物，对气虚下陷的久泻脱肛、子宫下垂等症，有升举阳气作用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "小柴胡汤《伤寒论》：柴胡、黄芩、半夏、人参、甘草、生姜、大枣。治寒热往来，胸胁苦满、心烦喜呕、口苦咽干等症。\r\n四逆散《伤寒论》：柴胡、白芍、枳实、甘草，治肝气郁结，胸胁脘腹疼痛，或兼有泄泻。\r\n消郁散（原名逍遥散）《和剂局方》：柴胡、当归、白芍、白朮、茯苓、甘草、薄荷、煨生姜。治肝气抑郁、血虚火旺、头痛目眩、两胁作痛、月经不调。\r\n清胰汤（天津南开医院方）：柴胡、黄芩、胡黄连、白芍、木香、延胡、生大黄、芒硝。治急性胰腺炎、腹中阵痛或串痛、拒按、口渴、便秘、尿赤等症。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "解表，退热，疏肝解郁，升举阳气。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.柴胡一药，具有轻清升散，又能疏泄的特点。既能透表退热、疏肝解郁，又可用于升举阳气。因此，它在临床上是一味既可用于实症，又可用于虚症的药物。由于配伍不同而可发挥它各种不同的功效，如：配葛根、羌活，则发汗解表；配黄芩、青蒿，则透表泄热；配常山、草果，则截疟退热；配香附、郁金，则疏肝解郁；配党参、黄耆、白朮、升麻等，则升举阳气。但阴亏津少及肝阳上亢者不宜应用。\r\n2.柴胡与葛根，轻清升散的功用相近似，故在解表退热时常同用。但各有特长，柴胡能疏肝解郁，配益气药可升阳举陷，用于子宫脱垂、脱肛，然无生津解渴之功；葛根有生津止渴作用，能生发清阳，用于水泻，然无疏肝解郁功能。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "天花粉、花粉（洗净，晒干，切碎用）\r\n", collegeID: "17", medicinalMaterialName: "天花粉", image: "/vendor/images/schools/tianhuafen_1.jpg", EnglishName: "Tiān Huā Fěn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于肺热燥咳，热病伤津、口渴等症\r\n本品能清肺润燥，生津解渴。故临床上用于肺热燥咳，可与沙参、麦冬等配伍；用于热病伤津及消渴等症，可与麦冬、知母等配伍。\r\n2.用于痈肿疮疡\r\n本品对疮疡未溃者有消肿作用，已溃脓出不畅者有排脓作用，但均以热毒炽盛者为宜，常与连翘、蒲公英、浙贝母等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "滋燥饮《沉氏遵生》：天花粉、天冬、麦冬、生地、白芍、秦艽治肺燥咳嗽，口燥作渴。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热生津，消肿排脓。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "天花粉与芦根都能清热生津，治口渴津少，舌质正常，不必具有苔剥质绛的现象，辨症属于气分伤津，为伤阴之初起。但天花粉力量虽较芦根为弱，而生津的作用则胜过芦根，又可用于痈肿疮疡，能消肿排脓。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "天花粉、花粉（洗净，晒干，切碎用）\r\n", collegeID: "73", medicinalMaterialName: "天花粉", image: "/vendor/images/schools/tianhuafen_1.jpg", EnglishName: "Tiān Huā Fěn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于肺热燥咳，热病伤津、口渴等症\r\n本品能清肺润燥，生津解渴。故临床上用于肺热燥咳，可与沙参、麦冬等配伍；用于热病伤津及消渴等症，可与麦冬、知母等配伍。\r\n2.用于痈肿疮疡\r\n本品对疮疡未溃者有消肿作用，已溃脓出不畅者有排脓作用，但均以热毒炽盛者为宜，常与连翘、蒲公英、浙贝母等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "滋燥饮《沉氏遵生》：天花粉、天冬、麦冬、生地、白芍、秦艽治肺燥咳嗽，口燥作渴。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热生津，消肿排脓。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "天花粉与芦根都能清热生津，治口渴津少，舌质正常，不必具有苔剥质绛的现象，辨症属于气分伤津，为伤阴之初起。但天花粉力量虽较芦根为弱，而生津的作用则胜过芦根，又可用于痈肿疮疡，能消肿排脓。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "西瓜皮、西瓜翠衣（洗净，晒干，切碎用）\r\n", collegeID: "18", medicinalMaterialName: "西瓜皮", image: "/vendor/images/schools/xiguapi_1.jpg", EnglishName: "Xī Guā P&#237;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于暑热烦渴，小便不利等症。\r\n本品味甘性凉，善清暑热，能解烦渴，故适用于暑热烦渴、小便短赤等症；而对秋冬之际，气候干燥，咽喉肿痛，或口舌生疮等症，也可应用，有泻火泄热之效。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "清络饮《温病条辨》：鲜荷叶边、鲜银花、西瓜翠衣、鲜扁豆花、丝瓜皮、鲜竹叶心。治暑温汗后头胀。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解暑，泻热除烦。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "牛黄、西黄、犀黄（研粉用）\r\n", collegeID: "3", medicinalMaterialName: "牛黄", image: "/vendor/images/schools/niuhuang_1.jpg", EnglishName: "Ni&#250; Hu&#225;nɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于高热烦燥，神昏谵语及惊痫抽搐等症。\r\n神昏谵语、惊痫抽搐，多由于高热或痰热蒙蔽清窍所引起。牛黄能清心热、豁痰浊，可收开窍定惊的功效。在临床上本品常和清热药与开窍药如黄连、黄芩、山栀、麝香等做成丸散，应用于热盛昏迷惊痛。\r\n2.用于咽喉肿痛腐烂、各种热毒疮痈。\r\n牛黄为清热解毒要药，对热毒引起的咽喉肿痛、疮痈肿痛及一些外科疾患属于阳症者都可应用，常配合青黛、冰片等治咽喉肿痛；配金银花、七叶一枝花、甘草等治疮疡。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "牛黄清心丸《痘疹心法》：牛黄、黄连、黄芩、山栀、郁金、朱砂。治热盛神志不清。\r\n抗热牛黄丸（原“安宫牛黄丸”）《温病条辨》：牛黄、郁金、犀角、黄连、朱砂、梅片、麝香、真珠、雄黄、黄芩、山栀。治温病邪入心包，神昏谵语，身热烦燥，以及小儿惊厥，中风窍闭等症。\r\n牛黄解毒丸《证治准绳》：牛黄、甘草、金银花、草河车。治小儿胎毒疮疖及一且疮疡。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清心开窍，豁痰定惊，清热解毒。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.牛黄功能清热解毒、豁痰定惊，它的开窍之力远不及麝香、冰片。\r\n2.本品配以麝香、天竺黄、全蝎、钩藤，则豁痰开窍、清热镇痉；配黄连、黄芩、栀子、郁金、朱砂，则清热解毒、开窍安神；配青黛、珍珠、人指甲、象牙屑、冰片，则清热解毒、消肿定痛。\r\n3.牛黄原为病牛胆囊中的结石（少数为胆管、肝管的结石），故货源较少。现除此种天然牛黄外，尚有人工合成的牛黄，系按牛黄含有的成份，由牛胆汁或猪胆汁中提取，加工而成。目前临床上主要用人造牛黄，功效颇好。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "牛黄、西黄、犀黄（研粉用）\r\n", collegeID: "19", medicinalMaterialName: "牛黄", image: "/vendor/images/schools/niuhuang_1.jpg", EnglishName: "Ni&#250; Hu&#225;nɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于高热烦燥，神昏谵语及惊痫抽搐等症。\r\n神昏谵语、惊痫抽搐，多由于高热或痰热蒙蔽清窍所引起。牛黄能清心热、豁痰浊，可收开窍定惊的功效。在临床上本品常和清热药与开窍药如黄连、黄芩、山栀、麝香等做成丸散，应用于热盛昏迷惊痛。\r\n2.用于咽喉肿痛腐烂、各种热毒疮痈。\r\n牛黄为清热解毒要药，对热毒引起的咽喉肿痛、疮痈肿痛及一些外科疾患属于阳症者都可应用，常配合青黛、冰片等治咽喉肿痛；配金银花、七叶一枝花、甘草等治疮疡。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "牛黄清心丸《痘疹心法》：牛黄、黄连、黄芩、山栀、郁金、朱砂。治热盛神志不清。\r\n抗热牛黄丸（原“安宫牛黄丸”）《温病条辨》：牛黄、郁金、犀角、黄连、朱砂、梅片、麝香、真珠、雄黄、黄芩、山栀。治温病邪入心包，神昏谵语，身热烦燥，以及小儿惊厥，中风窍闭等症。\r\n牛黄解毒丸《证治准绳》：牛黄、甘草、金银花、草河车。治小儿胎毒疮疖及一且疮疡。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清心开窍，豁痰定惊，清热解毒。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.牛黄功能清热解毒、豁痰定惊，它的开窍之力远不及麝香、冰片。\r\n2.本品配以麝香、天竺黄、全蝎、钩藤，则豁痰开窍、清热镇痉；配黄连、黄芩、栀子、郁金、朱砂，则清热解毒、开窍安神；配青黛、珍珠、人指甲、象牙屑、冰片，则清热解毒、消肿定痛。\r\n3.牛黄原为病牛胆囊中的结石（少数为胆管、肝管的结石），故货源较少。现除此种天然牛黄外，尚有人工合成的牛黄，系按牛黄含有的成份，由牛胆汁或猪胆汁中提取，加工而成。目前临床上主要用人造牛黄，功效颇好。\r\n"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "山慈菇、山茨菇（洗净，晒干，切片用）\r\n", collegeID: "4", medicinalMaterialName: "山慈菇", image: "/vendor/images/schools/shancigu_1", EnglishName: "Shān C&#237; Gu", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于实热性的疮疖肿毒，瘰历结核等症。\r\n本品味辛气寒，善能泄热散结，对痈肿疔毒、瘰历结核，内服、外敷，均可应用。\r\n2.用于食道癌及淋巴肿瘤等\r\n山慈菇用于食道癌，常与急性子、制半夏、地鳖虫、石见穿等配合应用；用于淋巴肿瘤，常与昆布、海藻、夏枯草、象贝等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "玉枢丹《百一选方》：山慈菇、麝香、千金子霜、雄黄、红芽大戟、朱砂、五倍子。治感受外邪，食物中毒等引起的恶心、呕吐、腹痛、腹泻。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消痈散结。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "山慈菇、山茨菇（洗净，晒干，切片用）\r\n", collegeID: "20", medicinalMaterialName: "山慈菇", image: "/vendor/images/schools/shancigu_1.jpg", EnglishName: "Shān C&#237; Gu", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于实热性的疮疖肿毒，瘰历结核等症。\r\n本品味辛气寒，善能泄热散结，对痈肿疔毒、瘰历结核，内服、外敷，均可应用。\r\n2.用于食道癌及淋巴肿瘤等\r\n山慈菇用于食道癌，常与急性子、制半夏、地鳖虫、石见穿等配合应用；用于淋巴肿瘤，常与昆布、海藻、夏枯草、象贝等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "玉枢丹《百一选方》：山慈菇、麝香、千金子霜、雄黄、红芽大戟、朱砂、五倍子。治感受外邪，食物中毒等引起的恶心、呕吐、腹痛、腹泻。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消痈散结。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "山慈菇、山茨菇（洗净，晒干，切片用）\r\n", collegeID: "40", medicinalMaterialName: "山慈菇", image: "/vendor/images/schools/shancigu_1.jpg", EnglishName: "Shān C&#237; Gu", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于实热性的疮疖肿毒，瘰历结核等症。\r\n本品味辛气寒，善能泄热散结，对痈肿疔毒、瘰历结核，内服、外敷，均可应用。\r\n2.用于食道癌及淋巴肿瘤等\r\n山慈菇用于食道癌，常与急性子、制半夏、地鳖虫、石见穿等配合应用；用于淋巴肿瘤，常与昆布、海藻、夏枯草、象贝等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "玉枢丹《百一选方》：山慈菇、麝香、千金子霜、雄黄、红芽大戟、朱砂、五倍子。治感受外邪，食物中毒等引起的恶心、呕吐、腹痛、腹泻。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消痈散结。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "土茯苓（洗净，晒干，切片用）\r\n", collegeID: "5", medicinalMaterialName: "土茯苓", image: "/vendor/images/schools/tufuling_1.jpg", EnglishName: "Tǔ Fú Línɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于湿热疮毒、梅毒、筋骨拘挛疼痛及瘰历疮肿等症。\r\n土茯苓味甘淡而性平，为利湿解毒的药品。用本品治梅毒，可配合金银花、白藓皮、威灵仙、甘草等同用。现临床上主要用于湿热疮毒，常与白藓皮、地肤子、苦参、苍朮等配伍同用。\r\n此外，本品近年来在临床上用治钩端螺旋体病，据报导。有一定疗效。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "搜风解毒汤《本草纲目》：土茯苓、苡仁、银花、防风、木瓜、木通、白藓皮、皂荚子。治梅毒筋骨挛痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，除湿通络。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "土茯苓（洗净，晒干，切片用）\r\n", collegeID: "21", medicinalMaterialName: "土茯苓", image: "/vendor/images/schools/tufuling_1.jpg", EnglishName: "Tǔ Fú Línɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于湿热疮毒、梅毒、筋骨拘挛疼痛及瘰历疮肿等症。\r\n土茯苓味甘淡而性平，为利湿解毒的药品。用本品治梅毒，可配合金银花、白藓皮、威灵仙、甘草等同用。现临床上主要用于湿热疮毒，常与白藓皮、地肤子、苦参、苍朮等配伍同用。\r\n此外，本品近年来在临床上用治钩端螺旋体病，据报导。有一定疗效。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "搜风解毒汤《本草纲目》：土茯苓、苡仁、银花、防风、木瓜、木通、白藓皮、皂荚子。治梅毒筋骨挛痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，除湿通络。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "土茯苓（洗净，晒干，切片用）\r\n", collegeID: "53", medicinalMaterialName: "土茯苓", image: "/vendor/images/schools/tufuling_1.jpg", EnglishName: "Tǔ Fú Línɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于湿热疮毒、梅毒、筋骨拘挛疼痛及瘰历疮肿等症。\r\n土茯苓味甘淡而性平，为利湿解毒的药品。用本品治梅毒，可配合金银花、白藓皮、威灵仙、甘草等同用。现临床上主要用于湿热疮毒，常与白藓皮、地肤子、苦参、苍朮等配伍同用。\r\n此外，本品近年来在临床上用治钩端螺旋体病，据报导。有一定疗效。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "搜风解毒汤《本草纲目》：土茯苓、苡仁、银花、防风、木瓜、木通、白藓皮、皂荚子。治梅毒筋骨挛痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，除湿通络。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "射干、嫩射干（洗净，晒干，切片用）\r\n", collegeID: "6", medicinalMaterialName: "射干", image: "/vendor/images/schools/shegan_1.jpg", EnglishName: "Sh&#232; Gān", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于感受风热，或痰热壅盛所致的咽喉肿痛等症。\r\n射干为治咽喉肿痛常用的药品，能清热毒、消肿痛，常和牛蒡子、桔梗、甘草等配合应用。\r\n2.用于痰涎壅盛，咳嗽气喘等症。\r\n射干清肺热而消痰涎，用治咳嗽痰喘，常与麻黄、紫菀、款冬等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "射干麻黄汤《金匮要略》：射干、麻黄、细辛、半夏、五味子、紫菀、款冬、生姜、大枣。治咳而上气，喉中有水鸡声。\r\n射干消毒饮《张氏医通》：射干、玄参、连翘、荆芥、牛蒡子、甘草。治咳嗽音瘖、咽喉肿痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽喉，消痰涎。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.射干能降逆祛痰、破结泄热。本品目前临床上除用为消痰、利咽的药物之外，在鳖甲煎丸中还用以消症瘕、除疟母、通经闭。别名为乌扇。\r\n2.本品配牛蒡子或黄芩，则清热利咽；如配麻黄，则消痰平喘。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "射干、嫩射干（洗净，晒干，切片用）\r\n", collegeID: "22", medicinalMaterialName: "射干", image: "/vendor/images/schools/shegan_1.jpg", EnglishName: "Sh&#232; Gān", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于感受风热，或痰热壅盛所致的咽喉肿痛等症。\r\n射干为治咽喉肿痛常用的药品，能清热毒、消肿痛，常和牛蒡子、桔梗、甘草等配合应用。\r\n2.用于痰涎壅盛，咳嗽气喘等症。\r\n射干清肺热而消痰涎，用治咳嗽痰喘，常与麻黄、紫菀、款冬等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "射干麻黄汤《金匮要略》：射干、麻黄、细辛、半夏、五味子、紫菀、款冬、生姜、大枣。治咳而上气，喉中有水鸡声。\r\n射干消毒饮《张氏医通》：射干、玄参、连翘、荆芥、牛蒡子、甘草。治咳嗽音瘖、咽喉肿痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽喉，消痰涎。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.射干能降逆祛痰、破结泄热。本品目前临床上除用为消痰、利咽的药物之外，在鳖甲煎丸中还用以消症瘕、除疟母、通经闭。别名为乌扇。\r\n2.本品配牛蒡子或黄芩，则清热利咽；如配麻黄，则消痰平喘。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "射干、嫩射干（洗净，晒干，切片用）\r\n", collegeID: "74", medicinalMaterialName: "射干", image: "/vendor/images/schools/shegan_1.jpg", EnglishName: "Sh&#232; Gān", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于感受风热，或痰热壅盛所致的咽喉肿痛等症。\r\n射干为治咽喉肿痛常用的药品，能清热毒、消肿痛，常和牛蒡子、桔梗、甘草等配合应用。\r\n2.用于痰涎壅盛，咳嗽气喘等症。\r\n射干清肺热而消痰涎，用治咳嗽痰喘，常与麻黄、紫菀、款冬等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "射干麻黄汤《金匮要略》：射干、麻黄、细辛、半夏、五味子、紫菀、款冬、生姜、大枣。治咳而上气，喉中有水鸡声。\r\n射干消毒饮《张氏医通》：射干、玄参、连翘、荆芥、牛蒡子、甘草。治咳嗽音瘖、咽喉肿痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽喉，消痰涎。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.射干能降逆祛痰、破结泄热。本品目前临床上除用为消痰、利咽的药物之外，在鳖甲煎丸中还用以消症瘕、除疟母、通经闭。别名为乌扇。\r\n2.本品配牛蒡子或黄芩，则清热利咽；如配麻黄，则消痰平喘。\r\n"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "山豆根（洗净，晒干，切片用）\r\n", collegeID: "7", medicinalMaterialName: "山豆根", image: "/vendor/images/schools/shandougen_1.jpg", EnglishName: "Shān D&#242;u Gēn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于咽喉肿痛等症。\r\n山豆根功能清热利咽，治咽喉肿痛属于热毒者，常配合射干、银花、连翘、板蓝根等同用。\r\n此外，本品尚可用于肺热咳嗽及黄疸等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "山豆根汤《验方》：山豆根、荆芥、防风、桔梗、甘草、僵蚕、薄荷、赤芍、归尾、山栀。治咽喉肿痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽喉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.山豆根苦降泄热，主要用于咽喉红肿热痛属于实火肺热者。\r\n2.如剂量过大，易致呕吐，如用至一两，能引起中毒而发生呕吐、腹泻、胸闷、心悸。\r\n3.山豆根的来源尚有多种：\r\n防己科缠绕性藤本植物蝙蝠葛的根茎，主销华北，东北各省；上海地区亦曾经用过。\r\n豆科木蓝属的多种植物如多花木蓝，和？木蓝及宜昌木蓝等的根，在江苏、湖北、河南、山西等应用较多。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "山豆根（洗净，晒干，切片用）\r\n", collegeID: "23", medicinalMaterialName: "山豆根", image: "/vendor/images/schools/shandougen_1.jpg", EnglishName: "Shān D&#242;u Gēn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于咽喉肿痛等症。\r\n山豆根功能清热利咽，治咽喉肿痛属于热毒者，常配合射干、银花、连翘、板蓝根等同用。\r\n此外，本品尚可用于肺热咳嗽及黄疸等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "山豆根汤《验方》：山豆根、荆芥、防风、桔梗、甘草、僵蚕、薄荷、赤芍、归尾、山栀。治咽喉肿痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽喉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.山豆根苦降泄热，主要用于咽喉红肿热痛属于实火肺热者。\r\n2.如剂量过大，易致呕吐，如用至一两，能引起中毒而发生呕吐、腹泻、胸闷、心悸。\r\n3.山豆根的来源尚有多种：\r\n防己科缠绕性藤本植物蝙蝠葛的根茎，主销华北，东北各省；上海地区亦曾经用过。\r\n豆科木蓝属的多种植物如多花木蓝，和？木蓝及宜昌木蓝等的根，在江苏、湖北、河南、山西等应用较多。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "山豆根（洗净，晒干，切片用）\r\n", collegeID: "75", medicinalMaterialName: "山豆根", image: "/vendor/images/schools/shandougen_1.jpg", EnglishName: "Shān D&#242;u Gēn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于咽喉肿痛等症。\r\n山豆根功能清热利咽，治咽喉肿痛属于热毒者，常配合射干、银花、连翘、板蓝根等同用。\r\n此外，本品尚可用于肺热咳嗽及黄疸等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "山豆根汤《验方》：山豆根、荆芥、防风、桔梗、甘草、僵蚕、薄荷、赤芍、归尾、山栀。治咽喉肿痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽喉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.山豆根苦降泄热，主要用于咽喉红肿热痛属于实火肺热者。\r\n2.如剂量过大，易致呕吐，如用至一两，能引起中毒而发生呕吐、腹泻、胸闷、心悸。\r\n3.山豆根的来源尚有多种：\r\n防己科缠绕性藤本植物蝙蝠葛的根茎，主销华北，东北各省；上海地区亦曾经用过。\r\n豆科木蓝属的多种植物如多花木蓝，和？木蓝及宜昌木蓝等的根，在江苏、湖北、河南、山西等应用较多。\r\n"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "轻马勃、净马勃（晒干用）\r\n", collegeID: "8", medicinalMaterialName: "马勃", image: "/vendor/images/schools/mabo_1.jpg", EnglishName: "Mǎ Bó", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于热邪火毒郁滞所致的咽喉肿痛，咳嗽失音，肺热咳嗽等症。\r\n本品能清肺利咽，用治咳嗽失音、咽喉肿痛，常与银花、山栀、薄荷、牛蒡子、玄参等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "清咽消毒饮《疫喉浅论方》：马勃、银花、犀角、连翘、板蓝根、人中黄、黄连、山栀、牛蒡、元参、薄荷、绿豆衣。治疫喉腐烂。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "轻马勃、净马勃（晒干用）\r\n", collegeID: "24", medicinalMaterialName: "马勃", image: "/vendor/images/schools/mabo_1.jpg", EnglishName: "Mǎ Bó", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于热邪火毒郁滞所致的咽喉肿痛，咳嗽失音，肺热咳嗽等症。\r\n本品能清肺利咽，用治咳嗽失音、咽喉肿痛，常与银花、山栀、薄荷、牛蒡子、玄参等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "清咽消毒饮《疫喉浅论方》：马勃、银花、犀角、连翘、板蓝根、人中黄、黄连、山栀、牛蒡、元参、薄荷、绿豆衣。治疫喉腐烂。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "轻马勃、净马勃（晒干用）\r\n", collegeID: "76", medicinalMaterialName: "马勃", image: "/vendor/images/schools/mabo_1.jpg", EnglishName: "Mǎ Bó", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于热邪火毒郁滞所致的咽喉肿痛，咳嗽失音，肺热咳嗽等症。\r\n本品能清肺利咽，用治咳嗽失音、咽喉肿痛，常与银花、山栀、薄荷、牛蒡子、玄参等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "清咽消毒饮《疫喉浅论方》：马勃、银花、犀角、连翘、板蓝根、人中黄、黄连、山栀、牛蒡、元参、薄荷、绿豆衣。治疫喉腐烂。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，利咽。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "一枝黄花（洗净，晒干，切碎用）\r\n", collegeID: "9", medicinalMaterialName: "一枝黄花", image: "/vendor/images/schools/yizhihuanghua_1.jpg", EnglishName: "Yì Zhī Huánɡ Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于感冒发热，咽喉肿痛等症。\r\n本品苦凉泄热而辛散，可用于感冒发热；又善于清热解毒，对咽喉肿痛等症，也可应用。\r\n2.用于毒蛇咬伤，疮疡肿毒等症。\r\n本品既能清热解毒，又可消肿除痛，对于毒蛇咬伤，疮痈肿毒等症，皆可应用，一面煎汤内服；一面用鲜草洗净，捣烂外敷。\r\n此外，对于鹅掌风、灰指甲、脚癣等病症，可煎汤浸洗患部。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿除痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "一枝黄花（洗净，晒干，切碎用）\r\n", collegeID: "25", medicinalMaterialName: "一枝黄花", image: "/vendor/images/schools/yizhihuanghua_1.jpg", EnglishName: "Yì Zhī Huánɡ Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于感冒发热，咽喉肿痛等症。\r\n本品苦凉泄热而辛散，可用于感冒发热；又善于清热解毒，对咽喉肿痛等症，也可应用。\r\n2.用于毒蛇咬伤，疮疡肿毒等症。\r\n本品既能清热解毒，又可消肿除痛，对于毒蛇咬伤，疮痈肿毒等症，皆可应用，一面煎汤内服；一面用鲜草洗净，捣烂外敷。\r\n此外，对于鹅掌风、灰指甲、脚癣等病症，可煎汤浸洗患部。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿除痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n", collegeID: "10", medicinalMaterialName: "马齿苋", image: "/vendor/images/schools/machixian_1.jpg", EnglishName: "Mǎ Chǐ Xiàn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于湿热或热毒引起的痢疾。\r\n马齿苋为治痢疾要药，可单用本品煎服，也可配合辣蓼等药同用。\r\n2.用于热毒疮疡。\r\n本品功能清热解毒而消痈肿，可用于热毒疮痈，单味煎汤内服，同时用鲜草洗净，捣烂外敷。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，凉血治痢。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "马齿苋为治菌痢的要药，以用新鲜者效果较佳。本品在近年来应用范围有所发展，如用治百日咳、肺结核及化脓性疾患等。由于本品原可做蔬菜食用，即使大量应用也很安全，故是一味值得重视的药品。"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n", collegeID: "26", medicinalMaterialName: "马齿苋", image: "/vendor/images/schools/machixian_1.jpg", EnglishName: "Mǎ Chǐ Xiàn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于湿热或热毒引起的痢疾。\r\n马齿苋为治痢疾要药，可单用本品煎服，也可配合辣蓼等药同用。\r\n2.用于热毒疮疡。\r\n本品功能清热解毒而消痈肿，可用于热毒疮痈，单味煎汤内服，同时用鲜草洗净，捣烂外敷。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，凉血治痢。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "马齿苋为治菌痢的要药，以用新鲜者效果较佳。本品在近年来应用范围有所发展，如用治百日咳、肺结核及化脓性疾患等。由于本品原可做蔬菜食用，即使大量应用也很安全，故是一味值得重视的药品。"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n", collegeID: "54", medicinalMaterialName: "马齿苋", image: "/vendor/images/schools/machixian_1.jpg", EnglishName: "Mǎ Chǐ Xiàn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于湿热或热毒引起的痢疾。\r\n马齿苋为治痢疾要药，可单用本品煎服，也可配合辣蓼等药同用。\r\n2.用于热毒疮疡。\r\n本品功能清热解毒而消痈肿，可用于热毒疮痈，单味煎汤内服，同时用鲜草洗净，捣烂外敷。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，凉血治痢。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "马齿苋为治菌痢的要药，以用新鲜者效果较佳。本品在近年来应用范围有所发展，如用治百日咳、肺结核及化脓性疾患等。由于本品原可做蔬菜食用，即使大量应用也很安全，故是一味值得重视的药品。"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "马齿苋（洗净，晒干，切碎用）\r\n", collegeID: "77", medicinalMaterialName: "马齿苋", image: "/vendor/images/schools/machixian_1.jpg", EnglishName: "Mǎ Chǐ Xiàn", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于湿热或热毒引起的痢疾。\r\n马齿苋为治痢疾要药，可单用本品煎服，也可配合辣蓼等药同用。\r\n2.用于热毒疮疡。\r\n本品功能清热解毒而消痈肿，可用于热毒疮痈，单味煎汤内服，同时用鲜草洗净，捣烂外敷。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，凉血治痢。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "马齿苋为治菌痢的要药，以用新鲜者效果较佳。本品在近年来应用范围有所发展，如用治百日咳、肺结核及化脓性疾患等。由于本品原可做蔬菜食用，即使大量应用也很安全，故是一味值得重视的药品。"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "小飞蓬（洗净，晒干，切碎用）\r\n", collegeID: "11", medicinalMaterialName: "小飞蓬", image: "/vendor/images/schools/xiaofeipeng_1.jpg", EnglishName: "Xiǎo Fēi Pénɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于痢疾，腹泻不止。\r\n本品功能清热解毒，并有止泻作用，对于细菌性痢疾及急、慢性肠炎，可单用本品一两（鲜草用一两五钱），煎汁加糖服；也可配合马齿苋、辣蓼等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，止泻。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "小飞蓬（洗净，晒干，切碎用）\r\n", collegeID: "27", medicinalMaterialName: "小飞蓬", image: "/vendor/images/schools/xiaofeipeng_1.jpg", EnglishName: "Xiǎo Fēi Pénɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于痢疾，腹泻不止。\r\n本品功能清热解毒，并有止泻作用，对于细菌性痢疾及急、慢性肠炎，可单用本品一两（鲜草用一两五钱），煎汁加糖服；也可配合马齿苋、辣蓼等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，止泻。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "12", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "13", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "28", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "29", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "41", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "42", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "12", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "13", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "28", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpgqiyeyizhihua_2.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "29", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "41", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "七叶一枝花（洗净，晒干，切碎用）\r\n", collegeID: "42", medicinalMaterialName: "七叶一枝花", image: "/vendor/images/schools/qiyeyizhihua_1.jpg", EnglishName: "Qí Yè Yì Zhī Huā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于热毒疮疡、恶疮、咽喉肿痛、蛇虫咬伤等症。\r\n本品有较强的清热解毒作用，与金银花、连翘等配伍应用，治热毒疮疡；与鬼针草等同用，治毒蛇咬伤。\r\n2.用于癌肿。\r\n七叶一枝花用于癌肿，常与石见穿、半枝莲、夏枯草等药配伍应用。此外，本品尚可用于小儿高热惊风抽搐。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿，解痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.七叶一枝花原名为蚤休，又名重楼，俗称草河车。但上海地区中药店所售的蚤休（草河车），原植物为蓼科的拳参，故为了避免品种混淆起见，只称本品为七叶一枝花。\r\n2.本品清热解毒的功效颇好，用于小儿高热惊风抽搐，系取它苦寒降泄的作用，以达清热定惊的目的。"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "龙葵、龙葵草（洗净，晒干，切碎用）\r\n", collegeID: "14", medicinalMaterialName: "龙葵", image: "/vendor/images/schools/longkuigen_1.jpg", EnglishName: "Lónɡ Kuí", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于咽喉肿痛，痈肿疔毒等症。\r\n龙葵有清热解毒和散结的作用，治疗咽喉肿痛，可配合土牛膝、筋骨草、大青叶等药同用。治疗外科痈肿疔毒，可用鲜草洗净，捣烂外敷；内服可配合地丁草、野菊花、蒲公英等药同用。\r\n2.用于水肿，小便不利等症。\r\n本品兼有利尿作用，治疗水肿、小便不利等症，可配合泽泻、木通等药同用。\r\n近年来在临床上常用本品治疗癌肿，可配合蛇莓、白花蛇舌草、白英等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，散结，利尿。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "据古代文献记载，服食本品可解劳少睡。现在临床上试用本品作为避倦防睡药，在实践中体会到用本品治昏昏欲睡似有一定疗效，值得做进一步研究。"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "龙葵、龙葵草（洗净，晒干，切碎用）\r\n", collegeID: "30", medicinalMaterialName: "龙葵", image: "/vendor/images/schools/longkuigen_1.jpg", EnglishName: "Lónɡ Kuí", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于咽喉肿痛，痈肿疔毒等症。\r\n龙葵有清热解毒和散结的作用，治疗咽喉肿痛，可配合土牛膝、筋骨草、大青叶等药同用。治疗外科痈肿疔毒，可用鲜草洗净，捣烂外敷；内服可配合地丁草、野菊花、蒲公英等药同用。\r\n2.用于水肿，小便不利等症。\r\n本品兼有利尿作用，治疗水肿、小便不利等症，可配合泽泻、木通等药同用。\r\n近年来在临床上常用本品治疗癌肿，可配合蛇莓、白花蛇舌草、白英等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，散结，利尿。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "据古代文献记载，服食本品可解劳少睡。现在临床上试用本品作为避倦防睡药，在实践中体会到用本品治昏昏欲睡似有一定疗效，值得做进一步研究。"},]}},
            {collegeInfo:{belongTo: "解毒药", chufangName: "天葵子（洗净，晒干，切碎用）\r\n", collegeID: "15", medicinalMaterialName: "天葵子", image: "/vendor/images/schools/tiankuizi_1.jpg", EnglishName: "Tiān Ku&#237; Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于瘰历，乳痈，疮疡等症。\r\n本品有清热解毒、消肿散结的作用，临床常与象贝、牡蛎、夏枯草、玄参等配伍治疗瘰历；与蒲公英、鹿角霜等配伍治疗乳痈；与银花、连翘、地丁草等配伍治疗疮痈等症。\r\n2.用于肝癌、乳癌、淋巴肿瘤等症。\r\n天葵子有解毒消肿的功效，因此，近年来用于肝癌、乳癌、淋巴肿瘤等疾病，临床常与七叶一枝花、八月礼等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿散结。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "天葵子（洗净，晒干，切碎用）\r\n", collegeID: "31", medicinalMaterialName: "天葵子", image: "/vendor/images/schools/tiankuizi_1.jpg", EnglishName: "Tiān Ku&#237; Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于瘰历，乳痈，疮疡等症。\r\n本品有清热解毒、消肿散结的作用，临床常与象贝、牡蛎、夏枯草、玄参等配伍治疗瘰历；与蒲公英、鹿角霜等配伍治疗乳痈；与银花、连翘、地丁草等配伍治疗疮痈等症。\r\n2.用于肝癌、乳癌、淋巴肿瘤等症。\r\n天葵子有解毒消肿的功效，因此，近年来用于肝癌、乳癌、淋巴肿瘤等疾病，临床常与七叶一枝花、八月礼等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热解毒，消肿散结。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "龙胆草（洗净，晒干，切碎用）\r\n", collegeID: "32", medicinalMaterialName: "龙胆草", image: "/vendor/images/schools/longdan_1.jpg", EnglishName: "Lónɡ Dǎn Cǎo", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于湿热黄疸、白带、阴囊肿痛等症。\r\n龙胆草善除下焦湿热，治湿热黄疸常配茵陈、栀子同用；治下部湿热可配苦参、黄柏同用。\r\n2.用于头痛、目赤、胸胁刺痛，以及小儿惊痫抽搐等症。\r\n龙胆草为泻肝胆实火的要药，对肝火上炎的症候，多配合栀子、黄芩等应用；小儿惊风、手足抽搐由肝经热盛所致者，可用龙胆草以泻实火，配钩藤、牛黄以息风定惊，火退风息，惊搐自止。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "龙胆泻肝汤《和剂局方》：龙胆草、黄芩、栀子、泽泻、木通、车前子、当归、柴胡、生地、甘草。治肝胆实火上逆、胁痛口苦、耳聋耳肿，及肝胆湿热下注、小便淋浊、下疳溃烂、囊痈便毒、阴痒阴肿等症。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热燥湿，泻火定惊。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "龙胆草善泻肝胆实火，除下焦湿热。配以柴胡、山栀、黄芩，则清肝泻火；配木通、车前子、泽泻，则清利湿热；配黄连、牛黄、钩藤，则泻火定惊；配茵陈、郁金、黄柏，则利湿退黄。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "龙胆草（洗净，晒干，切碎用）\r\n", collegeID: "55", medicinalMaterialName: "龙胆草", image: "/vendor/images/schools/longdan_1.jpg", EnglishName: "Lónɡ Dǎn Cǎo", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于湿热黄疸、白带、阴囊肿痛等症。\r\n龙胆草善除下焦湿热，治湿热黄疸常配茵陈、栀子同用；治下部湿热可配苦参、黄柏同用。\r\n2.用于头痛、目赤、胸胁刺痛，以及小儿惊痫抽搐等症。\r\n龙胆草为泻肝胆实火的要药，对肝火上炎的症候，多配合栀子、黄芩等应用；小儿惊风、手足抽搐由肝经热盛所致者，可用龙胆草以泻实火，配钩藤、牛黄以息风定惊，火退风息，惊搐自止。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "龙胆泻肝汤《和剂局方》：龙胆草、黄芩、栀子、泽泻、木通、车前子、当归、柴胡、生地、甘草。治肝胆实火上逆、胁痛口苦、耳聋耳肿，及肝胆湿热下注、小便淋浊、下疳溃烂、囊痈便毒、阴痒阴肿等症。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热燥湿，泻火定惊。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "龙胆草善泻肝胆实火，除下焦湿热。配以柴胡、山栀、黄芩，则清肝泻火；配木通、车前子、泽泻，则清利湿热；配黄连、牛黄、钩藤，则泻火定惊；配茵陈、郁金、黄柏，则利湿退黄。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "威灵仙（洗净，晒干，切碎用）\r\n", collegeID: "56", medicinalMaterialName: "威灵仙", image: "/vendor/images/schools/weilingxian_1.jpg", EnglishName: "Wēi L&#237;nɡ Xiān", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风湿痹痛。\r\n威灵仙辛散善走，性温通利，功能祛除风湿，有较好的通络止痛作用，是治疗风湿痹痛的常用药物。用于风湿所致的肢体疼痛及脚气疼痛等症，常与羌活、独活、牛膝、秦艽等配伍同用。\r\n2.用于诸骨鲠喉。\r\n本品又能治诸骨鲠喉，可单用威灵仙15g，水煎，或加米醋煎汁，分数次含口中，缓缓吞咽。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "灵仙除痛饮（《沉氏尊生》）：威灵仙、独活、白芷、苍朮、荆芥、防风、赤芍、当归、川芎、麻黄、葛根、枳实、桔梗、甘草。治风湿痹痛。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "祛除风湿，治骨鲠。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "补益药", chufangName: "五加皮、南五加皮（洗净，晒干，切碎用）\r\n", collegeID: "37", medicinalMaterialName: "五加皮", image: "/vendor/images/schools/wujiapi_1.jpg", EnglishName: "Wǔ Jiā P&#237;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风湿痹痛，腰膝酸痛\r\n本品功能祛风湿，又能补肝肾，强筋骨，可用于风湿痹痛、筋骨拘挛、腰膝酸痛等症，对肝肾不足有风湿者最为适用，可单用浸酒服，也可与羌活、秦艽、威灵仙等配伍应用。\r\n2.用于肝肾不足、腰膝酸痛、脚膝痿弱无力、小儿行迟等症\r\n本品又能温补肝肾、强筋健骨，可用治肝肾不足所致腰膝酸疼、下肢痿弱以及小儿行迟等症，在临床应用上常与牛膝、木瓜、续断等药同用。\r\n3.用于水肿、小便不利。\r\n本品又能利水消肿，治水肿、小便不利，常配合茯苓皮、大腹皮、生姜皮、地骨等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五加皮酒（《圣惠方》）：五加皮、熟地黄、丹参、杜仲、蛇床子、干姜、地骨皮、天门冬、钟乳石。治小便余沥，妇人阴冷，腰膝时痛及瘫痪拘挛等症。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "祛除风湿，补肝肾，强筋骨，利水消肿。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.五加皮辛苦而温，能入肝肾，既能祛风除湿，风湿除则痹痛自止，又能补益肝肾，肝肾壮则筋骨自健，故风湿痹痛、肝肾不足者，咸持为要药。且能利水消肿，以治小便不利，然必须与利水消肿药配用，方能奏效焉。\r\n2.五加皮有南北两种，南五加皮为五加科植物，一般认为其补肝肾作用为佳；北五加又称香五加，为梦摩科？？柳的根皮，止痛能力较佳，且有强心之效，可治心脏病水肿，然具毒性，不宜过量久服。现上海地区市售者，为香五加应于重视。\r\n3.桑寄生与五加皮均能祛风湿、补肝肾，然桑寄生主要用于痹痛日久、肝肾不足之症，且可治年老体弱，经带之腰膝酸痛者，还有安胎作用。五加皮则祛除风湿作用较佳，用于痹痛日久，肝肾不足者，需配合应用，且有利水消肿之功。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "五加皮、南五加皮（洗净，晒干，切碎用）\r\n", collegeID: "57", medicinalMaterialName: "五加皮", image: "/vendor/images/schools/wujiapi_1.jpg", EnglishName: "Wǔ Jiā P&#237;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风湿痹痛，腰膝酸痛\r\n本品功能祛风湿，又能补肝肾，强筋骨，可用于风湿痹痛、筋骨拘挛、腰膝酸痛等症，对肝肾不足有风湿者最为适用，可单用浸酒服，也可与羌活、秦艽、威灵仙等配伍应用。\r\n2.用于肝肾不足、腰膝酸痛、脚膝痿弱无力、小儿行迟等症\r\n本品又能温补肝肾、强筋健骨，可用治肝肾不足所致腰膝酸疼、下肢痿弱以及小儿行迟等症，在临床应用上常与牛膝、木瓜、续断等药同用。\r\n3.用于水肿、小便不利。\r\n本品又能利水消肿，治水肿、小便不利，常配合茯苓皮、大腹皮、生姜皮、地骨等药同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五加皮酒（《圣惠方》）：五加皮、熟地黄、丹参、杜仲、蛇床子、干姜、地骨皮、天门冬、钟乳石。治小便余沥，妇人阴冷，腰膝时痛及瘫痪拘挛等症。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "祛除风湿，补肝肾，强筋骨，利水消肿。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.五加皮辛苦而温，能入肝肾，既能祛风除湿，风湿除则痹痛自止，又能补益肝肾，肝肾壮则筋骨自健，故风湿痹痛、肝肾不足者，咸持为要药。且能利水消肿，以治小便不利，然必须与利水消肿药配用，方能奏效焉。\r\n2.五加皮有南北两种，南五加皮为五加科植物，一般认为其补肝肾作用为佳；北五加又称香五加，为梦摩科？？柳的根皮，止痛能力较佳，且有强心之效，可治心脏病水肿，然具毒性，不宜过量久服。现上海地区市售者，为香五加应于重视。\r\n3.桑寄生与五加皮均能祛风湿、补肝肾，然桑寄生主要用于痹痛日久、肝肾不足之症，且可治年老体弱，经带之腰膝酸痛者，还有安胎作用。五加皮则祛除风湿作用较佳，用于痹痛日久，肝肾不足者，需配合应用，且有利水消肿之功。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "千年健（洗净，晒干，切碎用）\r\n", collegeID: "58", medicinalMaterialName: "千年健", image: "/vendor/images/schools/qiannianjian_1.jpg", EnglishName: "Qiān Ni&#225;n Ji&#224;n", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于风湿痹痛，腰膝酸软等症。\r\n本品既能祛风湿，又能强筋骨，用于风湿痹痛、腰酸脚软、手足拘挛麻痹等症，常与桑寄生、虎骨、牛膝等配合应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "祛除风湿，强健筋骨。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "木瓜宣木瓜（洗净，晒干，切碎用）\r\n", collegeID: "59", medicinalMaterialName: "木瓜", image: "/vendor/images/schools/mugua_1.jpg", EnglishName: "M&#249; Guā", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于风湿痹痛\r\n木瓜酸温入肝，具有除湿通络之功，为风湿痹痛、筋脉拘挛常用药，临床上治风湿痹痛时一般用于腰膝酸痛者居多，常与虎骨等配用。\r\n2.用于吐泻转筋\r\n肝主筋，吐泻失水，筋失所养，则转筋痉挛。木瓜入肝，功能缓急舒筋，故为治吐泻转筋之要药。用于暑湿霍乱，吐泻转筋之症，可配伍薏苡仁、蜇砂、黄连、吴茱萸等药同用。\r\n此外，本品又为治脚气肿痛要药，可配伍吴茱萸、紫苏、槟榔同用。尚有消食作用，可用于消化不良症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "除湿利痹，缓急舒筋，消食，治脚气。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "木瓜性味酸温，能入肝脾，舒筋活络之要药。多用于腰膝酸痛，筋挛足痿；化湿和中之良品，又能治霍乱吐泻，转筋腿痛；且为脚气要药，盖亦化湿舒筋之效，还有消食之功，助脾之能。"},]}},
            {collegeInfo:{belongTo: "补益药", chufangName: "木香、广木香（生用行气止痛）、煨木香、炙木香、炒木香（麸皮拌炒用以止泻）\r\n", collegeID: "38", medicinalMaterialName: "木香", image: "/vendor/images/schools/muxiang_1.jpg", EnglishName: "M&#249; Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于胸腹胀痛，胁肋疼痛及泻痢腹痛等症。\r\n木香辛温通散，善于行气而止痛，为行散胸腹气滞常用要药，每可与枳壳、川楝子、延胡索同用；对于胸腹胀痛，可与柴胡、郁金等品同用。又能入大肠，治疗气滞大肠，泻痢腹痛，里急后重得症候，可与槟榔、枳实、大黄等同用；对湿热泻痢，腹痛常与黄连配伍同用。\r\n此外，木香常用于补益剂中，以舒畅气机，使补益药补而不滞。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "木香槟榔丸（《卫生宝鉴》）木香、槟榔、青皮、陈皮、枳壳、黄柏、黄连、吴茱萸、三棱、莪朮、大黄、香附、牵牛、芒硝。治痢下腹痛。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "行气止痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.木香，苦辛性温，芳香浓郁，行气力佳，能宣三焦之气滞，解寒凝之诸痛，然以疏理胃肠之气分阻滞为主，具有消胀除痛之卓功。唯行气宜生用，炒用则走散之性虽有丧失，却有实大肠之效用，常用于泻痢腹痛之症。\r\n2.木香，古代文献又称之为青木香，与目前习以马兜铃根为青木香，品种不同功用有异应于注意。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "木香、广木香（生用行气止痛）、煨木香、炙木香、炒木香（麸皮拌炒用以止泻）\r\n", collegeID: "60", medicinalMaterialName: "木香", image: "/vendor/images/schools/muxiang_1.jpg", EnglishName: "M&#249; Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于胸腹胀痛，胁肋疼痛及泻痢腹痛等症。\r\n木香辛温通散，善于行气而止痛，为行散胸腹气滞常用要药，每可与枳壳、川楝子、延胡索同用；对于胸腹胀痛，可与柴胡、郁金等品同用。又能入大肠，治疗气滞大肠，泻痢腹痛，里急后重得症候，可与槟榔、枳实、大黄等同用；对湿热泻痢，腹痛常与黄连配伍同用。\r\n此外，木香常用于补益剂中，以舒畅气机，使补益药补而不滞。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "木香槟榔丸（《卫生宝鉴》）木香、槟榔、青皮、陈皮、枳壳、黄柏、黄连、吴茱萸、三棱、莪朮、大黄、香附、牵牛、芒硝。治痢下腹痛。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "行气止痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.木香，苦辛性温，芳香浓郁，行气力佳，能宣三焦之气滞，解寒凝之诸痛，然以疏理胃肠之气分阻滞为主，具有消胀除痛之卓功。唯行气宜生用，炒用则走散之性虽有丧失，却有实大肠之效用，常用于泻痢腹痛之症。\r\n2.木香，古代文献又称之为青木香，与目前习以马兜铃根为青木香，品种不同功用有异应于注意。\r\n"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "九香虫、灸九香虫（炒微焦用）\r\n", collegeID: "43", medicinalMaterialName: "九香虫", image: "/vendor/images/schools/jiuxiangchong_1.jpg", EnglishName: "Jiǔ Xiānɡ Ch&#243;nɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于脘腹胀痛，胁肋疼痛等症。\r\n九香虫温性通利，能行气散滞而止痛，适用于寒郁中焦或肝胃不和所致的脘腹胀痛、胁肋疼痛等症，可配木香、川楝子等同用。\r\n2.用于阳痿，肾虚腰痛。\r\n本品性温入肾，能温肾助阳，用于肾阳不足、阳痿尿濒等症，可配仙灵脾、巴戟天等同用；用治肾虚腰痛，可与杜仲、补骨脂等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "乌龙丸（《摄生方》）：九香虫、车前子、橘皮、白朮、杜仲治膈脘滞气，脾肾亏损。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "行气止痛，温肾助阳。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "大腹皮、槟榔皮（洗净，晒干用）\r\n", collegeID: "61", medicinalMaterialName: "大腹皮", image: "/vendor/images/schools/dafupi_1.jpg", EnglishName: "D&#224; F&#249; P&#237;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于脘腹胀痛\r\n大腹皮功能行气利水疏滞、宽中除胀而止痛，适用于脾胃气滞所致的脘腹胀痛，常与厚朴、陈皮等药配伍同用。\r\n2.用于水肿，脚气肿痛\r\n大腹皮又能利水消肿，用于水湿外溢、水肿、小便不利之证，常与茯苓皮、冬瓜皮等配伍；用于脚气肿痛，可与木瓜、苏叶、槟榔等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "大腹皮散（《证治准绳》）：大腹皮、木瓜、苏子、槟榔、荆芥穗、陈皮（去白）、紫苏叶、莱菔子、沉香、桑白皮、枳壳。治脚气肿满，小便不利。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "行气止痛，利水消肿。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "川楝子金铃子灸川楝子（清炒至微焦用）\r\n", collegeID: "44", medicinalMaterialName: "川楝子", image: "/vendor/images/schools/chuanlianzi_1.jpg", EnglishName: "Chuān Li&#224;n Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于?肋疼痛，脘腹胀痛及疝痛，痛经等症\r\n川楝子功能行气，归肝经，善治肝气犯胃疼痛以及?肋疼痛、经行腹痛；又入胃经，对脾胃气滞、脘腹胀痛，亦颇为常用，常与延胡索等配伍同用。且性味苦寒，行气而无辛燥之弊，故亦可用于肝阴不足、肝气不舒之?痛等症，可配沙参、麦冬等同用。治疝气痛，常配合小茴香、青皮等同用。\r\n2.用于虫积腹痛，头癣\r\n川楝子有杀虫的功效，又能止痛，用治虫积腹痛，常配合槟榔、使君子等同用；但其功效较苦楝根皮为弱。外用又可治头癣；焙黄研末，用猪油或麻油调成油膏，涂于患处（在涂药前先须将患处洗净）。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "一贯煎（《柳州医话》）：北沙参、麦冬、当归、生地黄、杞子、川\r\n楝子。治肝肾阴虚，肝气不舒，胸脘?闷吞酸吐苦，咽干口燥，舌红少津及疝气瘕聚等。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "疏肝理气，杀虫疗癣。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "川楝子能入肝、胃，行气止痛力佳，善治脘腹胀痛，对肝气郁结?痛、经痛、疝痛均有良好疗效。且苦寒而不辛燥，无伤阴之弊，对阴虚气滞用之尤为惬当。同时又能杀虫，内服可治虫积腹痛，外用可治头癣。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "川楝子金铃子灸川楝子（清炒至微焦用）\r\n", collegeID: "62", medicinalMaterialName: "川楝子", image: "/vendor/images/schools/chuanlianzi_1.jpg", EnglishName: "Chuān Li&#224;n Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于?肋疼痛，脘腹胀痛及疝痛，痛经等症\r\n川楝子功能行气，归肝经，善治肝气犯胃疼痛以及?肋疼痛、经行腹痛；又入胃经，对脾胃气滞、脘腹胀痛，亦颇为常用，常与延胡索等配伍同用。且性味苦寒，行气而无辛燥之弊，故亦可用于肝阴不足、肝气不舒之?痛等症，可配沙参、麦冬等同用。治疝气痛，常配合小茴香、青皮等同用。\r\n2.用于虫积腹痛，头癣\r\n川楝子有杀虫的功效，又能止痛，用治虫积腹痛，常配合槟榔、使君子等同用；但其功效较苦楝根皮为弱。外用又可治头癣；焙黄研末，用猪油或麻油调成油膏，涂于患处（在涂药前先须将患处洗净）。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "一贯煎（《柳州医话》）：北沙参、麦冬、当归、生地黄、杞子、川\r\n楝子。治肝肾阴虚，肝气不舒，胸脘?闷吞酸吐苦，咽干口燥，舌红少津及疝气瘕聚等。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "疏肝理气，杀虫疗癣。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "川楝子能入肝、胃，行气止痛力佳，善治脘腹胀痛，对肝气郁结?痛、经痛、疝痛均有良好疗效。且苦寒而不辛燥，无伤阴之弊，对阴虚气滞用之尤为惬当。同时又能杀虫，内服可治虫积腹痛，外用可治头癣。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "丁香公丁香（生用，花蕾）母丁香鸡舌香（生用，果实）\r\n", collegeID: "63", medicinalMaterialName: "丁香", image: "/vendor/images/schools/dingxiang_1.jpg", EnglishName: "Dīnɡ Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于呃逆，呕吐等症\r\n丁香温中散寒，善于降逆，故为治胃寒呃逆、呕吐的要药。治呃逆，常与降气止呃的柿蒂配伍；治呕吐，可与降逆止呕的半夏同用。\r\n2.用于脘腹疼痛\r\n丁香温中散寒，又能止痛，可用治脘腹疼痛，可与肉桂等同用。\r\n3.用于肾阳不足、阳萎、脚弱及寒湿带下等症\r\n丁香又能温肾助阳，以治肾虚阳萎、寒湿带下等症，可与附子、肉桂、小茴香、巴戟天、肉苁蓉等同用。\r\n此外，丁香外用有温通散寒、消肿止痛的作用，可用于阴疽、跌打损伤等症，常与肉桂等分，研末同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "丁香柿蒂汤（《证因脉治》）：丁香、柿蒂、人参、生姜。治久病呃逆，因于寒者。\r\n丁桂散（《上海市中成药制剂规范》）：丁香、肉桂。治胃脘疼痛、脐腹冷痛、腹泻，以及外科疮肿，损伤肿痛等证候。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "降气止呃，温中散寒止痛，温肾助阳。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.丁香性味辛温，气味芳香，温中焦而降胃气，善治呃逆、呕吐；暖下焦而助肾阳，可治阳萎宫冷之症。\r\n2.丁香虽能温中降逆，能治脾胃不和之症，然有特殊香气，有些病员服后有不适应的反应，故当视人而投治。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "丁香、公丁香（药用花蕾，功效较佳，晒干用。）、母丁香（药用果实，功效较弱，晒干用。）\r\n", collegeID: "67", medicinalMaterialName: "丁香", image: "/vendor/images/schools/dingxiang_1.jpg", EnglishName: "Dīnɡ Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于呃逆，呕吐等症\r\n丁香温中散寒，善于降逆，故为治胃寒呃逆、呕吐的要药。治呃逆，常与降气止呃的柿蒂配伍；治呕吐，可与降逆止呕的半夏同用。\r\n2.用于脘腹疼痛\r\n丁香温中散寒，又能止痛，可用治脘腹疼痛，可与肉桂等同用。\r\n3.用于肾阳不足、阳萎、脚弱及寒湿带下等症\r\n丁香又能温肾助阳，以治肾虚阳萎、寒湿带下等症，可与附子、肉桂、小茴香、巴戟天、肉苁蓉等同用。\r\n此外，丁香外用有温通散寒、消肿止痛的作用，可用于阴疽、跌打损伤等症，常与肉桂等分，研末同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "丁香柿蒂汤（《证因脉治》）：丁香、柿蒂、人参、生姜。治久病呃逆，因于寒者。\r\n丁桂散（《上海市中成药制剂规范》）：丁香、肉桂。治胃脘疼痛、脐腹冷痛、腹泻，以及外科疮肿，损伤肿痛等证候。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "降气止呃，温中散寒止痛，温肾助阳。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.丁香性味辛温，气味芳香，温中焦而降胃气，善治呃逆、呕吐；暖下焦而助肾阳，可治阳萎宫冷之症。\r\n2.丁香虽能温中降逆，能治脾胃不和之症，然有特殊香气，有些病员服后有不适应的反应，故当视人而投治。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "川芎、抚芎（洗净，晒干，切碎用）、灸川芎（清炒至微焦）\r\n", collegeID: "64", medicinalMaterialName: "川芎", image: "/vendor/images/schools/chuanxiong_1.jpg", EnglishName: "Chuān Xiōnɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于胸胁疼痛，风湿痹痛，症瘕结块，疮疡肿痛，跌扑伤痛，月经不调，经闭痛经，产后瘀痛等病症。\r\n川芎辛散温通，功能活血祛瘀，作用广泛，适用于各种瘀血阻滞之病症，尤为妇科调经要药。治月经不调、经闭、痛经，常配当归等药同用；治胸胁疼痛，可配柴胡、香附等同用；治风湿痹痛，可配羌活、独活等同用；治症瘕结块，可配三棱、莪朮等同用；治疮疡肿痛、跌打损伤，可配乳香、没药等同用。\r\n2.用于感冒头痛，偏正头痛等症。\r\n川芎辛香善升，能上行头目巅顶，具有祛风止痛作用，为治头风头痛要药，可配细辛、白芷等同用，亦可跟据头痛属于何经进行适当配伍。对于感受风邪引起的头痛，若可荆芥、防风、羌活等同用治风寒感冒头痛；与菊花、僵蚕等配伍，治风热头痛。\r\n此外，近年来临床常用本品治疗冠心病心绞痛。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "川芎茶调散（《和局方剂》）：川芎、细辛、白芷、羌活、防风、荆芥、薄荷、甘草。治风寒感冒头痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "活血祛瘀，祛风止痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.川芎原名芎藭。辛温香燥，走而不守，既能行散，上行可达巅顶；又入血分，下行可达血海。活血祛瘀作用广泛，适宜瘀血阻滞各种病症；祛风止痛，效用甚佳，可治头风头痛、风湿痹痛等症。\r\n2.昔人谓川芎为血中之气药，殆言其寓辛散、解郁、通达、止痛诸功欤？此说可供参考。\r\n3.本品辛温升散，凡阴虚阳亢及肝阳上亢者不宜应用；月经过多、孕妇亦忌用。\r\n"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "马鞭草（洗净，晒干，切碎用）\r\n", collegeID: "45", medicinalMaterialName: "马鞭草", image: "/vendor/images/schools/mabiancao_1.jpg", EnglishName: "Mǎ Biān Cǎo", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于症瘕结块，跌仆伤痛，风湿痹痛，经闭经痛等症\r\n马鞭草入肝经血分，具有活血祛瘀、通经的作用，治关节酸痛、跌扑损伤，可配合红花、落得打等药同用；治妇女瘀阻经闭、痛经，可配合益母草、香附等药同用；用于症瘕结块，可配合三棱、莪朮等同用。\r\n2.用于水肿、脚气、小便不利，以及截疟等症\r\n马鞭草又有利水消肿的功效，可用于水肿、脚气、小便不利等症。近人用以治疗晚期血吸虫病腹水，配合刘寄奴、半边莲等药同用，有一定的消水退肿作用；如用治脚气，可配合牛膝、木瓜、车前草等同用；治疟疾可单用本品煎服。\r\n此外，本品配合茶叶或马齿苋可用以治疗痢疾泄泻。用本品鲜草适量，洗净，捣烂取汁含咽，有可治疗咽喉肿痛。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "活血祛瘀，利水，截疟。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "马鞭草（洗净，晒干，切碎用）\r\n", collegeID: "65", medicinalMaterialName: "马鞭草", image: "/vendor/images/schools/mabiancao_1.jpg", EnglishName: "Mǎ Biān Cǎo", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于症瘕结块，跌仆伤痛，风湿痹痛，经闭经痛等症\r\n马鞭草入肝经血分，具有活血祛瘀、通经的作用，治关节酸痛、跌扑损伤，可配合红花、落得打等药同用；治妇女瘀阻经闭、痛经，可配合益母草、香附等药同用；用于症瘕结块，可配合三棱、莪朮等同用。\r\n2.用于水肿、脚气、小便不利，以及截疟等症\r\n马鞭草又有利水消肿的功效，可用于水肿、脚气、小便不利等症。近人用以治疗晚期血吸虫病腹水，配合刘寄奴、半边莲等药同用，有一定的消水退肿作用；如用治脚气，可配合牛膝、木瓜、车前草等同用；治疟疾可单用本品煎服。\r\n此外，本品配合茶叶或马齿苋可用以治疗痢疾泄泻。用本品鲜草适量，洗净，捣烂取汁含咽，有可治疗咽喉肿痛。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "活血祛瘀，利水，截疟。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "槟榔、大槟榔、大腹子（晒干，打碎用）\r\n", collegeID: "46", medicinalMaterialName: "槟榔", image: "/vendor/images/schools/binglang_1.jpg", EnglishName: "Bīnɡ Lɑnɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于多种肠寄生虫疾病。\r\n槟榔杀虫，作用广泛，可用于多种肠寄生虫，如绦虫、蛔虫、姜片虫、蛲虫等，而以治绦虫、姜片虫疗效较佳，尤以猪肉绦虫最有效可使绦虫全虫瘫痪，如配合番瓜子同用，较果更为显着。对蛔虫、蛲虫也有驱除作用。同时，本品并有泻下作用，是一种较好的驱虫药，可单独使用。\r\n2.用于食积气滞、脘腹胀痛、大便不爽等症。\r\n槟榔行气消积作用较为显着，一般认为有“破气”的功能，对于脘腹胀痛、大便无爽泻痢后重等气滞病症，常配合枳实、木等同用。\r\n3.用于脚气、水肿等症。\r\n槟榔又有行气利水的作用，临床上多用为治脚气疼痛的要药，常可配合木瓜、吴茱萸等同用；对于水肿实证，又可配合商陆、木通、泽泻等利水消肿药同用。\r\n此外，本品还可用于疟疾，常配合常山、草果等应用。近时并用于血吸虫病。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "杀虫，消积，行水。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "木蝴蝶、玉蝴蝶、千张纸（晒干用）\r\n", collegeID: "78", medicinalMaterialName: "木蝴蝶", image: "/vendor/images/schools/muhudie_1.jpg", EnglishName: "M&#249; H&#250; Di&#233;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于咳嗽音哑。\r\n本品有清肺开音的效用，能治疗咳嗽音哑的症候，临床上常与宣肺、止咳、化痰等药物配合应用。\r\n2.用于肝胃气痛。\r\n本品又能疏肝理气，可以治疗肝胃气。常配合香附、金铃子等药同用。\r\n此外，木蝴蝶还可用贴痈疽，有收敛疮口的作用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清肺开音，疏肝理气。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "千年红、千日红（晒干用）\r\n", collegeID: "79", medicinalMaterialName: "千日红", image: "/vendor/images/schools/qianrihong_1.gif", EnglishName: "Qiān Rì Hónɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于咳嗽，百日咳，哮喘等症。\r\n本品有止咳平喘作用，对于咳嗽痰多，或咳嗽气急，或百日咳，或哮喘等症，都可应用。\r\n2.用于眼目昏糊等症。\r\n本品又能平肝明目，对于眼目昏糊，亦可应用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: ""},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "止咳平喘，平肝明目。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "钟乳石、滴乳石、石钟乳（生用或?用）\r\n", collegeID: "47", medicinalMaterialName: "钟乳石", image: "/vendor/images/schools/zhongrushi_1.jpg", EnglishName: "Zhōnɡ Rǔ Sh&#237;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于肺虚劳嗽，咳痰喘急，以及乳汁不通等症。\r\n本品性味甘温，入肺能温肺化饮，可治肺虚劳嗽；入肾能壮阳纳气，可以治疗阳虚冷喘；入胃能益气通乳，可以治乳汁不下等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "钟乳丸《张氏医通》：钟乳石、麻黄、杏仁、甘草。治冷哮痰喘。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "温肺助阳，化痰平喘。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "《本草纲目》在本项下，有“鹅管石”的释名。不过现在市售的鹅管石有两种：一种为管状而中空的钟乳石的长尖端部份，称“钟乳鹅管石”，另一种为珊瑚虫类笛珊瑚的石灰质骨骼，称“珊瑚鹅管石”。其临床应用，一般认为与钟乳石的功效相同。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "钟乳石、滴乳石、石钟乳（生用或?用）\r\n", collegeID: "80", medicinalMaterialName: "钟乳石", image: "/vendor/images/schools/zhongrushi_1.jpg", EnglishName: "Zhōnɡ Rǔ Sh&#237;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于肺虚劳嗽，咳痰喘急，以及乳汁不通等症。\r\n本品性味甘温，入肺能温肺化饮，可治肺虚劳嗽；入肾能壮阳纳气，可以治疗阳虚冷喘；入胃能益气通乳，可以治乳汁不下等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "钟乳丸《张氏医通》：钟乳石、麻黄、杏仁、甘草。治冷哮痰喘。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "温肺助阳，化痰平喘。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "《本草纲目》在本项下，有“鹅管石”的释名。不过现在市售的鹅管石有两种：一种为管状而中空的钟乳石的长尖端部份，称“钟乳鹅管石”，另一种为珊瑚虫类笛珊瑚的石灰质骨骼，称“珊瑚鹅管石”。其临床应用，一般认为与钟乳石的功效相同。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "淡干姜、均姜、泡姜（取生姜用沸水泡浸，干燥后应用。）\r\n", collegeID: "66", medicinalMaterialName: "干姜", image: "/vendor/images/schools/ganjiang_1.jpg", EnglishName: "G&#224;n Jiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于脾胃虚寒、呕吐泄泻、脘腹冷痛，阴寒内盛、四肢厥冷、脉微弱等症\r\n本品善温脾胃之阳而除里寒，常与党参、白朮、炙甘草等配伍同用。如辅助附子，可增强回阳救逆之功，以治阴寒内盛、四肢厥冷等症。\r\n2.用于肺寒咳嗽、痰稀而多、形如白沫\r\n本品温燥辛散，不仅能温肺以散寒，又能燥湿以化痰，故可用于寒咳多痰之症，常与细辛、五味子、茯苓、炙甘草等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "理中汤《伤寒论》：人参、干姜、白朮、甘草。治脾胃虚寒，腹痛下利，以及胃中寒饮，喜唾涎沫。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "温中，回阳，温肺化痰。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.姜，原为民间常用药物，亦作为佐餐之品。由于治疗上的需要，通过不同的加工炮制，就分为生姜、煨姜、干姜、炮姜等数种。\r\n2.生姜性温味辛，长于发散，又能温中而止呕，多用于外感风寒及胃中寒饮等症；干姜辛散之性已减，而偏于治里寒之症，故以温中回阳、温肺化痰为主；炮姜又名黑姜，已无辛散作用，故以温经止血及温中止泻为它的专长。因此，前人有“生姜走而不守，干姜能走能守，炮姜守而不走”的说法。至于煨姜，是用生姜煨熟，比生姜则不散，比干姜则不燥，其性与炮姜略同而力较逊，专主温里而治胃腹冷痛。\r\n3.干姜与附子同，功能回阳；但干姜偏脾胃之阳，而附子偏温脾肾之阳。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "淡干姜、均姜、泡姜（取生姜用沸水泡浸，干燥后应用。）\r\n", collegeID: "81", medicinalMaterialName: "干姜", image: "/vendor/images/schools/ganjiang_1.jpg", EnglishName: "G&#224;n Jiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于脾胃虚寒、呕吐泄泻、脘腹冷痛，阴寒内盛、四肢厥冷、脉微弱等症\r\n本品善温脾胃之阳而除里寒，常与党参、白朮、炙甘草等配伍同用。如辅助附子，可增强回阳救逆之功，以治阴寒内盛、四肢厥冷等症。\r\n2.用于肺寒咳嗽、痰稀而多、形如白沫\r\n本品温燥辛散，不仅能温肺以散寒，又能燥湿以化痰，故可用于寒咳多痰之症，常与细辛、五味子、茯苓、炙甘草等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "理中汤《伤寒论》：人参、干姜、白朮、甘草。治脾胃虚寒，腹痛下利，以及胃中寒饮，喜唾涎沫。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "温中，回阳，温肺化痰。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.姜，原为民间常用药物，亦作为佐餐之品。由于治疗上的需要，通过不同的加工炮制，就分为生姜、煨姜、干姜、炮姜等数种。\r\n2.生姜性温味辛，长于发散，又能温中而止呕，多用于外感风寒及胃中寒饮等症；干姜辛散之性已减，而偏于治里寒之症，故以温中回阳、温肺化痰为主；炮姜又名黑姜，已无辛散作用，故以温经止血及温中止泻为它的专长。因此，前人有“生姜走而不守，干姜能走能守，炮姜守而不走”的说法。至于煨姜，是用生姜煨熟，比生姜则不散，比干姜则不燥，其性与炮姜略同而力较逊，专主温里而治胃腹冷痛。\r\n3.干姜与附子同，功能回阳；但干姜偏脾胃之阳，而附子偏温脾肾之阳。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "丁香公丁香（生用，花蕾）母丁香鸡舌香（生用，果实）\r\n", collegeID: "63", medicinalMaterialName: "丁香", image: "/vendor/images/schools/dingxiang_1.jpg", EnglishName: "Dīnɡ Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于胃腹冷痛、呃逆、呕吐等症\r\n丁香温中散寒，善于降逆，故为治胃寒呃逆、呕吐的要药。治呃逆，常与降气止呃的柿蒂配伍；治呕吐，可与降逆止呕的半夏同用。如遇胃热呕呃，因本品性温，则不宜应用。\r\n2.用于肾阳不足，及寒湿带下等症\r\n丁香又能温肾助阳，以治肾虚阳萎、寒湿带下等症，可与附子、肉桂、小茴香、巴戟天、肉苁蓉等同用。\r\n此外，丁香与肉桂等分，共研细末，名丁桂散。外用有温经通络、活血止痛的作用，可用于阴疽、跌打损伤等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "丁香柿蒂汤（《证因脉治》）：丁香、柿蒂、人参、生姜。治久病呃逆，因于寒者。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "温中降逆，温肾助阳。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "丁香、公丁香（药用花蕾，功效较佳，晒干用。）、母丁香（药用果实，功效较弱，晒干用。）\r\n", collegeID: "67", medicinalMaterialName: "丁香", image: "/vendor/images/schools/dingxiang_1.jpg", EnglishName: "Dīnɡ Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于胃腹冷痛、呃逆、呕吐等症\r\n丁香温中散寒，善于降逆，故为治胃寒呃逆、呕吐的要药。治呃逆，常与降气止呃的柿蒂配伍；治呕吐，可与降逆止呕的半夏同用。如遇胃热呕呃，因本品性温，则不宜应用。\r\n2.用于肾阳不足，及寒湿带下等症\r\n丁香又能温肾助阳，以治肾虚阳萎、寒湿带下等症，可与附子、肉桂、小茴香、巴戟天、肉苁蓉等同用。\r\n此外，丁香与肉桂等分，共研细末，名丁桂散。外用有温经通络、活血止痛的作用，可用于阴疽、跌打损伤等症。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "丁香柿蒂汤（《证因脉治》）：丁香、柿蒂、人参、生姜。治久病呃逆，因于寒者。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "温中降逆，温肾助阳。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "天麻、明天麻（洗净，晒干，切片用）、煨天麻（用麸皮同炒后应用）\r\n", collegeID: "33", medicinalMaterialName: "天麻", image: "/vendor/images/schools/tianma_1.jpg", EnglishName: "Tiān M&#225;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于头晕目眩。\r\n天麻为治眩晕的要药，其功用主要为平肝息风。用治肝阳上亢的眩晕，可与钩藤、石决明等配伍；如风痰为患引起之眩晕，又可以半夏、白朮、茯苓等配伍同用。\r\n2.用于热病动风、惊痫抽搐等症。\r\n天麻虽无清热之功，却具有良好的息肝风、定惊搐的作用，为治疗肝风内动的要药。对高热动风、惊痫抽搐、角弓反张等症，常与钩藤、全蝎等配伍同用。\r\n3.用于头痛，痹痛，肢体麻木等症。\r\n天麻在古方中有治肝虚头痛风湿痹痛等症的记载，如配川芎等以治头痛，配全蝎、乳香等以治痹痛等。此外，对于肢体麻木、手足不遂，常配当归、牛膝等，则为临床所常用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "天麻丸《普济方》：天麻、川芎。治偏正头痛，神昏目花。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "平肝息风，通络止痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.天麻一药，主要的作用是用于治风。它既能平息肝风，又能驱除风湿，不过，现在临床上用以平肝镇痉的居多，为治头晕常用药品。\r\n2.《内经》上说：「诸风掉眩，皆属于肝」。但眩晕之症有虚实之分，当视具体症候，辩证应用。因本品之功虽好，稍嫌温燥，故适用于肝阳上亢所致的头晕，如夹痰湿者亦为适宜；如属血虚肝旺引起的头晕，须配养血柔肝药如当归、枸杞、白芍等同用。至于阴虚液少、舌绛胎剥者，则宜滋肾养阴为主，一般不用天麻。\r\n"},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "天麻、明天麻（洗净，晒干，切片用）、煨天麻（用麸皮同炒后应用）\r\n", collegeID: "68", medicinalMaterialName: "天麻", image: "/vendor/images/schools/tianma_1.jpg", EnglishName: "Tiān M&#225;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于头晕目眩。\r\n天麻为治眩晕的要药，其功用主要为平肝息风。用治肝阳上亢的眩晕，可与钩藤、石决明等配伍；如风痰为患引起之眩晕，又可以半夏、白朮、茯苓等配伍同用。\r\n2.用于热病动风、惊痫抽搐等症。\r\n天麻虽无清热之功，却具有良好的息肝风、定惊搐的作用，为治疗肝风内动的要药。对高热动风、惊痫抽搐、角弓反张等症，常与钩藤、全蝎等配伍同用。\r\n3.用于头痛，痹痛，肢体麻木等症。\r\n天麻在古方中有治肝虚头痛风湿痹痛等症的记载，如配川芎等以治头痛，配全蝎、乳香等以治痹痛等。此外，对于肢体麻木、手足不遂，常配当归、牛膝等，则为临床所常用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "天麻丸《普济方》：天麻、川芎。治偏正头痛，神昏目花。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "平肝息风，通络止痛。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.天麻一药，主要的作用是用于治风。它既能平息肝风，又能驱除风湿，不过，现在临床上用以平肝镇痉的居多，为治头晕常用药品。\r\n2.《内经》上说：「诸风掉眩，皆属于肝」。但眩晕之症有虚实之分，当视具体症候，辩证应用。因本品之功虽好，稍嫌温燥，故适用于肝阳上亢所致的头晕，如夹痰湿者亦为适宜；如属血虚肝旺引起的头晕，须配养血柔肝药如当归、枸杞、白芍等同用。至于阴虚液少、舌绛胎剥者，则宜滋肾养阴为主，一般不用天麻。\r\n"},]}},
            {collegeInfo:{belongTo: "清热药", chufangName: "钩藤、嫩钩藤、嫩双钩、嫩钩钩（晒干用）\r\n", collegeID: "34", medicinalMaterialName: "钩藤", image: "/vendor/images/schools/gouteng_1.jpg", EnglishName: "Gōu T&#233;nɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于肝火头胀、头痛，及肝阳上亢、头晕目眩等症。\r\n钩藤清肝泄热而平肝阳，故常用于肝火头胀及肝阳上亢的实症。配夏枯草、黄芩，能清泄肝火；配石决明、菊花，能平降肝阳。\r\n2.用于热病高热、肝风内动、惊痫抽搐及妇女子痫等症。\r\n钩藤的清热作用并不显着，但因它有息风镇痉的作用，故遇有惊痫抽搐之症，，则往往取以应用，临床多与天麻、石决明、全蝎等配伍；如属高热动风，可与羚羊角、菊花、龙胆草等同用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "钩藤饮《本事方》：钩藤、菊花、防风、人参、茯神、半夏、陈皮、麦冬、石膏、甘草。治肝厥头痛。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "清热平肝，息风镇痉。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "1.钩藤清疳热而平肝息风，在临床上常常用以平降肝阳。它的清热之功不如羚羊角，息风镇痉的作用亦较羚羊角、全蝎、蜈蚣为弱。故在高热惊风抽搐时，宜加羚羊角（山羊角）；如抽搐严重，须配全蝎、蜈蚣。\r\n2.现知本品有良好的降压作用，这说明前人的宝贵经验，已为现代科学所证实。\r\n"},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "炙远志、远志肉、远志筒（用甘草汤浸泡，微火煮至汤吸尽，趁热抽去木心，再用麸皮炒黄应用。）\r\n", collegeID: "82", medicinalMaterialName: "远志", image: "/vendor/images/schools/yuanzhi_1.jpg", EnglishName: "Yuǎn Zh&#236;", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于痰迷神昏，惊悸，失眠等症。\r\n远志能豁痰开窍，对于痰迷神昏，常与菖蒲、郁金等同用；又能宁心安神，对于失眠、惊悸，常与枣仁、茯苓等同用。\r\n2.用于咳嗽痰多。\r\n远志能促使痰涎排出，以治咳嗽、咯痰不爽，常与杏仁、贝母、紫苑等同用。\r\n此外，本品还可用治疮痈初起，用远志五钱至一两，隔水蒸软，加少量黄酒，捣烂外敷患处，有消痈之功。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "定志丸《千金方》：远志、菖莆、人参、茯苓。治精神不安。"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "安神，袪痰，消痈。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "阿胶、陈阿胶、驴皮胶（补血止血）。阿胶珠、蛤粉炒阿胶（用海蛤壳研粉同炒，用以润肺化痰，止咳止血）。蒲黄炒阿胶（用以止血）。\r\n", collegeID: "83", medicinalMaterialName: "阿胶", image: "/vendor/images/schools/ejiao_1.jpg", EnglishName: "ē Jiāo", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于血虚萎黄，眩晕，心悸等症。\r\n阿胶补血作用较佳，为治血虚的要药，常配伍当归、党参、黄耆等同用。\r\n2.用于虚劳咯血、吐血、便血、尿血、崩漏等症。\r\n阿胶善于止血，对一切失血之症，均可应用，然以咯血、便血、崩漏等用之较为适宜。对出血而出现的血虚症候，应用阿胶既能止血，又能补血，有标本兼顾之效。临床上用于止血，常与生地黄、蒲黄、藕节等同用。\r\n3.用于热病伤阴，虚烦不眠等症。\r\n本品能滋阴而润燥，对热病伤阴，内风欲动，常配合钩藤、牡蛎等同用；对阴亏火炽、虚烦不眠，常配合白芍、黄连等同用。\r\n此外，本品又可用于阴虚咳嗽、咯血，常与麦冬、沙参、马兜铃等配伍，有养阴润肺止血的功效。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "补肺阿胶汤《小儿药证直诀》：阿胶、马兜铃、牛蒡子、炙甘草、杏仁、糯米。治阴虚火盛，咳嗽，气急，痰少而粘，或痰中带血，咽干或咽痛，咽红。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "补血止血，滋阴润肺。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: "阿胶与熟地都能补血滋阴，但阿胶的补血功效较佳，且能润肺、止血，它的粘腻之性超过熟地；熟地则以补肾滋阴见长。凡内有瘀滞，脾胃虚弱、消化不良以及有表症者，均不宜应用阿胶。\r\n"},]}},
            {collegeInfo:{belongTo: "驱虫药", chufangName: "五倍子（煮死内部寄生虫后晒干应用）。\r\n", collegeID: "48", medicinalMaterialName: "五倍子", image: "/vendor/images/schools/wubeizi_1.jpg", EnglishName: "Wǔ B&#232;i Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于肺虚久咳。\r\n五倍子药性收敛，功能敛肺止咳，用治肺虚久咳，可与五味子、婴粟壳等敛肺药同用。\r\n2.用于久痢久泻。\r\n五倍子又可涩肠止泻，治疗久痢久泻之症，常与五味子、白朮、补骨脂、丁香等配合同用。\r\n3.用于体虚汗多，以及痔血、便血等症。\r\n五倍子用于止虚汗也有作用，可单味研粉敷脐孔上，或煎服；亦可与诃子、五味子等药同用。本品又有止血的功效，可用于痔血、便血等症。\r\n此外，五倍子又能用治遗精、遗尿、脱肛等病症，还可外用敷治疮毒皮肤湿烂。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五倍子散《珍珠囊》：五倍子、地榆治小儿脱肛。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "敛肺降火，涩肠止泻，敛汗，止血。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "五倍子（煮死内部寄生虫后晒干应用）。\r\n", collegeID: "69", medicinalMaterialName: "五倍子", image: "/vendor/images/schools/wubeizi_1.jpg", EnglishName: "Wǔ B&#232;i Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于肺虚久咳。\r\n五倍子药性收敛，功能敛肺止咳，用治肺虚久咳，可与五味子、婴粟壳等敛肺药同用。\r\n2.用于久痢久泻。\r\n五倍子又可涩肠止泻，治疗久痢久泻之症，常与五味子、白朮、补骨脂、丁香等配合同用。\r\n3.用于体虚汗多，以及痔血、便血等症。\r\n五倍子用于止虚汗也有作用，可单味研粉敷脐孔上，或煎服；亦可与诃子、五味子等药同用。本品又有止血的功效，可用于痔血、便血等症。\r\n此外，五倍子又能用治遗精、遗尿、脱肛等病症，还可外用敷治疮毒皮肤湿烂。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五倍子散《珍珠囊》：五倍子、地榆治小儿脱肛。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "敛肺降火，涩肠止泻，敛汗，止血。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "止咳药", chufangName: "五倍子（煮死内部寄生虫后晒干应用）。\r\n", collegeID: "84", medicinalMaterialName: "五倍子", image: "/vendor/images/schools/wubeizi_1.jpg", EnglishName: "Wǔ B&#232;i Zǐ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "1.用于肺虚久咳。\r\n五倍子药性收敛，功能敛肺止咳，用治肺虚久咳，可与五味子、婴粟壳等敛肺药同用。\r\n2.用于久痢久泻。\r\n五倍子又可涩肠止泻，治疗久痢久泻之症，常与五味子、白朮、补骨脂、丁香等配合同用。\r\n3.用于体虚汗多，以及痔血、便血等症。\r\n五倍子用于止虚汗也有作用，可单味研粉敷脐孔上，或煎服；亦可与诃子、五味子等药同用。本品又有止血的功效，可用于痔血、便血等症。\r\n此外，五倍子又能用治遗精、遗尿、脱肛等病症，还可外用敷治疮毒皮肤湿烂。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "五倍子散《珍珠囊》：五倍子、地榆治小儿脱肛。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "敛肺降火，涩肠止泻，敛汗，止血。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},
            {collegeInfo:{belongTo: "风湿", chufangName: "松香\r\n", collegeID: "70", medicinalMaterialName: "松香", image: "/vendor/images/schools/songxiang_1.jpg", EnglishName: "Sōnɡ Xiānɡ", introduction: [{introductionID: "clinicalApplication",introductionType: "1",introductionKey:"临床应用",introductionValue: "用于痈疖，疥癣等症。\r\n本品通常作为外用药，治痈疖、疥癣湿疮瘙痒等症。治痈疖，可与蓖麻子、东丹等配用；治疥癣湿疮，可与轻粉、麻油等配用。\r\n"},{introductionID: "examplesOfPrescriptions",introductionType: "2",introductionKey: "方剂举例",introductionValue: "千捶膏《经验方》：松香、蓖麻子、轻粉、东丹、银朱，茶油。外治痈、疖、疔等。\r\n"},{introductionID: "effect",introductionType: "3",introductionKey: "功效",introductionValue: "生肌止痛，燥湿杀虫。\r\n"},{introductionID: "medicinalPart",introductionType: "4",introductionKey: "按语",introductionValue: ""},]}},


        ],
    }
};

export var collegeLibMockTemplate = collegeLibMockTemplateTemp;