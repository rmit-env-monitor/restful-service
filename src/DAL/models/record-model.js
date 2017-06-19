const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        deviceID: 'string',
        utcDateTime: 'string',
        no2: 'number',
        so2: 'number',
        pm2: 'number',
        pm10: 'number',
        o3: 'number',
        co: 'number',
        sound: 'number',
        temperature: 'number',
        uv: 'number',
        humidity: 'number'
    },
    {
        collection: 'records'
    }
)

module.exports = mongoose.model('records', schema)