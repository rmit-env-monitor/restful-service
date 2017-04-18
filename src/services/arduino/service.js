const recordRepo = require('../../DAL/repositories/record-repository')

class ArduinoService {
    addNewRecord(data) {        
        recordRepo.addNewRecord(data)
    }
}

module.exports = new ArduinoService()