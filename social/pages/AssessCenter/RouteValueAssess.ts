export = {
    path: 'valueAssess',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ValueAssess/ValueAssess'))
        })
    },
}