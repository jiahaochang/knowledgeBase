export = {
    path: 'accountManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./AccountManagement/AccountManagement'))
        })
    },
}