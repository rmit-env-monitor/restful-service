const router = require('express').Router()

const deviceService = require('../../services/web/device-service')

module.exports = app => {
    /**
     * Get all devices by city and district
     * URL: /api/web/devices
     * Method: GET
     * Query: city, district
     * Success: return [{_id name}]
     * Error: return {message}
     */
    router.get('/devices', (req, res) => {
        deviceService.getDevicesByCityDistrict(req.query.city, req.query.district)
            .then(devices => {
                res.status(200).json(devices)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    /**
     * Get distinct list of available cities
     * URL: /api/web/devices/cities
     * Method: GET
     * Success: return [city]
     * Error: return {message}
     */
    router.get('/devices/cities', (req, res) => {
        deviceService.getAvailableCities()
            .then(cities => {
                res.status(200).json(cities)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    /**
     * Get distinct list of available districts of city
     * URL: /api/web/devices/districts
     * Method: GET
     * Query: city
     * Success: return [district]
     * Error: return {message}
     */
    router.get('/devices/districts', (req, res) => {
        deviceService.getAvailableDistrictsByCity(req.query.city)
            .then(districts => {
                res.status(200).json(districts)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    /**
     * Get one device by city and district
     * URL: /api/web/devices
     * Method: GET
     * Query: city, district
     * Success: return [{_id name}]
     * Error: return {message}
     */
    router.get('/device', (req, res) => {
        deviceService.getOneDeviceByCityDistrict(req.query.city, req.query.district)
            .then(devices => {
                res.status(200).json(devices)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    app.use('/api/web', router)
}