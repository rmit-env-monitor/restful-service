const recordRepo = require('../../../DAL/repositories/record-repository')
const constants = require('../../../utilities/constants')

class RecordService {
    async getRecordsByDevice(device) {
        return await recordRepo.getRecordsByDevice({ deviceID: device }, constants.MONGOOSE_QUERY.NO_ID)
    }

    async getLatestDeviceRecord(condition) {
        const records = await recordRepo.getLatestDeviceRecord({ deviceID: condition }, '-_id', 1, constants.MONGOOSE_QUERY.NO_RAW_DATA)
        return records[0]
    }
}

module.exports = new RecordService()