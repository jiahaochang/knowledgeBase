

let schoolStarMockTemplateTemp = {};

var postData = {};

var getSchoolStarGradesResponse = {
    status:"success",
    result:{
        //校园之星，年级列表
        schoolStarGrades:[
            {
                grade:"",
                gradeName:""
            }
        ]
    }
};

var getSchoolStarResultResponse = {
    status:"success",
    result:{
        toDate:"", //截止日期
        schoolStars:[
            {
                schoolStarName:"", //星星名称
                //同学列表 size条，前台处理显示星星个数，均分为n个等级，目前size=20，n=4，前5名4星，最后5名1星，
                schoolStarStudents:[
                    {
                        studentUserID:"",
                        name:"",
                        score:""
                    }
                ]
            }
        ]
    }
};

//导出当前选择的年级的校园之星数据
postData = {
    toDate:"",
    exportSchoolStarGrade:""
};
var exportSchoolStarResultResponse = {
    status:"success",
    result:{

    }
};

export var schoolStarMockTemplate = schoolStarMockTemplateTemp;

