export = {
    path: 'recordManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./RecordManagement/RecordManagement'))
        })
    },
}