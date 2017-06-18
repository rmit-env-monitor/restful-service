const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        deviceID: 'string',
        utcDateTime: 'string',
        no2AQI: 'number',
        so2AQI: 'number',
        pm2AQI: 'number',
        pm10AQI: 'number',
        o3AQI: 'number',
        coAQI: 'number',
        aqi: 'number'
    },
    {
        collection: 'aqi_values'
    }
)

module.exports = mongoose.model('aqi_values', schema)