
export = {
    path: 'homePage',
    //indexRoute: { onEnter: (nextState, replace) => replace(RedirectUtil.getRedirectPath("homePage")) },
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./HomePage'))
        })
    }
}