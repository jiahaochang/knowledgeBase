
export = {
    path: 'collegeLib/collegeIntro',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./CollegeIntro'))
        })
    },
}