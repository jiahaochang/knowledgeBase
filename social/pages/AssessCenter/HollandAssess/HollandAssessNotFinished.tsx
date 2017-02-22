import * as React from 'react'

"use strict";

interface HollandAssessNotFinishedProps extends React.Props<HollandAssessNotFinished> {

}

interface HollandAssessNotFinishedState {

}

class HollandAssessNotFinished extends React.Component<HollandAssessNotFinishedProps, HollandAssessNotFinishedState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: HollandAssessNotFinished
            </div>
        )
    }
}

export = HollandAssessNotFinished