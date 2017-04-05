const mqtt = require('mqtt')
const config = require('config')
const constants = require('../../utilities/constants')

const client = mqtt.connect(config.get('mqtt.address'))
const arduinoService = require('../../services/arduino/service')

module.exports = (socket) => {
    client.on('connect', () => {
        client.subscribe(constants.MQTT_SENSORS_DATA)
    })

    client.on('message', (topic, message) => {
        switch (topic) {
            case constants.MQTT_SENSORS_DATA:
                const rawData = message.toString().split('_')
                arduinoService.addNewRecord(rawData)
                socket.emit(rawData[0], rawData)
                break
        
            default:
                break
        }
    })
}