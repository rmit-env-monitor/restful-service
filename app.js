const app = require('express')()
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compression = require('compression')
const config = require('config')
const server = require('http').Server(app)
const socket = require('socket.io')(server)
const cors = require('cors')

const userRoute = require('./src/routes/user-route')
const authRoute = require('./src/routes/auth-route')
const chatRoute = require('./src/routes/chat-route')

/** Establish connection to MongoDB */
require('./DAL/connection')

app.set('port', (process.env.PORT || config.get('express.port')))
app.options('*', cors())
app.use(compression())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.disable('x-powered-by')
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', config.get('express.origin'))
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

/** Register APIs */
userRoute(app)
authRoute(app)
chatRoute(app, socket)

/** catch 404 and forward to error handler */
app.use((req, res, next) => {
    var err = new Error('Not Found')    
    next(err)
})

/** production error handler, no stacktraces leaked to user */
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        "message": err.message,        
    })
})

server.listen(app.get('port'), '0.0.0.0', () => {
    console.log('Listening on port:', app.get('port'))
})