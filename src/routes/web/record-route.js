const router = require('express').Router()

const recordService = require('../../services/web/record-service')

module.exports = (app, socket) => {
    /**
     * GET: /api/web/records/:device
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

    app.use('/api/web', router)
}