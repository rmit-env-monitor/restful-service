const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        deviceID: 'string',
        utcDateTime: 'string',
        no: 'number', noAQI: 'number',
        so2: 'number', so2AQI: 'number',
        pm2: 'number', pm2AQI: 'number',
        pm10: 'number', pm10AQI: 'number',
        o3: 'number', o3AQI: 'number',
        co: 'number', coAQI: 'number',
        sound: 'number',
        uv: 'number',
        aqi: 'number'
    },
    { collection: 'records' }
)

module.exports = mongoose.model('records', schema)