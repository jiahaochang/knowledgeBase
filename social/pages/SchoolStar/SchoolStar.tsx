import * as React from 'react'

"use strict";

interface SchoolStarProps extends React.Props<SchoolStar> {

}

interface SchoolStarState {

}

class SchoolStar extends React.Component<SchoolStarProps, SchoolStarState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static defaultProps = {};

    render() {
        return (
            <div>page: SchoolStar
            </div>
        )
    }
}

export = SchoolStar