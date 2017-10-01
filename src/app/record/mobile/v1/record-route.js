const router = require('express').Router()

const recordService = require('./record-service')
const error500Message = require('../../../../utilities/constants')

module.exports = app => {
    /**
     * GET: /api/mobile/v1/records/:device
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

    app.use('/api/mobile/v1', router)
}