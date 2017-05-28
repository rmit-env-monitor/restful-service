const Promise = global.Promise

const redis = require('../../DAL/redis-connection')
const nearbyRepo = require('../../DAL/repositories/nearby-repository')

class NearbyService {
    getNearbyRecord(city, district) {
        const key = city + '-' + district
        return new Promise((resolve, reject) => {
            // Check data in redis.
            redis.get(key, (err, reply) => {
                if (err) {
                    // Error.
                    reject({ message: err })
                } else if (reply) {
                    // Data exists.
                    resolve(JSON.parse(reply))
                } else {
                    // Get data from mongo and store in redis.
                    nearbyRepo.getNearbyRecord(city, district, '-_id nearby')
                        .then(nearby => {
                            redis.set(key, JSON.stringify(nearby.nearby))
                            resolve(nearby.nearby)
                        })
                        .catch(err => {
                            reject({ message: err })
                        })
                }
            })
        })
    }
}

module.exports = new NearbyService()