import * as React from 'react'
const objectAssign = require('object-assign');

/**
 * 装饰组件
 * @param ComponentEle 被装饰组件
 * @returns {{new(any=, any=): {render: {(): any, (): JSX.Element}, setState: {(function(any, any): any, function(): any=): void, (any, function(): any=): void}, forceUpdate: (function(function(): any=): void), _reactInternalInstance: any, props: (any&{children?: ReactNode}), state: any, context: {}, refs: {}, componentWillMount?: (function(): void), componentDidMount?: (function(): void), componentWillReceiveProps?: (function(any, any): void), shouldComponentUpdate?: (function(any, any, any): boolean), componentWillUpdate?: (function(any, any, any): void), componentDidUpdate?: (function(any, any, any): void), componentWillUnmount?: (function(): void)}, componentWillMount?: (function(): void), componentDidMount?: (function(): void), componentWillReceiveProps?: (function(any, any): void), shouldComponentUpdate?: (function(any, any, any): boolean), componentWillUpdate?: (function(any, any, any): void), componentDidUpdate?: (function(any, any, any): void), componentWillUnmount?: (function(): void)}}
 */
export const decorateComponent = function(ComponentEle){
    return class extends React.Component<any, any>{
        render(){
            return (
                <div className="am-margin-top-lg">
                    {
                        React.createElement(ComponentEle.type)
                    }
                </div>
            )
        }
    };
};

/**
 * 组合组件
 * @param ComponentElements  组件列表
 * @param className 外层div样式
 * @returns {{new(any=, any=): {render: {(): any, (): JSX.Element}, setState: {(function(any, any): any, function(): any=): void, (any, function(): any=): void}, forceUpdate: (function(function(): any=): void), _reactInternalInstance: any, props: (any&{children?: ReactNode}), state: any, context: {}, refs: {}, componentWillMount?: (function(): void), componentDidMount?: (function(): void), componentWillReceiveProps?: (function(any, any): void), shouldComponentUpdate?: (function(any, any, any): boolean), componentWillUpdate?: (function(any, any, any): void), componentDidUpdate?: (function(any, any, any): void), componentWillUnmount?: (function(): void)}, componentWillMount?: (function(): void), componentDidMount?: (function(): void), componentWillReceiveProps?: (function(any, any): void), shouldComponentUpdate?: (function(any, any, any): boolean), componentWillUpdate?: (function(any, any, any): void), componentDidUpdate?: (function(any, any, any): void), componentWillUnmount?: (function(): void)}}
 */
export const combineComponents = function(ComponentElements:Array<any>, className?:string){
    return class extends React.Component<any, any>{
        render(){
            return (
                <div className={className}>
                    {
                        ComponentElements.map(function (item, index) {
                            return React.createElement(item.type, {key: index})
                        })
                    }
                </div>
            )
        }
    };
};

