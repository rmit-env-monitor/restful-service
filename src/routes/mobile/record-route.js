const router = require('express').Router()

const recordService = require('../../services/mobile/record-service')

module.exports = (app, socket) => {
    /**
     * Get all location records
     * URL: /api/mobile/records
     * Method: GET
     * Success: return [{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}]
     * Error: return {message}
     */
    router.get('/records', (req, res) => {
        recordService.getAllLocations()
            .then(records => {
                res.status(200).json(records)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    app.use('/api/mobile', router)
}