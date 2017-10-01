const router = require('express').Router()

const backgroundJobService = require('./background-job-service')
const error500Message = require('../../../../utilities/constants').ERROR_500_MESSAGE

module.exports = app => {
    router.get('/station-ranking', (req, res, next) => {
        backgroundJobService.getStationRanking(req.query.city, req.query.deviceId)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(error500Message)
                next(new Error(err.message))
            })
    })

    app.use('/api/mobile/v1', router)
}