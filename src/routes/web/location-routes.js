const router = require('express').Router()

const locationService = require('../../services/web/location-service')

module.exports = (app, socket) => {
    /**
     * Get all location records
     * URL: /api/web/locations
     * Method: GET
     * Success: return [{_id utcDateTime, latitute, longitude, no, so2, pm, o3, sound}]
     * Error: return {message}
     */
    router.get('/locations', (req, res) => {
        locationService.getAllLocations()
            .then((locations) => {
                res.status(200).json(locations)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })

    app.use('/api/web', router)
}