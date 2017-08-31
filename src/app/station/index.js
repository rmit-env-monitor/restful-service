const webRoute = require('./web/station-route')
const mobileV1Route = require('./mobile/v1/station-route')

module.exports = app => {
    webRoute(app),
    mobileV1Route(app)
}