export = {
    path: 'classActivity',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ClassActivity/ClassActivity'))
        })
    },
}