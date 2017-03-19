var jwt = require('jsonwebtoken')
var config = require('config')

module.exports = value => {
    return jwt.sign(
        value,
        config.get('auth.secret'),
        { expiresIn: '1y' }
    )
}