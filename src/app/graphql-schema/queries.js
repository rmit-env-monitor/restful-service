const { GraphQLObjectType } = require('graphql')

const nearbyQueries = require('../nearby/nearby-query')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    ...nearbyQueries
  })
})