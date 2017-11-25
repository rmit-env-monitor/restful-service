const jsonQuery = require('json-query')

class NearbyService {
  getNearbyRecord(city, district) {
    const data = require('../../utilities/nearby-data.json')
    const value = jsonQuery(`[*city=${city} & district=${district}]`, { data }).value
    return value[0]
  }
}

module.exports = new NearbyService()