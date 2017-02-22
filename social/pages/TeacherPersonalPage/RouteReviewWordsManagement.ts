export = {
    path: 'reviewWordsManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ReviewWordsManagement/ReviewWordsManagement'))
        })
    },
}