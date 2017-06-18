const router = require('express').Router()

const nearbyService = require('../../../services/mobile/v1/nearby-service')

module.exports = app => {
    /**
     * GET: /api/web/nearby?city=<value>&district=<value>
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

    app.use('/api/mobile/v1', router)
}