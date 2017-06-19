const Promise = global.Promise

const recordRepo = require('../../DAL/repositories/record-repository')
const aqiValueRepo = require('../../DAL/repositories/aqi-value-repository')
const constants = require('../../utilities/constants')

class RecordService {
    getRecordsByDevice(device) {
        return new Promise((resolve, reject) => {
            recordRepo.getRecordsByDevice({ deviceID: device }, constants.MONGOOSE_QUERY.NO_ID)
                .then(records => {
                    resolve(records)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    getLatestDeviceRecord(condition) {
        let record = {}
        return new Promise((resolve, reject) => {
            // Get AQI records.
            aqiValueRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.MONGOOSE_QUERY.NO_ID_DEVICEID_DATE)
                .then(values => {
                    if (values.length > 0) {
                        record = values[0]
                        // Get date, sound and temparature.
                        recordRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.MONGOOSE_QUERY.DATE_SOUND_TEMP_UV_HUMIDITY)
                            .then(records => {
                                record._doc.temperature = records[0].temperature
                                record._doc.sound = records[0].sound
                                record._doc.utcDateTime = records[0].utcDateTime
                                record._doc.uv = records[0].uv
                                record._doc.humidity = records[0].humidity
                                resolve(record)
                            })
                            .catch(err => {
                                reject({ message: err })
                            })
                    } else {
                        resolve(record)
                    }
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new RecordService()