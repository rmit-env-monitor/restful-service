const router = require('express').Router()

const arduinoService = require('../../services/arduino/service')
const aqiCalculation = require('../../utilities/aqi-calculation')

module.exports = (app, socket) => {
    router.post('/records', (req, res) => {
        arduinoService.addNewRecord(req.body)
        socket.emit(req.body.deviceID, req.body)
        res.status(200).json('success')
    })

    router.post('/backup', (req, res) => {
        console.log(req.body.data)
        const valueArray = req.body.data.split('_')
        // Convert NO2 to ppb
        valueArray[2] *= 1000
        // Convert O3 to ppm
        valueArray[3] /= 1000
        // Calculate AQI for each air sensor
        const aqiValues = [
            aqiCalculation.calculateCO(valueArray[0]),
            aqiCalculation.calculateNO2(valueArray[2]),
            aqiCalculation.calculateO3(valueArray[3]),
            aqiCalculation.calculatePM25(valueArray[5])
        ]
        // Get avarage AQI
        const maxAQI = Math.max(...aqiValues)
        const sensorIndex = aqiValues.indexOf(maxAQI)
        let sensorName = ''
        if (sensorIndex === 0)
            sensorName = 'CO'
        else if (sensorIndex === 1)
            sensorName = 'NO2'
        else if (sensorIndex === 2)
            sensorName = 'O3'
        else
            sensorName = 'PM2.5'

        // Format data to be sent
        const jsonValue = {
            co: valueArray[0],
            temp: valueArray[1],
            no2: valueArray[2],
            o3: valueArray[3],
            noise: valueArray[4],
            dust: valueArray[5],
            gps: valueArray[6],
            aqi: maxAQI,
            sensorAQI: sensorName
        }
        socket.emit('data', jsonValue)
        res.status(200).json(jsonValue)
    })
    /** Thuan's part */

    app.use('/arduino', router)
}