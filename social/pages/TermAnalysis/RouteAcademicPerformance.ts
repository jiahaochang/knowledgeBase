export = {
    path: 'academicPerformance',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./AcademicPerformance/AcademicPerformance'))
        })
    },
}