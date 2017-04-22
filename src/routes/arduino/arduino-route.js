const router = require('express').Router()

const arduinoService = require('../../services/arduino/service')

module.exports = (app, socket) => {
    router.post('/records', (req, res) => {
        arduinoService.addNewRecord(req.body)
        socket.emit(req.body.deviceID, req.body)
        res.status(200).json('success')
    })

    app.use('/arduino', router)
}