const google = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const plus = google.plus("v1");
const Promise = global.Promise;

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} = require("../../../../../../env");

class GoogleOAuth {
  constructor() {
    this.oauth2Client = new OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      "https://localhost/google/auth/callback"
    );
  }

  getRedirectUrl() {
    return this.oauth2Client.generateAuthUrl({
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read"
      ]
    });
  }

  getTokens(code) {
    return new Promise((resolve, reject) => {
      this.oauth2Client.getToken(code, (err, tokens) => {
        if (!err) {
          this.oauth2Client.credentials = tokens;
          resolve(tokens);
        } else {
          reject();
        }
      });
    });
  }

  getUserInfo() {
    return new Promise((resolve, reject) => {
      plus.people.get(
        {
          userId: "me",
          auth: this.oauth2Client
        },
        (err, response) => {
          resolve(response);
        }
      );
    });
  }
}

module.exports = new GoogleOAuth();
