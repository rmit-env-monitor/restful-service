const baseRepo = require('./base-repository')
const userModel = require('../models/user-model')

class AuthRepository {
    authenticate(condition) {
        return baseRepo.findOne(userModel, condition)
    }

    createAccount(value) {
        var newAccount = new userModel(value)
        return baseRepo.create(newAccount)
    }
}

module.exports = new AuthRepository()