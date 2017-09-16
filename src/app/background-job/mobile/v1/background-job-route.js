const router = require('express').Router()

const backgroundJobService = require('./background-job-service')

module.exports = app => {
    router.get('/station-ranking', (req, res) => {
        backgroundJobService.getStationRanking(req.query.city, req.query.deviceId).then(result => {
            res.status(200).json(result)
        })
    })

    app.use('/api/mobile/v1', router)
}