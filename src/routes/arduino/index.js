const subcriber = require('./mqtt-subcriber')
const arduinoRoute = require('./arduino-route')

module.exports = (app, socket) => {
    subcriber(socket)
    arduinoRoute(app, socket)
}