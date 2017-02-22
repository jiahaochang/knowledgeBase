import * as React from 'react'
import {Row,Col} from 'antd'
import ComprehensiveQualityActivitiesSingle = require('./ComprehensiveQualityActivitiesSingle')
"use strict";

interface ComprehensiveQualityActivitiesProps extends React.Props<ComprehensiveQualityActivities> {

}

interface ComprehensiveQualityActivitiesState {

}
/**
 * 个人素质报告
 * 我的综合素质活动
 */
class ComprehensiveQualityActivities extends React.Component<ComprehensiveQualityActivitiesProps, ComprehensiveQualityActivitiesState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        var activities = {
            electiveCource:[
                {
                    courceName:"化学选修课",
                    courceClassification:"限定性选修课",
                    courcePerformance:"通过本学期化学实验的学习与实践我有了很大的收获，学到了化学的知识，还增长了自己的学习能力和优良的科学素质。通过掌握基本的操作技能、实验技术，增进了自己分析问题、解决问题的能力。",
                    courceScore:"56",
                    courceCredit:"3"
                },
                {
                    courceName:"物理选修课",
                    courceClassification:"限定性选修课",
                    courcePerformance:"通过本学期化学实验的学习与实践我有了很大的收获，学到了化学的知识，还增长了自己的学习能力和优良的科学素质。通过掌握基本的操作技能、实验技术，增进了自己分析问题、解决问题的能力。",
                    courceScore:"39",
                    courceCredit:"5"
                },
            ],
            studentOrgan:[
                {
                    organName:"茶艺社",
                    organClassification:"艺能与特长",
                    organRole:"副社长",
                    organPerfomance:"通过定期组织的茶艺活动，请老师为我们讲解中国茶的文化，既学习了相关知识，又加深了对中国文化的理解。回家之后还可以讲给长辈听，很有成就感。",
                    imgURL:["vendor/images/tests/multipleIntelligence.png","vendor/images/tests/holland.png","vendor/images/tests/mbti.png","vendor/images/tests/values.png"]
                },
                {
                    organName:"茶艺社",
                    organClassification:"艺能与特长",
                    organRole:"副社长",
                    organPerfomance:"通过定期组织的茶艺活动，请老师为我们讲解中国茶的文化，既学习了相关知识，又加深了对中国文化的理解。回家之后还可以讲给长辈听，很有成就感。",
                    imgURL:[]
                },

            ],
            offCampusPractice:[
                {
                    practiceName:"参观市博物馆",
                    practiceClassification:"社会实践",
                    practiceDate:"2015.9-2015.10",
                    practiceDesc:"这次收获颇多，它使我走出校园，走入历史，走到自然的大课堂去见识世面，增长才干，为自己的知识库储备更多的能量。阅历较浅的我很高兴去到博物馆，因为对那些从未谋面的事物感到新鲜与刺激，在参观的过程中，与同学探讨历史的神奇，为革命英雄所倾服，为先辈的智慧而惊叹，为中华子民的强烈爱国精神而鼓掌！",
                    imgURL:["vendor/images/qualityReportLogo.png","vendor/images/default-headpic.jpg",]
                },
                {
                    practiceName:"参观市博物馆",
                    practiceClassification:"社会实践",
                    practiceDate:"2015.9-2015.10",
                    practiceDesc:"这次收获颇多，它使我走出校园，走入历史，走到自然的大课堂去见识世面，增长才干，为自己的知识库储备更多的能量。阅历较浅的我很高兴去到博物馆，因为对那些从未谋面的事物感到新鲜与刺激，在参观的过程中，与同学探讨历史的神奇，为革命英雄所倾服，为先辈的智慧而惊叹，为中华子民的强烈爱国精神而鼓掌！",
                    imgURL:["vendor/images/qualityReportLogo.png",]
                }
            ]
        }



        return (
            <div>
                <ComprehensiveQualityActivitiesSingle title="选修课" imgURL="vendor/images/homePageRightMenuIcon/4.png" activitySingle={activities.electiveCource} />
                <ComprehensiveQualityActivitiesSingle title="学生社团" imgURL="vendor/images/homePageRightMenuIcon/5.png" activitySingle={activities.studentOrgan} />
                <ComprehensiveQualityActivitiesSingle title="校外实践" imgURL="vendor/images/homePageRightMenuIcon/6.png" activitySingle={activities.offCampusPractice} />
            </div>
        )
    }
}

export = ComprehensiveQualityActivities