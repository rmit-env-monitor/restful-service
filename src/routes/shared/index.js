const auth = require('./auth-route')

module.exports = (app) => {
    auth(app)
}