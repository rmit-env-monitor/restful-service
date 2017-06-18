const baseRepo = require('./base-repository')
const aqiValueModel = require('../models/aqi-value-model')

class AqiValueRepository {
    getLatestDeviceRecord(condition, sort, limit, select) {
        return baseRepo.findManyLimit(aqiValueModel, condition, sort, limit, select)
    }
}

module.exports = new AqiValueRepository()