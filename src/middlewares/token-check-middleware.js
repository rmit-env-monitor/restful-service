const jwt = require("jsonwebtoken");
const GoogleAuth = require("google-auth-library");

const { TOKEN_SECRET, GOOGLE_CLIENT_ID } = require("../../env");
const authRepo = require("../DAL/repositories/auth-repository");

const auth = new GoogleAuth();
const client = new auth.OAuth2(GOOGLE_CLIENT_ID, "", "");

module.exports = (req, res, next) => {
  const tokenString = req.headers.authorization;
  const msg = { message: "" };

  if (tokenString) {
    let token = tokenString.split(" ");
    if (token[0] === "Bearer") {
      jwt.verify(token[1], TOKEN_SECRET, (err, decoded) => {
        if (err) {
          msg.message = err.message;
          res.status(403).json(msg);
        } else {
          authRepo
            .authenticate({
              _id: decoded.id,
              username: decoded.username,
              email: decoded.email
            })
            .then(user => {
              if (user) {
                req.decoded = decoded;
                next();
              } else {
                msg.message = "Unauthorized";
                res.status(403).json(msg);
              }
            });
        }
      });
    } else {
      next();
    }
  } else {
    msg.message = "Unauthorized";
    res.status(403).json(msg);
  }
};
