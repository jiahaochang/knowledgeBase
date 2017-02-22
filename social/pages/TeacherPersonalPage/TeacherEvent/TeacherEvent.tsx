import * as React from 'react'

"use strict";

interface TeacherEventProps extends React.Props<TeacherEvent> {

}

interface TeacherEventState {

}

class TeacherEvent extends React.Component<TeacherEventProps, TeacherEventState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: TeacherEvent
            </div>
        )
    }
}

export = TeacherEvent