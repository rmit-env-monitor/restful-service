const { GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql')

const recordService = require('./record-service')
const Record = require('../graphql-schema/models/record-type')

module.exports = {
  getRecords: {
    type: new GraphQLList(Record),
    resolve(parent) {
      return recordService.getRecordsByDevice(parent._id)
    }
  },
  getLatestRecord: {
    type: Record,
    resolve(parent) {
      return recordService.getLatestDeviceRecord(parent._id)
    }
  }
}