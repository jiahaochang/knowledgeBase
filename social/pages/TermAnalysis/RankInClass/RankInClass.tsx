import * as React from 'react'

import CardWithTitleBox = require('../../../common/Component/CardWithTitleBox')
import PersonInfoAndRank = require('../../../common/Component/PersonInfoAndRank')
import RankInClassChart = require('./Component/RankInClassChart')
import {RoleEnum} from "common/Module/Role";
"use strict";

interface RankInClassProps extends React.Props<RankInClass> {
}

interface RankInClassState {

}

class RankInClass extends React.Component<RankInClassProps, RankInClassState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <PersonInfoAndRank roleEnum={RoleEnum.student} selectShow={false}/>
                <div className="block-box-shadows-0 blueBack am-margin-top">
                    <CardWithTitleBox  title="班级积分排名图" subComponent={<RankInClassChart />} />
                </div>
            </div>

        )
    }
}

export = RankInClass