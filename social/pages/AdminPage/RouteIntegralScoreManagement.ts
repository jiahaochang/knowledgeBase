export = {
    path: 'integralScoreManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./IntegralScoreManagement/IntegralScoreManagement'))
        })
    },
}