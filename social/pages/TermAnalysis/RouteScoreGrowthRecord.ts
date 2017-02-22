export = {
    path: 'scoreGrowthRecord',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./ScoreGrowthRecord/ScoreGrowthRecord'))
        })
    },
}