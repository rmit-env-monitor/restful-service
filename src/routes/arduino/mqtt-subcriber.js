const config = require('config')
const PubNub = require('pubnub')

const constants = require('../../utilities/constants')
const arduinoService = require('../../services/arduino/service')
const pubnub = new PubNub({
    subscribeKey: config.get('pubnub.sub-key'),
    secretKey: config.get('pubnub.secret-key'),
    ssl: true
})

module.exports = (socket) => {
    pubnub.addListener({
        message: m => {
            var msg = m.message; // The Payload
            // Insert record to DB.
            arduinoService.addNewRecord(msg)
            // Broadcast new data to client apps.
            socket.emit(msg.deviceID, msg)
        }
    })

    pubnub.subscribe({
        channels: [constants.MQTT_SENSORS_DATA]
    })
}