const router = require('express').Router()

const nearbyService = require('../../services/web/nearby-service')

module.exports = app => {
    /**
     * Get nearby districts based on current city and district
     * URL: /api/web/nearby
     * Method: GET
     * Query: city, district
     * Success: return nearby: []
     * Error: return {message}
     */
    router.get('/nearby', (req, res) => {
        nearbyService.getNearbyRecord(req.query.city, req.query.district)
            .then(nearby => {
                res.status(200).json(nearby)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    app.use('/api/web', router)
}