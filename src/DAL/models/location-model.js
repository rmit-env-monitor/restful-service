const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        utcDateTime: 'string', latitude: 'number', longtitude: 'number', dust: 'number',
        no: 'number', so2: 'number', pm: 'number', o3: 'number', sound: 'number'
    },
    { collection: 'locations' }
)

module.exports = mongoose.model('locations', schema)