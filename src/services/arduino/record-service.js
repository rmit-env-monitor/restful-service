const Promise = global.Promise

const recordRepo = require('../../DAL/repositories/record-repository')

class RecordService {
    addNewLocationRecord(data) {
        return new Promise((resolve, reject) => {
            recordRepo.addNewLocationRecord(data)
                .then(() => {
                    resolve({ message: 'success' })
                })
                .catch((err) => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new RecordService()