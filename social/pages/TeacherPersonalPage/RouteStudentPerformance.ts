export = {
    path: 'studentPerformance',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./StudentPerformance/StudentPerformance'))
        })
    },
}