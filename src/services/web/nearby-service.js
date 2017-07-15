const Promise = global.Promise
// const redis = global.redis

const nearbyRepo = require('../../DAL/repositories/nearby-repository')
const constants = require('../../utilities/constants')

class NearbyService {
    getNearbyRecord(city, district) {
        const key = city + '_' + district + '_nearby'
        return new Promise((resolve, reject) => {
            // redis.get(key, (err, reply) => {
            //     if (err) {
            //         reject({ message: err })
            //     } else if (reply) {
            //         resolve(JSON.parse(reply))
            //     } else {
                    nearbyRepo.getNearbyRecord(city, district, constants.MONGOOSE_QUERY.NEARBY)
                        .then(nearby => {
                            // redis.set(key, JSON.stringify(nearby.nearby))
                            // redis.expire(key, constants.ONE_WEEK_EXPIRE)
                            resolve(nearby.nearby)
                        })
                        .catch(err => {
                            reject({ message: err })
                        })
            //     }
            // })
        })
    }
}

module.exports = new NearbyService()