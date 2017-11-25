const { GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql')

const recordService = require('./record-service')
const Record = require('../graphql-schema/models/record-type')

module.exports = {
  getRecordsByDevice: {
    type: new GraphQLList(Record),
    args: {
      deviceID: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve(parent, { deviceID }) {
      return recordService.getRecordsByDevice(deviceID)
    }
  },
  getLatestDeviceRecord: {
    type: Record,
    args: {
      deviceID: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve(parent, { deviceID }) {
      return recordService.getLatestDeviceRecord(deviceID)
    }
  }
}