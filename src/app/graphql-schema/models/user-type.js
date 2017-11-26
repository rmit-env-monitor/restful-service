const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    username: { type: GraphQLString },
    token: { type: GraphQLString }
  })
})