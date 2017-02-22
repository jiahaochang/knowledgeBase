export = {
    path: 'contentAudit',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ContentAudit/ContentAudit'))
        })
    },
}