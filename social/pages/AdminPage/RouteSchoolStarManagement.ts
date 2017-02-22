/**
 * Created by Administrator on 2016/8/1.
 */
export = {
    path: 'schoolStarManagement',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./SchoolStarManagement/SchoolStarManagement'))
        })
    },
}