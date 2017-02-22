"use strict";

export class Impression {
    private _impressionID:number;
    private _impressionDisplayChinese: string;


    get impressionID():number {
        return this._impressionID;
    }

    set impressionID(value:number) {
        this._impressionID = value;
    }

    get impressionDisplayChinese():string {
        return this._impressionDisplayChinese;
    }

    set impressionDisplayChinese(value:string) {
        this._impressionDisplayChinese = value;
    }


}
  
