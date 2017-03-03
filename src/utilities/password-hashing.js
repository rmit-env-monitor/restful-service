const Promise = global.Promise
const bcrypt = require('bcrypt')

module.exports = (plainPassword) => {
    const saltRound = Math.random() * (101 - 1) + 1

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRound, (err, salt) => {
            bcrypt.hash(plainPassword, salt, (err, hash) => {
                if (err) reject(err)
                else resolve(hash)
            })
        })
    })
}