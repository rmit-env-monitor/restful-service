const router = require('express').Router()

const recordService = require('../../../services/mobile/v1/record-service')

module.exports = (app, socket) => {
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