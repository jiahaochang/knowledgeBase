export = {
    path: 'termAnalysis',
    indexRoute: { onEnter: (nextState, replace) => replace('termAnalysis/rankInClass') },
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./TermAnalysis'))
        })
    },
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./RouteRankInClass'),
                require('./RouteScoreGrowthRecord'),
                require('./RouteMonthSummary'),
                require('./RouteTermSummary'),
                require('./RouteTeacherReview'),
                require('./RouteClassmateEvaluate'),
                require('./RouteAcademicPerformance'),
                require('./RouteComprehensiveQualityRecord'),
            ])
        })
    },
}