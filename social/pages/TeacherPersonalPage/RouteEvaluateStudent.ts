export = {
    path: 'evaluateStudent',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./EvaluateStudent/EvaluateStudent'))
        })
    },
}