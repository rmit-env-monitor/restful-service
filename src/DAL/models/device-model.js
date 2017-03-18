const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        lat: 'number', lng: 'number', city: 'string', district: 'string'
    },
    { collection: 'devices' }
)

module.exports = mongoose.model('devices', schema)