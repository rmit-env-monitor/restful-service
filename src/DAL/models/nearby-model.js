const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        city: String,
        districts: String,
        nearby: Array
    },
    {
        collection: 'nearby'
    }
)

module.exports = mongoose.model('nearby', schema)