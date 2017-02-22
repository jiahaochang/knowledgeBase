import * as React from 'react'

"use strict";

interface LoginXslzProps extends React.Props<LoginXslz> {

}

interface LoginXslzState {

}

class LoginXslz extends React.Component<LoginXslzProps, LoginXslzState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: LoginXslz
            </div>
        )
    }
}

export = LoginXslz