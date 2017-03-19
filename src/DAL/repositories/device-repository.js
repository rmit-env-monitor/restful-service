const baseRepo = require('./base-repository')
const deviceModel = require('../models/device-model')

class DeviceRepository {
    getDevicesByCityDistrict(condition, select) {
        return baseRepo.findMany(deviceModel, condition, select)
    }

    getAvailableCities() {
        return baseRepo.findDistinct(deviceModel, 'city')
    }

    getAvailableDistrictsByCity(city) {
        return baseRepo.findDistinctCondition(deviceModel, city, 'district')
    }

    findDeviceById(condition, select) {
        return baseRepo.findOne(deviceModel, condition, select)
    }
}

module.exports = new DeviceRepository()