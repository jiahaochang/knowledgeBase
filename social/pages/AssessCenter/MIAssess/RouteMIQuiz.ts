export = {
    path: 'assessCenter/MIAssess/MIQuizPage',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MIQuizPage'))
        })
    },
}