export = {
    path: 'studentEvaluateWordsManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./StudentEvaluateWordsManagement/StudentEvaluateWordsManagement'))
        })
    },
}