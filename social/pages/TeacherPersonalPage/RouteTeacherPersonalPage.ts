export = {
    path: 'homePage/teacherPersonalPage',
    indexRoute: { onEnter: (nextState, replace) => replace('homePage/teacherPersonalPage/teacherEvent') },
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./TeacherPersonalPage'))
        })
    },
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./RouteTeacherEvent'),

                require('./RouteClassActivity'),
                require('./RouteStudentPerformance'),
                require('./RouteClassNotification'),
                require('./RouteSpecialStudent'),
                require('./RouteRankInClass'),
                require('./RouteEvaluateStudent'),
                require('./RouteReviewWordsManagement'),
            ])
        })
    },
}