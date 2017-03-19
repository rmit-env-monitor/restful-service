const router = require('express').Router()

const recordService = require('../../services/arduino/record-service')

module.exports = (app, socket) => {
    /**
     * Add new location records
     * URL: /arduino/locations
     * METHOD: POST
     * Params: {deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}
     * Success: return {message}
     * Error: return {message}
     */
    router.post('/locations', (req, res) => {
        recordService.findDeviceById(req.body.deviceID).then(device => {
            recordService.addNewLocationRecord(req.body)
                .then(success => {
                    req.body.lat = device.lat
                    req.body.lng = device.lng
                    req.body.city = device.city
                    req.body.district = device.district
                    
                    socket.emit('sendData', req.body)
                    res.status(200).json(success)
                })
                .catch(err => {
                    res.status(400).json(err)
                })
        }).catch(err => {
            res.status(400).json(err)
        })
    })

    app.use('/arduino', router)
}