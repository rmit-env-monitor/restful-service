const Promise = global.Promise

const deviceRepo = require('../../../DAL/repositories/device-repository')

class DeviceService {
    getDevicesByCityDistrict(city, district) {
        const condition = {
            city: city,
            district: district
        }
        return new Promise((resolve, reject) => {
            deviceRepo.getDevicesByCityDistrict(condition, '_id name')
                .then(devices => {
                    resolve(devices)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    getAvailableCities() {
        return new Promise((resolve, reject) => {
            deviceRepo.getAvailableCities()
                .then(cities => {
                    resolve(cities)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    getAvailableDistrictsByCity(city) {
        return new Promise((resolve, reject) => {
            deviceRepo.getAvailableDistrictsByCity(city)
                .then(districts => {
                    resolve(districts)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new DeviceService()