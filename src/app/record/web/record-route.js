const router = require('express').Router()

const recordService = require('./record-service')
const error500Message = require('../../../utilities/constants').ERROR_500_MESSAGE

module.exports = app => {
    /**
     * GET: /api/web/records/:device
     */
    router.get('/records/:device', (req, res, next) => {
        recordService.getLatestDeviceRecord(req.params.device)
            .then(records => {
                res.status(200).json(records)
            })
            .catch(err => {
                res.status(500).json(error500Message)
                next(new Error(err.message))
            })
    })

    app.use('/api/web', router)
}