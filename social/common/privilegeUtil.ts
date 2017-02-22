"use strict";

//parse privilege method for common pages
export function getPrivilegeByModules(modules:Array<any>): Privilege {
    var privilege = [];
    /*for (var i=0; i<modules.length; i++){
        var module = modules[i];
        privilege.push(getPrivilegeByModule(module));
    }*/
    return {}
}

function getPrivilegeByModule(module){
    //context get all privileges
    var privileges = [
        {
            "moduleID": "Statistic_SingleSubjectChoice",
            "moduleName": "统计-单科选科结果统计",
            "permission": [
                {
                    "department": { "school": "10000" },
                    "operate": ["Read"]
                },
                {
                    "department": {
                        "school":"10000",
                        "grades":
                            [
                                {
                                    "grade":"1"
                                }
                            ]
                    },
                    "operate":["Create","Update","Remove","Read","ExportData"]
                },
                {
                    "department": {
                        "school":"10000",
                        "grades":
                            [
                                {
                                    "grade":"2015",
                                    "gradeName": "高一",
                                    "classes":[
                                        {
                                            classID: "1",
                                            className: "高一一班"
                                        }
                                    ]
                                }
                            ]
                    },
                    "operate":["Create","Update","Remove","Read","ExportData"]
                },

            ]
        },
        {
            "moduleID": "Statistic_SubjectCombChoice",
            "moduleName": "统计-选科组合情况统计",
            "permission": [
                /*{
                 "department": {"school": "10000"},
                 "operate": ["Create","Update","Remove","Read","ExportData"]
                 },*/
                {
                    "department": {
                        "school":"10000",
                        "grades":
                            [
                                {
                                    "grade":"1"
                                }
                            ]
                    },
                    "operate":["Read","ExportData"]
                },
            ]
        },
        {
            "moduleID": "Statistic_SubjectChoiceMatchLevel",
            "moduleName": "统计-学生匹配结果统计",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "Statistic_SubjectChoiceStatus",
            "moduleName": "统计-选科完成情况",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "Statistic_CareerAssessAnalysis",
            "moduleName": "统计-兴趣性格分析",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "Statistic_StudentDetailInfo",
            "moduleName": "统计-学生详细列表",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "StudentManagement_UsualExamScore",
            "moduleName": "学生成绩信息",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },

        {
            "moduleID": "Setting_MajorRecommandRatio",
            "moduleName": "设置-学校端推荐比例",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "Setting_UsualExamScoreWeight",
            "moduleName": "设置-成绩权重",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "Setting_AvailSubjectComb",
            "moduleName": "设置-学科组合",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "Setting_SystemOpenTime",
            "moduleName": "设置-系统开放时间点",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "StudentManagement_Account",
            "moduleName": "学生帐户管理",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        }/*,
         {
         "moduleID": "teacherAccountManageSubjectTeacher",
         "moduleName": "教师账户管理-任课教师",
         "permission": [
         {
         "department": {"school": "10000"},
         "operate": ["Create","Update","Remove","Read","ExportData"]
         }
         ]
         }*/,
        {
            "moduleID": "TeacherManagement_SchoolObserver",
            "moduleName": "教师账户管理-校级观察员",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "TeacherManagement_ClassAdmin",
            "moduleName": "教师账户管理-班主任",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "TeacherManagement_GradeAdmin",
            "moduleName": "教师账户管理-年级管理员",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },
        {
            "moduleID": "TeacherManagement_SchoolAdmin",
            "moduleName": "教师账户管理-校级管理员",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        },

        {
            "moduleID": "DepartmentManagement",
            "moduleName": "学校结构",
            "permission": [
                {
                    "department": {"school": "10000"},
                    "operate": ["Create","Update","Remove","Read","ExportData"]
                }
            ]
        }
    ];
    

    /*moduleID: "TeacherManagement_GradeAdmin",
        operate: ["Create"],
        department: {
        school: "10000"
    }*/
    /*for(var i=0; i<privileges; i++){
        var privilege = privileges[i];
        if (privilege.moduleID === module.moduleID){

        }
    }*/

    
}

function getSinglePrivilegeByModuleID(module){
    //get from context
    var privileges = [];
    for(var i=0; i<privileges.length; i++){
        var privilege = privileges[i];
        if (privilege.moduleID === module.moduleID){
            return privilege
        }
    }
}
