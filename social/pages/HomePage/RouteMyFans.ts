export = {
    path: 'myFans',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MyFollow/Component/MyFans'))
        })
    },
}