export = {
    path: 'specialStudent',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./SpecialStudent/SpecialStudent'))
        })
    },
}