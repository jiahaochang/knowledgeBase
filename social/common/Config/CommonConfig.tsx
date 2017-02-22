"use strict";
import * as React from 'react'
export const GenderNameMap = {
    1:{
        genderName:"男"
    },
    0:{
        genderName: "女"
    },
    "-1":{
        genderName: "未知"
    }
};

//学生评价 star rate
export const defaultStarValues = 0;
//学生默认头像
export const studentDefaultHeadPic = "vendor/images/default-headpic.jpg";
//学生默认名字
export const studentDefaultName = "不知道";
//专业详情  -- 本科【专业排名】两列，一列放的个数
export const majorRankDefaultCount = 20;
//专业库 -- 当前显示专业列表还是显示专业专业详情
export const majorShowIntro = "intro";
export const majorShowList = "majorResult";
//院校库 -- 分页时，默认显示当前页
export const defaultCurrentPage = 1;
//院校库--分页时，每页显示记录数
export const defaultPageSize = 10;
//月度总结 -- 月度主题
export const defaultMonthTheme = "慧心希望之月"
//月度总结 -- 月度主题 --内容
export var defaultMonthContent = (
    <div>
        <p>1. 很容易看到生活光明、轻松一面，认为生活充满乐趣和有趣的事；</p>
        <p>2.乐观面对一切事物，以积极心态看待现实生活，有价值感，生活学习不无聊；</p>
        <p>3.做任何事情都积极主动兴奋；</p>
        <p>4. 精力充沛，无论做什么都会全心全意、竭尽全力；</p>
        <p>5. 有追求，有远大理想；</p>
        <p>6.认为好事总会发生，对未来充满信心，相信幸福掌握在自己手中。</p>
    </div>
)
