const Promise = global.Promise

const locationRepo = require('../../DAL/repositories/location-repository')

class LocationService {
    addNewLocationRecord(data) {
        return new Promise((resolve, reject) => {
            locationRepo.addNewLocationRecord(data)
                .then(() => {
                    resolve({ message: 'success' })
                })
                .catch((err) => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new LocationService()