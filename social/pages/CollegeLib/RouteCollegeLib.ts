
export = {
    path: 'collegeLib',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./CollegeLib'))
        })
    },
}