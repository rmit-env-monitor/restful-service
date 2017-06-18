const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        lat: 'number',
        lng: 'number',
        name: 'string',
        city: 'string',
        district: 'string'
    },
    {
        collection: 'devices'
    }
)

module.exports = mongoose.model('devices', schema)