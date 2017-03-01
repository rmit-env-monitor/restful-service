const baseRepo = require('./base-repository')
const locationModel = require('../models/location-model')

class LocationRepository {
    getAllLocations() {
        return baseRepo.findAll(locationModel)
    }

    addNewLocationRecord(data) {
        let newLocationRecord = new locationModel(data)
        return baseRepo.create(newLocationRecord)
    }
}

module.exports = new LocationRepository()