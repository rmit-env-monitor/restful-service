const GoogleAuth = require("google-auth-library");

const { GOOGLE_CLIENT_ID } = require("../../env");
const authRepo = require("../DAL/repositories/auth-repository");

const auth = new GoogleAuth();
const client = new auth.OAuth2(GOOGLE_CLIENT_ID, "", "");

module.exports = (req, res, next) => {
  const tokenString = req.headers.authorization;
  const msg = { message: "Unauthorized" };

  if (tokenString) {
    let token = tokenString.split(" ");
    if (token[0] === "Google") {
      client.verifyIdToken(token[1], GOOGLE_CLIENT_ID, (e, login) => {
        if (e) {
          res.status(403).json({ message: msg.message });
        } else {
          const payload = login.getPayload();
          authRepo.authenticate({ email: payload.email }).then(user => {
            user ? next() : res.status(403).json({ message: msg.message });
          });
        }
      });
    } else {
      res.status(403).json(msg);
    }
  } else {
    res.status(403).json(msg);
  }
};
