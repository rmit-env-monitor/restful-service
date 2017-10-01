const router = require('express').Router()

const deviceService = require('./station-service')
const error500Message = require('../../../utilities/constants').ERROR_500_MESSAGE

module.exports = app => {
    /**
     * GET: /api/web/devices?city=<value>&district=<value>
     */
    router.get('/devices', (req, res, next) => {
        deviceService.getDevicesByCityDistrict(req.query.city, req.query.district)
            .then(devices => {
                res.status(200).json(devices)
            })
            .catch(err => {
                res.status(500).json(error500Message)
                next(new Error(err.message))
            })
    })

    /**
     * GET: /api/web/devices/cities
     */
    router.get('/devices/cities', (req, res, next) => {
        deviceService.getAvailableCities()
            .then(cities => {
                res.status(200).json(cities)
            })
            .catch(err => {
                res.status(500).json(error500Message)
                next(new Error(err.message))
            })
    })

    /**
     * GET: /api/web/devices/districts?city=<value>
     */
    router.get('/devices/districts', (req, res, next) => {
        deviceService.getAvailableDistrictsByCity(req.query.city)
            .then(districts => {
                res.status(200).json(districts)
            })
            .catch(err => {
                res.status(500).json(error500Message)
                next(new Error(err.message))
            })
    })

    app.use('/api/web', router)
}