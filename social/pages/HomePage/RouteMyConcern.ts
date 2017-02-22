export = {
    path: 'myConcern',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyFollow/Component/MyConcern'))
        })
    },
}