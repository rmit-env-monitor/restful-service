const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://env-monitor-broker:1883')

client.on('connect', () => {
    client.publish('pm25', '123')
    client.end()
})