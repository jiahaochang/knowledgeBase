
export = {
    path: 'majorLib',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MajorLib'))
        })
    },
}