const router = require('express').Router()

const nearbyService = require('./nearby-service')
const error500Message = require('../../../../utilities/constants').ERROR_500_MESSAGE

module.exports = app => {
    /**
     * GET: /api/web/nearby?city=<value>&district=<value>
     */
    router.get('/nearby', (req, res, next) => {
        nearbyService.getNearbyRecord(req.query.city, req.query.district)
            .then(nearby => {
                res.status(200).json(nearby)
            })
            .catch(err => {
                res.status(500).json(error500Message)
                next(new Error(err.message))
            })
    })

    app.use('/api/mobile/v1', router)
}