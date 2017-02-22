export = {
    path: 'MIAssess',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MIAssess/MIAssess'))
        })
    },
}