const authRepo = require('../../DAL/repositories/auth-repository')
const passwordHashing = require('./shared/auth/local/password-hashing')
const passwordChecking = require('./shared/auth/local/password-checking')
const tokenGenerator = require('./shared/auth/local/token-generator')
const constants = require('../../utilities/constants')

class AuthService {
  async register(body) {
    const isUserAvailable = await authRepo.authenticate({ username: body.username.trim() })
    if (isUserAvailable) {
      return new Error("Username is already taken. Please try again!")
    } else {
      const value = {}
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
    const user = await authRepo.authenticate({ username: body.username.trim() })
    if (!user) {
      /** Username not found */
      return new Error("Username is already taken. Please try again!")
    } else {
      /** Check password */
      const value = {}
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