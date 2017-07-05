const Promise = global.Promise
const redis = global.redis
const q = require('q')

const deviceRepo = require('../../DAL/repositories/device-repository')
const recordService = require('./record-service')
const constants = require('../../utilities/constants')

class DeviceService {
    getDevicesByCityDistrict(city, district) {
        const deviceListKey = city + '_' + district + '_key'
        const condition = { city: city, district: district }

        return new Promise((resolve, reject) => {
            redis.get(deviceListKey, (err, reply) => {
                if (err) {
                    reject({ message: err })
                } else if (reply) {
                    this.getDeviceLastestRecord(JSON.parse(reply), district)
                        .then(deviceList => {
                            resolve(deviceList)
                        })
                        .catch(err => {
                            reject({ message: err })
                        })
                } else {
                    deviceRepo.getDevicesByCityDistrict(condition, constants.MONGOOSE_QUERY.ID_NAME_LAT_LNG)
                        .then(devices => {
                            redis.set(deviceListKey, JSON.stringify(devices))
                            redis.expire(deviceListKey, constants.ONE_DAY_EXPIRE)
                            this.getDeviceLastestRecord(devices, district)
                                .then(deviceList => {
                                    resolve(deviceList)
                                })
                                .catch(err => {
                                    reject({ message: err })
                                })
                        })
                        .catch(err => {
                            reject({ message: err })
                        })
                }
            })
        })
    }

    getAvailableCities() {
        return new Promise((resolve, reject) => {
            redis.get(constants.CITY_LIST, (err, reply) => {
                if (err) {
                    reject({ message: err })
                } else if (reply) {
                    resolve(JSON.parse(reply))
                } else {
                    deviceRepo.getAvailableCities()
                        .then(cities => {
                            redis.set(constants.CITY_LIST, JSON.stringify(cities))
                            redis.expire(constants.CITY_LIST, constants.ONE_DAY_EXPIRE)
                            resolve(cities)
                        })
                        .catch(err => {
                            reject({ message: err })
                        })
                }
            })
        })
    }

    getAvailableDistrictsByCity(city) {
        const key = city + '_districts'
        return new Promise((resolve, reject) => {
            redis.get(key, (err, reply) => {
                if (err) {
                    reject({ message: err })
                } else if (reply) {
                    resolve(JSON.parse(reply))
                } else {
                    deviceRepo.getAvailableDistrictsByCity(city)
                        .then(districts => {
                            redis.set(key, JSON.stringify(districts))
                            redis.expire(key, constants.ONE_DAY_EXPIRE)
                            resolve(districts)
                        })
                        .catch(err => {
                            reject({ message: err })
                        })

                }
            })
        })
    }

    //--- Private functions ---//

    getDeviceLastestRecord(devices, district) {
        const deviceListLength = devices.length
        const promises = []
        return new Promise((resolve, reject) => {
            for (let index = 0; index < deviceListLength; index++) {
                let promise = recordService.getLatestDeviceRecord(devices[index]._id)
                    .then(record => {
                        if ('_doc' in devices[index]) {
                            devices[index]._doc.district = district
                            devices[index]._doc.record = record
                        } else {
                            devices[index].record = record
                            '_doc' in devices[index] ?  : devices[index].district = district
                        }
                    })
                    .catch(err => {
                        reject({ message: err })
                    })
                promises.push(promise)
            }

            q.all(promises).then(() => {
                resolve(devices)
            })
        })
    }
}

module.exports = new DeviceService()