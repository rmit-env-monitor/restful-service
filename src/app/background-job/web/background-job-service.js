const redis = global.redis
const constants = require('../../../utilities/constants')
const rankingRepo = require('../../../DAL/repositories/ranking-repository')

class BackgroundJobService {
    async getStationRanking(city, deviceId) {
        const ranking = await rankingRepo.getLatestRankingRecord({}, '-_id', 1, constants.MONGOOSE_QUERY.NO_ID)
        let value = ranking[0].result
        
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
        if (requestStationIndex > 9) {
            stations.push(
                {
                    aqi: '--',
                    district: '--',
                    id: '--',
                    idx: '--',
                    name: '----'
                },
                value.stations[requestStationIndex]
            )
        }

        return stations
    }

    _retrieveRedisData(key) {
        return new Promise((resolve, reject) => {
            redis.get(key, (err, reply) => {
                resolve({ err: err, reply: reply })
            })
        })
    }
}

module.exports = new BackgroundJobService()