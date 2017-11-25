const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  })
})