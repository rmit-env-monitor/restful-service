const jsonQuery = require('json-query')

const data = require('../../../utilities/nearby-data.json')

class NearbyService {
  getNearbyRecord(city, district) {
    const value = jsonQuery(`[*city=${city} & district=${district}]`, { data }).value
    return value[0]
  }
}

module.exports = new NearbyService()