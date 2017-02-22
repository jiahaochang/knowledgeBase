export = {
    path: 'HollandAssess',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./HollandAssess/HollandAssess'))
        })
    },
}