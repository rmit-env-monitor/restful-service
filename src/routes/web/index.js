const device = require('./device-route')
const record = require('./record-route')

module.exports = (app, socket) => {
    device(app)
    record(app, socket)
}