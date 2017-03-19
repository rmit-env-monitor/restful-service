var mongoose = require('mongoose')
var config = require('config')

mongoose.connect(config.get('mongodb.url'))
mongoose.Promise = global.Promise