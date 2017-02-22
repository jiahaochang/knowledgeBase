
import * as subjectLibActionTypes from '../../../actions/SubjectLib/SubjectLibActionTypes'

let subjectLibMockTemplateTemp = {};

subjectLibMockTemplateTemp[subjectLibActionTypes.INIT_SUBJLIB_CURRENTSUBJ] = {
    status: "success",
    result:{
        subjects: [
            {
                subjectName: "语文",
                references: [
                    {
                        referenceID:"",
                        referenceKey: "学科特点",
                        referenceValue: "学科特点-语文"
                    },
                    {
                        referenceID:"",
                        referenceKey: "考核要求",
                        referenceValue: "考核要求-语文"
                    },
                    {
                        referenceID:"",
                        referenceKey: "学习方法",
                        referenceValue: "学习方法-语文"
                    }
                ]
            },
            {
                subjectName: "数学",
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

