
import {BaseDataResponse} from './BaseData';
import { IResponseData } from './IResponseData'
"use strict";

export class HomePageDataPost{

}

export class HomePageDataResponse extends BaseDataResponse implements IResponseData{
    dataList: Array<Object>;

    transToViewData(): HomePageDataView {
        return {
            homePageName: this.status + " name"
        };
    }

    constructor(response: HomePageDataResponse){
        super(response.status);
        this.dataList = response.dataList
    }

}
  
export class HomePageDataView {
    homePageName: string
}