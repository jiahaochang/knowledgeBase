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
                collegePropID:"01"
            },
            {
                collegePropName:"清热药",
                collegePropID:"02"
            },
            {
                collegePropName:"解表药",
                collegePropID:"03"
            },
            {
                collegePropName:"温里药",
                collegePropID:"04"
            },
            {
                collegePropName:"泻下药",
                collegePropID:"05"
            },
            {
                collegePropName:"消导药",
                collegePropID:"06"
            },
            {
                collegePropName:"祛湿药",
                collegePropID:"07"
            },
            {
                collegePropName:"理气药",
                collegePropID:"08"
            },
            {
                collegePropName:"补益药",
                collegePropID:"09"
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
collegeLibMockTemplateTemp[collegeLibActionTypes.GET_COLLEGELIB_COLLEGELIST] = {
    status: 'success',
    result: {
        colleges:[
            {
                collegeName:"人参",
                collegeID:"01",
                logo:"vendor/images/schools/renshen.jpg",
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
                logo:"vendor/images/schools/lingzhi.jpg",
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
                logo:"vendor/images/schools/lingzhi.jpg",
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
            logo:"vendor/images/schools/renshen.jpg",
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

            image: "vendor/images/schools/renshen.jpg",
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
};

export var collegeLibMockTemplate = collegeLibMockTemplateTemp;