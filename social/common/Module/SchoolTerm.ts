
"use strict";

export const enum SchoolTermEnum {
    Grade1Term1,
    Grade1Term2,
    Grade2Term1,
    Grade2Term2,
    Grade3Term1,
    Grade3Term2
}

export class SchoolTerm {
    private _term: SchoolTermEnum;

    get term():SchoolTermEnum {
        return this._term;
    }

    set term(value:SchoolTermEnum) {
        this._term = value;
    }

    constructor(term:SchoolTermEnum) {
        this._term = term;
    }

    getDisplayChinese():string{
        switch (this._term) {
            case SchoolTermEnum.Grade1Term1:
                return "高一上学期";
            case SchoolTermEnum.Grade1Term2:
                return "高一下学期";
            case SchoolTermEnum.Grade2Term1:
                return "高二上学期";
            case SchoolTermEnum.Grade2Term2:
                return "高二下学期";
            case SchoolTermEnum.Grade3Term1:
                return "高三上学期";
            case SchoolTermEnum.Grade3Term2:
                return "高三下学期";
            default:
                return "高一上学期"
        }
    }

    //返回月份list
    public getMonths(currentYear){
        var nextYear = parseInt(currentYear)+1;
        var yearMonths = [];
        for(var i=9;i<=12;i++){
            var map = {};
            map["month"] = i;
            map["year"] = currentYear;
            yearMonths.push(map);
        }
        for(var j=1;j<=6;j++){
            var map = {};
            map["month"] = j;
            map["year"] = nextYear;
            yearMonths.push(map);
        }

        return yearMonths;
    }


    //获取
    public getSchoolMonth() {
        var yearMonths = [];
        //todo grade from sessionStorage
        //var grade = window.sessionStorage.getItem("grade");
        var grade = "2015";
        var currentYear = 0;
        if(this._term==SchoolTermEnum.Grade1Term1 || this._term==SchoolTermEnum.Grade1Term2){
             currentYear = parseInt(grade);
        }else if(this._term==SchoolTermEnum.Grade2Term1 || this._term==SchoolTermEnum.Grade2Term2){
             currentYear = parseInt(grade)+1;
        }else if(this._term==SchoolTermEnum.Grade3Term1 || this._term==SchoolTermEnum.Grade3Term2){
             currentYear = parseInt(grade)+2;
        }
        yearMonths = this.getMonths(currentYear);
        return  yearMonths;
    }



}