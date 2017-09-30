const Promise = global.Promise
const redis = global.redis

const deviceRepo = require('../../../DAL/repositories/device-repository')
const recordService = require('../../record/web/record-service')
const constants = require('../../../utilities/constants')

class DeviceService {
    async getDevicesByCityDistrict(city, district) {
        const deviceListKey = city + '_' + district + '_key'
        const condition = { city: city, district: district }
        const redisResult = await this._retrieveRedisData(deviceListKey)

        if (redisResult.err) {
            return { message: redisResult.err }
        } else if (redisResult.reply) {
            return await this._getDeviceLastestRecord(JSON.parse(redisResult.reply), district)
        } else {
            const devices = await deviceRepo.getDevicesByCityDistrict(condition, constants.MONGOOSE_QUERY.ID_NAME_LAT_LNG)
            redis.set(deviceListKey, JSON.stringify(devices))
            redis.expire(deviceListKey, constants.ONE_DAY_EXPIRE)

            return await this._getDeviceLastestRecord(devices, district)
        }
    }

    async getAvailableCities() {
        const redisValue = this._retrieveRedisData(constants.CITY_LIST)

        if (redisValue.err) {
            return { message: redisValue.err }
        } else if (redisValue.reply) {
            return JSON.parse(redisValue.reply)
        } else {
            const cities = await deviceRepo.getAvailableCities()
            redis.set(constants.CITY_LIST, JSON.stringify(cities))
            redis.expire(constants.CITY_LIST, constants.ONE_DAY_EXPIRE)
            return cities
        }
    }

    async getAvailableDistrictsByCity(city) {
        const key = city + '_districts'
        const redisValue = this._retrieveRedisData(key)

        if (redisValue.err) {
            return { message: redisValue.err }
        } else if (redisValue.reply) {
            return JSON.parse(redisValue.reply)
        } else {
            const districts = await deviceRepo.getAvailableDistrictsByCity(city)
            redis.set(key, JSON.stringify(districts))
            redis.expire(key, constants.ONE_DAY_EXPIRE)
            return districts
        }
    }

    async _getDeviceLastestRecord(devices, district) {
        const deviceListLength = devices.length
        for (let index = 0; index < deviceListLength; index++) {
            const record = await recordService.getLatestDeviceRecord(devices[index]._id)
            if ('_doc' in devices[index]) {
                devices[index]._doc.district = district
                devices[index]._doc.record = record
            } else {
                devices[index].record = record
                devices[index].district = district
            }
        }

        return devices
    }

    _retrieveRedisData(deviceListKey) {
        return new Promise((resolve, reject) => {
            redis.get(deviceListKey, (err, reply) => {
                resolve({ err: err, reply: reply })
            })
        })
    }
}

module.exports = new DeviceService()