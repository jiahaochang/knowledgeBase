export = {
    path: 'rankInClass',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./RankInClass/RankInClass'))
        })
    },
}