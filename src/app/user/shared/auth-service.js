const Promise = global.Promise
const authRepo = require('../../../DAL/repositories/auth-repository')
const passwordHashing = require('./auth/local/password-hashing')
const passwordChecking = require('./auth/local/password-checking')
const tokenGenerator = require('./auth/local/token-generator')
const constants = require('../../../utilities/constants')

class AuthService {
    registerUser(body) {
        const value = {}

        return new Promise((resolve, reject) => {
            /** Check if username exists */
            authRepo.authenticate({ username: body.username.trim() }).then(isUserAvailable => {
                if (isUserAvailable) {
                    value.message = 'Username is already taken. Please try again!'
                    reject(value)
                } else {
                    /** Hash password */
                    passwordHashing(body.password.trim())
                        .then(res => {
                            body.password = res

                            /** Add new user to DB */
                            authRepo.registerAccount(body).then(() => {
                                value.username = body.username
                                value.token = tokenGenerator(value)
                                resolve(value)
                            })
                        })
                        .catch(err => {
                            value.message = err
                            reject(value)
                        })
                }
            })
        })
    }

    login(body) {
        const value = {}

        return new Promise((resolve, reject) => {
            /** Check if username exists */
            authRepo.authenticate({ username: body.username.trim() }).then(user => {
                if (!user) {
                    /** Username not found */
                    value.message = constants.ERROR_MESSAGE
                    reject(value)
                } else {
                    /** Check password */
                    passwordChecking(body.password, user.password)
                        .then(res => {
                            if (res) {
                                value.username = user.username
                                value.token = tokenGenerator(value)
                                resolve(value)
                            } else {
                                value.message = constants.ERROR_MESSAGE
                                reject(value)
                            }
                        })
                        .catch(err => {
                            value.message = err
                            reject(value)
                        })
                }
            })
        })
    }
}

module.exports = new AuthService()