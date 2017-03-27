const router = require('express').Router()

const recordService = require('../../services/arduino/record-service')

module.exports = (app, socket) => {
    /**
     * Add new location records
     * URL: /arduino/records
     * METHOD: POST
     * Params: {deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}
     * Success: return {message}
     * Error: return {message}
     */
    router.post('/records', (req, res) => {
        recordService.addNewLocationRecord(req.body)
            .then(success => {
                socket.emit(req.body.deviceID, req.body)
                res.status(200).json(success)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    app.use('/arduino', router)
}