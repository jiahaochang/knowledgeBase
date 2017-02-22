"use strict";

const enum statusEnum {
    "successs",
    "fail"
}

export class BaseDataPost {

}

export class BaseDataResponse {
    status: string;

    constructor(status){
        this.status = status;
    }
}
