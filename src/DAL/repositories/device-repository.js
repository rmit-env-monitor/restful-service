const baseRepo = require('./base-repository')
const deviceModel = require('../models/device-model')

class DeviceRepository {
    getAllDevices(select) {
        return baseRepo.findAll(deviceModel, select)
    }
}

module.exports = new DeviceRepository()