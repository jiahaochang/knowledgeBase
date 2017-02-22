
export = {
    path: 'jobLib',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./JobLib'))
        })
    },
}