export = {
    path: 'teacherReview',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./TeacherReview/TeacherReview'))
        })
    },
}