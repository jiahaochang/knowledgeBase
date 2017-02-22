import * as React from 'react'
"use strict";
import {ICollapsable} from './ICollapsable'

abstract class AbstractCollapsableComponent<P, S> extends React.Component<P, S> implements ICollapsable{
    collapse():void {
        let collapsableDiv = this.getCollapsableDiv();
        collapsableDiv.slideUp();
    }

    expand():void {
        let collapsableDiv = this.getCollapsableDiv();
        collapsableDiv.slideDown();
    }

    protected abstract getCollapsableDiv():any;

    protected getDOMNode():any{
        return this._reactInternalInstance.getHostNode();
    }
    
}

export = AbstractCollapsableComponent