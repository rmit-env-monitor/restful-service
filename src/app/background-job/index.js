const webRoute = require('./web/background-job-route')
const mobileV1Route = require('./mobile/v1/background-job-route')

module.exports = app => {
    webRoute(app),
    mobileV1Route(app)
}