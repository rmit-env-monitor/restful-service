const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    { username: 'string', fullname: 'string', password: 'string', description: 'string', isActive: 'boolean' },
    { collection: 'user' }
)
module.exports = mongoose.model('user', schema)