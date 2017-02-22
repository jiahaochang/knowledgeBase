import * as React from 'react'

"use strict";

interface SettingsProps extends React.Props<Settings> {

}

interface SettingsState {

}

class Settings extends React.Component<SettingsProps, SettingsState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: Settings
            </div>
        )
    }
}

export = Settings