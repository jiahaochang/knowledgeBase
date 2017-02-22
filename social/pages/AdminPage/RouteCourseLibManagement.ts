export = {
    path: 'courseLibManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./CourseLibManagement/CourseLibManagement'))
        })
    },
}