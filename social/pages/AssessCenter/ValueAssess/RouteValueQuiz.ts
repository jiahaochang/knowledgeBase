export = {
    path: 'assessCenter/valueAssess/valueQuizPage',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ValueQuizPage'))
        })
    },
}