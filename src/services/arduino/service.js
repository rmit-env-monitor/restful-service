const recordRepo = require('../../DAL/repositories/record-repository')

class ArduinoService {
    addNewRecord(rawData) {
        let data = {
            deviceID: rawData[0],
            utcDateTime: rawData[1],
            no: rawData[2],
            so2: rawData[3],
            pm2: rawData[4],
            pm10: rawData[5],
            o3: rawData[6],
            co: rawData[7],
            sound: rawData[8],
            uv: rawData[9]
        }
        recordRepo.addNewRecord(data)
    }
}

module.exports = new ArduinoService()