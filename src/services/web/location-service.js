const Promise = global.Promise

const locationRepo = require('../../DAL/repositories/location-repository')

class LocationService {
    getAllLocations() {
        return new Promise((resolve, reject) => {
            locationRepo.getAllLocations()
                .then((locations) => {
                    resolve(locations)
                })
                .catch((err) => {
                    reject({ message: err })
                })
        })
    }    
}

module.exports = new LocationService()