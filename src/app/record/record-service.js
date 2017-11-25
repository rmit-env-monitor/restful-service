const recordRepo = require('../../DAL/repositories/record-repository')
const constants = require('../../utilities/constants')

class RecordService {
  async getRecordsByDevice(deviceID) {
    const value = await recordRepo.getRecordsByDevice({ deviceID }, constants.MONGOOSE_QUERY.NO_ID)
    return value
  }

  async getLatestDeviceRecord(deviceID) {
    const records = await recordRepo.getLatestDeviceRecord({ deviceID }, '-_id', 1, constants.MONGOOSE_QUERY.NO_ID)
    return records[0]
  }
}

module.exports = new RecordService()