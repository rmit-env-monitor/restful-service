const authRepo = require('../../../DAL/repositories/auth-repository')
const passwordHashing = require('./auth/local/password-hashing')
const passwordChecking = require('./auth/local/password-checking')
const tokenGenerator = require('./auth/local/token-generator')
const constants = require('../../../utilities/constants')

class AuthService {
  async registerUser(body) {
    const value = {}

    /** Check if username exists */
    const isUserAvailable = await authRepo.authenticate({ username: body.username.trim() })
    if (isUserAvailable) {
      value.message = 'Username is already taken. Please try again!'
      return value
    } else {
      /** Hash password */
      const password = await passwordHashing(body.password.trim())
      body.password = password

      /** Add new user to DB */
      await authRepo.registerAccount(body)
      value.username = body.username
      value.token = tokenGenerator(value)
      return value
    }
  }

  async login(body) {
    const value = {}

    /** Check if username exists */
    const user = await authRepo.authenticate({ username: body.username.trim() })
    if (!user) {
      /** Username not found */
      value.message = constants.ERROR_MESSAGE
      return value
    } else {
      /** Check password */
      const passwordCheckResult = await passwordChecking(body.password, user.password)
      if (passwordCheckResult) {
        value.username = user.username
        value.token = tokenGenerator(value)
        return value
      } else {
        value.message = constants.ERROR_MESSAGE
        return value
      }
    }
  }
}

module.exports = new AuthService()