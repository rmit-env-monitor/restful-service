const router = require('express').Router()

const recordService = require('../../services/web/record-service')
const deviceService = require('../../services/web/device-service')

module.exports = (app, socket) => {
    /**
     * Get latest record of a device
     * URL: /api/web/records/:device
     * Method: GET
     * Params: deviceID
     * Success: return [{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}]
     * Error: return {message}
     */
    router.get('/records/:device', (req, res) => {
        recordService.getLatestDeviceRecord(req.params.device).then(records => {
            res.status(200).json(records)
        }).catch(err => {
            res.status(400).json(err)
        })
    })    

    app.use('/api/web', router)
}