import * as React from 'react'

"use strict";

interface LoginProps extends React.Props<Login> {

}

interface LoginState {

}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: Login
            </div>
        )
    }
}

export = Login