const app = require("express")();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const server = require("http").Server(app);
const socket = require("socket.io")(server);
const cors = require("cors");
const helmet = require("helmet");
const winston = require("winston");
const expressWinston = require("express-winston");

const tokenCheck = require("./src/middlewares/token-check-middleware");
global.redis = require("./src/DAL/redis-connection");
const { EXPRESS_PORT, ORIGIN } = require("./env");

/** Establish connection to MongoDB */
require("./src/DAL/mongodb-connection");

/** Routing */
const userRoutes = require("./src/app/user");
const stationRoutes = require("./src/app/station");
const recordRoutes = require("./src/app/record");
const nearbyRoutes = require("./src/app/nearby");
const backgroundJobRoutes = require("./src/app/background-job");

app.set("port", process.env.PORT || EXPRESS_PORT);
app.options("*", cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("*/api", tokenCheck);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
/** Request log */
process.env.NODE_ENV === "production"
  ? app.use(
      expressWinston.logger({
        transports: [
          new winston.transports.File({
            json: true,
            colorize: true,
            timestamp: true,
            filename: "logs/request.log"
          })
        ],
        meta: true,
        expressFormat: true,
        colorize: true,
        statusLevels: {
          200: "info",
          302: "info",
          403: "warn",
          404: "warn",
          500: "error",
          502: "error",
          504: "error"
        }
      })
    )
  : app.use(
      expressWinston.logger({
        transports: [
          new winston.transports.Console({
            json: true,
            colorize: true,
            timestamp: true
          })
        ],
        meta: true,
        expressFormat: true,
        colorize: true,
        statusLevels: {
          200: "info",
          302: "info",
          403: "warn",
          404: "warn",
          500: "error",
          502: "error",
          504: "error"
        }
      })
    );

/** Register APIs */
userRoutes(app);
stationRoutes(app);
recordRoutes(app);
nearbyRoutes(app);
backgroundJobRoutes(app);

/** Error log */
process.env.NODE_ENV === "production"
  ? app.use(
      expressWinston.errorLogger({
        transports: [
          new winston.transports.File({
            json: true,
            colorize: true,
            timestamp: true,
            filename: "logs/error.log"
          })
        ],
        dumpExceptions: true,
        showStack: true
      })
    )
  : app.use(
      expressWinston.errorLogger({
        transports: [
          new winston.transports.Console({
            json: true,
            colorize: true,
            timestamp: true,
            filename: "logs/error.log"
          })
        ],
        dumpExceptions: true,
        showStack: true
      })
    );

server.listen(app.get("port"), "0.0.0.0", () => {
  if (process.env.NODE_ENV !== "production")
    console.log("Listening on port:", app.get("port"));
});
