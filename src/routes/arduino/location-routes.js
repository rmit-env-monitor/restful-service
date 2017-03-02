const router = require('express').Router()

const locationService = require('../../services/arduino/location-service')

module.exports = (app) => {
    /**
     * Add new location records
     * URL: /api/web/locations
     * METHOD: POST
     * Params: {utcDateTime, latitute, longtitude, dust, no, so2, pm, o3, sound}
     * Success: return {message}
     * Error: return {message}
     */
    router.post('/locations', (req, res) => {
        locationService.addNewLocationRecord(req.body)
            .then((success) => {
                res.status(200).json(success)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })

    app.use('/api/arduino', router)
}