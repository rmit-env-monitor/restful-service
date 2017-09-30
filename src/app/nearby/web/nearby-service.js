const Promise = global.Promise
const redis = global.redis

const nearbyRepo = require('../../../DAL/repositories/nearby-repository')
const constants = require('../../../utilities/constants')

class NearbyService {
    async getNearbyRecord(city, district) {
        const key = city + '_' + district + '_nearby'
        const redisData = await this._retrieveRedisData(key)

        if (redisData.err) {
            return { message: redisData.err }
        } else if (redisData.reply) {
            return JSON.parse(redisData.reply)
        } else {
            const nearby = await nearbyRepo.getNearbyRecord(city, district, constants.MONGOOSE_QUERY.NEARBY)
            redis.set(key, JSON.stringify(nearby.nearby))
            redis.expire(key, constants.ONE_WEEK_EXPIRE)
            return nearby.nearby
        }
    }

    _retrieveRedisData(key) {
        return new Promise((resolve, reject) => {
            redis.get(key, (err, reply) => {
                resolve({ err: err, reply: reply })
            })
        })
    }
}

module.exports = new NearbyService()