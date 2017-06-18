const router = require('express').Router()

const deviceService = require('../../../services/mobile/v1/device-service')

module.exports = app => {
    /**
     * GET: /api/mobile/v1/devices?city=<value>&district=<value>
     */
    router.get('/devices', (req, res) => {
        deviceService.getDevicesByCityDistrict(req.query.city, req.query.district)
            .then(devices => {
                res.status(200).json(devices)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

    /**
     * GET: /api/mobile/v1/devices/cities
     */
    router.get('/devices/cities', (req, res) => {
        deviceService.getAvailableCities()
            .then(cities => {
                res.status(200).json(cities)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

    /**
     * GET: /api/mobile/v1/devices/districts?city=<value>
     */
    router.get('/devices/districts', (req, res) => {
        deviceService.getAvailableDistrictsByCity(req.query.city)
            .then(districts => {
                res.status(200).json(districts)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })

    app.use('/api/mobile/v1', router)
}