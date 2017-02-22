
export = {
    path: 'myFollow',
    indexRoute: { onEnter: (nextState, replace) => replace('myFollow/myConcern') },
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyFollow/MyFollow'))
        })
    },
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./RouteMyConcern'),
                require('./RouteMyFans')
            ])
        })
    },
}
