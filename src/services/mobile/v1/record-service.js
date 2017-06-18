const Promise = global.Promise

const recordRepo = require('../../../DAL/repositories/record-repository')
const aqiValueRepo = require('../../../DAL/repositories/aqi-value-repository')
const constants = require('../../../utilities/constants')

class RecordService {
    getLatestDeviceRecord(condition) {
        let record = {}
        return new Promise((resolve, reject) => {
            // Get AQI records.
            aqiValueRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.MONGOOSE_QUERY.NO_ID_DEVICEID_DATE)
                .then(values => {
                    record = values[0]
                    // Get date, sound and temparature.
                    recordRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.MONGOOSE_QUERY.DATE_SOUND_TEMP)
                        .then(records => {
                            record._doc.temperature = records[0].temperature
                            record._doc.sound = records[0].sound
                            record._doc.utcDateTime = records[0].utcDateTime
                            resolve(record)
                        })
                        .catch(err => {
                            reject({ message: err })
                        })
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new RecordService()