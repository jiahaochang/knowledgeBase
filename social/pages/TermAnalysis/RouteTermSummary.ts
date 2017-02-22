export = {
    path: 'termSummary',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./TermSummary/TermSummary'))
        })
    },
}