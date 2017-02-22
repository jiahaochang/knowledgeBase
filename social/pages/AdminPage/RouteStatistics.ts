export = {
    path: 'statistics',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Statistics/Statistics'))
        })
    },
}