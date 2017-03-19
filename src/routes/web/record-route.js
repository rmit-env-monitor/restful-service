const router = require('express').Router()

const recordService = require('../../services/web/record-service')
const deviceService = require('../../services/web/device-service')

module.exports = (app, socket) => {
    /**
     * Get location records based on city district
     * URL: /api/web/records
     * Method: GET
     * Params: city district
     * Success: return [{deviceID, utcDateTime, no, so2, pm2, pm10, o3, co, sound}]
     * Error: return {message}
     */
    router.get('/records', (req, res) => {
        deviceService.getDevicesByCityDistrict(req.query.city, req.query.district).then(devices => {
            const deviceList = []
            for (let device of devices) {
                deviceList.push({ deviceID: device._id.toString() })
            }
            
            recordService.getRecordsByDevices(deviceList).then(records => {
                res.status(200).json(records)
            }).catch(err => {
                res.status(400).json(err)
            })
        }).catch(err => {
            res.status(400).json(err)
        })
    })

    app.use('/api/web', router)
}