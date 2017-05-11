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
                console.log(message.toString())
                const rawData = message.toString().split('_')
                let data = {
                    deviceID: rawData[0],
                    utcDateTime: rawData[1],
                    no: rawData[2],
                    so2: rawData[3],
                    pm2: rawData[4],
                    pm10: rawData[5],
                    o3: rawData[6],
                    co: rawData[7],
                    sound: rawData[8],
                    uv: rawData[9]
                }

                // Insert record to DB.
                // arduinoService.addNewRecord(data)
                // Confirm result to publisher.
                client.publish('result', 'success')
                // Broadcast new data to clients.
                // socket.emit(data.deviceID, data)
                break

            default:
                break
        }
    })
}