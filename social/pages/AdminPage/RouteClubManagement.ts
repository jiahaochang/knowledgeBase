export = {
    path: 'clubManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ClubManagement/ClubManagement'))
        })
    },
}