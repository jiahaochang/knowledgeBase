
import * as subjectLibActionTypes from '../../../actions/SubjectLib/SubjectLibActionTypes'

let subjectLibMockTemplateTemp = {};

subjectLibMockTemplateTemp[subjectLibActionTypes.INIT_SUBJLIB_CURRENTSUBJ] = {
    status: "success",
    result:{
        subjects: [
            {
                subjectName: "本草纲目",
                references: [
                    {
                        referenceID:"",
                        referenceKey: "中医政策",
                        referenceValue: "国家中医药管理局发布《抗震救灾医疗救治应用中医药技术指导意见》" +
                        "该指导意见对地震灾害中常见的闭合性骨折、单纯软组织损伤、创伤后并发症（如创伤感染、挤压综合症、褥疮、深静脉血栓）等的中医药治疗提供了指导性技术方法，并就灾后防疫工作中的中医药参与提出了指导性意见和要求。同时，该指导意见提出，在卫生应急救援工作中，要积极利用当地的医药资源，充分发挥民族医药的作用。（国家中医药管理局新闻办供稿）",
                    },
                    {
                        referenceID:"",
                        referenceKey: "中医新闻",
                        referenceValue: "山西成为七种中药材原料基地" +
                        "本报讯 日前，从山西省十一届人大常委会第十次会议上传来信息，目前，该省已经成为7个中药品种的重要原料基地。"+
                        "山西省是“北药”的主产区，独特的生态地理环境和“四荒”地适宜种植多种中药材，中药材资源有1116种，蕴藏量达1．88亿公斤，主要道地药材品种有30个品种，大宗种植品种有近20个。"+
                        "其药材活性成分含量高、有害污染物低，初加工方式具有悠久历史，其党参、黄芪、连翘等大宗道地药材更是著名。",
                    },
                    {
                        referenceID:"",
                        referenceKey: "趣闻知识",
                        referenceValue: "NULL",
                    }
                ]
            },
            {
                subjectName: "百草注",
                references: [
                    {
                        referenceID:"",
                        referenceKey: "学科要求",
                        referenceValue: "学科要求-数学"
                    }
                ]
            }
        ]
    }
};

export var subjectLibMockTemplate = subjectLibMockTemplateTemp;

