const router = require('express').Router()

const locationService = require('../../services/arduino/location-service')

module.exports = (app, socket) => {
    /**
     * Add new location records
     * URL: /arduino/locations
     * METHOD: POST
     * Params: {utcDateTime, latitute, longitude, no, so2, pm, o3, sound}
     * Success: return {message}
     * Error: return {message}
     */
    router.post('/locations', (req, res) => {
        locationService.addNewLocationRecord(req.body)
            .then((success) => {
                socket.emit('sendAirMeasurement', req.body)
                res.status(200).json(success)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })

    app.use('/arduino', router)
}