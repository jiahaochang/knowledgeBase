export = {
    path: 'monthThemeManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./MonthThemeManagement/MonthThemeManagement'))
        })
    },
}