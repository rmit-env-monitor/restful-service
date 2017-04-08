const router = require('express').Router()

const recordService = require('../../../services/mobile/v1/record-service')

module.exports = (app, socket) => {
    
    app.use('/api/mobile/v1', router)
}