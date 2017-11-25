const stationRepo = require('../../DAL/repositories/device-repository')
const { MONGOOSE_QUERY } = require('../../utilities/constants')

class StationService {
  async getStation(id) {
    const value = await stationRepo.findDeviceById({ _id: id }, MONGOOSE_QUERY.NO_ID)
    return value
  }
}

module.exports = new StationService()