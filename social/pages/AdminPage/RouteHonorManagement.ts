export = {
    path: 'honorManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./HonorManagement/HonorManagement'))
        })
    },
}