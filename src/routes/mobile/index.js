const recordV1 = require('./v1/record-route')

module.exports = (app, socket) => {
    recordV1(app, socket)
}