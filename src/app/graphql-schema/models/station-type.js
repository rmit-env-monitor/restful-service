const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const { getRecords, getLatestRecord } = require('../../record/record-query')

module.exports = new GraphQLObjectType({
  name: 'Station',
  fields: () => ({
    _id: { type: GraphQLID },
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
    city: { type: GraphQLString },
    district: { type: GraphQLString },
    records: getRecords,
    latestRecord: getLatestRecord
  })
})