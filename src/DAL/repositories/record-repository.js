const baseRepo = require('./base-repository')
const recordModel = require('../models/record-model')

class RecordRepository {
    getRecordsByDevice(condition, select) {
        return baseRepo.findMany(recordModel, condition, select)
    }

    addNewLocationRecord(data) {
        let newLocationRecord = new recordModel(data)
        return baseRepo.create(newLocationRecord)
    }

    getLatestDeviceRecord(condition, sort, limit, select) {
        return baseRepo.findManyLimit(recordModel, condition, sort, limit, select)
    }
}

module.exports = new RecordRepository()