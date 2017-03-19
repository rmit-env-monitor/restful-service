const baseRepo = require('./base-repository')
const recordModel = require('../models/record-model')

class RecordRepository {
    getRecordsByDevices(condition, select) {
        return baseRepo.findMany(recordModel, condition, select)
    }

    addNewLocationRecord(data) {
        let newLocationRecord = new recordModel(data)
        return baseRepo.create(newLocationRecord)
    }
}

module.exports = new RecordRepository()