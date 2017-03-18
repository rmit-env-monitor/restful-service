const Promise = global.Promise

const deviceRepo = require('../../DAL/repositories/device-repository')
const constants = require('../../utilities/constants')

class DeviceService {
    getAllDevices() {
        return new Promise((resolve, reject) => {
            deviceRepo.getAllDevices(constants.NO_ID)
                .then((devices) => {
                    resolve(devices)
                })
                .catch((err) => {
                    reject({ message: err })
                })
        })
    }
}

module.exports = new DeviceService()