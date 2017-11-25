const { GraphQLObjectType } = require('graphql')

const nearbyQueries = require('../nearby/nearby-query')
const { getLatestDeviceRecord } = require('../record/record-query')
const stationQuery = require('../station/station-query')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    ...nearbyQueries,
    ...stationQuery,
    getLatestDeviceRecord
  })
})