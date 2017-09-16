const router = require('express').Router()

const recordService = require('./record-service')

module.exports = app => {
    /**
     * GET: /api/mobile/v1/records/:device
     */
    router.get('/records/:device', (req, res) => {
        recordService.getLatestDeviceRecord(req.params.device)
            .then(records => {
                res.status(200).json(records)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

    app.use('/api/mobile/v1', router)
}