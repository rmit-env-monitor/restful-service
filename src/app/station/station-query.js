const { GraphQLID, GraphQLNonNull } = require('graphql')

const stationService = require('./station-service')
const Staion = require('../graphql-schema/models/station-type')

module.exports = {
  station: {
    type: Staion,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve(parent, { id }) {
      return stationService.getStation(id)
    }
  }
}