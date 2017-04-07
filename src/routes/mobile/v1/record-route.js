const router = require('express').Router()

const recordService = require('../../../services/mobile/v1/record-service')

module.exports = (app, socket) => {
    /**
     * Get all location records
     * URL: /api/mobile/records
     * Method: GET
     * Success: return [{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}]
     * Error: return {message}
     */
    router.get('/records', (req, res) => {
        
    })

    app.use('/api/mobile/v1', router)
}