const Promise = global.Promise

const nearbyRepo = require('../../../DAL/repositories/nearby-repository')

class NearbyService {
    getNearbyRecord(city, district) {
        return new Promise((resolve, reject) => {
            nearbyRepo.getNearbyRecord(city, district, '-_id nearby')
                .then(nearby => {
                    resolve(nearby.nearby)
                })
                .catch(err => {
                    reject({ message: err })
                })
        });
    }
}

module.exports = new NearbyService()