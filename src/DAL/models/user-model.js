const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    { username: 'string', password: 'string' },
    { collection: 'user' }
)
module.exports = mongoose.model('user', schema)