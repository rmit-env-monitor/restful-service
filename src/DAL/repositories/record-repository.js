const baseRepo = require('./base-repository')
const recordModel = require('../models/record-model')

class RecordRepository {
    getAllLocations(select) {
        return baseRepo.findAll(recordModel, select)
    }

    addNewLocationRecord(data) {
        let newLocationRecord = new recordModel(data)
        return baseRepo.create(newLocationRecord)
    }
}

module.exports = new RecordRepository()