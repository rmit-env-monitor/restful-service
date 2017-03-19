const Promise = global.Promise

const recordRepo = require('../../DAL/repositories/record-repository')
const constants = require('../../utilities/constants')

class RecordService {
    getAllLocations() {
        return new Promise((resolve, reject) => {
            recordRepo.getAllLocations(constants.NO_ID)
                .then(locations => {
                    resolve(locations)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new RecordService()