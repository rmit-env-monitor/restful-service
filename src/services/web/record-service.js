const Promise = global.Promise

const recordRepo = require('../../DAL/repositories/record-repository')
const constants = require('../../utilities/constants')

class RecordService {
    getRecordsByDevices(devices) {
        var condition = { $or: devices }
        return new Promise((resolve, reject) => {
            recordRepo.getRecordsByDevices(condition, '-_id -__v')
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