const router = require('express').Router()

const deviceService = require('../../services/web/device-service')

module.exports = (app) => {
    /**
     * Get all devices
     * URL: /api/web/devices
     * Method: GET
     * Success: return [{utcDateTime, latitute, longitude, no, so2, pm, o3, sound}]
     * Error: return {message}
     */
    router.get('/devices', (req, res) => {
        deviceService.getAllDevices()
            .then((devices) => {
                res.status(200).json(devices)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })

    app.use('/api/web', router)
}