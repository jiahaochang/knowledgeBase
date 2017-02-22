export = {
    path: 'MBTIAssess',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MBTIAssess/MBTIAssess'))
        })
    },
}