const router = require('express').Router()

const recordService = require('../../services/arduino/record-service')

module.exports = (app, socket) => {
    /**
     * Add new location records
     * URL: /arduino/locations
     * METHOD: POST
     * Params: {utcDateTime, latitute, longitude, no, so2, pm, o3, sound}
     * Success: return {message} , socket {utcDateTime, latitute, longitude, no, so2, pm, o3, sound}
     * Error: return {message}
     */
    router.post('/locations', (req, res) => {
        recordService.addNewLocationRecord(req.body)
            .then((success) => {
                socket.emit('sendAirData', req.body)
                res.status(200).json(success)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })

    app.use('/arduino', router)
}