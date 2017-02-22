import * as React from 'react'
const objectAssign = require('object-assign');

export const AddPropsHOC = function (ComposedComponent:React.ComponentElement<any,any>, addedProps: any) {
    return React.createElement(ComposedComponent.type, objectAssign(addedProps, ComposedComponent.props));
};

