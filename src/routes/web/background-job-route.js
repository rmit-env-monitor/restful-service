const router = require('express').Router()

const backgroundJobService = require('../../services/web/background-job-service')

module.exports = app => {
    router.get('/station-ranking', (req, res) => {
        backgroundJobService.getStationRanking(req.query.city, req.query.deviceId).then(result => {
            res.status(200).json(result)
        })
    })

    app.use('/api/web', router)
}