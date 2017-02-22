export = {
    path: 'classmateEvaluate',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ClassmateEvaluate/ClassmateEvaluate'))
        })
    },
}