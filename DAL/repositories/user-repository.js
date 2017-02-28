const userModel = require('../models/user-model')
const baseRepo = require('./base-repository')

class UserRepository {
    findAllUserRepo() {
        return baseRepo.findAll(userModel)
    }

    editUserAccountRepo(id, value) {
        return baseRepo.edit(userModel, id, value)
    }
}

module.exports = new UserRepository()