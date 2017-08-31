const webRoute = require('./web/nearby-route')
const mobileV1Route = require('./mobile/v1/nearby-route')

module.exports = app => {
    webRoute(app),
    mobileV1Route(app)
}