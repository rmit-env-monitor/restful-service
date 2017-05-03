const router = require('express').Router()

const arduinoService = require('../../services/arduino/service')

module.exports = (app, socket) => {
    router.post('/records', (req, res) => {
        arduinoService.addNewRecord(req.body)
        socket.emit(req.body.deviceID, req.body)
        res.status(200).json('success')
    })

    /** Thuan's part */
    router.post('/sensors', (req, res) => {
        socket.emit('data', req.body)
        res.status(200).json('success')
    })

    router.post('/backup', (req, res) => {
        console.log(req.body.data)
        const valueArray = req.body.data.split('_')
        const jsonValue = {
            co: valueArray[0],
            temp: valueArray[1],
            no2: valueArray[2],
            o3: valueArray[3],
            noise: valueArray[4],
            dust: valueArray[5],
            gps: valueArray[6]
        }
        socket.emit('data', jsonValue)
        res.status(200).json('success')
    })
    /** Thuan's part */

    app.use('/arduino', router)
}