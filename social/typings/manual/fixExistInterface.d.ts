

//react-router withRoute
declare module "react-router" {
    export function withRouter(component:any):any;
}

//require
interface Require {
    ensure(arry:string[], component:any):any
}

//react-redux
declare module "react-redux" {
    interface ComponentDecorator<TOriginalProps, TOwnProps> {
        (component: any): any;
    }
}

//immutable
interface Map{
    has(key:string):boolean
}

//react 

//antd 
/*
interface InputProps{
    rows?: number
}
*/
