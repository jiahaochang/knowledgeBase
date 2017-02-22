import * as React from 'react'

"use strict";

interface MBTIAssessNotFinishedProps extends React.Props<MBTIAssessNotFinished> {

}

interface MBTIAssessNotFinishedState {

}

class MBTIAssessNotFinished extends React.Component<MBTIAssessNotFinishedProps, MBTIAssessNotFinishedState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: MBTIAssessNotFinished
            </div>
        )
    }
}

export = MBTIAssessNotFinished