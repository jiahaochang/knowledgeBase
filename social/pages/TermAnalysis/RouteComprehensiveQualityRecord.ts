export = {
    path: 'comprehensiveQualityRecord',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ComprehensiveQualityRecord/ComprehensiveQualityRecord'))
        })
    },
}