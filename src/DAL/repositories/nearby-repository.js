const baseRepo = require('./base-repository')
const nearbyModel = require('../models/nearby-model')

class NearbyRepository {
    getNearbyRecord(city, district, select) {
        return baseRepo.findOne(nearbyModel, { city: city, district: district }, select)
    }
}

module.exports = new NearbyRepository()