const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        city: 'string',
        districts: 'string',
        nearby: 'array'
    },
    {
        collection: 'nearby'
    }
)

module.exports = mongoose.model('nearby', schema)