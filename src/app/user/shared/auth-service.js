const authRepo = require("../../../DAL/repositories/auth-repository");
const passwordHashing = require("./auth/local/password-hashing");
const passwordChecking = require("./auth/local/password-checking");
const tokenGenerator = require("./auth/local/token-generator");
const { ERROR_MESSAGE, AUTH_TYPE } = require("../../../utilities/constants");

class AuthService {
  async registerUser(body) {
    const value = {};

    /** Check if username exists */
    const isUserAvailable = await authRepo.authenticate({
      username: body.username.trim()
    });
    if (isUserAvailable) {
      value.message = "Username is already taken. Please try again!";
      return value;
    } else {
      /** Hash password */
      const password = await passwordHashing(body.password.trim());
      body.password = password;
      body.authType = AUTH_TYPE.PASSWORD;

      /** Add new user to DB */
      const newUser = await authRepo.registerAccount(body);
      value.id = newUser.id;
      value.email = newUser.email;
      value.username = newUser.username;
      value.authType = newUser.authType;
      value.token = tokenGenerator(value);
      return value;
    }
  }

  async login(body) {
    const value = {};

    /** Check if username exists */
    const user = await authRepo.authenticate({
      username: body.username.trim()
    });
    if (!user) {
      /** Username not found */
      value.message = ERROR_MESSAGE;
      return value;
    } else {
      /** Check password */
      const passwordCheckResult = await passwordChecking(
        body.password,
        user.password
      );
      if (passwordCheckResult) {
        return this._getReturnDataToClient(user);
      } else {
        value.message = ERROR_MESSAGE;
        return value;
      }
    }
  }

  async googleAuth(value) {
    let user = await authRepo.authenticate({ email: value.email.trim() });
    if (!user) {
      const newUser = {
        username: value.username,
        email: value.email,
        authType: AUTH_TYPE.GOOGLE
      };
      user = await authRepo.registerAccount(newUser);
    }

    return this._getReturnDataToClient(user);
  }

  _getReturnDataToClient(user) {
    const value = {};
    value.id = user.id;
    value.email = user.email;
    value.username = user.username;
    value.authType = user.authType;
    value.token = tokenGenerator(value);
    return value;
  }
}

module.exports = new AuthService();
