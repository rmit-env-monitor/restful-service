const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    { username: 'string', password: 'string' },
    { collection: 'users' }
)
module.exports = mongoose.model('users', schema)