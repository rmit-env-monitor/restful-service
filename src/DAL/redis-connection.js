const { REDIS_PORT, REDIS_IP } = require('../../env')
const redisClient = require('redis').createClient
const redis = redisClient(REDIS_PORT, REDIS_IP)

module.exports = redis