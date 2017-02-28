var mongoose = require('mongoose')
var config = require('config')
var Promise = require('promise')

mongoose.connect(config.get('mongodb.url'))
mongoose.Promise = Promise
