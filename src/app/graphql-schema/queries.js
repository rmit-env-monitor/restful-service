const { GraphQLObjectType } = require('graphql')

const nearbyQueries = require('../nearby/nearby-query')
const recordQuery = require('../record/record-query')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    ...nearbyQueries,
    ...recordQuery
  })
})