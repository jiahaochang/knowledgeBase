export = {
    path: 'adminPage',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./AdminPage'))
        })
    },
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./RouteAccountManagement'),
                require('./RouteScoreManagement'),
                require('./RouteCourseLibManagement'),
                require('./RouteClubManagement'),
                require('./RouteHonorManagement'),
                require('./RouteStudentEvaluateWordsManagement'),
                require('./RouteMonthThemeManagement'),
                require('./RouteStatistics'),
                require('./RouteRecordManagement'),
                require('./RouteIntegralScoreManagement'),
                require('./RouteContentAudit'),
                require('./RouteSchoolStarManagement')
            ])
        })
    },
}