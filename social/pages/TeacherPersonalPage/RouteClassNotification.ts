export = {
    path: 'classNotification',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ClassNotification/ClassNotification'))
        })
    },
}