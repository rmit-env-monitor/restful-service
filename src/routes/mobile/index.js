const recordV1 = require('./v1/record-route')
const nearbyV1 = require('./v1/nearby-route')
const deviceV1 = require('./v1/device-route')

module.exports = (app, socket) => {
    recordV1(app, socket)
    nearbyV1(app)
    deviceV1(app)
}