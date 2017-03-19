const Promise = global.Promise

const recordRepo = require('../../DAL/repositories/record-repository')
const deviceRepo = require('../../DAL/repositories/device-repository')

class RecordService {
    addNewLocationRecord(data) {
        return new Promise((resolve, reject) => {
            recordRepo.addNewLocationRecord(data)
                .then(() => {
                    resolve({ message: 'success' })
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    findDeviceById(id) {
        return new Promise((resolve, reject) => {
            deviceRepo.findDeviceById({ _id: id }, '-__v')
                .then(device => {
                    resolve(device)
                })
                .catch(err => {
                    reject({ message: err })
                })
        });
    }
}

module.exports = new RecordService()