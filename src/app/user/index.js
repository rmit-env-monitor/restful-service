const authRoute = require('./shared/auth-route')

module.exports = app => {
    authRoute(app)
}