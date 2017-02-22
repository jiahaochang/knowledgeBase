
export = {
    path: 'notification',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Notification'))
        })
    },
}
