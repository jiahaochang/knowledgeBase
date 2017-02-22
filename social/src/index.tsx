/// <reference path='../typings/index.d.ts'/>

import * as React from 'react'
import { render } from 'react-dom'
import { Router , hashHistory} from 'react-router'
import { createHashHistory, useBasename } from 'history'
import { Provider } from 'react-redux'

import * as commonVar from '../common/commonVar'
import 'antd/dist/antd.less'
import configureStore from "./configureStore"
import {initStateAjax} from '../actions/initStateAction'
import * as Test from '../test/backendAPI/HomePageAPITest'

import * as GlobalContext from '../common/GlobalContext'
import {isUserMockData} from "../common/ajaxUtil";

const store = configureStore({});

if ( !commonVar.isTestBackendAPI && isUserMockData("") ){
    console.log("use mock data");
}

if (commonVar.isTestBackendAPI){
    Test.run();
}


//store.dispatch(initStateAjax()());
initStateAjax(store.dispatch);
GlobalContext.initStoreGlobal(store);

const history = useBasename(createHashHistory)({
    basename: '/'
});

function redirectToFirstPage( nextState, replace ){
    /*if( nextState.location.pathname != firstPageUrl ){
     replace( null, firstPageUrl)
     }*/
    console.log("redirectToFirstPage");
    console.log(nextState.location);
    if( nextState.location.pathname === "/" ){
        replace( "/homePage")
    }
}

//onEnter: redirectToFirstPage,
const rootRoute = {
    component: 'div',

    childRoutes: [{
        path: '/',
        indexRoute: { onEnter: (nextState, replace) => replace('/homePage') },
        component: require('../pages/App'),
        childRoutes: [
            require('../pages/HomePage/RouteHomePage'),
            require('../pages/HomePage/RouteMyPersonalPage'),
            require('../pages/HomePage/RouteMyFollow'),

            require('../pages/HomePage/RouteOtherPersonalPage'),

            require('../pages/TeacherPersonalPage/RouteTeacherPersonalPage'),

            require('../pages/TeacherPersonalPage/RouteOtherTeacherPage'),

            require('../pages/AdminPage/RouteAdminPage'),

            require('../pages/TermAnalysis/RouteTermAnalysis'),

            require('../pages/CollegeLib/RouteCollegeLib'),
            require('../pages/CollegeLib/RouteCollegeIntro'),

            require('../pages/SubjectLib/RouteSubjectLib'),

            require('../pages/MajorLib/RouteMajorLib'),

            require('../pages/JobLib/RouteJobLib'),

            require('../pages/Search/RouteSearch'),

            require('../pages/AssessCenter/RouteAssessCenter'),
            require('../pages/AssessCenter/MIAssess/RouteMIQuiz'),
            require('../pages/AssessCenter/ValueAssess/RouteValueQuiz'),

            require('../pages/SchoolStar/RouteSchoolStar'),

            require('../pages/Notification/RouteNotification'),
        ]
    }]

};

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute}/>
    </Provider>
    ,
    document.getElementById('root')
);
