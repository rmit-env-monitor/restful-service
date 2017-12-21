const baseRepo = require("./base-repository");
const userModel = require("../models/user-model");

class AuthRepository {
  authenticate(condition) {
    return baseRepo.findOne(userModel, condition);
  }

  registerAccount(data) {
    let newAccount = new userModel(data);
    return baseRepo.create(newAccount);
  }
}

module.exports = new AuthRepository();
