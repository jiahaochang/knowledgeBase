export = {
    path: 'assessCenter',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./AssessCenter'))
        })
    },
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./RouteMBTIAssess'),
                require('./RouteHollandAssess'),
                require('./RouteMIAssess'),
                require('./RouteValueAssess'),
            ])
        })
    },
}