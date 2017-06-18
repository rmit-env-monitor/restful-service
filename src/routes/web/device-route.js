const router = require('express').Router()

const deviceService = require('../../services/web/device-service')

module.exports = app => {
    /**
     * GET: /api/web/devices?city=<value>&district=<value>
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
     * GET: /api/web/devices/cities
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
     * GET: /api/web/devices/districts?city=<value>
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

    app.use('/api/web', router)
}