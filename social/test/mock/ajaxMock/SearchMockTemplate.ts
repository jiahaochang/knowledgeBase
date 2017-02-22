
import * as searchActionTypes from '../../../actions/Search/SearchActionTypes'

let searchMockTemplateTemp = {};
var postData = {};

postData = {
    keyword:"二狗"
};

searchMockTemplateTemp[searchActionTypes.GET_SEARCH_PERSONALINFOLIST] = {
    status: "success",
    result:{
        searchResult:[
            {
                userID:"004",
                name:"家浩",

                headImage:"vendor/images/default-headpic.jpg",
                classID:"001",
                className:"二班",

                grade:"002",
                gradeName:"高二",

                gender:"男",
                stateMsg:"世界上最遥远的距离不是生与死，而是你亲手制造的BUG就在你眼前，你却怎么都找不到她。。。 ",

                relationState:"2", //0 未关注 1 已关注 2 互相关注
            },
            {
                userID:"001",
                name:"赵老师",

                headImage:"vendor/images/default-headpic.jpg",
                classID:"001",
                className:"一班",

                grade:"003",
                gradeName:"高三",

                gender:"男",
                stateMsg:"真的勇士，敢于直面惨淡的warning、敢于正视淋漓的error。",

                relationState:"2", //0 未关注 1 已关注 2 互相关注
            },
            {
                userID:"002",
                name:"卢老师",

                headImage:"vendor/images/default-headpic.jpg",
                classID:"002",
                className:"二班",

                grade:"002",
                gradeName:"高二",

                gender:"男",
                stateMsg:"千行代码，Bug何处藏。 纵使上线又怎样，朝令改，夕断肠。",

                relationState:"1", //0 未关注 1 已关注 2 互相关注
            },
            {
                userID:"003",
                name:"成老师",

                headImage:"vendor/images/default-headpic.jpg",
                classID:"001",
                className:"三班",

                grade:"001",
                gradeName:"高一",

                gender:"男",
                stateMsg:"Keyboard not found … press F1 to continue",

                relationState:"0", //0 未关注 1 已关注 2 互相关注
            }
        ]
    },
};

//获取搜索结果筛选项的内容
searchMockTemplateTemp[searchActionTypes.GET_SEARCH_OPTIONS] = {
    status: "success",
    result: {
        gradeOptions: [
            {label: '高一', value: '1'},
            {label: '高二', value: '2'},
            {label: '高三', value: '3'},
        ],
    }
};

export var searchMockTemplate = searchMockTemplateTemp;

