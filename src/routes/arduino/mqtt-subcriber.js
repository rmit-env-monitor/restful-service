const config = require('config')
const mqtt = require('mqtt')
const pm25Calculation = require('../../aqi-calculation/pm25-calculation/build/Release/pm25Calculation.node')

const constants = require('../../utilities/constants')
const arduinoService = require('../../services/arduino/service')

const client = mqtt.connect(config.get('mqtt.address'))

client.on('connect', () => {
    console.log("Subcriber connected")
    client.subscribe(constants.MQTT_SENSORS_DATA.pm10)
    client.subscribe(constants.MQTT_SENSORS_DATA.pm25)
    client.subscribe(constants.MQTT_SENSORS_DATA.hum)
    client.subscribe(constants.MQTT_SENSORS_DATA.temp)
})

client.on('message', (topic, message) => {
    console.log(
        JSON.stringify({
            topic,
            message: message.toString()
        })
    )
    let resultAQI = pm25Calculation.calculatePM25(parseFloat(message.toString()))
    console.log(resultAQI)
})