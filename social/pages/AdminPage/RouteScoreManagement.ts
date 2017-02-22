export = {
    path: 'scoreManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ScoreManagement/ScoreManagement'))
        })
    },
}