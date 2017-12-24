const router = require("express").Router();

const authService = require("./auth-service");
const error500Message = require("../../../utilities/constants")
  .ERROR_500_MESSAGE;
const googleOauth = require("./auth/google/google-oauth");

module.exports = app => {
  /**
   * Register new user
   * URL: /users
   * METHOD: POST
   * Params: {username, password}
   * Success: return {username, token}
   * Error: return {message}
   */
  router.post("/users", (req, res, next) => {
    req._routeWhitelists.body = ["username", "email"];
    authService
      .registerUser(req.body)
      .then(value => {
        res.status(200).json(value);
      })
      .catch(err => {
        res.status(500).json(error500Message);
        next(new Error(err.message));
      });
  });

  /**
   * Login account
   * URL: /auth
   * METHOD: POST
   * Params: {username, password}
   * Success: return {username, token}
   * Error: return {message}
   */
  router.post("/auth", (req, res, next) => {
    req._routeWhitelists.body = ["username", "email"];
    authService
      .login(req.body)
      .then(value => {
        res.status(200).json(value);
      })
      .catch(err => {
        res.status(500).json(error500Message);
        next(new Error(err.message));
      });
  });

  router.post("/auth/oauth", (req, res, next) => {
    req._routeWhitelists.body = ["username", "email", "type"];
    authService
      .validateOAuthData(req.body)
      .then(value => {
        res.status(200).json(value);
      })
      .catch(err => {
        res.status(500).json(error500Message);
        next(new Error(err.message));
      });
  });

  app.use("/", router);
};
