const Promise = global.Promise
const q = require('q')

const deviceRepo = require('../../DAL/repositories/device-repository')
const recordService = require('./record-service')

class DeviceService {
    getDevicesByCityDistrict(city, district) {
        const condition = {
            city: city,
            district: district
        }
        return new Promise((resolve, reject) => {
            deviceRepo.getDevicesByCityDistrict(condition, '_id name lat lng').then(devices => {
                this.getDeviceLastestRecord(devices).then((deviceList) => {
                    resolve(deviceList)
                })
            }).catch(err => {
                reject({ message: err })
            })
        })
    }

    getOneDeviceByCityDistrict(city, district) {
        const condition = {
            city: city,
            district: district
        }
        return new Promise((resolve, reject) => {
            deviceRepo.getOneDeviceByCityDistrict(condition, '_id name')
                .then(devices => {
                    devices ? resolve([devices]) : resolve([])
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    getAvailableCities() {
        return new Promise((resolve, reject) => {
            deviceRepo.getAvailableCities()
                .then(cities => {
                    resolve(cities)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    getAvailableDistrictsByCity(city) {
        return new Promise((resolve, reject) => {
            deviceRepo.getAvailableDistrictsByCity(city)
                .then(districts => {
                    resolve(districts)
                })
                .catch(err => {
                    reject({ message: err })
                })
        })
    }

    //--- Private functions ---//
    
    getDevicesCopy(devices) {
        const devicesCopy = []
        for (let device of devices) {
            const newDevice = {}
            newDevice._id = device._id
            newDevice.name = device.name
            newDevice.lat = device.lat
            newDevice.lng = device.lng
            devicesCopy.push(newDevice)
        }
        return devicesCopy
    }

    getDeviceLastestRecord(devices) {
        const deviceList = this.getDevicesCopy(devices)
        const deviceListLength = deviceList.length
        const promises = []
        return new Promise((resolve, reject) => {
            for (let index = 0; index < deviceListLength; index++) {
                let promise = recordService.getLatestDeviceRecord(deviceList[index]._id)
                    .then(record => {
                        deviceList[index].record = record
                    })
                promises.push(promise)
            }

            q.all(promises).then(() => {
                resolve(deviceList)
            })
        })
    }
}

module.exports = new DeviceService()