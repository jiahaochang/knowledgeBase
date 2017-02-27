export = {
    path: 'testCenter',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MIQuizPage'))
        })
    },
}

/*
export = {
    path: 'subjectLib',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./SubjectLib'))
        })
    },
}
*/