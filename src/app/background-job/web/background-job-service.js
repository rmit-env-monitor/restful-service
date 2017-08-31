const redis = global.redis
const constants = require('../../../utilities/constants')

class BackgroundJobService {
    getStationRanking(city, deviceId) {
        return new Promise((resolve, reject) => {
            redis.get(constants.BACKGROUND_JOB.STATION_RANKING, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    let value = JSON.parse(result)
                    // Find the current city.
                    value = value.find(element => {
                        return element.city === city
                    })

                    // Find current latest device
                    const requestStationIndex = value.stations.findIndex(element => {
                        return element.id === deviceId
                    })

                    // Get top 10 stations.
                    const stations = value.stations.slice(0, 10)

                    // Include request station in list
                    if (requestStationIndex > 10) stations.push(value.stations[requestStationIndex])
                    resolve(stations)
                }
            })
        })
    }
}

module.exports = new BackgroundJobService()