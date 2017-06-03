const config = require('config')
const mqtt = require('mqtt')
const coCalculation = require('../../aqi-calculation/co-calculation/build/Release/coCalculation.node')

const constants = require('../../utilities/constants')
const arduinoService = require('../../services/arduino/service')

const client = mqtt.connect(config.get('mqtt.address'))

module.exports = socket => {
    client.on('connect', () => {
        client.subscribe(constants.MQTT_SENSORS_DATA)
    })

    client.on('message', (topic, message) => {
        client.publish('result', 'success')
        console.log('Topic: ' + topic)
        console.log('Message: ' + message.toString())
        console.log('---')
    })
}