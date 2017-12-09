const router = require('express').Router()

const nearbyService = require('./nearby-service')
const error500Message = require('../../../utilities/constants').ERROR_500_MESSAGE

module.exports = app => {
    /**
     * GET: /api/web/nearby?city=<value>&district=<value>
     */
    router.get('/nearby', (req, res, next) => {
        res.status(200).json(
            nearbyService.getNearbyRecord(req.query.city, req.query.district)
        )
    })

    app.use('/api/web', router)
}