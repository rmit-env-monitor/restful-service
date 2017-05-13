const Promise = global.Promise

const recordRepo = require('../../../DAL/repositories/record-repository')
const constants = require('../../../utilities/constants')

class RecordService {
    getLatestDeviceRecord(condition) {
        return new Promise((resolve, reject) => {
            recordRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.NO_ID)
                .then(records => {
                    resolve(records[0])
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new RecordService()