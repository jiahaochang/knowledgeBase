export = {
    path: 'otherPersonalPage',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./OtherPersonalPage'))
        })
    },
}