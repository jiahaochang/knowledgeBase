export = {
    path: 'otherTeacherPage',
    //todo indexRoute: { onEnter: (nextState, replace) => replace('otherTeacherPage/classActivity') },
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./OtherteacherPage'))
        })
    },
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
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