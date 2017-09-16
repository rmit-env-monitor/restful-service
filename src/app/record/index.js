const webRoute = require('./web/record-route')
const mobileV1Route = require('./mobile/v1/record-route')

module.exports = app => {
    webRoute(app),
    mobileV1Route(app)
}