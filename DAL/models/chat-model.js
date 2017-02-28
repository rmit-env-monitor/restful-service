const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    { username: 'string', message: 'string', dateTime: 'string' },
    { collection: 'chat' }
)

module.exports = mongoose.model('chat', schema)