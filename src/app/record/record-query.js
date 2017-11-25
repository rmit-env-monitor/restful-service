const { GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql')

const recordService = require('./record-service')
const Record = require('../graphql-schema/models/record-type')

module.exports = {
  getRecordsByDevice: {
    type: new GraphQLList(Record),
    resolve(parent, args) {
      return recordService.getRecordsByDevice(parent._id)
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