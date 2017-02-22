export = {
    path: 'schoolStar',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./SchoolStar'))
        })
    },
}