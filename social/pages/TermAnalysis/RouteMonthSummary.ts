export = {
    path: 'monthSummary',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MonthSummary/MonthSummary'))
        })
    },
}