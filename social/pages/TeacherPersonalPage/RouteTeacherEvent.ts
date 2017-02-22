export = {
    path: 'teacherEvent',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./TeacherEvent/TeacherEvent'))
        })
    },
}