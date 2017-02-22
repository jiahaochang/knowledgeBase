export = {
    path: 'homePage/myPersonalPage',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyPersonalPage'))
        })
    },
}