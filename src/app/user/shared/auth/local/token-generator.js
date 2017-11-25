const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../../../../../../env')

module.exports = value => {
  return jwt.sign(
    value,
    TOKEN_SECRET,
    { expiresIn: '1y' }
  )
}