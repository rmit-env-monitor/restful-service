const Promise = global.Promise

const recordRepo = require('../../DAL/repositories/record-repository')
const constants = require('../../utilities/constants')

class RecordService {
    getRecordsByDevice(device) {
        return new Promise((resolve, reject) => {
            recordRepo.getRecordsByDevice({ deviceID: device }, constants.NO_ID)
                .then(records => {
                    resolve(records)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    getLatestDeviceRecord(condition) {
        return new Promise((resolve, reject) => {
            recordRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.NO_ID)
                .then(records => {
                    resolve(records)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new RecordService()